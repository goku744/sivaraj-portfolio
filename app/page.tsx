import AuroraBackground from "@/components/common/AuroraBackground";
import Loader from "@/components/common/Loader";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Resume from "@/components/sections/Resume";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Loader />
      <AuroraBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </main>
  );
}
