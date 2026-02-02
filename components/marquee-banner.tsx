"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { useState } from "react"
import { ContactPopup } from "@/components/contact-popup"

export function MarqueeBanner() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    <div className="w-full bg-primary text-primary-foreground border-b border-border">
      <div className="flex items-center justify-between h-10 px-4 sm:px-6 lg:px-8">
        {/* Marquee Text */}
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap inline-block">
            <span className="text-sm font-medium mx-4">🎉 Welcome to dgcrux - Your Technology Partner</span>
            <span className="text-sm font-medium mx-4">🚀 Building innovative solutions for your business</span>
            <span className="text-sm font-medium mx-4">💡 AI • Cloud • Software Development • Digital Marketing</span>
            <span className="text-sm font-medium mx-4">🎉 Welcome to dgcrux - Your Technology Partner</span>
            <span className="text-sm font-medium mx-4">🚀 Building innovative solutions for your business</span>
            <span className="text-sm font-medium mx-4">💡 AI • Cloud • Software Development • Digital Marketing</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 ml-4 flex-shrink-0">
          <Link
            href="tel:+1234567890"
            className="text-xs sm:text-sm font-medium hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            Call now
          </Link>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-yellow-400 text-black px-3 py-1 rounded text-xs sm:text-sm font-medium hover:bg-yellow-500 transition-colors whitespace-nowrap"
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
