import React from "react";
import logoImg from "../assets/NSH Logo 02.png";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 text-slate-600 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Info */}
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="NW Safety & Health Logo"
              className="h-9 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div>
              <span className="font-extrabold text-slate-900 text-base">
                NW Safety & Health
              </span>
              <p className="text-xs text-slate-500">
                Reliable innovation for compliance & training.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-slate-700">
            <a
              href="#home"
              className="hover:text-emerald-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-emerald-700 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-emerald-700 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-700 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} Northwest Safety & Health. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
