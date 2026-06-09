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
      icon: Users,
      title: "Role-Based Access",
      description: "Admin, Employee, Distributor, and Dispatcher roles each get tailored access and workflows for secure collaboration.",
      cardBg: "bg-blue-50",
      iconBg: "bg-blue-100",
      border: "border-blue-100"
    },
    {
      icon: Smartphone,
      title: "Mobile Field Operations",
      description: "Field teams capture attendance, visit details, and order requests directly from the mobile app.",
      cardBg: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      border: "border-indigo-100"
    },
    {
      icon: FileText,
      title: "Order & Invoice Management",
      description: "Capture orders, sync inventory, and generate invoices in real time from a single-distributor dashboard.",
      cardBg: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      border: "border-cyan-100"
    },
    {
      icon: Globe,
      title: "Distributor Network",
      description: "Manage distributor relationships, track deliveries, and coordinate stock across all channels.",
      cardBg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      border: "border-emerald-100"
    },
    {
      icon: BarChart3,
      title: "Field Reporting",
      description: "Turn attendance, visits, and order data into actionable reports for compliance and performance review.",
      cardBg: "bg-rose-50",
      iconBg: "bg-rose-100",
      border: "border-rose-100"
    },
    {
      icon: ShieldCheck,
      title: "Secure Data Control",
      description: "Ensure data integrity and privacy across all roles while enabling fast access to business-critical operations.",
      cardBg: "bg-amber-50",
      iconBg: "bg-amber-100",
      border: "border-amber-100"
    },
  ]

  const keyFeatures = [
    "Role-based access for Admin, Employee, Distributor, and Dispatcher",
    "Attendance tracking for field staff",
    "Daily visit planning and reporting",
    "Order entry and distributor fulfillment",
    "Inventory visibility and stock control",
    "Invoice creation and billing automation",
    "Centralized performance and compliance reports",
    "Distributor network management",
    "Dispatch and route scheduling",
    "Mobile-first field team app",
    "Real-time alerts and notifications",
    "Analytics dashboard for field operations",
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
            src="/products/dms1.jpeg"
            alt="Automotive dealership management platform"
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
                Role-Based Field Management
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-8">
                Balmukund <span className="text-blue-500 italic">Asbestos</span> for Field Teams and Distributors
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                Balmukund Asbestos is a role-based management app for field teams and distributors. It helps you handle attendance, daily visits, orders, inventory, invoices, and reports from a single place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" className="h-16 px-10 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 rounded-full" asChild>
                  <a href="https://play.google.com/store/apps/details?id=com.dms_asbestos_app&hl=en_IN" target="_blank" rel="noopener noreferrer">
                    Download App
                  </a>
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
              Field & Distributor <span className="text-blue-600">Capabilities</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              A field-first platform for distributors and mobile teams, built to manage attendance, orders, inventory, invoices, and reporting in one place.
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
                  className={`group p-10 rounded-[3rem] ${feature.cardBg} ${feature.border} hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500`}
                >
                  <div className={`w-16 h-16 rounded-3xl ${feature.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-slate-100`}>
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
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 w-[270px] h-[500px] mx-auto lg:mx-0">
                <Image 
                  src="/products/dms2.jpeg"
                  alt="Modern dealership management dashboard"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Floating Stat Card */}
           
            </div>

            <div>
              <Badge className="mb-6 bg-blue-500/10 text-blue-600 border-none px-4 py-1">Operations Simplified</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-slate-900 leading-tight">
                Built for <span className="text-blue-600">Field Teams</span> & <span className="text-blue-600">Distributors</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Balmukund Asbestos is a role-based management app for field teams and distributors. It helps you handle attendance, daily visits, orders, inventory, invoices, and reports from a single place.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Role-Based Access", text: "Admin, Employee, Distributor, and Dispatcher permissions keep data secure and workflows clear." },
                  { icon: Zap, title: "Field Attendance & Visits", text: "Track daily field activity, attendance, and distributor visits from one dashboard." },
                  { icon: Globe, title: "Order, Inventory & Invoice Management", text: "Capture orders, monitor inventory, and generate invoices without switching apps." }
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

      {/* Image Gallery */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Operations Visuals</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore the Balmukund Asbestos experience through screenshots and workflow visuals for attendance, orders, inventory, invoicing, and field reporting.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {["dms1.jpeg", "dms2.jpeg", "dms3.jpeg", "dms4.jpeg", "dms5.jpeg"].map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
                <Image
                  src={`/products/${src}`}
                  alt={`DMS screenshot ${idx + 1}`}
                  width={420}
                  height={280}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
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
               <a href="https://play.google.com/store/apps/details?id=com.dms_asbestos_app&hl=en_IN" target="_blank" rel="noopener noreferrer">
                  Get Started 
                </a>
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
