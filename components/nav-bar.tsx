"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "./ui/button";
import ThemeToggle from "./ui/theme-toggle";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="text-gray-900 dark:text-gray-100 py-4 sticky top-0 z-50 bg-white/80 dark:bg-[#171718]/80 backdrop-blur-md border-b border-gray-100 dark:border-[#222224] transition-colors duration-150"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tighter text-gray-900 dark:text-white">
          Abu<span className="text-blue-600 dark:text-blue-400">Naser</span>Kayes
        </Link>
        
        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center font-bold space-x-6">
          <Link href="/" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="mailto:infinitykayes@gmail.com" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </Link>
          <Button
            variant="outline"
            size="sm"
            href="https://www.linkedin.com/in/abunaserkayes/"
            className="rounded-full flex items-center gap-2"
          >
            Follow
          </Button>
          <div className="w-px h-4 bg-gray-200 dark:bg-[#1e293b]"></div>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#171718]/95 backdrop-blur-md border-b border-gray-100 dark:border-[#222224] shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-6 font-bold">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="mailto:infinitykayes@gmail.com" onClick={() => setIsOpen(false)} className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="rounded flex items-center justify-center gap-2 w-full max-w-xs"
            href="https://www.linkedin.com/in/abunaserkayes/"
            onClick={() => setIsOpen(false)}
          >
            Follow on LinkedIn
          </Button>
        </div>
      </div>
    </nav>
  );
}
