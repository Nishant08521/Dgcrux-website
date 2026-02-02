"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import Image from "next/image"

export function MissionVisionSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission")

  const missionContent = (
    <p className="text-base leading-relaxed text-slate-700">
      Our mission is to help businesses grow their presence in the digital world by providing creative and effective
      digital &amp; IT solutions. Our goal is to provide quality services that help our clients successfully reach their
      target audience, increase brand awareness, and generate exponential leads, sales and revenue.
    </p>
  )

  const visionContent = (
    <p className="text-base leading-relaxed text-slate-700">
      Our vision at DgCrux is to revolutionize the way businesses reach and engage their target audiences. We believe
      in transparency and collaboration, our aim is to become a trusted partner to our clients, helping them grow their
      businesses and make their mark in the digital worlds.
    </p>
  )

  return (
    <section className="bg-slate-100 py-5 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get ahead of the curve</h2>

            {/* Tabs */}
            <div className="flex gap-0 border-b border-slate-300">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all ${
                  activeTab === "mission"
                    ? "bg-amber-500 text-white"
                    : "text-slate-700 hover:text-amber-500 border-b-2 border-transparent hover:border-amber-500"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all ${
                  activeTab === "vision"
                    ? "bg-amber-500 text-white"
                    : "text-slate-700 hover:text-amber-500 border-b-2 border-transparent hover:border-amber-500"
                }`}
              >
                Our Vision
              </button>
            </div>

            {/* Content */}
            <div className="pt-4">
              {activeTab === "mission" ? missionContent : visionContent}
            </div>
          </div>

          {/* Right Column - Static Logo and Values */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-6">
            <p>Our company's ethical values and principles - being truthful and transparent in all business dealings and maintaining a reputation for trustworthiness, treating all employees, customers, and stakeholders with fairness and respect, maintaining high standards of professionalism and maintaining the trust and confidence of stakeholders </p>
              <div className="flex flex-col md:flex-row items-center gap-8">
                
                <div className="flex-shrink-0">
                   
            
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-purple-600">Dg</span>
                      <span className="text-2xl font-bold text-amber-500">Crux</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-slate-700">Honesty and integrity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-slate-700">Respect for the individual&apos;s</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-slate-700">Professionalism</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-slate-700">Transparency</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-slate-700">Compliance with laws and regulations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

