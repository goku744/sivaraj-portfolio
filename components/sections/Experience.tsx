"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import GlassCard from "@/components/common/GlassCard";

const experiences = [
  {
    year: "2022",
    title: "Started B.Tech AI & Data Science",
    company: "Annapoorana Engineering College",
    description:
      "Started my journey in Artificial Intelligence and Data Science. Built a strong foundation in Python, C, SQL and problem solving.",
  },
  {
    year: "2024",
    title: "Data Analytics & Power BI",
    company: "Skill Development",
    description:
      "Learned Excel, SQL, Power BI and Data Visualization by creating dashboards and solving real-world business problems.",
  },
  {
    year: "2025",
    title: "AI Project Development",
    company: "Major Project",
    description:
      "Developed Road Accident Hotspot Detection using DBSCAN clustering, Python, Pandas and interactive map visualization.",
  },
  {
    year: "2026",
    title: "Portfolio & Continuous Learning",
    company: "AI Engineer Journey",
    description:
      "Building production-ready AI projects, improving full-stack development skills and preparing for Data Analyst and AI Engineer roles.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionTitle
          title="My Journey"
          subtitle="Experience"
        />

        <div className="relative mx-auto mt-16 max-w-5xl">

          <div className="absolute left-6 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                  <div className="h-3 w-3 rounded-full bg-white" />
                </div>

                <GlassCard className="transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                  <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-300">
                    {item.year}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-lg text-cyan-300">
                    {item.company}
                  </p>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}