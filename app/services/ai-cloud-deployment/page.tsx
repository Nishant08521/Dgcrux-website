"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Cloud, Server, Zap, Shield, TrendingDown, ArrowRight,
  CheckCircle2, Globe, Lock, BarChart3, Cpu, RefreshCw,
  Activity, ChevronRight, GitBranch, Package, Layers,
  ArrowUpRight, DollarSign, Clock, AlertTriangle,
} from "lucide-react"

/* ═══════════════════════════ DATA ═══════════════════════════ */

const providers = [
  { name: "AWS", logo: "AWS", color: "#f97316", services: ["SageMaker", "EKS", "Lambda", "Bedrock"], badge: "Most popular" },
  { name: "GCP", logo: "GCP", color: "#3b82f6", services: ["Vertex AI", "GKE", "Cloud Run", "TPU v4"], badge: "Best for AI/ML" },
  { name: "Azure", logo: "AZ", color: "#60a5fa", services: ["Azure ML", "AKS", "Functions", "OpenAI API"], badge: "Enterprise pick" },
  { name: "Multi", logo: "✦", color: "#a78bfa", services: ["Avoid lock-in", "Cost arbitrage", "DR", "Geo"], badge: "We recommend" },
]

const deployServices = [
  {
    icon: Package, accent: "#38bdf8",
    title: "Model Containerisation",
    body: "Docker + ONNX-optimised containers for every model type — LLMs, CV models, embedding engines. Reproducible builds, GPU-aware scheduling, and auto-scaling replicas.",
    bullets: ["Multi-stage Docker builds", "ONNX / TensorRT export", "GPU node pool management"],
  },
  {
    icon: Cpu, accent: "#10b981",
    title: "Inference Serving at Scale",
    body: "Triton Inference Server, vLLM, and Ray Serve for high-throughput, low-latency AI serving. Continuous batching, KV cache optimisation, and auto-scaling by queue depth.",
    bullets: ["vLLM continuous batching", "Triton dynamic batching", "Request queue auto-scaling"],
  },
  {
    icon: GitBranch, accent: "#a78bfa",
    title: "MLOps & CI/CD Pipelines",
    body: "Automated model retraining, evaluation, promotion, and rollback pipelines. GitHub Actions + ArgoCD + MLflow — every model change goes through a rigorous deployment gate.",
    bullets: ["A/B model canary deploys", "Automated eval gating", "One-click rollback"],
  },
  {
    icon: TrendingDown, accent: "#f59e0b",
    title: "Cost Optimisation",
    body: "Spot / preemptible GPU instances, right-sizing recommendations, and idle-resource cleanup — we routinely cut cloud AI costs by 40–70% without sacrificing performance.",
    bullets: ["Spot GPU auto-provisioning", "Right-size dashboards", "Reserved instance planning"],
  },
  {
    icon: Shield, accent: "#34d399",
    title: "Security & Compliance",
    body: "VPC isolation, private endpoints, IAM least-privilege, secrets via Vault, and automated compliance scans. SOC 2, HIPAA, and GDPR-compatible architectures by default.",
    bullets: ["Private VPC endpoints", "IAM + OIDC federation", "Automated SAST/DAST"],
  },
  {
    icon: Activity, accent: "#f43f5e",
    title: "Observability & Alerting",
    body: "Prometheus + Grafana stacks for model latency, throughput, drift, and error rate. PagerDuty integration, SLO dashboards, and anomaly-based auto-scaling triggers.",
    bullets: ["Model drift detection", "SLO / error budget tracking", "Multi-channel alerting"],
  },
]

const metrics = [
  { value: "99.99%", label: "Uptime SLA", icon: Activity },
  { value: "18ms", label: "Median inference p50", icon: Zap },
  { value: "60%", label: "Avg. cloud cost cut", icon: TrendingDown },
  { value: "< 2 wk", label: "Time-to-production", icon: Clock },
]

const deployStack = [
  { name: "Kubernetes", cat: "Orchestration", color: "#38bdf8" },
  { name: "Helm", cat: "Packaging", color: "#f59e0b" },
  { name: "ArgoCD", cat: "GitOps", color: "#f43f5e" },
  { name: "Triton", cat: "Serving", color: "#10b981" },
  { name: "vLLM", cat: "LLM Serving", color: "#a78bfa" },
  { name: "MLflow", cat: "Tracking", color: "#38bdf8" },
  { name: "Prometheus", cat: "Metrics", color: "#f97316" },
  { name: "Grafana", cat: "Dashboards", color: "#f59e0b" },
  { name: "Terraform", cat: "IaC", color: "#818cf8" },
  { name: "Vault", cat: "Secrets", color: "#fbbf24" },
  { name: "NVIDIA CUDA", cat: "GPU", color: "#34d399" },
  { name: "Ray", cat: "Distributed", color: "#60a5fa" },
]

