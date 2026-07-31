"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_miz1cod",
        "template_jhxjvbi",
        form,
        "Lyor3X1jb9Lf0pEPr"
      );

      alert("✅ Message Sent Successfully!");

      setForm({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-28">
      <Container>
        <SectionTitle
          title="Let's Connect"
          subtitle="Contact Me"
        />

        <div className="grid gap-10 lg:grid-cols-2">

          <GlassCard className="p-8">
            <h3 className="text-3xl font-bold">
              Let's Work Together 🚀
            </h3>

            <p className="mt-5 text-slate-400 leading-8">
              I'm actively looking for internships and
              AI/Data Analyst opportunities.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <h4 className="font-semibold text-cyan-400">
                  Email
                </h4>

                <p className="text-slate-300">
                  sivasivaraj46186@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">
                  Phone
                </h4>

                <p className="text-slate-300">
                  +91 85240 50018
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400">
                  Location
                </h4>

                <p className="text-slate-300">
                  Ambur, Tamil Nadu, India
                </p>
              </div>

            </div>
          </GlassCard>

          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 space-y-6"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={form.from_name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              value={form.from_email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <Button>
              {loading ? "Sending..." : "Send Message"}
            </Button>

          </motion.form>

        </div>
      </Container>
    </section>
  );
}