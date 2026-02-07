"use client"

import { useEffect, useState } from "react"

const partners = [
  { src: "https://vectorseek.com/wp-content/uploads/2023/09/Google-Partner-Logo-Vector.svg-.png", alt: "Partner 1" },
  { src: "https://logowik.com/content/uploads/images/aws-partner-network2396.logowik.com.webp", alt: "Partner 2" },
  { src: "https://www.uxdt.nic.in/wp-content/uploads/2020/06/Startup-India_Preview.png", alt: "Partner 3" },
  { src: "https://media.licdn.com/dms/image/v2/C4E12AQHvuLCHhKuejQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520077509521?e=2147483647&v=beta&t=RlzC0uMNRc0wvHNLfqqeiruP6W91lSjzUf0tIZcvkrs", alt: "Partner 4" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTksIuHkp-7zuNNa4tXwZQ-sI6d8x9v6QaA&s", alt: "Partner 5" },
  { src: "https://p7.hiclipart.com/preview/85/385/219/iso-9000-quality-management-systems%E2%80%94requirements-iso-9001-logo-international-organization-for-standardization-iso-9001-thumbnail.jpg", alt: "Partner 6" },
  { src: "https://miraculoustaxes.in/wp-content/uploads/2024/05/msme-ssi-registration.png", alt: "Partner 7" },
]

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900 text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2020/09/24/50541-462378877_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/80 backdrop-blur-sm" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-4 pb-20 lg:flex-row lg:items-start lg:gap-12 lg:pt-16">
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-6 text-center lg:mt-12 lg:text-left">
          {/* <div className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-400 backdrop-blur-md">
            Impact Driven Digital & IT Company
          </div> */}
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Engineering the <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Next Generation</span> of Digital Systems
          </h1>
          <p className="max-w-xl text-base text-slate-300 sm:text-lg lg:mx-0">
            We build high-impact digital experiences across web, mobile, and cloud with speed, quality, and measurable outcomes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button className="group relative overflow-hidden rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-500">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold backdrop-blur-md transition-all hover:bg-white/10">
              Our Services
            </button>
          </div>
        </div>

        {/* Right Side: Moving Box with Partners */}
        <div className="mt-16 flex flex-1 flex-col items-center justify-center lg:mt-0 lg:items-end lg:self-end lg:pb-16">
          <div className="w-full max-w-[480px]">
            <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-slate-400 lg:text-right">Our Trusted Partners</p>

            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

              {/* Horizontal Marquee */}
              <div className="relative flex w-full overflow-hidden">
                <div className="flex animate-marquee-horizontal items-center gap-8 py-2">
                  {[...partners, ...partners].map((partner, idx) => (
                    <div
                      key={idx}
                      className="flex h-14 w-[120px] flex-shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <img
                        src={partner.src}
                        alt={partner.alt}
                        className="max-h-full max-w-full object-contain filter brightness-110 contrast-125 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Faders for smoother marquee edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/80 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-horizontal {
          animation: marquee-horizontal 20s linear infinite;
        }
        .animate-marquee-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
