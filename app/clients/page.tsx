"use client"

import { motion, useInView, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Star,
  Building2,
  Globe,
  TrendingUp,
  Shield,
  Users,
  Quote,
  CheckCircle2,
  Sparkles,
  Award,
  Zap,
} from "lucide-react"
import { useRef, useEffect, useState } from "react"

// ── Local image imports ──────────────────────────────────────────────────────
import goal from "../../public/goal.png"
import digi from "../../public/digi.png"
import source from "../../public/sourcex.png"
import empquick from "../../public/empquick.png"
import pawsome from "../../public/pawsome.jpeg"
import ws from "../../public/wsmobility.jpg"
import vajirao from "../../public/vajiraonew.jpg"
import suncity from "../../public/suncity.png"
import bing from "../../public/bing x.png"
import zeross from "../../public/zeros.png"
import rapido from "../../public/rapido.png"
import medicin from "../../public/medicine.png"
import ibee from "../../public/ibee.png"
import kidzee from "../../public/kidzee.png"
import mount from "../../public/maount.png"
import teenpati from "../../public/teenpati.png"
import meal from "../../public/meal.png"

// ── Data ────────────────────────────────────────────────────────────────────

const allClients = [
  { name: "Suncity Projects", logo: suncity,  category: "Real Estate" },
  { name: "Goal Institute",   logo: goal,     category: "Education"   },
  { name: "Digi",             logo: digi,     category: "Digital"     },
  { name: "SourceX",          logo: source,   category: "Technology"  },
  { name: "Vajirao",          logo: vajirao,  category: "Education"   },
  { name: "BingX",            logo: bing,     category: "FinTech"     },
  { name: "Rapido",           logo: rapido,   category: "Logistics"   },
  { name: "Zeross",           logo: zeross,   category: "Technology"  },
  { name: "Sourcx.ai",        logo: kidzee,   category: "AI"          },
  { name: "Medicine",         logo: medicin,  category: "Healthcare"  },
  { name: "Empquick",         logo: empquick, category: "HR Tech"     },
  { name: "Pawsome",          logo: pawsome,  category: "Pet Care"    },
  { name: "WS Mobility",      logo: ws,       category: "Mobility"    },
  { name: "I-Bee Farm",       logo: ibee,     category: "AgriTech"    },
  { name: "Mamma",            logo: meal,     category: "Food Tech"   },
  { name: "Grohood",          logo: mount,    category: "E-commerce"  },
  { name: "Client J",         logo: teenpati, category: "Gaming"      },
]

const row1 = allClients.slice(0, 9)
const row2 = allClients.slice(9)

const highlights = [
  { stat: "200+", label: "Happy Clients",       desc: "Across 15+ countries",      icon: Users      },
  { stat: "500+", label: "Projects Delivered",  desc: "From MVPs to enterprise",   icon: Zap        },
  { stat: "98%",  label: "Satisfaction Rate",   desc: "Post-project surveys",      icon: Award      },
  { stat: "85%",  label: "Repeat Business",     desc: "Long-term partnerships",    icon: TrendingUp },
]

const industries = [
  { name: "Healthcare",  icon: Shield,     count: "12+", desc: "HIPAA-compliant platforms",   color: "from-rose-500 to-pink-500"     },
  { name: "FinTech",     icon: TrendingUp, count: "20+", desc: "Secure financial solutions",  color: "from-emerald-500 to-teal-500"  },
  { name: "E-commerce",  icon: Globe,      count: "35+", desc: "Multi-vendor marketplaces",   color: "from-blue-500 to-cyan-500"     },
  { name: "Education",   icon: Users,      count: "15+", desc: "LMS & EdTech platforms",      color: "from-violet-500 to-purple-500" },
  { name: "Real Estate", icon: Building2,  count: "18+", desc: "Property tech solutions",     color: "from-amber-500 to-orange-500"  },
  { name: "Logistics",   icon: TrendingUp, count: "10+", desc: "Supply chain automation",     color: "from-indigo-500 to-blue-500"   },
]

