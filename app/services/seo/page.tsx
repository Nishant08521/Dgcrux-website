"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Search, 
  TrendingUp, 
  Cpu, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  Target,
  Sparkles,
  Award,
  ArrowUpRight,
  ChevronRight,
  HelpCircle,
  FileText
} from "lucide-react"
import Link from "next/link"

export default function SEOPage() {
  const comparisonItems = [
    {
      feature: "Optimization Layer",
      traditional: "Basic title tags & simple meta descriptions",
      dgcrux: "Code-level static Next.js schemas, sitemaps sync, and dynamic CDN edges",
      highlight: true
    },
    {
      feature: "Search Context",
      traditional: "Simple keyword list counts",
      dgcrux: "Semantic entity relations, answering exact user transaction intents",
      highlight: false
    },
    {
      feature: "Attribution",
      traditional: "Vanity traffic impressions & organic clicks",
      dgcrux: "Granular CRM and GA4 offline conversion margin matching",
      highlight: true
    },
    {
      feature: "Indexing Speed",
      traditional: "Wait 2-4 weeks for standard crawl loops",
      dgcrux: "Direct Search Console indexing API pushes within minutes",
      highlight: false
    },
    {
      feature: "Next-Gen Search",
      traditional: "Ignored completely",
      dgcrux: "AI Answer Optimization for Perplexity, Gemini & ChatGPT",
      highlight: true
    }
  ]

  const funnelSteps = [
    {
      tier: "Top of Funnel (TOFU)",
      title: "1. Crawler Speed & Indexability",
      desc: "Sub-second load times, dynamic XML structures, and structured schemas ensure Google crawlers immediately crawl and catalog 100% of your pages.",
      badge: "Crawl Engine",
      color: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400"
    },
    {
      tier: "Middle of Funnel (MOFU)",
      title: "2. AI & Semantic Intent Mapping",
      desc: "We construct topical silos answering exact purchase queries, securing high ranks in both standard search loops and AI answer engines like Perplexity.",
      badge: "AI Answers Engine",
      color: "border-sky-500/20 bg-sky-500/5 text-sky-400"
    },
    {
      tier: "Bottom of Funnel (BOFU)",
      title: "3. Conversion Copy & CRM Attribution",
      desc: "Traffic is useless without revenue. We optimize call-to-actions, track granular CRM margins, and prove exactly which organic paths yield transactions.",
      badge: "Revenue Engine",
      color: "border-blue-500/20 bg-blue-500/5 text-blue-400"
    }
  ]

  return (
    <main className="min-h-screen bg-[#020204] text-white font-sans selection:bg-cyan-500/30 overflow-hidden">
      <Navbar />

      {/* Analytics Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-600/10 blur-[130px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_80%,#000_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-cyan-500/50 text-cyan-400 bg-cyan-500/10 backdrop-blur-md px-5 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
            Scientific Organic Search
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 max-w-5xl mx-auto leading-none">
            ENGINEERING HIGH-INTENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 font-serif italic">ORGANIC</span> CONVERSIONS
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
            Stop waiting for basic keywords to drive clicks. We build programmatic, semantic SEO architectures, optimize search entity connections, and scale your inbound transaction channels with absolute transparency.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-24">
            <Button size="lg" className="h-20 px-12 text-xl font-bold bg-cyan-500 hover:bg-cyan-600 text-black shadow-lg shadow-cyan-500/20 rounded-2xl" asChild>
              <Link href="/contact">Request Inbound Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-20 px-12 text-xl font-bold border-white/10 text-white hover:bg-white/5 rounded-2xl" asChild>
              <Link href="#pipeline">Explore Funnel Pipeline</Link>
            </Button>
          </div>

          {/* Connected Data Card (Scientific Style) */}
          <div className="max-w-4xl mx-auto border border-white/5 rounded-3xl p-8 bg-black/40 backdrop-blur-xl relative text-left">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            <div className="flex items-center gap-3 border-b border-white/5 pb-6 mb-6">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-black text-white">Live Crawl Attribution Logs</h3>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 text-xs">
              <div>
                <span className="text-slate-500 uppercase tracking-wider block mb-1">CTR Increase</span>
                <span className="text-2xl font-bold text-white block mb-0.5">+240%</span>
                <span className="text-cyan-400 font-bold">Average Account Lift</span>
              </div>
              <div className="border-l border-white/5 sm:pl-6">
                <span className="text-slate-500 uppercase tracking-wider block mb-1">AI Citations Live</span>
                <span className="text-2xl font-bold text-white block mb-0.5">Active</span>
                <span className="text-cyan-400 font-bold">Perplexity & Gemini Ready</span>
              </div>
              <div className="border-l border-white/5 sm:pl-6">
                <span className="text-slate-500 uppercase tracking-wider block mb-1">Index Latency</span>
                <span className="text-2xl font-bold text-white block mb-0.5">&lt;5 Minutes</span>
                <span className="text-cyan-400 font-bold">Direct Fast-Indexing Sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organic Conversion Funnel Section (Unique Design) */}
      <section id="pipeline" className="py-32 bg-black/40 relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-none px-4 py-1 text-xs font-bold uppercase tracking-widest">
              Conversion Architecture
            </Badge>
            <h2 className="text-5xl font-black mb-8 tracking-tighter">
              The Organic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 italic">Inbound</span> Pipeline
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We structure organic acquisitions down a vertical structural stack—maximizing search spider indexing and intent matching at every level.
            </p>
          </div>

          {/* Vertical Funnel Diagram */}
          <div className="space-y-6 relative max-w-4xl mx-auto">
            {funnelSteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`p-10 rounded-[2.5rem] border backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${step.color}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60 block mb-1">{step.tier}</span>
                    <h3 className="text-2xl font-black text-white">{step.title}</h3>
                  </div>
                  <Badge variant="outline" className="border-white/10 text-white font-bold px-3 py-1 text-xs uppercase tracking-widest self-start md:self-center">
                    {step.badge}
                  </Badge>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Comparison Grid (Unique Design) */}
      <section className="py-32 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <Badge className="mb-4 bg-sky-500/20 text-sky-400 border-none px-4 py-1 text-xs font-bold uppercase tracking-widest">
              Competitive Spec
            </Badge>
            <h2 className="text-5xl font-black tracking-tight mb-8">
              Bespoke Code SEO vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 italic">Legacy Tools</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Why our software engineering approach consistently beats normal visual-only marketing agencies.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="border border-white/5 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md">
            <div className="grid grid-cols-12 gap-4 border-b border-white/5 p-6 text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-900/40">
              <div className="col-span-4">Optimization Criteria</div>
              <div className="col-span-4">Traditional SEO Agencies</div>
              <div className="col-span-4 text-cyan-400">dgcrux Programmatic SEO</div>
            </div>
            
            <div className="divide-y divide-white/5">
              {comparisonItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-12 gap-4 p-8 text-sm transition-colors hover:bg-white/[0.02] ${item.highlight ? "bg-cyan-500/[0.02]" : ""}`}
                >
                  <div className="col-span-12 md:col-span-4 font-bold text-white mb-2 md:mb-0 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    {item.feature}
                  </div>
                  <div className="col-span-12 md:col-span-4 text-slate-400 pr-4 flex items-center leading-relaxed">
                    {item.traditional}
                  </div>
                  <div className="col-span-12 md:col-span-4 text-cyan-300 font-semibold flex items-center leading-relaxed">
                    {item.dgcrux}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Inbound CTA */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative rounded-[3.5rem] p-12 md:p-24 overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 to-black text-center shadow-2xl">
            <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 via-transparent to-transparent blur-2xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                SCALE YOUR INBOUND <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">ORGANIC PIPELINE</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Build a self-sustaining technical organic SEO engine that captures high-intent buyers, completely bypass paid clicks cycles.
              </p>
              <Button size="lg" className="h-20 px-12 text-xl font-bold bg-white text-black hover:bg-slate-200 rounded-2xl shadow-2xl transition-all hover:scale-105" asChild>
                <Link href="/contact">
                  Start Technical SEO Blueprint <ArrowRight className="ml-3 w-6 h-6 text-cyan-500" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
