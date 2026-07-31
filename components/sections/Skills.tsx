"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import SectionTitle from "@/components/common/SectionTitle";

const skills = [
  { name: "Python", level: 90 },
  { name: "SQL", level: 88 },
  { name: "Power BI", level: 85 },
  { name: "Excel", level: 88 },
  { name: "Machine Learning", level: 82 },
  { name: "Data Visualization", level: 85 },
  { name: "Pandas", level: 84 },
  { name: "NumPy", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <SectionTitle
          title="Technical Skills"
          subtitle="My Expertise"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <GlassCard className="p-6">
                <div className="flex justify-between mb-3">
                  <h3 className="font-semibold text-lg">
                    {skill.name}
                  </h3>

                  <span className="text-cyan-400 font-bold">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}