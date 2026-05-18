"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  Car, 
  FileText, 
  Users, 
  DollarSign, 
  Wrench, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DMSPage() {
  const features = [
    {
      icon: Car,
      title: "Inventory Mastery",
      description: "Comprehensive tracking of vehicles, parts, and accessories with real-time syncing across all your dealership locations.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Elite CRM",
      description: "Deep customer insights, purchase history, and automated communication workflows to build lifelong loyalty.",
      color: "indigo"
    },
    {
      icon: FileText,
      title: "Finance & Sales",
      description: "Streamlined quoting, dynamic invoicing, and integrated financing modules to close deals faster and more securely.",
      color: "cyan"
    },
    {
      icon: Wrench,
      title: "Service Operations",
      description: "Optimize your workshop with intelligent scheduling, technician management, and automated service reminders.",
      color: "emerald"
    },
    {
      icon: DollarSign,
      title: "Financial Control",
      description: "Seamless accounting integration for real-time P&L tracking, automated reconciliation, and tax compliance.",
      color: "rose"
    },
    {
      icon: BarChart3,
      title: "Strategic Analytics",
      description: "Data-driven dashboards providing deep visibility into sales velocity, inventory turnover, and profit margins.",
      color: "amber"
    },
  ]

  const keyFeatures = [
    "Vehicle Inventory Management",
    "Lead & Opportunity Tracking",
    "Test Drive Scheduling",
    "Sales Process Automation",
    "Finance & Insurance",
    "Service Appointment Booking",
    "Workshop Management",
    "Parts Management",
    "Customer Portal",
    "Multi-Location Support",
    "Mobile App Access",
    "Document Management",
  ]

  const stats = [
    { label: "Efficiency Boost", value: "45%" },
    { label: "Sales Increase", value: "20%" },
    { label: "Data Accuracy", value: "99.9%" },
    { label: "Uptime", value: "24/7" },
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
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
            alt="Automotive Background"
            fill
            className="object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-blue-500/50 text-blue-400 px-4 py-1 text-sm font-medium bg-blue-500/10 backdrop-blur-sm">
                Next-Gen Dealership Management
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-8">
                Drive Your <span className="text-blue-500 italic">Dealership</span> to New <span className="text-slate-400">Heights</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                The most comprehensive DMS designed for modern automotive excellence. Transform your sales, inventory, and service operations with a single, unified platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" className="h-16 px-10 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 rounded-full" asChild>
                  <Link href="#contact">Request Enterprise Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-white/10 text-white hover:bg-white/5 rounded-full" asChild>
                  <Link href="#features">View Capabilities</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="features" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 uppercase">
              Core <span className="text-blue-600">Capabilities</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              A high-performance engine for your business operations, built to scale and engineered for precision.
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
                  className="group p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-slate-100">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                <Image 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Dealership"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -right-10 p-10 bg-blue-600 text-white rounded-[3rem] shadow-2xl hidden md:block">
                <div className="text-5xl font-black mb-2">99.9%</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">System Availability</div>
              </div>
            </div>

            <div>
              <Badge className="mb-6 bg-blue-500/10 text-blue-600 border-none px-4 py-1">Optimized Workflow</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-slate-900 leading-tight">
                Engineered for <span className="text-blue-600">Peak Performance</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Our DMS is built on a high-availability cloud architecture, ensuring your dealership never stops moving. From mobile access to deep integrations, we provide the ultimate toolset.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Enterprise-Grade Security", text: "Your data is protected by bank-level encryption and security protocols." },
                  { icon: Zap, title: "Lightning-Fast Updates", text: "Real-time inventory and sales syncing across all mobile and desktop devices." },
                  { icon: Globe, title: "Multi-Entity Support", text: "Manage multiple brands and locations from a single master dashboard." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Checklist */}
      <section className="py-32 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white mb-6">Complete Feature Set</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {keyFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="text-slate-300 font-bold text-sm tracking-wide">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                Ready to <span className="text-blue-300">Accelerate</span> Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Join leading automotive groups who have already transformed their operations with DgCrux DMS. Schedule your private walkthrough today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button size="lg" className="h-16 px-10 text-lg font-bold bg-white text-blue-700 hover:bg-slate-100 rounded-full shadow-2xl">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-white/20 text-white hover:bg-white/10 rounded-full">
                  Speak to an Expert
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
