"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  TrendingUp, 
  BarChart3, 
  Cpu, 
  Database, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  Target,
  Sparkles,
  Award,
  ArrowUpRight,
  Flame,
  LineChart,
  Percent,
  Crosshair
} from "lucide-react"
import Link from "next/link"

export default function PaidAdsPage() {
  const simulatorTiers = [
    { spend: "$10,000", roas: "3.2x", CAC: "$45", yield: "$32,000", state: "Market Testing" },
    { spend: "$50,000", roas: "4.5x", CAC: "$32", yield: "$225,000", state: "Ecosystem Scale" },
    { spend: "$250,000", roas: "6.2x", CAC: "$24", yield: "$1,550,000", state: "Predictable Multiplier", active: true }
  ]

  const radarPillars = [
    {
      title: "1. Intent-Driven Google Conquest",
      badge: "Search & PMax",
      desc: "Capturing buyers at the exact millisecond of transaction search queries. We audit feeds, negative keywords, and conquest rivals.",
      icon: Crosshair,
      color: "border-red-500/20 text-red-400 bg-red-500/5",
      accent: "bg-red-500"
    },
    {
      title: "2. Social Disruption Sprints",
      badge: "Creative Acquisition",
      desc: "Interrupting scrolls with high-velocity, high-performing video hooks, looked custom audiences, and interactive catalog placements.",
      icon: Flame,
      color: "border-rose-500/20 text-rose-400 bg-rose-500/5",
      accent: "bg-rose-500"
    },
    {
      title: "3. Retention & LTV Retargeting",
      badge: "Churn Winback",
      desc: "Recapturing dropoffs, scaling Customer Lifetime Value (LTV), and converting cart abandoners automatically using dynamic catalogs.",
      icon: LineChart,
      color: "border-violet-500/20 text-violet-400 bg-violet-500/5",
      accent: "bg-violet-500"
    }
  ]

  const metrics = [
    { value: "4.8x", label: "Average Account ROAS" },
    { value: "-38%", label: "CAC Cost Reduction" },
    { value: "$25M+", label: "Managed Annual Spend" },
    { value: "+4.5%", label: "Conversion Rate Lift" }
  ]

  return (
    <main className="min-h-screen bg-[#030101] text-white font-sans selection:bg-red-500/30 overflow-hidden">
      <Navbar />

      {/* Cyber Performance Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-violet-950/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_80%,#000_100%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Badge variant="outline" className="mb-6 border-red-500/50 text-red-400 bg-red-500/10 backdrop-blur-md px-5 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
                Data-Driven Performance Scaling
              </Badge>
              <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[1]">
                MULTIPLY AD SPEND INTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-serif italic">PREDICTABLE</span> MARGINS
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-light">
                Stop throwing budget at algorithms without custom attribution dashboards or high-velocity ad split testing. We engineer multi-touch conversion systems designed to scale positive return.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" className="h-16 px-10 text-md font-bold bg-gradient-to-r from-red-500 to-rose-650 hover:scale-105 transition-transform text-white rounded-xl shadow-lg shadow-red-500/20" asChild>
                  <Link href="/contact">Engineer Your ROAS</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-md font-bold border-white/10 text-white hover:bg-white/5 rounded-xl" asChild>
                  <Link href="#radars">View Precision Nodes</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5">
                {metrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-white mb-1">{m.value}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Simulator Dashboard (Unique Layout) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-red-500/5 blur-3xl rounded-full" />
              <div className="relative border border-white/10 rounded-[2.5rem] p-6 bg-black/80 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                  <BarChart3 className="w-5 h-5 text-red-400 animate-pulse" />
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400">ROAS Scaling Simulator</span>
                </div>

                <div className="space-y-4">
                  {simulatorTiers.map((tier, i) => (
                    <div 
                      key={i} 
                      className={`p-4 rounded-xl border transition-all duration-300 ${tier.active ? "border-red-500/40 bg-red-950/10" : "border-white/5 bg-white/[0.01]"}`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-white uppercase">Tier: {tier.state}</span>
                        {tier.active && <Badge className="bg-red-500 text-black text-[9px] uppercase px-1.5 py-0.5">Recommended scale</Badge>}
                      </div>
                      
                      <div className="grid grid-cols-4 gap-2 text-[11px]">
                        <div>
                          <span className="text-slate-500 block">Spend</span>
                          <span className="text-white font-bold block">{tier.spend}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">ROAS</span>
                          <span className="text-red-400 font-bold block">{tier.roas}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">CAC Cost</span>
                          <span className="text-white font-bold block">{tier.CAC}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Net Yield</span>
                          <span className="text-red-400 font-bold block">{tier.yield}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Precision Radars (Unique Layout) */}
      <section id="radars" className="py-32 bg-black/60 relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <Badge className="mb-4 bg-red-500/20 text-red-400 border-none px-4 py-1 text-xs font-bold uppercase tracking-widest">
              Telemetry Nodes
            </Badge>
            <h2 className="text-5xl font-black mb-8 tracking-tighter">
              Precision Targeting <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-500 italic">Radars</span> Grid
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We divide and engineer paid accounts down to exact awareness segments, safeguarding budget from platform waste.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {radarPillars.map((rad, idx) => {
              const Icon = rad.icon
              return (
                <div 
                  key={idx} 
                  className={`p-10 rounded-[3rem] border backdrop-blur-xl relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${rad.color}`}
                >
                  <div>
                    {/* Telemetry Radar Top Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
                      <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{rad.badge}</span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-4">{rad.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-8">{rad.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 cursor-pointer group-hover:text-red-400 transition-colors">
                      Discuss Target Node <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conversion Scaling CTA */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative rounded-[3.5rem] p-12 md:p-24 overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 to-black text-center shadow-2xl">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 via-transparent to-transparent blur-2xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                DEPLOY A STABLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-rose-600">REVENUE ENGINE</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Stop throw budgets blindly. Install server-to-server Conversion APIs, active creative testing, and predictable high-yield ROI.
              </p>
              <Button size="lg" className="h-20 px-12 text-xl font-bold bg-white text-black hover:bg-slate-200 rounded-2xl shadow-2xl transition-all hover:scale-105" asChild>
                <Link href="/contact">
                  Request Free Paid Ads Audit <ArrowRight className="ml-3 w-6 h-6 text-red-500" />
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