const testimonials = [
  { name: "Rahul Sharma",   role: "CEO, Goal Institute",      content: "DgCrux built our entire ed-tech platform from scratch. The quality, speed, and professionalism was truly remarkable. Student engagement went up by 3x.",                                       rating: 5, industry: "Education",  initials: "RS" },
  { name: "Priya Kapoor",   role: "Founder, Empquick",        content: "Our hiring platform needed AI-driven automation and DgCrux delivered exactly that. Time-to-hire dropped by 60% and the UX is world-class.",                                                   rating: 5, industry: "HR Tech",    initials: "PK" },
  { name: "Ankit Verma",    role: "Director, Suncity",        content: "From property listings to CRM integration, DgCrux handled everything seamlessly. Their team treated our project like it was their own.",                                                       rating: 5, industry: "Real Estate",initials: "AV" },
  { name: "Sneha Joshi",    role: "CTO, SourceX.ai",          content: "DgCrux helped us build our AI SaaS product end-to-end. The architecture they proposed was scalable, clean, and production-ready from day one.",                                                rating: 5, industry: "AI / SaaS",  initials: "SJ" },
  { name: "Manish Gupta",   role: "Founder, Zeross",          content: "We needed a marketplace that could handle thousands of concurrent users. DgCrux delivered with zero downtime and an amazing user experience.",                                                  rating: 5, industry: "E-commerce", initials: "MG" },
  { name: "Deepika Singh",  role: "MD, WS Mobility",          content: "The mobile app DgCrux developed for us has been downloaded 50K+ times in three months. Exceptional attention to detail and post-launch support.",                                              rating: 5, industry: "Mobility",   initials: "DS" },
]

const successStories = [
  { client: "Goal Institute", title: "AI-Powered Learning Platform", result: "3x increase in student engagement & 40% better pass rates",              tags: ["EdTech", "AI/ML", "Mobile"],      gradient: "from-violet-500 to-purple-600"  },
  { client: "Empquick",       title: "AI Recruitment Automation",    result: "60% reduction in time-to-hire with automated candidate scoring",          tags: ["HR Tech", "Automation", "SaaS"],  gradient: "from-blue-500 to-cyan-600"     },
  { client: "SourceX.ai",     title: "AI SaaS Platform",            result: "Launched in 10 weeks — now serving 5,000+ active users",                  tags: ["AI", "Cloud", "Scalability"],     gradient: "from-emerald-500 to-teal-600"  },
]

// ── Animated Counter ──────────────────────────────────────────────────────────
function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0")
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const numeric = parseInt(value.replace(/\D/g, ""))
    const suffix  = value.replace(/[0-9]/g, "")
    let start = 0
    const step = Math.ceil(numeric / 60)
    const timer = setInterval(() => {
      start = Math.min(start + step, numeric)
      setDisplay(`${start}${suffix}`)
      if (start >= numeric) clearInterval(timer)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, value])

  return <div ref={ref}>{display}</div>
}

