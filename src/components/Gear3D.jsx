import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const TAU = Math.PI * 2;

function p(radius, angle) {
  return new THREE.Vector2(Math.cos(angle) * radius, Math.sin(angle) * radius);
}

function arc(shape, radius, from, to, steps = 4) {
  let a0 = from;
  let a1 = to;
  while (a1 <= a0) a1 += TAU;
  for (let i = 1; i <= steps; i += 1) {
    const t = i / steps;
    const a = a0 + (a1 - a0) * t;
    const v = p(radius, a);
    shape.lineTo(v.x, v.y);
  }
}

function makeGearShape({
  teeth = 28,
  pitchRadius = 1.4,
  addendum = 0.16,
  dedendum = 0.18,
  boreRadius = 0.34,
  toothTopRatio = 0.34,
  toothRootRatio = 0.62,
}) {
  const shape = new THREE.Shape();
  const step = TAU / teeth;
  const tip = pitchRadius + addendum;
  const root = Math.max(pitchRadius - dedendum, boreRadius + 0.18);

  const halfTop = (step * toothTopRatio) / 2;
  const halfRoot = (step * toothRootRatio) / 2;

  const start = p(root, -step / 2);
  shape.moveTo(start.x, start.y);

  for (let i = 0; i < teeth; i += 1) {
    const c = i * step;
    const valleyStart = c - step / 2;
    const rootLeft = c - halfRoot;
    const topLeft = c - halfTop;
    const topRight = c + halfTop;
    const rootRight = c + halfRoot;
    const valleyEnd = c + step / 2;

    arc(shape, root, valleyStart, rootLeft, 2);

    const v1 = p(tip, topLeft);
    shape.lineTo(v1.x, v1.y);

    arc(shape, tip, topLeft, topRight, 3);

    const v2 = p(root, rootRight);
    shape.lineTo(v2.x, v2.y);

    arc(shape, root, rootRight, valleyEnd, 2);
  }

  const hole = new THREE.Path();
  hole.absarc(0, 0, boreRadius, 0, TAU, true);
  shape.holes.push(hole);

  return { shape, pitchRadius, boreRadius };
}

function Gear({
  teeth,
  moduleSize,
  depth,
  speed,
  position,
  color = "#4f5a66",
  hubColor = "#2e3640",
}) {
  const ref = useRef(null);
  const pitchRadius = (moduleSize * teeth) / 2;

  const { shape, boreRadius } = useMemo(
    () =>
      makeGearShape({
        teeth,
        pitchRadius,
        addendum: moduleSize * 0.55,
        dedendum: moduleSize * 0.65,
        boreRadius: pitchRadius * 0.24,
      }),
    [moduleSize, pitchRadius, teeth]
  );

  const geometry = useMemo(
    () =>
      new THREE.ExtrudeGeometry(shape, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.028,
        bevelSize: 0.026,
        bevelSegments: 3,
        curveSegments: 48,
      }),
    [depth, shape]
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += speed * delta;
  });

  return (
    <group position={position}>
      <mesh ref={ref} geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          color={color}
          metalness={0.92}
          roughness={0.46}
        />
      </mesh>
      <mesh position={[0, 0, depth + 0.018]}>
        <cylinderGeometry args={[boreRadius * 0.56, boreRadius * 0.56, 0.09, 36]} />
        <meshStandardMaterial color={hubColor} metalness={0.9} roughness={0.44} />
      </mesh>
    </group>
  );
}

function Assembly() {
  const group = useRef(null);
  const m = 0.115;
  const z1 = 30;
  const z2 = 20;
  const z3 = 16;
  const r1 = (m * z1) / 2;
  const r2 = (m * z2) / 2;
  const r3 = (m * z3) / 2;

  const w1 = 0.82;
  const w2 = -w1 * (z1 / z2);
  const w3 = -w1 * (z1 / z3);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.x = 0.18 + Math.sin(state.clock.elapsedTime * 0.4) * 0.012;
    group.current.rotation.y = 0.14 + Math.cos(state.clock.elapsedTime * 0.45) * 0.012;
  });

  return (
    <group ref={group} scale={0.82} position={[0, -0.44, 0]}>
      <Gear
        teeth={z1}
        moduleSize={m}
        depth={0.46}
        speed={w1}
        position={[0, 0, 0]}
        color="#5a6572"
        hubColor="#3a434e"
      />
      <Gear
        teeth={z2}
        moduleSize={m}
        depth={0.42}
        speed={w2}
        position={[r1 + r2, 0, 0.015]}
        color="#414b57"
        hubColor="#2c333d"
      />
      <Gear
        teeth={z3}
        moduleSize={m}
        depth={0.4}
        speed={w3}
        position={[-Math.cos(0.9) * (r1 + r3), Math.sin(0.9) * (r1 + r3), -0.015]}
        color="#4a5562"
        hubColor="#313a44"
      />
    </group>
  );
}

export default function Gear3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 6.8], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      style={{ background: "transparent" }}
      dpr={[1, 1.4]}
      shadows
    >
      <ambientLight intensity={0.28} />
      <directionalLight position={[4, 6, 4]} intensity={0.8} castShadow />
      <directionalLight position={[-4, -2, 3]} intensity={0.22} />

      <Assembly />
      <ContactShadows opacity={0.28} scale={10} blur={2.4} far={7} resolution={256} />
      <Environment preset="night" />
    </Canvas>
  );
}
