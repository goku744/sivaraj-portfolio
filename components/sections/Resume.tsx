"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

export default function Resume() {
  return (
    <section id="resume" className="py-28">
      <Container>
        <SectionTitle
          title="Resume"
          subtitle="Download CV"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <GlassCard className="p-10 text-center">

            <h3 className="text-3xl font-bold text-white">
              Resume
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Download my latest resume to know more about my education,
              technical skills, projects and certifications.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Button href="/resume/resume.pdf">
                Download Resume
              </Button>

              <Button
                href="/resume/resume.pdf"
                variant="outline"
              >
                View Resume
              </Button>

            </div>

          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}