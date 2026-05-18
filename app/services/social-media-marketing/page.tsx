"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Users, 
  MessageSquare, 
  Zap, 
  Target, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Video,
  Heart,
  Flame,
  Globe,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Sparkles
} from "lucide-react"
import Link from "next/link"

export default function SocialMediaMarketingPage() {
  const channelPlaybooks = [
    {
      channel: "Instagram & TikTok",
      icon: Instagram,
      headline: "Visual Hook Sprints",
      playbook: "High-velocity short-form reels and custom visual grids satisfy algorithms and capture passive scrolls in 1.2s.",
      metrics: "Average Video Views: 2M+",
      color: "border-fuchsia-500/20 text-fuchsia-400 bg-fuchsia-500/5",
      accent: "bg-fuchsia-500"
    },
    {
      channel: "LinkedIn Core",
      icon: Linkedin,
      headline: "B2B Thought Authority",
      playbook: "Executive opinions, strategic case logs, and targeted B2B text campaigns convert professional prospects directly.",
      metrics: "Average CTR: +240%",
      color: "border-blue-500/20 text-blue-400 bg-blue-500/5",
      accent: "bg-blue-500"
    },
    {
      channel: "YouTube Network",
      icon: Youtube,
      headline: "Deep-Dive Education",
      playbook: "Long-form product diagnostics, video reviews, and optimized search descriptions capture high-intent buyers.",
      metrics: "Subscriber Growth: +180%",
      color: "border-red-500/20 text-red-400 bg-red-500/5",
      accent: "bg-red-500"
    },
    {
      channel: "X / Twitter & Reddit",
      icon: Twitter,
      headline: "Realtime PR Node",
      playbook: "Real-time industry commentary, trending challenge loops, and active community moderations secure domain advocacy.",
      metrics: "Brand Mentions: +340%",
      color: "border-slate-500/20 text-slate-400 bg-slate-500/5",
      accent: "bg-slate-400"
    }
  ]

  const metrics = [
    { value: "+180%", label: "Average Engagement Lift" },
    { value: "85M+", label: "Organic Content Views" },
    { value: "500+", label: "Vetted Creator Network" },
    { value: "4.5x", label: "Attribution Conversion Lift" }
  ]

  return (
    <main className="min-h-screen bg-[#030104] text-white font-sans selection:bg-fuchsia-500/30 overflow-hidden">
      <Navbar />

      {/* Creative Media Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/20 via-black to-pink-950/20" />
          {/* Subtle noise grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Badge variant="outline" className="mb-6 border-fuchsia-500/50 text-fuchsia-400 bg-fuchsia-500/10 backdrop-blur-md px-5 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
                Brand narrative & Feeds Obsession
              </Badge>
              <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[1]">
                CULTIVATE BRAND <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 font-serif italic">OBSESSION</span> IN ACTIVE FEEDS
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-light">
                We replace basic feed posting with immersive content engineering. We design dynamic visual templates, write thought leadership hooks, and launch vetted creator loops designed to convert buyers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" className="h-16 px-10 text-md font-bold bg-gradient-to-r from-fuchsia-500 to-pink-650 hover:scale-105 transition-transform text-white rounded-xl shadow-lg shadow-fuchsia-500/20" asChild>
                  <Link href="/contact">Activate Brand Sprint</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-md font-bold border-white/10 text-white hover:bg-white/5 rounded-xl" asChild>
                  <Link href="#playbooks">Explore Playbooks</Link>
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

            {/* Right Stacked Graphic Visual */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="absolute -inset-10 bg-fuchsia-500/5 blur-3xl rounded-full" />
              <div className="relative border border-white/10 rounded-[3rem] p-8 bg-black/60 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                  <Video className="w-6 h-6 text-fuchsia-400 animate-pulse" />
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Algorithmic Hook Monitor</span>
                </div>
                
                {/* Reels Mockup */}
                <div className="rounded-2xl border border-fuchsia-500/20 p-5 bg-fuchsia-950/10 flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Algorithm Velocity: High</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Video loops retention rate checked at 84% over 30 days.</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/5 p-5 bg-white/[0.02] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Creator Seeding pipeline</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">500+ micro-creators contract triggers validated automatically.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Smartphone Playbook Array (Unique Layout) */}
      <section id="playbooks" className="py-32 bg-black/60 relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <Badge className="mb-4 bg-fuchsia-500/20 text-fuchsia-400 border-none px-4 py-1 text-xs font-bold uppercase tracking-widest">
              Execution blueprints
            </Badge>
            <h2 className="text-5xl font-black mb-8 tracking-tighter">
              Smartphone <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-rose-500 italic">Playbooks</span> Array
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We design custom content flows tailored to individual platform logics, ensuring cohesive brand narrative globally.
            </p>
          </div>

          {/* Smartphone Frame Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {channelPlaybooks.map((play, idx) => {
              const Icon = play.icon
              return (
                <div 
                  key={idx} 
                  className={`p-8 rounded-[2.5rem] border backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${play.color}`}
                >
                  <div>
                    {/* Top Device Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                      <Icon className="w-6 h-6" />
                      <div className="w-2 h-2 rounded-full animate-pulse bg-current" />
                    </div>

                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-1">{play.channel}</div>
                    <h3 className="text-xl font-black text-white mb-4">{play.headline}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{play.playbook}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-white">{play.metrics}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brand Obsession CTA */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative rounded-[3.5rem] p-12 md:p-24 overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 to-black text-center shadow-2xl">
            <div className="absolute inset-0 bg-radial-gradient from-fuchsia-500/10 via-transparent to-transparent blur-2xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                CRAFT A BRAND <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">WORTH OBEYING</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Stop publishing static flyers that algorithms suppress. Deploy an authentic storytelling engine that commands feed attention.
              </p>
              <Button size="lg" className="h-20 px-12 text-xl font-bold bg-white text-black hover:bg-slate-200 rounded-2xl shadow-2xl transition-all hover:scale-105" asChild>
                <Link href="/contact">
                  Start Brand Strategy Session <ArrowRight className="ml-3 w-6 h-6 text-fuchsia-500" />
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
