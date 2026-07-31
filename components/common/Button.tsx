"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const baseClass =
    variant === "primary"
      ? "inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
      : "inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300";

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseClass} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick}>
      {content}
    </button>
  );
}