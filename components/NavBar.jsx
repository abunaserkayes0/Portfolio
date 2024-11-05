"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";

export default function NabBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar" className="text-black p-2 sticky">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold">
          Abu<span className="text-blue-600">Naser</span>Kayes
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {/* Menu Items */}
        <div
          className={`hidden md:flex items-center justify-center font-bold space-x-6`}
        >
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/project" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <div>
            <Button
              variant="outline"
              size="sm"
              href="https://www.linkedin.com/in/abunaserkayes/"
            >
              Follow
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden font-bold p-4 space-y-4">
          <Link href="/" className="hover:text-blue-600 block">
            Home
          </Link>
          <Link href="/project" className="hover:text-blue-600 block">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 block">
            Contact
          </Link>
          <div>
            <Button
              variant="outline"
              size="sm"
              href="https://www.linkedin.com/in/abunaserkayes/"
            >
              Follow
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
