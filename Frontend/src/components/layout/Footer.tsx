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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0B0B0C] text-[#EDEDED]">
      {/* Hazard Stripe */}
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
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[#F4B400] font-mono text-sm font-bold text-[#F4B400]">
                SEW
              </span>

              <h3 className="font-[Oswald,_sans-serif] text-base font-semibold uppercase tracking-[0.05em] break-words sm:text-lg">
                Shreya Engineering Works
              </h3>
            </div>

            <p className="mt-5 leading-relaxed text-[#9A9A9E]">
              Precision engineering, fabrication, machining, and industrial
              solutions tailored to meet modern manufacturing needs. We deliver
              reliable, high-quality workmanship with a strong focus on
              accuracy, durability, and efficiency.
            </p>

            <div className="mt-6 inline-flex max-w-full items-center gap-2 border border-[#3A3A3D] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#7A7A7E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F4B400]" />
              <span className="break-words">
                Est. workshop unit — Shyam Machine Shop
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F4B400]">
              Quick Links
            </h4>

            <ul className="space-y-3 text-[#9A9A9E]">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-[#EDEDED]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-[#EDEDED]"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="transition-colors hover:text-[#EDEDED]"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-[#EDEDED]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F4B400]">
              Our Services
            </h4>

            <ul className="space-y-3 text-[#9A9A9E]">
              <li>Hydraulic Work</li>
              <li>Lathe Work</li>
              <li>Industrial Fabrication</li>
              <li>Custom Machine Parts</li>
              <li>Welding & Metal Works</li>
              <li>Maintenance Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F4B400]">
              Contact
            </h4>

            <div className="space-y-4 break-words text-[#9A9A9E]">
              <div className="flex items-start gap-3 min-w-0">
                <FiMapPin className="mt-1 shrink-0 text-[#F4B400]" />
                <span className="break-words">
                  Sariswa Bazar, West Champaran, Bihar
                </span>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <FiPhone className="shrink-0 text-[#F4B400]" />
                <a
                  href="tel:+918826355698"
                  className="hover:text-[#EDEDED] transition-colors"
                >
                  +91 88263 55698
                </a>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <FiMessageCircle className="shrink-0 text-[#F4B400]" />
                <a
                  href="https://wa.me/918826355698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EDEDED] transition-colors"
                >
                  WhatsApp Support
                </a>
              </div>

              <div className="flex items-start gap-3 min-w-0">
                <FiMail className="mt-1 shrink-0 text-[#F4B400]" />
                <a
                  href="mailto:shreyaengineeringworkshop0@gmail.com"
                  className="break-all hover:text-[#EDEDED] transition-colors"
                >
                  shreyaengineeringworkshop0@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <FiClock className="shrink-0 text-[#F4B400]" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[#232326] pt-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#5A5A5E]">
              © {currentYear} Shreya Engineering Works. All rights reserved.
            </p>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#9A9A9E] transition-colors hover:text-[#F4B400]"
            >
              Back to Top
              <FiArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;