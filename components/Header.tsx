"use client";

import { HeartHandshake, PhoneCall, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavItem {
  href: string;
  label: string;
}

const navList: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Therapists" },
  { href: "#tips", label: "Self-Care Tips" },
];



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  

  // Section highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navList.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(item.href.substring(1));
            }
          },
          { threshold: 0.6 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);


  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <HeartHandshake className="w-8 h-8 text-primary" />
          <span className="text-2xl font-semibold text-dark">BetterYou</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-dark/80 font-medium ml-auto mr-6">
          {navList.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Book Session – always visible */}
          <a
            href="#appointment"
            className="px-5 py-2 bg-accent hover:bg-accent/80 text-white rounded-full shadow-md text-sm transition-all flex items-center"
          >
            <PhoneCall className="w-4 h-4 mr-1" />
            Book Session
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-dark" />
          ) : (
            <Menu className="w-7 h-7 text-dark" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-md border-t border-card/40 px-6 py-6 space-y-4 text-dark/80 font-medium transition-all duration-300 ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navList.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className={`block transition-colors ${
              activeSection === link.href.substring(1)
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}
          >
            {link.label}
          </a>
        ))}

        
        <a
          href="#appointment"
          onClick={() => setIsMenuOpen(false)}
          className="block bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-full text-center transition-all"
        >
          Book Session
        </a>
      </div>
    </header>
  );
}
