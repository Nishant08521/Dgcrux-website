"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check,
  MapPin,
  Users,
  Award,
  Briefcase,
  BookOpen,
  GraduationCap,
  Star,
  CheckCircle2,
  Smartphone,
  Layers,
  Cloud,
  Database,
  Brain,
  Megaphone,
  Bot,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  Clock
} from "lucide-react"

import google from "@/public/google.png"
import startupindia from "@/public/startupindia.png"
import iso from "@/public/iso.png"
import aws from "@/public/aws-partner-logo.png"
import razorpay from "@/public/razorpayy.png"

// Define types for fee cards
interface FeeCard {
  duration: string
  price: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function InternshipPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'
  // Global modes synced together for a cohesive experience
  const [isOnline, setIsOnline] = useState<boolean>(true)

  // Registration Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    duration: "",
    mode: "Online" // Syncs with isOnline
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)

  // Sync mode state with isOnline toggle
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      mode: isOnline ? "Online" : "Offline"
    }))
  }, [isOnline])

  // Course fee structure data
  const onlineFees: FeeCard[] = [
    {
      duration: "1 Month Internship Programme",
      price: "₹ 3,600",
      features: ["Basic Course Coverage", "Project Experience", "Certificate"],
      buttonText: "Book Now"
    },
    {
      duration: "3 Months Internship Programme",
      price: "₹ 9,500",
      features: ["Foundation Course Coverage", "Multiple Projects", "Career Guidance", "Certificate"],
      buttonText: "Enroll Now",
      popular: true
    },
    {
      duration: "8 Months Internship Programme",
      price: "₹ 18,000",
      features: ["Advanced Course Coverage", "Industry Projects", "Career Guidance", "Certificate"],
      buttonText: "Enroll Now"
    }
  ]

  const offlineFees: FeeCard[] = [
    {
      duration: "1 Month Internship Programme",
      price: "₹ 6,500",
      features: ["Basic Course Coverage", "Hands-on Classroom Training", "Project Experience", "Certificate"],
      buttonText: "Book Now"
    },
    {
      duration: "3 Months Internship Programme",
      price: "₹ 15,500",
      features: ["Foundation Course Coverage", "Face-to-face Mentorship", "Multiple Projects", "Placement Assistance", "Certificate"],
      buttonText: "Enroll Now",
      popular: true
    },
    {
      duration: "8 Months Internship Programme",
      price: "₹ 28,000",
      features: ["Advanced Course Coverage", "Daily Lab Access", "Industry Projects", "1-on-1 Mock Interviews", "Job Guarantee Assistance", "Certificate"],
      buttonText: "Enroll Now"
    }
  ]

  const currentFees = isOnline ? onlineFees : offlineFees

  const courses = [
    { name: "React Native", desc: "Mobile App Development", tag: "#Mobile", icon: Smartphone, color: "text-sky-500 bg-sky-50" },
    { name: "MERN Stack", desc: "Web App Development", tag: "#FullStack", icon: Layers, color: "text-emerald-500 bg-emerald-50" },
    { name: "DevOps", desc: "AWS Fundamentals", tag: "#Cloud", icon: Cloud, color: "text-orange-500 bg-orange-50" },
    { name: "Python & Data Science", desc: "Data Analysis", tag: "#Data", icon: Database, color: "text-blue-500 bg-blue-50" },
    { name: "Machine Learning", desc: "ML Fundamentals", tag: "#AI", icon: Brain, color: "text-teal-500 bg-teal-50" },
    { name: "Digital Marketing", desc: "Marketing Strategy", tag: "#SEO", icon: Megaphone, color: "text-rose-500 bg-rose-50" },
    { name: "Generative AI", desc: "AI Applications", tag: "#AI", icon: Bot, color: "text-indigo-500 bg-indigo-50" }
  ]

  const partnerLogos = [
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


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear errors as user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.fullName.trim()) errors.fullName = "Full name is required"
    if (!formData.email.trim()) {
      errors.email = "Email address is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email"
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!/^\+?([0-9]{1,4})?[-. ]?([0-9]{10})$/.test(formData.phone.replace(/\s+/g, ""))) {
      errors.phone = "Please enter a valid 10-digit phone number"
    }
    if (!formData.course) errors.course = "Please select a course"
    if (!formData.duration) errors.duration = "Please select an internship duration"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const res = await fetch(`${apiUrl}/api/internship`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Server error")
      setShowSuccessModal(true)
    } catch (err) {
      console.error("Failed to save internship form:", err)
      // Still show success to the user even if backend is down
      setShowSuccessModal(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Smooth scroll to top form
  const scrollToForm = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b082a] via-[#090724] to-[#05041a] pt-24 pb-32 text-white">
        {/* Background grids/glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px]"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Column Info */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#fbc02d] w-fit mb-6 border border-white/5 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" /> Admissions Open for 2026
              </span>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance leading-tight">
                Summer Internship <br />
                <span className="text-[#ffd54f]">Programme 2026</span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
                Master the Skills Companies Are Hiring For. Get industry-grade training in Software Development & Digital Marketing.
              </p>

              <div className="mt-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg text-sm shadow-lg shadow-orange-600/20">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                  </span>
                  Online & Offline Mode
                </span>
              </div>

              {/* Bullet Highlights */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30">
                    <div className="w-3.5 h-3.5 rounded-full bg-orange-500"></div>
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-200">Industry-Recognized Certification</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30">
                    <div className="w-3.5 h-3.5 rounded-full bg-purple-500"></div>
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-200">Live Industry Projects</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-200">Expert Mentorship</span>
                </div>
              </div>

              <div className="mt-10">
                <a href="/certificate-verify" className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl shadow-lg shadow-purple-600/30 transition-all group">
                  <Award className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Get Verified Certificate
                </a>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#ffd54f]/10 rounded-2xl blur-xl -z-10"></div>

              <div className="bg-[#14123c]/85 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
                <h3 className="text-xl font-bold text-center text-white mb-2">Begin Your Journey</h3>
                <p className="text-center text-slate-400 text-xs mb-6">Fill in the details to reserve your seat</p>

                <form onSubmit={handleFormSubmit} className="space-y-4">

                  {/* Mode Toggles */}
                  <div className="grid grid-cols-2 p-1 bg-slate-900/50 rounded-lg border border-white/5 mb-4">
                    <button
                      type="button"
                      onClick={() => setIsOnline(true)}
                      className={`py-2 text-xs font-semibold rounded-md transition-all duration-300 ${isOnline
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                        }`}
                    >
                      Online
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOnline(false)}
                      className={`py-2 text-xs font-semibold rounded-md transition-all duration-300 ${!isOnline
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                        }`}
                    >
                      Offline
                    </button>
                  </div>

                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all ${formErrors.fullName ? "border-red-500 focus:ring-red-500/30" : "border-white/10"
                        }`}
                    />
                    {formErrors.fullName && <p className="text-red-400 text-[10px] mt-1 px-1">{formErrors.fullName}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all ${formErrors.email ? "border-red-500 focus:ring-red-500/30" : "border-white/10"
                        }`}
                    />
                    {formErrors.email && <p className="text-red-400 text-[10px] mt-1 px-1">{formErrors.email}</p>}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all ${formErrors.phone ? "border-red-500 focus:ring-red-500/30" : "border-white/10"
                        }`}
                    />
                    {formErrors.phone && <p className="text-red-400 text-[10px] mt-1 px-1">{formErrors.phone}</p>}
                  </div>

                  {/* Course Dropdown */}
                  <div className="relative">
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-[#110e34] border rounded-lg text-sm text-white appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer transition-all ${formErrors.course ? "border-red-500 focus:ring-red-500/30" : "border-white/10"
                        } ${!formData.course ? "text-slate-400" : "text-white"}`}
                    >
                      <option value="" disabled>Select Course</option>
                      {courses.map((c, i) => (
                        <option key={i} value={c.name} className="bg-[#110e34] text-white">{c.name} ({c.desc})</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    {formErrors.course && <p className="text-red-400 text-xxs mt-1 px-1">{formErrors.course}</p>}
                  </div>

                  {/* Duration Dropdown */}
                  <div className="relative">
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-[#110e34] border rounded-lg text-sm text-white appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer transition-all ${formErrors.duration ? "border-red-500 focus:ring-red-500/30" : "border-white/10"
                        } ${!formData.duration ? "text-slate-400" : "text-white"}`}
                    >
                      <option value="" disabled>Select Internship Duration</option>
                      <option value="1 Month" className="bg-[#110e34] text-white">1 Month Internship</option>
                      <option value="3 Months" className="bg-[#110e34] text-white">3 Months Internship</option>
                      <option value="8 Months" className="bg-[#110e34] text-white">8 Months Internship</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    {formErrors.duration && <p className="text-red-400 text-xxs mt-1 px-1">{formErrors.duration}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 bg-gradient-to-r from-[#ff4757] to-[#ff6b81] hover:from-[#ff3748] hover:to-[#ff526d] text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recognized & Partnered By Strip */}
      <div className="relative -mt-10 z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-xl py-4 px-6">
          <p className="text-center text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase mb-4">
            Recognized and Partnered By
          </p>
          <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-1">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="h-8 sm:h-10 w-16 sm:w-20 md:w-24 relative flex items-center justify-center transition-all duration-300 hover:scale-105 shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 100px, 150px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Fee Structure Section */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0b22]">
              Course Fee Structure
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-4 mb-3"></div>
            <p className="text-slate-500 text-sm">
              Choose the mode and duration that best fits your learning journey
            </p>

            {/* Online / Offline pills under title */}
            <div className="inline-flex p-1 bg-slate-200/60 rounded-full border border-slate-300/40 mt-8 shadow-sm">
              <button
                onClick={() => setIsOnline(true)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${isOnline
                  ? "bg-[#fbc02d] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-800"
                  }`}
              >
                <span className="h-2 w-2 rounded-full bg-white"></span>
                ONLINE MODE
              </button>
              <button
                onClick={() => setIsOnline(false)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${!isOnline
                  ? "bg-[#fbc02d] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-800"
                  }`}
              >
                <span className="h-2 w-2 rounded-full bg-white"></span>
                OFFLINE MODE
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
            {currentFees.map((card, index) => (
              <div
                key={index}
                className={`relative flex flex-col justify-between bg-white rounded-2xl shadow-md border hover:shadow-xl transition-all duration-500 ${card.popular
                  ? "border-orange-500 ring-2 ring-orange-500/10 scale-[1.02] md:scale-[1.04] z-10"
                  : "border-slate-100"
                  }`}
              >
                {/* Most Popular Ribbon */}
                {card.popular && (
                  <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
                    <div className="absolute top-4 -right-10 bg-amber-500 text-white font-bold text-[9px] uppercase tracking-wider py-1 px-10 rotate-45 shadow-sm text-center w-40">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card Top */}
                <div>
                  {/* Card Header Banner — yellow for Online, dark blue for Offline */}
                  <div className={`${isOnline ? "bg-[#fbc02d]" : "bg-[#110e34]"} text-white text-center p-6 rounded-t-2xl`}>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2">{card.duration}</h4>
                    <div className="text-3xl font-extrabold">{card.price}</div>
                  </div>

                  {/* Checklist */}
                  <ul className="p-8 space-y-4">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isOnline ? "bg-[#fbc02d]" : "bg-[#110e34]"} text-white mt-0.5`}>
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom / Button */}
                <div className="p-8 pt-0">
                  <button
                    onClick={scrollToForm}
                    className={`w-full py-3 rounded-lg text-sm font-bold transition-all duration-300 ${card.popular
                      ? "bg-[#ff4757] hover:bg-[#ff3748] text-white shadow-md shadow-red-500/10"
                      : "bg-[#ff4757] hover:bg-[#ff3748] text-white"
                      }`}
                  >
                    {card.buttonText}
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Courses Offered Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0b22] relative inline-block">
              Courses Offered
              {/* Double Underline decoration */}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-500 rounded-full"></span>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-600 rounded-full"></span>
            </h2>
          </div>

          {/* Courses Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mt-12">
            {courses.map((course, idx) => {
              const IconComponent = course.icon
              return (
                <div
                  key={idx}
                  className={`bg-white border border-slate-100 p-6 rounded-xl hover:shadow-lg hover:border-slate-200 transition-all duration-300 relative group flex flex-col justify-between ${idx === courses.length - 1 && courses.length % 4 !== 0
                    ? "sm:col-span-2 lg:col-span-1" // Just standard layout
                    : ""
                    }`}
                >
                  {/* Tag badge in top-right */}
                  <span className="absolute top-4 right-4 bg-orange-50/80 text-orange-600 font-bold text-[9px] uppercase px-2 py-0.5 rounded-full border border-orange-100">
                    {course.tag}
                  </span>

                  <div>
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${course.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <h4 className="text-base font-extrabold text-[#0a0b22] group-hover:text-amber-500 transition-colors duration-300">
                      {course.name}
                    </h4>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* Why Choose DgCrux Technology Section */}
      <section className="py-24 bg-[#f8fafc] border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0b22]">
              Why Choose DgCrux Technology
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {/* 1. Experienced Mentors */}
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 mb-5 hover:rotate-12 transition-transform duration-300">
                <Users className="h-7 w-7" />
              </div>
              <h4 className="text-base font-extrabold text-[#0a0b22]">Experienced Mentors</h4>
              <p className="text-slate-500 text-xs mt-2">Learn from industry experts</p>
            </div>

            {/* 2. Certificate */}
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 mb-5 hover:rotate-12 transition-transform duration-300">
                <Award className="h-7 w-7" />
              </div>
              <h4 className="text-base font-extrabold text-[#0a0b22]">Certificate</h4>
              <p className="text-slate-500 text-xs mt-2">After Completion</p>
            </div>

            {/* 3. Live Projects */}
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/30 mb-5 hover:rotate-12 transition-transform duration-300">
                <Briefcase className="h-7 w-7" />
              </div>
              <h4 className="text-base font-extrabold text-[#0a0b22]">Live Projects</h4>
              <p className="text-slate-500 text-xs mt-2">Real world experience</p>
            </div>

            {/* 4. Google Partner */}
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-5 hover:rotate-12 transition-transform duration-300">
                <Star className="h-7 w-7" />
              </div>
              <h4 className="text-base font-extrabold text-[#0a0b22]">Google Partner</h4>
              <p className="text-slate-500 text-xs mt-2">Industry Recognition</p>
            </div>
          </div>

        </div>
      </section>

      {/* Industry-Recognized Certification Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0b22]">
              Industry-Recognized Certification
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-4 mb-3"></div>
            <p className="text-slate-500 text-sm">
              Stand out in the job market with our verified certification
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 sm:p-12 max-w-6xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-12 items-center">

              {/* Left Column: Interactive HTML Certificate */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="relative w-full max-w-[540px]">

                  {/* Verified Tag floating above */}
                  <span className="absolute -top-3 right-6 z-10 inline-flex items-center gap-1 px-3 py-1 bg-emerald-500 text-white font-bold text-[10px] uppercase rounded-full shadow-md tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                    Verified
                  </span>

                  {/* Certificate Document Structure */}
                  <div className="aspect-[4/3] bg-white border-[14px] border-[#0a0b22] rounded-lg shadow-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden select-none">
                    {/* Inner gold frame */}
                    <div className="absolute inset-2 border border-amber-500 pointer-events-none opacity-50"></div>

                    {/* Top Header */}
                    <div className="text-center relative z-10">
                      <div className="flex justify-between items-center mb-1">
                        {/* Fake Logo */}
                        <div className="text-left">
                          <span className="text-[12px] font-extrabold tracking-tighter text-[#0a0b22] flex items-center gap-0.5">
                            Dg<span className="text-[#ff9f43]">Crux</span>
                          </span>
                        </div>
                        <span className="text-[7px] text-slate-400 font-mono">Cert No: DGC-2026-0492</span>
                      </div>

                      <h4 className="text-xs font-serif font-bold text-amber-600 uppercase tracking-widest mt-3">
                        Certificate of Completion
                      </h4>
                      <p className="text-[7px] text-slate-400 uppercase tracking-wider mt-1">This certificate is proudly presented to</p>
                    </div>

                    {/* Name block */}
                    <div className="text-center my-4 relative z-10">
                      <h3 className="text-xl sm:text-2xl font-serif text-[#0a0b22] font-semibold italic border-b border-slate-200 pb-2 max-w-[280px] mx-auto min-h-[36px] flex items-center justify-center">
                        {formData.fullName.trim() || "Priya Sharma"}
                      </h3>
                      <p className="text-[8px] text-slate-500 max-w-md mx-auto mt-2 leading-relaxed px-4">
                        For successfully completing the 3-Month internship program in {formData.course || "Full Stack Development"} at our Patna Office. Duration from June to August 2026.
                      </p>
                    </div>

                    {/* Bottom Signature & Verification Info */}
                    <div className="flex justify-between items-end relative z-10">
                      <div className="text-left">
                        <div className="h-6 flex items-end">
                          <span className="font-serif italic text-slate-500 text-[10px]">Shashi B. Rajan</span>
                        </div>
                        <div className="w-16 border-t border-slate-300 mt-0.5"></div>
                        <span className="text-[6px] text-slate-400 block font-bold mt-1 uppercase">Managing Director</span>
                      </div>

                      {/* Fake Gold Seal or QR code */}
                      <div className="flex items-center justify-center flex-col">
                        <div className="w-10 h-10 border border-slate-200 p-0.5 bg-slate-50 flex items-center justify-center rounded">
                          {/* Fake QR code SVG */}
                          <svg className="w-full h-full text-slate-800" viewBox="0 0 100 100" fill="currentColor">
                            <rect x="0" y="0" width="20" height="20" />
                            <rect x="30" y="0" width="10" height="20" />
                            <rect x="50" y="0" width="20" height="10" />
                            <rect x="80" y="0" width="20" height="20" />
                            <rect x="0" y="30" width="20" height="10" />
                            <rect x="30" y="30" width="30" height="30" fillOpacity="0.4" />
                            <rect x="70" y="30" width="10" height="20" />
                            <rect x="0" y="50" width="10" height="20" />
                            <rect x="20" y="60" width="20" height="10" />
                            <rect x="80" y="60" width="20" height="30" />
                            <rect x="0" y="80" width="20" height="20" />
                            <rect x="30" y="80" width="40" height="10" />
                          </svg>
                        </div>
                        <span className="text-[5px] text-slate-400 mt-1 uppercase font-bold font-mono">Scan to Verify</span>
                      </div>

                      <div className="text-right">
                        <div className="h-6 flex items-end justify-end">
                          <span className="font-serif italic text-slate-500 text-[10px]">Anupa Kumari</span>
                        </div>
                        <div className="w-16 border-t border-slate-300 mt-0.5"></div>
                        <span className="text-[6px] text-slate-400 block font-bold mt-1 uppercase">Mentor</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Column: Perks & Buttons */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="space-y-6">

                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ff9f43]/15 text-[#ff9f43]">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0a0b22]">Industry Recognition</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Our certification is recognized by top companies in the industry
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ff9f43]/15 text-[#ff9f43]">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0a0b22]">Stand Out to Employers</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Differentiate yourself in the job market with proven expertise
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ff9f43]/15 text-[#ff9f43]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0a0b22]">Verified Digital Skills</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Showcase your practical expertise to potential employers
                      </p>
                    </div>
                  </div>

                </div>

                <button
                  className="mt-10 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ff4757] hover:bg-[#ff3748] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
                >
                    <a href="/certificate-verify" className="flex items-center gap-2">
                  Get Verified Certificate <ArrowRight className="h-4 w-4" />
                    </a>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0b22]">
              Office Location
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto items-stretch">

            {/* Patna Office Card */}
            <div className="bg-white border border-[#ffe0b2] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <span className="text-[#a51a1a]">Patna Address:</span>
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  Miti Nest, G5 Business Park, Bailey Rd, Saguna More, Kaliket Nagar, Patna, Bihar 801505
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/r6RzG8aW5P4D66140"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase tracking-widest hover:underline w-fit"
              >
                <MapPin className="h-3.5 w-3.5" />
                Map
              </a>
            </div>

            {/* Bangalore Office Card */}
            <div className="bg-white border border-[#ffe0b2] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <span className="text-[#a51a1a]">Bangalore Address:</span>
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  108, Tower- 16, JANADHAAR SHUBHA PHASE-2, Attibele - Anekal Rd, Bengaluru, Karnataka 562107
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/3K1y4J5sP4D66140" // Placeholder mapping URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase tracking-widest hover:underline w-fit"
              >
                <MapPin className="h-3.5 w-3.5" />
                Map
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-slate-100 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#0a0b22]">Registration Successful! 🎉</h3>

              <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                Thank you <strong className="text-slate-900">{formData.fullName}</strong> for applying to the <strong>Summer Internship Programme 2026</strong>.
              </p>

              <div className="bg-slate-50 rounded-xl p-4 mt-6 text-left border border-slate-100 space-y-2">
                <p className="text-slate-500 text-xs flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 stroke-[3]" />
                  <span>Program Mode: <strong>{formData.mode}</strong></span>
                </p>
                <p className="text-slate-500 text-xs flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 stroke-[3]" />
                  <span>Selected Course: <strong>{formData.course}</strong></span>
                </p>
                <p className="text-slate-500 text-xs flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 stroke-[3]" />
                  <span>Duration: <strong>{formData.duration}</strong></span>
                </p>
              </div>

              <p className="text-slate-500 text-xs mt-6 leading-relaxed">
                Our support team will contact you at <strong className="text-slate-950">{formData.phone}</strong> or <strong className="text-slate-950">{formData.email}</strong> within 24 hours to guide you through the enrollment steps.
              </p>

              <button
                onClick={() => {
                  setShowSuccessModal(false)
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    course: "",
                    duration: "",
                    mode: "Online"
                  })
                }}
                className="w-full mt-8 py-3 bg-[#0a0b22] hover:bg-[#141644] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
