
// CoreValuesSection.tsx
"use client";

import React from "react";
import Image from "next/image";
const coreValues = [
  {
    icon: (
      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    title: "BESPOKE SURFACE SOLUTIONS",
    desc: "We specialize in crafting custom Corian designs that align perfectly with our clients’ functional and aesthetic goals.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 12c2.28 0 4.14-1.86 4.14-4.14S14.28 3.72 12 3.72 7.86 5.58 7.86 7.86 9.72 12 12 12z" />
        <path d="M12 12v7" />
        <path d="M9 19h6" />
      </svg>
    ),
    title: "EXPERIENCED CRAFTSMANSHIP",
    desc: "Our seasoned team blends artisanal skill with modern techniques to deliver flawless finishes and lasting durability.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M3 12l2-2 4 4 8-8 2 2-10 10z" />
      </svg>
    ),
    title: "ON-TIME COMPLETION",
    desc: "We understand the value of time — every project is completed within the committed deadline without compromising quality.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M14 10V3.5a1.5 1.5 0 00-3 0V10" />
        <path d="M17 10v-3a5 5 0 00-10 0v3" />
        <rect x="4" y="10" width="16" height="10" rx="2" />
      </svg>
    ),
    title: "ADVANCED FABRICATION",
    desc: "Our facility is equipped with precision tools and innovative machinery to ensure clean cuts, seamless joints, and top-tier execution.",
  },
];



const CoreValuesSection: React.FC = () => (
  <section className="bg-[#f9f9f9] py-16 px-4 md:px-0">
        <div className="text-center mt-[-5rem] mb-12 md:mt-0">
      <div className="text-[#454d6b] font-semibold tracking-widest text-xs mb-1">CORE VALUES OF</div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#454d6b]">Artisan Corian Fabricators</h2>
    </div>

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
      
      {/* Left: Values */}
      <div className="flex-1 grid  mt-30 grid-cols-1 sm:grid-cols-2 gap-14">
        {coreValues.map((val, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="flex-shrink-0">{val.icon}</div>
            <div>
              <div className="font-bold text-gray-900 text-2xl mb-1">{val.title}</div>
              <div className="text-gray-600 text-xl">{val.desc}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Right: Image with accent */}
      <div className="flex-1 flex flex-col items-center relative w-full max-w-lg mx-auto">
        {/* Decorative accent */}
        <div className="absolute -top-6 left-8 w-32 h-4 bg-[#e0cda7] rounded-md z-10 hidden md:block"></div>
        {/* Image */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/gallery/value.jpg"
            alt="Core Value"
            width={400}
            height={600}
            className="rounded-xl w-auto h-[600px] object-cover"
          />
          {/* Shine Overlay */}
          <div
            className="absolute top-0 left-[-75%] w-1/2 h-full pointer-events-none rounded-xl bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shine"
          />
        </div>
      </div>
    </div>
    {/* Section Title */}
  </section>
);

export default CoreValuesSection;
