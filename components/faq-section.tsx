"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, Send } from "lucide-react"

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

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
]

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [captchaAnswer, setCaptchaAnswer] = useState("")
  const [form, setForm] = useState({
    name: "",
    designation: "",
    contact: "",
    email: "",
    budget: "",
    project: "",
  })

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section className="faq-section-wrapper">
      {/* ── Section Heading ─────────────────────────────── */}
      <div className="faq-section-header">
        {/* <span className="faq-section-eyebrow">Support</span> */}
        <h2 className="faq-section-title">Frequently Asked Questions</h2>
        {/* <p className="faq-section-desc">
          Everything you need to know about DGCrux and our services. Can&apos;t find the answer you&apos;re looking for? Use the form below to reach out.
        </p> */}
      </div>

      <div className="faq-inner">
        {/* ── LEFT: Contact Card ─────────────────────────────── */}
        <div className="faq-contact-card">
          <h2 className="faq-contact-title">Didn&apos;t Find What You Were Looking For?</h2>
          <p className="faq-contact-sub">
            We&apos;ve got more answers waiting for you! If your question didn&apos;t make the
            list, don&apos;t hesitate to reach out.
          </p>

          <div className="faq-form">
            {/* Row 1 */}
            <div className="faq-form-row">
              <div className="faq-form-group">
                <label className="faq-label">Name</label>
                <input
                  id="faq-name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="faq-input"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="faq-form-group">
                <label className="faq-label">Designation</label>
                <input
                  id="faq-designation"
                  name="designation"
                  type="text"
                  placeholder="Enter Your Designation"
                  className="faq-input"
                  value={form.designation}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="faq-form-row">
              <div className="faq-form-group">
                <label className="faq-label">Contact Number</label>
                <input
                  id="faq-contact"
                  name="contact"
                  type="tel"
                  placeholder="Enter Your Number*"
                  className="faq-input"
                  value={form.contact}
                  onChange={handleChange}
                />
              </div>
              <div className="faq-form-group">
                <label className="faq-label">Work Email</label>
                <div className="faq-input-icon-wrap">
                  <input
                    id="faq-email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email Address*"
                    className="faq-input faq-input-with-icon"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <Send className="faq-input-icon" size={15} />
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="faq-form-group faq-form-group-full">
              <label className="faq-label">Budget Range</label>
              <select
                id="faq-budget"
                name="budget"
                className="faq-input faq-select"
                value={form.budget}
                onChange={handleChange}
              >
                <option value="">Select a Budget Range</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Project Description */}
            <div className="faq-form-group faq-form-group-full">
              <label className="faq-label">Describe Your Project</label>
              <textarea
                id="faq-project"
                name="project"
                rows={3}
                className="faq-input faq-textarea"
                value={form.project}
                onChange={handleChange}
              />
            </div>

            {/* NDA Badge */}
            {/* <div className="faq-nda-badge">
              <span className="faq-nda-dot">⚡</span>
              <span>Fast 2‑minute response, fully <strong>NDA‑protected.</strong></span>
            </div> */}

            {/* Captcha + Submit */}
            <div className="faq-form-footer">
              <div className="faq-captcha">
                <span className="faq-captcha-label">2 + 5 =</span>
                <input
                  id="faq-captcha"
                  type="text"
                  className="faq-captcha-input"
                  placeholder=""
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                />
              </div>
              <button id="faq-submit-btn" className="faq-submit-btn">Submit</button>
            </div>
          </div>
        </div>

        {/* ── RIGHT: FAQ Accordion ────────────────────────────── */}
        <div className="faq-accordion-panel">
          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const id = `faq-${idx}`
              const isOpen = openId === id

              return (
                <div key={id} className={`faq-accordion-item ${isOpen ? "faq-accordion-item--open" : ""}`}>
                  <button
                    id={`faq-toggle-${idx}`}
                    onClick={() => toggle(id)}
                    className="faq-accordion-trigger"
                    aria-expanded={isOpen}
                  >
                    <span className="faq-accordion-num">[{idx + 1}]</span>
                    <span className="faq-accordion-question">{faq.question}</span>
                    <span className="faq-accordion-chevron">
                      {isOpen ? <ChevronUp size={20} strokeWidth={2} /> : <ChevronDown size={20} strokeWidth={2} />}
                    </span>
                  </button>
                  <div
                    className="faq-accordion-body"
                    style={{
                      maxHeight: isOpen ? "400px" : "0",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="faq-accordion-answer">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scoped styles */}
      <style jsx>{`
        .faq-section-wrapper {
          background: #f0f4f8;
          padding: 5rem 1.5rem;
          font-family: 'Inter', sans-serif;
        }

        /* ── Section Header ────────────── */
        .faq-section-header {
          max-width: 1200px;
          margin: 0 auto 3rem auto;
          text-align: center;
        }

        .faq-section-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1230a0;
          background: rgba(18, 48, 160, 0.08);
          border: 1px solid rgba(18, 48, 160, 0.15);
          border-radius: 50px;
          padding: 0.3rem 1rem;
          margin-bottom: 1rem;
        }

        .faq-section-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin: 0 0 1rem 0;
          letter-spacing: -0.02em;
        }

        .faq-section-desc {
          font-size: 1rem;
          color: #64748b;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .faq-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 2rem;
          align-items: start;
        }

        /* ── Contact Card ────────────── */
        .faq-contact-card {
          background: linear-gradient(145deg, #1a3eb8, #1230a0);
          border-radius: 20px;
          padding: 2rem;
          color: #fff;
          box-shadow: 0 20px 60px rgba(18, 48, 160, 0.35);
        }

        .faq-contact-title {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 0.6rem;
        }

        .faq-contact-sub {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.75);
          margin-bottom: 1.4rem;
          line-height: 1.6;
        }

        .faq-form {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .faq-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .faq-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .faq-form-group-full {
          grid-column: 1 / -1;
        }

        .faq-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.8);
        }

        .faq-input {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 6px;
          padding: 0.5rem 0.7rem;
          font-size: 0.78rem;
          color: #fff;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
          box-sizing: border-box;
        }

        .faq-input::placeholder {
          color: rgba(255,255,255,0.45);
        }

        .faq-input:focus {
          border-color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.15);
        }

        .faq-input-icon-wrap {
          position: relative;
        }

        .faq-input-with-icon {
          padding-right: 2rem;
        }

        .faq-input-icon {
          position: absolute;
          right: 0.6rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.5);
          pointer-events: none;
        }

        .faq-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.7rem center;
          padding-right: 2rem;
          cursor: pointer;
        }

        .faq-select option {
          color: #1a1a2e;
          background: #fff;
        }

        .faq-textarea {
          resize: vertical;
          min-height: 60px;
        }

        .faq-nda-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,221,0,0.12);
          border: 1px solid rgba(255,221,0,0.3);
          border-radius: 6px;
          padding: 0.5rem 0.75rem;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.9);
        }

        .faq-nda-dot {
          font-size: 0.9rem;
        }

        .faq-form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-top: 0.25rem;
        }

        .faq-captcha {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .faq-captcha-label {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.8);
          white-space: nowrap;
        }

        .faq-captcha-input {
          width: 48px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 6px;
          padding: 0.4rem 0.5rem;
          font-size: 0.8rem;
          color: #fff;
          text-align: center;
          outline: none;
        }

        .faq-submit-btn {
          background: #fff;
          color: #1230a0;
          font-size: 0.85rem;
          font-weight: 700;
          border: none;
          border-radius: 50px;
          padding: 0.55rem 2rem;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 4px 14px rgba(0,0,0,0.2);
        }

        .faq-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }

        /* ── Accordion Panel ────────────── */
        .faq-accordion-panel {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          overflow: hidden;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
        }

        .faq-accordion-item {
          border-bottom: 1px solid #e8eef5;
        }

        .faq-accordion-item:last-child {
          border-bottom: none;
        }

        .faq-accordion-trigger {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          width: 100%;
          padding: 1.4rem 1.75rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s;
        }

        .faq-accordion-trigger:hover {
          background: #f7faff;
        }

        .faq-accordion-num {
          font-size: 0.82rem;
          font-weight: 600;
          color: #94a3b8;
          min-width: 32px;
          padding-top: 2px;
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }

        .faq-accordion-question {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a2e;
          line-height: 1.45;
        }

        .faq-accordion-chevron {
          color: #64748b;
          flex-shrink: 0;
          padding-top: 2px;
          transition: color 0.2s;
        }

        .faq-accordion-item--open .faq-accordion-chevron {
          color: #1230a0;
        }

        .faq-accordion-item--open .faq-accordion-question {
          color: #1230a0;
        }

        .faq-accordion-body {
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.3s ease;
        }

        .faq-accordion-answer {
          padding: 0 1.75rem 1.4rem calc(1.75rem + 32px + 1rem);
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Responsive ────────────── */
        @media (max-width: 900px) {
          .faq-inner {
            grid-template-columns: 1fr;
          }

          .faq-accordion-panel {
            border-radius: 16px;
          }
        }

        @media (max-width: 520px) {
          .faq-section-wrapper {
            padding: 3rem 1rem;
          }

          .faq-form-row {
            grid-template-columns: 1fr;
          }

          .faq-contact-title {
            font-size: 1.15rem;
          }

          .faq-accordion-answer {
            padding-left: 1.75rem;
          }
        }
      `}</style>
    </section>
  )
}
