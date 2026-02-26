"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  TestTube, Bug, Shield, Zap, Target, ArrowRight, CheckCircle2,
  Star, Clock, TrendingUp, Layers, Rocket, GitBranch, Activity, Search, Cpu, RefreshCw,
} from "lucide-react"

const services = [
  { icon: TestTube, title: "Manual Testing", description: "Exploratory testing by senior QA engineers who think like real users. Edge cases, regression suites, and UX walkthroughs that automation misses.", color: "from-cyan-500 to-blue-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20", highlight: "text-cyan-600", tag: "Exploratory · Regression · UAT" },
  { icon: Zap, title: "Automated Testing", description: "Robust E2E, integration, and unit test suites using Cypress, Playwright, Selenium, and pytest. 90%+ coverage targets baked into every project.", color: "from-emerald-500 to-teal-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", highlight: "text-emerald-600", tag: "Cypress · Playwright · pytest" },
  { icon: Bug, title: "Bug Tracking & Reporting", description: "Structured defect lifecycle management with severity triage, root-cause analysis, and developer-friendly reproduction steps that accelerate fixes.", color: "from-rose-500 to-pink-600", bg: "bg-rose-500/10", border: "border-rose-500/20", highlight: "text-rose-600", tag: "Jira · Linear · Detailed Reports" },
  { icon: Shield, title: "Security Testing", description: "OWASP top-10 audits, penetration testing, DAST scanning, and dependency vulnerability reviews. We find the holes before attackers do.", color: "from-violet-500 to-purple-600", bg: "bg-violet-500/10", border: "border-violet-500/20", highlight: "text-violet-600", tag: "OWASP · Pen Testing · DAST" },
  { icon: Target, title: "Performance Testing", description: "Load, stress, and soak testing with k6, JMeter, and Gatling. We identify bottlenecks and validate SLAs before your biggest traffic events.", color: "from-amber-500 to-orange-500", bg: "bg-amber-500/10", border: "border-amber-500/20", highlight: "text-amber-600", tag: "k6 · JMeter · Gatling" },
  { icon: Activity, title: "API & Integration Testing", description: "Contract testing, schema validation, and integration test suites that keep microservices and third-party APIs behaving exactly as specified.", color: "from-indigo-500 to-blue-600", bg: "bg-indigo-500/10", border: "border-indigo-500/20", highlight: "text-indigo-600", tag: "Postman · Pact · REST-assured" },
]

const process = [
  { step: "01", icon: Search, title: "Test Strategy & Planning", description: "Scope definition, risk-based prioritisation, and test plan creation. We identify the highest-risk areas and focus effort where it counts most." },
  { step: "02", icon: Layers, title: "Test Environment Setup", description: "Configure isolated test environments, CI/CD test gates, and data fixtures so tests run fast and reliably on every pipeline trigger." },
  { step: "03", icon: TestTube, title: "Test Case Development", description: "Write detailed manual test cases and automated scripts covering happy paths, edge cases, and boundary conditions." },
  { step: "04", icon: Zap, title: "Test Execution", description: "Run automated suites on every PR, with exploratory and regression sessions at sprint boundaries. Continuous feedback to the dev team." },
  { step: "05", icon: Bug, title: "Defect Management", description: "Triage, document, and track every defect through to resolution. Priority scoring ensures the most critical issues get fixed first." },
  { step: "06", icon: RefreshCw, title: "Continuous Improvement", description: "Test coverage reports, flaky test elimination, and monthly QA health reviews to keep quality standards rising sprint by sprint." },
]

const benefits = [
  { icon: TrendingUp, text: "90%+ automated test coverage" },
  { icon: Shield, text: "Security vulnerabilities caught early" },
  { icon: Clock, text: "Faster release cycles with confidence" },
  { icon: Cpu, text: "Performance validated before launch" },
  { icon: Star, text: "Reduced post-release defect rate" },
  { icon: CheckCircle2, text: "Compliance & accessibility testing" },
]

const tools = ["Cypress", "Playwright", "Selenium", "k6", "JMeter", "Postman", "pytest", "Jest", "Appium", "BrowserStack", "OWASP ZAP", "Datadog"]

const stats = [
  { value: "2M+", label: "Test Cases Executed" },
  { value: "90%", label: "Avg. Test Coverage" },
  { value: "60%", label: "Defect Reduction Rate" },
  { value: "50+", label: "QA Engineers" },
]

export default function QATestingPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001018] via-[#001a24] to-[#000c12]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.15),transparent_55%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(6,182,212,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-24 left-16 w-80 h-80 rounded-full bg-cyan-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-teal-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-sm">
              <TestTube className="h-4 w-4" /> QA &amp; Testing Services
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Ship Software{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">Without Compromise</span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              Comprehensive QA services that catch bugs before your users do. From manual exploratory testing to full CI/CD automation — we guarantee quality at every release gate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-cyan-500/30 transition-all hover:scale-105">
                <Link href="/contact">Get a QA Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gradient-to-b from-[#f0fdfe] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-700 mb-5">
              <Layers className="h-4 w-4" /> Our Testing Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Quality at{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Every Layer</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Manual, automated, security, and performance — complete coverage across the full testing spectrum.</p>
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
      <section className="py-28 bg-gradient-to-b from-[#001018] to-[#001a24] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(6,182,212,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300 mb-5">
              <GitBranch className="h-4 w-4" /> How We Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">QA Process</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">A structured six-stage approach that builds quality in — not bolts it on at the end.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-cyan-500/10 transition-colors select-none leading-none">{item.step}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-500/20 group-hover:bg-cyan-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2">Step {item.step}</div>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-700 mb-6">
                <Star className="h-4 w-4" /> Why QA Matters
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Quality isn't optional —{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">it's competitive advantage</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                A single post-launch bug costs 30× more to fix than one caught in testing. Our QA engineers find issues early, so your team spends time building features — not firefighting.
              </p>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white border-0 px-8 shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all">
                <Link href="/contact">Get a Free QA Review <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-cyan-200 hover:bg-cyan-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 group-hover:bg-cyan-200 transition-colors">
                      <Icon className="h-5 w-5 text-cyan-600" />
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
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Testing Tools We Master</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-cyan-300 hover:text-cyan-600 hover:shadow-md transition-all duration-200 cursor-default">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 via-teal-700 to-[#001018]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Rocket className="h-4 w-4 text-cyan-300" /> Ready to ship with confidence?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Zero defects.{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">Zero surprises.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free QA review. We'll assess your current test coverage, identify critical gaps, and recommend an automation strategy that fits your team and timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-cyan-700 hover:bg-cyan-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all">
              <Link href="/contact">Book a Free QA Review <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
