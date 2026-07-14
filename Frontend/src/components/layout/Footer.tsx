import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiMessageCircle,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0B0B0C] text-[#EDEDED]">
      {/* Hazard stripe — same motif as the navbar, bookending the page */}
      <div
        className="h-[3px] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #F4B400 0px, #F4B400 14px, #0B0B0C 14px, #0B0B0C 28px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border-2 border-[#F4B400] font-mono text-sm font-bold text-[#F4B400]">
                SEW
              </span>
              <h3 className="font-[Oswald,_sans-serif] text-lg font-semibold uppercase tracking-[0.1em]">
                Shreya Engineering Works
              </h3>
            </div>

            <p className="mt-5 leading-relaxed text-[#9A9A9E]">
              Precision engineering, fabrication, machining, and
              industrial solutions tailored to meet modern manufacturing
              needs. We deliver reliable, high-quality workmanship with
              a strong focus on accuracy, durability, and efficiency.
            </p>

            {/* Small stamped detail — a nod to a workshop certification seal */}
            <div className="mt-6 inline-flex items-center gap-2 border border-[#3A3A3D] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#7A7A7E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F4B400]" />
              Est. workshop unit — Shyam Machine Shop
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F4B400]">
              Quick links
            </h4>

            <ul className="space-y-3 text-[#9A9A9E]">
              <li>
                <a href="#about" className="transition-colors hover:text-[#EDEDED]">
                  About us
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-[#EDEDED]">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="transition-colors hover:text-[#EDEDED]">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#EDEDED]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F4B400]">
              Our services
            </h4>

            <ul className="space-y-3 text-[#9A9A9E]">
              <li>Hydraulic work</li>
              <li>Lathe work</li>
              <li>Industrial fabrication</li>
              <li>Custom machine parts</li>
              <li>Welding and metal works</li>
              <li>Maintenance services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F4B400]">
              Contact
            </h4>

            <div className="space-y-4 text-[#9A9A9E]">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-[#F4B400]" />
                <span>Sariswa Bazar, West Champaran, Bihar</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-[#F4B400]" />
                <span>+91 88263 55698</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMessageCircle className="shrink-0 text-[#F4B400]" />
                <span>WhatsApp support available</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="shrink-0 text-[#F4B400]" />
                <span>shreyaengineeringworkshop0@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FiClock className="shrink-0 text-[#F4B400]" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#232326] pt-8 md:flex-row">
          <p className="text-center font-mono text-xs uppercase tracking-[0.1em] text-[#5A5A5E] md:text-left">
            © {currentYear} Shreya Engineering Works. All rights reserved.
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#9A9A9E] transition-colors hover:text-[#F4B400]"
          >
            Back to top
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;