"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  ArrowRight,
  TrendingUp,
  Star,
  Shield,
  Clock,
} from "lucide-react"

const services = [
  {
    title: "UI Design",
    description: "Pixel-perfect interfaces that captivate users. We craft visually stunning designs that align with your brand identity and set you apart from competitors. Every pixel is intentional, every interaction is refined.",
    color: "from-violet-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "UX Research",
    description: "Data-driven insights shaping design decisions. We conduct in-depth interviews, usability testing, and behavioral analytics to ensure your product solves real user problems effectively.",
    color: "from-pink-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mobile Native Design",
    description: "Seamless experiences across every screen. Our mobile-first approach ensures your product feels native, fluid, and intuitive on both iOS and Android platforms.",
    color: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Design Systems",
    description: "Scalable design foundations that accelerate development. We build comprehensive component libraries and style guides for consistent, maintainable products across your entire ecosystem.",
    color: "from-indigo-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We deep-dive into your business objectives, target audience, and competitive landscape. We define clear KPIs and strategic design goals before any pixels are pushed.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Architecture & Wireframing",
    description: "We structure the content and navigation flows to make complex products feel simple. Low-fidelity explorations validate ideas fast and align stakeholders.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "High-Fidelity UI & Polish",
    description: "This is where the magic happens. Pixel-perfect Figma designs with detailed component specs, micro-animations, and interaction patterns ready for development handoff.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "04",
    title: "Prototyping & Testing",
    description: "We build interactive prototypes and test them with real users. Iterative improvements are driven by actual feedback and behavioral data, ensuring a flawless launch.",
    image: "https://images.unsplash.com/photo-1553877522-43ce6fac1771?q=80&w=1200&auto=format&fit=crop",
  },
]

const benefits = [
  { value: "40%", label: "Average Increase in Conversion Rates", icon: TrendingUp },
  { value: "2x", label: "Faster Development Time with Design Systems", icon: Clock },
  { value: "98%", label: "Client Satisfaction & Retention", icon: Star },
  { value: "100%", label: "WCAG Accessibility Compliant Designs", icon: Shield },
]

export default function ProductDesignPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <main className="min-h-screen bg-[#050505] text-white antialiased font-sans overflow-x-hidden selection:bg-violet-500/30">
      <Navbar />

      {/* ─── CINEMATIC HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Glowing Orb Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-violet-600/40 via-pink-600/20 to-amber-500/10 blur-[120px]"
          />
        </div>

        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-8">
              Design that <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300 font-light">
                speaks.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl sm:text-2xl text-white/60 font-light tracking-wide max-w-2xl mx-auto mb-12">
              We craft minimalist, highly-converting digital experiences that blend aesthetic beauty with psychological precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              size="lg"
              asChild
              className="rounded-full bg-white text-black hover:bg-white/90 border-0 px-10 py-7 text-lg font-medium transition-transform hover:scale-105"
            >
              <Link href="/contact">
                Start a Conversation
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES (STICKY STACKING CARDS) ─────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#050505] relative z-20" ref={containerRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 md:mb-32">
            <h2 className="text-sm font-semibold text-white/40 tracking-[0.3em] uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl sm:text-5xl font-medium tracking-tight">Services</h3>
          </div>

          <div className="relative pb-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                // The magic sticky formula
                style={{ top: `calc(10vh + ${index * 40}px)` }}
                className="sticky w-full mb-8 lg:mb-12 origin-top"
              >
                <div className="w-full bg-[#111] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
                  <div className="grid lg:grid-cols-2">
                    {/* Text Side */}
                    <div className="p-10 lg:p-16 flex flex-col justify-center">
                      <div className="text-white/30 text-8xl font-black mb-6 tracking-tighter opacity-20">0{index + 1}</div>
                      <h4 className="text-3xl lg:text-4xl font-medium mb-6">{service.title}</h4>
                      <p className="text-lg lg:text-xl text-white/60 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                    {/* Image Side */}
                    <div className="relative h-64 lg:h-auto w-full lg:w-full overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 mix-blend-overlay z-10`} />
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.8] contrast-[1.2]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS (ZIG-ZAG STORYTELLING) ──────────────────────────────────────────────────── */}
      <section className="py-32 bg-white text-black relative z-30 rounded-t-[3rem] -mt-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24 text-center">
            <h2 className="text-sm font-semibold text-black/40 tracking-[0.3em] uppercase mb-4">The Methodology</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">How we create</h3>
          </div>

          <div className="space-y-32 lg:space-y-48">
            {process.map((item, index) => {
              const isEven = index % 2 !== 0
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  key={item.step}
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 relative`}
                >
                  {/* Watermark Number */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0 lg:-right-20' : 'left-0 lg:-left-20'} text-[200px] lg:text-[400px] font-black text-black/[0.03] pointer-events-none select-none z-0 tracking-tighter leading-none`}>
                    {item.step}
                  </div>

                  {/* Text */}
                  <div className="w-full lg:w-1/2 relative z-10">
                    <h4 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight">{item.title}</h4>
                    <p className="text-xl text-black/60 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="w-full lg:w-1/2 relative z-10">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS (MINIMALIST HOVER GRID) ─────────────────────────────────────────────── */}
      <section className="py-32 bg-[#050505] text-white relative z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-8 leading-tight">
                Designed for <br/> <span className="italic text-white/50">Performance.</span>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-md">
                We believe that good design is good business. Every decision we make is aimed at driving tangible, measurable growth for your company.
              </p>
            </div>
            
            <div className="lg:col-span-7 pt-4">
              <div className="border-t border-white/10 flex flex-col">
                {benefits.map((b, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    key={idx} 
                    className="group border-b border-white/10 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl cursor-default"
                  >
                    <div className="flex items-center gap-6">
                      <b.icon className="h-6 w-6 text-white/30 group-hover:text-amber-400 transition-colors" />
                      <div className="text-xl sm:text-2xl font-light text-white/80 group-hover:text-white transition-colors">
                        {b.label}
                      </div>
                    </div>
                    <div className="text-4xl sm:text-5xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300">
                      {b.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION (EDGE TO EDGE) ──────────────────────────────────────────────────────────────────── */}
      <section className="relative py-40 bg-[#050505] overflow-hidden border-t border-white/5">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-amber-500/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-5xl sm:text-7xl font-medium tracking-tighter text-white mb-10 leading-[1.1]">
            Ready to craft your <br />
            <span className="italic font-light">next masterpiece?</span>
          </h2>
          <Button
            size="lg"
            asChild
            className="rounded-full bg-transparent hover:bg-white text-white hover:text-black border border-white/30 px-12 py-8 text-xl font-medium transition-all duration-300"
          >
            <Link href="/contact">
              Let's Talk <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
