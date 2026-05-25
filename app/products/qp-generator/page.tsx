"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  CheckCircle2,
  FileText,
  Zap,
  Shield,
  Layers,
  BookOpen,
  Clock3,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: FileText,
    title: "Balanced Question Sets",
    description: "Generate papers with even difficulty distribution, topic coverage, and exam-style structure.",
  },
  {
    icon: Zap,
    title: "Custom Templates",
    description: "Choose from ready-made exam formats or build your own paper templates in minutes.",
  },
  {
    icon: Shield,
    title: "Secure Question Pools",
    description: "Protect your question bank with access controls and randomized selection for every paper.",
  },
  {
    icon: Layers,
    title: "Adaptive Difficulty",
    description: "AI calibrates difficulty across sections to match syllabus goals and student readiness.",
  },
  {
    icon: BookOpen,
    title: "Curriculum Alignment",
    description: "Map questions to topics, chapters, and learning outcomes for full academic compliance.",
  },
  {
    icon: CheckCircle2,
    title: "Instant Export",
    description: "Download papers in PDF, DOCX, or share them directly with your LMS and exam portal.",
  },
]

const stats = [
  { label: "Ready in", value: "< 60 sec" },
  { label: "Template Library", value: "40+" },
  { label: "Difficulty Balance", value: "98%" },
  { label: "Curriculum Coverage", value: "100%" },
]

const processSteps = [
  {
    title: "Define Exam Profile",
    description: "Select subjects, marks, question types, and difficulty levels for a tailored paper.",
  },
  {
    title: "Review AI Draft",
    description: "Fine-tune questions, replace items, or add custom instructions before finalizing.",
  },
  {
    title: "Export & Deliver",
    description: "Generate the final paper in your preferred format and distribute it securely.",
  },
]

const highlights = [
  {
    title: "Faster paper creation",
    description: "Produce complete, balanced exams with AI in under a minute.",
  },
  {
    title: "Curriculum-first design",
    description: "Align every question to standards, chapters, and learning outcomes.",
  },
  {
    title: "Safe, reusable banks",
    description: "Protect your question pool while reusing content across assessments.",
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

export default function QPGeneratorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-400/25" />
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
              <Badge variant="outline" className="mb-6 border-amber-300/30 bg-amber-100/15 px-4 py-1.5 text-sm font-semibold text-amber-100">
                AI-Powered Exam Authoring
              </Badge>
              <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Build balanced question papers in minutes with smart AI guidance.
              </h1>
              <p className="mt-6 text-lg leading-8 text-amber-100/90 sm:text-xl">
                Streamline exam preparation for educators and institutions by generating adaptive, curriculum-aligned papers instantly.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="h-14 rounded-full bg-amber-500 px-8 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400" asChild>
                  <a href="http://139.59.86.146/" target="_blank" rel="noopener noreferrer">
                    Request a Demo
                  </a>
                </Button>
             
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-amber-200/70 bg-amber-50/50 p-5 backdrop-blur-xl">
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
                  src="/products/qp.png"
                  alt="AI question paper generator dashboard"
                  width={900}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute -right-10 top-16 h-44 w-44 rounded-full bg-orange-400/20 blur-3xl" />
                <div className="absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="rounded-[2rem] bg-white/80 p-10 shadow-xl shadow-amber-200/20 ring-1 ring-amber-100">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Designed for educators</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Lighten exam planning with a smarter question paper workflow.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Use AI to eliminate repetitive question assembly, maintain curriculum alignment, and keep every paper consistent.
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

            <div className="rounded-[2.5rem] bg-white/90 p-8 shadow-2xl shadow-slate-950/10 ring-1 ring-amber-100">
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

      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-white">
        <div className="mx-auto max-w-7xl grid gap-14 xl:grid-cols-[0.95fr_0.8fr] items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-orange-300">
              <Sparkles className="h-5 w-5 text-orange-300" />
              <span>Why it works</span>
            </div>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Modern exam authoring for fast-moving institutions.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Merge AI intelligence with your syllabus and save time while keeping every paper secure, customizable, and aligned to learning goals.
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

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-orange-500/10 p-8 shadow-[0_40px_90px_-60px_rgba(249,115,22,0.45)]">
            <div className="absolute -right-10 top-16 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />
            <div className="absolute left-8 bottom-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 text-slate-200">
                <div className="rounded-3xl bg-slate-950/80 p-4 text-orange-300 shadow-lg shadow-orange-500/10">
                  <Clock3 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-orange-200">Fast Results</p>
                  <p className="mt-2 text-3xl font-black text-white">Ready in minutes</p>
                </div>
              </div>

              <div className="mt-10 grid gap-5">
                <div className="rounded-3xl bg-slate-950/80 p-6 border border-white/10">
                  <div className="flex items-center gap-3 text-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                    <span className="font-semibold">AI-balanced sections</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Smart difficulty adjustment across each paper section.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-6 border border-white/10">
                  <div className="flex items-center gap-3 text-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                    <span className="font-semibold">Secure paper generation</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Randomize questions and lock your exam bank.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-amber-200/20 bg-slate-900/95 p-10 text-center shadow-2xl shadow-slate-950/50">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Ready to transform exam prep?</p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Launch smarter question papers with AI today.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Book a demo, start a trial, or chat with our team to see how the AI QP Generator can cut your exam creation time in half.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 rounded-full bg-amber-500 px-8 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400" asChild>
              <a href="http://139.59.86.146/" target="_blank" rel="noopener noreferrer"> 
                Book a Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 rounded-full border border-amber-400/30 bg-white/5 px-8 text-base font-semibold text-blue-600 hover:bg-white/10" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
