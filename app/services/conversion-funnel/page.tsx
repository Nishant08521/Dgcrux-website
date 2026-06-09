"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import {
  ArrowRight, BarChart3, Users, Target, TrendingUp,
  ShoppingCart, Mail, RefreshCw, PieChart, Split,
  TestTube2, Globe, Smartphone, Database, Zap,
  Search, MessageSquare, Layers, Sparkles, CheckCircle2,
  ChevronRight, Star, Quote,
} from "lucide-react"

const stats = [
  { value: "3.2x", label: "Avg. conversion lift", icon: TrendingUp },
  { value: "40%", label: "Revenue increase", icon: Target },
  { value: "500+", label: "Funnels optimized", icon: Layers },
  { value: "98%", label: "Client satisfaction", icon: Star },
]

const stages = [
  {
    label: "Awareness",
    icon: Users,
    metric: "Traffic volume",
    desc: "Attract the right audience through SEO, paid ads, and content marketing.",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/25",
  },
  {
    label: "Interest",
    icon: Search,
    metric: "Engagement rate",
    desc: "Capture attention with compelling value propositions and personalized content.",
    color: "from-cyan-500 to-teal-500",
    shadow: "shadow-teal-500/25",
  },
  {
    label: "Desire",
    icon: Heart,
    metric: "Lead quality score",
    desc: "Build trust with social proof, case studies, and targeted nurturing sequences.",
    color: "from-teal-500 to-emerald-500",
    shadow: "shadow-emerald-500/25",
  },
  {
    label: "Action",
    icon: ShoppingCart,
    metric: "Conversion rate",
    desc: "Remove friction at checkout with streamlined UX, clear CTAs, and urgency triggers.",
    color: "from-emerald-500 to-green-500",
    shadow: "shadow-green-500/25",
  },
  {
    label: "Retention",
    icon: RefreshCw,
    metric: "LTV / Churn rate",
    desc: "Delight customers with onboarding, loyalty programs, and re-engagement campaigns.",
    color: "from-green-500 to-lime-500",
    shadow: "shadow-lime-500/25",
  },
]

