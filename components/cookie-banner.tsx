"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setShowBanner(true)
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99] bg-[#1a2847] text-white px-8 py-6 sm:px-12 lg:px-16 shadow-2xl border-t border-blue-900">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Cookie Message */}
        <p className="text-sm sm:text-base text-center sm:text-left flex-1">
          This website stores cookies on your computer to improve your website experience. You can see more info in our{" "}
          <Link href="/privacy-policy" className="text-blue-300 hover:text-blue-200 underline">
            privacy policy
          </Link>
          . By closing this message you will accept cookies for optimal experience.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/privacy-policy"
            className="px-6 py-2.5 text-sm font-medium text-blue-300 hover:text-blue-200 border border-blue-300 hover:border-blue-200 rounded transition-colors uppercase tracking-wide"
          >
            Manage
          </Link>
          <button
            onClick={handleClose}
            className="px-6 py-2.5 text-sm font-medium bg-white text-[#1a2847] hover:bg-gray-100 rounded transition-colors uppercase tracking-wide"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

