"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Shield, Lock, Eye, FileCheck, ShieldAlert, ArrowRight, CheckCircle2,
  Star, Clock, Cpu, Layers, RefreshCw, BarChart3, Cloud, Zap, Server, Settings, Search, AlertCircle
} from "lucide-react"

const services = [
  { 
    icon: Shield, 
    title: "Zero Trust Architecture", 
    description: "Never trust, always verify. We implement identity-based security perimeters for your cloud resources.", 
    color: "from-emerald-500 to-teal-500", 
    bg: "bg-emerald-500/10", 
    border: "border-emerald-500/20", 
    highlight: "text-emerald-600", 
    tag: "Zero Trust" 
  },
  { 
    icon: FileCheck, 
    title: "Compliance Management", 
    description: "Meet ISO 27001, SOC2, HIPAA, and GDPR standards with ease using our automated compliance monitoring and reporting.", 
    color: "from-green-500 to-emerald-600", 
    bg: "bg-green-500/10", 
    border: "border-green-500/20", 
    highlight: "text-green-600", 
    tag: "Audit Ready" 
  },
  { 
    icon: Eye, 
    title: "Threat Detection & Response", 
    description: "Real-time visibility into your cloud environment with automated threat hunting and incident response automation.", 
    color: "from-teal-500 to-cyan-600", 
    bg: "bg-teal-500/10", 
    border: "border-teal-500/20", 
    highlight: "text-teal-600", 
    tag: "24/7 Security" 
  },
  { 
    icon: Lock, 
    title: "Data Encryption & Privacy", 
    description: "Implement AES-256 encryption for data at rest and in transit, with automated key management and rotation.", 
    color: "from-emerald-500 to-green-500", 
    bg: "bg-emerald-500/10", 
    border: "border-emerald-500/20", 
    highlight: "text-emerald-600", 
    tag: "Data Privacy" 
  },
  { 
    icon: Settings, 
    title: "Policy as Code", 
    description: "Automate your infrastructure governance with OPA and Sentinel. Stop security drift before it happens.", 
    color: "from-teal-400 to-emerald-500", 
    bg: "bg-teal-400/10", 
    border: "border-teal-400/20", 
    highlight: "text-teal-600", 
    tag: "Automation" 
  },
  { 
    icon: ShieldAlert, 
    title: "Vulnerability Management", 
    description: "Continuous scanning of your cloud resources, containers, and pipelines for known vulnerabilities and misconfigurations.", 
    color: "from-green-600 to-emerald-700", 
    bg: "bg-green-600/10", 
    border: "border-green-600/20", 
    highlight: "text-green-700", 
    tag: "Deep Scan" 
  },
]

const process = [
  { step: "01", icon: Search, title: "Risk Assessment", description: "Comprehensive audit of your current cloud security posture and identification of critical gaps." },
  { step: "02", icon: Shield, title: "Policy Definition", description: "Defining granular security policies and governance frameworks aligned with your business needs." },
  { step: "03", icon: Lock, title: "Security Implementation", description: "Deploying identity management, network security, and encryption across your cloud estate." },
  { step: "04", icon: AlertCircle, title: "Monitoring Setup", description: "Configuring SIEM/SOAR platforms and real-time alerting for 24/7 visibility." },
  { step: "05", icon: FileCheck, title: "Compliance Mapping", description: "Mapping your security controls to industry standards and automating regular audit reports." },
  { step: "06", icon: RefreshCw, title: "Continuous Review", description: "Regular security reviews, penetration testing, and policy optimization to stay ahead of threats." },
]

const benefits = [
  { icon: Shield, text: "Enterprise-Grade Security Posture" },
  { icon: FileCheck, text: "Automated Regulatory Compliance" },
  { icon: Eye, text: "Full Visibility into Cloud Assets" },
  { icon: Lock, text: "Protected Intellectual Property" },
  { icon: Star, text: "Trust from Your Customers & Partners" },
  { icon: CheckCircle2, text: "Reduced Financial & Legal Risk" },
]

const techStack = ["AWS Shield", "Azure Sentinel", "GCP Security Command Center", "Palo Alto Networks", "CrowdStrike", "HashiCorp Vault", "Fortinet", "Okta", "Check Point", "Snyk"]

const stats = [
  { value: "500+", label: "Security Audits Done" },
  { value: "100%", label: "Compliance Success Rate" },
  { value: "90%", label: "Faster Threat Response" },
  { value: "Zero", label: "Security Breach Incidents" },
]

export default function CloudSecurityGovernancePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#010b0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_55%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(16,185,129,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-24 left-16 w-80 h-80 rounded-full bg-emerald-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-teal-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 mb-8 backdrop-blur-sm">
              <Shield className="h-4 w-4" /> Cloud Security & Governance
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Protect Your Future{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">With Ironclad Security</span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              Security is not an afterthought. We build native cloud security and governance frameworks that let you innovate with speed while staying fully protected and compliant with global standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105">
                <Link href="/contact">Get Security Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">Security Success Stories</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gradient-to-b from-[#ecfdf5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-5">
              <Lock className="h-4 w-4" /> Security Domains
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              A Proactive Approach to{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Cloud Protection</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">From identity management to threat detection — every layer of your cloud infrastructure secured by experts.</p>
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
                    Protect now <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-gradient-to-b from-[#064e3b] to-[#022c22] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(16,185,129,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300 mb-5">
              <RefreshCw className="h-4 w-4" /> The Lifecycle
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our Security <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Deployment Framework</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">A rigorous, end-to-end process that transforms your cloud security from reactive to proactive.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-emerald-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-emerald-500/10 transition-colors select-none leading-none">{item.step}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/20 group-hover:bg-emerald-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-2">Phase {item.step}</div>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-6">
                <CheckCircle2 className="h-4 w-4" /> Benefits of Governance
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Security that <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">enables innovation</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                We believe security should be a business accelerator, not a bottleneck. By implementing automated governance, your teams can move faster with the confidence that they're operating within safe guardrails.
              </p>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-0 px-8 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all">
                <Link href="/contact">Request Your Security Review <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                      <Icon className="h-5 w-5 text-emerald-600" />
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
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Security & Governance Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-emerald-300 hover:text-emerald-600 hover:shadow-md transition-all duration-200 cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-[#010b0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Lock className="h-4 w-4 text-emerald-300" /> Secure your digital transformation
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Build Trust with <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Enterprise Governance.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Ready to secure your cloud environment? Let's discuss your security needs and build a custom governance framework that protects your business today and tomorrow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-emerald-900 hover:bg-emerald-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all">
              <Link href="/contact">Schedule Your Security Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-base font-semibold backdrop-blur-sm hover:scale-105 transition-all">
              <Link href="/services/cloud-solutions">Cloud Solutions Overview</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
