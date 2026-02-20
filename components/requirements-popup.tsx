"use client"

import { useState, useEffect } from "react"
import { X, Quote, ChevronLeft, ChevronRight, Mail } from "lucide-react"

const testimonials = [
  {
    quote: "We chose DgCrux to build our app from start to finish. From the first call, we were very impressed with their professionalism, expertise, and commitment to delivering top-notch results.",
    name: "Simon Wing",
    role: "Co-Founder & CEO, Edfundo",
    avatar: "SW",
  },
  {
    quote: "DgCrux delivered our platform on time with exceptional quality. Their team's technical depth and communication made the entire process smooth.",
    name: "Sarah Chen",
    role: "Product Lead, TechFlow",
    avatar: "SC",
  },
]

export function RequirementsPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    companyEmail: "",
    contactNumber: "",
    workEmail: "",
    projectDescription: "",
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("requirementsPopupDismissed")
      if (!dismissed) setIsOpen(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("requirementsPopupDismissed", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Requirements form:", formData)
    handleClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (!isOpen) return null

  const t = testimonials[testimonialIndex]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-hidden">
      <div className="relative w-full max-w-5xl h-[90vh] flex flex-col lg:flex-row bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden shrink-0 min-w-0">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors shrink-0"
          aria-label="Close"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
        </button>

        {/* Left: Dark section - testimonial + awards */}
        <div className="relative lg:w-2/5 flex flex-col min-h-0 bg-gradient-to-br from-orange-600 via-red-600 to-purple-800 text-white p-4 sm:p-5 lg:p-6 overflow-hidden">
          <div className="relative z-10 flex flex-col min-h-0 flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">Leaving Already?</h2>
            <p className="text-white/90 text-xs sm:text-sm mb-3">
              Hear from our clients and why 3000+ businesses trust DgCrux.
            </p>

            {/* Testimonial card */}
            <div className="bg-slate-900/90 rounded-xl p-3 sm:p-4 mb-3 flex-1 min-h-0 flex flex-col">
              <Quote className="w-8 h-8 text-blue-400/80 mb-2 shrink-0" />
              <p className="text-slate-200 text-xs leading-snug mb-3 line-clamp-4 flex-shrink-0">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-2 mt-auto shrink-0">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm truncate">{t.name}</p>
                  <p className="text-slate-400 text-[10px] sm:text-xs truncate">{t.role}</p>
                </div>
                <div className="flex gap-1 ml-auto">
                  <button
                    type="button"
                    onClick={() => setTestimonialIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Awards */}
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80 mb-2 flex items-center gap-1 shrink-0">
              <span className="text-amber-400">✦</span> Awards
            </p>
            <div className="grid grid-cols-2 gap-1.5 shrink-0">
              {["ET Leadership Excellence", "Deloitte Fast 50", "Growth Champions", "Tech Company of the Year"].map((label, i) => (
                <div key={i} className="rounded-lg bg-white/5 border border-white/10 px-2 py-1 text-center">
                  <span className="text-[10px] text-white/70 font-medium line-clamp-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:w-3/5 flex flex-col min-h-0 p-4 sm:p-5 lg:p-6 overflow-hidden bg-white">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 mb-3 pr-8 shrink-0">
            Share Your Requirements to help our experts understand your business objectives and create your customized plan.
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col min-h-0 flex-1 gap-2 sm:gap-2.5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-[#5E2D88] focus:ring-1 focus:ring-[#5E2D88]/20 outline-none shrink-0"
            />
            <div className="relative shrink-0">
              <input
                type="email"
                name="companyEmail"
                placeholder="Company Email"
                value={formData.companyEmail}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-[#5E2D88] focus:ring-1 focus:ring-[#5E2D88]/20 outline-none pr-8"
              />
              <Mail className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
            <div className="flex gap-2 shrink-0">
              <div className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm shrink-0">
                <span className="text-slate-600 font-medium">+91</span>
              </div>
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-[#5E2D88] focus:ring-1 focus:ring-[#5E2D88]/20 outline-none"
              />
            </div>
            <div className="relative shrink-0">
              <input
                type="email"
                name="workEmail"
                placeholder="Work Email (Optional)"
                value={formData.workEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-[#5E2D88] focus:ring-1 focus:ring-[#5E2D88]/20 outline-none pr-8"
              />
              <Mail className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
            <div className="min-h-0 flex-1 flex flex-col shrink-0">
              <textarea
                name="projectDescription"
                placeholder="Describe your project"
                value={formData.projectDescription}
                onChange={handleChange}
                rows={2}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-[#5E2D88] focus:ring-1 focus:ring-[#5E2D88]/20 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#5E2D88] hover:bg-[#4a2370] text-white text-sm font-semibold transition-colors shrink-0"
            >
              Submit
            </button>
          </form>

          <div className="mt-3 pt-3 border-t border-slate-200 shrink-0">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2">Trusted by global brands</p>
            <div className="flex flex-wrap gap-2 items-center opacity-70">
              {["Partner 1", "Partner 2", "Partner 3", "Partner 4"].map((brand, i) => (
                <div key={i} className="h-6 px-3 rounded bg-slate-200 flex items-center">
                  <span className="text-[10px] font-medium text-slate-600">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
