"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Plug, GitBranch, RefreshCw, Zap, Shield, ArrowRight,
  CheckCircle2, TrendingUp, Clock, BarChart3, Globe, Lock,
  Database, Code2, Layers, ChevronRight, Settings, Workflow,
  ArrowUpRight, Activity, Cpu, Play,
} from "lucide-react"

/* ══════════════════════ DATA ══════════════════════════ */

const integrations = [
  // Row 1 — Source systems
  { name: "Salesforce", color: "#06b6d4", cat: "CRM" },
  { name: "HubSpot", color: "#f97316", cat: "CRM" },
  { name: "Notion", color: "#a78bfa", cat: "Workspace" },
  { name: "Slack", color: "#34d399", cat: "Comms" },
  { name: "Jira", color: "#60a5fa", cat: "Project" },
  // Row 2 — Data / AI
  { name: "OpenAI", color: "#10b981", cat: "AI" },
  { name: "Anthropic", color: "#f59e0b", cat: "AI" },
  { name: "PostgreSQL", color: "#38bdf8", cat: "Database" },
  { name: "Snowflake", color: "#60a5fa", cat: "Data" },
  { name: "Pinecone", color: "#a78bfa", cat: "Vector DB" },
  // Row 3 — Output/ops
  { name: "Stripe", color: "#818cf8", cat: "Payments" },
  { name: "Twilio", color: "#f43f5e", cat: "Comms" },
  { name: "SendGrid", color: "#34d399", cat: "Email" },
  { name: "Google Sheets", color: "#4ade80", cat: "Sheets" },
  { name: "Zapier", color: "#f97316", cat: "Workflow" },
]

const automationTypes = [
  {
    icon: RefreshCw,
    accent: "#10b981",
    tag: "Data Sync",
    title: "Real-Time Data Pipelines",
    body: "Connect every data source in your stack — CRMs, databases, data warehouses, and APIs — into unified, always-fresh pipelines. No stale reports, no manual exports.",
    examples: ["CRM → Data Warehouse sync", "Event streaming with Kafka", "CDC from Postgres to Snowflake"],
  },
  {
    icon: Cpu,
    accent: "#38bdf8",
    tag: "AI Enrichment",
    title: "AI-Powered Data Enrichment",
    body: "Inject LLM intelligence mid-pipeline — classify incoming support tickets, summarise call transcripts, extract entities from contracts, or score leads automatically.",
    examples: ["Ticket auto-classification", "Lead scoring with GPT-4o", "Contract data extraction"],
  },
  {
    icon: Play,
    accent: "#f59e0b",
    tag: "Workflow Automation",
    title: "End-to-End Workflow Automation",
    body: "Trigger multi-step workflows from any event — a form submission, a Slack message, or a database change. Branches, conditions, retries, and approvals all built in.",
    examples: ["Onboarding workflow", "Invoice approval chain", "Alert → runbook execution"],
  },
  {
    icon: Globe,
    accent: "#a78bfa",
    tag: "API Integration",
    title: "Custom API & Webhook Integration",
    body: "REST, GraphQL, gRPC — we build and maintain integrations with any third-party API. Custom transformers, error handling, rate-limit management, and versioned schemas.",
    examples: ["Payment platform hooks", "ERP bidirectional sync", "Multi-tenant API gateway"],
  },
  {
    icon: Shield,
    accent: "#f43f5e",
    tag: "Security & Compliance",
    title: "Secure, Auditable Automations",
    body: "Every automation is logged end-to-end. PII masking, RBAC controls, secret management via Vault, and SOC 2 / GDPR compliant data handling built into every pipeline.",
    examples: ["PII redaction on the fly", "Audit trail for every step", "Role-scoped API access"],
  },
  {
    icon: BarChart3,
    accent: "#fb923c",
    tag: "Monitoring",
    title: "Observability & Auto-Healing",
    body: "Real-time dashboards tracking pipeline health, step latency, error rates, and throughput. Automatic retries, dead-letter queues, and PagerDuty alerts when things go wrong.",
    examples: ["Error rate dashboards", "Dead-letter queue routing", "Auto-retry with backoff"],
  },
]

