"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  MessageSquare, Zap, Brain, Globe, Shield, ArrowRight,
  CheckCircle2, Star, Users, Clock, TrendingUp, Sparkles,
  Bot, HeartHandshake, BarChart3, Lock, RefreshCw, ChevronRight,
  Send, Mic, Paperclip, SmilePlus,
} from "lucide-react"

/* ══════════════════════════════ DATA ══════════════════════════════ */

const features = [
  {
    icon: Brain,
    accent: "#e879f9",
    title: "Context-Aware Conversations",
    body: "Multi-turn memory that tracks intent, past queries, and user preferences across the entire session — never asking the same question twice.",
  },
  {
    icon: Globe,
    accent: "#38bdf8",
    title: "100+ Language Support",
    body: "Multilingual chatbots with auto-detection and seamless language switching. Serve a global audience without building separate bots.",
  },
  {
    icon: Zap,
    accent: "#fb923c",
    title: "Sub-Second Response",
    body: "Streaming LLM responses powered by GPT-4o, Claude 3.5, and Gemini — users see text appear as it's generated, just like ChatGPT.",
  },
  {
    icon: Shield,
    accent: "#34d399",
    title: "Guardrails & Safety",
    body: "Topic boundaries, profanity filters, hallucination detection, and PII masking. Enterprise-grade safety baked in by default.",
  },
  {
    icon: HeartHandshake,
    accent: "#a78bfa",
    title: "Seamless Human Handoff",
    body: "Intelligent escalation to live agents when confidence drops. Full conversation history transferred — zero repetition for the user.",
  },
  {
    icon: BarChart3,
    accent: "#f59e0b",
    title: "Deep Analytics Dashboard",
    body: "CSAT scores, resolution rates, drop-off flows, topic clustering — everything you need to continuously improve your chatbot.",
  },
]

const platforms = [
  { name: "Web Widget", color: "#38bdf8" },
  { name: "WhatsApp", color: "#34d399" },
  { name: "Slack", color: "#a78bfa" },
  { name: "MS Teams", color: "#60a5fa" },
  { name: "Telegram", color: "#38bdf8" },
  { name: "iOS / Android", color: "#fb923c" },
  { name: "Zendesk", color: "#f59e0b" },
  { name: "Intercom", color: "#e879f9" },
  { name: "REST API", color: "#94a3b8" },
]

const stats = [
  { value: "85%", label: "Avg. resolution without human", icon: CheckCircle2 },
  { value: "3×", label: "Faster than human support", icon: Zap },
  { value: "72%", label: "Reduction in support costs", icon: TrendingUp },
  { value: "4.8★", label: "Avg. CSAT across deployments", icon: Star },
]

const useCases = [
  {
    tag: "E-Commerce",
    title: "Shopping & Order Assistant",
    desc: "Handles order tracking, returns, product recommendations, and checkout queries — 24/7, across every channel.",
    accent: "#fb923c",
    messages: [
      { role: "user", text: "Where is my order #78421?" },
      { role: "bot", text: "Your order is in transit 📦 and will arrive by tomorrow, Feb 24th. Track it here →" },
    ],
  },
  {
    tag: "SaaS / Tech",
    title: "Customer Support Bot",
    desc: "Answers product questions, troubleshoots issues, and escalates to engineers — with full context attached.",
    accent: "#38bdf8",
    messages: [
      { role: "user", text: "How do I connect my Slack workspace?" },
      { role: "bot", text: "Go to Settings → Integrations → Slack, then click 'Add to Slack'. Need a walkthrough? 🚀" },
    ],
  },
  {
    tag: "Healthcare",
    title: "Patient Intake & FAQ Bot",
    desc: "Pre-screens patients, books appointments, answers clinical FAQs, and sends reminders — HIPAA-compliant.",
    accent: "#34d399",
    messages: [
      { role: "user", text: "I need to reschedule my appointment." },
      { role: "bot", text: "Of course! I've freed your slot for Feb 25th. Shall I book you for Feb 27th at 10 AM instead? 🗓" },
    ],
  },
]

const buildProcess = [
  { step: "01", title: "Discovery & Intent Mapping", desc: "We analyse your support tickets, FAQs, and user journeys to map every conversation flow." },
  { step: "02", title: "Model Selection & RAG Setup", desc: "Choose the right LLM + vector database. We ground your bot on your actual knowledge base." },
  { step: "03", title: "UI & Channel Integration", desc: "Pixel-perfect widget, branded to your product. Deployed on every channel you need." },
  { step: "04", title: "Testing, Safety & Launch", desc: "Red-team testing, guardrail tuning, and a phased rollout with live monitoring dashboards." },
]

