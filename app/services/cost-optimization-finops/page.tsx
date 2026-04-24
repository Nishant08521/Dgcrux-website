"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  DollarSign, TrendingDown, PieChart, Activity, Eye, RefreshCcw, ArrowRight, CheckCircle2,
  Star, Clock, Cpu, Layers, BarChart3, Cloud, Zap, Server, Settings, FileText, Target
} from "lucide-react"

const services = [
  { 
    icon: Eye, 
    title: "Cloud Cost Auditing", 
    description: "Deep-dive analysis into your current cloud billing. We identify orphaned resources, over-provisioned instances, and hidden fees.", 
    color: "from-blue-500 to-cyan-500", 
    bg: "bg-blue-500/10", 
    border: "border-blue-500/20", 
    highlight: "text-blue-600", 
    tag: "Visibility" 
  },
  { 
    icon: TrendingDown, 
    title: "Rate Optimization", 
    description: "Strategic purchasing of Reserved Instances (RIs) and Savings Plans. We optimize your discount structures for immediate savings.", 
    color: "from-indigo-500 to-blue-600", 
    bg: "bg-indigo-500/10", 
    border: "border-indigo-500/20", 
    highlight: "text-indigo-600", 
    tag: "Purchasing Strategy" 
  },
  { 
    icon: Zap, 
    title: "Architecture Optimization", 
    description: "Modifying your cloud infrastructure to run more efficiently. Moving to serverless, right-sizing databases, and configuring auto-scaling.", 
    color: "from-violet-500 to-purple-600", 
    bg: "bg-violet-500/10", 
    border: "border-violet-500/20", 
    highlight: "text-violet-600", 
    tag: "Engineering" 
  },
  { 
    icon: BarChart3, 
    title: "FinOps Dashboards", 
    description: "Custom dashboards and unit economics tracking. Understand your cloud spend per customer, per feature, or per environment.", 
    color: "from-cyan-500 to-teal-500", 
    bg: "bg-cyan-500/10", 
    border: "border-cyan-500/20", 
    highlight: "text-cyan-600", 
    tag: "Analytics" 
  },
  { 
    icon: Target, 
    title: "Budget & Anomaly Alerting", 
    description: "Real-time automated alerts for billing anomalies to prevent bill shock. Never wake up to unexpected cloud charges again.", 
    color: "from-emerald-500 to-green-600", 
    bg: "bg-emerald-500/10", 
    border: "border-emerald-500/20", 
    highlight: "text-emerald-600", 
    tag: "Control" 
  },
  { 
    icon: RefreshCcw, 
    title: "Continuous FinOps Lifecycle", 
    description: "Ongoing cost management as a service. We act as your dedicated FinOps team, continuously optimizing as you scale.", 
    color: "from-rose-500 to-pink-600", 
    bg: "bg-rose-500/10", 
    border: "border-rose-500/20", 
    highlight: "text-rose-600", 
    tag: "Managed Service" 
  },
]

const process = [
  { step: "01", icon: Eye, title: "Inform & Visualize", description: "Gaining 100% visibility into your cloud spend by tagging resources and mapping costs to business units." },
  { step: "02", icon: FileText, title: "Audit & Identify", description: "Our FinOps experts analyze your usage patterns to find immediate waste and optimization opportunities." },
  { step: "03", icon: Zap, title: "Quick Wins Execution", description: "Terminating idle resources, upgrading instance generations, and scheduling shutdown of dev environments." },
  { step: "04", icon: TrendingDown, title: "Rate Optimization", description: "Applying long-term financial commitments (Savings Plans, RIs) perfectly balanced against your growth forecast." },
  { step: "05", icon: Layers, title: "Architectural Refactoring", description: "Engineering deeper changes like adopting spot instances, managed services, or serverless models." },
  { step: "06", icon: RefreshCcw, title: "Govern & Automate", description: "Implementing guardrails, anomaly detection, and automated policies to keep costs optimized forever." },
]

