"use client"

import { motion, AnimatePresence } from "framer-motion"
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

type ProductsSectionProps = {
  showAll?: boolean
}

const allProducts = [
  {
    title: "AI Proctor",
    icon: FileCheck,
    description: "Secure exams with real-time AI monitoring.",
    href: "/products/ai-proctor",
    image: "/products/ai-proctoring.png",
    color: "from-blue-600/20 to-cyan-500/20"
  }, 
  {
    title: "AI-Powered ATS",
    icon: Users,
    description: "Smart recruitment with automated screening.",
    href: "/products/ats",
    image: "/products/ats1.png",
    color: "from-sky-600/20 to-blue-500/20"
  },
  {
    title: "AI QP Generator",
    icon: Sparkles,
    description: "Instantly create balanced question papers.",
    href: "/products/qp-generator",
    image: "/products/aiqp.png",
    color: "from-indigo-600/20 to-blue-500/20"
  },
  {
    title: "Solar ERP",
    icon: Sun,
    description: "Manage end-to-end solar project lifecycle.",
    href: "/products/solar-erp",
    image: "/products/solar.png",
    color: "from-sky-500/20 to-blue-500/20"
  },
  {
    title: "Dealer Management System",
    icon: Car,
    description: "Streamline operations for dealer networks.",
    href: "/products/dms",
    image: "/products/delar.png",
    color: "from-blue-600/20 to-sky-500/20"
  },
  {
    title: "Hotel Booking Engine",
    icon: Hotel,
    description: "Smart system with dynamic pricing.",
    href: "/products/hotel-booking",
    image: "/products/staysmart.png",
    color: "from-blue-500/20 to-cyan-400/20"
  },

]

export function ProductsSection({ showAll = false }: ProductsSectionProps) {
  const displayedProducts = showAll ? allProducts : allProducts.slice(0, 6)

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
              className="flex items-center gap-2 text-blue-500 font-bold text-sm uppercase tracking-[0.2em] mb-4"
            >
              <div className="w-8 h-[2px] bg-blue-500" />
              In House Products
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
            >
              Built for <span className="text-blue-600 italic">Excellence</span>, <br />
              Powered by AI
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base max-w-md lg:text-right"
          >
            We transform industries through specialized software solutions that drive
            innovation and operational efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {displayedProducts.map((product, idx) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex flex-col h-full bg-card rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-blue-400/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.12)]"
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
                    <h3 className="text-xl font-black mb-1 group-hover:text-blue-500 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <Link
                      href={product.href}
                      className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-500 group/link"
                    >
                      View Details
                      <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center transition-all duration-300 group-hover/link:bg-blue-600 group-hover/link:text-white">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>

                    <div className={`p-2 rounded-xl bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                      <Sparkles className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Hover Overlay Accent */}
                <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-[2.5rem] transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-blue-700"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

