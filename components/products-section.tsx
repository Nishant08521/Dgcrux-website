"use client"

import { motion } from "framer-motion"
import {
  FileCheck,
  Hotel,
  Users,
  Utensils,
  ArrowRight,
  Sun,
  Car,
  GraduationCap,
  BookOpen,
  Sparkles,
  ExternalLink
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const allProducts = [
  {
    title: "AI Proctoring",
    icon: FileCheck,
    description: "Advanced cheating detection for secure and scalable online examinations.",
    href: "/products/ai-proctor",
    image: "/products/ai-proctoring.png",
    color: "from-blue-600/20 to-cyan-500/20"
  },
  {
    title: "Eco-Eats POS",
    icon: Utensils,
    description: "Cloud-based restaurant management and unified commerce platform.",
    href: "/products/restaurant-management",
    image: "/products/eco-eats.png",
    color: "from-orange-600/20 to-amber-500/20"
  },
  {
    title: "TalentBot ATS",
    icon: Users,
    description: "AI-driven recruiting software that streamlines applicant tracking.",
    href: "/products/ats",
    image: "/products/talentbot.png",
    color: "from-purple-600/20 to-pink-500/20"
  },
  {
    title: "StaySmart AI",
    icon: Hotel,
    description: "Direct booking optimization and guest management for luxury hotels.",
    href: "/products/hotel-booking",
    image: "/products/staysmart.png",
    color: "from-emerald-600/20 to-teal-500/20"
  },
  {
    title: "SolarX ERP",
    icon: Sun,
    description: "End-to-end ERP solution designed for solar EPC project management.",
    href: "/products/solar-erp",
    image: "/telemedicine-video-call.jpg", // Fallback
    color: "from-yellow-500/20 to-orange-400/20"
  },
  {
    title: "AutoMaster DMS",
    icon: Car,
    description: "Comprehensive dealer management system for the automotive industry.",
    href: "/products/dms",
    image: "/modern-technology-office-team-collaboration.jpg", // Fallback
    color: "from-sky-600/20 to-indigo-500/20"
  },
  {
    title: "EduGen AI",
    icon: GraduationCap,
    description: "Automated question paper generation from any given curriculum.",
    href: "/products/qp-generator",
    image: "/online-learning-platform.png", // Fallback
    color: "from-rose-600/20 to-red-500/20"
  },
  {
    title: "SkillUp LMS",
    icon: BookOpen,
    description: "Scalable learning management system for corporate and educational training.",
    href: "/products/lms",
    image: "/online-learning-platform.png", // Fallback
    color: "from-indigo-600/20 to-purple-500/20"
  }
]

export function ProductsSection() {
  return (
    <section className="relative py-4 px-4 bg-background overflow-hidden" id="products">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary)_0%,_transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4"
            >
              <div className="w-8 h-[2px] bg-primary" />
              Our Product Ecosystem
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
            >
              Built for <span className="text-primary italic">Excellence</span>, <br />
              Powered by <span className="text-secondary">AI</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-md lg:text-right"
          >
            We transform industries through specialized software solutions that drive
            innovation and operational efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProducts.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col h-full bg-card rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(var(--primary),0.1)]"
            >
              {/* Product Image Wrapper */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60`} />

                {/* Product Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                  <product.icon className="w-3.5 h-3.5" />
                  {product.title.split(' ')[0]}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <Link
                    href={product.href}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group/link"
                  >
                    View Details
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover/link:bg-primary group-hover/link:text-white">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>

                  <div className={`p-2 rounded-xl bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              {/* Hover Overlay Accent */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-[2.5rem] transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

