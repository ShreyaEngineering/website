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

  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Shreya Engineering Works
            </h3>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Precision engineering, fabrication, machining, and industrial solutions tailored to meet modern manufacturing needs. We deliver reliable, high-quality workmanship with a strong focus on accuracy, durability, and efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#work" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Our Services
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Hydraulic work</li>
              <li>Lathe Work</li>
              <li>Industrial Fabrication</li>
              <li>Custom Machine Parts</li>
              <li>Welding & Metal Works</li>
              <li>Maintenance Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Contact
            </h4>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-cyan-400" />
                <span>
                  Sariswa Bazar, West Champaran, Bihar
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-cyan-400" />
                <span>+91 88263 55698</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMessageCircle className="text-cyan-400" />
                <span>WhatsApp Support Available</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-cyan-400" />
                <span>shreyaengineeringworkshop0@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FiClock className="text-cyan-400" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>

             
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Shreya Engineering Works. All rights reserved.
          </p>

          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition"
          >
            Back to Top
            <FiArrowUp />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;