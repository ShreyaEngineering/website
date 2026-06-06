import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FiCpu,
  FiTool,
  FiSettings,
  FiBox,
  FiActivity,
  FiTruck,
} from "react-icons/fi";

interface Service {
  title: string;
  description: string;
  icon: IconType;
}

const services: Service[] = [
  {
    title: "Hydraulic Work",
    description:
      "Professional hydraulic system repair, maintenance, and component servicing for industrial machinery.",
    icon: FiCpu,
  },
  {
    title: "Lathe Work",
    description:
      "Precision turning, boring, threading, and machining services with high dimensional accuracy.",
    icon: FiTool,
  },
  {
    title: "Industrial Fabrication",
    description:
      "Custom fabrication solutions for structures, machine frames, industrial equipment, and assemblies.",
    icon: FiSettings,
  },
  {
    title: "Custom Machine Parts",
    description:
      "Manufacturing and replacement of machine components tailored to your exact specifications.",
    icon: FiBox,
  },
  {
    title: "Welding & Metal Works",
    description:
      "Expert welding, cutting, and metal fabrication services using modern industrial techniques.",
    icon: FiActivity,
  },
  {
    title: "Heavy Equipment Repair",
    description:
      "Comprehensive repair and maintenance services for industrial and heavy-duty machinery.",
    icon: FiTruck,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm font-medium mb-4">
          What We Do
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our Services
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto">
          Delivering reliable machining, fabrication, maintenance,
          and engineering solutions for industries, workshops,
          manufacturing units, and plant operations.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-cyan-300/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors">
                <Icon className="text-cyan-300 text-2xl" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-slate-300/85 leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;