import {
  motion,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter = ({ value, suffix = "+" }: CounterProps) => {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-40px",
  });

  const motionValue = useMotionValue(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined;
    const unsubscribe = motionValue.on("change", (latest) => {
      setCount(Math.floor(latest));
    });

    if (isInView) {
      controls = animate(motionValue, value, {
        duration: 2,
      });
    }

    return () => {
      unsubscribe();
      controls?.stop();
    };
  }, [isInView, motionValue, value]);

  return (
    <p ref={ref} className="font-mono text-4xl font-bold text-[#1C2126] md:text-5xl">
      {count}
      {suffix}
    </p>
  );
};

interface StatItem {
  value: number;
  label: string;
  arc: number; // 0-100, how far around the dial this stat's needle sits
}

const stats: StatItem[] = [
  { value: 250, label: "Projects completed", arc: 78 },
  { value: 15, label: "Years experience", arc: 45 },
  { value: 120, label: "Industrial clients", arc: 62 },
];

const Gauge = ({ arc }: { arc: number }) => {
  // Semi-circular gauge: 180deg sweep, needle rotates from -90deg to +90deg
  const angle = -90 + (arc / 100) * 180;

  return (
    <svg viewBox="0 0 120 66" className="mx-auto w-28">
      <path
        d="M 8 60 A 52 52 0 0 1 112 60"
        fill="none"
        stroke="#1C2126"
        strokeOpacity="0.12"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 8 60 A 52 52 0 0 1 112 60"
        fill="none"
        stroke="#B5721E"
        strokeOpacity="0.35"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={`${(arc / 100) * 163} 163`}
      />
      <g transform={`rotate(${angle} 60 60)`}>
        <line
          x1="60"
          y1="60"
          x2="60"
          y2="16"
          stroke="#B5721E"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <circle cx="60" cy="60" r="4" fill="#1C2126" />
    </svg>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="relative bg-[#EDEEEA] px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#1C2126_1px,transparent_1px),linear-gradient(90deg,#1C2126_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="inline-block border border-[#1C2126]/25 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#B5721E]">
            By the numbers
          </span>

          <h2 className="mt-5 font-[Oswald,_sans-serif] text-3xl font-bold uppercase tracking-tight text-[#1C2126] md:text-5xl">
            Our achievements
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#4A4F55]">
            Delivering quality engineering solutions with precision,
            innovation, and customer satisfaction for years.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#1C2126]/15 bg-[#1C2126]/15 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F7F6F1] px-8 py-12 text-center"
            >
              <Gauge arc={stat.arc} />
              <Counter value={stat.value} />
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-[#6B7075]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;