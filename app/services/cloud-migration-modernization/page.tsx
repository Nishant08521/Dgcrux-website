"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  TrendingUp, Rocket, Shield, Database, Layout, ArrowRight, CheckCircle2,
  Star, Clock, Cpu, Layers, RefreshCw, BarChart3, Cloud, Zap, Server, Settings
} from "lucide-react"

const services = [
  { 
    icon: Rocket, 
    title: "Lift & Shift (Rehosting)", 
    description: "Move your existing applications to the cloud with minimal changes, achieving immediate cost savings and performance boosts.", 
    color: "from-blue-500 to-cyan-500", 
    bg: "bg-blue-500/10", 
    border: "border-blue-500/20", 
    highlight: "text-blue-600", 
    tag: "Rapid Migration" 
  },
  { 
    icon: Layout, 
    title: "Application Refactoring", 
    description: "Optimize your applications for the cloud by modifying their architecture to leverage cloud-native features and services.", 
    color: "from-indigo-500 to-blue-600", 
    bg: "bg-indigo-500/10", 
    border: "border-indigo-500/20", 
    highlight: "text-indigo-600", 
    tag: "Cloud Native" 
  },
  { 
    icon: Database, 
    title: "Data & Database Migration", 
    description: "Securely move your databases and data warehouses to cloud-based solutions with zero downtime and data integrity guarantees.", 
    color: "from-violet-500 to-purple-600", 
    bg: "bg-violet-500/10", 
    border: "border-violet-500/20", 
    highlight: "text-violet-600", 
    tag: "Data Solutions" 
  },
  { 
    icon: Cpu, 
    title: "Legacy App Modernization", 
    description: "Transform your legacy monoliths into modern, containerized microservices for greater flexibility and scalability.", 
    color: "from-cyan-500 to-teal-500", 
    bg: "bg-cyan-500/10", 
    border: "border-cyan-500/20", 
    highlight: "text-cyan-600", 
    tag: "Modernization" 
  },
  { 
    icon: Shield, 
    title: "Migration Security", 
    description: "Ensure your data remains protected throughout the migration process with end-to-end encryption and compliance monitoring.", 
    color: "from-emerald-500 to-green-600", 
    bg: "bg-emerald-500/10", 
    border: "border-emerald-500/20", 
    highlight: "text-emerald-600", 
    tag: "Zero Risk" 
  },
  { 
    icon: Settings, 
    title: "Post-Migration Support", 
    description: "24/7 monitoring and optimization to ensure your new cloud environment is performing at its absolute best.", 
    color: "from-rose-500 to-pink-600", 
    bg: "bg-rose-500/10", 
    border: "border-rose-500/20", 
    highlight: "text-rose-600", 
    tag: "Ongoing Care" 
  },
]

const process = [
  { step: "01", icon: BarChart3, title: "Migration Assessment", description: "Evaluating your current workloads and determining the best migration strategy for each." },
  { step: "02", icon: Cloud, title: "Architecture Design", description: "Designing a high-performance, resilient cloud environment tailored to your applications." },
  { step: "03", icon: Database, title: "Data Migration", description: "Securely transferring your data and validating its integrity in the new environment." },
  { step: "04", icon: Rocket, title: "App Migration", description: "Executing the migration of your applications with minimal downtime and disruption." },
  { step: "05", icon: Zap, title: "Testing & Validation", description: "Rigorous performance and security testing to ensure everything works perfectly." },
  { step: "06", icon: RefreshCw, title: "Cloud Optimization", description: "Fine-tuning your environment for maximum efficiency and cost savings." },
]

const benefits = [
  { icon: TrendingUp, text: "Drastic Performance Improvements" },
  { icon: Shield, text: "Enhanced Security & Compliance" },
  { icon: Clock, text: "Reduced Deployment Times" },
  { icon: Server, text: "99.99% Reliability & Scalability" },
  { icon: Star, text: "Modern, Cloud-Native Architecture" },
  { icon: CheckCircle2, text: "Significant Infrastructure Cost Savings" },
]

const techStack = ["AWS Migration Hub", "Azure Migrate", "GCP Transfer Service", "Docker", "Kubernetes", "Snowflake", "MongoDB Atlas", "Datadog", "Terraform", "New Relic"]

const stats = [
  { value: "100+", label: "Workloads Migrated" },
  { value: "50%", label: "Avg. Performance Boost" },
  { value: "Zero", label: "Data Loss Incidents" },
  { value: "40%", label: "Cost Savings Achieved" },
]

export default function CloudMigrationModernizationPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#1e1b4b] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_55%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(168,85,247,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-24 left-16 w-80 h-80 rounded-full bg-indigo-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 mb-8 backdrop-blur-sm">
              <Cloud className="h-4 w-4" /> Cloud Migration & Modernization
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Modernize Your Path{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">To The Cloud</span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              Stop maintaining legacy systems and start scaling. We provide end-to-end migration expertise and app modernization to ensure your cloud transition is seamless, secure, and future-proof.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-indigo-500/30 transition-all hover:scale-105">
                <Link href="/contact">Start Migration Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">Modernization Stories</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gradient-to-b from-[#f5f3ff] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-5">
              <Rocket className="h-4 w-4" /> Migration Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Seamless Transition to{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Next-Gen Architecture</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">From legacy monoliths to elastic, cloud-native services — we handle every phase of your journey.</p>
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
                    View details <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-gradient-to-b from-[#020617] to-[#1e1b4b] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(139,92,246,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 mb-5">
              <Layers className="h-4 w-4" /> Our Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              A Bulletproof <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Migration Strategy</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">We follow a proven, risk-mitigated process to ensure your migration is a success on the first attempt.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-indigo-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-indigo-500/10 transition-colors select-none leading-none">{item.step}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/20 group-hover:bg-indigo-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-2">Step {item.step}</div>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-6">
                <Star className="h-4 w-4" /> Why Modernize?
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Future-proof your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">digital ecosystem</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Legacy systems slow you down. Modernizing with DGCrux means gaining the agility to respond to market changes, the scalability to handle any load, and the security to protect your assets.
              </p>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 px-8 shadow-lg shadow-indigo-500/25 hover:scale-105 transition-all">
                <Link href="/contact">Book a Modernization Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                      <Icon className="h-5 w-5 text-indigo-600" />
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
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Modernization Toolchain</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md transition-all duration-200 cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-purple-300" /> Unlock the power of the cloud
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Stop Managing Servers, <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Start Scaling.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Ready to leave legacy constraints behind? Let's discuss your migration roadmap and how we can modernize your infrastructure for the next decade.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-indigo-900 hover:bg-indigo-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all">
              <Link href="/contact">Schedule Your Migration Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
