"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Bot, Brain, Wrench, Eye, RefreshCw, ArrowRight,
  CheckCircle2, X, ChevronRight, Zap, Globe, Lock,
  Database, Code2, Search, MessageSquare, Network,
  TrendingUp, Shield, Cpu, BarChart3, Layers, Sparkles,
} from "lucide-react"

/* ─────────────────────────── DATA ─────────────────────────────── */

const marqueeItems = [
  { icon: Search, label: "Web Research" },
  { icon: Code2, label: "Code Generation" },
  { icon: Database, label: "Database Queries" },
  { icon: MessageSquare, label: "Customer Dialogues" },
  { icon: BarChart3, label: "Data Analysis" },
  { icon: Globe, label: "API Orchestration" },
  { icon: FileText2, label: "Report Writing" },
  { icon: Shield, label: "Compliance Checks" },
  { icon: Network, label: "Multi-Agent Tasks" },
  { icon: Zap, label: "Workflow Automation" },
]

function FileText2(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

const capabilities = [
  {
    num: "01", accent: "#14b8a6",
    title: "Autonomous Task Completion",
    headline: "Give it a goal. Walk away.",
    body: "Our agents accept high-level objectives, plan a sequence of steps, call the right tools, handle errors, and return a result — no micromanagement. They work like a capable employee, not a script.",
    bullets: ["Multi-step task decomposition", "Error recovery & retry logic", "Progress reporting & escalation", "Human-in-the-loop checkpoints"],
    visual: "task",
  },
  {
    num: "02", accent: "#6366f1",
    title: "Tool Use & API Orchestration",
    headline: "Connected to everything that matters.",
    body: "Agents aren't limited to text. We equip them with custom tool libraries — web search, SQL, REST APIs, file systems, browsers, and code execution — so they can take real action in the real world.",
    bullets: ["Custom tool definition & schema", "Secure credential management", "Parallel tool execution", "Tool result validation"],
    visual: "tools",
  },
  {
    num: "03", accent: "#f59e0b",
    title: "Long-Term Memory & Context",
    headline: "Agents that remember, learn, and improve.",
    body: "We implement vector-based episodic memory, semantic search over past interactions, and structured knowledge stores — so agents get smarter with every run, not worse.",
    bullets: ["Vector database integration", "Episodic & semantic memory", "Cross-session context retention", "Knowledge base grounding"],
    visual: "memory",
  },
  {
    num: "04", accent: "#ec4899",
    title: "Multi-Agent Orchestration",
    headline: "Specialist agents. One unified output.",
    body: "Complex problems need specialist teams. We build supervisor-worker agent graphs where a coordinator delegates sub-tasks to expert agents — each optimised for its domain, all synced to one goal.",
    bullets: ["Supervisor-worker architecture", "Dynamic agent spawning", "Inter-agent messaging", "Result aggregation & synthesis"],
    visual: "multi",
  },
]

const comparison = [
  { feature: "Handles multi-step tasks", traditional: false, ruleBased: false, ourAgents: true },
  { feature: "Adapts to unexpected outputs", traditional: false, ruleBased: false, ourAgents: true },
  { feature: "Uses real tools & APIs", traditional: false, ruleBased: true, ourAgents: true },
  { feature: "Understands natural language", traditional: false, ruleBased: false, ourAgents: true },
  { feature: "Maintains memory across sessions", traditional: false, ruleBased: false, ourAgents: true },
  { feature: "Self-corrects on failure", traditional: false, ruleBased: false, ourAgents: true },
  { feature: "Coordinatesother agents", traditional: false, ruleBased: false, ourAgents: true },
  { feature: "Full audit trail", traditional: false, ruleBased: true, ourAgents: true },
]

const results = [
  { metric: "300+", label: "Agents in production", icon: Bot },
  { metric: "98%", label: "Task completion rate", icon: CheckCircle2 },
  { metric: "70%", label: "Avg. manual effort cut", icon: TrendingUp },
  { metric: "<2s", label: "Avg. tool call latency", icon: Zap },
]

const useCases = [
  { tag: "Sales", title: "AI SDR Agent", desc: "Researches prospects, drafts personalised outreach, books meetings — 24/7.", stat: "5× outreach volume" },
  { tag: "Finance", title: "Invoice Processing", desc: "Extracts, validates, and reconciles invoices end-to-end with zero human touch.", stat: "92% cost reduction" },
  { tag: "Legal", title: "Contract Review Agent", desc: "Flags risk clauses, summarises obligations, and compares against standard terms.", stat: "6 hrs → 4 minutes" },
  { tag: "DevOps", title: "Incident Response", desc: "Reads alerts, correlates logs, and drafts or executes runbooks autonomously.", stat: "40 min MTTR → 3 min" },
  { tag: "Research", title: "Market Intelligence", desc: "Monitors competitors, synthesises trends, and delivers daily exec briefs.", stat: "Daily insights, zero effort" },
  { tag: "HR", title: "Candidate Screener", desc: "Screens CVs, scores against criteria, schedules interviews, and sends updates.", stat: "80% recruiter time saved" },
]

/* ─────────────── SVG: Central Agent Loop ──────────────────────── */

function AgentLoopIllustration() {
  const cx = 260, cy = 200, r = 130

  const nodes = [
    { label: "PERCEIVE", angle: -90, color: "#14b8a6", sub: "Read inputs" },
    { label: "PLAN", angle: -18, color: "#6366f1", sub: "Reason & decide" },
    { label: "ACT", angle: 54, color: "#f59e0b", sub: "Call tools" },
    { label: "OBSERVE", angle: 126, color: "#ec4899", sub: "Check results" },
    { label: "LEARN", angle: 198, color: "#22d3ee", sub: "Update memory" },
  ]

  return (
    <svg viewBox="0 0 520 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {nodes.map((n, i) => (
          <radialGradient key={i} id={`ng${i}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={n.color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={n.color} stopOpacity="0" />
          </radialGradient>
        ))}
        <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#6366f1" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle orbit ring */}
      <circle cx={cx} cy={cy} r={r} stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 8" />
      <circle cx={cx} cy={cy} r={r * 0.55} stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 6" />

      {/* Glow behind center */}
      <circle cx={cx} cy={cy} r={60} fill="url(#centerGrad)" />

      {/* Central brain node */}
      <circle cx={cx} cy={cy} r={44} fill="rgba(20,184,166,0.12)" stroke="rgba(20,184,166,0.4)" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={34} fill="rgba(20,184,166,0.08)" stroke="rgba(20,184,166,0.25)" strokeWidth="1" />
      <circle cx={cx - 7} cy={cy - 4} r="10" fill="none" stroke="#5eead4" strokeWidth="1.5" />
      <circle cx={cx + 7} cy={cy - 4} r="9" fill="none" stroke="#5eead4" strokeWidth="1.5" />
      <path d={`M${cx - 7} ${cy + 6} Q${cx} ${cy + 14} ${cx + 7} ${cy + 6}`} stroke="#5eead4" strokeWidth="1.5" fill="none" />
      <text x={cx} y={cy + 22} textAnchor="middle" fill="#5eead4" fontSize="7" fontWeight="700" letterSpacing="1.5">AGENT CORE</text>

      {/* Spokes + nodes */}
      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180
        const nx = cx + r * Math.cos(rad)
        const ny = cy + r * Math.sin(rad)
        const sx = cx + (r * 0.34) * Math.cos(rad)
        const sy = cy + (r * 0.34) * Math.sin(rad)
        // text offset
        const tx = cx + (r + 44) * Math.cos(rad)
        const ty = cy + (r + 44) * Math.sin(rad)

        return (
          <g key={i}>
            {/* Spoke */}
            <line x1={sx} y1={sy} x2={nx} y2={ny} stroke={node.color} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
            {/* Glow behind node */}
            <circle cx={nx} cy={ny} r={30} fill={`url(#ng${i})`} />
            {/* Node circle */}
            <circle cx={nx} cy={ny} r={22} fill={`${node.color}18`} stroke={node.color} strokeWidth="1.5" strokeOpacity="0.7" />
            {/* Node label */}
            <text x={nx} y={ny + 1} textAnchor="middle" dominantBaseline="middle" fill={node.color} fontSize="6.5" fontWeight="700" letterSpacing="0.8">{node.label}</text>

            {/* External sub-label */}
            <text x={tx} y={ty - 4} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7">{node.sub}</text>
          </g>
        )
      })}

      {/* Animated packets around ring */}
      {nodes.map((node, i) => {
        const nextNode = nodes[(i + 1) % nodes.length]
        const a1 = (node.angle * Math.PI) / 180
        const a2 = (nextNode.angle * Math.PI) / 180
        const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1)
        const x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2)
        const delay = i * 0.8
        return (
          <circle key={`p${i}`} r="4" fill={node.color} opacity="0.85">
            <animateMotion dur="4s" begin={`${delay}s`} repeatCount="indefinite"
              path={`M ${x1} ${y1} Q ${cx + r * 1.1 * Math.cos(((node.angle + nextNode.angle) / 2) * Math.PI / 180)} ${cy + r * 1.1 * Math.sin(((node.angle + nextNode.angle) / 2) * Math.PI / 180)} ${x2} ${y2}`} />
          </circle>
        )
      })}
    </svg>
  )
}

