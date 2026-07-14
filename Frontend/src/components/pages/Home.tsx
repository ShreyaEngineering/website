import { motion } from "framer-motion";
import { useState } from "react";
import MagneticButton from "../MagneticButton";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#17181B]"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Background Image */}
      <img
        src="/images/gallery/pic4.jpeg"
        alt=""
        onLoad={() => setImageLoaded(true)}
        loading="eager"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Loading Placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-[#17181B] bg-[linear-gradient(#2A2C31_1px,transparent_1px),linear-gradient(90deg,#2A2C31_1px,transparent_1px)] bg-[size:32px_32px]" />
      )}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111214] via-[#111214]/85 to-[#111214]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-transparent" />

      {/* Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.03]" />

      {/* Corner Marks */}
      <div className="pointer-events-none absolute left-6 top-24 h-6 w-6 border-l border-t border-[#E8A33D]/40 md:left-10" />
      <div className="pointer-events-none absolute bottom-10 right-6 h-6 w-6 border-b border-r border-[#E8A33D]/40 md:right-10" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded border border-[#E8A33D]/40 bg-[#E8A33D]/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D]">
            Trusted Engineering Solutions
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-[Oswald,_sans-serif] text-3xl font-bold uppercase leading-[1.05] tracking-tight text-[#F1F0EC] sm:text-4xl md:text-6xl">
            Precision Engineering
            <br />
            <span className="bg-gradient-to-r from-[#E8A33D] to-[#C1541C] bg-clip-text text-transparent">
              Built for Industrial Excellence
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#B7B9BE] sm:text-lg">
            Shreya Engineering Works specializes in hydraulic repair,
            lathe machining, fabrication, welding, and custom machine
            component manufacturing. We deliver reliable solutions with
            precision, durability, and on-time execution.
          </p>

          

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
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
      </div>
    </section>
  );
};

export default Hero;