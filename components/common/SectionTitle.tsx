"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <span className="inline-block px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 text-sm tracking-[0.25em] uppercase">
        {subtitle}
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
        <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      <div className="mt-6 flex justify-center">
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
      </div>
    </motion.div>
  );
}