const slaFeatures = [
  { label: "99.99% uptime guarantee", yes: true },
  { label: "< 24h incident response SLA", yes: true },
  { label: "Auto-failover across zones", yes: true },
  { label: "Dedicated cloud engineer", yes: true },
  { label: "Monthly cost reviews", yes: true },
  { label: "Runbook & on-call handover", yes: true },
]

/* ═══════════════════════════ SVG: Cloud Architecture ═══════════════════════════ */
function CloudArchSVG() {
  return (
    <svg viewBox="0 0 580 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0c1a2e" />
          <stop offset="100%" stopColor="#060f1e" />
        </linearGradient>
        <filter id="nodeBlur"><feGaussianBlur stdDeviation="4" /></filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="580" height="400" fill="url(#skyGrad)" />
      {/* Dot grid */}
      <pattern id="dotGrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="14" cy="14" r="0.8" fill="rgba(56,189,248,0.12)" />
      </pattern>
      <rect width="580" height="400" fill="url(#dotGrid)" />

      {/* ── Layer labels ── */}
      <text x="290" y="28" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontWeight="700" letterSpacing="3">CLOUD ARCHITECTURE</text>

      {/* ── INTERNET / USER ── */}
      <rect x="20" y="170" width="80" height="60" rx="10" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" />
      <text x="60" y="196" textAnchor="middle" fontSize="18">🌐</text>
      <text x="60" y="214" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="700">USERS</text>
      <text x="60" y="226" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7">Global Traffic</text>

      {/* ── CDN / LB ── */}
      <rect x="145" y="160" width="80" height="80" rx="10" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
      <text x="185" y="196" textAnchor="middle" fontSize="18">⚡</text>
      <text x="185" y="214" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontWeight="700">CDN / LB</text>
      <text x="185" y="226" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7">Cloudflare</text>

      {/* ── API Gateway ── */}
      <rect x="270" y="100" width="80" height="60" rx="10" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
      <text x="310" y="127" textAnchor="middle" fontSize="16">🔀</text>
      <text x="310" y="146" textAnchor="middle" fill="#c7d2fe" fontSize="8" fontWeight="700">API GW</text>
      <text x="310" y="157" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7">Kong / AWS</text>

      {/* Central Kubernetes cluster */}
      <rect x="260" y="190" width="100" height="80" rx="14" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.5)" strokeWidth="2" />
      <text x="310" y="224" textAnchor="middle" fontSize="22">☸</text>
      <text x="310" y="247" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="800">KUBERNETES</text>
      <text x="310" y="262" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7.5">AI Workloads</text>
      {/* Pulsing ring */}
      <circle cx="310" cy="230" r="46" stroke="rgba(56,189,248,0.2)" strokeWidth="1" fill="none">
        <animate attributeName="r" values="46;58;46" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3.5s" repeatCount="indefinite" />
      </circle>

      {/* ── GPU Nodes ── */}
      <rect x="420" y="100" width="80" height="60" rx="10" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.35)" strokeWidth="1.5" />
      <text x="460" y="127" textAnchor="middle" fontSize="16">🖥️</text>
      <text x="460" y="146" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontWeight="700">GPU NODES</text>
      <text x="460" y="157" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7">A100 / H100</text>

      {/* ── Model Store ── */}
      <rect x="420" y="195" width="80" height="60" rx="10" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.35)" strokeWidth="1.5" />
      <text x="460" y="222" textAnchor="middle" fontSize="16">📦</text>
      <text x="460" y="241" textAnchor="middle" fill="#fcd34d" fontSize="8" fontWeight="700">MODELS</text>
      <text x="460" y="252" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7">MLflow / S3</text>

      {/* ── Observability ── */}
      <rect x="420" y="290" width="80" height="60" rx="10" fill="rgba(244,63,94,0.08)" stroke="rgba(244,63,94,0.35)" strokeWidth="1.5" />
      <text x="460" y="317" textAnchor="middle" fontSize="16">📊</text>
      <text x="460" y="336" textAnchor="middle" fill="#fda4af" fontSize="8" fontWeight="700">OBSERV.</text>
      <text x="460" y="347" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7">Prometheus/Grafana</text>

      {/* ── Vector DB ── */}
      <rect x="270" y="295" width="80" height="60" rx="10" fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.35)" strokeWidth="1.5" />
      <text x="310" y="322" textAnchor="middle" fontSize="16">🧠</text>
      <text x="310" y="341" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontWeight="700">VECTOR DB</text>
      <text x="310" y="352" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7">Pinecone / pgvector</text>

      {/* ── CONNECTIONS ── */}
      {/* Users → LB */}
      <line x1="100" y1="200" x2="145" y2="200" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" />
      <circle r="4" fill="#38bdf8" opacity="0.9">
        <animateMotion dur="1.4s" repeatCount="indefinite" path="M100,200 L145,200" />
      </circle>
      {/* LB → API GW */}
      <path d="M225 200 Q247 200 247 160 L270 130" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" fill="none" />
      <circle r="4" fill="#6366f1" opacity="0.9">
        <animateMotion dur="1.2s" begin="0.3s" repeatCount="indefinite" path="M225,200 Q247,200 247,160 L270,130" />
      </circle>
      {/* LB → K8s */}
      <line x1="225" y1="200" x2="260" y2="220" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" />
      <circle r="4" fill="#6366f1" opacity="0.9">
        <animateMotion dur="1.1s" begin="0.2s" repeatCount="indefinite" path="M225,200 L260,220" />
      </circle>
      {/* API GW → K8s */}
      <line x1="310" y1="160" x2="310" y2="190" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle r="3" fill="#a5b4fc" opacity="0.9">
        <animateMotion dur="0.8s" repeatCount="indefinite" path="M310,160 L310,190" />
      </circle>
      {/* K8s → GPU */}
      <path d="M360 215 Q390 215 390 130 L420 130" stroke="url(#g2)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" fill="none" />
      <circle r="4" fill="#10b981" opacity="0.9">
        <animateMotion dur="1.3s" begin="0.5s" repeatCount="indefinite" path="M360,215 Q390,215 390,130 L420,130" />
      </circle>
      {/* K8s → Models */}
      <line x1="360" y1="230" x2="420" y2="225" stroke="url(#g3)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" />
      <circle r="4" fill="#f59e0b" opacity="0.9">
        <animateMotion dur="1.1s" begin="0.7s" repeatCount="indefinite" path="M360,230 L420,225" />
      </circle>
      {/* K8s → Observability */}
      <path d="M360 255 Q390 255 390 320 L420 320" stroke="url(#g4)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" fill="none" />
      <circle r="4" fill="#f43f5e" opacity="0.9">
        <animateMotion dur="1.5s" begin="0.9s" repeatCount="indefinite" path="M360,255 Q390,255 390,320 L420,320" />
      </circle>
      {/* K8s → Vector DB */}
      <line x1="310" y1="270" x2="310" y2="295" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle r="3" fill="#c4b5fd" opacity="0.9">
        <animateMotion dur="0.9s" begin="0.4s" repeatCount="indefinite" path="M310,270 L310,295" />
      </circle>

      {/* Status footer */}
      <rect x="20" y="372" width="540" height="20" rx="5" fill="rgba(255,255,255,0.03)" />
      <circle cx="36" cy="382" r="4" fill="#10b981">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="46" y="386" fill="#10b981" fontSize="8" fontWeight="700">ALL SYSTEMS OPERATIONAL</text>
      <text x="230" y="386" fill="rgba(255,255,255,0.2)" fontSize="8">· Uptime 99.99% · 3 regions · 0 active incidents</text>
    </svg>
  )
}

