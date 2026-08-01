"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import GlowBackground from "@/components/common/GlowBackground";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden flex items-center"
>
      <GlowBackground />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="mx-auto max-w-7xl px-8 py-32 lg:px-16 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Internships
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight">
              Hi, I'm 👋<br />

              <span className="gradient-text">
                Sivaraj S
              </span>
            </h1>

            <TypeAnimation
  sequence={[
    "AI Engineer",
    2000,
    "Data Analyst",
    2000,
    "AI & Data Science Student",
    2000,
    "Python Developer",
    2000,
  ]}
  wrapper="h2"
  speed={40}
  repeat={Infinity}
  className="mt-6 text-2xl md:text-3xl font-bold text-cyan-300"
/>

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
              Passionate AI & Data Science student with expertise in Python, SQL, Power BI, and Machine Learning. I enjoy building intelligent applications and solving real-world problems using data.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <Button>
                View Projects
              </Button>

              <Button variant="outline">
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}

            <div className="grid grid-cols-3 gap-8 mt-14">

  <div className="glass rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-white">
  <CountUp end={3} duration={2} />+
</h3>

    <p className="text-slate-400 mt-2">
      Projects
    </p>
  </div>

  <div className="glass rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-white">
  <CountUp end={12} duration={2} />+
</h3>

    <p className="text-slate-400 mt-2">
      Certificates
    </p>
  </div>

  <div className="glass rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-white">
  <CountUp end={10} duration={2} />+
</h3>

    <p className="text-slate-400 mt-2">
      Technologies
    </p>
  </div>

</div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -12, 0],
  }}
  transition={{
    duration: 0.8,
    x: {
      duration: 0.8,
    },
    y: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  }}
  className="flex justify-center"
>
            <div className="relative">

              {/* Outer Glow */}

              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-[120px]" />

              {/* Ring */}

              <div className="absolute inset-0 rounded-full border border-blue-500/30 scale-110" />

              {/* Image */}

              <div className="glass rounded-full p-4 blue-glow hover:scale-105 transition-all duration-500">

                <Image
                  src="/images/profile/profile.png"
                  alt="Sivaraj"
                  width={430}
                  height={430}
                  priority
                  className="rounded-full object-cover w-[360px] h-[360px] lg:w-[430px] lg:h-[430px] transition duration-700 hover:scale-110"
                />

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}