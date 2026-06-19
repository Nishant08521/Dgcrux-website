"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { TrendingUp, Search, BarChart3, Share2, PenTool, Mail, Megaphone, ArrowRight, Target, Zap, Globe, Users, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function DigitalMarketingPage() {
  const funnelStages = [
    {
      title: "Awareness",
      color: "from-rose-400 to-pink-500",
      channels: ["SEO", "Social Media", "Paid Ads", "Content Marketing"],
      desc: "Get discovered by your target audience",
    },
    {
      title: "Consideration",
      color: "from-pink-500 to-rose-600",
      channels: ["Email Nurture", "Retargeting Ads", "Blog Content", "Webinars"],
      desc: "Build trust and showcase value",
    },
    {
      title: "Conversion",
      color: "from-rose-600 to-red-700",
      channels: ["Landing Pages", "PPC", "Email Offers", "CTA Optimization"],
      desc: "Turn prospects into paying customers",
    },
    {
      title: "Retention",
      color: "from-red-700 to-rose-800",
      channels: ["Email Marketing", "Loyalty Programs", "Social Engagement", "Support"],
      desc: "Keep customers coming back",
    },
  ]

  const services = [
    {
      icon: Search,
      title: "SEO (Search Engine Optimization)",
      desc: "Rank higher on Google with on-page, off-page, and technical SEO that drives organic traffic and qualified leads.",
      stat: "+200%",
      statLabel: "Avg organic boost",
    },
    {
      icon: Megaphone,
      title: "Paid Ads (PPC)",
      desc: "Google Ads, Bing, and social media paid campaigns optimized for maximum ROI with transparent reporting.",
      stat: "4.5x",
      statLabel: "Avg ROAS",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      desc: "Engaging content and targeted campaigns across Facebook, Instagram, LinkedIn, and Twitter/X.",
      stat: "300%",
      statLabel: "Engagement growth",
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      desc: "Blog posts, whitepapers, videos, and infographics that educate, engage, and convert your audience.",
      stat: "6x",
      statLabel: "Higher conversion",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      desc: "Personalized campaigns, newsletters, and automation workflows to nurture leads and drive repeat sales.",
      stat: "42x",
      statLabel: "ROI per dollar",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      desc: "Data-driven insights with transparent dashboards and actionable recommendations for continuous improvement.",
      stat: "100%",
      statLabel: "Transparent reporting",
    },
  ]

  const channels = [
    { name: "Google Ads", icon: "G", bg: "bg-blue-100 text-blue-600" },
    { name: "Facebook Ads", icon: "F", bg: "bg-indigo-100 text-indigo-600" },
    { name: "Instagram", icon: "I", bg: "bg-pink-100 text-pink-600" },
    { name: "LinkedIn", icon: "L", bg: "bg-sky-100 text-sky-700" },
    { name: "Twitter/X", icon: "X", bg: "bg-slate-100 text-slate-900" },
    { name: "YouTube", icon: "Y", bg: "bg-red-100 text-red-600" },
    { name: "Email", icon: "@", bg: "bg-amber-100 text-amber-700" },
    { name: "SEO", icon: "S", bg: "bg-emerald-100 text-emerald-700" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 backdrop-blur-sm text-rose-300 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-rose-500/20">
              <TrendingUp className="h-3 w-3" /> Digital Marketing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Drive Growth with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                Data-Driven Marketing
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
              SEO, paid media, social and content strategies that move the needle — measurable results, transparent reporting.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-500 text-white rounded-full shadow-lg shadow-rose-500/30" asChild>
                <Link href="/#contact">Get a Strategy <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Funnel */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Full-Funnel Marketing Strategy</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">We cover every stage of the customer journey</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {funnelStages.map((stage) => (
              <div key={stage.title} className="relative group">
                <div className={`bg-gradient-to-b ${stage.color} rounded-2xl p-6 text-white shadow-lg h-full hover:-translate-y-1 transition-transform`}>
                  <h3 className="text-lg font-black mb-1">{stage.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{stage.desc}</p>
                  <ul className="space-y-1.5">
                    {stage.channels.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-white/90">
                        <ChevronRight className="h-3 w-3 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with stats */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Digital Marketing Services</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Full-funnel strategies that deliver measurable results</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-rose-600">{s.stat}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">{s.statLabel}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Channels We Master</h2>
              <p className="mt-4 text-lg text-slate-500 mb-8">Multi-channel strategies to reach your audience wherever they are</p>
              <div className="grid grid-cols-2 gap-3">
                {channels.map((ch) => (
                  <div key={ch.name} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-rose-200 transition-all">
                    <div className={`h-10 w-10 rounded-lg ${ch.bg} flex items-center justify-center text-base font-bold flex-shrink-0`}>
                      {ch.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-900">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-[2rem] blur-2xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/digi.png"
                  alt="Marketing Channels"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-br from-rose-600 via-pink-700 to-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Results That Speak</h2>
            <p className="mt-4 text-lg text-rose-200 max-w-2xl mx-auto">Data-driven decisions. Measurable outcomes. Real growth.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "500%", l: "Avg Traffic Increase" },
              { n: "4.5x", l: "Average ROAS" },
              { n: "60%", l: "Lead Gen Growth" },
              { n: "200+", l: "Campaigns Run" },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/20 transition-all">
                <div className="text-4xl font-black text-white">{s.n}</div>
                <div className="text-sm text-rose-200 mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-24 overflow-hidden bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl leading-tight">Ready to Grow Your Business?</h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">Let&apos;s create a custom marketing plan that drives real results.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-500 rounded-full shadow-xl px-10" asChild>
              <Link href="/#contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-rose-600 text-rose-600 hover:bg-rose-50" asChild>
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
