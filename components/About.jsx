import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Button from "./ui/Button";

export default function About() {
  return (
    <div className="my-10 mx-auto">
      <section>
        <h1 className="text-2xl font-bold my-2 md:text-left">About Me</h1>
        <p className="text-justify text-base sm:text-lg md:text-lg lg:text-lg">
          A dedicated and passionate Frontend Web Developer with over a year of
          industry experience. Proficient in a comprehensive range of
          technologies including JavaScript, TypeScript, React, Next.js and
          Familiar with Node.js, Express, MongoDB, Mongoose.Proven expertise in
          creating, developing, designing, and maintaining dynamic and
          responsive web applications.
        </p>
      </section>
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-6">
        <Button
          className="font-semibold flex items-center justify-center rounded-xl gap-2 text-xs py-3"
          href="https://www.facebook.com/k0yes"
          variant="primary"
        >
          <Facebook size={16} /> FACEBOOK
        </Button>
        <Button
          className="font-semibold flex items-center justify-center rounded-xl gap-2 text-xs py-3"
          href="https://github.com/abunaserkayes0"
          variant="secondary"
        >
          <Github size={16} /> GITHUB
        </Button>
        <Button
          className="font-semibold flex items-center justify-center rounded-xl gap-2 text-xs py-3"
          href="https://www.linkedin.com/in/abunaserkayes/"
          variant="tertiary"
        >
          <Linkedin size={16} /> LINKEDIN
        </Button>
        <Button
          className="font-semibold flex items-center justify-center rounded-xl gap-2 text-xs py-3"
          href="https://www.instagram.com/abunaserk0yes/"
          variant="senary"
        >
          <Instagram size={16} /> INSTAGRAM
        </Button>
        <Button
          className="font-semibold flex items-center justify-center rounded-xl gap-2 text-xs py-3"
          href="https://x.com/abunaserkayes"
          variant="quaternary"
        >
          <Twitter size={16} /> TWITTER
        </Button>
        <Button
          className="font-semibold flex items-center justify-center rounded-xl gap-2 text-xs py-3"
          href="mailto:infinitykayes@gmail.com"
          variant="quinary"
        >
          <Mail size={16} /> GMAIL
        </Button>
      </section>
    </div>
  );
}
