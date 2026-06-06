import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface LinkItem {
  id: string;
  label: string;
}

const links: readonly LinkItem[] = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "stats", label: "Stats" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseMenu = (): void => {
    setIsOpen(false);
  };

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
       
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-amber-400"
        >
          Shreya Engineering Works
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <HashLink
              key={link.id}
              smooth
              to={`/#${link.id}`}
              className="text-sm text-slate-200/90 hover:text-cyan-300 transition-colors duration-300"
            >
              {link.label}
            </HashLink>
          ))}

          <Link
            to="/invoice"
            className="text-sm  text-cyan-300 hover:text-red-600 transition-colors duration-300"
          >
            Admin Login
          </Link>

          <HashLink
            smooth
            to="/#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold text-sm hover:scale-105 transition-transform"
          >
            Contact Now
          </HashLink>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg border border-white/20"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-slate-950/95 px-6 pb-5"
          >
            <div className="space-y-4">
              {links.map((link) => (
                <HashLink
                  key={link.id}
                  smooth
                  to={`/#${link.id}`}
                  className="block text-slate-200/90 hover:text-cyan-300 transition-colors"
                  onClick={handleCloseMenu}
                >
                  {link.label}
                </HashLink>
              ))}

              <Link
                to="/invoice"
                onClick={handleCloseMenu}
                className="block text-cyan-300 hover:text-red-600 transition-colors"
              >
                Admin Login
              </Link>

              <HashLink
                smooth
                to="/#contact"
                onClick={handleCloseMenu}
                className="inline-block mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold text-sm"
              >
                Contact Now
              </HashLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;