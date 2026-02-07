"use client"

import React from "react"
import Image from "next/image"

const stats = [
    {
        number: "1600+",
        label: "TECHNOLOGY SPECIALISTS",
        description: "designing and building AI-led, cloud-native systems at enterprise scale",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    },
    {
        number: "3000+",
        label: "SOLUTIONS",
        description: "delivered across consulting, engineering, and large-scale digital transformation initiatives",
        logos: [
            "https://logowik.com/content/uploads/images/google-logo-2020.jpg",
            "https://logowik.com/content/uploads/images/kpmg1692.logowik.com.webp",
            "https://logowik.com/content/uploads/images/kfc4456.jpg",
            "https://logowik.com/content/uploads/images/american-express5153.logowik.com.webp",
            "https://logowik.com/content/uploads/images/dominos-pizza9082.logowik.com.webp",
            "https://logowik.com/content/uploads/images/emaar4131.logowik.com.webp",
            "https://vectorseek.com/wp-content/uploads/2023/09/Google-Partner-Logo-Vector.svg-.png",
            "https://logowik.com/content/uploads/images/hero-motocorp2985.jpg",
        ],
        isLogos: true,
        image: "", // Fallback to satisfy lint
    },
    {
        number: "150+",
        label: "AI MODELS",
        description: "deployed and operationalized across production systems, workflows, and decision platforms",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4e886d122?q=80&w=800&auto=format&fit=crop",
    },
    {
        number: "35+",
        label: "INDUSTRIES",
        description: "mastered with deep expertise across highly regulated, data-intensive, and complex industries",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        isIcons: true,
    },
]

export function ImpactStats() {
    return (
        <section className="bg-[#050505] py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-16 text-center lg:text-left">
                <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Engineering Excellence at Scale</h2>
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
                            className="inline-block w-[420px] shrink-0 mx-6 bg-[#111] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-blue-500/50 hover:shadow-blue-500/10"
                        >
                            {/* Top Section */}
                            <div className="p-10 pb-6">
                                <div className="flex flex-col gap-2 mb-6">
                                    <span className="text-6xl font-black text-white tracking-tighter italic leading-none">
                                        {stat.number}
                                    </span>
                                    <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">
                                        {stat.label}
                                    </span>
                                </div>
                                <p className="text-slate-400 leading-relaxed whitespace-normal text-base font-medium opacity-80">
                                    {stat.description}
                                </p>
                            </div>

                            {/* Bottom Section (Visual) */}
                            <div className="relative h-72 w-full bg-[#0a0a0a] overflow-hidden">
                                {stat.isLogos ? (
                                    <div className="absolute inset-0 p-10 grid grid-cols-3 gap-8 items-center justify-items-center opacity-70">
                                        {stat.logos?.map((url, i) => (
                                            <img key={i} src={url} alt="client" className="max-h-12 w-auto grayscale brightness-150 contrast-125" />
                                        ))}
                                    </div>
                                ) : stat.isIcons ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="grid grid-cols-4 gap-6 p-10 opacity-40">
                                            {[...Array(12)].map((_, i) => (
                                                <div key={i} className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center">
                                                    <div className="w-4 h-4 rounded-full bg-white/20" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Image
                                        src={stat.image}
                                        alt={stat.label}
                                        fill
                                        className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                )}
                                {/* Overlay Glow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-blue-500/5 transition-opacity group-hover:opacity-20" />
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
