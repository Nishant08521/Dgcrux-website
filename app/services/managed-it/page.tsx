"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Monitor, Shield, Server, Headphones, Cloud, HardDrive, CheckCircle, ArrowRight, Wifi, Clock, Users as UsersIcon, Award } from "lucide-react"
import Link from "next/link"

export default function ManagedITPage() {
  const plans = [
    {
      name: "Essential",
      price: "Basic",
      desc: "For small teams needing core IT support",
      features: ["Remote monitoring", "Helpdesk support", "Security updates", "Backup management", "Monthly reports"],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "Popular",
      desc: "For growing businesses requiring full coverage",
      features: ["24/7 monitoring", "Priority support", "Cloud management", "Security & compliance", "Disaster recovery", "Dedicated account manager"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For organizations with complex infrastructure",
      features: ["Everything in Pro", "On-site support", "Custom SLAs", "Dedicated engineer", "Strategic planning", "Audit & compliance"],
      highlighted: false,
    },
  ]

  const stats = [
    { icon: Clock, value: "99.9%", label: "Uptime Guarantee" },
    { icon: UsersIcon, value: "500+", label: "Devices Managed" },
    { icon: Award, value: "<15 min", label: "Response Time" },
    { icon: Wifi, value: "24/7", label: "Support" },
  ]

  const services = [
    {
      icon: Monitor,
      title: "Network & Connectivity",
      desc: "Design, implementation, and 24/7 monitoring of your entire network infrastructure.",
    },
    {
      icon: Server,
      title: "Server & Cloud Maintenance",
      desc: "Proactive maintenance, patches, and optimization for on-premise and cloud servers.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      desc: "Enterprise-grade security, threat detection, and compliance management.",
    },
    {
      icon: Headphones,
      title: "IT Support & Helpdesk",
      desc: "24/7 IT support desk with fast resolution times for your entire team.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure Management",
      desc: "Full lifecycle management of your AWS, Azure, or GCP cloud environments.",
    },
    {
      icon: HardDrive,
      title: "Backup & Disaster Recovery",
      desc: "Automated backups and rapid recovery plans to protect your critical data.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 backdrop-blur-sm text-emerald-300 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-emerald-500/20">
              <Monitor className="h-3 w-3" /> Managed IT Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Reliable IT Operations &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                Support
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              24/7 managed services, monitoring, and support to keep your systems secure, available, and performing at their best.
            </p>
            <div className="flex gap-4 mt-8">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-500/30" asChild>
                <Link href="#contact">Request Support Plan <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
                <Link href="tel:+919835166140">Call Us Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                  <div className="flex justify-center mb-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-emerald-600">{s.value}</div>
                  <div className="text-sm font-medium text-slate-500 mt-1">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services - Compact */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">What We Manage</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Comprehensive IT management services for your business</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="group relative p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing / Plans */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">IT Support Plans</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Flexible plans tailored to your business size and needs</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${plan.highlighted ? "bg-gradient-to-b from-emerald-600 to-green-700 text-white shadow-2xl scale-105 lg:scale-110" : "bg-white border border-slate-100 shadow-lg"}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-widest mb-4 ${plan.highlighted ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-600"}`}>
                  {plan.price}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-emerald-100" : "text-slate-500"}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-emerald-300" : "text-emerald-600"}`} />
                      <span className={plan.highlighted ? "text-emerald-50" : "text-slate-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-xl font-bold ${plan.highlighted ? "bg-white text-emerald-700 hover:bg-emerald-50" : "bg-emerald-600 text-white hover:bg-emerald-500"}`}
                  asChild
                >
                  <Link href="#contact">{plan.highlighted ? "Get Started" : "Learn More"}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Image */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Choose Managed IT?</h2>
              <p className="mt-4 text-lg text-slate-500 mb-8">
                Focus on growing your business while we handle your IT infrastructure. Proactive management means fewer disruptions, better security, and predictable costs.
              </p>
              <div className="grid gap-3">
                {[
                  "Reduce IT costs by up to 40%", "24/7 monitoring and support",
                  "Proactive issue resolution", "Enterprise-grade security",
                  "Scalable infrastructure", "Monthly performance reports",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{b}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 bg-emerald-600 hover:bg-emerald-500 rounded-full" asChild>
                <Link href="#contact">Get Started <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-[2rem] blur-2xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/team.png"
                  alt="Managed IT Team"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-r from-emerald-600 via-green-700 to-slate-900">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl leading-tight">Let Us Handle Your IT</h2>
          <p className="mt-6 text-lg text-emerald-200 max-w-2xl mx-auto">Get a customized IT support plan tailored to your business needs.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 rounded-full shadow-xl px-10" asChild>
              <Link href="/#contact">Request Support Plan</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-emerald-400 text-emerald-200 hover:bg-emerald-500/20" asChild>
              <Link href="tel:+919835166140">Call Us Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