const automationRecipes = [
  {
    title: "CRM → AI Lead Scorer → Slack Notify",
    steps: ["New lead in HubSpot", "GPT-4o scores & classifies", "High-intent → Slack #sales"],
    time: "Runs in ~1.2s",
    accent: "#10b981",
    icon: "🎯",
  },
  {
    title: "Support Ticket → AI Triage → Assign",
    steps: ["Ticket created in Zendesk", "LLM classifies urgency", "Routes to right team + drafts reply"],
    time: "Runs in ~0.8s",
    accent: "#38bdf8",
    icon: "🎫",
  },
  {
    title: "Contract Upload → Extract → CRM Update",
    steps: ["PDF dropped in Drive", "Vision AI extracts key terms", "Writes to Salesforce fields"],
    time: "Runs in ~3.4s",
    accent: "#f59e0b",
    icon: "📄",
  },
  {
    title: "Anomaly Detected → Root Cause → PagerDuty",
    steps: ["Datadog alert fires", "AI analyses logs & correlates", "Creates incident with summary"],
    time: "Runs in ~1.8s",
    accent: "#f43f5e",
    icon: "🚨",
  },
]

const metrics = [
  { value: "500+", label: "Integrations shipped", icon: Plug },
  { value: "99.9%", label: "Pipeline uptime SLA", icon: Activity },
  { value: "10×", label: "Faster than manual ops", icon: Zap },
  { value: "80%", label: "Engineering time saved", icon: TrendingUp },
]

const tools = [
  { name: "n8n", cat: "Orchestration" },
  { name: "Airflow", cat: "Scheduling" },
  { name: "Temporal", cat: "Workflows" },
  { name: "Kafka", cat: "Streaming" },
  { name: "dbt", cat: "Transform" },
  { name: "Fivetran", cat: "ETL" },
  { name: "LangChain", cat: "AI layer" },
  { name: "FastAPI", cat: "API" },
  { name: "Terraform", cat: "Infra" },
  { name: "Vault", cat: "Secrets" },
]

