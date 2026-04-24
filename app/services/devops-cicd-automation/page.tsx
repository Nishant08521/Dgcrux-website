"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Rocket, GitBranch, Settings, Activity, Gauge, Terminal, ArrowRight, CheckCircle2,
  Star, Clock, Cpu, Layers, RefreshCw, BarChart3, Database, Shield, Zap, Search
} from "lucide-react"

const services = [
  { 
    icon: GitBranch, 
    title: "Continuous Integration", 
    description: "Automate your merge and build cycles. We set up robust CI pipelines that catch bugs early and ensure every commit is production-ready.", 
    color: "from-orange-500 to-amber-500", 
    bg: "bg-orange-500/10", 
    border: "border-orange-500/20", 
    highlight: "text-orange-600", 
    tag: "GitHub Actions · GitLab" 
  },
  { 
    icon: Rocket, 
    title: "Continuous Deployment", 
    description: "Ship to production with zero human intervention. Blue-green and canary deployments ensure high availability for your users.", 
    color: "from-amber-500 to-yellow-500", 
    bg: "bg-amber-500/10", 
    border: "border-amber-500/20", 
    highlight: "text-amber-600", 
    tag: "ArgoCD · Jenkins" 
  },
  { 
    icon: Settings, 
    title: "Infrastructure as Code", 
    description: "Version-controlled, reproducible environments using Terraform and Pulumi. No more manual setup or environment drift.", 
    color: "from-orange-600 to-red-500", 
    bg: "bg-orange-600/10", 
    border: "border-orange-600/20", 
    highlight: "text-orange-700", 
    tag: "Terraform · Ansible" 
  },
  { 
    icon: Zap, 
    title: "Automated Testing", 
    description: "Unit, integration, and E2E tests baked directly into your pipeline. Ensure every release meets your quality standards automatically.", 
    color: "from-amber-600 to-orange-600", 
    bg: "bg-amber-600/10", 
    border: "border-amber-600/20", 
    highlight: "text-amber-700", 
    tag: "Jest · Cypress" 
  },
  { 
    icon: Activity, 
    title: "Monitoring & Observability", 
    description: "Full-stack visibility into your pipelines and production environments. Automated alerting for instant incident response.", 
    color: "from-orange-400 to-amber-500", 
    bg: "bg-orange-400/10", 
    border: "border-orange-400/20", 
    highlight: "text-orange-500", 
    tag: "Prometheus · Grafana" 
  },
  { 
    icon: Shield, 
    title: "DevSecOps Integration", 
    description: "Security scanning at every stage of the pipeline — from code analysis to container vulnerabilities. Compliance by design.", 
    color: "from-red-500 to-orange-600", 
    bg: "bg-red-500/10", 
    border: "border-red-500/20", 
    highlight: "text-red-600", 
    tag: "SAST · DAST" 
  },
]

const process = [
  { step: "01", icon: Search, title: "Workflow Audit", description: "Analyzing your current development cycle to identify bottlenecks and transformation opportunities." },
  { step: "02", icon: Layers, title: "Pipeline Blueprinting", description: "Designing custom CI/CD architectures tailored to your stack and team structure." },
  { step: "03", icon: Terminal, title: "Automation Sprint", description: "Building pipelines, containerizing applications, and scripting infrastructure as code." },
  { step: "04", icon: Database, title: "Integration & Testing", description: "Deploying automated testing suites and integrating security scanning tools." },
  { step: "05", icon: Rocket, title: "Production Pilot", description: "Launching your first automated release cycle with meticulous monitoring and support." },
  { step: "06", icon: Gauge, title: "Continuous Tuning", description: "Ongoing optimization for speed, reliability, and developer experience." },
]

const benefits = [
  { icon: Clock, text: "10x Faster Deployment Speed" },
  { icon: Shield, text: "Automated Risk Mitigation" },
  { icon: Star, text: "Consistent Release Quality" },
  { icon: RefreshCw, text: "Zero-Downtime Deployments" },
  { icon: BarChart3, text: "Clear Pipeline Analytics" },
  { icon: CheckCircle2, text: "Seamless Environment Parity" },
]

const techStack = ["GitHub Actions", "ArgoCD", "Terraform", "Jenkins", "GitLab CI", "CircleCI", "Docker", "Kubernetes", "Ansible", "Datadog", "Prometheus", "Snyk"]

const stats = [
  { value: "1000+", label: "Pipelines Built" },
  { value: "0.1s", label: "Build Latency Focus" },
  { value: "Zero", label: "Human Error Pipeline Drift" },
  { value: "50%", label: "Faster Market Delivery" },
]

export default function DevOpsCICDAutomationPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0a0a] via-[#1a120a] to-[#0c0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.1),transparent_55%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(249,115,22,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-24 left-16 w-80 h-80 rounded-full bg-orange-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-amber-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 mb-8 backdrop-blur-sm">
              <Zap className="h-4 w-4" /> DevOps & CI/CD Automation
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Automate Everything.{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">Deploy Anything.</span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              Eliminate manual tasks, catch issues early, and deliver value at lightning speed. We build custom CI/CD pipelines that transform your release process into a competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-orange-500/30 transition-all hover:scale-105">
                <Link href="/contact">Build Your Pipeline <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">Transformation Cases</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gradient-to-b from-[#fff7ed] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700 mb-5">
              <RefreshCw className="h-4 w-4" /> Comprehensive Automation
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Speed Without{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Compromising Quality</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">We don't just automate tasks; we engineer high-velocity delivery pipelines that scale with your team.</p>
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
                    Discover automation <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-gradient-to-b from-[#0c0a0a] to-[#1a120a] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(249,115,22,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-300 mb-5">
              <Terminal className="h-4 w-4" /> Pipeline Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our Journey to <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Deployment Nirvana</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">A structured, engineering-first approach to transforming your development workflow into a high-octane release engine.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-orange-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-orange-500/10 transition-colors select-none leading-none">{item.step}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 border border-orange-500/20 group-hover:bg-orange-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="text-xs font-bold text-orange-400 tracking-widest uppercase mb-2">Phase {item.step}</div>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700 mb-6">
                <Gauge className="h-4 w-4" /> Business Velocity
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Release value with <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">absolute confidence</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Stop fearing deployment day. With our automated CI/CD solutions, releases become non-events — quiet, reliable, and frequent. We help you move from quarterly releases to hourly ones.
              </p>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white border-0 px-8 shadow-lg shadow-orange-500/25 hover:scale-105 transition-all">
                <Link href="/contact">Get an Automation Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors">
                      <Icon className="h-5 w-5 text-orange-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 leading-snug pt-2">{b.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Automation Powerhouses</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-orange-300 hover:text-orange-600 hover:shadow-md transition-all duration-200 cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-amber-900 to-[#0c0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 w-[480px) h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Rocket className="h-4 w-4 text-orange-300" /> Start shipping faster
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to Accelerate Your <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">Delivery Pipeline?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a consultation with our DevOps engineers. We'll outline a pragmatic roadmap to automate your workflows and empower your developers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-orange-900 hover:bg-orange-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all">
              <Link href="/contact">Get Started for Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-base font-semibold backdrop-blur-sm hover:scale-105 transition-all">
              <Link href="/services/cloud-solutions">Cloud Services Overview</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
