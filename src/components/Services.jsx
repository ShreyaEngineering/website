import { motion } from "framer-motion";
import { FiCpu, FiTool, FiSettings, FiBox, FiActivity, FiTruck } from "react-icons/fi";

const services = [
  { title: "Hydraulic work", icon: FiCpu },
  { title: "Lathe Work", icon: FiTool },
  { title: "Industrial Fabrication", icon: FiSettings },
  { title: "Custom Machine Parts", icon: FiBox },
  { title: "Welding & Metal Works", icon: FiActivity },
  { title: "Heavy Equipment Repair", icon: FiTruck },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-slate-300 text-center max-w-2xl mx-auto mb-16">
        Dedicated machining and fabrication support for industrial workshops,
        manufacturing units, and plant maintenance teams.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-cyan-300/40 transition-colors"
            >
              <Icon className="text-cyan-300 text-2xl mb-5" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-slate-300/85 mt-4">
                High precision industrial solutions with quality assurance.
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