/* ══════════════════════ SVG: Pipeline Flow ══════════════════════ */
function PipelineFlowSVG() {
  const nodes = [
    { x: 60, y: 130, label: "CRM", sub: "Salesforce", color: "#06b6d4", emoji: "🏢" },
    { x: 60, y: 240, label: "Database", sub: "PostgreSQL", color: "#10b981", emoji: "🗄️" },
    { x: 60, y: 350, label: "Files", sub: "Drive / S3", color: "#f59e0b", emoji: "📁" },
  ]
  const aiNode = { x: 280, y: 240, label: "AI Engine", sub: "GPT-4o + RAG", color: "#a78bfa", emoji: "🤖" }
  const outputs = [
    { x: 490, y: 130, label: "Slack", sub: "Notify team", color: "#34d399", emoji: "💬" },
    { x: 490, y: 240, label: "ERP", sub: "Update records", color: "#60a5fa", emoji: "⚙️" },
    { x: 490, y: 350, label: "Reports", sub: "Google Sheets", color: "#fb923c", emoji: "📊" },
  ]

  return (
    <svg viewBox="0 0 600 480" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="outGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="outGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="outGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>

      {/* Background grid */}
      <pattern id="pGrid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.04)" />
      </pattern>
      <rect width="600" height="480" fill="url(#pGrid)" />

      {/* ── Input → AI lines ── */}
      {nodes.map((n, i) => {
        const gradIds = ["lineGrad1", "lineGrad2", "lineGrad3"]
        const paths = [
          `M${n.x + 36} ${n.y} C${(n.x + aiNode.x) / 2} ${n.y} ${(n.x + aiNode.x) / 2} ${aiNode.y} ${aiNode.x - 36} ${aiNode.y}`,
        ]
        return (
          <g key={i}>
            <path d={paths[0]} stroke={`url(#${gradIds[i]})`} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
            {/* Animated packet */}
            <circle r="4" fill={n.color} opacity="0.9">
              <animateMotion dur={`${1.6 + i * 0.4}s`} begin={`${i * 0.5}s`} repeatCount="indefinite"
                path={paths[0]} />
            </circle>
          </g>
        )
      })}

      {/* ── AI → Output lines ── */}
      {outputs.map((o, i) => {
        const outGrads = ["outGrad1", "outGrad2", "outGrad3"]
        const path = `M${aiNode.x + 36} ${aiNode.y} C${(aiNode.x + o.x) / 2} ${aiNode.y} ${(aiNode.x + o.x) / 2} ${o.y} ${o.x - 36} ${o.y}`
        return (
          <g key={i}>
            <path d={path} stroke={`url(#${outGrads[i]})`} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
            <circle r="4" fill={o.color} opacity="0.9">
              <animateMotion dur={`${1.8 + i * 0.35}s`} begin={`${0.9 + i * 0.4}s`} repeatCount="indefinite" path={path} />
            </circle>
          </g>
        )
      })}

      {/* ── Input nodes ── */}
      {nodes.map((n, i) => (
        <g key={i} filter="url(#nodeGlow)">
          <circle cx={n.x} cy={n.y} r={28} fill={`${n.color}18`} stroke={n.color} strokeWidth="1.5" strokeOpacity="0.7" />
          <text x={n.x} y={n.y - 4} textAnchor="middle" fontSize="16">{n.emoji}</text>
          <text x={n.x} y={n.y + 12} textAnchor="middle" fill={n.color} fontSize="7.5" fontWeight="700">{n.label}</text>
          {/* Label below */}
          <text x={n.x} y={n.y + 46} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">{n.sub}</text>
        </g>
      ))}

      {/* ── Central AI node ── */}
      <g filter="url(#nodeGlow)">
        <circle cx={aiNode.x} cy={aiNode.y} r={48} fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
        <circle cx={aiNode.x} cy={aiNode.y} r={36} fill="rgba(168,85,247,0.15)" stroke={aiNode.color} strokeWidth="1.5" />
        <text x={aiNode.x} y={aiNode.y - 8} textAnchor="middle" fontSize="20">{aiNode.emoji}</text>
        <text x={aiNode.x} y={aiNode.y + 12} textAnchor="middle" fill="#c4b5fd" fontSize="9" fontWeight="800" letterSpacing="0.5">{aiNode.label}</text>
        <text x={aiNode.x} y={aiNode.y + 25} textAnchor="middle" fill="rgba(196,181,253,0.5)" fontSize="7.5">{aiNode.sub}</text>
        {/* Pulsing outer ring */}
        <circle cx={aiNode.x} cy={aiNode.y} r="52" stroke="rgba(168,85,247,0.3)" strokeWidth="1" fill="none">
          <animate attributeName="r" values="52;62;52" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ── Output nodes ── */}
      {outputs.map((o, i) => (
        <g key={i} filter="url(#nodeGlow)">
          <circle cx={o.x} cy={o.y} r={28} fill={`${o.color}18`} stroke={o.color} strokeWidth="1.5" strokeOpacity="0.7" />
          <text x={o.x} y={o.y - 4} textAnchor="middle" fontSize="16">{o.emoji}</text>
          <text x={o.x} y={o.y + 12} textAnchor="middle" fill={o.color} fontSize="7.5" fontWeight="700">{o.label}</text>
          <text x={o.x} y={o.y + 46} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">{o.sub}</text>
        </g>
      ))}

      {/* Header labels */}
      <text x="60" y="68" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontWeight="700" letterSpacing="2">SOURCES</text>
      <text x="280" y="168" textAnchor="middle" fill="rgba(168,85,247,0.5)" fontSize="9" fontWeight="700" letterSpacing="2">AI LAYER</text>
      <text x="490" y="68" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontWeight="700" letterSpacing="2">DESTINATIONS</text>

      {/* Status bar */}
      <rect x="30" y="430" width="540" height="28" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="50" cy="444" r="5" fill="#10b981">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="62" y="448" fill="#10b981" fontSize="8.5" fontWeight="700">PIPELINE RUNNING</text>
      <text x="200" y="448" fill="rgba(255,255,255,0.25)" fontSize="8">· Events processed: 1,248/min · Errors: 0 · Avg latency: 42ms</text>
    </svg>
  )
}

/* ══════════════════════ RECIPE CARD MINI PIPELINE ══════════════════════ */
function RecipePipeline({ steps, accent }: { steps: string[]; accent: string }) {
  return (
    <div className="flex items-start gap-2 mt-4 flex-wrap">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white leading-snug"
            style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
            {s}
          </div>
          {i < steps.length - 1 && (
            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" style={{ color: accent }} />
          )}
        </div>
      ))}
    </div>
  )
}

/* ══════════════════════ PAGE ══════════════════════ */

