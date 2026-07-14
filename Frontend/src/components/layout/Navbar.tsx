import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { logoutApi } from "../../../api/authApi";
import { useAuth } from "../../context/AuthContext";

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

  const navigate = useNavigate();

  const { authenticated, checkAuth } = useAuth();

  const handleCloseMenu = (): void => {
    setIsOpen(false);
  };

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await logoutApi();
      await checkAuth();
      navigate("/login");
      setIsOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 z-50 w-full bg-[#0B0B0C]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo — stamped equipment-tag style */}
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-[#F4B400] font-mono text-sm font-bold text-[#F4B400]">
            SEW
          </span>
          <span className="font-[Oswald,_sans-serif] text-base font-semibold uppercase tracking-[0.15em] text-[#EDEDED]">
            Shreya Engineering Works
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {!authenticated ? (
            <>
              {links.map((link) => (
                <HashLink
                  key={link.id}
                  smooth
                  to={`/#${link.id}`}
                  className="group relative font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#9A9A9E] transition-colors duration-200 hover:text-[#EDEDED]"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-[#F4B400] transition-all duration-200 group-hover:w-full" />
                </HashLink>
              ))}

              <Link
                to="/invoice"
                className="border border-[#3A3A3D] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#7A7A7E] transition-colors duration-200 hover:border-[#F4B400] hover:text-[#F4B400]"
              >
                Admin
              </Link>

              <HashLink
                smooth
                to="/#contact"
                className="relative bg-[#F4B400] px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#0B0B0C] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Contact Now
              </HashLink>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#9A9A9E] transition-colors duration-200 hover:text-[#EDEDED]"
              >
                Home
              </Link>

              <Link
                to="/invoice"
                onClick={handleCloseMenu}
                className="border border-[#3A3A3D] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#7A7A7E] transition-colors duration-200 hover:border-[#F4B400] hover:text-[#F4B400]"
              >
                Invoice
              </Link>

              <button
                onClick={handleLogout}
                className="group relative font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D9483A] transition-colors duration-200 hover:text-[#E8695D]"
              >
                Logout
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-[#D9483A] transition-all duration-200 group-hover:w-full" />
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          className="border-2 border-[#3A3A3D] p-2 text-[#EDEDED] md:hidden"
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
            className="overflow-hidden bg-[#0B0B0C] px-6 pb-6 md:hidden"
          >
            <div className="space-y-5 border-t border-[#232326] pt-5">
              {!authenticated ? (
                <>
                  {links.map((link) => (
                    <HashLink
                      key={link.id}
                      smooth
                      to={`/#${link.id}`}
                      className="block font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#9A9A9E] transition-colors hover:text-[#EDEDED]"
                      onClick={handleCloseMenu}
                    >
                      {link.label}
                    </HashLink>
                  ))}

                  <Link
                    to="/invoice"
                    onClick={handleCloseMenu}
                    className="block font-mono text-xs uppercase tracking-[0.15em] text-[#7A7A7E] transition-colors hover:text-[#F4B400]"
                  >
                    Admin Login
                  </Link>

                  <HashLink
                    smooth
                    to="/#contact"
                    onClick={handleCloseMenu}
                    className="inline-block bg-[#F4B400] px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#0B0B0C]"
                  >
                    Contact Now
                  </HashLink>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    onClick={handleCloseMenu}
                    className="block font-mono text-xs uppercase tracking-[0.2em] text-[#9A9A9E] transition-colors hover:text-[#EDEDED]"
                  >
                    Home
                  </Link>

                  <Link
                    to="/invoice"
                    onClick={handleCloseMenu}
                    className="block font-mono text-xs uppercase tracking-[0.15em] text-[#7A7A7E] transition-colors hover:text-[#F4B400]"
                  >
                    Invoice
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D9483A] transition-colors hover:text-[#E8695D]"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hazard stripe — the navbar's signature element, a nod to safety tape on a shop floor */}
      <div
        className="h-[3px] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #F4B400 0px, #F4B400 14px, #0B0B0C 14px, #0B0B0C 28px)",
        }}
      />
    </motion.nav>
  );
};

export default Navbar;