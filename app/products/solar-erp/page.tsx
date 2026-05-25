"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  CheckCircle2,
  Layers,
  Database,
  FileText,
  BarChart3,
  Shield,
  Zap,
  Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: Layers,
    title: "End-to-End Project Tracking",
    description: "Monitor every solar EPC milestone from site survey to commissioning in one platform.",
  },
  {
    icon: Database,
    title: "Inventory & Materials",
    description: "Track modules, inverters, and spare parts with real-time stock visibility and alerts.",
  },
  {
    icon: FileText,
    title: "Procurement Automation",
    description: "Automate purchase orders, vendor approvals, and supplier workflows effortlessly.",
  },
  {
    icon: BarChart3,
    title: "Financial Control",
    description: "Stay on budget with cost forecasting, invoicing, and cash flow analytics.",
  },
  {
    icon: Shield,
    title: "Compliance & Reporting",
    description: "Generate audit-ready reports for project compliance, safety, and quality assurance.",
  },
  {
    icon: Zap,
    title: "Mobile Field Access",
    description: "Empower field teams with mobile dashboards, checklists, and work order updates.",
  },
]

const stats = [
  { label: "Projects Managed", value: "1,200+" },
  { label: "MRP Accuracy", value: "99.5%" },
  { label: "Faster Delivery", value: "30%" },
  { label: "Compliance Rate", value: "100%" },
]

const processSteps = [
  {
    title: "Plan & Quote",
    description: "Create solar proposals, schedule resources, and forecast costs with intelligent templates.",
  },
  {
    title: "Execute & Monitor",
    description: "Track construction, material usage, and site progress with real-time field updates.",
  },
  {
    title: "Close & Analyze",
    description: "Finalize commissioning, reconcile costs, and generate performance reports automatically.",
  },
]

const highlights = [
  {
    title: "Faster project handover",
    description: "Keep teams aligned and reduce field delays with instant task visibility.",
  },
  {
    title: "Clear financial control",
    description: "Monitor budgets, POs, and payments from a single solar ERP dashboard.",
  },
  {
    title: "Audit-ready compliance",
    description: "Generate safety and quality reports automatically for every project.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export default function SolarERPPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-500/20" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <Badge variant="outline" className="mb-6 border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-sm font-semibold text-amber-100">
                Solar EPC ERP
              </Badge>
              <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Run solar projects faster, safer, and more profitably.
              </h1>
              <p className="mt-6 text-lg leading-8 text-amber-100/90 sm:text-xl">
                An all-in-one ERP built for solar EPC teams. Manage projects, procurement, finance, and compliance from one intelligent dashboard.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="h-14 rounded-full bg-amber-500 px-8 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400" asChild>
                  <a href="https://gkdsolar.com/admin/auth/login/" target="_blank" rel="noopener noreferrer">
                    Request a Demo
                  </a>
                </Button>

              </div>

              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-amber-200/70 bg-amber-50/80 p-5 backdrop-blur-xl">
                    <div className="text-2xl font-extrabold text-slate-950">{stat.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.3em] text-amber-700/90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-slate-950/40">
                <Image
                  src="/products/solar.png"
                  alt="Solar ERP dashboard visualization"
                  width={900}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute -right-10 top-16 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
                <div className="absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_0.8fr] lg:items-center">
            <div className="rounded-[2rem] bg-white/90 p-10 shadow-xl shadow-amber-200/30 ring-1 ring-amber-100">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Capabilities</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Control every stage of your solar EPC lifecycle.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                From site planning to handover, our Solar ERP gives teams the tools they need to stay aligned, efficient, and compliant.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-amber-200 bg-amber-100/80 p-6">
                    <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white/95 p-8 shadow-2xl shadow-slate-950/10 ring-1 ring-amber-100">
              <div className="grid gap-6 md:grid-cols-2">
                {features.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-amber-300/30 hover:bg-amber-50">
                      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-600 shadow-sm">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 text-white">
        <div className="mx-auto max-w-7xl grid gap-14 xl:grid-cols-[0.95fr_0.8fr] items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-amber-300">
              <Zap className="h-5 w-5 text-amber-300" />
              <span>How it works</span>
            </div>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Manage solar projects with speed and precision.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              A purpose-built workflow for solar EPC — plan, execute, and close projects while keeping teams aligned across field and office.
            </p>

            <div className="mt-12 space-y-5">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-200/25 text-amber-200 text-lg font-black">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-amber-500/10 p-8 shadow-[0_40px_90px_-60px_rgba(245,158,11,0.45)]">
            <div className="absolute -right-10 top-16 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="absolute left-8 bottom-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 text-slate-200">
                <div className="rounded-3xl bg-slate-950/80 p-4 text-amber-300 shadow-lg shadow-amber-500/10">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Fast Insights</p>
                  <p className="mt-2 text-3xl font-black text-white">Decisions in real time</p>
                </div>
              </div>

              <div className="mt-10 grid gap-5">
                <div className="rounded-3xl bg-slate-950/80 p-6 border border-white/10">
                  <div className="flex items-center gap-3 text-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-amber-300" />
                    <span className="font-semibold">Accurate forecasting</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Forecast costs and timelines with confidence.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-6 border border-white/10">
                  <div className="flex items-center gap-3 text-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-amber-300" />
                    <span className="font-semibold">Paperless approvals</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Approve purchase orders and site audits instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-slate-900/95 p-10 text-center shadow-2xl shadow-slate-950/50">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Ready to modernize solar operations?</p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Transform solar EPC management with a smarter ERP.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Book a demo or talk to our team to see how the Solar ERP can simplify your project workflows and maximize profitability.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 rounded-full bg-emerald-500 px-8 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400" asChild>
              <a href="https://gkdsolar.com/admin/auth" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 rounded-full border border-emerald-400/30 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
