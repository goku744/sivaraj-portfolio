"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import SectionTitle from "@/components/common/SectionTitle";

const certificates = [
  {
    title: "Python for Data Science",
    issuer: "IBM SkillsBuild",
    year: "2025",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  {
    title: "Power BI Workshop",
    issuer: "Microsoft",
    year: "2025",
  },
  {
    title: "SQL Fundamentals",
    issuer: "Infosys Springboard",
    year: "2025",
  },
];

export default function Certificates() {
  return (
    <section id="certificates">
      <Container>
        <SectionTitle
          title="Certificates"
          subtitle="Achievements"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <GlassCard className="p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      {certificate.title}
                    </h3>

                    <p className="text-slate-400 mt-2">
                      {certificate.issuer}
                    </p>
                  </div>

                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                    {certificate.year}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}