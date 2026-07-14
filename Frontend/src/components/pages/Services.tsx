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
  code: string;
  title: string;
  description: string;
  icon: IconType;
}

const services: Service[] = [
  {
    code: "01",
    title: "Hydraulic Work",
    description:
      "Professional hydraulic system repair, maintenance, and component servicing for industrial machinery.",
    icon: FiCpu,
  },
  {
    code: "02",
    title: "Lathe Work",
    description:
      "Precision turning, boring, threading, and machining services with high dimensional accuracy.",
    icon: FiTool,
  },
  {
    code: "03",
    title: "Industrial Fabrication",
    description:
      "Custom fabrication solutions for structures, machine frames, industrial equipment, and assemblies.",
    icon: FiSettings,
  },
  {
    code: "04",
    title: "Custom Machine Parts",
    description:
      "Manufacturing and replacement of machine components tailored to your exact specifications.",
    icon: FiBox,
  },
  {
    code: "05",
    title: "Welding & Metal Works",
    description:
      "Expert welding, cutting, and metal fabrication services using modern industrial techniques.",
    icon: FiActivity,
  },
  {
    code: "06",
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
      className="relative bg-[#EDEEEA] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#1C2126_1px,transparent_1px),linear-gradient(90deg,#1C2126_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="inline-block border border-[#1C2126]/25 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#B5721E]">
            What We Do
          </span>

          <h2 className="mt-5 font-[Oswald,_sans-serif] text-3xl font-bold uppercase tracking-tight text-[#1C2126] md:text-5xl">
            Our Services
          </h2>

          <div className="mx-auto mt-5 flex w-40 items-center justify-center gap-1.5 text-[#B5721E]">
            <span className="h-px flex-1 bg-current" />
            <span className="text-xs">◆</span>
            <span className="h-px flex-1 bg-current" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-[#4A4F55]">
            Delivering reliable machining, fabrication, maintenance, and
            engineering solutions for industries, workshops,
            manufacturing units, and plant operations.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#1C2126]/15 bg-[#1C2126]/15 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-[#F7F6F1] p-8 transition-colors duration-200 hover:bg-[#EFEEE7]"
              >
                <span className="absolute right-6 top-6 font-mono text-xs text-[#1C2126]/25">
                  N°{service.code}
                </span>

                <div className="flex h-12 w-12 items-center justify-center border border-[#1C2126]/15 bg-[#EDEEEA] transition-colors duration-200 group-hover:border-[#B5721E]/40">
                  <Icon className="text-2xl text-[#B5721E]" />
                </div>

                <h3 className="mt-6 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[#1C2126]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#6B7075]">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;