import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/SkillsCard";
import Projects from "@/components/ProjectsCard";
import Contact from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <section
        id="about"
        className="py-16 md:py-24 max-w-300 mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="space-y-2 mb-8">
          <span className="font-mono text-xs sm:text-sm text-[#4cd7f6] font-semibold tracking-wider uppercase">
            // 01. ABOUT
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#dfe2ee] tracking-tight">
            Engineering scalable solutions from pixel to database
          </h2>
        </div>
        <About />
      </section>

      <section
        id="skills"
        className="py-16 md:py-24 max-w-300 mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="space-y-2 mb-10">
          <span className="font-mono text-xs sm:text-sm text-[#4cd7f6] font-semibold tracking-wider uppercase">
            // 02. SKILLS & TECHNOLOGIES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#dfe2ee] tracking-tight">
            Tools & Technologies I Work With
          </h2>
        </div>
        <Skills />
      </section>

      <section
        id="projects"
        className="py-16 md:py-24 max-w-300 mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="space-y-2 mb-10">
          <span className="font-mono text-xs sm:text-sm text-[#4cd7f6] font-semibold tracking-wider uppercase">
            // 03. FEATURED WORK
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#dfe2ee] tracking-tight">
            Crafted with Code & Care
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#8e9ca0]">
            A selection of projects exploring web performance, algorithms, and
            applied machine learning.
          </p>
        </div>
        <Projects />
      </section>

      <section
        id="contact"
        className="py-16 md:py-24 max-w-300 mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="space-y-2 mb-10">
          <span className="font-mono text-xs sm:text-sm text-[#4cd7f6] font-semibold tracking-wider uppercase">
            // 04. GET IN TOUCH
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#dfe2ee] tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#8e9ca0] max-w-xl">
            Have an internship opportunity, project collaboration, or just want
            to discuss algorithms and system design? Drop me a message or reach
            out directly.
          </p>
        </div>

        <Contact />
      </section>
    </div>
  );
}
