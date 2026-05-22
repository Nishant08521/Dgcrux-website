"use client"

import { useState, useEffect } from "react"
import { ContactPopup } from "@/components/contact-popup"

export function RequirementsPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShowPopup(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [dismissed])

  const handleClose = () => {
    setShowPopup(false)
    setDismissed(true)
  }

  return <ContactPopup isOpen={showPopup} onClose={handleClose} />
}
