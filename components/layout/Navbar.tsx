"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-2xl border border-white/10 shadow-xl"
          : "bg-white/5 backdrop-blur-xl border border-white/5"
      } rounded-full`}
    >
      <div className="flex items-center justify-between px-8 py-4 gap-10">
        <h1 className="text-xl font-bold gradient-text">
          Sivaraj
        </h1>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:flex px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-105 transition"
        >
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}