"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Palette,
  Users,
  Smartphone,
  Monitor,
  Zap,
  CheckCircle2,
  ArrowRight,
  Layers,
  MousePointer2,
  Eye,
  PenTool,
  Figma,
  Grid,
  Star,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "UI Design",
    description:
      "Pixel-perfect interfaces that captivate users. We craft visually stunning designs that align with your brand identity and guide users effortlessly.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    highlight: "text-violet-500",
  },
  {
    icon: Users,
    title: "UX Research",
    description:
      "Data-driven insights that shape design decisions. We uncover real user needs through interviews, usability tests, and behavioral analytics.",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    highlight: "text-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description:
      "Seamless experiences across every screen. Our mobile-first approach ensures your product feels native and intuitive on iOS and Android.",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    highlight: "text-amber-500",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Responsive, modern web interfaces built for performance. From landing pages to complex dashboards, we design for clarity and conversion.",
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    highlight: "text-cyan-500",
  },
  {
    icon: Zap,
    title: "Prototyping",
    description:
      "Bring ideas to life before a single line of code is written. High-fidelity interactive prototypes that validate concepts and align teams.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    highlight: "text-emerald-500",
  },
  {
    icon: Grid,
    title: "Design Systems",
    description:
      "Scalable design foundations that accelerate development. We build component libraries and style guides for consistent, maintainable products.",
    color: "from-indigo-500 to-violet-600",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    highlight: "text-indigo-500",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Research",
    description:
      "We deep-dive into your business, users, and competitors to uncover strategic opportunities and define clear design goals.",
    icon: Eye,
  },
  {
    step: "02",
    title: "Information Architecture",
    description:
      "Structuring content and navigation flows that make complex products feel simple and intuitive for every user type.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Wireframing & Concepts",
    description:
      "Low-fidelity explorations that validate ideas fast. We sketch multiple concepts and align stakeholders before going high-fidelity.",
    icon: PenTool,
  },
  {
    step: "04",
    title: "High-Fidelity UI Design",
    description:
      "Pixel-perfect Figma designs with detailed component specs, animations, and interaction patterns ready for development handoff.",
    icon: Figma,
  },
  {
    step: "05",
    title: "Prototyping & Testing",
    description:
      "Interactive prototypes tested with real users. Iterative improvements driven by actual feedback and behavioral data.",
    icon: MousePointer2,
  },
  {
    step: "06",
    title: "Handoff & Support",
    description:
      "Developer-ready assets, annotated specs, and ongoing design support to ensure pixel-perfect implementation.",
    icon: CheckCircle2,
  },
]

const benefits = [
  { icon: TrendingUp, text: "Up to 40% higher conversion rates" },
  { icon: Users, text: "Improved user engagement & retention" },
  { icon: Clock, text: "Faster time-to-market" },
  { icon: Shield, text: "Reduced development rework costs" },
  { icon: Star, text: "Brand consistency across all platforms" },
  { icon: Eye, text: "Accessibility & WCAG compliance" },
]

const tools = ["Figma", "Adobe XD", "Framer", "Principle", "Maze", "Hotjar", "Lottie", "Storybook"]

const stats = [
  { value: "200+", label: "Products Designed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40%", label: "Avg. Conversion Lift" },
  { value: "50+", label: "Design Experts" },
]

export default function ProductDesignPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a1e] via-[#1a0a3e] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,191,36,0.15),transparent_60%)]" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating blobs */}
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-violet-600/20 blur-[80px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-400/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 mb-8 backdrop-blur-sm">
              <Palette className="h-4 w-4" />
              Product Design & UI/UX
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Design That{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                  Converts
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 9C50 3 100 1 150 4C200 7 250 5 298 2" stroke="url(#heroUnderline)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="heroUnderline" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8b5cf6" />
                      <stop offset="0.5" stopColor="#ec4899" />
                      <stop offset="1" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              We craft user-centered digital experiences that don't just look beautiful — they drive engagement, build trust, and accelerate your business growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-xl shadow-violet-500/30 transition-all hover:scale-105 hover:shadow-violet-500/50"
              >
                <Link href="/contact">
                  Start Your Design Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105"
              >
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5 text-center hover:bg-white/10 transition-all hover:border-violet-500/40"
              >
                <div className="text-3xl font-extrabold bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#fafafa] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-5">
              <Layers className="h-4 w-4" />
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Full-Spectrum{" "}
              <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                Design Services
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              From research to handoff — every touchpoint crafted to delight users and deliver business outcomes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className={`group relative rounded-2xl border ${service.border} bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden`}
                >
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  {/* Background glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} transition-all group-hover:scale-110`}>
                    <Icon className={`h-7 w-7 ${service.highlight}`} />
                  </div>
                  <h3 className="relative text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="relative text-gray-500 leading-relaxed">{service.description}</p>

                  <div className={`relative mt-6 flex items-center gap-1 text-sm font-semibold ${service.highlight} opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0`}>
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#0f0a1e] to-[#1a0a3e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber-400/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 mb-5">
              <Zap className="h-4 w-4" />
              Our Process
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Design That{" "}
              <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
                Follows a Proven Path
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Six focused stages that take your idea from concept to a launch-ready, user-validated product.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-violet-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Step number */}
                  <div className="absolute top-6 right-6 text-5xl font-black text-white/5 group-hover:text-violet-500/10 transition-colors select-none">
                    {item.step}
                  </div>

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/20 group-hover:from-violet-500/30 group-hover:to-purple-600/30 transition-all">
                    <Icon className="h-6 w-6 text-violet-400" />
                  </div>

                  <div className="text-xs font-bold text-violet-400 tracking-widest uppercase mb-2">Step {item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700 mb-6">
                <Star className="h-4 w-4" />
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Design that works{" "}
                <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  as hard as you do
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                We don't just make things look good. Every design decision is grounded in user research, business strategy, and measurable outcomes. Our team of senior designers brings years of experience shipping products that users love.
              </p>
              <Button
                size="lg"
                asChild
                className="rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 px-8 shadow-lg shadow-violet-500/25 hover:scale-105 transition-all"
              >
                <Link href="/contact">
                  Get a Free Design Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Right – benefit cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.text}
                    className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-violet-200 hover:bg-violet-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 group-hover:bg-violet-200 transition-colors">
                      <Icon className="h-5 w-5 text-violet-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 leading-snug pt-2">{b.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOOLS ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Tools & Platforms We Master
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-violet-300 hover:text-violet-600 hover:shadow-md transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute top-10 right-40 w-20 h-20 rounded-full bg-amber-400/30 blur-xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-amber-300" />
            Ready to ship a world-class product?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
              remarkable
            </span>{" "}
            together
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute design strategy call. We'll assess your product, identify improvement opportunities, and outline a clear design roadmap.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-white text-violet-700 hover:bg-amber-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all"
            >
              <Link href="/contact">
                Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-base font-semibold backdrop-blur-sm hover:scale-105 transition-all"
            >
              <Link href="/case-studies">See Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