// ── Marquee Row ───────────────────────────────────────────────────────────────
function MarqueeRow({
  clients,
  direction = "left",
  speed = 30,
}: {
  clients: typeof allClients
  direction?: "left" | "right"
  speed?: number
}) {
  const triple = [...clients, ...clients, ...clients]
  const xFrom  = direction === "left" ? "-33.33%" : "0%"
  const xTo    = direction === "left" ? "0%"      : "-33.33%"

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-5 pr-5"
        animate={{ x: [xFrom, xTo] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {triple.map((client, idx) => (
          <div
            key={idx}
            className="group/card flex-shrink-0 flex flex-col items-center justify-center gap-2 w-[152px] h-[96px] rounded-2xl border border-slate-100 bg-white/95 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer px-4"
          >
            <div className="relative w-full h-[50px]">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="140px"
                className="object-contain transition-all duration-300"
              />
            </div>
            <span className="text-[9px] font-semibold text-slate-600 group-hover/card:text-slate-800 transition-colors tracking-wide truncate w-full text-center">
              {client.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ClientsPage() {
  const fadeUp: Variants = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: "easeOut" } },
  }
  const stagger: Variants = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.1 } },
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0b0f1a] pt-32 pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Trusted Worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6"
          >
            Brands That{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent italic">
              Trust Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            From ambitious startups to established enterprises, we partner with companies to build
            intelligent digital products that create measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 rounded-full shadow-lg shadow-blue-500/30" asChild>
              <Link href="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full" asChild>
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Stat Strip ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/20"
          >
            {highlights.map((h) => {
              const Icon = h.icon
              return (
                <motion.div key={h.label} variants={fadeUp} className="flex flex-col items-center gap-1 py-8 px-4 text-center">
                  <Icon className="w-5 h-5 text-white/70 mb-1" />
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    <AnimatedNumber value={h.stat} />
                  </div>
                  <div className="text-sm font-bold text-white">{h.label}</div>
                  <div className="text-xs text-blue-200">{h.desc}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Marquee ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="text-center mb-14 px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Badge variant="secondary" className="mb-4 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Our Clients
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1b1338] mb-4">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
                Innovative
              </span>{" "}
              Companies
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              From fast-growing startups to established enterprises — we help businesses across the globe succeed.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-6">
          <MarqueeRow clients={row1} direction="left"  speed={35} />
          <MarqueeRow clients={row2} direction="right" speed={28} />
        </div>
      </section>

      {/* ── Client Grid ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1b1338] mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">Partners</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Every logo represents a story of transformation, growth, and digital excellence.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {allClients.map((client, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-violet-50/0 group-hover:from-blue-50 group-hover:to-violet-50 transition-all duration-500 rounded-2xl" />
                <div className="relative w-full h-14">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="120px"
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="relative text-center">
                  <p className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors leading-tight">{client.name}</p>
                  <span className="text-[10px] text-blue-500 font-semibold">{client.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0b0f1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/30 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Our Expertise
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Industries We{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent italic">Serve</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">Deep domain expertise across regulated, data-intensive, and complex industries.</p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <motion.div
                  key={ind.name}
                  variants={fadeUp}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm p-6 transition-all duration-300 hover:border-white/20 overflow-hidden cursor-pointer"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${ind.color}`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{ind.name}</h3>
                  <p className="text-sm text-slate-400 mb-3">{ind.desc}</p>
                  <span className={`inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${ind.color} text-white`}>
                    {ind.count} projects
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <Quote className="w-10 h-10 text-blue-200 mx-auto mb-3" />
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1b1338] mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">Clients</span>{" "}
              Say
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Don&apos;t just take our word for it — here&apos;s what our clients have to say.</p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-5 italic">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-black shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-[10px] bg-blue-50 text-blue-600 border-blue-100">{t.industry}</Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Success Stories ───────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1b1338] mb-4">
              Client{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">Success</span>{" "}
              Stories
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Real results from real partnerships.</p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group relative rounded-2xl border border-slate-100 bg-white overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${story.gradient}`} />
                <div className="p-6">
                  <Badge variant="outline" className="mb-3 text-[10px] border-slate-200">{story.client}</Badge>
                  <h3 className="text-lg font-black text-slate-800 mb-3">{story.title}</h3>
                  <div className="flex items-start gap-2 mb-5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-slate-500">{story.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {story.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 rounded-full px-8 font-semibold" asChild>
              <Link href="/case-studies">View All Case Studies <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-[#0b0f1a]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Sparkles className="w-10 h-10 text-blue-400/60 mx-auto mb-4" />
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Become Our Next{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Success Story
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Partner with DgCrux and transform your ideas into intelligent, scalable digital products that your users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 rounded-full shadow-xl shadow-blue-500/30" asChild>
                <Link href="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
