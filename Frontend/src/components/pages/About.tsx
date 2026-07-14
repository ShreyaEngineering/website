import { motion } from "framer-motion";
import { FiAward, FiSettings, FiTool } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#EDEEEA] px-6 py-24 text-[#1C2126]"
    >
      {/* Fine ruled grid — drafting-sheet texture, barely there */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#1C2126_1px,transparent_1px),linear-gradient(90deg,#1C2126_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-6xl"
      >
        <div className="relative border border-[#1C2126]/15 bg-[#F7F6F1] p-8 md:p-12">
          {/* Corner registration marks, ink navy this time */}
          <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-[#1C2126]/30" />
          <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#1C2126]/30" />

          <div className="text-center">
            <span className="inline-block border border-[#1C2126]/25 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#B5721E]">
              Who We Are
            </span>

            <h2 className="mt-5 font-[Oswald,_sans-serif] text-3xl font-bold uppercase tracking-tight text-[#1C2126] md:text-5xl">
              About Our Workshop
            </h2>

            {/* Dimension-line motif — the section's signature detail,
                styled after the arrow+tick marks on a technical drawing */}
            <div className="mx-auto mt-5 flex w-40 items-center justify-center gap-1.5 text-[#B5721E]">
              <span className="h-px flex-1 bg-current" />
              <span className="text-xs">◆</span>
              <span className="h-px flex-1 bg-current" />
            </div>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-[#4A4F55]">
              <span className="font-semibold text-[#B5721E]">
                Shreya Engineering Works
              </span>{" "}
              is a second unit of{" "}
              <span className="font-semibold text-[#B5721E]">
                Shyam Machine Shop
              </span>
              , dedicated to precision machining, hydraulic work,
              fabrication, welding, machine maintenance, and industrial
              repair services. We combine decades of hands-on experience
              with modern engineering practices to deliver reliable,
              durable, and production-ready solutions for industries,
              workshops, and manufacturing units.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#1C2126]/15 bg-[#1C2126]/15 md:grid-cols-3">
            <div className="bg-[#F7F6F1] p-8 text-center transition-colors duration-200 hover:bg-[#EFEEE7]">
              <FiTool className="mx-auto mb-4 text-3xl text-[#B5721E]" />
              <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[#1C2126]">
                Precision Work
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7075]">
                High-accuracy machining and component repair for
                industrial applications.
              </p>
            </div>

            <div className="bg-[#F7F6F1] p-8 text-center transition-colors duration-200 hover:bg-[#EFEEE7]">
              <FiSettings className="mx-auto mb-4 text-3xl text-[#B5721E]" />
              <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[#1C2126]">
                Modern Solutions
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7075]">
                Engineering-driven fabrication and maintenance solutions
                tailored to customer requirements.
              </p>
            </div>

            <div className="bg-[#F7F6F1] p-8 text-center transition-colors duration-200 hover:bg-[#EFEEE7]">
              <FiAward className="mx-auto mb-4 text-3xl text-[#B5721E]" />
              <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[#1C2126]">
                Trusted Quality
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7075]">
                Commitment to durability, workmanship, and long-term
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;