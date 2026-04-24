"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductsSection } from "@/components/products-section"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Header for the Products Page */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--alpha-primary)_0%,_transparent_70%)] opacity-10 -z-10" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3 h-3 text-secondary fill-secondary" />
            Innovative Software Suite
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
          >
            Our <span className="text-primary italic">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Discover our comprehensive range of AI-driven solutions tailored for 
            industry-specific challenges. From education to enterprise, we build 
            the tools that power tomorrow.
          </motion.p>
        </div>
      </section>

      {/* Reusing the newly redesigned ProductsSection */}
      <ProductsSection />

      {/* Extra Section: Why Our Products? */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "AI-First Approach",
                description: "Every product is built with artificial intelligence at its core, ensuring future-proof operations."
              },
              {
                title: "Scalable Architecture",
                description: "Our solutions grow with your business, handling millions of requests with ease."
              },
              {
                title: "Enterprise Security",
                description: "Bank-grade security and data privacy are baked into every line of code we write."
              }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="text-2xl font-bold text-foreground">{feature.title}</div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
