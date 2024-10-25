import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
export default function Home() {
  return (
    <div className="container mx-20">
      <Hero />
      <About />
      <hr />
      <Experience />
      <hr />
      <Stack />
      <Projects />
    </div >
  );
}
