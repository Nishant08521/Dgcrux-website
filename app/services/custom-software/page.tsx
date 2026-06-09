"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
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
    description: "Software built from scratch around your exact workflows. No bloated off-the-shelf compromises — just clean, purposeful code that does precisely what your business needs.",
    accent: "#10b981",
    tag: "Bespoke · Purpose-built",
  },
  {
    icon: Puzzle,
    title: "System Integration",
    description: "Seamless connections between your CRM, ERP, third-party SaaS, and internal tools. One unified ecosystem — no more data silos.",
    accent: "#3b82f6",
    tag: "APIs · Webhooks · ETL",
  },
  {
    icon: Database,
    title: "Enterprise Platforms",
    description: "Mission-critical platforms for large organisations. Multi-tenant architecture, role-based access, and high-availability infrastructure.",
    accent: "#8b5cf6",
    tag: "Enterprise · Multi-tenant",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "GDPR, SOC 2, HIPAA — we embed compliance from day one. Penetration testing, data encryption, and audit trails.",
    accent: "#f43f5e",
    tag: "SOC 2 · GDPR · HIPAA",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Custom dashboards and real-time reporting engines. Turn raw operational data into actionable insights that drive smarter decisions.",
    accent: "#f59e0b",
    tag: "Dashboards · BI · Reports",
  },
  {
    icon: Settings,
    title: "Legacy Modernisation",
    description: "Migrate from outdated monoliths to modern microservices without stopping the business. Strangler-fig migrations that keep the lights on.",
    accent: "#06b6d4",
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

const metrics = [
  { value: "150+", label: "Custom Products Shipped", icon: Rocket },
  { value: "99%", label: "Client Retention Rate", icon: Star },
  { value: "12+", label: "Years of Experience", icon: Clock },
  { value: "70+", label: "Senior Engineers", icon: Users },
]

const techStack = ["Python", "Node.js", "Go", "Java", "React", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "Kubernetes", "Terraform", "AWS", "GCP", "Azure"]

export default function CustomSoftwarePage() {
  return (
    <main className="min-h-screen bg-[#fafafa] overflow-x-hidden font-sans antialiased">
      <Navbar />

      {/* ─── HERO: BOLD EDITORIAL SPLIT ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Left Panel — Deep charcoal */}
        <div className="relative w-full lg:w-1/2 bg-[#0f0f0f] flex flex-col justify-center px-10 sm:px-16 lg:px-20 pt-40 pb-20 lg:pt-0 lg:pb-0">
          {/* Subtle texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative z-10 max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-emerald-400" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-[0.25em]">Custom Software</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter mb-8">
                Built<br />
                <span className="text-emerald-400">exactly</span><br />
                for you.
              </h1>

              <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-md font-light">
                Off-the-shelf software forces your business to adapt. We flip that — building bespoke solutions that fit your workflows like a glove and scale with your ambitions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="rounded-none bg-emerald-500 hover:bg-emerald-400 text-black border-0 px-10 py-7 text-base font-bold transition-all">
                  <Link href="/contact">Start a Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-none border-white/20 bg-transparent text-white hover:bg-white/5 px-10 py-7 text-base font-semibold transition-all">
                  <Link href="/case-studies">See Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Panel — Metric cards grid */}
        <div className="relative w-full lg:w-1/2 bg-white flex items-center justify-center px-10 sm:px-16 lg:px-20 py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-sm lg:max-w-md"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              {metrics.map((m, i) => {
                const Icon = m.icon
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    key={m.label}
                    className="group border border-zinc-100 bg-[#fafafa] p-8 hover:bg-[#f0fdf4] hover:border-emerald-200 transition-all duration-300 cursor-default"
                  >
                    <Icon className="h-6 w-6 text-zinc-300 group-hover:text-emerald-500 transition-colors mb-4" />
                    <div className="text-4xl font-black text-[#0f0f0f] mb-1 tracking-tighter">{m.value}</div>
                    <div className="text-xs text-zinc-400 font-medium leading-tight">{m.label}</div>
                  </motion.div>
                )
              })}
            </div>
            <div className="border border-zinc-100 bg-[#0f0f0f] p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">You retain full IP ownership</div>
                <div className="text-white/50 text-xs mt-0.5">Source code, documentation & all rights delivered to you.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES: NUMBERED LIST ─────────────────────────────────────────── */}
      <section className="py-32 bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sticky left label */}
            <div className="lg:col-span-3 lg:sticky lg:top-32 h-fit">
              <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 mb-4">What We Build</h2>
              <h3 className="text-4xl font-black text-[#0f0f0f] leading-tight tracking-tighter">
                Full-Spectrum<br />Solutions
              </h3>
            </div>

            {/* Service list */}
            <div className="lg:col-span-9">
              <div className="divide-y divide-zinc-100">
                {services.map((service, i) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      key={service.title}
                      className="group flex flex-col sm:flex-row sm:items-start gap-6 py-10 hover:bg-zinc-50 -mx-6 px-6 transition-colors rounded-xl cursor-default"
                    >
                      <div className="flex-shrink-0 flex items-center gap-4">
                        <span className="text-3xl font-black text-zinc-100 group-hover:text-zinc-200 transition-colors w-10 text-right tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: `${service.accent}15` }}>
                          <Icon className="h-6 w-6" style={{ color: service.accent }} />
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                          <h4 className="text-xl font-bold text-[#0f0f0f]">{service.title}</h4>
                          <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold text-zinc-500 bg-zinc-100">{service.tag}</span>
                        </div>
                        <p className="text-zinc-500 leading-relaxed">{service.description}</p>
                      </div>
                      <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-all translate-x-[-8px] group-hover:translate-x-0">
                        <ArrowRight className="h-5 w-5 text-zinc-400" />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS: ALTERNATING DARK/LIGHT ROWS ─────────────────────────────── */}
      <section className="bg-[#0f0f0f] py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-400 mb-4">How We Work</h2>
            <h3 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tighter max-w-2xl">
              Six stages. <br />
              <span className="text-zinc-500">Zero surprises.</span>
            </h3>
          </div>

          <div className="space-y-0">
            {process.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  key={item.step}
                  className="group grid grid-cols-12 gap-6 border-t border-white/5 py-10 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-5xl font-black text-white/10 group-hover:text-emerald-500/20 transition-colors tracking-tighter leading-none">{item.step}</span>
                  </div>
                  <div className="col-span-10 sm:col-span-3 flex items-start pt-1">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                        <Icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <h4 className="text-white font-bold text-base">{item.title}</h4>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-8 pl-[calc(1rem+24px)] sm:pl-0 pt-0 sm:pt-1">
                    <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK: INLINE PILLS ON DARK ────────────────────────────────── */}
      <section className="py-16 bg-[#0f0f0f] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 md:w-48 flex-shrink-0">Our Stack</span>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-zinc-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CUSTOM: BOLD CONTRAST SECTION ───────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 mb-6">Why Go Custom?</h2>
              <h3 className="text-5xl sm:text-6xl font-black text-[#0f0f0f] leading-[0.95] tracking-tighter mb-8">
                Software that fits<br />
                <em className="not-italic text-emerald-500">perfectly.</em>
              </h3>
              <p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-lg">
                Generic tools come with generic limitations. Custom software gives you full control — over features, integrations, scalability, and the competitive advantages that off-the-shelf products can never deliver.
              </p>
              <Button size="lg" asChild className="rounded-none bg-[#0f0f0f] hover:bg-zinc-800 text-white border-0 px-10 py-7 text-base font-bold transition-all">
                <Link href="/contact">Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>

            {/* Right: benefit checklist */}
            <div className="space-y-0">
              {[
                { icon: TrendingUp, label: "100% tailored to your workflows", detail: "Every feature is designed around how your team actually works." },
                { icon: Shield, label: "Security & compliance from day one", detail: "GDPR, SOC 2, HIPAA baked in — not bolted on." },
                { icon: Clock, label: "On-time delivery with agile sprints", detail: "Bi-weekly demos so you always know exactly where you stand." },
                { icon: Cpu, label: "Modern, future-proof architecture", detail: "Microservices, cloud-native, designed to last the next decade." },
                { icon: Star, label: "SLA-backed post-launch support", detail: "We stay with you long after launch day." },
                { icon: CheckCircle2, label: "Full IP ownership & source code", detail: "Everything belongs to you — no strings attached." },
              ].map((b, i) => {
                const Icon = b.icon
                return (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    key={i}
                    className="group border-t border-zinc-100 py-6 flex items-start gap-5 hover:bg-zinc-50 -mx-6 px-6 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors flex-shrink-0 mt-0.5">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0f0f0f] mb-1">{b.label}</div>
                      <div className="text-sm text-zinc-400">{b.detail}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA: FULL-BLEED DARK CLOSER ─────────────────────────────────────── */}
      <section className="relative bg-[#0f0f0f] py-40 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-400">Ready to build?</span>
            </div>
            <h2 className="text-6xl sm:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-12">
              Your idea<br />
              deserves<br />
              <span className="text-emerald-400">better software.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="rounded-none bg-emerald-500 hover:bg-emerald-400 text-black border-0 px-12 py-8 text-lg font-bold transition-all">
                <Link href="/contact">Get a Free Estimate <ArrowRight className="ml-3 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-none border-white/20 bg-transparent text-white hover:bg-white/5 px-12 py-8 text-lg font-semibold transition-all">
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
