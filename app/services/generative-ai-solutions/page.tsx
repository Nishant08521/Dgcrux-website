"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Sparkles,
  MessageSquare,
  Image,
  Code2,
  FileText,
  Mic,
  Video,
  Bot,
  ArrowRight,
  ArrowUpRight,
  Wand2,
  Zap,
  Shield,
  Lock,
  Globe,
  TrendingUp,
  RefreshCw,
  ChevronRight,
  Star,
  Layers,
} from "lucide-react"

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const solutions = [
  {
    icon: Bot,
    tag: "Conversational AI",
    title: "Intelligent Chatbots & Copilots",
    description: "Context-aware AI assistants that handle support, sales, and internal queries with human-level understanding. RAG-backed for accuracy on your private knowledge base.",
    color: "violet",
    grad: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/30",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    models: ["GPT-4o", "Claude 3.5", "Llama 3.1"],
    stat: "80% fewer support tickets",
  },
  {
    icon: FileText,
    tag: "Content Generation",
    title: "AI Content & Copywriting Engines",
    description: "Brand-voice-aware content pipelines that generate marketing copy, product descriptions, reports, and technical documentation at scale — reviewed and approved in your workflow.",
    color: "emerald",
    grad: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/30",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    models: ["GPT-4o", "Gemini 1.5 Pro", "Mistral"],
    stat: "10× content output",
  },
  {
    icon: Code2,
    tag: "Developer Tools",
    title: "AI Code Generation & Review",
    description: "Autocomplete, test generation, code explanation, and PR review agents tightly integrated into your existing IDE and CI/CD pipeline. Built on your own codebase context.",
    color: "cyan",
    grad: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    models: ["Codestral", "DeepSeek Coder", "Claude 3.5"],
    stat: "40% faster dev cycles",
  },
  {
    icon: Image,
    tag: "Visual AI",
    title: "Image & Video Generation",
    description: "Brand-consistent image generation, product visualisation, video synthesis, and creative asset pipelines. Fine-tuned on your visual identity for on-brand output every time.",
    color: "pink",
    grad: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/30",
    border: "border-pink-500/30",
    bg: "bg-pink-500/10",
    text: "text-pink-400",
    models: ["DALL-E 3", "Stable Diffusion XL", "Runway"],
    stat: "90% creative cost reduction",
  },
  {
    icon: Mic,
    tag: "Voice AI",
    title: "Speech & Voice Intelligence",
    description: "Real-time transcription, voice agents, call analytics, and text-to-speech systems with emotional nuance. Deployed for contact centres, accessibility, and voice-first products.",
    color: "amber",
    grad: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/30",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    models: ["Whisper v3", "ElevenLabs", "Deepgram"],
    stat: "95% transcription accuracy",
  },
  {
    icon: Layers,
    tag: "Workflow Automation",
    title: "Agentic AI Workflows",
    description: "Multi-step AI agents that plan, decide, and execute complex business workflows autonomously — from invoice processing to research synthesis and multi-system orchestration.",
    color: "indigo",
    grad: "from-indigo-500 to-violet-600",
    glow: "shadow-indigo-500/30",
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    models: ["LangGraph", "CrewAI", "AutoGen"],
    stat: "70% manual effort eliminated",
  },
]

const modelTiers = [
  {
    name: "Frontier Models",
    desc: "Maximum capability for complex reasoning, nuanced content, and mission-critical use cases.",
    models: ["GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Llama 3.1 405B"],
    badge: "Highest Quality",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    icon: Star,
  },
  {
    name: "Balanced Models",
    desc: "Optimal quality-to-cost ratio for production workloads requiring scale and reliability.",
    models: ["GPT-4o mini", "Claude 3 Haiku", "Gemini Flash", "Mistral Large"],
    badge: "Best Value",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    icon: TrendingUp,
  },
  {
    name: "Speed-Optimised",
    desc: "Sub-100ms inference for real-time applications, chatbots, and user-facing interactions.",
    models: ["Groq/Llama 3.1", "Fireworks AI", "Together AI", "Open-source fine-tunes"],
    badge: "Fastest",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    icon: Zap,
  },
  {
    name: "Private / On-Prem",
    desc: "Self-hosted models for regulated industries. No data leaves your infrastructure.",
    models: ["Llama 3.1 70B", "Mistral 7B", "Phi-3", "Custom fine-tunes"],
    badge: "Fully Private",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    icon: Lock,
  },
]

