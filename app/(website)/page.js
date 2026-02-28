import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
export default function Home() {
  return (
    <div className="container mx-auto p-4 md:p-10">
      <Hero />
      <section id="about">
        <About />
      </section>
      <hr className="my-8 border-gray-100" />
      <section id="experience">
        <Experience />
      </section>
      <hr className="my-8 border-gray-100" />
      <section id="stack">
        <Stack />
      </section>
      <section id="projects" className="mt-12">
        <Projects />
      </section>
    </div >
  );
}
