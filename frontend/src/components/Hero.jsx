import React from "react";
import {
  ShieldCheck,
  ArrowRight,
  Building2,
  GraduationCap,
  Clock,
} from "lucide-react";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full pt-28 pb-14 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 text-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Split Layout: Text + Hero Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-300 text-sky-900 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              Northwest Safety & Health • Official Leader
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Build with <span className="text-sky-600">Confidence.</span>
              <br />
              Win with <span className="text-emerald-500">Compliance.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-xl mt-4 leading-relaxed font-normal">
              Modern compliance training and certification engineered for
              high-stakes construction firms and top-tier government
              contractors.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md hover:shadow-sky-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Get Certified Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-xl bg-white border border-slate-300 hover:border-sky-400 hover:bg-sky-50/50 text-slate-800 font-semibold text-sm shadow-sm transition-all duration-200"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
              <img
                src={heroImg}
                alt="Construction Safety Team"
                className="w-full h-80 lg:h-[380px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block">
                    OSHA Compliant
                  </span>
                  <p className="text-sm font-semibold mt-1">
                    Certified Protection for High-Risk Sites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {[
            {
              icon: Building2,
              title: "Government Readiness",
              desc: "Ensure your team meets all federal and state compliance standards with precision.",
            },
            {
              icon: GraduationCap,
              title: "Expert Training",
              desc: "Cutting-edge modules designed by industry veterans to keep your crew safe.",
            },
            {
              icon: Clock,
              title: "24/7 Portal Access",
              desc: "Instant access to digital certifications, tracking tools, and support.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-500/60 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