/* ══════════════════════════════ ANIMATED CHAT SVG ══════════════════════════════ */
function ChatBubbleSVG() {
  return (
    <svg viewBox="0 0 420 540" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chatBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#130a1f" />
          <stop offset="100%" stopColor="#0c0817" />
        </linearGradient>
        <linearGradient id="botBubble" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="softShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#7c3aed" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Phone shell */}
      <rect x="10" y="10" width="400" height="520" rx="28" fill="url(#chatBg)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

      {/* Header */}
      <rect x="10" y="10" width="400" height="72" rx="28" fill="rgba(255,255,255,0.04)" />
      <rect x="10" y="54" width="400" height="28" fill="rgba(255,255,255,0.04)" />
      {/* Avatar */}
      <circle cx="50" cy="46" r="18" fill="url(#botBubble)" filter="url(#softShadow)" />
      <text x="50" y="51" textAnchor="middle" fill="white" fontSize="14">🤖</text>
      {/* Name + status */}
      <text x="76" y="40" fill="white" fontSize="13" fontWeight="700">DGCrux Assistant</text>
      <circle cx="76" cy="54" r="4" fill="#34d399" />
      <text x="84" y="57" fill="#34d399" fontSize="10" fontWeight="600">Online</text>

      {/* ── Message 1: User → "Hi! I need help with pricing." */}
      {/* User bubble */}
      <rect x="200" y="100" width="190" height="38" rx="18" rx2="4" fill="#7c3aed" opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="0.5s" fill="freeze" />
      </rect>
      <text x="295" y="123" textAnchor="middle" fill="white" fontSize="11" opacity="0">
        Hi! I need help with pricing 💬
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="0.5s" fill="freeze" />
      </text>

      {/* ── Typing indicator */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin="1.2s" fill="freeze" />
        <rect x="30" y="155" width="70" height="30" rx="15" fill="rgba(255,255,255,0.07)" />
        <circle cx="50" cy="170" r="4" fill="#a78bfa">
          <animate attributeName="cy" values="170;163;170" dur="0.6s" begin="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="65" cy="170" r="4" fill="#a78bfa">
          <animate attributeName="cy" values="170;163;170" dur="0.6s" begin="1.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="170" r="4" fill="#a78bfa">
          <animate attributeName="cy" values="170;163;170" dur="0.6s" begin="1.6s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ── Bot reply 1 */}
      <rect x="30" y="155" width="240" height="52" rx="18" fill="rgba(255,255,255,0.06)" opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="2.5s" fill="freeze" />
      </rect>
      <text opacity="0" fontSize="10.5" fill="rgba(255,255,255,0.9)">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="2.5s" fill="freeze" />
        <tspan x="46" y="175">Hey! 👋 Happy to help. Our plans</tspan>
        <tspan x="46" dy="15">start at $49/mo. Want a full breakdown?</tspan>
      </text>

      {/* ── Message 2: User "Yes please!" */}
      <rect x="240" y="224" width="150" height="34" rx="17" fill="#7c3aed" opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="3.4s" fill="freeze" />
      </rect>
      <text x="315" y="245" textAnchor="middle" fill="white" fontSize="11" opacity="0">
        Yes please! 🙌
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="3.4s" fill="freeze" />
      </text>

      {/* ── Bot reply 2 */}
      <rect x="30" y="274" width="260" height="88" rx="18" fill="rgba(255,255,255,0.06)" opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="4.2s" fill="freeze" />
      </rect>
      <text fontSize="10.5" fill="rgba(255,255,255,0.9)" opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="4.2s" fill="freeze" />
        <tspan x="46" y="295">📦 Starter — $49/mo · 5k msgs</tspan>
        <tspan x="46" dy="16">🚀 Growth — $149/mo · 50k msgs</tspan>
        <tspan x="46" dy="16">🏢 Enterprise — Custom pricing</tspan>
        <tspan x="46" dy="16" fill="#a78bfa">Want me to book a demo? 👇</tspan>
      </text>

      {/* ── CTA chip */}
      <rect x="30" y="374" width="160" height="30" rx="15" fill="url(#botBubble)" opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="4.9s" fill="freeze" />
      </rect>
      <text x="110" y="393" textAnchor="middle" fill="white" fontSize="10.5" fontWeight="700" opacity="0">
        Book a Free Demo →
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="4.9s" fill="freeze" />
      </text>

      {/* ── User satisfied reply */}
      <rect x="230" y="374" width="160" height="30" rx="15" fill="#7c3aed" opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="5.6s" fill="freeze" />
      </rect>
      <text x="310" y="393" textAnchor="middle" fill="white" fontSize="10.5" opacity="0">
        That's amazing! Let's go! 🎉
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="5.6s" fill="freeze" />
      </text>

      {/* ── CSAT stars */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.5s" begin="6.3s" fill="freeze" />
        <rect x="30" y="420" width="200" height="50" rx="14" fill="rgba(255,255,255,0.05)" />
        <text x="128" y="438" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">Rate this conversation</text>
        <text x="128" y="458" textAnchor="middle" fill="#f59e0b" fontSize="16">★★★★★</text>
      </g>

      {/* Input bar */}
      <rect x="20" y="487" width="380" height="36" rx="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="60" y="509" fill="rgba(255,255,255,0.25)" fontSize="10.5">Type a message…</text>
      {/* Send button */}
      <circle cx="382" cy="505" r="14" fill="url(#botBubble)" />
      <text x="382" y="510" textAnchor="middle" fill="white" fontSize="13">↑</text>
    </svg>
  )
}

/* ══════════════════════════════ USE-CASE MINI CHAT ══════════════════════════════ */
function MiniChat({ messages, accent }: { messages: { role: string; text: string }[]; accent: string }) {
  return (
    <div className="space-y-3 py-4">
      {messages.map((m, i) => (
        <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
          {m.role === "bot" && (
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5 text-sm"
              style={{ background: `${accent}22`, border: `1px solid ${accent}40` }}>🤖</div>
          )}
          <div className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
            style={{
              background: m.role === "user" ? accent : "rgba(255,255,255,0.07)",
              color: "white",
              borderBottomRightRadius: m.role === "user" ? "4px" : undefined,
              borderBottomLeftRadius: m.role === "bot" ? "4px" : undefined,
            }}>
            {m.text}
          </div>
        </div>
      ))}
      {/* Typing dots */}
      <div className="flex justify-start">
        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-2 text-sm"
          style={{ background: `${accent}22`, border: `1px solid ${accent}40` }}>🤖</div>
        <div className="rounded-2xl px-4 py-3 flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.07)", borderBottomLeftRadius: "4px" }}>
          {[0, 0.15, 0.3].map((d, i) => (
            <span key={i} className="w-2 h-2 rounded-full inline-block" style={{ background: accent, animation: `chatBounce 1s ${d}s ease-in-out infinite` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════ PAGE ══════════════════════════════ */

export default function AIChatbotDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#0a0612" }}>
      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-24px) scale(1.04);} }
        @keyframes floatB { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-16px) scale(1.02);} }
        @keyframes floatC { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-12px) rotate(6deg);} }
        @keyframes chatBounce { 0%,80%,100%{transform:translateY(0);} 40%{transform:translateY(-8px);} }
        @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2.2);opacity:0} }
        @keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .animate-float-a { animation: floatA 6s ease-in-out infinite; }
        .animate-float-b { animation: floatB 8s ease-in-out infinite; }
        .animate-float-c { animation: floatC 5s ease-in-out infinite; }
        .animate-marquee2 { animation: marqueeScroll 28s linear infinite; }
      `}</style>

      <Navbar />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">

        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-float-a absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="animate-float-b absolute bottom-32 right-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)", filter: "blur(50px)" }} />
          <div className="animate-float-c absolute top-1/2 left-10 w-[300px] h-[300px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)", filter: "blur(40px)" }} />

          {/* Floating chat bubbles background */}
          {[
            { x: "8%", y: "20%", text: "How can I help? 🤖", size: "text-xs", delay: "0s" },
            { x: "82%", y: "15%", text: "Cancel my order", size: "text-xs", delay: "0.5s" },
            { x: "5%", y: "65%", text: "Track my shipment 📦", size: "text-xs", delay: "1s" },
            { x: "80%", y: "70%", text: "I need a refund", size: "text-xs", delay: "1.5s" },
            { x: "45%", y: "88%", text: "Book a demo →", size: "text-xs", delay: "2s" },
          ].map((b, i) => (
            <div key={i} className="absolute pointer-events-none select-none rounded-2xl px-3 py-1.5 font-medium backdrop-blur-sm"
              style={{ left: b.x, top: b.y, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.25)", fontSize: "11px", animation: `floatB ${5 + i}s ${b.delay} ease-in-out infinite` }}>
              {b.text}
            </div>
          ))}
        </div>

        {/* Top shine line */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #a855f7, #fb923c, transparent)" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] items-center">

            {/* ── Left: Text ── */}
            <div>
              {/* Badge */}
              <div className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-8"
                style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.3)" }}>
                {/* Pulse ring */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" style={{ animation: "pulse-ring 1.4s ease-out infinite" }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-400" />
                </span>
                <span className="text-sm font-bold" style={{ color: "#d8b4fe" }}>AI Chatbot Development</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white mb-6">
                Chatbots that<br />
                actually{" "}
                <span className="relative inline-block">
                  <span style={{ background: "linear-gradient(135deg, #c084fc 0%, #fb923c 50%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    understand
                  </span>
                  {/* Underline squiggle */}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4" stroke="#c084fc" strokeWidth="2" fill="none" opacity="0.6" />
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
                We build intelligent, context-aware chatbots powered by GPT-4o, Claude 3.5, and Gemini. Deployed on your website, WhatsApp, Slack, and beyond. Live in days, not months.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" asChild className="rounded-full px-10 py-6 text-base font-black border-0 hover:scale-105 transition-all group"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #c2410c)", boxShadow: "0 0 50px rgba(168,85,247,0.35)" }}>
                  <Link href="/contact">
                    Build My Chatbot
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" asChild className="rounded-full border text-slate-300 hover:text-white hover:bg-white/5 px-10 py-6 font-semibold"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <Link href="/contact">See a Live Demo</Link>
                </Button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="rounded-2xl p-4 text-center"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <Icon className="h-4 w-4 mx-auto mb-2 text-purple-400" />
                      <div className="text-2xl font-black text-white">{s.value}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ── Right: Animated Chat UI ── */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-6 rounded-[3rem] opacity-25"
                style={{ background: "radial-gradient(ellipse, #7c3aed, transparent 70%)", filter: "blur(30px)" }} />

              <div className="relative rounded-[2rem] overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(168,85,247,0.2)", boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.1)" }}>
                <div style={{ aspectRatio: "420/540" }}>
                  <ChatBubbleSVG />
                </div>
              </div>

              {/* Floating chips */}
              <div className="animate-float-a absolute -right-6 top-16 rounded-xl px-4 py-2.5"
                style={{ background: "rgba(251,146,60,0.12)", border: "1px solid rgba(251,146,60,0.3)", backdropFilter: "blur(12px)" }}>
                <div className="text-xs font-bold text-orange-400">🔥 Response time</div>
                <div className="text-lg font-black text-white">&lt; 800ms</div>
              </div>
              <div className="animate-float-b absolute -left-6 bottom-24 rounded-xl px-4 py-2.5"
                style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)", backdropFilter: "blur(12px)" }}>
                <div className="text-xs font-bold text-emerald-400">✓ CSAT Score</div>
                <div className="text-lg font-black text-white">4.8 / 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PLATFORM TICKER ═══════════════ */}
      <section className="py-5 border-y overflow-hidden" style={{ background: "rgba(168,85,247,0.05)", borderColor: "rgba(168,85,247,0.12)" }}>
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Deploy Everywhere</p>
        <div className="flex overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee2 whitespace-nowrap">
            {[...platforms, ...platforms, ...platforms].map((p, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0 rounded-full px-4 py-2"
                style={{ background: `${p.color}10`, border: `1px solid ${p.color}25` }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                <span className="text-sm font-semibold" style={{ color: p.color }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES GRID ═══════════════ */}
      <section className="py-24" style={{ background: "#0a0612" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c084fc" }}>What We Build In</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Not just chatbots.<br className="hidden sm:block" /> Intelligent conversation engines.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="group relative rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${f.accent}12, transparent)` }} />
                  {/* Accent line top */}
                  <div className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${f.accent}, transparent)` }} />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${f.accent}15`, border: `1px solid ${f.accent}30` }}>
                      <Icon className="h-6 w-6" style={{ color: f.accent }} />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ USE CASE CARDS WITH MINI-CHAT ═══════════════ */}
      <section className="py-24 border-y" style={{ background: "#0d0a18", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c084fc" }}>Real-World Examples</p>
            <h2 className="text-4xl font-black text-white">See it in action</h2>
            <p className="mt-3 text-slate-400 max-w-xl mx-auto">Each card shows a live demo of how our chatbots handle real conversations in that industry.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {useCases.map((uc) => (
              <div key={uc.tag} className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {/* Card header */}
                <div className="px-6 pt-6 pb-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: `${uc.accent}15`, border: `1px solid ${uc.accent}30`, color: uc.accent }}>
                    {uc.tag}
                  </span>
                  <h3 className="text-lg font-black text-white mt-3 mb-1">{uc.title}</h3>
                  <p className="text-sm text-slate-400">{uc.desc}</p>
                </div>

                {/* Chat preview area */}
                <div className="mx-4 mb-4 rounded-xl px-4" style={{ background: "rgba(0,0,0,0.3)", border: `1px solid ${uc.accent}20` }}>
                  <MiniChat messages={uc.messages} accent={uc.accent} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BUILD PROCESS ═══════════════ */}
      <section className="py-24" style={{ background: "#0a0612" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c084fc" }}>How We Work</p>
            <h2 className="text-4xl font-black text-white">From brief to live chatbot<br className="hidden sm:block" /> in 2–4 weeks</h2>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-10 left-0 right-0 h-px hidden lg:block"
              style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), rgba(251,146,60,0.3), transparent)" }} />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {buildProcess.map((p, i) => (
                <div key={p.step} className="relative rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {/* Step number — big faded in background */}
                  <div className="absolute top-4 right-5 text-6xl font-black"
                    style={{ color: "rgba(168,85,247,0.07)", lineHeight: 1 }}>
                    {p.step}
                  </div>
                  {/* Circle + connector dot */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5 text-sm font-black text-white"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #c2410c)", boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}>
                    {i + 1}
                  </div>
                  <h3 className="text-base font-black text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-36 overflow-hidden" style={{ background: "#0a0612" }}>
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-float-a absolute top-0 left-1/3 w-[600px] h-[400px]"
            style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.18), transparent 70%)", filter: "blur(50px)" }} />
          <div className="animate-float-b absolute bottom-0 right-1/3 w-[500px] h-[350px]"
            style={{ background: "radial-gradient(ellipse, rgba(251,146,60,0.12), transparent 70%)", filter: "blur(50px)" }} />
        </div>
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #a855f7, #fb923c, transparent)" }} />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

          {/* Animated chat bubble above headline */}
          <div className="inline-flex flex-col items-start gap-2 rounded-2xl px-6 py-4 mb-12 text-left"
            style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)" }}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                style={{ background: "linear-gradient(135deg,#7c3aed,#c2410c)" }}>🤖</div>
              <span className="text-sm font-bold text-purple-300">DGCrux Chatbot</span>
              <span className="text-xs text-slate-500 ml-auto">Just now</span>
            </div>
            <p className="text-sm text-slate-300 max-w-xs leading-relaxed">
              "Hi there! 👋 Ready to build a chatbot that actually converts? Let's talk about your use case."
            </p>
            {/* Typing indicator */}
            <div className="flex items-center gap-1.5 mt-1">
              {[0, 0.15, 0.3].map((d, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-purple-500"
                  style={{ animation: `chatBounce 1s ${d}s ease-in-out infinite` }} />
              ))}
              <span className="text-xs text-slate-600 ml-1">typing…</span>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.0] mb-6">
            Your chatbot is<br />
            <span style={{ background: "linear-gradient(135deg, #c084fc 0%, #fb923c 60%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              waiting to be built
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us your use case, your channels, and your must-haves. We'll scope an architecture, demo a prototype, and deploy it — typically in under 4 weeks.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-black border-0 hover:scale-105 transition-all group"
              style={{ background: "linear-gradient(135deg, #7c3aed, #c2410c)", boxShadow: "0 0 60px rgba(168,85,247,0.4)" }}>
              <Link href="/contact">
                Start the Conversation <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="rounded-full border text-white hover:bg-white/5 px-12 py-7 text-lg font-semibold hover:scale-105 transition-all"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <Link href="/case-studies">View Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
