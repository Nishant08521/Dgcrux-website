"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  LifeBuoy, ServerCrash, Clock, Activity, Shield, ArrowRight, CheckCircle2,
  Star, Wrench, Headphones, HardDrive, RefreshCcw, Bell, Server, Zap, ShieldAlert, Cpu
} from "lucide-react"

const services = [
  { 
    icon: Activity, 
    title: "24/7 Proactive Monitoring", 
    description: "Round-the-clock surveillance of your infrastructure. We detect anomalies and performance degradations before they impact your users.", 
    color: "from-sky-500 to-blue-500", 
    bg: "bg-sky-500/10", 
    border: "border-sky-500/20", 
    highlight: "text-sky-600", 
    tag: "Always On" 
  },
  { 
    icon: Wrench, 
    title: "Incident Management", 
    description: "Rapid response to critical alerts with predefined runbooks. We isolate, troubleshoot, and resolve infrastructure issues as they happen.", 
    color: "from-blue-500 to-indigo-600", 
    bg: "bg-blue-500/10", 
    border: "border-blue-500/20", 
    highlight: "text-blue-600", 
    tag: "Fix Forward" 
  },
  { 
    icon: RefreshCcw, 
    title: "Patch Management", 
    description: "Automated operating system and software patching. We keep your environments secure and compliant without causing downtime.", 
    color: "from-indigo-500 to-violet-600", 
    bg: "bg-indigo-500/10", 
    border: "border-indigo-500/20", 
    highlight: "text-indigo-600", 
    tag: "Maintenance" 
  },
  { 
    icon: HardDrive, 
    title: "Backup & Disaster Recovery", 
    description: "Automated snapshotting and failover testing. Ensuring your data is safe and your services can survive regional outages.", 
    color: "from-cyan-500 to-sky-500", 
    bg: "bg-cyan-500/10", 
    border: "border-cyan-500/20", 
    highlight: "text-cyan-600", 
    tag: "Resilience" 
  },
  { 
    icon: Shield, 
    title: "Security & Compliance Audits", 
    description: "Continuous vulnerability scanning and configuration drift detection to ensure your environment stays inside policy guardrails.", 
    color: "from-slate-500 to-gray-600", 
    bg: "bg-slate-500/10", 
    border: "border-slate-500/20", 
    highlight: "text-slate-600", 
    tag: "Governance" 
  },
  { 
    icon: Headphones, 
    title: "Expert Cloud Consultation", 
    description: "Direct line to certified cloud architects holding monthly reviews on capacity planning, cost savings, and architectural improvements.", 
    color: "from-blue-400 to-indigo-500", 
    bg: "bg-blue-400/10", 
    border: "border-blue-400/20", 
    highlight: "text-blue-500", 
    tag: "Advisory" 
  },
]

const process = [
  { step: "01", icon: Server, title: "Environment Onboarding", description: "Deep audit of your current stack, establishing baselines, and implementing our monitoring agents." },
  { step: "02", icon: Bell, title: "Alert Tuning", description: "Configuring precise thresholds to eliminate alert fatigue and ensure our team acts only on real incidents." },
  { step: "03", icon: Wrench, title: "Runbook Creation", description: "Documenting exact standard operating procedures for known issues to guarantee rapid resolution." },
  { step: "04", icon: Headset, title: "24/7 Operations", description: "Our NOC actively monitors and manages your environments spanning multiple timezones." },
  { step: "05", icon: Zap, title: "Proactive Optimization", description: "Applying patches, resizing instances, and cleaning up unused resources in the background." },
  { step: "06", icon: Activity, title: "Quarterly Reviews", description: "Strategic reviews focusing on your growth metrics, ensuring the infrastructure scales with your business." },
]

// Note: Substituted lucide icon for Headset.
function Headset(props: any) {
  return <Headphones {...props} />
}

