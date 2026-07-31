"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 80, -80, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-400/15 blur-[170px]"
      />
    </div>
  );
}