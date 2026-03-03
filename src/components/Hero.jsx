import { motion } from "framer-motion";
import Gear3D from "./Gear3D";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
      

        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
          Precision Engineering
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Built for Industrial Excellence
          </span>
        </h1>

        <p className="mt-6 text-slate-300 text-lg max-w-xl">
          From custom machine components to heavy-duty fabrication, we deliver
          fast turnaround, high tolerance accuracy, and production-ready results.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton href="#services">Explore Services</MagneticButton>
          <MagneticButton href="tel:+918826355698" variant="secondary">
            Call 8826355698
          </MagneticButton>
        </div>
      </motion.div>

      <div className="w-full sm:w-[360px] md:w-[430px] h-[280px] sm:h-[340px] md:h-[430px] rounded-3xl overflow-hidden flex-none">
        <Gear3D />
      </div>
    </section>
  );
}