const benefits = [
  { icon: Clock, text: "Guaranteed Response SLAs" },
  { icon: ShieldAlert, text: "Fewer Production Outages" },
  { icon: LifeBuoy, text: "Focus Your Team on Shipping Code" },
  { icon: Star, text: "Access to the Top 1% of Engineers" },
  { icon: Cpu, text: "High Availability Assured" },
  { icon: CheckCircle2, text: "Predictable IT Operating Costs" },
]

const techStack = ["AWS Managed Services", "Azure Lighthouse", "GCP Anthos", "Datadog", "PagerDuty", "New Relic", "Splunk", "Opsgenie", "ServiceNow", "Jira Service Management"]

const stats = [
  { value: "15-Min", label: "Critical Response Time" },
  { value: "99.99%", label: "Uptime SLA Available" },
  { value: "24/7", label: "Eyes-on-Glass Support" },
  { value: "8M+", label: "Alerts Processed Monthly" },
]

export default function ManagedCloudSupportPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.1),transparent_55%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(56,189,248,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-24 left-16 w-80 h-80 rounded-full bg-sky-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-16 right-16 w-96 h-96 rounded-full bg-blue-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 mb-8 backdrop-blur-sm">
              <LifeBuoy className="h-4 w-4" /> Comprehensive Cloud Operations
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              We Manage the Cloud.{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">You Run the Business.</span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
              Stop waking up your engineers at 3 AM. Our expert cloud operations team provides 24/7 proactive monitoring, incident management, and architectural guidance to ensure your infrastructure runs flawlessly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-2xl shadow-sky-500/30 transition-all hover:scale-105">
                <Link href="/contact">Talk to an Expert <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">Explore Our SLAs</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 backdrop-blur-md px-6 py-5 text-center hover:bg-white/10 hover:border-sky-500/30 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 bg-gradient-to-b from-[#f0f9ff] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-5">
              <ServerCrash className="h-4 w-4" /> Managed Offerings
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              An Extension of Your{" "}
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Engineering Team</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">We don't just react to tickets. We proactively manage and optimize your infrastructure so stability is a given, not a goal.</p>
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
                    Service details <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(56,189,248,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300 mb-5">
              <Activity className="h-4 w-4" /> Seamless Onboarding
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              From Chaos to <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Complete Control</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">We follow a strict, battle-tested methodology to assume command of your infrastructure without disrupting your daily operations.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-8 hover:border-sky-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-5 right-6 text-6xl font-black text-white/4 group-hover:text-sky-500/10 transition-colors select-none leading-none">{item.step}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 border border-sky-500/20 group-hover:bg-sky-500/25 transition-colors">
                    <Icon className="h-6 w-6 text-sky-400" />
                  </div>
                  <div className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-2">Phase {item.step}</div>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700 mb-6">
                <Star className="h-4 w-4" /> The Value of Managed Ops
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Let your developers <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">focus on product</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Building an internal 24/7 operations team is expensive, difficult to hire for, and distracts from your core product. By partnering with us, you get immediate access to top-tier site reliability engineers for a fraction of the cost.
              </p>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white border-0 px-8 shadow-lg shadow-sky-500/25 hover:scale-105 transition-all">
                <Link href="/contact">Get Pricing Details <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-sky-200 hover:bg-sky-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 group-hover:bg-sky-200 transition-colors">
                      <Icon className="h-5 w-5 text-sky-600" />
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
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">ITSM & Operational Toolchain</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:border-sky-300 hover:text-sky-600 hover:shadow-md transition-all duration-200 cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-blue-900 to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-sky-300" /> Never suffer downtime alone
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to Offload Your <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">Infrastructure Operations?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a consultation with our operations team. We'll outline how our managed services can give you peace of mind and improve your system reliability instantly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-sky-900 hover:bg-sky-50 border-0 px-8 py-6 text-base font-bold shadow-2xl hover:scale-105 transition-all">
              <Link href="/contact">Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-base font-semibold backdrop-blur-sm hover:scale-105 transition-all">
              <Link href="/services/cloud-solutions">Explore Cloud Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
