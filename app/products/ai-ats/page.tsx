"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  BrainCircuit, 
  Sparkles, 
  Cpu, 
  BarChart3, 
  Search, 
  Shield, 
  Zap,
  Target,
  UserCheck,
  TrendingUp,
  ArrowRight,
  Database
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIATSPage() {
  const aiCapabilities = [
    {
      icon: BrainCircuit,
      title: "Neural Resume Parsing",
      description: "Extract deep insights from resumes beyond just keywords. Understand context, experience quality, and potential culture fit.",
      color: "violet"
    },
    {
      icon: Target,
      title: "Smart Talent Matching",
      description: "Proprietary AI algorithms that rank candidates by matching their unique skill sets with your specific job requirements.",
      color: "indigo"
    },
    {
      icon: UserCheck,
      title: "Predictive Success Modeling",
      description: "Predict candidate long-term success and retention probability using historical performance data models.",
      color: "blue"
    },
    {
      icon: Search,
      title: "Automated Sourcing",
      description: "AI-driven sourcing that finds passive talent across millions of profiles, matching them to your open roles instantly.",
      color: "cyan"
    },
    {
      icon: Sparkles,
      title: "Bias Mitigation Engine",
      description: "Ensure fair hiring with built-in AI audits that flag and reduce unconscious bias in the screening process.",
      color: "rose"
    },
    {
      icon: Cpu,
      title: "Autonomous Scheduling",
      description: "AI agents that coordinate interview times between candidates and hiring managers without manual intervention.",
      color: "emerald"
    },
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
    <main className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-black to-purple-900/30" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
          
          {/* Animated Glows */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-indigo-500/50 text-indigo-400 px-4 py-1 text-sm font-medium bg-indigo-500/10 backdrop-blur-sm">
                Powered by Advanced Neural Networks
              </Badge>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-white leading-none mb-8">
                Hiring at the Speed of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 italic">Thought</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                The next evolution of talent acquisition. Our AI-ATS doesn't just track applicants—it understands them, automates the discovery process, and predicts your next best hire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-16 px-10 text-lg font-bold bg-indigo-600 hover:bg-indigo-700 shadow-[0_0_30px_rgba(79,70,229,0.4)] rounded-full transition-all hover:scale-105" asChild>
                  <Link href="#contact">Deploy AI Engine</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-white/10 text-white hover:bg-white/5 rounded-full" asChild>
                  <Link href="#capabilities">View AI Capabilities</Link>
                </Button>
              </div>

              <div className="mt-16 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-slate-800" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Real-time Matching</span>
                </div>
                <div className="h-4 w-px bg-white/10" />
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Enterprise Ready</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-sm group">
                <Image
                  src="/ai_ats_hero_visualization.png"
                  alt="AI ATS Visualization"
                  width={800}
                  height={600}
                  className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 left-12 p-5 bg-indigo-600/20 backdrop-blur-xl rounded-3xl border border-indigo-400/30 shadow-2xl"
                >
                  <Sparkles className="w-8 h-8 text-indigo-400 mb-2" />
                  <div className="text-xs font-black uppercase tracking-widest">AI Ranking: 98/100</div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 right-12 p-5 bg-purple-600/20 backdrop-blur-xl rounded-3xl border border-purple-400/30 shadow-2xl"
                >
                  <TrendingUp className="w-8 h-8 text-purple-400 mb-2" />
                  <div className="text-xs font-black uppercase tracking-widest">Efficiency +340%</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section id="capabilities" className="py-32 relative bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              Cognitive <span className="text-indigo-500 italic">Intelligence</span> Features
            </h2>
            <p className="text-xl text-slate-400">
              Beyond simple automation. Our AI engine performs complex tasks previously only possible for human recruiters.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {aiCapabilities.map((cap, idx) => {
              const Icon = cap.icon
              return (
                <motion.div
                  key={cap.title}
                  variants={itemVariants}
                  className="group relative p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-indigo-500/50 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]">
                    <Icon className="w-8 h-8 text-indigo-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {cap.description}
                  </p>
                  
                  {/* Hover Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Integration */}
      <section className="py-32 bg-gradient-to-b from-black to-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Vector DB", icon: Database, text: "Storing high-dimensional candidate embeddings." },
                  { title: "LLM Processing", icon: Cpu, text: "Natural language parsing of complex resumes." },
                  { title: "Smart Scheduling", icon: Zap, text: "Context-aware interview coordination." },
                  { title: "Secure API", icon: Shield, text: "Enterprise-grade integration endpoints." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                    <item.icon className="w-10 h-10 text-indigo-500 mb-4" />
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge className="mb-6 bg-indigo-500/20 text-indigo-400 border-none px-4 py-1 font-bold">The AI Advantage</Badge>
              <h2 className="text-5xl font-black mb-8 tracking-tighter leading-tight">
                Architected for the <span className="text-indigo-500">Future</span> of Work
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Most ATS platforms are just databases. Ours is an active intelligence that works 24/7 to discover, screen, and schedule talent, allowing you to focus on building human connections.
              </p>
              
              <Button size="lg" className="h-16 px-10 text-lg font-bold bg-white text-black hover:bg-slate-200 rounded-full transition-all" asChild>
                <Link href="#contact">Read Technical Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto p-20 rounded-[4rem] bg-indigo-600 relative overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                Ready to Upgrade Your <span className="text-indigo-200">Intelligence?</span>
              </h2>
              <p className="text-2xl text-white/80 mb-12 font-medium">
                Request an enterprise sandbox account and see the power of AI-ATS in your own environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-18 px-12 text-xl font-bold bg-white text-indigo-600 hover:bg-slate-100 rounded-full shadow-2xl">
                  Schedule AI Audit <ArrowRight className="ml-3 w-6 h-6" />
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
