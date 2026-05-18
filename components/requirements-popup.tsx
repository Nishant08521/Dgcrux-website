"use client"

import { useState, useEffect } from "react"
import { X, Quote, ChevronLeft, ChevronRight, Mail } from "lucide-react"
import { motion } from "framer-motion"

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

const brandLogos = [
  { name: "Suncity Projects", logo: "https://dgcrux.com/images/Dgcruxclient/1.png" },
  { name: "BingX", logo: "https://dgcrux.com/images/Dgcruxclient/2.png" },
  { name: "Rapido", logo: "https://dgcrux.com/images/Dgcruxclient/3.png" },
  { name: "Zeross", logo: "https://dgcrux.com/images/Dgcruxclient/4.png" },
  { name: "Sourcx.ai", logo: "https://dgcrux.com/images/Dgcruxclient/5.png" },
  { name: "Medicine", logo: "https://dgcrux.com/images/Dgcruxclient/6.png" },
  { name: "I-Bee Farm", logo: "https://dgcrux.com/images/Dgcruxclient/22.png" },
  { name: "Mamma", logo: "https://dgcrux.com/images/Dgcruxclient/19.png" },
  { name: "Grohood", logo: "https://dgcrux.com/images/Dgcruxclient/8.png" },
  { name: "Client J", logo: "https://dgcrux.com/images/Dgcruxclient/18.png" }
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm overflow-hidden">
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
        <div className="relative lg:w-2/5 flex flex-col min-h-0 bg-gradient-to-br from-[#0a0715] via-[#120b24] to-[#1e3a8a] text-white p-4 sm:p-5 lg:p-6 overflow-hidden">
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          
          {/* Glowing background orbs */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col min-h-0 flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-1 text-white">Leaving Already?</h2>
            <p className="text-slate-300 text-xs sm:text-sm mb-4">
              Hear from our clients and why 3000+ businesses trust DgCrux.
            </p>

            {/* Testimonial card */}
            <div className="bg-slate-950/70 border border-white/5 rounded-2xl p-4 sm:p-5 mb-4 flex-1 min-h-0 flex flex-col">
              <Quote className="w-8 h-8 text-blue-400 mb-3 shrink-0" />
              <p className="text-slate-200 text-xs leading-relaxed mb-4 line-clamp-5 flex-shrink-0 font-light">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-2 mt-auto shrink-0 border-t border-white/5 pt-4">
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
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Awards */}
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5 shrink-0">
              <span className="text-blue-500">✦</span> Awards & Recognition
            </p>
            <div className="grid grid-cols-2 gap-2 shrink-0">
              {["ET Leadership Excellence", "Deloitte Fast 50", "Growth Champions", "Tech Company of the Year"].map((label, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 px-2 py-2 text-center">
                  <span className="text-[10px] text-slate-200 font-bold line-clamp-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:w-3/5 flex flex-col min-h-0 p-4 sm:p-5 lg:p-6 overflow-hidden bg-white">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 mb-4 pr-8 shrink-0 leading-snug">
            Share Your Requirements to help our experts understand your business objectives and create your customized plan.
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col min-h-0 flex-1 gap-2 sm:gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#5E2D88] focus:ring-1 focus:ring-[#5E2D88]/20 outline-none shrink-0"
            />
            <div className="relative shrink-0">
              <input
                type="email"
                name="companyEmail"
                placeholder="Company Email"
                value={formData.companyEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#5E2D88] focus:ring-1 focus:ring-[#5E2D88]/20 outline-none pr-8"
              />
              <Mail className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
            <div className="flex gap-2 shrink-0">
              <div className="flex items-center gap-1 px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm shrink-0">
                <span className="text-slate-600 font-medium">+91</span>
              </div>
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="flex-1 min-w-0 px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#5E2D88] focus:ring-1 focus:ring-[#5E2D88]/20 outline-none"
              />
            </div>
            <div className="relative shrink-0">
              <input
                type="email"
                name="workEmail"
                placeholder="Work Email (Optional)"
                value={formData.workEmail}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#5E2D88] focus:ring-1 focus:ring-[#5E2D88]/20 outline-none pr-8"
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
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 focus:border-[#5E2D88] focus:ring-1 focus:ring-[#5E2D88]/20 outline-none resize-none flex-1 min-h-[60px]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#5E2D88] hover:bg-[#4a2370] text-white text-sm font-semibold transition-colors shrink-0 shadow-lg shadow-[#5E2D88]/20"
            >
              Submit
            </button>
          </form>

          {/* Trusted by Global Brands Moving Marquee */}
          <div className="mt-3 pt-3 border-t border-slate-200 shrink-0 overflow-hidden relative w-full">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Trusted by global brands</p>
            <div className="relative flex overflow-hidden w-full h-8">
              <motion.div
                className="flex gap-10 items-center whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 25,
                  repeat: Infinity
                }}
              >
                {[...brandLogos, ...brandLogos].map((brand, i) => (
                  <div 
                    key={i} 
                    className="flex-shrink-0 w-24 h-6 relative grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-355 flex items-center justify-center"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
              {/* Soft gradient fading masks on the sides */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
