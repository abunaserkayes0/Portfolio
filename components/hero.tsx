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
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.08,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative py-8 md:py-16 max-w-4xl">
      {/* Profile Image & Name Header */}
      <div className="hero-reveal flex items-center gap-4 sm:gap-5 mb-6">
        <div className="hero-image relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
          <div
            aria-hidden="true"
            className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 dark:from-blue-500 dark:via-indigo-400 dark:to-cyan-400"
          />
          <div className="relative w-full h-full rounded-full bg-white dark:bg-[#171718] p-[2px] overflow-hidden">
            <Image
              className="rounded-full object-cover transition-transform hover:scale-105 duration-300"
              src="/assets/profile.png"
              alt="Abu Naser Kayes"
              fill
              priority
            />
          </div>
          <span
            className="absolute bottom-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#171718] z-10"
            title="Available for work"
          />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Abu Naser Kayes
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-medium text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
            <span className="bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-transparent dark:border-blue-800/40 px-2.5 py-0.5 rounded-full">
              @abunaserkayes
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-blue-500 dark:text-blue-400" />
              Mirpur-2, Dhaka, Bangladesh
            </span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="w-full text-left">
        <div className="hero-reveal flex flex-wrap items-center gap-4 sm:gap-6 my-4">
          <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold px-4 py-2 rounded-lg bg-white/60 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 shadow-sm text-sm sm:text-base">
            <CodeXml size={18} className="text-blue-600 dark:text-blue-400" />
            React.js &amp; Next.js Developer
          </span>
          <Link
            href="/assets/abunaserkayes.pdf"
            target="_blank"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold group relative text-sm sm:text-base"
          >
            <FileText size={18} />
            <span className="relative">
              View Resume
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </div>

        <p className="hero-reveal text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
          Frontend Developer at <span className="font-semibold text-gray-900 dark:text-white">SkillersZone LLC</span> specializing in building scalable, production-grade web applications with <span className="text-blue-600 dark:text-blue-400 font-medium">TypeScript</span>, <span className="text-blue-600 dark:text-blue-400 font-medium">Next.js</span>, <span className="text-blue-600 dark:text-blue-400 font-medium">React.js</span>, and modern architectures.
        </p>

        <div className="hero-reveal flex flex-wrap gap-3 mb-6">
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
        <div className="hero-reveal flex items-center gap-3">
          {[
            { icon: Facebook, href: "https://www.facebook.com/k0yes", color: "hover:bg-blue-600 hover:text-white" },
            { icon: Github, href: "https://github.com/abunaserkayes0", color: "hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abunaserkayes/", color: "hover:bg-blue-700 hover:text-white" }
          ].map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              className={`p-2.5 bg-gray-100 dark:bg-gray-800/80 rounded-full text-gray-700 dark:text-gray-300 transition-all duration-300 ${social.color}`}
            >
              <social.icon size={18} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
