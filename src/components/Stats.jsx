import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

  useEffect(() => {
    let controls;
    if (isInView) {
      controls = animate(motionValue, value, { duration: 2 });
    }
    return () => controls?.stop();
  }, [isInView, motionValue, value]);

  return (
    <motion.h2 ref={ref} className="text-5xl font-bold text-cyan-400">
      {rounded}
    </motion.h2>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-28 px-6 text-center max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-16 rounded-3xl bg-white/5 border border-white/10 py-14">
        <div>
          <Counter value={250} />
          <p className="text-slate-300 mt-2">Projects Completed</p>
        </div>
        <div>
          <Counter value={15} />
          <p className="text-slate-300 mt-2">Years Experience</p>
        </div>
        <div>
          <Counter value={120} />
          <p className="text-slate-300 mt-2">Industrial Clients</p>
        </div>
      </div>
    </section>
  );
}
