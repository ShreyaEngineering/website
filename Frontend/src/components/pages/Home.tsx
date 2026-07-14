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
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap" rel="stylesheet" />
      {/* Background photo — replace src with a real workshop photo:
          a lathe in motion, sparks from welding, or a wide shop floor shot
          all work well. Keep it landscape, at least 1920x1080. */}
      <img
        src="/images/gallery/pic4.jpeg"
        alt=""
        onLoad={() => setImageLoaded(true)}
        loading="eager"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Blueprint grid placeholder shown until the photo loads —
          costs nothing (pure CSS), so there's no layout jump and no spinner. */}
      {!imageLoaded && (
        <div
          className="absolute inset-0 bg-[#17181B] bg-[linear-gradient(#2A2C31_1px,transparent_1px),linear-gradient(90deg,#2A2C31_1px,transparent_1px)] bg-[size:32px_32px]"
        />
      )}

      {/* Darkening overlay so text stays legible over any photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111214] via-[#111214]/85 to-[#111214]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-transparent" />

      {/* Subtle blueprint grid texture over the whole hero, very low opacity */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.03]" />

      {/* Drafting-style corner registration marks — quiet nod to technical drawings */}
      <div className="pointer-events-none absolute left-6 top-24 h-6 w-6 border-l border-t border-[#E8A33D]/40 md:left-10" />
      <div className="pointer-events-none absolute bottom-10 right-6 h-6 w-6 border-b border-r border-[#E8A33D]/40 md:right-10" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge — styled like a stamped part tag rather than a soft SaaS pill */}
          <div className="inline-flex items-center gap-2 rounded border border-[#E8A33D]/40 bg-[#E8A33D]/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D]">
            Trusted Engineering Solutions
          </div>

          <h1 className="mt-6 font-[Oswald,_sans-serif] text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#F1F0EC] md:text-6xl">
            Precision Engineering
            <br />
            <span className="bg-gradient-to-r from-[#E8A33D] to-[#C1541C] bg-clip-text text-transparent">
              Built for Industrial Excellence
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#B7B9BE]">
            Shreya Engineering Works specializes in hydraulic repair,
            lathe machining, fabrication, welding, and custom machine
            component manufacturing. We deliver reliable solutions with
            precision, durability, and on-time execution.
          </p>

          {/* Stats — styled as a single engraved nameplate, the page's signature element */}
          <div className="mt-9 inline-flex divide-x divide-[#3A3D43] rounded-lg border border-[#3A3D43] bg-[#1D1F23] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="px-6 py-4">
              <span className="block font-mono text-2xl font-semibold text-[#E8A33D]">
                15+
              </span>
              <span className="mt-1 block text-xs uppercase tracking-wide text-[#8B8D93]">
                Years Experience
              </span>
            </div>

            <div className="px-6 py-4">
              <span className="block font-mono text-2xl font-semibold text-[#E8A33D]">
                250+
              </span>
              <span className="mt-1 block text-xs uppercase tracking-wide text-[#8B8D93]">
                Projects Completed
              </span>
            </div>

            <div className="px-6 py-4">
              <span className="block font-mono text-2xl font-semibold text-[#E8A33D]">
                120+
              </span>
              <span className="mt-1 block text-xs uppercase tracking-wide text-[#8B8D93]">
                Industrial Clients
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#services">
              Explore Services
            </MagneticButton>

            <MagneticButton href="tel:+918826355698" variant="secondary">
              Call 8826355698
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;