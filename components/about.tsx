import {
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Button from "./ui/button";

export default function About() {
  return (
    <div className="my-10 mx-auto">
      <section>
        <h2 className="text-2xl font-bold my-2 text-gray-900 dark:text-white">About Me</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Frontend Developer currently at <span className="font-semibold text-gray-900 dark:text-white">SkillersZone LLC</span> (Mar 2025 – Present),
          with prior engineering experience at <span className="font-semibold text-gray-900 dark:text-white">GoJustitech</span>.
          Builds and maintains scalable, production-grade web applications utilizing <span className="text-blue-600 dark:text-blue-400 font-medium">TypeScript</span>,{" "}
          <span className="text-blue-600 dark:text-blue-400 font-medium">Next.js</span>,{" "}
          <span className="text-blue-600 dark:text-blue-400 font-medium">React.js</span>, and{" "}
          <span className="text-blue-600 dark:text-blue-400 font-medium">Tailwind CSS</span>,
          with hands-on backend expertise in <span className="text-gray-900 dark:text-white font-medium">Node.js, Express.js, MongoDB</span>, and RESTful APIs.
          Adept at translating complex UI/UX designs into pixel-perfect, accessible interfaces with a strong focus on client-side performance,
          modular code architecture, and seamless cross-platform user experiences.
        </p>
      </section>

      {/* Quick Contact & Links */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-6">
        <Button
          className="font-semibold flex items-center justify-center rounded gap-2 text-xs py-3"
          href="https://github.com/abunaserkayes0"
          variant="secondary"
        >
          <Github size={16} /> GITHUB
        </Button>
        <Button
          className="font-semibold flex items-center justify-center rounded gap-2 text-xs py-3"
          href="https://www.linkedin.com/in/abunaserkayes/"
          variant="tertiary"
        >
          <Linkedin size={16} /> LINKEDIN
        </Button>
        <Button
          className="font-semibold flex items-center justify-center rounded gap-2 text-xs py-3"
          href="https://abunaserkayes.live"
          variant="primary"
        >
          <Globe size={16} /> WEBSITE
        </Button>
        <Button
          className="font-semibold flex items-center justify-center rounded gap-2 text-xs py-3"
          href="mailto:infinitykayes@gmail.com"
          variant="quinary"
        >
          <Mail size={16} /> GMAIL
        </Button>
        <Button
          className="font-semibold flex items-center justify-center rounded gap-2 text-xs py-3"
          href="tel:+8801744659976"
          variant="senary"
        >
          <Phone size={16} /> CALL
        </Button>
        <Button
          className="font-semibold flex items-center justify-center rounded gap-2 text-xs py-3"
          href="https://www.facebook.com/k0yes"
          variant="quaternary"
        >
          <Facebook size={16} /> FACEBOOK
        </Button>
      </section>
    </div>
  );
}