export default function AIIntegrationAutomationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#060f0a" }}>
      <style>{`
        @keyframes floatSlow { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-20px);} }
        @keyframes flowPulse { 0%,100%{opacity:0.4;} 50%{opacity:1;} }
        @keyframes marqueeLeft { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .flow-pulse { animation: flowPulse 2s ease-in-out infinite; }
        .marquee-left { animation: marqueeLeft 30s linear infinite; }
      `}</style>

      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Emerald-teal gradient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[600px]"
            style={{ background: "radial-gradient(ellipse at top right, rgba(16,185,129,0.12), transparent 65%)", filter: "blur(20px)" }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[500px]"
            style={{ background: "radial-gradient(ellipse at bottom left, rgba(6,182,212,0.08), transparent 65%)", filter: "blur(20px)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06), transparent 70%)" }} />
        </div>

        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #10b981, #a78bfa, transparent)" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 w-full">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">

            {/* Left text */}
            <div>
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8"
                style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}>
                <Plug className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-bold text-emerald-300">AI Integration & Automation</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white mb-6">
                Connect everything.<br />
                <span style={{ background: "linear-gradient(135deg, #34d399 0%, #38bdf8 50%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Automate the rest.
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
                We integrate AI into your existing stack and build end-to-end automation pipelines — connecting your CRMs, databases, APIs, and AI models into workflows that run themselves.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" asChild className="rounded-xl px-9 py-6 text-base font-black border-0 hover:scale-105 transition-all group"
                  style={{ background: "linear-gradient(135deg, #059669, #0891b2)", boxShadow: "0 0 40px rgba(16,185,129,0.3)" }}>
                  <Link href="/contact">
                    Automate My Workflows
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" asChild className="rounded-xl border text-slate-300 hover:text-white hover:bg-white/5 px-9 py-6 font-semibold"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <Link href="/case-studies">See Examples</Link>
                </Button>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {metrics.map((m) => {
                  const Icon = m.icon
                  return (
                    <div key={m.label} className="rounded-2xl p-4 text-center"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <Icon className="h-4 w-4 mx-auto mb-2 text-emerald-400 opacity-70" />
                      <div className="text-2xl font-black text-white">{m.value}</div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Pipeline SVG */}
            <div className="relative">
              <div className="float-slow rounded-3xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(16,185,129,0.15)", boxShadow: "0 0 80px rgba(16,185,129,0.06)" }}>
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3" style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="ml-2 text-xs text-slate-500 font-mono">ai-pipeline.live</span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 flow-pulse" />
                    <span className="text-xs font-mono text-emerald-400">RUNNING</span>
                  </div>
                </div>
                <div style={{ aspectRatio: "600/480" }}>
                  <PipelineFlowSVG />
                </div>
              </div>

              {/* Floating stat badges */}
              <div className="absolute -top-4 -left-4 rounded-xl px-4 py-2.5"
                style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", backdropFilter: "blur(12px)" }}>
                <div className="text-xs font-bold text-emerald-400">⚡ Events/min</div>
                <div className="text-xl font-black text-white">1,248</div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl px-4 py-2.5"
                style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.3)", backdropFilter: "blur(12px)" }}>
                <div className="text-xs font-bold text-purple-400">🤖 AI calls/hr</div>
                <div className="text-xl font-black text-white">4,800</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ INTEGRATIONS TICKER ══════════════ */}
      <section className="py-6 border-y overflow-hidden" style={{ background: "rgba(16,185,129,0.04)", borderColor: "rgba(16,185,129,0.12)" }}>
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Works with your entire stack</p>
        <div className="flex overflow-hidden">
          <div className="flex items-center gap-6 marquee-left whitespace-nowrap">
            {[...integrations, ...integrations, ...integrations].map((t, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0 rounded-full px-4 py-2"
                style={{ background: `${t.color}10`, border: `1px solid ${t.color}25` }}>
                <span className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                <span className="text-sm font-semibold" style={{ color: t.color }}>{t.name}</span>
                <span className="text-xs text-slate-600">// {t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ AUTOMATION TYPES ══════════════ */}
      <section className="py-24" style={{ background: "#060f0a" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#34d399" }}>What We Automate</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Six automation pillars.<br className="hidden sm:block" /> One unified platform.
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
              From raw data ingestion to AI-enriched outputs and secure compliance pipelines.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {automationTypes.map((a) => {
              const Icon = a.icon
              return (
                <div key={a.tag} className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {/* Top accent line */}
                  <div className="h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${a.accent}, transparent)` }} />
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${a.accent}10, transparent)` }} />

                  <div className="relative p-8">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${a.accent}15`, border: `1px solid ${a.accent}30` }}>
                        <Icon className="h-6 w-6" style={{ color: a.accent }} />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: `${a.accent}10`, border: `1px solid ${a.accent}25`, color: a.accent }}>
                        {a.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white mb-3 leading-snug">{a.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{a.body}</p>
                    <ul className="space-y-2">
                      {a.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-2 text-xs text-slate-400">
                          <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" style={{ color: a.accent }} />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ AUTOMATION RECIPES ══════════════ */}
      <section className="py-24 border-y" style={{ background: "#0a1510", borderColor: "rgba(16,185,129,0.1)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#34d399" }}>Automation Recipes</p>
              <h2 className="text-4xl font-black text-white leading-tight">
                Pipelines we build<br /> all the time
              </h2>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors group">
              Request a custom recipe <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {automationRecipes.map((r, i) => (
              <div key={i} className="group rounded-2xl p-7 transition-all duration-300 hover:scale-[1.01]"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-3xl">{r.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-base font-black text-white leading-tight">{r.title}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Activity className="h-3 w-3 text-emerald-400" />
                      <span className="text-xs font-mono text-emerald-400">{r.time}</span>
                    </div>
                  </div>
                </div>
                <RecipePipeline steps={r.steps} accent={r.accent} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TECH STACK ══════════════ */}
      <section className="py-16 border-y overflow-hidden" style={{ background: "#060f0a", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Our Integration & Automation Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => (
              <div key={i} className="flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all hover:scale-105"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-sm font-bold text-white">{t.name}</span>
                <span className="text-xs text-slate-600">// {t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY US — 3-column value props ══════════════ */}
      <section className="py-24" style={{ background: "#060f0a" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#34d399" }}>Why DGCrux</p>
            <h2 className="text-4xl font-black text-white">We don't just connect APIs.<br className="hidden sm:block" /> We build systems that last.</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Shield, accent: "#34d399",
                title: "Built for production",
                body: "Every pipeline we build has error handling, dead-letter queues, retry logic, monitoring, and alerting. No brittle weekend scripts.",
              },
              {
                icon: Lock, accent: "#38bdf8",
                title: "Security-first by default",
                body: "Secrets via Vault, PII masking in-flight, RBAC on every endpoint, SOC-2-ready infrastructure. We don't cut corners on security.",
              },
              {
                icon: TrendingUp, accent: "#a78bfa",
                title: "Scales with your growth",
                body: "From 100 to 10M events/day without re-architecture. We design for 10× your current load from day one.",
              },
            ].map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="rounded-2xl p-8 transition-all hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${v.accent}15`, border: `1px solid ${v.accent}30` }}>
                    <Icon className="h-6 w-6" style={{ color: v.accent }} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="relative py-36 overflow-hidden" style={{ background: "#060f0a" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
            style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.15) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)", filter: "blur(40px)" }} />
        </div>
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #10b981, #38bdf8, transparent)" }} />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

          {/* Animated pipeline mini-widget */}
          <div className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 mb-12"
            style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)" }}>
            {["Your CRM", "→", "AI Layer", "→", "Your ERP"].map((part, i) => (
              <span key={i} className={`text-sm font-mono ${part === "→" ? "text-emerald-400 flow-pulse" : "text-white font-bold"}`}>
                {part}
              </span>
            ))}
            <span className="ml-2 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 flow-pulse" />
              <span className="text-xs text-emerald-400 font-mono">LIVE</span>
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.0] mb-6">
            What workflow should<br />
            <span style={{ background: "linear-gradient(135deg, #34d399, #38bdf8, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              run itself first?
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us the manual process your team hates most. We'll design an AI-powered automation pipeline for it — connected, observable, and production-ready.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="rounded-xl px-12 py-7 text-lg font-black border-0 hover:scale-105 transition-all group"
              style={{ background: "linear-gradient(135deg, #059669, #0891b2)", boxShadow: "0 0 60px rgba(16,185,129,0.35)" }}>
              <Link href="/contact">
                Map My Automation <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="rounded-xl border text-white hover:bg-white/5 px-12 py-7 text-lg font-semibold hover:scale-105 transition-all"
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
