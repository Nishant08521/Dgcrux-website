"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  ShieldCheck, 
  Activity, 
  Clock, 
  Cpu, 
  Database, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  RefreshCw,
  Server,
  Award,
  Terminal as TerminalIcon,
  Bell,
  HardDrive
} from "lucide-react"
import Link from "next/link"

export default function EcommerceMaintenanceSupportPage() {
  const terminalLogs = [
    { time: "13:42:01", type: "SYSTEM", message: "Proactive firewall scan completed. 0 threats detected." },
    { time: "13:42:04", type: "DB_SYNC", message: "Hourly replication sync successful to zone: us-east-1." },
    { time: "13:42:09", type: "SPEED", message: "Edge caching optimized. Response latency: 42ms." },
    { time: "13:42:15", type: "SECURITY", message: "SSL integrity validated. PCI-DSS compliance certified." },
    { time: "13:42:22", type: "MONITOR", message: "Continuous checkout path simulation passed. Uptime: 100%." }
  ]

  const stats = [
    { label: "Uptime SLA", value: "99.99%" },
    { label: "Critical Response", value: "<15m" },
    { label: "Managed Volume", value: "$50M+" },
    { label: "Incident Rating", value: "0.0%" }
  ]

  return (
    <main className="min-h-screen bg-[#030404] text-white font-mono selection:bg-emerald-500/30 overflow-hidden">
      <Navbar />

      {/* Hero with Terminal Monitor (Unique Layout) */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 border-b border-emerald-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_60%)]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 font-sans">
              <div className="inline-flex items-center gap-2 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/5 mb-6 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Active Rev-Guard Active
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-[1]">
                WE GUARD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono font-normal">COMMERCE ENGINE</span> 24/7.
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
                Every second of platform failure causes transactional loss. We construct automated performance, security patches, and emergency incident responses to shield your checkout loop.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" className="h-16 px-8 text-md font-bold bg-emerald-500 hover:bg-emerald-600 text-black shadow-lg shadow-emerald-500/20 rounded-xl transition-all font-mono" asChild>
                  <Link href="/contact">ACTIVATE GUARD_PACK</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-8 text-md font-bold border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/5 rounded-xl font-mono" asChild>
                  <Link href="#bento">CHECK_BENTO_SPECS</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-1">{s.label}</div>
                    <div className="text-2xl font-black text-white font-mono">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right System Terminal */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 bg-emerald-500/10 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl border border-emerald-500/20 bg-black/80 shadow-2xl p-6 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-emerald-500/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <TerminalIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400 tracking-widest">LIVE_OPERATIONS_MONITOR</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                </div>

                {/* Logs Stream */}
                <div className="space-y-4">
                  {terminalLogs.map((log, i) => (
                    <div key={i} className="text-xs leading-relaxed">
                      <span className="text-emerald-500/50">[{log.time}]</span>{" "}
                      <span className="text-teal-400 font-bold">[{log.type}]</span>{" "}
                      <span className="text-slate-300 font-mono">{log.message}</span>
                    </div>
                  ))}
                </div>

                {/* Output indicator */}
                <div className="mt-6 pt-4 border-t border-emerald-500/10 flex justify-between items-center text-[10px] text-emerald-500/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    System Status: 100% ONLINE
                  </span>
                  <span>Port 443 Guarded</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bento Grid Design Structure (Unique Layout) */}
      <section id="bento" className="py-32 bg-black relative border-b border-emerald-500/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-24 font-sans">
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
              OPERATIONS_MATRIX
            </Badge>
            <h2 className="text-5xl font-black tracking-tight mb-8">
              Bento Architecture <span className="text-emerald-400 font-mono font-normal">System Guard</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We replace reactive traditional maintenance plans with an integrated, asymmetrical bento protection array.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Box 1 (Wide): Proactive Security Shield */}
            <div className="lg:col-span-2 p-10 rounded-3xl border border-emerald-500/10 bg-emerald-950/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-2xl group-hover:scale-120 transition-transform" />
              <ShieldCheck className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white font-sans mb-3">1. Proactive Security Guarding</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                Penetration modeling, hourly firewalls checks, real-time threat analysis, and automated PCI compliance updates keep threats isolated automatically.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-6 border-t border-white/5">
                {["PCI-DSS Compliance Audits", "Daily Encrypted Backups", "Intrusion Vulnerability Scans", "WAF Rules Tuning"].map((s, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 2 (Tall): Real-Time SLA Monitor */}
            <div className="lg:col-span-1 p-10 rounded-3xl border border-emerald-500/10 bg-emerald-950/5 relative overflow-hidden group flex flex-col justify-between">
              <Clock className="w-12 h-12 text-emerald-400 mb-6" />
              <div>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-none text-[10px] mb-2 uppercase">Response SLA</Badge>
                <h3 className="text-3xl font-black text-white font-sans mb-3">15m Critical Response</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6 font-sans">
                  Critical checkouts issues or server failures trigger automated developer notifications instantly, bypassing standard ticket loops.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-black/60 flex items-center gap-3">
                <Activity className="w-6 h-6 text-emerald-400 animate-pulse" />
                <span className="text-[10px] text-slate-300 uppercase tracking-widest font-mono">Incident Dispatcher Live</span>
              </div>
            </div>

            {/* Box 3 (Small): Performance Tuning */}
            <div className="lg:col-span-1 p-10 rounded-3xl border border-emerald-500/10 bg-emerald-950/5 relative overflow-hidden group">
              <Zap className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold text-white font-sans mb-3">Lighthouse 95+ Tuning</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                Core Web Vitals diagnostic auditing, static image compression, edge caching configurations, and optimized query layers.
              </p>
            </div>

            {/* Box 4 (Wide): Slack Channel Synced */}
            <div className="lg:col-span-2 p-10 rounded-3xl border border-emerald-500/10 bg-emerald-950/5 relative overflow-hidden group flex flex-col justify-between">
              <div>
                <Bell className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold text-white font-sans mb-3">Slack Dedicated Channel Hotline</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-sans">
                  Forget generic ticket forms. Communicate directly with senior software engineers via private Slack groups, guaranteeing sub-15m dispatcher attention.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-3">
                {["Shopify Plus", "MedusaJS", "Next.js", "Magento", "AWS DevOps"].map((t, idx) => (
                  <span key={idx} className="text-[10px] bg-emerald-500/5 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Incident Command Center Banner (Unique layout) */}
      <section className="py-32 bg-slate-950 relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="border border-emerald-500/20 rounded-[3rem] p-10 md:p-20 bg-black/60 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 blur-3xl rounded-full" />
            
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 font-sans">
                <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-none px-4 py-1 text-xs uppercase font-mono">Disaster Recovery</Badge>
                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Isolated Off-Site Backup Vaults</h3>
                <p className="text-slate-400 text-md leading-relaxed mb-8">
                  Typical hosts back up files on matching server segments. We separate daily, encrypted platform databases into isolated off-site cloud vaults, providing immediate 1-click disaster recovery.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Hourly database replication layers",
                    "Complete assets and media sync",
                    "1-click rolling restoration index",
                    "Multi-region encrypted cloud vault"
                  ].map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 font-mono">
                <div className="rounded-2xl border border-emerald-500/10 p-8 bg-black/40 text-center">
                  <Award className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-bounce" />
                  <div className="text-4xl font-black text-white mb-2">99.99%</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">Guaranteed Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Footer CTA */}
      <section className="py-32 bg-black font-sans">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full">
            SYSTEM_DISPATCH
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            INSULATE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">COMMERCE PIPELINES</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
            Secure dedicated developer hotlines, proactive threat analysis, and guaranteed response times. Talk to our systems squad today.
          </p>
          <Button size="lg" className="h-20 px-12 text-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-black rounded-2xl shadow-2xl transition-all hover:scale-105 font-mono" asChild>
            <Link href="/contact">
              DEPLOY_INCIDENT_SHIELD <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
