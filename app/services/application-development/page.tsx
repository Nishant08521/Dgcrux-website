"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Globe,
  Smartphone,
  Code2,
  Zap,
  ArrowRight,
  CheckCircle2,
  Layers,
  Server,
  Shield,
  Clock,
  TrendingUp,
  Star,
  GitBranch,
  Terminal,
  Database,
  Cloud,
  TestTube,
  Rocket,
  Cpu,
  Users,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Scalable, high-performance web apps built with React, Next.js, and modern frameworks. From SPAs to enterprise portals — we architect for growth.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    highlight: "text-blue-500",
    tag: "React · Next.js · TypeScript",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native iOS & Android plus cross-platform React Native apps. Smooth 60fps experiences that feel at home on every device.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    highlight: "text-violet-500",
    tag: "React Native · Flutter · Swift",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end ownership — from pixel-perfect UIs to rock-solid back-ends. One team, zero handoff friction, faster delivery.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    highlight: "text-emerald-500",
    tag: "Node.js · Python · Go",
  },
  {
    icon: Zap,
    title: "API Development",
    description:
      "RESTful & GraphQL APIs designed for speed, security, and developer experience. Versioned, documented, and ready to scale.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    highlight: "text-amber-500",
    tag: "REST · GraphQL · gRPC",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Strategic database design for relational and NoSQL systems. Optimised queries, smart indexing, and zero-downtime migrations.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    highlight: "text-pink-500",
    tag: "PostgreSQL · MongoDB · Redis",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Apps",
    description:
      "Microservices and serverless architectures on AWS, GCP, or Azure. Auto-scaling, resilient, and cost-optimised from day one.",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    highlight: "text-indigo-500",
    tag: "AWS · GCP · Kubernetes",
  },
]

const process = [
  {
    step: "01",
    icon: Users,
    title: "Discovery & Planning",
    description:
      "Deep-dive workshops to map your goals, users, and technical constraints. We deliver a detailed scope, architecture plan, and sprint roadmap.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Architecture Design",
    description:
      "System design and tech-stack selection aligned to your scale targets. Diagrams, ERDs, and API contracts — everything documented before code.",
  },
  {
    step: "03",
    icon: Terminal,
    title: "Agile Development",
    description:
      "Two-week sprints with continuous demos. You see working software every fortnight — no black-box development, ever.",
  },
  {
    step: "04",
    icon: TestTube,
    title: "QA & Testing",
    description:
      "Automated unit, integration, and E2E testing baked into CI/CD pipelines. We target 90%+ coverage and zero regressions at launch.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Launch & Deploy",
    description:
      "Blue-green deployments with zero downtime. Monitoring, alerting, and on-call support from day one of production.",
  },
  {
    step: "06",
    icon: GitBranch,
    title: "Ongoing Maintenance",
    description:
      "Post-launch SLA-backed support, performance tuning, security patches, and feature iterations. We're your long-term tech partner.",
  },
]

const benefits = [
  { icon: TrendingUp, text: "Scalable architecture built for growth" },
  { icon: Shield, text: "Enterprise-grade security by default" },
  { icon: Clock, text: "On-time delivery with agile sprints" },
  { icon: Cpu, text: "Modern, future-proof tech stack" },
  { icon: Star, text: "24/7 post-launch support & SLA" },
  { icon: CheckCircle2, text: "95%+ automated test coverage" },
]

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Go",
  "React Native", "Flutter", "PostgreSQL", "MongoDB", "Redis",
  "AWS", "GCP", "Docker", "Kubernetes", "GraphQL",
]

const stats = [
  { value: "300+", label: "Apps Delivered" },
  { value: "99.9%", label: "Avg. Uptime" },
  { value: "2-Week", label: "Sprint Cycles" },
  { value: "60+", label: "Engineers" },
]

export default function ApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Dark background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0a0f1e] to-[#060d1f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.18),transparent_55%)]" />
        {/* Dot grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(99,102,241,0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-20 left-16 w-80 h-80 rounded-full bg-blue-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-indigo-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/5 blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 mb-8 backdrop-blur-sm">
              <Code2 className="h-4 w-4" />
              Application Development
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Build Apps That{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Scale & Perform
                </span>
                {/* Underline SVG */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 10" fill="none" aria-hidden>
                  <path d="M2 7C70 2 140 1 200 4C260 7 330 5 398 2" stroke="url(#appUnderline)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="appUnderline" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#60a5fa" />
                      <stop offset="0.5" stopColor="#818cf8" />
                      <stop offset="1" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              From concept to cloud — we design, build, and ship production-grade web, mobile, and cloud applications that grow with your business.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50"
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#f8faff] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-5">
              <Server className="h-4 w-4" />
              What We Build
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Full-Spectrum{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Development Services
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Every layer of the stack, every platform — handled by seasoned engineers who care about craft as much as delivery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className={`group relative rounded-2xl border ${service.border} bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default`}
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  {/* Hover bg glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${service.highlight}`} />
                  </div>

                  {/* Tag pill */}
                  <div className="relative mb-3">
                    <span className={`inline-block rounded-full ${service.bg} ${service.highlight} px-3 py-0.5 text-xs font-semibold tracking-wide`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="relative text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="relative text-gray-500 leading-relaxed text-sm">{service.description}</p>

                  <div className={`relative mt-6 flex items-center gap-1 text-sm font-semibold ${service.highlight} opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                    Explore more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#030712] to-[#0a0f1e] relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(59,130,246,0.08) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-5">
              <GitBranch className="h-4 w-4" />
              How We Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Engineering Process
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              A battle-tested 6-stage process that delivers predictable, high-quality software — on scope and on schedule.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-blue-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Large step number bg */}
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-blue-500/10 transition-colors select-none leading-none">
                    {item.step}
                  </div>

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/20 group-hover:bg-blue-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>

                  <div className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2">Step {item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ──────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Left copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-6">
                <Star className="h-4 w-4" />
                Why DGCrux
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Engineering excellence{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  at every layer
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                We're not just coders — we're architects, problem-solvers, and long-term partners. Our engineers hold themselves to the same standards they'd apply to their own products.
              </p>
              <Button
                size="lg"
                asChild
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-0 px-8 shadow-lg shadow-blue-500/25 hover:scale-105 transition-all"
              >
                <Link href="/contact">
                  Talk to an Engineer <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Right benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.text}
                    className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 leading-snug pt-2">{b.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-[#0a0f2e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.3),transparent_55%)]" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Decorative rings */}
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute top-12 right-48 w-24 h-24 rounded-full bg-cyan-400/20 blur-2xl" />
        <div className="absolute bottom-12 left-48 w-32 h-32 rounded-full bg-indigo-400/20 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Rocket className="h-4 w-4 text-cyan-300" />
            Ready to turn your idea into a product?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              extraordinary
            </span>{" "}
            together
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free technical consultation. We'll review your requirements, recommend the right architecture, and give you a clear timeline and cost estimate.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-white text-blue-700 hover:bg-blue-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all"
            >
              <Link href="/contact">
                Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-base font-semibold backdrop-blur-sm hover:scale-105 transition-all"
            >
              <Link href="/case-studies">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
