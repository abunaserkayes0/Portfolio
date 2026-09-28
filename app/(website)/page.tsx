import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <div className="container mx-auto p-4 md:p-10 overflow-hidden">
      <Hero />
      
      <AnimatedSection animationType="scrubFadeUp" className="mt-20">
        <section id="about">
          <About />
        </section>
      </AnimatedSection>
      
      <hr className="my-8 border-gray-100" />
      
      <AnimatedSection animationType="scale">
        <section id="experience">
          <Experience />
        </section>
      </AnimatedSection>
      
      <hr className="my-8 border-gray-100" />
      
      <AnimatedSection animationType="scrubFadeUp">
        <section id="stack">
          <Stack />
        </section>
      </AnimatedSection>
      
      <AnimatedSection animationType="scrubFadeUp">
        <section id="projects" className="mt-12">
          <Projects />
        </section>
      </AnimatedSection>
    </div>
  );
}
