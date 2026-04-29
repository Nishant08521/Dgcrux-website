"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useMotionValue, useTransform } from "framer-motion"
import {
  Code2,
  BrainCircuit,
  Cloud,
  ShoppingCart,
  BarChart3,
  Settings2,
  ArrowRight,
  Sparkles
} from "lucide-react"

const services = [
  {
    title: "AI Product Engineering",
    description: "Architecting the future with Generative AI, LLMs, and autonomous agents that transform business logic into intelligent systems.",
    icon: BrainCircuit,
    href: "/services/ai-solutions",
    items: ["Generative AI", "AI Agents", "Vision", "NLP"],
    color: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/10",
    bg: "bg-blue-50"
  },
  {
    title: "Software Development",
    description: "Engineering robust, scalable, and secure digital products using modern cloud-native architectures and SaaS principles.",
    icon: Code2,
    href: "/services/software-development",
    items: ["Product Design", "SaaS", "DevOps", "Web"],
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/10",
    bg: "bg-purple-50"
  },
  {
    title: "Cloud Solutions",
    description: "Seamless migration and optimization for AWS, Azure, and GCP, ensuring high availability and cost efficiency.",
    icon: Cloud,
    href: "/services/cloud-solutions",
    items: ["AWS", "Azure", "Security", "FinOps"],
    color: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/10",
    bg: "bg-emerald-50"
  },
  {
    title: "eCommerce Solutions",
    description: "Building high-conversion online stores and complex marketplaces that scale with your business growth.",
    icon: ShoppingCart,
    href: "/services/ecommerce",
    items: ["Shopify", "Custom", "UX", "Scale"],
    color: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/10",
    bg: "bg-orange-50"
  },
  {
    title: "Digital Marketing",
    description: "Driving growth through data-driven SEO, performance marketing, and AI-optimized customer acquisition.",
    icon: BarChart3,
    href: "/services/digital-marketing",
    items: ["SEO", "Ads", "Funnels", "Growth"],
    color: "from-rose-500 to-pink-600",
    shadow: "shadow-rose-500/10",
    bg: "bg-rose-50"
  },
  {
    title: "Managed IT Services",
    description: "24/7 proactive monitoring and management to ensure your digital infrastructure remains resilient and secure.",
    icon: Settings2,
    href: "/services/managed-it",
    items: ["Support", "Security", "Network", "24/7"],
    color: "from-slate-600 to-slate-800",
    shadow: "shadow-slate-500/10",
    bg: "bg-slate-100"
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative pt-6 pb-4 sm:py-8 overflow-hidden">
      {/* Background stays transparent/inherited */}
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clean Light Header */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Core Expertise
          </motion.div> */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#1b1338] tracking-tight leading-tight mb-6"
          >
            Digital Solutions for the <span className="text-primary italic">Modern </span><span className="text-secondary">Era</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-slate-600 text-lg leading-relaxed"
          >
            Empowering modern enterprises with intelligent software solutions and cloud-native engineering.
          </motion.p>
        </div>

        {/* Grid of Colorful Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative flex flex-col h-[480px] rounded-[3rem] ${service.bg} border border-slate-100 p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent overflow-hidden`}
    >
      {/* Color Accent Bar */}
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color} opacity-80 group-hover:h-3 transition-all duration-500`} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon with Color BG */}
        <div className="mb-8">
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.bg} bg-opacity-50 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br ${service.color} group-hover:text-white`}>
            <Icon size={32} strokeWidth={1.5} />
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-8 flex-grow">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
            {service.description}
          </p>
        </div>

        {/* Tags with Dynamic Colors */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {service.items.map((item: string, i: number) => (
              <span key={i} className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white text-slate-600 transition-all group-hover:shadow-sm`}>
                {item}
              </span>
            ))}
          </div>

          <Link 
            href={service.href}
            className="flex items-center gap-3 text-sm font-black text-slate-900 group-hover:translate-x-2 transition-transform uppercase tracking-widest"
          >
            Explore
            <div className={`h-10 w-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center transition-all group-hover:bg-gradient-to-br ${service.color} group-hover:text-white group-hover:border-transparent`}>
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className={`absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 blur-[80px] group-hover:opacity-[0.08] transition-opacity duration-1000`} />
    </motion.div>
  )
}
