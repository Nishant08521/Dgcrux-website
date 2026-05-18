"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Store, 
  Users, 
  ShieldCheck, 
  Layers, 
  Globe, 
  Cpu, 
  Database, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Settings2,
  Code2,
  Coins,
  ArrowUpRight,
  TrendingUp,
  CreditCard,
  Shuffle,
  ShieldAlert
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MarketplaceDevelopmentPage() {
  const transactionSteps = [
    {
      title: "1. Global Multi-Vendor Checkout",
      actor: "Buyer Action",
      desc: "Buyer adds items from 4 separate sellers into a single, unified cart and checkouts in one transaction.",
      icon: Users,
      color: "border-amber-500/30 text-amber-400 bg-amber-500/5"
    },
    {
      title: "2. Instant Commission Split Engine",
      actor: "dgcrux API Core",
      desc: "The platform instantly calculates exact splits: seller revenues, regional taxes, custom category commissions, and logistics cuts.",
      icon: Shuffle,
      color: "border-orange-500/30 text-orange-400 bg-orange-500/5"
    },
    {
      title: "3. Escrow Isolation Shield",
      actor: "Trust Guard",
      desc: "Funds are isolated securely in multi-party Stripe Connect escrows. Disasters, returns, and dispute holding are fully automated.",
      icon: Lock,
      color: "border-rose-500/30 text-rose-400 bg-rose-500/5"
    },
    {
      title: "4. Automated Clearing payout",
      actor: "Settlement API",
      desc: "Following automated delivery verification, isolated merchant clearing balances are instantly released to vendors worldwide.",
      icon: CreditCard,
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5"
    }
  ]

  const ecosystemTiers = [
    {
      title: "Seller Hub Dashboard",
      role: "Vendor Engine",
      desc: "A fully decentralized storefront interface letting merchants catalog products, automate bulk pricing, and fulfill orders independently.",
      icon: Store,
      stats: ["Fully Automated Onboarding", "Bulk CSV/JSON Import Sync", "Dynamic Seller Shipping Rates"],
      class: "lg:col-span-2 bg-gradient-to-br from-amber-950/20 via-slate-900 to-black border-amber-500/30 text-amber-400"
    },
    {
      title: "Central Control Command",
      role: "Admin Engine",
      desc: "Your centralized command portal mapping platform commissions, moderation pipelines, dispute reviews, and general ecosystem health.",
      icon: Settings2,
      stats: ["Tier-Based Platform Fees", "KYC/AML Review Queues", "Real-Time Transaction Log"],
      class: "lg:col-span-1 bg-gradient-to-br from-violet-950/20 via-slate-900 to-black border-violet-500/30 text-violet-400"
    },
    {
      title: "Global Commerce Experience",
      role: "Buyer Engine",
      desc: "A sub-second, headless consumer experience designed to render millions of products, handle multi-vendor carts, and support georouted shipping.",
      icon: Globe,
      stats: ["Sub-Second Elastic Search", "Multi-Seller Shared Checkout", "Localized Tax Compliance"],
      class: "lg:col-span-3 bg-gradient-to-br from-rose-950/20 via-slate-900 to-black border-rose-500/30 text-rose-400"
    }
  ]

  const capabilities = [
    {
      icon: Cpu,
      title: "API-First Composable Core",
      desc: "We construct headless platforms utilizing MedusaJS or Go custom engines, guaranteeing absolute modular scaling capability."
    },
    {
      icon: Coins,
      title: "Autonomous Commissions",
      desc: "Set flat cuts, percentage commissions, tier scales, or seller-specific agreements. The system automates payouts instantly."
    },
    {
      icon: ShieldAlert,
      title: "Intrusion Dispute Shield",
      desc: "Automated holding queues prevent merchant fraudulent drawdowns. Customer refunds are isolated and cleared via escrow layers safely."
    }
  ]

  return (
    <main className="min-h-screen bg-[#020203] text-white font-sans selection:bg-amber-500/30 overflow-hidden">
      <Navbar />

      {/* Cyberpunk Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-radial-gradient from-amber-600/10 via-transparent to-transparent opacity-60 blur-3xl" />
          {/* Futuristic grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-amber-500/50 text-amber-400 bg-amber-500/10 backdrop-blur-md px-5 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full animate-pulse">
            Futuristic Multi-Vendor Systems
          </Badge>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 font-serif italic">UNRIVALED</span> COMMERCE ECOSYSTEMS
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            No standard plugins. No restricted templates. We design fully customized, high-tech marketplace architectures optimized to handle automated split transactions, massive catalog syncs, and custom merchant hubs.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-24">
            <Button size="lg" className="h-20 px-12 text-xl font-black bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:scale-105 transition-all shadow-[0_0_50px_rgba(245,158,11,0.3)] rounded-2xl" asChild>
              <Link href="/contact">Deploy Your Marketplace</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-20 px-12 text-xl font-black border-white/10 text-white hover:bg-white/5 rounded-2xl" asChild>
              <Link href="#flow">View System Flow</Link>
            </Button>
          </div>

          {/* Glowing Connected Dashboard Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto border border-white/5 rounded-3xl p-6 bg-black/40 backdrop-blur-xl relative">
            <div className="absolute -inset-px bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 rounded-3xl -z-10 blur-sm" />
            {[
              { label: "Payout Latency", value: "<1.2s", desc: "API settlement Clearing" },
              { label: "Elastic Search Sync", value: "Real-time", desc: "Catalog Node Updates" },
              { label: "Escrow splits", value: "Stripe Connect", desc: "Fully Guarded Pipelines" },
              { label: "Uptime guarantee", value: "99.99%", desc: "Fail-Safe Infrastructure" }
            ].map((stat, i) => (
              <div key={i} className="p-4 border-r border-white/5 last:border-0 text-left">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-white mb-0.5">{stat.value}</div>
                <div className="text-[10px] text-amber-500/80 font-bold uppercase tracking-wider">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Transaction Flow Diagram (Unique Design) */}
      <section id="flow" className="py-32 bg-black/60 relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-20 items-center">
            <div className="lg:col-span-1">
              <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-none px-4 py-1 text-xs font-bold uppercase tracking-widest">
                Visual Architecture
              </Badge>
              <h2 className="text-5xl font-black tracking-tighter mb-8">
                How dgcrux Splits <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 italic">Ecosystem</span> Transactions
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Traditional multi-vendor tools bottleneck settlements, causing tax compliance headaches and complex merchant withdrawal flows. Our custom engines automate the entire chain, handling splits at source.
              </p>
              <Button size="lg" className="h-16 px-8 bg-white text-black hover:bg-slate-200 rounded-xl font-bold flex items-center gap-2" asChild>
                <Link href="/contact">Request Technical Spec <ArrowRight className="w-5 h-5 text-orange-500" /></Link>
              </Button>
            </div>

            <div className="lg:col-span-2 space-y-6 relative">
              {/* Connected Line Effect */}
              <div className="absolute left-[34px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-rose-500 -z-10 hidden sm:block" />

              {transactionSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <motion.div 
                    whileHover={{ x: 10 }}
                    key={idx}
                    className={`flex flex-col sm:flex-row gap-6 p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 ${step.color} bg-black/40`}
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 bg-slate-950 shadow-2xl">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-xl font-black text-white">{step.title}</h4>
                        <Badge variant="outline" className="border-white/10 text-slate-400 text-[10px] font-bold uppercase px-2 py-0.5">{step.actor}</Badge>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Command Deck Layout */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <Badge className="mb-4 bg-rose-500/20 text-rose-400 border-none px-4 py-1 text-xs font-bold uppercase tracking-widest">
              Platform Nodes
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">
              The Command <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-fuchsia-500 italic">Commanders</span>
            </h2>
            <p className="text-xl text-slate-400">
              Three critical nodes, custom engineered to interface seamlessly under a secure single infrastructure block.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ecosystemTiers.map((tier, idx) => {
              const Icon = tier.icon
              return (
                <div key={idx} className={`p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group flex flex-col justify-between hover:border-white/10 transition-all duration-500 ${tier.class}`}>
                  {/* Hexagon tech grid overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
                  
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div className="mb-1 text-xs font-bold uppercase tracking-widest opacity-60">{tier.role}</div>
                    <h3 className="text-3xl font-black text-white mb-4">{tier.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">{tier.desc}</p>
                    
                    <div className="space-y-3 border-t border-white/5 pt-6">
                      {tier.stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-slate-300 text-sm font-semibold">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <span className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 cursor-pointer group-hover:text-amber-400 transition-colors">
                      View Engine Architecture <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities (Flat tech cards) */}
      <section className="py-32 bg-slate-950 relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-none px-4 py-1 text-xs font-bold uppercase tracking-widest">
                Engine Specs
              </Badge>
              <h3 className="text-4xl font-black mb-6">Engineered Beyond SaaS</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Typical SaaS applications break under heavy merchant onboarding or concurrent split logic routines. Our bespoke codebase keeps your roadmap completely yours.
              </p>
              <Button size="lg" className="h-16 px-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl text-white font-bold" asChild>
                <Link href="/contact">Discuss Architecture</Link>
              </Button>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="p-8 rounded-3xl border border-white/5 bg-black/40 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300 group">
                  <cap.icon className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-black text-white mb-2">{cap.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Glassmorphic CTA Banner */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative rounded-[3.5rem] p-12 md:p-24 overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 to-black text-center shadow-2xl">
            <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 via-transparent to-transparent blur-2xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                BUILD THE NEXT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500">COMMERCE GIANT</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Unlock platform commissions, escrow multi-party settlements, and absolute code ownership. Let's design your bespoke commerce infrastructure.
              </p>
              <Button size="lg" className="h-20 px-12 text-xl font-black bg-white text-black hover:bg-slate-200 rounded-2xl shadow-2xl transition-all hover:scale-105" asChild>
                <Link href="/contact">
                  Start Marketplace Blueprint <ArrowRight className="ml-3 w-6 h-6 text-orange-500" />
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