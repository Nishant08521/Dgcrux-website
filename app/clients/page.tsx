"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
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
} from "lucide-react"
import Link from "next/link"

const clientLogos = [
  { name: "Suncity Projects", logo: "https://dgcrux.com/images/Dgcruxclient/1.png" },
  { name: "BingX", logo: "https://dgcrux.com/images/Dgcruxclient/2.png" },
  { name: "Rapido", logo: "https://dgcrux.com/images/Dgcruxclient/3.png" },
  { name: "Zeross", logo: "https://dgcrux.com/images/Dgcruxclient/4.png" },
  { name: "Sourcx.ai", logo: "https://dgcrux.com/images/Dgcruxclient/5.png" },
  { name: "Medicine", logo: "https://dgcrux.com/images/Dgcruxclient/6.png" },
  { name: "I-Bee Farm", logo: "https://dgcrux.com/images/Dgcruxclient/22.png" },
  { name: "Mamma", logo: "https://dgcrux.com/images/Dgcruxclient/19.png" },
  { name: "Grohood", logo: "https://dgcrux.com/images/Dgcruxclient/8.png" },
]

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Corp",
    content:
      "DgCrux transformed our business with their exceptional AI solutions. Their team is professional, responsive, and truly understands our needs.",
    rating: 5,
    industry: "Technology",
  },
  {
    name: "Sarah Johnson",
    role: "CTO, StartupXYZ",
    content:
      "Outstanding development work! They delivered our e-commerce platform ahead of schedule with exceptional quality. Highly recommended.",
    rating: 5,
    industry: "E-commerce",
  },
  {
    name: "Michael Chen",
    role: "Founder, EduTech Solutions",
    content:
      "The LMS platform they built for us exceeded all expectations. Their attention to detail and commitment to excellence is unmatched.",
    rating: 5,
    industry: "Education",
  },
  {
    name: "Priya Sharma",
    role: "Director, HealthFirst",
    content:
      "Their healthcare platform helped us scale patient consultations by 300%. The HIPAA compliance and security measures gave us complete confidence.",
    rating: 5,
    industry: "Healthcare",
  },
  {
    name: "David Park",
    role: "VP Engineering, FinFlow",
    content:
      "DgCrux's fintech expertise is world-class. They built a robust, scalable platform that passed all regulatory audits on the first attempt.",
    rating: 5,
    industry: "FinTech",
  },
  {
    name: "Rajesh Verma",
    role: "Founder, GrowBiz",
    content:
      "From concept to launch, DgCrux was with us every step. Our marketplace platform went live in just 12 weeks and exceeded every KPI.",
    rating: 5,
    industry: "Retail",
  },
]

const industries = [
  { name: "Healthcare", icon: Shield, count: "12+", desc: "HIPAA-compliant platforms" },
  { name: "FinTech", icon: TrendingUp, count: "20+", desc: "Secure financial solutions" },
  { name: "E-commerce", icon: Globe, count: "35+", desc: "Multi-vendor marketplaces" },
  { name: "Education", icon: Users, count: "15+", desc: "LMS & EdTech platforms" },
  { name: "Real Estate", icon: Building2, count: "18+", desc: "Property tech solutions" },
  { name: "Logistics", icon: TrendingUp, count: "10+", desc: "Supply chain automation" },
]

const highlights = [
  {
    stat: "200+",
    label: "Happy Clients",
    desc: "Across 15+ countries and 35+ industries",
  },
  {
    stat: "500+",
    label: "Projects Delivered",
    desc: "From MVPs to enterprise-scale platforms",
  },
  {
    stat: "98%",
    label: "Client Satisfaction",
    desc: "Based on post-project surveys",
  },
  {
    stat: "85%",
    label: "Repeat Business",
    desc: "Long-term partnerships built on trust",
  },
]

const successStories = [
  {
    client: "Sports Tech Company",
    title: "AI-Powered Pose Estimation",
    result: "95% accuracy in real-time athlete motion tracking",
    tags: ["AI/ML", "Computer Vision"],
  },
  {
    client: "Retail Startup",
    title: "Multi-Vendor Marketplace",
    result: "$2M+ monthly GMV with 500+ active vendors",
    tags: ["E-commerce", "Scalability"],
  },
  {
    client: "Healthcare Provider",
    title: "Telemedicine Platform",
    result: "100K+ remote consultations with 99.9% uptime",
    tags: ["Healthcare", "Cloud"],
  },
]

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-20 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" variant="secondary">
              Trusted Worldwide
            </Badge>
            <h1 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Our <span className="text-blue-600 italic">Clients</span>
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              We partner with startups, enterprises, and global brands to build intelligent digital products that drive
              measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-blue-600">{h.stat}</div>
                <div className="mt-1 text-sm font-bold text-foreground">{h.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Marquee */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1b1338]">
            Trusted by <span className="text-blue-600 italic">Innovative</span> Companies
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            From fast-growing startups to established enterprises — we help businesses across the globe succeed.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[180px] h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
              Industries We <span className="text-blue-600 italic">Serve</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Deep domain expertise across regulated, data-intensive, and complex industries.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <Card key={ind.name} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{ind.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{ind.desc}</p>
                      <p className="text-xs font-semibold text-blue-600 mt-1">{ind.count} projects</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Quote className="w-10 h-10 text-blue-600/20 mx-auto mb-2" />
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
              What Our <span className="text-blue-600 italic">Clients</span> Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-2 hover:border-blue-200 transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-blue-600 text-white text-xs font-bold">
                          {t.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-bold text-foreground">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-[10px]">{t.industry}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Previews */}
      <section className="py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
              Client <span className="text-blue-600 italic">Success</span> Stories
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Real results from real partnerships.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <Card key={story.title} className="border-2 hover:border-blue-200 transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 text-[10px]">{story.client}</Badge>
                  <h3 className="text-lg font-bold text-foreground mb-2">{story.title}</h3>
                  <div className="flex items-start gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{story.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {story.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/case-studies">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Become Our Next Success Story</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Partner with DgCrux and transform your ideas into intelligent, scalable digital products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90 font-bold" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