const benefits = [
  { icon: TrendingDown, text: "30-50% Reduction in Cloud Bill" },
  { icon: Eye, text: "100% Cost Transparency & Allocation" },
  { icon: Target, text: "Elimination of Billing Surprises" },
  { icon: BarChart3, text: "Data-Driven Engineering Decisions" },
  { icon: Cpu, text: "Better Performance per Dollar" },
  { icon: CheckCircle2, text: "Improved Financial Forecasting" },
]

const techStack = ["AWS Cost Explorer", "CloudHealth", "Spot by NetApp", "Datadog", "Kubecost", "Azure Cost Management", "GCP Billing", "Vantage", "Cloudability", "Terraform"]

const stats = [
  { value: "$10M+", label: "Managed Cloud Spend" },
  { value: "35%", label: "Average Cost Reduction" },
  { value: "48h", label: "To First Measurable Savings" },
  { value: "100%", label: "Visibility Achieved" },
]

export default function CostOptimizationFinOpsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_55%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(6,182,212,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-24 left-16 w-80 h-80 rounded-full bg-cyan-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-blue-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-sm">
              <DollarSign className="h-4 w-4" /> Cloud Cost Optimization & FinOps
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Maximize Value.{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Minimize Cloud Waste.</span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              Take back control of your cloud billing. We implement structured FinOps practices to eliminate waste, optimize infrastructure, and ensure every dollar spent drives business value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-cyan-500/30 transition-all hover:scale-105">
                <Link href="/contact">Get a Free Cost Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">See ROI Stories</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gradient-to-b from-[#e0f2fe] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700 mb-5">
              <PieChart className="h-4 w-4" /> FinOps Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              A Complete Approach to{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Financial Governance</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">From immediate architecture tweaks to long-term purchasing strategies, we cover every angle of cloud economics.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className={`group relative rounded-2xl border ${service.border} bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default`}>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />
                  <div className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${service.highlight}`} />
                  </div>
                  <span className={`inline-block rounded-full ${service.bg} ${service.highlight} px-3 py-0.5 text-xs font-semibold tracking-wide mb-3`}>{service.tag}</span>
                  <h3 className="relative text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="relative text-gray-500 leading-relaxed text-sm">{service.description}</p>
                  <div className={`relative mt-6 flex items-center gap-1 text-sm font-semibold ${service.highlight} opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(6,182,212,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300 mb-5">
              <Layers className="h-4 w-4" /> Optimization Roadmap
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our FinOps <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Execution Plan</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">A proven phased approach to identifying waste, locking in savings, and maintaining efficient infrastructure.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-cyan-500/10 transition-colors select-none leading-none">{item.step}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-500/20 group-hover:bg-cyan-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2">Phase {item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-700 mb-6">
                <Target className="h-4 w-4" /> Bottom-line Impact
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Turn your cloud into a <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">competitive advantage</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Uncontrolled cloud spending damages your margins and restricts growth. We bridge the gap between engineering and finance, empowering developers to build fast while ensuring financial accountability.
              </p>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 px-8 shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all">
                <Link href="/contact">Book a Cloud Review <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-cyan-200 hover:bg-cyan-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 group-hover:bg-cyan-200 transition-colors">
                      <Icon className="h-5 w-5 text-cyan-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 leading-snug pt-2">{b.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">FinOps & Analytics Tooling</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-cyan-300 hover:text-cyan-600 hover:shadow-md transition-all duration-200 cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <DollarSign className="h-4 w-4 text-cyan-300" /> Stop overpaying for cloud
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to Cut Your <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Cloud Bill?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Our cloud cost audits routinely find 30% or more in immediate savings perfectly aligned with your architectural needs. Reach out today to see your potential savings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-cyan-900 hover:bg-cyan-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all">
              <Link href="/contact">Request Cost Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-base font-semibold backdrop-blur-sm hover:scale-105 transition-all">
              <Link href="/services/cloud-solutions">Explore Cloud Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
