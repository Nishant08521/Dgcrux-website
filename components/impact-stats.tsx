"use client"

import React from "react"
import Image from "next/image"

const stats = [
    {
        number: "1600+",
        label: "TECHNOLOGY SPECIALISTS",
        description: "designing and building AI-led, cloud-native systems at enterprise scale",
        image: "/new/imgi_94_technology-specialists-showcase-image.webp",
    },
    {
        number: "3000+",
        label: "SOLUTIONS DELIVERED",
        description: "delivered across consulting, engineering, and large-scale digital transformation initiatives",
        image: "/new/imgi_98_solutions-showcase-image.webp",
    },
    {
        number: "10+",
        label: "YEARS OF EXPERIENCE",
        description: "pioneering digital excellence and driving innovation since our inception",
        image: "/new/imgi_99_years-of-experience-showcase-image.webp",
    },
    {
        number: "35+",
        label: "INDUSTRIES MASTERED",
        description: "mastered with deep expertise across highly regulated, data-intensive, and complex industries",
        image: "/new/imgi_95_industries-showcase-image.webp",
    },
    {
        number: "25+",
        label: "GLOBAL RECOGNITIONS",
        description: "honored for engineering excellence and impactful digital transformations worldwide",
        image: "/new/imgi_96_global-recognitions-award-showcase-image-1.webp",
    },
]

export function ImpactStats() {
    return (
        <section className="bg-[#050505] py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-16 text-center lg:text-left">
                {/* <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                    <div className="w-12 h-[3px] bg-[#5740A1]" />
                    <span className="text-[#5740A1] text-xs font-black uppercase tracking-[0.3em]">Our Impact & Scale</span>
                </div> */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.2]">
                    Engineering <span className="text-[#5740A1] italic">Excellence</span> at <span className="text-[#FFB800]">Scale</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl">Fueling innovation through deep technical expertise and industry-specific solutions.</p>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Faders */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

                <div className="flex animate-marquee-left-to-right whitespace-nowrap group hover:[animation-play-state:paused] py-4">
                    {[...stats, ...stats, ...stats].map((stat, idx) => (
                        <div
                            key={idx}
                            className="inline-block w-[340px] shrink-0 mx-4 bg-[#111] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#5740A1]/50 hover:shadow-[#5740A1]/10"
                        >
                            {/* Top Section */}
                            <div className="p-8 pb-5">
                                <div className="flex flex-col gap-1 mb-4">
                                    <span className="text-5xl font-black text-white tracking-tighter italic leading-none">
                                        {stat.number}
                                    </span>
                                    <span className="text-sm font-bold text-[#5740A1] uppercase tracking-[0.2em]">
                                        {stat.label}
                                    </span>
                                </div>
                                <p className="text-slate-400 leading-relaxed whitespace-normal text-base font-medium opacity-80">
                                    {stat.description}
                                </p>
                            </div>

                            {/* Bottom Section (Visual) */}
                            <div className="relative h-56 w-full bg-[#0a0a0a] overflow-hidden">
                                <Image
                                    src={stat.image}
                                    alt={stat.label}
                                    fill
                                    className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Glow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-[#5740A1]/5 transition-opacity group-hover:opacity-20" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee-left-to-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left-to-right {
          animation: marquee-left-to-right 60s linear infinite;
        }
      `}</style>
        </section>
    )
}