function Heart(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

const services = [
  {
    title: "Funnel Audits & Analytics",
    desc: "Deep-dive analysis of your current funnel to identify leaks, drop-offs, and optimization opportunities.",
    icon: BarChart3,
    bullets: ["Full-funnel gap analysis", "Heatmap & session recording review", "Conversion bottleneck identification", "Competitor benchmarking"],
  },
  {
    title: "Landing Page Optimization",
    desc: "High-converting landing pages designed around proven psychological triggers and UX best practices.",
    icon: Layers,
    bullets: ["Value proposition refinement", "CTA placement & copy testing", "Form optimization & reduction", "Mobile-first responsive design"],
  },
  {
    title: "A/B & Multivariate Testing",
    desc: "Scientific, data-backed experimentation to validate every change before it goes live.",
    icon: TestTube2,
    bullets: ["Hypothesis-driven test design", "Statistical significance analysis", "Multivariate & split URL tests", "Personalization experiments"],
  },
  {
    title: "Email & Marketing Automation",
    desc: "Automated nurture sequences, abandoned cart recovery, and re-engagement campaigns that convert.",
    icon: Mail,
    bullets: ["Drip campaign strategy & build", "Behavior-triggered workflows", "Abandoned cart & browse recovery", "Segmentation & dynamic content"],
  },
  {
    title: "Checkout & Payment Flow UX",
    desc: "Streamlined, trust-building checkout experiences that minimize abandonment at the final step.",
    icon: ShoppingCart,
    bullets: ["Multi-step vs. one-page analysis", "Progress indicators & microcopy", "Payment option optimization", "Trust signal placement"],
  },
  {
    title: "Mobile Conversion Optimization",
    desc: "Optimize for the 60%+ of traffic that comes from mobile devices with thumb-friendly experiences.",
    icon: Smartphone,
    bullets: ["Mobile-specific UX audits", "Accelerated mobile pages (AMP)", "Touch target & form optimization", "Cross-device journey mapping"],
  },
]

const process = [
  { step: "01", title: "Discovery & Audit", desc: "We analyze your current funnel, analytics data, user behavior, and competitive landscape." },
  { step: "02", title: "Hypothesis Formation", desc: "Data-driven hypotheses are created based on identified opportunities and industry benchmarks." },
  { step: "03", title: "Test & Iterate", desc: "A/B tests are run with statistical rigor. Winners are implemented, losers inform the next round." },
  { step: "04", title: "Scale & Monitor", desc: "Winning variations are scaled across channels with continuous monitoring and refinement." },
]

const technologies = [
  { name: "Google Analytics 4", icon: BarChart3 },
  { name: "Hotjar", icon: Layers },
  { name: "Optimizely", icon: TestTube2 },
  { name: "VWO", icon: Split },
  { name: "Klaviyo", icon: Mail },
  { name: "Segment", icon: Database },
  { name: "Google Optimize", icon: Zap },
  { name: "Mixpanel", icon: PieChart },
  { name: "Unbounce", icon: Globe },
  { name: "Figma", icon: Layers },
]

const faqs = [
  {
    q: "How long does it take to see results from funnel optimization?",
    a: "Most clients see measurable improvements within 4–6 weeks. Early wins like CTA or form changes can show impact in 1–2 weeks. Full funnel transformation typically takes 2–3 months of iterative testing.",
  },
  {
    q: "How do you decide what to test first?",
    a: "We start with a full funnel audit to identify the biggest drop-off points. We prioritize tests based on potential impact vs. effort — fixing leaks at the top of the funnel often yields the fastest ROI.",
  },
  {
    q: "What's the typical conversion lift you deliver?",
    a: "Our clients see an average 3.2x improvement in conversion rates within the first 90 days. Results vary by industry and starting point, but we guarantee data-driven improvements.",
  },
  {
    q: "Do you work with our existing tech stack?",
    a: "We integrate with virtually any analytics, CRM, and marketing automation platform. Common stacks include GA4 + Klaviyo + Shopify, or HubSpot + Segment + Optimizely.",
  },
  {
    q: "How do you measure success?",
    a: "We define clear KPIs upfront — conversion rate, revenue per visitor, average order value, lead quality score, and customer acquisition cost — and report on them weekly.",
  },
]

export default function ConversionFunnelPage() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-28 sm:py-36">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <Badge className="mb-6 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 border-blue-500/30">
                Conversion Optimization
              </Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turn Visitors Into<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Revenue</span>
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300 max-w-xl">
                Data-driven conversion funnel optimization that identifies every leak in your funnel and systematically plugs them with scientific A/B testing.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/contact">Start Optimizing <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400" /> 3.2x avg. lift</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400" /> 500+ funnels</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400" /> 98% sat.</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-cyan-500/30 rounded-2xl blur-3xl"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 w-full max-w-md">
                  <div className="space-y-4">
                    {[
                      { label: "Visitors", pct: "100%", h: "h-10", bar: "w-full" },
                      { label: "Leads", pct: "18%", h: "h-8", bar: "w-[18%]" },
                      { label: "Opportunities", pct: "6%", h: "h-6", bar: "w-[6%]" },
                      { label: "Customers", pct: "2.4%", h: "h-4", bar: "w-[2.4%]" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-28 text-sm text-slate-400">{item.label}</span>
                        <div className="flex-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className={`${item.bar} ${item.h} bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000`}></div>
                        </div>
                        <span className="w-12 text-right text-sm font-medium text-white">{item.pct}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Typical e-commerce funnel</span>
                      <span className="text-lg font-bold text-green-400">+3.2x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="border-y bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <s.icon className="mx-auto h-6 w-6 text-primary mb-2" />
                <div className="text-3xl font-bold text-foreground">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What We Do ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">What We Do</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Systematic Funnel Optimization
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              We don&apos;t guess — we test. Every change is validated through rigorous A/B experiments,
              user research, and behavioral analytics to ensure maximum lift.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { icon: Search, num: "1", title: "Find the Leaks", desc: "Heatmaps, session recordings, and funnel analytics reveal exactly where users drop off." },
              { icon: TestTube2, num: "2", title: "Test Solutions", desc: "We design and run statistically significant A/B tests on your highest-impact opportunities." },
              { icon: TrendingUp, num: "3", title: "Scale Winners", desc: "Winning variations are deployed across channels and continuously monitored for performance." },
            ].map((item, i) => (
              <div key={i} className="group relative rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="absolute right-4 top-4 text-4xl font-black text-muted-foreground/10 group-hover:text-primary/10 transition-colors">
                  {item.num}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Funnel Stages ─── */}
      <section className="bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">The Funnel</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Every Stage, Optimized
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              We optimize every stage of your AARRR funnel — from first touch to loyal advocate.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-5">
            {stages.map((s, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredStage(i)}
                onMouseLeave={() => setHoveredStage(null)}
                className={`group relative overflow-hidden rounded-xl border bg-card p-5 transition-all duration-300 ${
                  hoveredStage === i ? "scale-105 shadow-lg " + s.shadow : ""
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.color}`}></div>
                <div className={`absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br ${s.color} opacity-10 blur-xl transition-all duration-300 ${
                  hoveredStage === i ? "scale-[3] opacity-20" : ""
                }`}></div>
                <s.icon className="relative h-8 w-8 text-primary mb-3" />
                <h3 className="relative text-base font-semibold">{s.label}</h3>
                <p className="relative mt-1 text-xs font-medium text-primary">{s.metric}</p>
                <p className="relative mt-2 text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Pro tip:</span> A 5% improvement in each stage compounds into a <span className="text-primary font-semibold">27.6% total lift</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Full-Stack Conversion Services
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              From audit to implementation, we cover every aspect of conversion rate optimization.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              4-Step Optimization Cycle
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              A proven, repeatable methodology that delivers consistent results.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-4">
            {process.map((p, i) => (
              <div key={i} className="relative text-center">
                {i < process.length - 1 && (
                  <div className="absolute left-[60%] top-8 hidden w-[80%] border-t-2 border-dashed border-muted-foreground/20 sm:block"></div>
                )}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {p.step}
                </div>
                <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technologies ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">Tech Stack</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Tools & Platforms We Use
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Best-in-class tools for analytics, testing, and personalization.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {technologies.map((t, i) => (
              <Badge key={i} variant="secondary" className="px-4 py-2 text-sm gap-2">
                <t.icon className="h-3.5 w-3.5" />
                {t.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-950 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Convert More Customers?
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Let&apos;s audit your funnel and identify your biggest conversion opportunities — for free.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
              <Link href="/contact">Get Your Free Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400/40 text-blue-100 hover:bg-blue-800/50" asChild>
              <Link href="/case-studies">See Our Work <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
