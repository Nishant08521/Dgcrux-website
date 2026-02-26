"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  GitBranch, Cloud, Settings, Shield, Rocket, ArrowRight, CheckCircle2,
  Star, Clock, TrendingUp, Cpu, Layers, Terminal, Lock, Activity, Server, RefreshCw, BarChart3,
} from "lucide-react"

const services = [
  { icon: GitBranch, title: "CI/CD Pipelines", description: "Automated build, test, and deploy pipelines. From PR merge to production in minutes with GitHub Actions, ArgoCD, and Jenkins.", color: "from-orange-500 to-amber-500", bg: "bg-orange-500/10", border: "border-orange-500/20", highlight: "text-orange-600", tag: "GitHub Actions · ArgoCD" },
  { icon: Cloud, title: "Cloud Deployment", description: "Deploy to AWS, Azure, or GCP with confidence. Multi-region architectures and blue-green deployments for zero-downtime releases.", color: "from-sky-500 to-blue-600", bg: "bg-sky-500/10", border: "border-sky-500/20", highlight: "text-sky-600", tag: "AWS · Azure · GCP" },
  { icon: Settings, title: "Infrastructure as Code", description: "Reproducible, version-controlled infrastructure with Terraform, Pulumi, and Ansible. Spin up environments in minutes.", color: "from-violet-500 to-purple-600", bg: "bg-violet-500/10", border: "border-violet-500/20", highlight: "text-violet-600", tag: "Terraform · Pulumi · Ansible" },
  { icon: Shield, title: "Containerisation", description: "Docker and Kubernetes orchestration for scalable, resilient workloads. Helm charts, autoscaling, and service meshes.", color: "from-cyan-500 to-teal-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20", highlight: "text-cyan-600", tag: "Docker · Kubernetes · Helm" },
  { icon: Activity, title: "Monitoring & Observability", description: "Full-stack observability with Prometheus, Grafana, ELK, and Datadog. Custom alerting and SLO dashboards.", color: "from-emerald-500 to-green-600", bg: "bg-emerald-500/10", border: "border-emerald-500/20", highlight: "text-emerald-600", tag: "Prometheus · Grafana · Datadog" },
  { icon: Lock, title: "DevSecOps", description: "Security gates at every pipeline stage. SAST, DAST, container scanning, secrets management, and compliance automation.", color: "from-rose-500 to-pink-600", bg: "bg-rose-500/10", border: "border-rose-500/20", highlight: "text-rose-600", tag: "SAST · DAST · Vault" },
]

const process = [
  { step: "01", icon: BarChart3, title: "DevOps Assessment", description: "Audit current pipeline and infrastructure. We produce a maturity score and clear improvement roadmap." },
  { step: "02", icon: Layers, title: "Architecture Design", description: "Cloud architecture, networking, IAM policies, and pipeline blueprints — reviewed and approved before implementation." },
  { step: "03", icon: Terminal, title: "Pipeline Automation", description: "Build CI/CD pipelines with automated testing, security scanning, and environment promotion gates." },
  { step: "04", icon: Server, title: "Infrastructure Provisioning", description: "Provision cloud resources as code using Terraform. Every environment is reproducible and version-controlled." },
  { step: "05", icon: Activity, title: "Observability Setup", description: "Deploy monitoring, logging, tracing, and alerting with SLOs and incident-response runbooks." },
  { step: "06", icon: RefreshCw, title: "Continuous Optimisation", description: "Monthly cost reviews, performance tuning, capacity planning, and incident retrospectives." },
]

const benefits = [
  { icon: TrendingUp, text: "10× faster deployment cycles" },
  { icon: Shield, text: "Security embedded at every stage" },
  { icon: Clock, text: "Zero-downtime releases" },
  { icon: Cpu, text: "Infrastructure as Code — version-controlled" },
  { icon: Star, text: "24/7 monitoring & on-call support" },
  { icon: CheckCircle2, text: "30–60% cloud cost savings" },
]

const techStack = ["Docker", "Kubernetes", "Helm", "Terraform", "Ansible", "GitHub Actions", "ArgoCD", "Jenkins", "AWS", "Azure", "GCP", "Prometheus", "Grafana", "Datadog", "Vault", "Istio"]

const stats = [
  { value: "500+", label: "Pipelines Delivered" },
  { value: "99.99%", label: "Deployment Success Rate" },
  { value: "10×", label: "Faster Release Cycles" },
  { value: "40%", label: "Avg. Cloud Cost Savings" },
]

export default function DevOpsDeploymentPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0a00] via-[#1a1200] to-[#0a0800]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(234,88,12,0.15),transparent_55%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(245,158,11,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-24 left-16 w-80 h-80 rounded-full bg-amber-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-orange-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300 mb-8 backdrop-blur-sm">
              <Rocket className="h-4 w-4" /> DevOps &amp; Deployment
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Ship Faster,{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Ship Smarter</span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              Automate your pipeline, harden your infrastructure, and deploy with total confidence. We transform manual, error-prone releases into reliable, repeatable engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-amber-500/30 transition-all hover:scale-105">
                <Link href="/contact">Start Automating <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gradient-to-b from-[#fffbeb] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700 mb-5">
              <Server className="h-4 w-4" /> Our DevOps Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Everything to{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">deploy at speed</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">From pipeline automation to platform engineering — every layer covered by DevOps specialists.</p>
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
      <section className="py-28 bg-gradient-to-b from-[#0c0a00] to-[#1a1200] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(245,158,11,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300 mb-5">
              <GitBranch className="h-4 w-4" /> How We Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">DevOps Methodology</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Structured, transparent, and results-driven — from assessment to continuous optimisation.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-amber-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-amber-500/10 transition-colors select-none leading-none">{item.step}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/20 group-hover:bg-amber-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-2">Step {item.step}</div>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700 mb-6">
                <Star className="h-4 w-4" /> The DGCrux Difference
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                DevOps that <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">transforms delivery</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                We don't just set up pipelines and walk away. We embed with your team, transfer knowledge, and build a DevOps culture that outlasts the engagement.
              </p>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white border-0 px-8 shadow-lg shadow-amber-500/25 hover:scale-105 transition-all">
                <Link href="/contact">Book a DevOps Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-amber-200 hover:bg-amber-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 group-hover:bg-amber-200 transition-colors">
                      <Icon className="h-5 w-5 text-amber-600" />
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
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Tools &amp; Platforms We Master</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-amber-300 hover:text-amber-600 hover:shadow-md transition-all duration-200 cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-orange-700 to-[#0c0a00]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Rocket className="h-4 w-4 text-amber-300" /> Ready to transform your delivery pipeline?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Deploy with <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">speed and confidence</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free DevOps assessment. We'll review your setup, identify bottlenecks, and outline a pragmatic improvement plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-amber-700 hover:bg-amber-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all">
              <Link href="/contact">Book a Free Assessment <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
