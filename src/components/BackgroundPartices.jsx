import { motion } from "framer-motion";

const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0f1c]">
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,198,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,198,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Orbs */}
      <motion.div 
        animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[200px] rounded-full top-[-200px] left-[-200px]"
      />

      <motion.div 
        animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[200px] rounded-full bottom-[-200px] right-[-200px]"
      />
    </div>
  );
};

export default BackgroundParticles;