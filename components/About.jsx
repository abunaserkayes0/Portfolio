import {
  Facebook,
  GithubIcon,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Button from "./ui/Button";

export default function About() {
  return (
    <div className="my-10">
      <section>
        <h1 className="text-2xl font-bold my-2">About Me</h1>
        <p className="text-justify">
          A dedicated and passionate Fronted Web Developer with over a year of
          industry experience. Proficient in a comprehensive range of
          technologies including JavaScript, TypeScript, React, Next.js and
          Familiar with Node.js, Express, MongoDB, Mongoose.Proven expertise in
          creating, developing, designing, and maintaining dynamic and
          responsive web applications.
        </p>
      </section>
      <section className="flex flex-wrap items-center gap-x-3 my-5">
        <Button
          className="font-semibold flex items-center gap-2"
          href="https://www.facebook.com/k0yes"
          variant="primary"
        >
          <Facebook size={17} /> FACEBOOK
        </Button>
        <Button
          className="font-semibold flex items-center gap-2"
          href="https://github.com/abunaserkayes0"
          variant="secondary"
        >
          <GithubIcon size={17} /> GITHUB
        </Button>
        <Button
          className="font-semibold flex items-center gap-2"
          href="https://www.linkedin.com/in/abunaserkayes/"
          variant="tertiary"
        >
          <Linkedin size={17} /> LINKEDIN
        </Button>
        <div>
          <Button
            className="font-semibold flex items-center gap-2"
            href="https://www.instagram.com/abunaserk0yes/"
            variant="senary"
          >
            <Instagram size={17} /> INSTAGRAM
          </Button>
        </div>
        <div>
          <Button
            className="font-semibold flex items-center gap-2"
            href="https://x.com/abunaserkayes"
            variant="quaternary"
          >
            <Twitter size={17} /> TWITTER
          </Button>
        </div>
        <div>
          <Button
            className="font-semibold flex items-center gap-2"
            href="mailto:infinitykayes@gmail.com"
            variant="quinary"
          >
            <Mail size={17} /> GMAIL
          </Button>
        </div>
      </section>
    </div>
  );
}
