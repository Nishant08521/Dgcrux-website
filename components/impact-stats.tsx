// "use client"

// import React from "react"
// import Image from "next/image"

// const stats = [
//     {
//         number: "1600+",
//         label: "TECHNOLOGY SPECIALISTS",
//         description: "designing and building AI-led, cloud-native systems at enterprise scale",
//         image: "/new/review.jpeg",
//     },
//     {
//         number: "3000+",
//         label: "SOLUTIONS DELIVERED",
//         description: "delivered across consulting, engineering, and large-scale digital transformation initiatives",
//         image: "/new/review.jpeg",
//     },
//     {
//         number: "10+",
//         label: "YEARS OF EXPERIENCE",
//         description: "pioneering digital excellence and driving innovation since our inception",
//         image: "/new/review.jpeg",
//     },
//     {
//         number: "35+",
//         label: "INDUSTRIES MASTERED",
//         description: "mastered with deep expertise across highly regulated, data-intensive, and complex industries",
//         image: "/new/review.jpeg",
//     },
//     {
//         number: "25+",
//         label: "GLOBAL RECOGNITIONS",
//         description: "honored for engineering excellence and impactful digital transformations worldwide",
//         image: "/new/review.jpeg",
//     },
// ]

// export function ImpactStats() {
//     return (
//         <section className="bg-[#050505] py-10 overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4 mb-16 text-center lg:text-left">
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.2]">
//                     Engineering <span className="text-[#2563eb] italic">Excellence</span> at Scale
//                 </h2>
//                 <p className="text-slate-400 text-lg max-w-2xl">Fueling innovation through deep technical expertise and industry-specific solutions.</p>
//             </div>

//             <div className="relative flex overflow-hidden">
//                 {/* Faders */}
//                 <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
//                 <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

//                 <div className="flex animate-marquee-left-to-right whitespace-nowrap group hover:[animation-play-state:paused] py-4">
//                     {[...stats, ...stats, ...stats].map((stat, idx) => (
//                         <div
//                             key={idx}
//                             className="inline-block w-[340px] shrink-0 mx-4 bg-[#111] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#2563eb]/50 hover:shadow-[#2563eb]/10"
//                         >
//                             {/* Top Section */}
//                             <div className="p-8 pb-5">
//                                 <div className="flex flex-col gap-1 mb-4">
//                                     <span className="text-5xl font-black text-white tracking-tighter italic leading-none">
//                                         {stat.number}
//                                     </span>
//                                     <span className="text-sm font-bold text-[#2563eb] uppercase tracking-[0.2em]">
//                                         {stat.label}
//                                     </span>
//                                 </div>
//                                 <p className="text-slate-400 leading-relaxed whitespace-normal text-base font-medium opacity-80">
//                                     {stat.description}
//                                 </p>
//                             </div>

//                             {/* Bottom Section (Visual) */}
//                             <div className="relative h-56 w-full bg-[#0a0a0a] overflow-hidden">
//                                 <Image
//                                     src={stat.image}
//                                     alt={stat.label}
//                                     fill
//                                     className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105"
//                                 />
//                                 {/* Overlay Glow */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
//                                 <div className="absolute inset-0 bg-[#2563eb]/5 transition-opacity group-hover:opacity-20" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

"use client"

import React from "react"
import Image from "next/image"

const images = [
  { image: "/new/review.jpeg", href: "https://clutch.co/go-to-review/5966535f-6dab-458e-b87b-f7f8dd934f55/350674" },
  { image: "/new/review2.jpeg", href: "https://clutch.co/go-to-review/5966535f-6dab-458e-b87b-f7f8dd934f55/334339" },
  { image: "/new/review3.jpeg", href: "https://clutch.co/go-to-review/5966535f-6dab-458e-b87b-f7f8dd934f55/352894" },
  { image: "/new/review4.jpeg", href: "https://clutch.co/go-to-review/5966535f-6dab-458e-b87b-f7f8dd934f55/342157" },
  { image: "/new/review5.jpeg", href: "https://clutch.co/go-to-review/5966535f-6dab-458e-b87b-f7f8dd934f55/375868" },
  { image: "/new/review6.jpeg", href: "https://clutch.co/go-to-review/5966535f-6dab-458e-b87b-f7f8dd934f55/393079" },
  { image: "/new/review7.jpeg", href: "https://clutch.co/go-to-review/5966535f-6dab-458e-b87b-f7f8dd934f55/352566" },

]

export function ImpactStats() {
  return (
    <section className="bg-[#050505] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.2]">
                    Trusted by <span className="text-[#2563eb] italic">Industry</span> Leaders
                 </h2>
                 <p className="text-slate-400 text-lg max-w-2xl">Explore verified client reviews and success stories on Clutch. Discover how we've helped startups and enterprises build scalable digital products.</p>
             </div>

      <div className="relative flex overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div className="flex animate-marquee-left-to-right whitespace-nowrap hover:[animation-play-state:paused] py-4">
          {[...images, ...images, ...images].map((item, idx) => (
            <div
              key={idx}
              className="inline-block w-[380px] h-[500px] shrink-0 mx-4 rounded-[32px] overflow-hidden border border-white/10 bg-[#111] shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:border-[#2563eb]/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]"
            >
              <a href={item.href} className="block h-full w-full" aria-label={`View review ${idx + 1}`}>
                <div className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt={`Review ${idx + 1}`}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 hover:scale-110"
                  />

                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </a>
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
