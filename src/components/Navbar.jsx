"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-2 ${
        scrolled ? "bg-black/90 backdrop-blur shadow-sm" : "bg-black"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#EFF5E1] font-semibold text-lg">
          Nebula X Pro
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm text-[#EFF5E1] font-light items-center">
          <Link href="#overview" className="hover:opacity-80 transition">
            Overview
          </Link>
          <Link href="#switch" className="hover:opacity-80 transition">
            Switch
          </Link>
          <Link href="#tech" className="hover:opacity-80 transition">
            Tech Specs
          </Link>
          <Link
            href="#buy"
            className="bg-purple-600 text-[#EFF5E1] px-4 py-1.5 text-sm rounded-full hover:bg-purple-700 transition font-medium ml-3"
          >
            Buy
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#EFF5E1] focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 text-[#EFF5E1] space-y-4 text-sm font-light">
          <Link
            href="#overview"
            onClick={() => setIsOpen(false)}
            className="block hover:opacity-80 transition"
          >
            Overview
          </Link>
          <Link
            href="#switch"
            onClick={() => setIsOpen(false)}
            className="block hover:opacity-80 transition"
          >
            Switch
          </Link>
          <Link
            href="#tech"
            onClick={() => setIsOpen(false)}
            className="block hover:opacity-80 transition"
          >
            Tech Specs
          </Link>
          <Link
            href="#buy"
            onClick={() => setIsOpen(false)}
            className="inline-block bg-purple-600 px-4 py-2 rounded-full text-white hover:bg-purple-700 transition"
          >
            Buy
          </Link>
        </div>
      )}
    </header>
  );
}
