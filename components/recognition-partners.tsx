"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import google from "@/public/google.png"
import cmmi from "@/public/cmmi.png"
import startupindia from "@/public/startupindia.png"
import iso from "@/public/iso.png"
import aws from "@/public/aws-partner-logo.png"
import shopify from "@/public/shopify.png"
import razorpay from "@/public/razorpayy.png"

const partners = [
  { src: "https://miraculoustaxes.in/wp-content/uploads/2024/05/msme-ssi-registration.png", alt: "MSME" },
  // { src: "https://icon2.cleanpng.com/20180604/yrx/aa9q93eek.webp", alt: "Startup Karnataka" },
  { src: "https://intellectual-property-helpdesk.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-02/Startup%20Karnataka.png?itok=OP7rFUbL", alt: "Partner 9" },
  { src: google, alt: "Google Partner" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTksIuHkp-7zuNNa4tXwZQ-sI6d8x9v6QaA&s", alt: "CMMI Level 3" },
  { src: startupindia, alt: "Startup India" },
  // { src: "https://www.vhv.rs/dpng/d/581-5813421_certified-iso-9001-2015-company-hd-png-download.png", alt: "ISO Certified" },
  { src: iso, alt: "ISO Logo" },
  { src: aws, alt: "AWS Partner" },
  { src: "https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.jpg", alt: "Shopify Partner" },
  { src: razorpay, alt: "Razorpay Partner" }
]

export function RecognitionPartners() {
  return (
    <section className="py-12 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">Recognized & Certified By</p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex gap-12 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity
          }}
        >
          {/* Double the array for seamless loop */}
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[180px] h-20 flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={150}
                height={80}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Faders */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  )
}