const trustPoints = [
  { icon: Lock, title: "Data Never Leaves You", body: "All GenAI deployments are architected so your data stays within your cloud boundary. No training on your content by default." },
  { icon: Shield, title: "Guardrails & Safety Layers", body: "Every LLM deployment includes content filtering, hallucination detection, and output validation layers tailored to your risk tolerance." },
  { icon: RefreshCw, title: "Model-Agnostic Architecture", body: "We abstract the model layer so you can swap providers — GPT to Claude to open-source — without rebuilding your application." },
  { icon: Globe, title: "Compliance & Governance", body: "GDPR, SOC 2, HIPAA-aligned implementations. Audit trails, prompt logging, and model version control built in from day one." },
]

const stats = [
  { value: "200+", label: "GenAI apps shipped" },
  { value: "15ms", label: "Avg. streaming latency" },
  { value: "99.8%", label: "Uptime across deployments" },
  { value: "50+", label: "LLM engineers" },
]

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

export default function GenerativeAISolutionsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#050508" }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          HERO — Cinematic fullscreen with animated colour orbs
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Layered orb system */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Primary orb — violet */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
            style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, transparent 70%)" }} />
          {/* Secondary orb — emerald bottom-left */}
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px]"
            style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)" }} />
          {/* Tertiary orb — pink top-right */}
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px]"
            style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.1) 0%, transparent 70%)" }} />
          {/* Subtle cyan accent */}
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px]"
            style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }} />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">

          {/* Eyebrow pill — glowing */}
          <div className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 mb-10 border"
            style={{ background: "rgba(139,92,246,0.12)", borderColor: "rgba(139,92,246,0.3)", boxShadow: "0 0 30px rgba(139,92,246,0.15)" }}>
            <div className="relative">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <div className="absolute inset-0 animate-ping opacity-40">
                <Sparkles className="h-4 w-4 text-violet-400" />
              </div>
            </div>
            <span className="text-sm font-semibold text-violet-300">Generative AI Solutions</span>
          </div>

          {/* Main headline — large, multi-colour gradient */}
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[1.0] tracking-tight mb-8">
            <span className="text-white">Create.</span>{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">Automate.</span>
            <br />
            <span className="text-white">Transform.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            We build production-grade Generative AI products — from LLM-powered copilots to autonomous agent workflows — that integrate with your systems and deliver measurable ROI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild className="rounded-full px-10 py-7 text-base font-bold border-0 hover:scale-105 transition-all group"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b)", boxShadow: "0 0 40px rgba(139,92,246,0.4)" }}>
              <Link href="/contact">
                Start Building with GenAI
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="rounded-full border border-white/10 text-white hover:bg-white/5 px-10 py-7 text-base font-semibold transition-all hover:scale-105">
              <Link href="/case-studies">See What We've Built</Link>
            </Button>
          </div>

          {/* Stats strip */}
          <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/8"
            style={{ background: "rgba(255,255,255,0.04)" }}>
            {stats.map((s) => (
              <div key={s.label} className="px-8 py-6 text-center hover:bg-white/5 transition-colors">
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SOLUTIONS — Cards with colour identity, each unique
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#050508" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Wand2 className="h-5 w-5 text-violet-400" />
                <span className="text-sm font-bold text-violet-400 uppercase tracking-widest">What We Build</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Six GenAI solution types.<br className="hidden sm:block" /> Infinite possibilities.
              </h2>
            </div>
            <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors group">
              Discuss your idea <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol) => {
              const Icon = sol.icon
              return (
                <div key={sol.tag} className="group relative rounded-2xl overflow-hidden cursor-default" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {/* Hover glow layer */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${sol.grad}`} style={{ opacity: 0 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.05" }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0" }} />

                  {/* Top colour bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${sol.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="p-8">
                    {/* Icon + tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${sol.bg} border ${sol.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-6 w-6 ${sol.text}`} />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${sol.bg} ${sol.text} border ${sol.border}`}>{sol.tag}</span>
                    </div>

                    <h3 className="text-xl font-black text-white mb-3 leading-snug">{sol.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{sol.description}</p>

                    {/* Model pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {sol.models.map((m) => (
                        <span key={m} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/8">{m}</span>
                      ))}
                    </div>

                    {/* Stat */}
                    <div className={`flex items-center gap-2 text-sm font-bold ${sol.text}`}>
                      <TrendingUp className="h-4 w-4" />
                      {sol.stat}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MODEL SELECTION — 4-column tier cards
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 border-y border-white/5" style={{ background: "linear-gradient(180deg, #050508 0%, #09080f 50%, #050508 100%)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-3">Model Selection</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              We're model-agnostic.<br className="hidden sm:block" /> You're never locked in.
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">We select the right model for your performance, cost, and privacy requirements — and architect a swap-ready system from day one.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modelTiers.map((tier) => {
              const Icon = tier.icon
              return (
                <div key={tier.name} className="group rounded-2xl p-8 border border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                  <Icon className="h-6 w-6 text-slate-400 mb-5 group-hover:text-white transition-colors" />
                  <div>
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-4 ${tier.badgeColor}`}>{tier.badge}</span>
                  </div>
                  <h3 className="text-lg font-black text-white mb-3">{tier.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{tier.desc}</p>
                  <div className="space-y-2">
                    {tier.models.map((m) => (
                      <div key={m} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                        <span className="font-mono">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TRUST — 2x2 grid of enterprise-grade guarantees
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#050508" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            {/* Left: headline */}
            <div>
              <p className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-4">Enterprise Ready</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                GenAI built for<br />
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                  regulated industries
                </span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                We don't bolt on security and compliance at the end. Every GenAI system we build is designed from day one to meet the governance, privacy, and safety requirements of enterprises operating at scale.
              </p>
              <Button asChild className="rounded-full bg-violet-600 hover:bg-violet-500 text-white border-0 px-8 py-5 font-bold hover:scale-105 transition-all group"
                style={{ boxShadow: "0 0 30px rgba(139,92,246,0.25)" }}>
                <Link href="/contact">
                  Talk to Our Team <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Right: 2x2 trust cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((tp) => {
                const Icon = tp.icon
                return (
                  <div key={tp.title} className="group rounded-2xl p-7 border border-white/8 bg-white/[0.03] hover:border-violet-500/30 hover:bg-violet-950/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:bg-violet-500/25 transition-colors">
                      <Icon className="h-5 w-5 text-violet-400" />
                    </div>
                    <h3 className="text-base font-black text-white mb-2">{tp.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{tp.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          HOW WE BUILD — Horizontal step flow
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 border-t border-white/5" style={{ background: "#050508" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-3">How We Build</p>
            <h2 className="text-4xl font-black text-white">From prompt to production in 8 weeks</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", title: "Discovery", desc: "Define the use case, measure the baseline, and identify the right model and architecture for your context and compliance needs.", icon: Sparkles },
              { n: "02", title: "Prototype", desc: "Two-week sprint to a working demo. Prompt engineering, RAG setup, tool integrations, and a working product to validate assumptions.", icon: Zap },
              { n: "03", title: "Harden & Evaluate", desc: "Red-teaming, eval dataset creation, guardrail implementation, and latency optimisation before any code reaches production.", icon: Shield },
              { n: "04", title: "Deploy & Monitor", desc: "Production deployment with streaming, audit logging, cost dashboards, prompt version control, and hands-on hypercare period.", icon: Globe },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.n} className="group relative rounded-2xl p-8 border border-white/8 bg-white/[0.03] hover:border-violet-500/30 hover:bg-violet-950/15 transition-all duration-300 hover:-translate-y-1">
                  {/* Arrow connector */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ChevronRight className="h-5 w-5 text-violet-500/40" />
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mb-6 group-hover:bg-violet-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-violet-400" />
                  </div>
                  <div className="text-xs font-black text-violet-500 tracking-widest uppercase font-mono mb-2">Phase {step.n}</div>
                  <h3 className="text-lg font-black text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CTA — Gradient orb, conversation-style copy
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-36 overflow-hidden" style={{ background: "#050508" }}>
        {/* Multi-colour orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, rgba(236,72,153,0.1) 40%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

          {/* Chat bubbles — decorative GenAI motif */}
          <div className="flex justify-center items-end gap-3 mb-12">
            <div className="rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur-sm max-w-xs text-left">
              What if we could automate our entire content review workflow with AI?
            </div>
            <div className="rounded-2xl rounded-br-sm border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-sm text-violet-200 backdrop-blur-sm max-w-xs text-left">
              We can. Let's scope it — we've done this for 200+ teams.
              <div className="mt-1 text-xs text-violet-400">― DGCrux GenAI Team</div>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
            What would you build<br />
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              if AI had no limits?
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us the workflow, product feature, or automation you've always wanted. We'll design the GenAI architecture, estimate the timelines, and build it — fast.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="rounded-full px-12 py-7 text-base font-black border-0 hover:scale-105 transition-all group"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)", boxShadow: "0 0 50px rgba(139,92,246,0.4)" }}>
              <Link href="/contact">
                Let's Build It Together
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="rounded-full border border-white/10 text-white hover:bg-white/5 px-12 py-7 text-base font-semibold hover:scale-105 transition-all">
              <Link href="/case-studies">See 200+ Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
