import React, { useState } from "react";
import { Send, Building, User, MessageSquare, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="w-full py-14 bg-slate-100 text-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-emerald-700 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-200/60 border border-emerald-300">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Partner with Us
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm">
            Elevate your compliance and safety training. Let’s discuss your
            project needs today.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">
                Request Sent Successfully!
              </h3>
              <p className="text-slate-600 text-xs">
                Our team will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    required
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 pl-9 pr-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Contact Person
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 pl-9 pr-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Training Requirements
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your compliance or training needs..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 pl-9 pr-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white text-xs"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 font-bold text-white shadow-md transition-all flex items-center justify-center gap-2 text-sm mt-2"
              >
                <Send className="w-4 h-4" />
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
