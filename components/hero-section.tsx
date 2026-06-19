"use client"

import { useState } from "react"
import { ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import { ContactPopup } from "@/components/contact-popup"
import google from "@/public/google.png"
import cmmi from "@/public/cmmi.png"
import iso from "@/public/iso.png"
import msme from "@/public/msme logo.png"
import aws from "@/public/aws2.png"
import shopify from "@/public/shopify.png"
import razorpay from "@/public/razorpayy.png"
import startupkarnataka from "@/public/starup karnatak.png"
import startupindia from "@/public/startupindia.png"

const partners = [
  { src: msme, alt: "Partner 1" },
  { src: aws, alt: "Partner 2" },
  { src: shopify, alt: "Partner3" },
  { src: startupindia, alt: "Partner 4" },
  { src: startupkarnataka, alt: "Partner 5" },
  { src: razorpay, alt: "Partner 6" },
  { src: google, alt: "Partner 7" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTksIuHkp-7zuNNa4tXwZQ-sI6d8x9v6QaA&s", alt: "Partner 8" },
  { src: iso, alt: "Partner 9" },
  { src: "https://png.pngtree.com/png-clipart/20250514/original/pngtree-iso-9001-certified-company-logo-badge-vector-png-image_20971536.png", alt: "Partner 10" },


]

export function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900 text-white">
      {/* Background Video (YouTube) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        >
          <source src="/appi-home-hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/80" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 lg:flex-row lg:items-center lg:gap-12 pt-40 lg:pt-52">
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* <div className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-400 backdrop-blur-md">
            Impact Driven Digital & IT Company
          </div> */}
          <h1 className="max-w-xl text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Empowering Businesses with <span className="text-blue-600 italic">AI-First</span> Digital Product <span className="text-[#FFB800]">Engineering</span>
          </h1>
          <p className="max-w-xl text-base text-slate-300 sm:text-lg lg:mx-0">
            DgCrux is your technology partner for digital transformation, helping startups and enterprises design, engineer, and scale intelligent software products built on AI, cloud, and modern architectures.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="group relative overflow-hidden rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                BOOK A FREE CONSULTATION <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
          </div>
          <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>

        {/* Right Side: Moving Box with Partners */}
        <div className="mt-24 flex flex-1 flex-col items-center justify-center lg:mt-32 lg:items-end">
          <div className="w-full max-w-[600px]">
            <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-slate-400 lg:text-right">Our Recognition Partners</p>

            <div className="relative w-full overflow-hidden">
              <div className="relative flex w-full overflow-hidden">
                <div className="flex animate-marquee-horizontal items-center gap-4 py-2">
                  {[...partners, ...partners].map((partner, idx) => (
                    <div
                      key={idx}
                      className="flex h-20 w-[160px] flex-shrink-0 items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-white/30 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4"
                    >
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        width={120}
                        height={60}
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
         <div className="absolute bottom-4 right-4">
        <iframe width="100" height="100" src="https://clutch.co/share/badges/2241869/51907?utm_source=clutch_top_company_badge&utm_medium=image_embed" title="Top Clutch Software Developers Information Technology Bengaluru"></iframe>
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
