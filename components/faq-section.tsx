"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

const faqs = [
  {
    question: "What services does DGCrux provide?",
    answer:
      "DGCrux offers end-to-end digital product engineering, including custom software development, SaaS product development, AI product engineering, cloud solutions, eCommerce development, digital marketing, and managed IT services. We help businesses build, scale, and optimize technology-driven products.",
  },
  {
    question: "What types of businesses does DGCrux work with?",
    answer:
      "We work with startups, growing companies, and enterprises across industries. Whether you're launching a new SaaS product, modernizing legacy systems, or scaling an AI-enabled platform, DGCrux adapts its approach to your business stage and goals.",
  },
  {
    question: "How does DGCrux approach AI product engineering?",
    answer:
      "Our AI product engineering focuses on practical, business-ready AI. We design and implement solutions like AI-powered software, automation, AI agents, chatbots, and data-driven applications that integrate seamlessly into your existing systems and workflows.",
  },
  {
    question: "How does DGCrux choose the right technology stack for a project?",
    answer:
      "We select the technology stack based on your product needs, scalability goals, and long-term growth. DGCrux works with modern technologies such as React, Next.js, Node.js, Python, cloud platforms, and AI/ML frameworks to build secure, high-performance digital products.",
  },
  {
    question: "Does DGCrux build scalable and cloud-ready software?",
    answer:
      "Yes. All our solutions are designed with scalability, cloud readiness, and performance in mind. From cloud-native architectures to DevOps and deployment automation, we ensure your software can grow reliably as your business scales.",
  },
  {
    question: "Does DGCrux build products with SEO and AI-readiness in mind?",
    answer:
      "Absolutely. DGCrux develops digital products that are SEO-friendly, performance-optimized, and AI-ready. Our approach ensures your software is structured for search visibility, future AI integrations, and long-term digital growth.",
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
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
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
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
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
