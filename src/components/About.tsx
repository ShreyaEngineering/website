import { motion } from "framer-motion";
import { FiAward, FiSettings, FiTool } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm font-medium mb-4">
              Who We Are
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About Our Workshop
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">
              <span className="font-semibold text-cyan-300">
                Shreya Engineering Works
              </span>{" "}
              is a second unit of{" "}
              <span className="font-semibold text-cyan-300">
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

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <FiTool className="mx-auto text-3xl text-cyan-300 mb-4" />
              <h3 className="font-semibold text-xl mb-2">
                Precision Work
              </h3>
              <p className="text-slate-400">
                High-accuracy machining and component repair for
                industrial applications.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <FiSettings className="mx-auto text-3xl text-cyan-300 mb-4" />
              <h3 className="font-semibold text-xl mb-2">
                Modern Solutions
              </h3>
              <p className="text-slate-400">
                Engineering-driven fabrication and maintenance
                solutions tailored to customer requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <FiAward className="mx-auto text-3xl text-cyan-300 mb-4" />
              <h3 className="font-semibold text-xl mb-2">
                Trusted Quality
              </h3>
              <p className="text-slate-400">
                Commitment to durability, workmanship, and
                long-term customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;