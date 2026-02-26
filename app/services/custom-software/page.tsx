"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Code2,
  Settings,
  Database,
  Shield,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  TrendingUp,
  Users,
  Cpu,
  Layers,
  GitBranch,
  Terminal,
  Rocket,
  Lock,
  Puzzle,
  BarChart3,
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Software built from scratch around your exact workflows. No bloated off-the-shelf compromises — just clean, purposeful code that does precisely what your business needs.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    highlight: "text-emerald-600",
    tag: "Bespoke · Purpose-built",
  },
  {
    icon: Puzzle,
    title: "System Integration",
    description:
      "Seamless connections between your CRM, ERP, third-party SaaS, and internal tools. One unified ecosystem — no more data silos or manual export-import nightmares.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    highlight: "text-blue-600",
    tag: "APIs · Webhooks · ETL",
  },
  {
    icon: Database,
    title: "Enterprise Solutions",
    description:
      "Mission-critical platforms for large organisations. Multi-tenant architecture, role-based access, compliance frameworks, and high-availability infrastructure included.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    highlight: "text-violet-600",
    tag: "Enterprise · Multi-tenant",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "GDPR, SOC 2, HIPAA — we embed compliance from day one. Penetration testing, data encryption, and audit trails give stakeholders full confidence.",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    highlight: "text-rose-600",
    tag: "SOC 2 · GDPR · HIPAA",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Custom dashboards and real-time reporting engines. Turn raw operational data into actionable insights that drive smarter business decisions.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    highlight: "text-amber-600",
    tag: "Dashboards · BI · Reports",
  },
  {
    icon: Settings,
    title: "Legacy Modernisation",
    description:
      "Migrate from outdated monoliths to modern microservices without stopping the business. Strangler-fig migrations that keep the lights on throughout.",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    highlight: "text-indigo-600",
    tag: "Migration · Re-architecture",
  },
]

const process = [
  { step: "01", icon: Users, title: "Requirements Discovery", description: "In-depth stakeholder workshops to map processes, pain points, and success criteria. Outputs: detailed requirements doc and project charter." },
  { step: "02", icon: Layers, title: "Architecture Blueprint", description: "System design, database schema, API contracts and tech-stack selection — all reviewed and approved before a single line of code is written." },
  { step: "03", icon: Terminal, title: "Iterative Development", description: "Agile sprints with bi-weekly demos. You get working software every two weeks and full visibility into progress via a shared project board." },
  { step: "04", icon: Lock, title: "Security Hardening", description: "OWASP top-10 audits, penetration testing, and automated SAST/DAST scanning at every release gate." },
  { step: "05", icon: Rocket, title: "Deployment & Handover", description: "Zero-downtime production deployment with runbooks, CI/CD pipelines, monitoring dashboards, and a full knowledge-transfer session." },
  { step: "06", icon: GitBranch, title: "Long-term Support", description: "SLA-backed maintenance, security patches, performance tuning, and feature evolution. We're your dedicated engineering team." },
]

const benefits = [
  { icon: TrendingUp, text: "100% tailored to your workflows" },
  { icon: Shield, text: "Security & compliance from day one" },
  { icon: Clock, text: "On-time delivery with agile sprints" },
  { icon: Cpu, text: "Modern, future-proof architecture" },
  { icon: Star, text: "SLA-backed post-launch support" },
  { icon: CheckCircle2, text: "Full IP ownership & source code" },
]

const techStack = ["Python", "Node.js", "Go", "Java", "React", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "Kubernetes", "Terraform", "AWS", "GCP", "Azure"]

const stats = [
  { value: "150+", label: "Custom Products Shipped" },
  { value: "12+", label: "Years of Experience" },
  { value: "99%", label: "Client Retention" },
  { value: "70+", label: "Senior Engineers" },
]

export default function CustomSoftwarePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071008] via-[#0b1a10] to-[#050d0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(5,150,105,0.15),transparent_55%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(16,185,129,0.18) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-24 left-16 w-80 h-80 rounded-full bg-emerald-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-teal-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 mb-8 backdrop-blur-sm">
              <Code2 className="h-4 w-4" />
              Custom Software Development
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Software Built{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Exactly for You
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 10" fill="none" aria-hidden>
                  <path d="M2 7C70 2 140 1 200 4C260 7 330 5 398 2" stroke="url(#csUnderline)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="csUnderline" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#34d399" /><stop offset="1" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              Off-the-shelf software forces your business to adapt. We flip that — building bespoke solutions that fit your workflows like a glove and scale with your ambitions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105">
                <Link href="/contact">Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gradient-to-b from-[#f0fdf9] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-5">
              <Layers className="h-4 w-4" /> What We Build
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Full-Spectrum{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Custom Solutions</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">From standalone automation tools to enterprise-grade platforms — we cover every custom software need.</p>
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
      <section className="py-28 bg-gradient-to-b from-[#071008] to-[#0b1a10] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(16,185,129,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300 mb-5">
              <GitBranch className="h-4 w-4" /> How We Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Delivery Process</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Six stages engineered for transparency, speed, and zero surprises at launch.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-emerald-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-emerald-500/10 transition-colors select-none leading-none">{item.step}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/20 group-hover:bg-emerald-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-2">Step {item.step}</div>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-6">
                <Star className="h-4 w-4" /> Why Go Custom?
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Software that fits{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">your business perfectly</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Generic tools come with generic limitations. Custom software gives you full control over features, integrations, scalability, and the competitive advantages that off-the-shelf products can never deliver.
              </p>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-0 px-8 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all">
                <Link href="/contact">Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                      <Icon className="h-5 w-5 text-emerald-600" />
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
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Technologies We Use</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-emerald-300 hover:text-emerald-600 hover:shadow-md transition-all duration-200 cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-teal-700 to-[#071008]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Rocket className="h-4 w-4 text-emerald-300" /> Ready to build something great?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Your idea deserves{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">purpose-built software</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Let's discuss your vision. We'll review your requirements, recommend the right approach, and deliver a clear timeline and fixed-price estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-emerald-700 hover:bg-emerald-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all">
              <Link href="/contact">Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-base font-semibold backdrop-blur-sm hover:scale-105 transition-all">
              <Link href="/case-studies">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
