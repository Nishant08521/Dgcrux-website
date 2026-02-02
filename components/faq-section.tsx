"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

const faqs = [
  {
    question: "How does digital marketing help businesses?",
    answer:
      "It increases visibility, drives qualified traffic, and builds trust through consistent messaging across channels like search, social, and email.",
  },
  {
    question: "How do we measure the success of digital marketing campaigns?",
    answer:
      "We track KPIs such as conversions, cost per lead, ROAS, organic rankings, and engagement to tie performance back to revenue.",
  },
  {
    question: "How much does digital marketing cost?",
    answer:
      "Budgets vary by scope and channel mix. We tailor spend to your goals and continually optimize to improve efficiency and ROI.",
  },
  {
    question: "What is the average ROAS in performance marketing?",
    answer: "Targets depend on industry and maturity. We benchmark, test quickly, and scale what performs to beat baseline ROAS.",
  },
  {
    question: "What all technology do we use for app development?",
    answer:
      "We leverage modern stacks like React Native, Flutter, Swift/Kotlin, and scalable backends with Node.js, Python, and cloud services.",
  },
  {
    question: "What all technology do we use for web development?",
    answer:
      "We build with React/Next.js, performant APIs, modern styling systems, and cloud-native tooling for speed, security, and scalability.",
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="bg-[#f4f7fa] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">FAQs</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map((faq, idx) => {
            const id = `faq-${idx}`
            const isOpen = openId === id

            return (
              <button
                key={id}
                onClick={() => toggle(id)}
                className="group w-full rounded-xl border border-slate-200 bg-white px-5 py-5 text-left shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <div className="flex items-start gap-3">
                  <span className="pt-0.5 text-lg font-semibold text-amber-500">{idx + 1}.</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-lg font-semibold text-slate-900">{faq.question}</p>
                      <span className="text-amber-500 transition group-hover:scale-110">
                        {isOpen ? <Minus className="h-5 w-5" strokeWidth={2.5} /> : <Plus className="h-5 w-5" strokeWidth={2.5} />}
                      </span>
                    </div>
                    <div
                      className={`mt-3 text-sm leading-relaxed text-slate-600 transition-all duration-300 ${
                        isOpen ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
