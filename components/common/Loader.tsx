"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712]"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-bold text-white"
            >
              Sivaraj
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-3 text-cyan-400"
            >
              AI & Data Science Engineer
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ duration: 1.6 }}
              className="mx-auto mt-8 h-1 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}