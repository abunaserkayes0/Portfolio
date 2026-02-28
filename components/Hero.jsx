import {
  CodeXml,
  Facebook,
  FileText,
  Github,
  Linkedin,
  MapPin
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start md:gap-12 py-10 md:py-20">
      {/* Profile Image Container */}
      <div className="flex-shrink-0 mb-8 md:mb-0">
        <div className="relative w-40 h-40 md:w-56 md:h-56">
          <Image
            className="rounded-full border-4 md:border-8 border-blue-50 transition-transform hover:scale-105 duration-300 shadow-xl object-cover"
            src="/assets/profile.png"
            alt="profile"
            fill
            priority
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="w-full text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-2">
          Abu Naser Kayes
        </h1>
        
        <div className="flex flex-col sm:flex-row font-medium items-center gap-2 sm:gap-4 my-4 text-gray-600">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
            @abunaserkayes
          </span>
          <span className="flex items-center gap-1.5 text-sm">
            <MapPin size={16} className="text-blue-500" />
            Dhaka, Bangladesh
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 my-6">
          <span className="flex items-center gap-2 text-gray-700 font-semibold px-4 py-2 bg-gray-50 rounded-lg">
            <CodeXml size={18} className="text-blue-600" />
            React & Next.js Developer
          </span>
          <Link 
            href="/projects/abunaserkayes.pdf" 
            target="_blank"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold group"
          >
            <FileText size={18} />
            <span>View Resume</span>
            <div className="h-px w-0 group-hover:w-full bg-blue-600 transition-all duration-300" />
          </Link>
        </div>

        <p className="text-gray-600 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
          Dedicated Software Engineer specializing in building modern web architectures 
          with a focus on performance and clean user experience.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <Button
            className="inline-flex items-center gap-2 shadow-sm"
            size="sm"
            variant="pill"
            href="#"
          >
            <CodeXml size={16} /> Web Developer
          </Button>
          <Button
            className="inline-flex items-center gap-2 shadow-sm"
            size="sm"
            variant="pill"
            href="#"
          >
            <CodeXml size={16} /> React Developer
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center md:justify-start gap-4">
          {[
            { icon: Facebook, href: "https://www.facebook.com/k0yes", color: "hover:bg-blue-600" },
            { icon: Github, href: "https://github.com/abunaserkayes0", color: "hover:bg-gray-800" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abunaserkayes/", color: "hover:bg-blue-700" }
          ].map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              className={`p-2.5 bg-gray-100 rounded-full text-gray-700 hover:text-white transition-all duration-300 ${social.color}`}
            >
              <social.icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
