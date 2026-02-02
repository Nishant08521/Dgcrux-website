"use client"

import { X } from "lucide-react"
import { useState } from "react"

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    contactNumber: "",
    projectDescription: "",
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add your form submission logic here
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Side - Purple Card */}
          <div className="text-white p-8 md:w-2/5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #5E2D88 0%, #4a2370 100%)' }}>
            {/* Decorative circles */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-4 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-4 animate-wave inline-block">👋</div>
              <h2 className="text-3xl font-bold mb-2">
                Hey, Wait a<br />Second!
              </h2>
              <p className="text-purple-100 mb-6 text-sm">
                Before you leave, let our<br />experts help you with a free:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4"
                      style={{ color: '#5E2D88' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Custom Development Roadmap</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4"
                      style={{ color: '#5E2D88' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Budget Estimation</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4"
                      style={{ color: '#5E2D88' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Time-To-Market Projection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 text-sm border-0 border-b-2 border-gray-300 focus:outline-none bg-transparent placeholder-gray-500"
                  style={{ borderBottomColor: formData.fullName ? '#5E2D88' : undefined }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#5E2D88'}
                  onBlur={(e) => e.target.style.borderBottomColor = formData.fullName ? '#5E2D88' : '#d1d5db'}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="businessEmail"
                  placeholder="Business Email"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2 text-sm border-0 border-b-2 border-gray-300 focus:outline-none bg-transparent placeholder-gray-500"
                  style={{ borderBottomColor: formData.businessEmail ? '#5E2D88' : undefined }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#5E2D88'}
                  onBlur={(e) => e.target.style.borderBottomColor = formData.businessEmail ? '#5E2D88' : '#d1d5db'}
                />
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-1 pb-2 border-b-2 border-gray-300">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-sm text-gray-700">+91</span>
                </div>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="flex-1 px-0 py-2 text-sm border-0 border-b-2 border-gray-300 focus:outline-none bg-transparent placeholder-gray-500"
                  style={{ borderBottomColor: formData.contactNumber ? '#5E2D88' : undefined }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#5E2D88'}
                  onBlur={(e) => e.target.style.borderBottomColor = formData.contactNumber ? '#5E2D88' : '#d1d5db'}
                />
              </div>

              <div>
                <textarea
                  name="projectDescription"
                  placeholder="Describe Your Project/Idea in Brief"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-0 py-2 text-sm border-0 border-b-2 border-gray-300 focus:outline-none bg-transparent placeholder-gray-500 resize-none"
                  style={{ borderBottomColor: formData.projectDescription ? '#5E2D88' : undefined }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#5E2D88'}
                  onBlur={(e) => e.target.style.borderBottomColor = formData.projectDescription ? '#5E2D88' : '#d1d5db'}
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

