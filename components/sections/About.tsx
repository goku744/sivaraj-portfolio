"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import SectionTitle from "@/components/common/SectionTitle";

export default function About() {
  return (
    <section id="about" className="relative">
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                AI & Data Science Student
              </h3>

              <p className="text-slate-300 leading-8">
                I'm <span className="text-cyan-400 font-semibold">Sivaraj</span>,
                a passionate Artificial Intelligence and Data Science student.
                I enjoy building intelligent applications using Python, SQL,
                Power BI and Machine Learning while solving real-world problems.
              </p>

              <p className="text-slate-400 leading-8 mt-6">
                My goal is to become an AI Engineer and continuously improve my
                technical, analytical and communication skills through projects,
                internships and certifications.
              </p>
            </GlassCard>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              ["Education", "B.Tech AI & DS"],
              ["Projects", "12+"],
              ["Certificates", "15+"],
              ["Technologies", "20+"],
            ].map(([title, value]) => (
              <GlassCard
                key={title}
                className="p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <h2 className="text-4xl font-bold gradient-text">
                  {value}
                </h2>

                <p className="mt-4 text-slate-300">
                  {title}
                </p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}