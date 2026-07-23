"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    contactNumber: "",
    workEmail: "",
    budgetRange: "",
    projectDescription: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    try {
      const payload = {
        ...formData,
        businessEmail: formData.workEmail
      }

      const googleScriptUrl = "https://script.google.com/macros/s/AKfycbzWC_kXyi2DwsIB7tuIOt3bG9cMYbwtAL4jPoiNZ-NBfVndB_7mMvo9GrR2tWAEhqWgFw/exec";
      
      const formParams = new URLSearchParams();
      Object.entries(payload).forEach(([key, value]) => {
        formParams.append(key, value as string);
      });

      await fetch(googleScriptUrl, {
        method: "POST",
        body: formParams,
      });

      setIsSubmitted(true)
    } catch (err) {
      console.error("Failed to save contact form:", err)
      setSubmitError("Failed to submit to Google Sheet. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    onClose()
    // Reset form after a slight delay so it doesn't flash while animating out
    setTimeout(() => {
      setIsSubmitted(false)
      setSubmitError("")
      setFormData({ fullName: "", designation: "", contactNumber: "", workEmail: "", budgetRange: "", projectDescription: "" })
    }, 300)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative mx-auto bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100/80 hover:bg-slate-200 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-slate-700" />
        </button>

        {/* Left Side - Dark Theme */}
        <div className="text-white p-8 md:w-2/5 relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950">
          {/* Decorative circles */}
          <div className="absolute top-4 right-4 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-8 left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-5xl mb-4 animate-wave inline-block">👋</div>
            <h2 className="text-3xl font-black mb-2 text-white">
              Hey, Wait a<br />Second!
            </h2>
            <p className="text-slate-300 mb-6 text-sm">
              Before you leave, let our<br />experts help you with a free:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff9f43]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#ff9f43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">Custom Development Roadmap</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff9f43]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#ff9f43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">Budget Estimation</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff9f43]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#ff9f43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">Time-To-Market Projection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form or Thank You */}
        <div className="p-8 md:w-3/5 bg-white relative">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Thank You!</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">
                Your request has been received successfully. Our experts will get back to you shortly.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2 block">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2 block">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Enter your designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2 block">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Enter your number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2 block">Work Email</label>
                  <input
                    type="email"
                    name="workEmail"
                    placeholder="Enter your email address"
                    value={formData.workEmail}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2 block">Budget Range</label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-blue-400"
                  >
                    <option value="" disabled>Select a budget range</option>
                    <option value="< $5,000">Under $5,000</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                    <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,00０</option>
                    <option value="> $1００,０００"> $1００,０００ +</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2 block">Describe Your Project</label>
                  <textarea
                    name="projectDescription"
                    placeholder="Describe your project"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-400 resize-none"
                  />
                </div>
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>{submitError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-sky-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

