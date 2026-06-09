"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  Users, 
  FileSearch, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight,
  Target,
  Rocket,
  Search,
  Layout
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ATSPage() {
  const features = [
    {
      icon: FileSearch,
      title: "AI-Powered Screening",
      description: "Automatically parse and rank resumes based on job requirements with high-accuracy matching algorithms.",
    },
    {
      icon: Users,
      title: "Pipeline Management",
      description: "Track candidates through every stage of the hiring journey with an intuitive, drag-and-drop dashboard.",
    },
    {
      icon: BarChart3,
      title: "Hiring Analytics",
      description: "Data-driven insights into your recruitment performance with comprehensive reports and KPIs.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Automate repetitive tasks like email responses, interview scheduling, and status updates.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security and full GDPR compliance to protect sensitive candidate information.",
    },
    {
      icon: Clock,
      title: "Rapid Time-to-Hire",
      description: "Reduce your hiring cycle by up to 50% with optimized processes and smart automation.",
    },
  ]

  const benefits = [
    "Reduce time-to-hire by 50%",
    "Improve candidate quality with AI matching",
    "Centralize all hiring data in one platform",
    "Collaborate seamlessly with hiring teams",
    "Reduce bias in hiring decisions",
    "Track diversity and inclusion metrics",
    "Integrate with job boards and LinkedIn",
    "Mobile-friendly for on-the-go recruiting",
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
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-indigo-900/40" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-blue-500/50 text-blue-400 px-4 py-1 text-sm font-medium bg-blue-500/10 backdrop-blur-sm">
                Recruitment Excellence
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-8">
                Smart <span className="text-blue-500 italic">Hiring</span> with AI-Powered <span className="text-indigo-400">ATS</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                Streamline your entire recruitment lifecycle. From sourcing to onboarding, our intelligent ATS helps you build world-class teams faster than ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 rounded-full" asChild>
                  <a href="https://empquick.com/" target="_blank" rel="noopener noreferrer">
                    Request a Demo
                  </a>
                </Button>
            
              </div>

              <div className="mt-12 flex gap-8 items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        alt="User" 
                        width={40} 
                        height={40} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  Trusted by <span className="text-white font-bold">500+</span> Hiring Teams
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-800">
                <Image
                  src="/products/atsemp.png"
                  alt="ATS Dashboard Visualization"
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full z-[-1]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Empower Your <span className="text-blue-600 italic">Recruiters</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every tool your team needs to find, attract, and hire the right talent in one centralized platform.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Efficiency", value: "+85%", icon: Zap, color: "blue" },
                  { label: "Quality", value: "98%", icon: Target, color: "indigo" },
                  { label: "Growth", value: "3.5x", icon: Rocket, color: "purple" },
                  { label: "Stability", value: "99.9%", icon: Shield, color: "emerald" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100"
                  >
                    <stat.icon className={`w-8 h-8 text-${stat.color}-500 mb-4`} />
                    <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <Badge className="mb-6 bg-blue-500/10 text-blue-600 border-none px-4 py-1">The Advantage</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-slate-900">
                Why Choose <span className="text-blue-600">Our ATS?</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Our platform isn't just about tracking candidates; it's about building relationships and making data-backed decisions that drive your company's growth.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Button size="lg" className="h-14 px-8 rounded-full bg-slate-900 hover:bg-black text-white font-bold" asChild>
                  <Link href="#contact">Learn More About the Platform</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                Transform Your <span className="text-blue-400">Hiring Engine</span> Today
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Experience the power of a modern recruitment platform. Get in touch for a personalized demonstration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-16 px-10 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl">
                        <a href="https://empquick.com/" target="_blank" rel="noopener noreferrer">
                  Schedule Demo 
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-white/20 text-blue-600 hover:bg-white/10 rounded-full">
                  <Link href="/contact">Contact Sales</Link>
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
