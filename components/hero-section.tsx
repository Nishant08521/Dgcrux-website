"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import { ContactPopup } from "@/components/contact-popup"
import google from "@/public/google.png"
import cmmi from "@/public/cmmi.png"
import startupindia from "@/public/startupindia.png"
import iso from "@/public/iso.png"

const partners = [
  // { src: "https://e7.pngegg.com/pngimages/740/237/png-clipart-google-adwords-google-partners-advertising-pay-per-click-google-partner-search-engine-optimization-company-thumbnail.png", alt: "Partner 1" },
  // { src: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/aws-color.png", alt: "Partner 2" },
  // { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2SrOkC9DktLse5ViTRPpDZiph4wpmlqxcg&s", alt: "Partner 3" },
  // { src: "https://media.licdn.com/dms/image/v2/C4E12AQHvuLCHhKuejQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520077509521?e=2147483647&v=beta&t=RlzC0uMNRc0wvHNLfqqeiruP6W91lSjzUf0tIZcvkrs", alt: "Partner 4" },
  // { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTksIuHkp-7zuNNa4tXwZQ-sI6d8x9v6QaA&s", alt: "Partner 5" },
  // { src: "https://p7.hiclipart.com/preview/85/385/219/iso-9000-quality-management-systems%E2%80%94requirements-iso-9001-logo-international-organization-for-standardization-iso-9001-thumbnail.jpg", alt: "Partner 6" },
  { src: "https://miraculoustaxes.in/wp-content/uploads/2024/05/msme-ssi-registration.png", alt: "Partner 7" },
  { src: "https://icon2.cleanpng.com/20180604/yrx/aa9q93eek.webp", alt: "Partner 8" },
  { src: "https://intellectual-property-helpdesk.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-02/Startup%20Karnataka.png?itok=OP7rFUbL", alt: "Partner 9" },
  { src: google, alt: "Partner 10" },
  { src: cmmi, alt: "Partner 11" },
  { src: startupindia, alt: "Partner 12" },
  { src: "https://www.vhv.rs/dpng/d/581-5813421_certified-iso-9001-2015-company-hd-png-download.png", alt: "Partner 13" },
  { src: iso, alt: "Partner 14" }

]

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

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
            Empowering Businesses with <span className="text-blue-600 italic">AI-Driven</span> Digital Product <span className="text-[#FFB800]">Engineering</span>
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
          <div className="w-full max-w-[480px]">
            <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-slate-400 lg:text-right">Our Trusted Partners</p>

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