/* ─────────────── SVG: Capability Visuals ───────────────────────── */

function CapabilitySVG({ type, accent }: { type: string; accent: string }) {
  if (type === "task") return (
    <svg viewBox="0 0 320 200" fill="none" className="w-full h-full">
      <rect width="320" height="200" rx="12" fill={`${accent}08`} stroke={`${accent}20`} strokeWidth="1" />
      {[
        { y: 44, w: 200, label: "Decompose → Plan", done: true },
        { y: 84, w: 260, label: "Execute Step 1", done: true },
        { y: 124, w: 180, label: "Execute Step 2", done: true },
        { y: 164, w: 230, label: "Synthesise result", done: false },
      ].map((row, i) => (
        <g key={i}>
          <rect x="24" y={row.y} width={row.w} height="24" rx="6" fill={row.done ? `${accent}25` : "rgba(255,255,255,0.05)"} stroke={row.done ? accent : "rgba(255,255,255,0.1)"} strokeWidth="1" strokeDasharray={row.done ? "0" : "4 4"} />
          <text x="38" y={row.y + 15} fill={row.done ? accent : "rgba(255,255,255,0.3)"} fontSize="9" fontWeight="600">{row.label}</text>
          {row.done && <circle cx={row.w - 2} cy={row.y + 12} r="6" fill={`${accent}30`}>
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
          </circle>}
        </g>
      ))}
    </svg>
  )

  if (type === "tools") return (
    <svg viewBox="0 0 320 200" fill="none" className="w-full h-full">
      <rect width="320" height="200" rx="12" fill={`${accent}08`} stroke={`${accent}20`} strokeWidth="1" />
      {/* Central agent */}
      <rect x="120" y="80" width="80" height="40" rx="8" fill={`${accent}20`} stroke={accent} strokeWidth="1.5" />
      <text x="160" y="103" textAnchor="middle" fill={accent} fontSize="9" fontWeight="700">AGENT</text>
      {/* Tool bubbles */}
      {[
        { x: 30, y: 40, label: "Search", col: "#14b8a6" },
        { x: 220, y: 40, label: "SQL", col: "#f59e0b" },
        { x: 30, y: 150, label: "APIs", col: "#ec4899" },
        { x: 220, y: 150, label: "Browser", col: "#a78bfa" },
      ].map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={t.y} width="70" height="32" rx="8" fill={`${t.col}18`} stroke={t.col} strokeWidth="1" strokeOpacity="0.6" />
          <text x={t.x + 35} y={t.y + 19} textAnchor="middle" fill={t.col} fontSize="9" fontWeight="600">{t.label}</text>
          {/* Lines to agent */}
          <line x1={t.x + (t.x < 120 ? 70 : 0)} y1={t.y + 16}
            x2={t.x < 120 ? 120 : 220} y2={100}
            stroke={t.col} strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
          <circle r="3" fill={t.col} opacity="0.9">
            <animateMotion dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite"
              path={`M${t.x + (t.x < 120 ? 70 : 0)},${t.y + 16} L${t.x < 120 ? 120 : 220},100`} />
          </circle>
        </g>
      ))}
    </svg>
  )

  if (type === "memory") return (
    <svg viewBox="0 0 320 200" fill="none" className="w-full h-full">
      <rect width="320" height="200" rx="12" fill={`${accent}08`} stroke={`${accent}20`} strokeWidth="1" />
      {[20, 60, 100, 140].map((y, i) => (
        <g key={i}>
          <rect x="24" y={y + 28} width={260 - i * 20} height="20" rx="4" fill={`${accent}${18 - i * 4}`} stroke={`${accent}${40 - i * 8}`} strokeWidth="1" />
          <text x="36" y={y + 41} fill={`${accent}`} fontSize="8" opacity={1 - i * 0.2}>Memory chunk {i + 1} — session context stored</text>
        </g>
      ))}
      <rect x="24" y="172" width="120" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 4" />
      <text x="36" y="184" fill="rgba(255,255,255,0.25)" fontSize="8">Vector embedding slot...</text>
      {/* Pulsing dot */}
      <circle cx="295" cy="50" r="6" fill={accent} opacity="0.5">
        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )

  return (
    <svg viewBox="0 0 320 200" fill="none" className="w-full h-full">
      <rect width="320" height="200" rx="12" fill={`${accent}08`} stroke={`${accent}20`} strokeWidth="1" />
      {/* Supervisor */}
      <rect x="110" y="20" width="100" height="36" rx="8" fill={`${accent}22`} stroke={accent} strokeWidth="1.5" />
      <text x="160" y="41" textAnchor="middle" fill={accent} fontSize="9" fontWeight="700">SUPERVISOR</text>
      {/* Workers */}
      {[
        { x: 20, label: "Research", col: "#14b8a6" },
        { x: 120, label: "Writer", col: "#6366f1" },
        { x: 220, label: "Publisher", col: "#f59e0b" },
      ].map((w, i) => (
        <g key={i}>
          <line x1={w.x + 45} y1="130" x2="160" y2="56" stroke={w.col} strokeWidth="1" strokeDasharray="3 5" strokeOpacity="0.6" />
          <rect x={w.x} y="130" width="90" height="36" rx="8" fill={`${w.col}18`} stroke={w.col} strokeWidth="1" strokeOpacity="0.7" />
          <text x={w.x + 45} y="151" textAnchor="middle" fill={w.col} fontSize="9" fontWeight="600">{w.label}</text>
          <circle r="3" fill={w.col} opacity="0.85">
            <animateMotion dur={`${1.4 + i * 0.5}s`} repeatCount="indefinite" path={`M${w.x + 45},130 L160,56`} />
          </circle>
        </g>
      ))}
    </svg>
  )
}

