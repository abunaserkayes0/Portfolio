"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
import Button from "./ui/button";

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial fade in for hero elements
    tl.from('.hero-reveal', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
    });

    // Parallax on scroll
    gsap.to('.hero-image', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative flex flex-col md:flex-row items-center md:items-start md:gap-12 py-10 md:py-20">
      {/* Ambient background glow (same as abdullahmia-dev) */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-12 -right-8 overflow-hidden">
        <div
        />
      </div>

      {/* Profile Image Container */}
      <div className="flex-shrink-0 mb-8 md:mb-0 hero-reveal">
        <div className="hero-image relative w-40 h-40 md:w-56 md:h-56">
          <Image
            className="rounded-full border-4 md:border-8 border-blue-50 dark:border-blue-950/60 transition-transform hover:scale-105 duration-300 shadow-xl object-cover"
            src="/assets/profile.png"
            alt="profile"
            fill
            priority
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="w-full text-center md:text-left">
        <h1 className="hero-reveal text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
          Abu Naser Kayes
        </h1>

        <div className="hero-reveal flex flex-col sm:flex-row font-medium items-center justify-center md:justify-start gap-2 sm:gap-4 my-4 text-gray-600 dark:text-gray-400">
          <span className="bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-transparent dark:border-blue-800/40 px-3 py-1 rounded-full text-sm">
            @abunaserkayes
          </span>
          <span className="flex items-center gap-1.5 text-sm">
            <MapPin size={16} className="text-blue-500 dark:text-blue-400" />
            Dhaka, Bangladesh
          </span>
        </div>

        <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 my-6">
          <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold px-4 py-2 rounded bg-white/60 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 shadow-sm">
            <CodeXml size={18} className="text-blue-600 dark:text-blue-400" />
            React & Next.js Developer
          </span>
          <Link
            href="/assets/abunaserkayes.pdf"
            target="_blank"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold group relative"
          >
            <FileText size={18} />
            <span className="relative">
              View Resume
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </div>

        <p className="hero-reveal text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mb-8 leading-relaxed mx-auto md:mx-0">
          Dedicated Software Engineer specializing in building modern web architectures
          with a focus on performance and clean user experience.
        </p>

        <div className="hero-reveal flex flex-wrap justify-center md:justify-start gap-4 mb-8">
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
        <div className="hero-reveal flex items-center justify-center md:justify-start gap-4">
          {[
            { icon: Facebook, href: "https://www.facebook.com/k0yes", color: "hover:bg-blue-600" },
            { icon: Github, href: "https://github.com/abunaserkayes0", color: "hover:bg-gray-800 dark:hover:bg-gray-700" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abunaserkayes/", color: "hover:bg-blue-700" }
          ].map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              className={`p-2.5 bg-gray-100 dark:bg-gray-800/80 rounded-full text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
            >
              <social.icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
