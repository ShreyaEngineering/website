import { motion } from "framer-motion";
import { useState } from "react";
import Gear3D from "../Gear3D";
import MagneticButton from "../MagneticButton";


const Hero = () => {

  const [gearLoaded, setGearLoaded] = useState(false);

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
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Trusted Engineering Solutions
        </div>

        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
          Precision Engineering
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Built for Industrial Excellence
          </span>
        </h1>

        <p className="mt-6 text-slate-300 text-lg max-w-xl leading-relaxed">
          Shreya Engineering Works specializes in hydraulic repair,
          lathe machining, fabrication, welding, and custom machine
          component manufacturing. We deliver reliable solutions with
          precision, durability, and on-time execution.
        </p>

        {/* Quick Stats */}
        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <div>
            <span className="block text-2xl font-bold text-cyan-400">
              15+
            </span>
            <span className="text-slate-400">
              Years Experience
            </span>
          </div>

          <div>
            <span className="block text-2xl font-bold text-cyan-400">
              250+
            </span>
            <span className="text-slate-400">
              Projects Completed
            </span>
          </div>

          <div>
            <span className="block text-2xl font-bold text-cyan-400">
              120+
            </span>
            <span className="text-slate-400">
              Industrial Clients
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton href="#services">
            Explore Services
          </MagneticButton>

          <MagneticButton
            href="tel:+918826355698"
            variant="secondary"
          >
            Call 8826355698
          </MagneticButton>
        </div>
      </motion.div>

      <div className="w-full sm:w-[360px] md:w-[430px] h-[280px] sm:h-[340px] md:h-[430px] rounded-3xl overflow-hidden flex-none">
        <div className="relative w-full h-full">

       {!gearLoaded && (
  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
    
    {/* Rotating outer ring */}
    <div className="relative">
      <div className="w-32 h-32 rounded-full border border-cyan-500/20" />

      <div className="absolute inset-0 w-32 h-32 rounded-full border-t-2 border-cyan-400 animate-[spin_4s_linear_infinite]" />

      <div className="absolute inset-4 w-24 h-24 rounded-full border border-cyan-400/30 animate-pulse" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl text-cyan-400">
          ⚙
        </span>
      </div>
    </div>

    {/* Status text */}
    <div className="mt-8 text-center">
      <p className="text-cyan-400 font-mono tracking-[0.25em] text-xs uppercase">
        Initializing Engineering System
      </p>

      <div className="mt-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span className="text-slate-400 text-xs font-mono">
          Loading Gear Assembly...
        </span>
      </div>
    </div>
  </div>
)}

          <Gear3D onReady={() => setGearLoaded(true)} />
        </div>
      </div>
    </section>
  );
};

export default Hero;