/* ─────────────────────────── PAGE ─────────────────────────────── */

export default function AIAgentDevelopmentPage() {
  const allMarquee = [...marqueeItems, ...marqueeItems]

  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#060b10" }}>
      <Navbar />

      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-20">
        {/* Teal top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{ background: "radial-gradient(ellipse, rgba(20,184,166,0.16) 0%, rgba(99,102,241,0.06) 50%, transparent 70%)", filter: "blur(1px)" }} />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #14b8a6, transparent)" }} />

        {/* Faint grid */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(90deg, #14b8a6 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-sm font-semibold"
            style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.3)", color: "#5eead4" }}>
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            AI Agent Development
          </div>

          {/* Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black leading-[1.0] tracking-tight text-white mb-6">
            Autonomous Agents<br />
            <span style={{ background: "linear-gradient(135deg,#14b8a6 0%,#6366f1 50%,#ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              that get things done
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            We design and deploy production-grade AI agents that plan, use tools, retain memory, and complete complex real-world tasks — no human babysitting required.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" asChild className="rounded-full px-10 py-6 text-base font-bold border-0 hover:scale-105 transition-all group"
              style={{ background: "linear-gradient(135deg, #0d9488, #4f46e5)", boxShadow: "0 0 40px rgba(20,184,166,0.3)" }}>
              <Link href="/contact">Build My AI Agent <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="rounded-full border text-slate-300 hover:text-white hover:bg-white/5 px-10 py-6 text-base font-semibold"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <Link href="/case-studies">See Live Demos</Link>
            </Button>
          </div>

          {/* ── Central SVG Loop Illustration ── */}
          <div className="mx-auto max-w-xl mb-12 rounded-3xl overflow-hidden p-1"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(20,184,166,0.15)" }}>
            <div style={{ aspectRatio: "520/400" }}>
              <AgentLoopIllustration />
            </div>
          </div>

          {/* Result pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {results.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.label} className="flex items-center gap-3 rounded-2xl px-5 py-3"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Icon className="h-4 w-4 text-teal-400" />
                  <span className="text-lg font-black text-white">{r.metric}</span>
                  <span className="text-sm text-slate-400">{r.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ MARQUEE — What agents can do ════════════════ */}
      <section className="py-6 border-y overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(20,184,166,0.04)" }}>
        <div className="flex">
          <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex items-center gap-2.5 shrink-0 px-4 py-2 rounded-full"
                  style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.15)" }}>
                  <Icon className="h-4 w-4 text-teal-400" />
                  <span className="text-sm font-semibold text-slate-300">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ CAPABILITIES — Alternating rows ════════════════ */}
      <section className="py-24" style={{ background: "#060b10" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#5eead4" }}>Core Capabilities</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Four powers that make our<br className="hidden sm:block" /> agents unstoppable
            </h2>
          </div>

          <div className="space-y-6">
            {capabilities.map((cap, idx) => {
              const isFlipped = idx % 2 === 1
              return (
                <div key={cap.num} className="group rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {/* Top accent line */}
                  <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${cap.accent}, transparent)` }} />

                  <div className={`grid gap-0 lg:grid-cols-2 ${isFlipped ? "" : ""}`}>
                    {/* Visual pane */}
                    <div className={`p-8 ${isFlipped ? "lg:order-2" : ""}`}
                      style={{ borderRight: isFlipped ? "none" : "1px solid rgba(255,255,255,0.06)", borderLeft: isFlipped ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                      <div style={{ aspectRatio: "320/200" }}>
                        <CapabilitySVG type={cap.visual} accent={cap.accent} />
                      </div>
                    </div>

                    {/* Text pane */}
                    <div className={`p-10 flex flex-col justify-center ${isFlipped ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="text-xs font-black tracking-widest" style={{ color: cap.accent }}>CAPABILITY {cap.num}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">{cap.title}</h3>
                      <p className="text-lg font-semibold mb-4" style={{ color: cap.accent }}>{cap.headline}</p>
                      <p className="text-slate-400 leading-relaxed mb-8">{cap.body}</p>
                      <ul className="space-y-3">
                        {cap.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-3 text-sm text-slate-300">
                            <ChevronRight className="h-4 w-4 flex-shrink-0" style={{ color: cap.accent }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ USE CASES GRID ════════════════ */}
      <section className="py-24 border-y" style={{ background: "#07101a", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#5eead4" }}>Real Deployments</p>
            <h2 className="text-4xl font-black text-white">Agents we've already built</h2>
            <p className="mt-3 text-slate-400 max-w-xl mx-auto">Each one running in production, measured, and improving.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, i) => (
              <div key={i} className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:bg-teal-950/20"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(20,184,166,0.12)", border: "1px solid rgba(20,184,166,0.25)", color: "#5eead4" }}>{uc.tag}</span>
                  <span className="text-xs font-bold text-emerald-400">{uc.stat}</span>
                </div>
                <h3 className="text-lg font-black text-white mb-2">{uc.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ COMPARISON TABLE ════════════════ */}
      <section className="py-24" style={{ background: "#060b10" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#5eead4" }}>Why Agents?</p>
            <h2 className="text-4xl font-black text-white">Agents vs. everything else</h2>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            {/* Header */}
            <div className="grid grid-cols-4 px-6 py-4" style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest col-span-1">Feature</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Traditional SW</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Rule-based Bot</span>
              <span className="text-xs font-bold text-center uppercase tracking-widest" style={{ color: "#5eead4", fontSize: "0.65rem" }}>Our AI Agents</span>
            </div>

            {comparison.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 px-6 py-4 items-center transition-colors hover:bg-white/[0.02] ${i < comparison.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <span className="text-sm text-slate-300 col-span-1 pr-4">{row.feature}</span>
                <div className="flex justify-center">
                  {row.traditional
                    ? <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    : <X className="h-5 w-5 text-slate-600" />}
                </div>
                <div className="flex justify-center">
                  {row.ruleBased
                    ? <CheckCircle2 className="h-5 w-5 text-slate-400" />
                    : <X className="h-5 w-5 text-slate-600" />}
                </div>
                <div className="flex justify-center">
                  <CheckCircle2 className="h-5 w-5" style={{ color: "#14b8a6" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section className="relative py-36 overflow-hidden" style={{ background: "#060b10" }}>
        {/* Teal/indigo double glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(20,184,166,0.14), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.12), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #14b8a6, transparent)" }} />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Fake running agent terminal prompt */}
          <div className="inline-flex items-start gap-3 rounded-2xl px-6 py-4 mb-12 text-left"
            style={{ background: "rgba(20,184,166,0.06)", border: "1px solid rgba(20,184,166,0.2)" }}>
            <div className="flex flex-col gap-1 font-mono text-xs mt-1">
              <span style={{ color: "#5eead4" }}>{">"} agent.run("Automate our monthly reporting")</span>
              <span className="text-slate-500">  Planning… identifying 7 sub-tasks</span>
              <span className="text-slate-500">  [tool: sql_query] rows=1,240 ✓</span>
              <span className="text-slate-500">  [tool: chart_gen] 3 visuals created ✓</span>
              <span style={{ color: "#10b981" }}>  Report delivered to Slack ✓  <span className="animate-pulse">▌</span></span>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.0] mb-6">
            Ready to deploy<br />
            <span style={{ background: "linear-gradient(135deg,#14b8a6,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              your first agent?
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us the workflow you want to automate. We'll scope an agent architecture, estimate the build time, and demo a prototype — in under two weeks.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-black border-0 hover:scale-105 transition-all group"
              style={{ background: "linear-gradient(135deg, #0d9488, #4f46e5)", boxShadow: "0 0 60px rgba(20,184,166,0.35)" }}>
              <Link href="/contact">
                Start the Conversation <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="rounded-full border text-white hover:bg-white/5 px-12 py-7 text-lg font-semibold hover:scale-105 transition-all"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
