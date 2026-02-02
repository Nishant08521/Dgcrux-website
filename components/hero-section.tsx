"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const slides = [
    {
      title: "Impact Driven Digital & IT Company",
      subtitle: "Welcome to DgCrux Technology",
      image: "https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Embrace the power of Digital Technology",
      subtitle: "Welcome to DgCrux Technology",
      image: "https://imageio.forbes.com/specials-images/imageserve/66e8ad4b29ea61509edd8b63/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    },
    {
      title: "Stand out in the digital world",
      subtitle: "Welcome to DgCrux Technology",
      image: "https://static.vecteezy.com/system/resources/thumbnails/049/191/168/small/a-modern-workspace-featuring-advanced-technology-including-a-holographic-calendar-and-illuminated-data-streams-creating-an-innovative-and-dynamic-environment-for-productivity-photo.jpg",
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(id)
  }, [slides.length])

  const openForm = () => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="relative h-[75vh] min-h-[560px] w-full">
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0"
            }`}
            aria-hidden={idx !== current}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-slate-900/70" />
            <div className="relative z-20 flex h-full items-center">
              <div className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-400 backdrop-blur">
                    {slide.subtitle}
                  </div>
                  <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{slide.title}</h1>
                  <p className="text-lg text-slate-200">
                    We build high-impact digital experiences across web, mobile, and cloud with speed, quality, and
                    measurable outcomes.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={openForm}
                      className="inline-flex items-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    >
                      Book a 15 Min Free Consultation
                    </button>
                    <a
                      href="https://www.linkedin.com/company/dgcrux-technology/"
                      target="_blank"
                      className="text-sm font-semibold text-amber-300 underline-offset-4 hover:underline"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_25%)]" />

        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? "w-6 bg-amber-400" : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
