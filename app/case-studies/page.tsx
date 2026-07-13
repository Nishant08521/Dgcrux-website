import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BadgeCheck, FileText, Hotel, ShieldCheck, Sun, UserSearch, Workflow } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    title: "AI Proctoring",
    description: "Secure exams with real-time AI monitoring.",
    icon: ShieldCheck,
    tags: ["Computer Vision", "Real-time", "Compliance"],
    href: "/products/ai-proctor",
    color: "from-red-500 to-red-600",
    image: "https://images.unsplash.com/photo-1516534775068-bb4d2e0b6baf?w=500&h=300&fit=crop",
  },
  {
    title: "AI-Powered ATS",
    description: "Smart recruitment with automated screening.",
    icon: UserSearch,
    tags: ["Automation", "Ranking", "Workflow"],
    href: "/products/ats",
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  },
  {
    title: "AI QP Generator",
    description: "Instantly create balanced question papers.",
    icon: FileText,
    tags: ["Templates", "Difficulty Mix", "Export"],
    href: "/products/qp-generator",
    color: "from-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
  },
  {
    title: "Solar ERP",
    description: "Manage end-to-end solar project lifecycle.",
    icon: Sun,
    tags: ["CRM", "Inventory", "Reporting"],
    href: "/products/solar-erp",
    color: "from-yellow-500 to-yellow-600",
    image: "https://images.unsplash.com/photo-1497440150194-51ff8a0bfc41?w=500&h=300&fit=crop",
  },
  {
    title: "Dealer Management",
    description: "Streamline operations for dealer networks.",
    icon: Workflow,
    tags: ["Orders", "Incentives", "Analytics"],
    href: "/products/dms",
    color: "from-emerald-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  },
  {
    title: "Hotel Booking",
    description: "Smart system with dynamic pricing.",
    icon: Hotel,
    tags: ["Channel Manager", "Pricing", "Payments"],
    href: "/products/hotel-booking",
    color: "from-orange-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop",
  },
] as const

const caseStudies = [
  {
    id: 1,
    title: "Online Exam Platform for 50K+ Students",
    company: "Leading Education Board",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    category: "AI Proctoring",
    challenge: "Managing fair and secure online exams for thousands of simultaneous test-takers",
    solution: "Deployed AI Proctoring system with real-time monitoring",
    results: [
      "98.5% proctoring accuracy",
      "Zero cheating incidents",
      "10,000+ exams conducted monthly",
    ],
    testimonial: "DgCrux's AI Proctoring transformed our online assessment process. The system is reliable, secure, and student-friendly.",
  },
  {
    id: 2,
    title: "Recruitment Process Automation for 500+ Hires",
    company: "Fortune 500 Tech Company",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    category: "AI-Powered ATS",
    challenge: "Manual screening of 100K+ CVs per quarter was time-consuming",
    solution: "Implemented AI-Powered ATS for intelligent candidate ranking",
    results: [
      "75% reduction in screening time",
      "300% improvement in candidate quality",
      "500 positions filled annually",
    ],
    testimonial: "The ATS identified candidates we would have missed manually. It's now integral to our hiring.",
  },
  {
    id: 3,
    title: "Solar Project Management Across 2000+ Sites",
    company: "Leading Solar Energy Provider",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    category: "Solar ERP",
    challenge: "Complex project tracking across distributed solar installations",
    solution: "Deployed Solar ERP for end-to-end lifecycle management",
    results: [
      "40% faster project completion",
      "Real-time monitoring of 2000+ sites",
      "$5M annual savings",
    ],
    testimonial: "Solar ERP gave us unprecedented visibility into our operations. We reduced delays and improved profitability significantly.",
  },
  {
    id: 4,
    title: "Hotel Booking System for 200+ Properties",
    company: "International Hotel Chain",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    category: "Hotel Booking",
    challenge: "Fragmented booking systems across multiple properties",
    solution: "Unified Hotel Booking platform with dynamic pricing",
    results: [
      "45% increase in booking velocity",
      "28% revenue uplift",
      "200+ properties integrated",
    ],
    testimonial: "The platform unified our booking experience. Guests love the simplicity, and our revenue has grown significantly.",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-background">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:56px_56px]" />
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Our Products
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Enterprise Products for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tomorrow's Challenges</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              From AI-led automation to operational ERPs, our products help you launch faster, operate smarter, and grow with
              confidence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/#contact">
                  Get a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-slate-600 text-slate-200">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/20 p-2 text-blue-400">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Enterprise-ready</div>
                  <div className="text-sm text-slate-300">Roles, audit logs, secure access</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-purple-500/20 p-2 text-purple-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">AI + automation</div>
                  <div className="text-sm text-slate-300">Reduce effort, improve decisions</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/20 p-2 text-emerald-400">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Quick rollout</div>
                  <div className="text-sm text-slate-300">Deploy in weeks, iterate fast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Products</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose a product and we'll tailor integrations, workflows, and dashboards to match your business needs.
              </p>
            </div>
            <Button size="lg" asChild className="whitespace-nowrap">
              <Link href="/#contact">
                Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <Link key={product.title} href={product.href} className="group">
                  <div className="relative h-full overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-slate-300">
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Gradient top border accent */}
                    <div className={`h-1 bg-gradient-to-r ${product.color}`}></div>
                    
                    <div className="p-8">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className={`rounded-xl bg-gradient-to-br ${product.color} p-3 text-white shadow-lg`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge className="shrink-0 bg-slate-100 text-slate-700">
                          Ready
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors">{product.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{product.description}</p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-slate-50 border-slate-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-8 inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Our Products in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how our products deliver measurable value for customers across industries.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <Link key={product.title} href={product.href} className="group">
                  <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className={`rounded-2xl bg-gradient-to-br ${product.color} p-3 text-white shadow-lg`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge className="bg-slate-100 text-slate-700">Live</Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground">{product.description}</p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-slate-50 border-slate-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-8 inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                        View Product <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Want to see it in action?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Share your requirements and we’ll recommend the best product stack and a rollout plan.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Book a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
