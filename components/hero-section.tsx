
"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { ContactPopup } from "@/components/contact-popup"

import google from "@/public/google.png"
import iso from "@/public/iso.png"
import msme from "@/public/msme logo.png"
import aws from "@/public/aws2.png"
import shopify from "@/public/shopify.png"
import razorpay from "@/public/razorpayy.png"
import startupkarnataka from "@/public/starup karnatak.png"
import startupindia from "@/public/startupindia.png"
import cmmi from "@/public/cmmi3.png"
import iso9001 from "@/public/iso9001.png"

const partners = [
  { src: msme, alt: "MSME" },
  { src: aws, alt: "AWS" },
  { src: shopify, alt: "Shopify" },
  { src: startupindia, alt: "Startup India" },
  { src: startupkarnataka, alt: "Startup Karnataka" },
  { src: razorpay, alt: "Razorpay"  },
  { src: google, alt: "Google" },
  {
    src: cmmi,
    alt: "CMMI",
  },
  { src: iso, alt: "ISO" },
  {
    src: iso9001,
    alt: "ISO 9001",
  },
]

export function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900 text-white pb-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/appi-home-hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[95vh] max-w-7xl items-center justify-between px-6">

        {/* LEFT */}
        <div className="max-w-3xl">

          <h1 className="text-2xl font-extrabold leading-tight lg:text-6xl">
            Empowering Businesses with{" "}
            <span className="text-blue-500 italic">AI-First</span>{" "}
            Digital Product{" "}
            <span className="text-yellow-400">Engineering</span>
          </h1>

          <p className="mt-6 text-sm md:text-lg text-gray-300 leading-6 md:leading-8">
            DgCrux is your technology partner for digital transformation,
            helping startups and enterprises design, engineer and scale
            intelligent software products built on AI, cloud and modern
            architectures.
          </p>

          <button
            onClick={() => setIsPopupOpen(true)}
            className="group mt-8 mb-12 md:mb-0 flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            BOOK A FREE CONSULTATION
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </button>

          <ContactPopup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
          />
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex  mt-100 ">

          <iframe
            width="150"
            height="150"
            src="https://clutch.co/share/badges/2241869/51907?utm_source=clutch_top_company_badge&utm_medium=image_embed"
            title="Clutch Badge"
            className="rounded-lg"
          />

        </div>
            <div className="hidden lg:flex  mt-100 ">
        <iframe width="150" height="150" src="https://clutch.co/share/badges/2241869/102181?utm_source=clutch_top_company_badge&utm_medium=image_embed" title="Top Clutch Generative Ai Company Bengaluru 2026"></iframe>
        </div>
            <div className="hidden lg:flex  mt-100 ">
        <iframe width="150" height="150" src="https://clutch.co/share/badges/2241869/51702?utm_source=clutch_top_company_badge&utm_medium=image_embed" title="Top Clutch Software Developers Government Bengaluru"></iframe>
      </div>
      </div>

      {/* Recognition Bar */}
      <div className="relative md:absolute md:bottom-0 left-0 z-20 w-full bg-transparent">

        <div className="mx-auto max-w-7xl px-6 py-4">

          <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-[3px] text-gray-300 lg:text-left">
            Our Recognition Partners
          </h3>

          <div className="relative overflow-hidden">

            <div className="flex w-max animate-marquee gap-5">

              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex h-16 md:h-20 w-36 md:w-40 flex-shrink-0 items-center justify-center rounded-xl bg-slate-800/60 border border-white/10 p-3 shadow-sm overflow-hidden"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}

            </div>

            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent" />

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 22s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}