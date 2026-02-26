"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Target, BarChart3, Users, Lightbulb, Zap, ArrowRight, CheckCircle2,
  Star, Clock, TrendingUp, Layers, Rocket, Map, GitBranch, MessageSquare, Compass,
} from "lucide-react"

const services = [
  { icon: Target, title: "Product Strategy", description: "Define a compelling product vision, north-star metrics, and a 12-month roadmap grounded in market data and user insights — not guesswork.", color: "from-rose-500 to-pink-600", bg: "bg-rose-500/10", border: "border-rose-500/20", highlight: "text-rose-600", tag: "Vision · Roadmap · OKRs" },
  { icon: BarChart3, title: "Product Analytics", description: "Instrument your product with the right events and funnels. Turn raw behavioural data into prioritisation signals that every stakeholder trusts.", color: "from-violet-500 to-purple-600", bg: "bg-violet-500/10", border: "border-violet-500/20", highlight: "text-violet-600", tag: "Mixpanel · Amplitude · GA4" },
  { icon: Users, title: "User Research", description: "Qualitative interviews, Jobs-to-be-Done mapping, and moderated usability tests. Validate assumptions before committing engineering resources.", color: "from-blue-500 to-cyan-500", bg: "bg-blue-500/10", border: "border-blue-500/20", highlight: "text-blue-600", tag: "Interviews · JTBD · Usability" },
  { icon: Lightbulb, title: "Feature Planning", description: "RICE and value/effort frameworks to ruthlessly prioritise your backlog. Every sprint delivers maximum value against your business goals.", color: "from-amber-500 to-orange-500", bg: "bg-amber-500/10", border: "border-amber-500/20", highlight: "text-amber-600", tag: "RICE · MoSCoW · Backlog" },
  { icon: Zap, title: "Agile Management", description: "Certified PMs running your sprints, standups, retros, and stakeholder reporting. We keep cross-functional teams aligned and moving fast.", color: "from-emerald-500 to-teal-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", highlight: "text-emerald-600", tag: "Scrum · Kanban · SAFe" },
  { icon: Map, title: "Go-to-Market Planning", description: "Launch sequencing, pricing strategy, beta programme management, and launch metric tracking. We get your product to market and help it stick.", color: "from-indigo-500 to-blue-600", bg: "bg-indigo-500/10", border: "border-indigo-500/20", highlight: "text-indigo-600", tag: "GTM · Beta · Launch" },
]

const process = [
  { step: "01", icon: Compass, title: "Discovery & Alignment", description: "Stakeholder interviews, competitive analysis, and current-state assessment. Output: agreed problem statement and success metrics." },
  { step: "02", icon: Target, title: "Strategy & Roadmap", description: "Vision definition, OKR setting, and a prioritised 3-horizon roadmap with clear ownership and dependencies mapped." },
  { step: "03", icon: Users, title: "User Research", description: "Qualitative research and quantitative analysis to validate assumptions and surface the most impactful opportunity areas." },
  { step: "04", icon: Lightbulb, title: "Ideation & Prioritisation", description: "Facilitated product workshops, solution hypotheses, and RICE scoring to build a focused, evidence-backed sprint backlog." },
  { step: "05", icon: Zap, title: "Agile Execution", description: "Sprint ceremonies, backlog grooming, and stakeholder status updates. Engineering and design aligned sprint-by-sprint." },
  { step: "06", icon: BarChart3, title: "Measure & Iterate", description: "Post-launch metric reviews, A/B test analysis, and continuous backlog refinement based on real usage data." },
]

const benefits = [
  { icon: TrendingUp, text: "Clear vision & prioritised roadmap" },
  { icon: Users, text: "Deep user insights driving decisions" },
  { icon: Clock, text: "Faster time-to-market" },
  { icon: Target, text: "OKR-aligned feature planning" },
  { icon: Star, text: "Reduced wasted engineering effort" },
  { icon: CheckCircle2, text: "Higher product success rates" },
]

const tools = ["Jira", "Confluence", "Notion", "Linear", "Figma", "Miro", "Mixpanel", "Amplitude", "Hotjar", "ProductBoard", "Aha!", "Roadmunk"]

const stats = [
  { value: "120+", label: "Products Launched" },
  { value: "3×", label: "Avg. Revenue Growth" },
  { value: "40%", label: "Wasted Dev Effort Reduced" },
  { value: "30+", label: "Product Managers" },
]

export default function ProductManagementPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0010] via-[#1a0020] to-[#080010]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,70,239,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.18),transparent_55%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(217,70,239,0.14) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-24 left-16 w-80 h-80 rounded-full bg-fuchsia-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-violet-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-300 mb-8 backdrop-blur-sm">
              <Target className="h-4 w-4" /> Product Management
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Products Built on{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">Strategy & Insight</span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              We bridge business goals and user needs with proven product practices — from roadmap to launch and beyond. No guesswork, just data-driven product leadership.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-fuchsia-500/30 transition-all hover:scale-105">
                <Link href="/contact">Start Your Product Journey <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-fuchsia-500/30 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gradient-to-b from-[#fdf4ff] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-1.5 text-sm font-medium text-fuchsia-700 mb-5">
              <Layers className="h-4 w-4" /> What We Do
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              End-to-End{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">Product Management</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">From strategy to shipping — every product discipline you need under one experienced team.</p>
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
      <section className="py-28 bg-gradient-to-b from-[#0f0010] to-[#1a0020] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(217,70,239,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-300 mb-5">
              <GitBranch className="h-4 w-4" /> Our Process
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              How We{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Ship Great Products</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Six stages that take your product from ambiguous idea to validated, data-backed market success.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-fuchsia-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-fuchsia-500/10 transition-colors select-none leading-none">{item.step}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/15 border border-fuchsia-500/20 group-hover:bg-fuchsia-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-fuchsia-400" />
                  </div>
                  <div className="text-xs font-bold text-fuchsia-400 tracking-widest uppercase mb-2">Step {item.step}</div>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-1.5 text-sm font-medium text-fuchsia-700 mb-6">
                <Star className="h-4 w-4" /> Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                PMs who think like{" "}
                <span className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">founders</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Our product managers have shipped products at startups and enterprises alike. They care deeply about outcomes, not outputs — and they'll challenge assumptions that put your roadmap at risk.
              </p>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 text-white border-0 px-8 shadow-lg shadow-fuchsia-500/25 hover:scale-105 transition-all">
                <Link href="/contact">Talk to a Product Manager <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-fuchsia-200 hover:bg-fuchsia-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-100 group-hover:bg-fuchsia-200 transition-colors">
                      <Icon className="h-5 w-5 text-fuchsia-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 leading-snug pt-2">{b.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Tools We Work With</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-fuchsia-300 hover:text-fuchsia-600 hover:shadow-md transition-all duration-200 cursor-default">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-700 via-violet-700 to-[#0f0010]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,70,239,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Rocket className="h-4 w-4 text-fuchsia-300" /> Ready to build a product people love?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Turn your vision into a{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 to-pink-300 bg-clip-text text-transparent">market-winning product</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free product strategy session. We'll review your roadmap, identify gaps, and recommend high-impact opportunities for your next quarter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-fuchsia-700 hover:bg-fuchsia-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all">
              <Link href="/contact">Book a Strategy Session <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
