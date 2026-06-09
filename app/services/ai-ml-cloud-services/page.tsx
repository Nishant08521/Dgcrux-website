import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  CloudCog,
  Cpu,
  Database,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Globe,
  Layers,
  BarChart3,
  Zap,
} from "lucide-react"

const benefits = [
  {
    icon: CloudCog,
    title: "Enterprise-grade Model Ops",
    description: "Deploy, monitor and manage ML models in the cloud with robust CI/CD, drift detection, and auto-scaling.",
  },
  {
    icon: Database,
    title: "Data Pipeline Automation",
    description: "Ingest, transform and serve data securely using serverless workflows, feature stores, and realtime streaming.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Security & Compliance",
    description: "Encrypted data storage, identity controls, audit logging and policy enforcement across AWS, Azure or GCP.",
  },
  {
    icon: Sparkles,
    title: "Optimized Cloud Performance",
    description: "Save cost with GPU-backed training, spot workloads, and inference autoscaling tailored to your usage patterns.",
  },
]

const results = [
  { value: "99.9%", label: "Service availability" },
  { value: "3×", label: "Faster model deployment" },
  { value: "70%", label: "Reduction in manual ops" },
  { value: "1-2 weeks", label: "Production ready delivery" },
]

const process = [
  {
    step: "01",
    title: "Cloud-Ready Audit",
    details: "We map your data, models and operational goals to the best cloud architecture before writing a single line of code.",
  },
  {
    step: "02",
    title: "Pipeline & Infrastructure",
    details: "Build resilient data flows, model training pipelines and inference endpoints across scalable cloud services.",
  },
  {
    step: "03",
    title: "Model Deployment",
    details: "Productionize models with versioning, containerization, autoscaling and secure API access.",
  },
  {
    step: "04",
    title: "Operate & Improve",
    details: "Monitor performance, detect drift, and tune workflows continuously so your AI stays accurate and reliable.",
  },
]

const useCases = [
  {
    title: "Predictive Customer Churn",
    description: "Deploy models that identify attrition risks and trigger targeted retention strategies automatically.",
  },
  {
    title: "Demand Forecasting",
    description: "Turn historical data into accurate sales and inventory forecasts with cloud-backed ML pipelines.",
  },
  {
    title: "Personalized Recommendations",
    description: "Deliver dynamic experiences by serving personalized content in real time across web and mobile.",
  },
]

export default function AIMLCloudServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="relative overflow-hidden bg-slate-900/95 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <Badge className="mb-6 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">AI • ML • Cloud</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                AI/ML Cloud Services Built for Scale, Security, and Speed
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                We turn your machine learning initiatives into production-ready cloud services with secure pipelines, monitored deployments, and end-to-end operational excellence.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Book a Strategy Call</Link>
                </Button>
                <Link href="#expectations" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                  See how we deliver <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {results.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="space-y-5">
                <div className="flex items-center gap-4 rounded-3xl bg-slate-950/80 p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                    <CloudCog className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Cloud-first ML</p>
                    <p className="mt-2 font-semibold text-white">Optimized for AWS, Azure, and GCP.</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                    <p className="text-sm text-slate-400">Secure data pipelines</p>
                    <p className="mt-3 font-semibold text-white">Encrypted data flows, role-based access, and audit logging.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                    <p className="text-sm text-slate-400">Model reliability</p>
                    <p className="mt-3 font-semibold text-white">Monitoring, drift detection, and automated rollback.</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-sm text-slate-400">End-to-end delivery</p>
                  <p className="mt-3 font-semibold text-white">From prototype to production-ready inference APIs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950/95 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">What we provide</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Cloud-native AI/ML services built around your business goals.</h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              We ensure every deployment is secure, observable and tuned to your cost targets while giving your teams a seamless path to production value.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {benefits.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.5)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="expectations" className="bg-slate-900/95 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Delivery process</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">How we launch AI and ML to the cloud.</h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                Our engagements include architecture design, implementation, validation, and operations — all tailored to the cloud environment you already use.
              </p>
            </div>

            <div className="grid gap-5">
              {process.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 font-semibold">{item.step}</div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950/95 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Use cases</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">AI/ML cloud projects that move the needle.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <div className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Use Case</div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-2xl shadow-cyan-500/5">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to move your AI workloads into production?</h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                Let’s design a cloud AI platform that reduces risk, speeds releases, and makes your ML models dependable at scale.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Start your cloud project</Link>
                </Button>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                  Talk to our architects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

