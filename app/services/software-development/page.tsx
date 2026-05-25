import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Code2, Smartphone, Globe, TestTube, Rocket, Users } from "lucide-react"
import Link from "next/link"

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      icon: Users,
      title: "Product Design (UI/UX)",
      description: "Designing intuitive digital experiences that make every interaction feel effortless.",
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "High-performance, responsive web apps built with modern frameworks and cloud-ready architecture.",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile apps crafted for exceptional performance and engagement.",
    },
    {
      icon: Code2,
      title: "Custom Software",
      description: "Bespoke platforms built to solve your unique business challenges and accelerate growth.",
    },
    {
      icon: TestTube,
      title: "QA & Automation",
      description: "Automated testing, compliance checks, and performance validation for production-grade systems.",
    },
    {
      icon: Rocket,
      title: "Cloud & DevOps",
      description: "Continuous delivery, infrastructure automation, and secure deployment pipelines.",
    },
  ]

  const technologies = {
    "Front-End": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue", "Angular"],
    "Back-End": ["Node.js", "Python", "Django", "Express", "Laravel", "GraphQL"],
    Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    DevOps: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Azure"],
  }

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We align on goals, users, and constraints to define a product roadmap that delivers measurable outcomes.",
    },
    {
      step: "02",
      title: "Prototype",
      description: "Interactive wireframes and UI prototypes let you validate the experience before development begins.",
    },
    {
      step: "03",
      title: "Build",
      description: "Engineering teams build high-quality software using agile sprints, clean architecture, and automated testing.",
    },
    {
      step: "04",
      title: "Launch",
      description: "We deploy with confidence, monitor performance, and hand over documentation and workflows.",
    },
    {
      step: "05",
      title: "Scale",
      description: "Continuous improvement and feature growth help your product adapt and stay competitive.",
    },
  ]

  const benefits = [
    "Rapid MVP delivery with iterative feedback loops",
    "Strong UX and product thinking in every release",
    "Enterprise-grade engineering and architecture",
    "Transparent communication and project governance",
    "Dedicated support for launch and beyond",
    "Flexible engagement models to fit your needs",
    "Secure development practices and compliance-ready delivery",
    "A partner focused on your long-term success",
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.16),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <Badge className="bg-sky-500/15 text-sky-300 border border-sky-500/20">Software Development</Badge>
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Modern software for ambitious teams</p>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Build bold digital products with modern engineering and design.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  DGCrux delivers scalable web, mobile and enterprise software that stands out through elegant design,
                  fast performance, and secure architecture.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <Link href="#contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">See Case Studies</Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:max-w-2xl">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/30 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Time to MVP</p>
                  <p className="mt-4 text-3xl font-semibold text-white">3–6 weeks</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">From discovery to launch for core digital products.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/30 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Client satisfaction</p>
                  <p className="mt-4 text-3xl font-semibold text-white">98%+</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Clients praise our speed, quality, and communication.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-6 shadow-2xl shadow-slate-950/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_35%)]" />
              <div className="relative grid gap-6 sm:grid-cols-2">
                {services.slice(0, 4).map((service) => {
                  const Icon = service.icon
                  return (
                    <div key={service.title} className="rounded-[1.75rem] bg-slate-950/90 p-6 shadow-inner shadow-slate-950/40 transition hover:-translate-y-1">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">What we deliver</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">End-to-end software services for modern teams</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
              From strategic planning and UI design to full-stack engineering and post-launch support, we build
              reliable software that fuels growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-500/10">
                  <CardContent className="space-y-6 p-8">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-sky-300 transition group-hover:bg-sky-500/10">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                      <CardDescription className="mt-3 text-sm text-slate-300">{service.description}</CardDescription>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Technology stack</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Built with modern technology</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                We select tools that deliver speed, scalability and secure performance across web, mobile, and backend platforms.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(technologies).map(([category, techs]) => (
                <div key={category} className="rounded-[1.75rem] border border-white/10 bg-slate-900/85 p-6 shadow-inner shadow-slate-950/30">
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/5 text-slate-200">{tech}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-400">Process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A streamlined delivery process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
              Our agile approach keeps your roadmap aligned with business goals while delivering quality results.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {process.map((item, index) => (
              <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-7 shadow-2xl shadow-slate-950/20">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500/15 text-sky-300 text-xl font-semibold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                <div className="mt-6 h-1 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-sky-500" style={{ width: `${((index + 1) / process.length) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Why choose us</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Your partner for reliable, future-ready software</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                We combine product vision, expert engineering and ongoing support to help your software evolve with the market.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.slice(0, 4).map((benefit) => (
                  <div key={benefit} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-sm text-slate-200">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {benefits.slice(4).map((benefit) => (
                <div key={benefit} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-12 shadow-2xl shadow-slate-950/40">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Ready to start</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Launch software that moves your business forward.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
              Chat with our team and let us help you shape the next generation of your product.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/#contact">Request a Callback</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:info@dgcrux.com">Email Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
