import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "../assets/NSH Logo 02.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/80"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-3 group">
          {/* Logo Image */}
          <img
            src={logoImg}
            alt="NW Safety & Health Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-lg leading-tight tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
              NW Safety & Health
            </span>
            <span className="text-[10px] tracking-widest uppercase font-bold text-emerald-700">
              Compliance • Training
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-700">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-emerald-700 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-sm hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-2.5 rounded-xl bg-emerald-600 text-white font-bold shadow-md hover:bg-emerald-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
