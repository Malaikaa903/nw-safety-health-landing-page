import React from "react";
import { Shield, Award, Users, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-14 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Mission Banner*/}
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-10 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600"
              alt="Safety Overlay"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-extrabold tracking-widest uppercase border border-sky-500/30">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              The Northwest Standard of Safety
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Empowering construction contractors with rigorous compliance,
              modern technology, and decades of industry expertise to ensure
              every job site is secure.
            </p>
          </div>
        </div>

        {/*  Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {[
            {
              icon: Shield,
              title: "Construction Focus",
              desc: "Tailored safety protocols built for the unique hazards of modern construction and contracting.",
            },
            {
              icon: Award,
              title: "Tech-Driven Efficiency",
              desc: "Integrating cloud compliance tracking and digital training modules to accelerate workforce certification.",
            },
            {
              icon: Users,
              title: "Absolute Compliance",
              desc: "Rigorous adherence to local and federal safety standards, shielding your firm against regulatory risks.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-sky-400 hover:bg-white hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Decades of Expertise */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sky-800 text-xs font-extrabold tracking-widest uppercase px-3 py-1 rounded-full bg-sky-100 border border-sky-200">
              Our Journey
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Decades of Proven Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                year: "The Foundation",
                title: "Establishing Baseline",
                desc: "Started with a focus on core compliance for local contractors, setting standard safety oversight.",
              },
              {
                year: "Digital Evolution",
                title: "Integrating Modern Tech",
                desc: "Pioneered remote training modules to streamline compliance for complex government contracts.",
              },
              {
                year: "Present Day",
                title: "Empowering Industry",
                desc: "Recognized as a premier safety partner, blending human expertise with seamless software.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-500 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <span className="text-xs font-extrabold text-sky-600 tracking-wider uppercase block mb-1">
                    {step.year}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center text-emerald-500 font-bold text-xs gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Milestone
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
