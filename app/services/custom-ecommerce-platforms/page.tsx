"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  ShoppingBag, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Database, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Globe,
  Settings2,
  Code2
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CustomEcommercePlatformsPage() {
  const solutions = [
    {
      icon: Layers,
      title: "Headless Commerce",
      description: "Decouple your frontend from the backend for ultimate flexibility, faster performance, and personalized experiences.",
    },
    {
      icon: Code2,
      title: "Bespoke Functionality",
      description: "Building unique features specifically for your business logic that off-the-shelf platforms can't provide.",
    },
    {
      icon: Database,
      title: "ERP & CRM Integration",
      description: "Seamlessly connect your storefront with your existing business systems for automated workflows.",
    },
    {
      icon: Cpu,
      title: "High-Performance Architecture",
      description: "Built on modern stacks like Next.js and Node.js for sub-second page loads and massive scalability.",
    },
    {
      icon: Lock,
      title: "Advanced Security",
      description: "Enterprise-grade security protocols and custom encryption to protect your sensitive business data.",
    },
    {
      icon: Settings2,
      title: "Custom Admin Portals",
      description: "Tailored management interfaces designed around your team's specific operational needs.",
    },
  ]

  const benefits = [
    "Complete Control over UX/UI",
    "No Monthly Subscription Fees",
    "Unlimited Scalability & Growth",
    "Own Your Customer Data Entirely",
    "Faster Page Load Speeds",
    "Higher Conversion Optimization",
  ]

  const stats = [
    { label: "Revenue Growth", value: "3x" },
    { label: "Page Load Speed", value: "<1s" },
    { label: "Custom Modules", value: "500+" },
    { label: "Security Score", value: "A+" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-indigo-900/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
          
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"
          />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-blue-500/50 text-blue-400 px-4 py-1 text-sm font-medium bg-blue-500/10 backdrop-blur-sm">
                Enterprise Commerce Solutions
              </Badge>
              <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-white leading-[1] mb-8">
                Bespoke <span className="text-blue-500 italic">Commerce</span> for Modern <span className="text-indigo-400">Leaders</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                Ditch the limitations of generic SaaS. We build high-performance, fully custom eCommerce platforms engineered for your specific business logic and global scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" className="h-16 px-10 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/20 rounded-full transition-all hover:scale-105" asChild>
                  <Link href="#contact">Discuss Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-white/10 text-white hover:bg-white/5 rounded-full" asChild>
                  <Link href="#solutions">View Solutions</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group bg-slate-900">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                  alt="Custom eCommerce Visualization"
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-5 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"
                >
                  <Code2 className="w-8 h-8 text-blue-400 mb-2" />
                  <div className="text-xs font-black uppercase tracking-widest">Custom Architecture</div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-10 p-5 bg-indigo-600/20 backdrop-blur-xl rounded-3xl border border-indigo-400/30 shadow-2xl"
                >
                  <Globe className="w-8 h-8 text-indigo-400 mb-2" />
                  <span className="text-xs font-black uppercase tracking-widest">Global Scalability</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">
              Engineered for <span className="text-blue-600 italic">Unlimited</span> Potential
            </h2>
            <p className="text-xl text-slate-400">
              When you outgrow standard platforms, we build the custom engine that drives your next stage of growth.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((sol, idx) => {
              const Icon = sol.icon
              return (
                <motion.div
                  key={sol.title}
                  variants={itemVariants}
                  className="group p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                    <Icon className="w-8 h-8 text-blue-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {sol.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Custom? */}
      <section className="py-32 bg-white text-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Badge className="mb-6 bg-blue-600/10 text-blue-600 border-none px-4 py-1">The Custom Edge</Badge>
              <h2 className="text-5xl font-black mb-8 tracking-tight leading-tight">
                Why Build a <span className="text-blue-600">Bespoke Platform?</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                SaaS platforms are great for starting, but enterprise leaders need absolute control. A custom platform means no limitations on your vision, no technical debt from themes, and total ownership of your future.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-800 font-bold tracking-tight">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-16">
                <Button size="lg" className="h-16 px-10 rounded-full bg-slate-900 hover:bg-black text-white font-black text-lg transition-all" asChild>
                  <Link href="#contact">Request Architecture Audit</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                  alt="Custom Platform Dashboard"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Performance Indicator */}
              <div className="absolute -top-10 -right-10 p-10 bg-emerald-500 text-white rounded-[3rem] shadow-2xl">
                <div className="text-5xl font-black mb-1">99</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Lighthouse Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                Build the <span className="text-blue-300">Future</span> of Your Business
              </h2>
              <p className="text-2xl text-blue-100/80 mb-12 font-medium">
                Our architects are ready to build the platform that powers your next $100M in revenue. Let's design your custom solution today.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button size="lg" className="h-20 px-12 text-xl font-black bg-white text-blue-800 hover:bg-slate-100 rounded-full shadow-2xl transition-all hover:scale-105">
                  Start Architecture Phase <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
