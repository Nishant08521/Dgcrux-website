"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Brain,
  Target,
  BarChart3,
  Users,
  ArrowRight,
  ChevronRight,
  Lightbulb,
  TrendingUp,
  Shield,
  Compass,
  Map,
  Microscope,
  CheckCheck,
  Sparkles,
  Building2,
  LineChart,
} from "lucide-react"

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const pillars = [
  {
    number: "01",
    icon: Microscope,
    title: "AI Readiness Assessment",
    headline: "Know exactly where you stand before you spend a dollar",
    body: "We audit your data infrastructure, talent, processes, and technology stack against a proven AI maturity framework. You'll receive a scored assessment report with a clear gap analysis and a prioritised action plan.",
    bullets: ["Data quality & governance audit", "Talent & skill gap mapping", "Technology landscape review", "Competitor AI benchmarking"],
  },
  {
    number: "02",
    icon: Map,
    title: "AI Strategy & Roadmap",
    headline: "A 12-month plan that leadership will actually execute",
    body: "We co-create a board-ready AI strategy that maps specific use cases to measurable business outcomes. Every initiative is sequenced by impact, risk, and resource requirements — no vague frameworks.",
    bullets: ["Prioritised use-case pipeline", "Build vs. buy vs. partner analysis", "Risk & compliance framework", "Quarterly milestone planning"],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "ROI Modelling & Business Case",
    headline: "Make AI investments that finance will approve",
    body: "We build rigorous financial models for each proposed AI initiative — quantifying revenue uplift, cost savings, and payback periods. You'll have the data needed to secure executive buy-in and board approval.",
    bullets: ["NPV & IRR projections per use case", "Sensitivity & scenario analysis", "Cost-of-delay quantification", "Benchmark data from 200+ projects"],
  },
  {
    number: "04",
    icon: Users,
    title: "Change Management & Adoption",
    headline: "Technology only works when your people embrace it",
    body: "We design the organisational and cultural change programme that makes AI adoption stick. Training curricula, stakeholder engagement plans, and governance frameworks tailored to your structure.",
    bullets: ["AI literacy training programmes", "Stakeholder engagement design", "AI governance & ethics policy", "Adoption KPI dashboards"],
  },
]

const outcomes = [
  { icon: TrendingUp, stat: "3.2×", label: "Average ROI within 18 months", sub: "across 120+ AI engagements" },
  { icon: Lightbulb, stat: "47", label: "Avg. use cases identified", sub: "per client assessment" },
  { icon: CheckCheck, stat: "89%", label: "Strategy execution rate", sub: "vs. 34% industry average" },
  { icon: Shield, stat: "100%", label: "Compliance maintained", sub: "GDPR, SOC 2, HIPAA aligned" },
]

const industries = [
  { name: "Financial Services", icon: Building2 },
  { name: "Healthcare & Life Science", icon: Microscope },
  { name: "Retail & eCommerce", icon: TrendingUp },
  { name: "Manufacturing", icon: LineChart },
  { name: "Professional Services", icon: Compass },
  { name: "Technology", icon: Brain },
]

const faqs = [
  { q: "How long does a typical AI strategy engagement take?", a: "Most engagements run 6–12 weeks depending on scope. Phase 1 (assessment) takes 2–3 weeks; strategy development takes a further 3–6 weeks, with a final validation workshop before handoff." },
  { q: "Do we need to have existing AI capabilities?", a: "No. Many clients come to us at the very beginning of their AI journey. Our assessment covers readiness across all maturity levels — from AI-naive to partially deployed." },
  { q: "How do you ensure the strategy gets implemented?", a: "We build implementation support into every engagement — with quarterly check-ins, an execution scorecard, and an optional embedded advisory retainer to support your team through delivery." },
]

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