/* ═══════════════════════════ PAGE ═══════════════════════════ */

export default function AICloudDeploymentPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#06101a" }}>
      <style>{`
        @keyframes floatCloud { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-18px);} }
        @keyframes blinkDot { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
        @keyframes tickerMove { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .float-cloud { animation: floatCloud 9s ease-in-out infinite; }
        .blink-dot { animation: blinkDot 1.4s ease-in-out infinite; }
        .ticker-move { animation: tickerMove 32s linear infinite; }
      `}</style>

      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Atmospheric background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[700px]"
            style={{ background: "radial-gradient(ellipse at top right, rgba(56,189,248,0.1), transparent 65%)", filter: "blur(20px)" }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[500px]"
            style={{ background: "radial-gradient(ellipse at bottom left, rgba(99,102,241,0.08), transparent 65%)", filter: "blur(30px)" }} />
        </div>
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #38bdf8, #6366f1, transparent)" }} />

        {/* Faint cloud dashes */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 w-full">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8"
                style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)" }}>
                <Cloud className="h-4 w-4 text-sky-400" />
                <span className="text-sm font-bold text-sky-300">AI Cloud Deployment</span>
                <span className="w-2 h-2 rounded-full bg-sky-400 blink-dot" />
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white mb-6">
                Ship AI models to<br />
                <span style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #10b981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  production, fast.
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
                We design, deploy, and manage cloud-native AI infrastructure on AWS, GCP, and Azure — Kubernetes-orchestrated, GPU-optimised, and built for 99.99% uptime from day one.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" asChild className="rounded-xl px-9 py-6 text-base font-black border-0 hover:scale-105 transition-all group"
                  style={{ background: "linear-gradient(135deg, #0284c7, #4f46e5)", boxShadow: "0 0 40px rgba(56,189,248,0.3)" }}>
                  <Link href="/contact">
                    Deploy My AI Model
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" asChild className="rounded-xl border text-slate-300 hover:text-white hover:bg-white/5 px-9 py-6 font-semibold"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <Link href="/contact">Get Architecture Review</Link>
                </Button>
              </div>

              {/* Metric pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {metrics.map((m) => {
                  const Icon = m.icon
                  return (
                    <div key={m.label} className="rounded-2xl p-4 text-center"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <Icon className="h-4 w-4 mx-auto mb-2 text-sky-400 opacity-70" />
                      <div className="text-2xl font-black text-white">{m.value}</div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Architecture SVG */}
            <div className="relative float-cloud">
              <div className="rounded-3xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(56,189,248,0.15)", boxShadow: "0 0 80px rgba(56,189,248,0.07)" }}>
                {/* Chrome */}
                <div className="flex items-center justify-between px-5 py-3" style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    </div>
                    <span className="ml-2 text-xs text-slate-500 font-mono">cloud-arch.prod</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 blink-dot" />
                    <span className="text-xs font-mono text-emerald-400">ALL HEALTHY</span>
                  </div>
                </div>
                <div style={{ aspectRatio: "580/400" }}>
                  <CloudArchSVG />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 rounded-xl px-4 py-2.5"
                style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.3)", backdropFilter: "blur(12px)" }}>
                <div className="text-xs font-bold text-sky-400">🖥️ GPU Utilisation</div>
                <div className="text-xl font-black text-white">94%</div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl px-4 py-2.5"
                style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", backdropFilter: "blur(12px)" }}>
                <div className="text-xs font-bold text-emerald-400">💸 Monthly savings</div>
                <div className="text-xl font-black text-white">$28,400</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TECH TICKER ══════════ */}
      <section className="py-5 border-y overflow-hidden" style={{ background: "rgba(56,189,248,0.04)", borderColor: "rgba(56,189,248,0.12)" }}>
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Cloud & MLOps Stack</p>
        <div className="flex overflow-hidden">
          <div className="flex items-center gap-6 ticker-move whitespace-nowrap">
            {[...deployStack, ...deployStack, ...deployStack].map((t, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0 rounded-full px-4 py-2"
                style={{ background: `${t.color}10`, border: `1px solid ${t.color}25` }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
                <span className="text-sm font-semibold" style={{ color: t.color }}>{t.name}</span>
                <span className="text-xs text-slate-600">// {t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CLOUD PROVIDERS ══════════ */}
      <section className="py-24" style={{ background: "#06101a" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#7dd3fc" }}>Cloud Providers</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              AWS, GCP, Azure —<br className="hidden sm:block" /> or all three.
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">We're certified on all major cloud platforms and take a provider-agnostic approach to avoid lock-in.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {providers.map((p) => (
              <div key={p.name} className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {/* Top accent */}
                <div className="h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div className="p-7">
                  {/* Logo circle */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black mb-5"
                    style={{ background: `${p.color}18`, border: `1px solid ${p.color}35`, color: p.color }}>
                    {p.logo}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-black text-white">{p.name}</h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}>
                      {p.badge}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {p.services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-slate-400">
                        <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" style={{ color: p.color }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ DEPLOY SERVICES GRID ══════════ */}
      <section className="py-24 border-y" style={{ background: "#08131f", borderColor: "rgba(56,189,248,0.1)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#7dd3fc" }}>What We Deploy & Manage</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Full-stack AI cloud<br className="hidden sm:block" /> engineering
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deployServices.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${s.accent}10, transparent)` }} />
                  <div className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }} />

                  <div className="relative p-8">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}30` }}>
                      <Icon className="h-6 w-6" style={{ color: s.accent }} />
                    </div>
                    <h3 className="text-lg font-black text-white mb-3 leading-snug">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.body}</p>
                    <ul className="space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-slate-400">
                          <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" style={{ color: s.accent }} />
                          {b}
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

      {/* ══════════ SLA & MANAGED SERVICE ══════════ */}
      <section className="py-24" style={{ background: "#06101a" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Left: Managed SLA card */}
            <div className="rounded-3xl overflow-hidden"
              style={{ background: "rgba(56,189,248,0.04)", border: "1px solid rgba(56,189,248,0.15)" }}>
              {/* Header */}
              <div className="px-8 py-6 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(56,189,248,0.1)", background: "rgba(56,189,248,0.04)" }}>
                <div>
                  <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-1">Managed Service</p>
                  <h3 className="text-xl font-black text-white">Always-On SLA</h3>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(56,189,248,0.15)", border: "1px solid rgba(56,189,248,0.3)" }}>
                  <Shield className="h-6 w-6 text-sky-400" />
                </div>
              </div>

              {/* SLA items */}
              <div className="p-8 space-y-4">
                {slaFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-sky-400" />
                    <span className="text-sm font-semibold text-slate-200">{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Uptime bar */}
              <div className="px-8 pb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400">90-day Uptime</span>
                  <span className="text-xs font-black text-sky-400">99.99%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5">
                  <div className="h-2 rounded-full" style={{ width: "99.9%", background: "linear-gradient(90deg, #38bdf8, #6366f1)" }} />
                </div>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#7dd3fc" }}>Managed Infrastructure</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
                We own the infra.<br />
                <span style={{ background: "linear-gradient(135deg, #38bdf8, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  You own the model.
                </span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                When you ship with DGCrux, you get a dedicated cloud engineering team managing your infrastructure 24/7 — so your ML team focuses entirely on model quality, not on-call rotations.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: Clock, label: "24/7 monitoring & on-call rotation" },
                  { icon: RefreshCw, label: "Weekly infrastructure health reviews" },
                  { icon: DollarSign, label: "Monthly cost optimisation reports" },
                  { icon: AlertTriangle, label: "Proactive incident prevention" },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-center gap-3 text-slate-300">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>
                        <Icon className="h-4 w-4 text-sky-400" />
                      </div>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>
                  )
                })}
              </div>
              <Button asChild className="rounded-xl px-8 py-5 font-bold border-0 hover:scale-105 transition-all group"
                style={{ background: "linear-gradient(135deg, #0284c7, #4f46e5)", boxShadow: "0 0 30px rgba(56,189,248,0.25)" }}>
                <Link href="/contact">
                  Get a Cloud Audit <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-36 overflow-hidden" style={{ background: "#06101a" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
            style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.14) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)", filter: "blur(40px)" }} />
        </div>
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #38bdf8, #6366f1, transparent)" }} />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Status widget */}
          <div className="inline-flex items-center gap-4 rounded-2xl px-6 py-4 mb-12"
            style={{ background: "rgba(56,189,248,0.06)", border: "1px solid rgba(56,189,248,0.2)" }}>
            <div className="flex flex-col items-start gap-1 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 blink-dot" />
                <span className="text-emerald-400 font-bold">3 regions · 0 incidents · 99.99% uptime</span>
              </div>
              <span className="text-slate-500">AWS us-east-1 · GCP europe-west · Azure asia-se</span>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.0] mb-6">
            Your AI model deserves<br />
            <span style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #10b981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              production-grade infra
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us your model, your traffic expectations, and your cloud preference. We'll architect and deploy it with full observability, auto-scaling, and a 99.99% SLA.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="rounded-xl px-12 py-7 text-lg font-black border-0 hover:scale-105 transition-all group"
              style={{ background: "linear-gradient(135deg, #0284c7, #4f46e5)", boxShadow: "0 0 60px rgba(56,189,248,0.35)" }}>
              <Link href="/contact">
                Start Cloud Deployment <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
