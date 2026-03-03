import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 text-white flex justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6 text-center">
          About Our Workshop
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Shreya Engineering Works is a second unit of Shyam Machine Shop,
          focused on precision machining, fabrication, and dependable industrial
          mechanical solutions. We combine practical field experience with modern
          engineering standards to ensure durable, production-ready outcomes.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