export default function AIStrategyConsultingPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO: Split layout ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#06080f]">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(99,102,241,0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(16,185,129,0.12),transparent)]" />
        </div>
        {/* Diagonal line grid */}
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #6366f1 0, #6366f1 1px, transparent 0, transparent 50%)", backgroundSize: "30px 30px" }} />

        {/* Floating nodes — decorative AI motif */}
        <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none hidden lg:block">
          <div className="relative w-full h-full">
            {/* Central glowing orb */}
            <div className="absolute top-1/2 right-24 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-500/20 blur-[60px]" />
            <div className="absolute top-1/2 right-24 -translate-y-1/2 w-32 h-32 rounded-full bg-indigo-400/30 blur-[20px]" />
            {/* Node ring */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
              const rad = (deg * Math.PI) / 180
              const r = 160
              const cx = 50 + r * Math.cos(rad) / 4
              const cy = 50 + r * Math.sin(rad) / 4
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-indigo-400/60 border border-indigo-300/40"
                  style={{ right: `calc(${30 - Math.cos(rad) * 22}%)`, top: `calc(${50 + Math.sin(rad) * 22}%)`, boxShadow: "0 0 12px rgba(99,102,241,0.6)" }}
                />
              )
            })}
            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 500 500">
              <circle cx="380" cy="250" r="140" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx="380" cy="250" r="90" fill="none" stroke="#818cf8" strokeWidth="1" strokeDasharray="3 6" />
              <line x1="380" y1="110" x2="380" y2="390" stroke="#6366f1" strokeWidth="0.5" />
              <line x1="240" y1="250" x2="520" y2="250" stroke="#6366f1" strokeWidth="0.5" />
              <line x1="281" y1="151" x2="479" y2="349" stroke="#6366f1" strokeWidth="0.5" />
              <line x1="281" y1="349" x2="479" y2="151" stroke="#6366f1" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-indigo-400" />
              <span className="text-sm font-semibold tracking-[0.2em] text-indigo-400 uppercase">AI Strategy &amp; Consulting</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight mb-8">
              The AI strategy<br />
              your board has<br />
              been waiting for
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
              We turn AI ambition into executable strategy. Not slide decks — a living roadmap with business cases, risk frameworks, and an adoption plan that actually works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" asChild className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white border-0 px-8 py-6 text-base font-bold shadow-xl shadow-indigo-500/30 transition-all hover:scale-105 hover:shadow-indigo-500/50 group">
                <Link href="/contact">
                  Book a Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild className="rounded-xl text-slate-300 hover:text-white hover:bg-white/5 px-8 py-6 text-base font-semibold border border-white/10 transition-all">
                <Link href="/case-studies">See Client Results</Link>
              </Button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["bg-indigo-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500"].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-[#06080f] flex items-center justify-center text-white text-xs font-bold`}>{String.fromCharCode(65 + i)}</div>
                  ))}
                </div>
                <span className="text-sm text-slate-400">120+ enterprise clients advised</span>
              </div>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-amber-400 text-sm">★</span>)}
                <span className="text-sm text-slate-400">4.9/5 avg. client score</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES BAR ── */}
      <section className="bg-indigo-950 border-y border-indigo-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-indigo-900">
            {outcomes.map((o) => {
              const Icon = o.icon
              return (
                <div key={o.label} className="px-8 py-10 text-center group hover:bg-indigo-900/30 transition-colors">
                  <Icon className="h-6 w-6 text-indigo-400 mx-auto mb-3" />
                  <div className="text-4xl font-black text-white mb-1">{o.stat}</div>
                  <div className="text-sm font-semibold text-indigo-200 mb-0.5">{o.label}</div>
                  <div className="text-xs text-indigo-400">{o.sub}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PILLARS: Alternating spotlight rows ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-3">What We Deliver</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Four pillars of an<br className="hidden sm:block" /> AI strategy that sticks
            </h2>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              const isEven = idx % 2 === 1
              return (
                <div
                  key={pillar.number}
                  className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${isEven ? "from-indigo-50 to-purple-50 border border-indigo-100" : "from-gray-50 to-slate-50 border border-gray-100"} p-10 lg:p-14 hover:shadow-2xl transition-all duration-500`}
                >
                  {/* Large number backdrop */}
                  <div className="absolute top-6 right-8 text-[8rem] font-black leading-none text-black/[0.04] select-none pointer-events-none hidden lg:block">
                    {pillar.number}
                  </div>

                  <div className={`grid gap-12 lg:grid-cols-2 items-center ${isEven ? "lg:rtl" : ""}`}>
                    <div className={isEven ? "lg:ltr" : ""}>
                      {/* Step label */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">{pillar.title}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-5">
                        {pillar.headline}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg mb-8">{pillar.body}</p>

                      <Link href="/contact" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all text-sm group/link">
                        Learn more <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Bullet list panel */}
                    <div className={`rounded-2xl p-8 ${isEven ? "bg-white shadow-lg border border-indigo-100" : "bg-indigo-600 shadow-xl shadow-indigo-500/20"}`}>
                      <p className={`text-xs font-bold tracking-widest uppercase mb-6 ${isEven ? "text-indigo-500" : "text-indigo-200"}`}>
                        Key Deliverables
                      </p>
                      <ul className="space-y-4">
                        {pillar.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center ${isEven ? "bg-indigo-100" : "bg-white/20"}`}>
                              <ChevronRight className={`h-3 w-3 ${isEven ? "text-indigo-600" : "text-white"}`} />
                            </div>
                            <span className={`text-sm font-semibold leading-snug ${isEven ? "text-gray-700" : "text-white"}`}>{b}</span>
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

      {/* ── INDUSTRIES ── */}
      <section className="py-24 bg-[#06080f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(99,102,241,0.1),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">Industry Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">We speak your industry's language</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">Our consultants bring deep domain knowledge across six major verticals — so recommendations are grounded in industry reality, not generic frameworks.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <div key={ind.name} className="group flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-6 text-center hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 leading-tight">{ind.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── APPROACH: Horizontal numbered timeline ── */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white overflow-x-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">From kickoff to strategy in 10 weeks</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal connector line */}
            <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200" />

            <div className="grid gap-8 lg:grid-cols-5">
              {[
                { w: "Week 1–2", title: "Kickoff & Scoping", desc: "Stakeholder interviews, data collection, and project scoping to baseline current state." },
                { w: "Week 2–4", title: "AI Assessment", desc: "Deep-dive across data, talent, process, and technology to produce the maturity scorecard." },
                { w: "Week 4–6", title: "Opportunity Mapping", desc: "Identify and prioritise AI use cases by impact, feasibility, and strategic alignment." },
                { w: "Week 6–8", title: "Business Case Build", desc: "Financial modelling and ROI projections for the top 5–10 prioritised opportunities." },
                { w: "Week 8–10", title: "Strategy & Handoff", desc: "Board-ready strategy document, 12-month roadmap, and executive readout session." },
              ].map((step, i) => (
                <div key={step.title} className="relative text-center group">
                  {/* Circle */}
                  <div className="relative mx-auto mb-6 w-16 h-16 rounded-full bg-white border-2 border-indigo-200 group-hover:border-indigo-500 group-hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center shadow-md">
                    <span className="text-lg font-black text-indigo-600 group-hover:text-white transition-colors">{i + 1}</span>
                  </div>
                  <div className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-2">{step.w}</div>
                  <h3 className="text-base font-black text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-3">Common Questions</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center transition-colors mt-0.5">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: Minimal, high-contrast ── */}
      <section className="relative py-32 bg-[#06080f] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(99,102,241,0.25),transparent)]" />
        {/* Diagonal accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-indigo-500/30 bg-indigo-950/60 backdrop-blur-md p-12 sm:p-16 text-center">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500 mx-auto mb-8 flex items-center justify-center shadow-xl shadow-indigo-500/50">
              <Brain className="h-7 w-7 text-white" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
              Your competitors are<br className="hidden sm:block" /> already moving
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              The organisations that define their AI strategy now will capture the value. Those that wait will spend twice as much catching up. Book a 30-minute call — no pitch, just a real conversation about your situation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white border-0 px-10 py-6 text-base font-bold shadow-2xl shadow-indigo-500/40 hover:scale-105 transition-all group">
                <Link href="/contact">
                  Book a Free 30-min Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-xl border-white/15 text-white hover:bg-white/5 px-10 py-6 text-base font-semibold hover:scale-105 transition-all">
                <Link href="/case-studies">Read Client Stories</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              No obligation. No sales pressure. Just an honest assessment of what's possible.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
