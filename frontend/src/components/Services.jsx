import React from "react";
import { Shield, Wrench, Compass, Cpu, ExternalLink } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "OSHA 30 Compliance",
    description:
      "Comprehensive 30-hour safety training tailored to ensure your project leaders meet all federal safety mandates.",
    badge: "Mandatory Standard",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400",
  },
  {
    icon: Wrench,
    title: "Safety Program Development",
    description:
      "Custom-built safety manuals, emergency procedures, and site workflows tailored specifically to operational risks.",
    badge: "Custom Solutions",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400",
  },
  {
    icon: Compass,
    title: "Site-Specific Safety Plans",
    description:
      "Detailed, actionable safety blueprints designed to clear strict government project bidding requirements.",
    badge: "Bidding Support",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    icon: Cpu,
    title: "Contractor Knowledge Base",
    description:
      "Always-on digital access to critical regulations, site checklists, and workforce compliance tracking tools.",
    badge: "Digital Portal",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-14 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sky-800 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-100 border border-sky-200">
            Expertise Driven
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Specialized Training for{" "}
            <span className="text-sky-600">Government Contractors</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Elevate compliance and site safety with tech-enabled solutions
            engineered for high-stakes municipal and federal construction
            ventures.
          </p>
        </div>

        {/* Services Grid with Cards + Thumbnail Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-500/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full sm:w-36 h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />

              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs mt-1">
                    {service.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center text-sky-600 font-bold text-xs group-hover:gap-2 transition-all">
                  <span>Explore Program</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
