import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users, FileSearch, BarChart3, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function ATSPage() {
  const features = [
    {
      icon: FileSearch,
      title: "AI-Powered Resume Screening",
      description: "Automatically parse and rank resumes based on job requirements using advanced AI algorithms.",
    },
    {
      icon: Users,
      title: "Candidate Management",
      description: "Track candidates through every stage of the hiring pipeline with an intuitive dashboard.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Get insights into your hiring process with comprehensive analytics and custom reports.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Save time with automated email responses, interview scheduling, and status updates.",
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "GDPR compliant with enterprise-grade security to protect candidate data.",
    },
    {
      icon: Clock,
      title: "Time-to-Hire Reduction",
      description: "Reduce hiring time by up to 50% with streamlined processes and automation.",
    },
  ]

  const benefits = [
    "Reduce time-to-hire by 50%",
    "Improve candidate quality with AI matching",
    "Centralize all hiring data in one platform",
    "Collaborate seamlessly with hiring teams",
    "Reduce bias in hiring decisions",
    "Track diversity and inclusion metrics",
    "Integrate with job boards and LinkedIn",
    "Mobile-friendly for on-the-go recruiting",
  ]

  const keyFeatures = [
    "AI Resume Parsing & Ranking",
    "Customizable Hiring Pipelines",
    "Interview Scheduling",
    "Email Templates & Automation",
    "Candidate Database",
    "Job Board Integration",
    "Team Collaboration Tools",
    "Custom Workflows",
    "Reporting & Analytics",
    "API Access",
    "Mobile Apps",
    "White-Label Options",
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">AI-Powered Product</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Applicant Tracking System
              </span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Streamline your hiring process with our intelligent ATS. Find the best candidates faster with AI-powered
              resume screening, automated workflows, and comprehensive analytics.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">Request Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>

            <div className="mt-12 flex justify-center gap-8 text-sm text-muted-foreground">
              <div>
                <span className="block text-2xl font-bold text-foreground">50%</span>
                Faster Hiring
              </div>
              <div>
                <span className="block text-2xl font-bold text-foreground">10K+</span>
                Candidates Processed
              </div>
              <div>
                <span className="block text-2xl font-bold text-foreground">95%</span>
                Accuracy Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Powerful Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">Everything you need to hire smarter and faster</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Features List */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Complete Feature Set</h2>
            <p className="mt-4 text-lg text-muted-foreground">All the tools you need in one platform</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {keyFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-4 rounded-lg bg-background">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Choose Our ATS?</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our AI-powered ATS transforms the hiring process by combining cutting-edge technology with an intuitive
                user experience. Built by recruiters for recruiters, it addresses the real challenges of modern hiring.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <Badge className="mt-1">White-Label</Badge>
                  <div>
                    <p className="font-semibold text-foreground">Fully Customizable</p>
                    <p className="text-sm text-muted-foreground">
                      Brand it as your own with custom domains and styling
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="mt-1">SaaS</Badge>
                  <div>
                    <p className="font-semibold text-foreground">Cloud-Based</p>
                    <p className="text-sm text-muted-foreground">Access from anywhere, automatic updates included</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="#contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Ready to Transform Your Hiring?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join hundreds of companies using our ATS to build amazing teams
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="mailto:sales@dgcrux.com">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
