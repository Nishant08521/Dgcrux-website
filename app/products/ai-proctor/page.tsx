"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Eye, 
  Shield, 
  Camera, 
  AlertTriangle, 
  Lock, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  Search,
  Monitor
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIProctoringPage() {
  const features = [
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "AI-powered facial recognition and eye-tracking to monitor student behavior during exams with millisecond precision.",
      color: "blue"
    },
    {
      icon: Camera,
      title: "Multi-Camera Support",
      description: "Monitor candidates from multiple angles with webcam and mobile camera support for a 360-degree view.",
      color: "indigo"
    },
    {
      icon: AlertTriangle,
      title: "Suspicious Activity Detection",
      description: "Automatically flag suspicious behavior like multiple faces, phone usage, or tab switching using advanced neural networks.",
      color: "amber"
    },
    {
      icon: Shield,
      title: "Secure Exam Environment",
      description: "Full browser lockdown, copy-paste prevention, and screenshot blocking to ensure total exam integrity.",
      color: "emerald"
    },
    {
      icon: Lock,
      title: "Identity Verification",
      description: "Instant photo ID verification and biometric authentication to eliminate candidate impersonation.",
      color: "rose"
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Comprehensive post-exam reports with AI-flagged incidents, confidence scores, and full session recordings.",
      color: "violet"
    },
  ]

  const stats = [
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Cheating Detection", value: "98.5%" },
    { label: "Exams Protected", value: "1M+" },
    { label: "Customer Rating", value: "4.9/5" },
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

  const colorMap: Record<string, {
    iconBg: string;
    iconText: string;
    hoverTitle: string;
    glowClass: string;
    shadowHover: string;
    borderHover: string;
  }> = {
    blue: {
      iconBg: "bg-blue-50/80 dark:bg-blue-950/30",
      iconText: "text-blue-600 dark:text-blue-400",
      hoverTitle: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      glowClass: "bg-blue-500/5 group-hover:bg-blue-500/12",
      shadowHover: "group-hover:shadow-blue-500/8",
      borderHover: "group-hover:border-blue-200/80 dark:group-hover:border-blue-900/50",
    },
    indigo: {
      iconBg: "bg-indigo-50/80 dark:bg-indigo-950/30",
      iconText: "text-indigo-600 dark:text-indigo-400",
      hoverTitle: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
      glowClass: "bg-indigo-500/5 group-hover:bg-indigo-500/12",
      shadowHover: "group-hover:shadow-indigo-500/8",
      borderHover: "group-hover:border-indigo-200/80 dark:group-hover:border-indigo-900/50",
    },
    amber: {
      iconBg: "bg-amber-50/80 dark:bg-amber-950/30",
      iconText: "text-amber-600 dark:text-amber-400",
      hoverTitle: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
      glowClass: "bg-amber-500/5 group-hover:bg-amber-500/12",
      shadowHover: "group-hover:shadow-amber-500/8",
      borderHover: "group-hover:border-amber-200/80 dark:group-hover:border-amber-900/50",
    },
    emerald: {
      iconBg: "bg-emerald-50/80 dark:bg-emerald-950/30",
      iconText: "text-emerald-600 dark:text-emerald-400",
      hoverTitle: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
      glowClass: "bg-emerald-500/5 group-hover:bg-emerald-500/12",
      shadowHover: "group-hover:shadow-emerald-500/8",
      borderHover: "group-hover:border-emerald-200/80 dark:group-hover:border-emerald-900/50",
    },
    rose: {
      iconBg: "bg-rose-50/80 dark:bg-rose-950/30",
      iconText: "text-rose-600 dark:text-rose-400",
      hoverTitle: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
      glowClass: "bg-rose-500/5 group-hover:bg-rose-500/12",
      shadowHover: "group-hover:shadow-rose-500/8",
      borderHover: "group-hover:border-rose-200/80 dark:group-hover:border-rose-900/50",
    },
    violet: {
      iconBg: "bg-violet-50/80 dark:bg-violet-950/30",
      iconText: "text-violet-600 dark:text-violet-400",
      hoverTitle: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
      glowClass: "bg-violet-500/5 group-hover:bg-violet-500/12",
      shadowHover: "group-hover:shadow-violet-500/8",
      borderHover: "group-hover:border-violet-200/80 dark:group-hover:border-violet-900/50",
    },
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 lg:pt-18 lg:pb-32 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-blue-500/50 text-blue-400 px-4 py-1 text-sm font-medium bg-blue-500/10 backdrop-blur-sm">
                Next-Gen AI Proctoring
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-8">
                Eliminate Exam <span className="text-blue-500 italic">Fraud</span> with Intelligent <span className="text-indigo-400">AI</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                The world's most advanced AI-powered proctoring solution. Detect cheating in real-time, verify identities instantly, and ensure 100% exam integrity for any scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 rounded-full" asChild>
                  <a href="https://proctorai.in/ai-proctor" target="_blank" rel="noopener noreferrer">
                    Get a Free Demo
                  </a>
                </Button>
             
              </div>
              
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image 
                  src="/ai_proctor_hero_1778579640354.png"
                  alt="AI Proctoring Visualization"
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating UI Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Alert: Phone Detected</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-10 p-4 bg-blue-600/20 backdrop-blur-md rounded-2xl border border-blue-400/30 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <UserCheck className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Identity Verified: 99% Confidence</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full z-[-1]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-18 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Advanced <span className="text-blue-600 italic">Security</span> Infrastructure
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our AI engine is built on state-of-the-art computer vision and behavioral analysis models to ensure a fair testing environment.
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
              const colors = colorMap[feature.color] || colorMap.blue
              return (
                <motion.div 
                  key={feature.title}
                  variants={itemVariants}
                  className={`group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl ${colors.shadowHover} ${colors.borderHover} transition-all duration-500 overflow-hidden relative`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md ${colors.iconBg}`}>
                    <Icon className={`w-7 h-7 ${colors.iconText}`} />
                  </div>
                  <h3 className={`text-2xl font-bold text-slate-900 mb-4 ${colors.hoverTitle} transition-colors`}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                  
                  {/* Subtle Background Glow */}
                  <div className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-2xl ${colors.glowClass} transition-colors duration-500`} />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div
                  className="aspect-video bg-cover bg-center relative flex items-center justify-center"
                  style={{ backgroundImage: "url('/products/ai-proter.png')" }}
                >
                  <div className="absolute inset-0 bg-slate-900/30" />
                  <div className="relative text-center p-12">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <Monitor className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 italic text-blue-400">Live AI Dashboard</h4>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                      Real-time visualization of candidate behavior, facial landmarks, and eye tracking data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge className="mb-6 bg-indigo-500/20 text-indigo-400 border-none px-4 py-1">How it Works</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                Seamless <span className="text-indigo-400">3-Step</span> Security
              </h2>
              
              <div className="space-y-10">
                {[
                  { step: "01", title: "Identity Authentication", text: "Candidate verifies their identity using government-issued ID and live biometric facial matching." },
                  { step: "02", title: "Continuous Monitoring", text: "AI engine monitors the session for multiple faces, background noise, tab switching, and eye tracking deviations." },
                  { step: "03", title: "Automated Reporting", text: "Instant generation of audit logs with video evidence and confidence scores for human proctor review." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 text-4xl font-black text-white/10 italic">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3.5rem] p-4 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-8 tracking-tight">
                Ready to <span className="text-indigo-200">Secure</span> Your Examinations?
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Join hundreds of institutions using DgCrux AI Proctoring to maintain academic integrity at scale. Request a live demonstration today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-16 px-10 text-lg font-bold bg-white text-blue-600 hover:bg-slate-100 rounded-full shadow-xl">
                  <a href="https://proctorai.in/ai-proctor" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-white/30 text-blue-600 hover:bg-white/10 rounded-full">
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
