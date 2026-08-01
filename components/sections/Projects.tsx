"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

const projects = [
  {
    title: "Road Accident Hotspot Detection",
    description:
      "AI-powered system that detects accident hotspot zones using the DBSCAN clustering algorithm and visualizes them on an interactive map.",
    image: "/images/projects/project1.jpg",
    tech: ["Python", "DBSCAN", "Pandas", "Folium"],
    github: "https://github.com/goku744/sivaraj-portfolio",
    demo: "https://sivaraj-portfolio-kappa.vercel.app",
  },
  {
    title: "EnglishMaster AI",
    description:
      "AI-powered desktop application for learning English with grammar correction, vocabulary practice, and AI chat using the Gemini API.",
    image: "/images/projects/project2.jpg",
    tech: ["Python", "CustomTkinter", "Gemini API"],
    github: "https://github.com/goku744/sivaraj-portfolio",
demo: "https://sivaraj-portfolio-kappa.vercel.app",
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Interactive Power BI dashboard for sales analysis, KPI tracking, and business insights.",
    image: "/images/projects/project3.jpg",
    tech: ["Power BI", "SQL", "Excel"],
    github: "https://github.com/goku744/sivaraj-portfolio",
demo: "https://sivaraj-portfolio-kappa.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Portfolio"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <GlassCard className="group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]">

                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-70" />
                </div>

                <div className="flex flex-1 flex-col p-6">

                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="flex-1 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Button
                      href={project.github}
                      className="flex-1 justify-center"
                    >
                      GitHub
                    </Button>

                    <Button
                      href={project.demo}
                      variant="outline"
                      className="flex-1 justify-center"
                    >
                      Live Demo
                    </Button>
                  </div>

                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}