import Hero from "@/components/Hero";
import About from "@/components/About";

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
    </div>
  );
}
