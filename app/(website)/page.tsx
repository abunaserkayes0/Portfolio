import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import AnimatedSection from "@/components/ui/animated-section";

export default function Home() {
  return (
    <div className="container mx-auto p-4 md:p-10 overflow-hidden">
      <Hero />
      
      <AnimatedSection animationType="scrubFadeUp" className="mt-20">
        <section id="about">
          <About />
        </section>
      </AnimatedSection>
      
      <hr className="my-8 border-gray-100 dark:border-gray-800" />
      
      <AnimatedSection animationType="scale">
        <section id="experience">
          <Experience />
        </section>
      </AnimatedSection>
      
      <hr className="my-8 border-gray-100 dark:border-gray-800" />
      
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
