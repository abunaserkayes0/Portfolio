"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar" className="text-black py-4 sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tighter">
          Abu<span className="text-blue-600">Naser</span>Kayes
        </Link>
        
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 focus:outline-none hover:bg-gray-100 rounded-lg transition-colors"
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
        <div className="hidden md:flex items-center font-bold space-x-8">
          <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/project" className="text-sm hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <Button
            variant="outline"
            size="sm"
            href="https://www.linkedin.com/in/abunaserkayes/"
            // className="rounded-full px-6"
            className="rounded-full flex items-center gap-2"
          >
            Follow
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-6 font-bold">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-600">
            Home
          </Link>
          <Link href="/project" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-600">
            Contact
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl flex items-center justify-center gap-2"
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
