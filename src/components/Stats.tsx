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
  const ref = useRef<HTMLHeadingElement | null>(null);

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
    <motion.h2
      ref={ref}
      className="text-5xl font-bold text-cyan-400"
    >
      {count}
      {suffix}
    </motion.h2>
  );
};

interface StatItem {
  value: number;
  label: string;
}

const stats: StatItem[] = [
  {
    value: 250,
    label: "Projects Completed",
  },
  {
    value: 15,
    label: "Years Experience",
  },
  {
    value: 120,
    label: "Industrial Clients",
  },
];

const Stats = () => {
  return (
    <section
      id="stats"
      className="py-28 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our Achievements
        </h2>

        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Delivering quality engineering solutions with precision,
          innovation, and customer satisfaction for years.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 rounded-3xl bg-white/5 border border-white/10 py-14 px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center"
          >
            <Counter value={stat.value} />

            <p className="text-slate-300 mt-3 text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;