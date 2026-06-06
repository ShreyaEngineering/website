import { motion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

const MagneticButton = ({
  children,
  href = "#",
  variant = "primary",
}: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const className =
    variant === "secondary"
      ? "px-8 py-3 rounded-full border border-cyan-300/50 bg-white/5 text-white font-semibold shadow-lg hover:border-cyan-300 transition duration-300"
      : "px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/50 transition duration-300";

  const handleMouseMove = (
    e: MouseEvent<HTMLAnchorElement>
  ): void => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = (): void => {
    if (!ref.current) return;

    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

export default MagneticButton;