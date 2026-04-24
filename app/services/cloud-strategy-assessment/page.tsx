"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  TrendingUp, Compass, Shield, PieChart, Globe, ArrowRight, CheckCircle2,
  Star, Clock, Cpu, Layers, FileText, Lock, Activity, Server, RefreshCw, BarChart3, Search, Zap, Rocket
} from "lucide-react"

const services = [
  { 
    icon: Search, 
    title: "Cloud Readiness Assessment", 
    description: "Deep-dive analysis of your current infrastructure, applications, and team capabilities to determine the optimal cloud adoption path.", 
    color: "from-blue-500 to-cyan-500", 
    bg: "bg-blue-500/10", 
    border: "border-blue-500/20", 
    highlight: "text-blue-600", 
    tag: "Audit · Analysis" 
  },
  { 
    icon: PieChart, 
    title: "TCO & ROI Analysis", 
    description: "Clear financial modeling of your cloud investment. We detail upfront costs, operational savings, and long-term business value to justify your cloud move.", 
    color: "from-indigo-500 to-blue-600", 
    bg: "bg-indigo-500/10", 
    border: "border-indigo-500/20", 
    highlight: "text-indigo-600", 
    tag: "Finance · Strategy" 
  },
  { 
    icon: Compass, 
    title: "Multi-Cloud Strategy", 
    description: "Designing resilient architectures across AWS, Azure, and GCP. Avoid vendor lock-in and optimize for workload-specific cloud strengths.", 
    color: "from-violet-500 to-purple-600", 
    bg: "bg-violet-500/10", 
    border: "border-violet-500/20", 
    highlight: "text-violet-600", 
    tag: "Architecture · Design" 
  },
  { 
    icon: FileText, 
    title: "Migration Roadmap", 
    description: "A phased, risk-mitigated plan for moving your workloads. We define priorities, timelines, and technical dependencies for a seamless transition.", 
    color: "from-cyan-500 to-teal-500", 
    bg: "bg-cyan-500/10", 
    border: "border-cyan-500/20", 
    highlight: "text-cyan-600", 
    tag: "Planning · Roadmap" 
  },
  { 
    icon: Lock, 
    title: "Governance & Compliance", 
    description: "Security-first strategy ensuring your cloud environment meets industry standards (ISO, SOC2, HIPAA) from day one with automated guardrails.", 
    color: "from-emerald-500 to-green-600", 
    bg: "bg-emerald-500/10", 
    border: "border-emerald-500/20", 
    highlight: "text-emerald-600", 
    tag: "Security · Risk" 
  },
  { 
    icon: Zap, 
    title: "Cloud-Native Strategy", 
    description: "Beyond just 'lift and shift'. We plan your modernization journey towards serverless, microservices, and containerized architectures.", 
    color: "from-rose-500 to-pink-600", 
    bg: "bg-rose-500/10", 
    border: "border-rose-500/20", 
    highlight: "text-rose-600", 
    tag: "Modernization" 
  },
]

const process = [
  { step: "01", icon: Search, title: "Discovery & Audit", description: "Comprehensive inventory of your digital estate, identifying technical debt and migration complexity." },
  { step: "02", icon: Compass, title: "Strategic Vision", description: "Defining business objectives, selecting cloud models (Public/Private/Hybrid), and alignment with stakeholders." },
  { step: "03", icon: Layers, title: "Architecture Design", description: "Blueprint of the target cloud environment, including networking, security, and IAM frameworks." },
  { step: "04", icon: FileText, title: "Roadmap Creation", description: "Prioritizing workloads and defining the '7 Rs' (Retire, Retain, Rehost, Replatform, Refactor, Repurchase, Relocate)." },
  { step: "05", icon: Rocket, title: "Pilot Execution", description: "Migrating a non-critical workload to validate the strategy, tooling, and environment setup." },
  { step: "06", icon: RefreshCw, title: "Full Scale Scale", description: "Executing the migration at scale while continuously optimizing for cost, security, and performance." },
]

const benefits = [
  { icon: TrendingUp, text: "Business Agility & Faster Time-to-Market" },
  { icon: Shield, text: "Enterprise-Grade Security & Compliance" },
  { icon: Clock, text: "Reduced Operational Overhead" },
  { icon: Cpu, text: "Optimized Performance & Scalability" },
  { icon: Star, text: "Clear ROI & Cost Transparency" },
  { icon: CheckCircle2, text: "Zero-Downtime Migration Planning" },
]

const techStack = ["AWS", "Azure", "Google Cloud", "IBM Cloud", "Oracle Cloud", "VMware", "Terraform", "Kubernetes", "Docker", "NetApp", "HashiCorp", "Datadog", "Snowflake", "MongoDB"]

const stats = [
  { value: "50+", label: "Cloud Strategies Defined" },
  { value: "40%", label: "Avg. Infrastructure Savings" },
  { value: "99.9%", label: "Migration Success Rate" },
  { value: "15+", label: "Certified Cloud Architects" },
]

export default function CloudStrategyAssessmentPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.1),transparent_55%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(56,189,248,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-24 left-16 w-80 h-80 rounded-full bg-sky-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-indigo-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 mb-8 backdrop-blur-sm">
              <Compass className="h-4 w-4" /> Cloud Strategy & Assessment
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Navigate Your Cloud{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Journey with Confidence</span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              From initial readiness assessment to complex multi-cloud architecture. We provide the strategic roadmap and technical precision your business needs to scale in the cloud.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-sky-500/30 transition-all hover:scale-105">
                <Link href="/contact">Book a Cloud Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">Transformation Stories</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-sky-500/30 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gradient-to-b from-[#f0f9ff] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700 mb-5">
              <Layers className="h-4 w-4" /> Strategic Offerings
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Comprehensive Cloud{" "}
              <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Assessment Framework</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">We evaluate every facet of your IT ecosystem to build a cloud strategy that aligns with your business goals.</p>
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
                    Explore service <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(56,189,248,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300 mb-5">
              <TrendingUp className="h-4 w-4" /> The Roadmap
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Assessment Methodology</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">A structured path from current-state complexity to future-cloud simplicity.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-sky-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-sky-500/10 transition-colors select-none leading-none">{item.step}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 border border-sky-500/20 group-hover:bg-sky-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-sky-400" />
                  </div>
                  <div className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-2">Phase {item.step}</div>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700 mb-6">
                <Star className="h-4 w-4" /> Business Outcomes
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Strategic Cloud <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">without the guesswork</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                We remove the technical and financial ambiguity from cloud adoption. Our goal is to ensure your cloud investment becomes a core driver of business value, not just a line item.
              </p>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white border-0 px-8 shadow-lg shadow-sky-500/25 hover:scale-105 transition-all">
                <Link href="/contact">Request Your Assessment <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-sky-200 hover:bg-sky-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 group-hover:bg-sky-200 transition-colors">
                      <Icon className="h-5 w-5 text-sky-600" />
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
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Ecosystem Partners</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-sky-300 hover:text-sky-600 hover:shadow-md transition-all duration-200 cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-indigo-900 to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Rocket className="h-4 w-4 text-sky-300" /> Future-proof your infrastructure today
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to Build Your <span className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">Cloud Strategy?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a complimentary cloud readiness workshop. We'll identify your biggest opportunities and outline a path to successful cloud transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-sky-900 hover:bg-sky-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all">
              <Link href="/contact">Schedule Your Workshop <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-base font-semibold backdrop-blur-sm hover:scale-105 transition-all">
              <Link href="/services">Other Cloud Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
