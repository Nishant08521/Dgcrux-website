"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Globe2 } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#05041a] text-slate-300 selection:bg-amber-500/30">
      <Navbar />

      {/* Top banner / breadcrumb */}
   
      {/* Main contact content */}
      <section className="py-20 relative">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start relative z-10">
          
          {/* Left Column */}
          <div>
            <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Join the league of our satisfied customers
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              Ready to embark on your digital journey with DgCrux Technology? Get in touch with us to connect,
              explore new opportunities, and unlock growth for your business.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-[#0a0b22] border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" /> Bangalore
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  10B, Tower - 16, Janashar shubha phase-2,
                  <br />
                  Attibele - Anekal Rd, Bengaluru, Karnataka 562107
                </p>
              </div>

              <div className="bg-[#0a0b22] border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-orange-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors"></div>
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" /> Patna
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  6th Floor, DS Business Park, Bailey Rd,
                  <br />
                  Saguna More, Kaliket Nagar, Patna, Bihar 801503
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#0a0b22] border border-white/5 rounded-2xl flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-bold text-white uppercase tracking-widest">Follow Us</span>
              <div className="flex gap-2">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/company/dgcrux-technology/" },
                  { icon: Instagram, href: "https://www.instagram.com" },
                  { icon: Facebook, href: "https://www.facebook.com" },
                  { icon: Globe2, href: "https://www.google.com" }
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all shadow-lg"
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#0a0b22] border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <ContactSection />
          </div>
        </div>
      </section>

      {/* Quick contact info cards row */}
      <section className="py-10 border-t border-b border-white/5 bg-[#0b082a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-3">
          {[
            { icon: MapPin, text: "10B, Tower - 16, Bengaluru" },
            { icon: Mail, text: "info@dgcrux.com" },
            { icon: Phone, text: "+91 9835166140" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20">
                <item.icon className="h-5 w-5 text-amber-500" />
              </div>
              <p className="text-sm font-semibold text-white">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Map section */}
      <MapSection />

      <Footer />
    </main>
  )
}

function MapSection() {
  const [activeTab, setActiveTab] = useState(0)

  const locations = [
    {
      city: "Bangalore",
      address: "108, Tower- 16, JANAADHAR SHUBHA PHASE PHASE-2, Attibele - Anekal Rd, Bengaluru, M.Medihalli, Karnataka 562106",
      mapUrl: "https://www.google.com/maps?q=DgCrux+Technology+108+Tower+16+JANAADHAR+SHUBHA+PHASE+PHASE-2+Attibele+Anekal+Rd+Bengaluru+Karnataka+562106&output=embed",
    },
    {
      city: "Patna",
      address: "6th Floor, DS Business Park, Bailey Rd, Saguna More, Kaliket Nagar, Patna, Bihar 801503",
      mapUrl: "https://www.google.com/maps?q=DgCrux+Technology+DS+Business+Park+Bailey+Rd+Saguna+More+Patna+Bihar+801503&output=embed",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white">Find Us on the Map</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {locations.map((loc, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === index
                ? "bg-amber-500 text-black"
                : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10"
              }`}
            >
              {loc.city}
            </button>
          ))}
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0b22] p-2 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#05041a] pointer-events-none mix-blend-multiply opacity-50 z-10"></div>
          <iframe
            key={activeTab}
            title={`DgCrux Technology ${locations[activeTab].city} Location`}
            src={locations[activeTab].mapUrl}
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '1.25rem', filter: 'contrast(1.1) opacity(0.9)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full relative z-0"
          ></iframe>
          <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 z-20">
            <p className="text-sm text-white font-medium">{locations[activeTab].address}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


