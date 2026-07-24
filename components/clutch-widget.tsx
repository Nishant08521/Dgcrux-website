"use client"

import { useEffect, useState } from "react"

export function ClutchWidget() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Load Clutch script dynamically after component mounts
    const loadScript = () => {
      const scriptId = "clutch-widget-script"
      let script = document.getElementById(scriptId) as HTMLScriptElement | null

      if (!script) {
        script = document.createElement("script")
        script.id = scriptId
        script.type = "text/javascript"
        script.src = "https://widget.clutch.co/static/js/widget.js"
        script.async = true
        document.body.appendChild(script)
      } else {
        // If script is already loaded (e.g. client-side navigation), 
        // we trigger Clutch reinitialization if the global object is available.
        try {
          // @ts-ignore
          if (window.CLUTCH && typeof window.CLUTCH.init === "function") {
            // @ts-ignore
            window.CLUTCH.init()
          }
        } catch (e) {
          console.warn("Clutch re-initialization failed:", e)
        }
      }
    }

    loadScript()
  }, [])

  if (!mounted) {
    // Return a placeholder of similar size to prevent CLS (Cumulative Layout Shift)
    return <div className="h-[45px] w-[150px] bg-transparent" />
  }

  return (
    <div
      className="clutch-widget"
      data-url="https://widget.clutch.co"
      data-widget-type="2"
      data-height="45"
      data-nofollow="false"
      data-expandifr="true"
      data-darkbg="darkbg"
      data-clutchcompany-id="2241869"
      style={{ minHeight: "45px" }}
    />
  )
}
