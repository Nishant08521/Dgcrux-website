import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "human-pose-estimation",
      title: "AI-Powered Pose Estimation for Athletes",
      client: "Sports Tech Company",
      industry: "Sports & Fitness",
      challenge:
        "A sports technology company needed an AI solution to analyze athlete movements and provide real-time feedback on form and technique.",
      solution:
        "We developed a computer vision platform using TensorFlow and pose estimation algorithms to track body movements, analyze form, and provide actionable insights to coaches and athletes.",
      results: [
        { metric: "95%", label: "Accuracy in pose detection" },
        { metric: "40%", label: "Reduction in training injuries" },
        { metric: "10K+", label: "Athletes using the platform" },
      ],
      technologies: ["TensorFlow", "Python", "OpenCV", "React", "AWS"],
      image: "/athlete-pose-analysis.jpg",
      link: "/case-studies/human-pose-estimation",
    },
    {
      id: "ecommerce-marketplace",
      title: "Multi-Vendor Marketplace Platform",
      client: "Retail Startup",
      industry: "E-commerce",
      challenge:
        "A retail startup wanted to create a multi-vendor marketplace similar to Amazon, connecting local sellers with customers across the region.",
      solution:
        "We built a scalable marketplace using Next.js, Node.js, and MongoDB, with features for vendor onboarding, product management, order processing, and secure payments.",
      results: [
        { metric: "500+", label: "Active vendors" },
        { metric: "$2M+", label: "Monthly GMV" },
        { metric: "50K+", label: "Active customers" },
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "/ecommerce-marketplace.png",
      link: "/case-studies/ecommerce-marketplace",
    },
    {
      id: "healthcare-telemedicine",
      title: "Telemedicine Platform for Healthcare",
      client: "Healthcare Provider",
      industry: "Healthcare",
      challenge:
        "A healthcare provider needed a HIPAA-compliant telemedicine platform to enable remote consultations and patient monitoring during the pandemic.",
      solution:
        "We developed a secure telemedicine platform with video consultations, electronic prescriptions, appointment scheduling, and patient health records management.",
      results: [
        { metric: "100K+", label: "Consultations completed" },
        { metric: "99.9%", label: "Platform uptime" },
        { metric: "4.8/5", label: "Patient satisfaction" },
      ],
      technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "Azure"],
      image: "/telemedicine-video-call.jpg",
      link: "/case-studies/healthcare-telemedicine",
    },
    {
      id: "fintech-app",
      title: "Mobile Banking Application",
      client: "Financial Institution",
      industry: "FinTech",
      challenge:
        "A financial institution wanted to modernize their banking experience with a mobile-first app for digital transactions and account management.",
      solution:
        "We created a secure mobile banking app with biometric authentication, instant transfers, bill payments, investment tracking, and AI-powered financial insights.",
      results: [
        { metric: "200K+", label: "Active users" },
        { metric: "1M+", label: "Transactions monthly" },
        { metric: "60%", label: "Reduction in branch visits" },
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "AI/ML"],
      image: "/mobile-banking-app.png",
      link: "/case-studies/fintech-app",
    },
    {
      id: "education-lms",
      title: "Enterprise Learning Management System",
      client: "EdTech Company",
      industry: "Education",
      challenge:
        "An education company needed a comprehensive LMS to deliver online courses, track student progress, and provide interactive learning experiences.",
      solution:
        "We built a feature-rich LMS with video streaming, interactive quizzes, progress tracking, certificates, and analytics dashboards for educators and administrators.",
      results: [
        { metric: "50K+", label: "Students enrolled" },
        { metric: "1000+", label: "Courses available" },
        { metric: "85%", label: "Course completion rate" },
      ],
      technologies: ["Next.js", "Django", "PostgreSQL", "Redis", "AWS S3"],
      image: "/online-learning-platform.png",
      link: "/case-studies/education-lms",
    },
    {
      id: "ai-chatbot",
      title: "AI Customer Support Chatbot",
      client: "SaaS Company",
      industry: "Technology",
      challenge:
        "A SaaS company was overwhelmed with support tickets and needed an AI solution to handle common customer queries 24/7.",
      solution:
        "We developed an intelligent chatbot using GPT-4 and custom training on their knowledge base, integrated with their ticketing system for seamless escalation.",
      results: [
        { metric: "70%", label: "Tickets resolved by AI" },
        { metric: "80%", label: "Reduction in response time" },
        { metric: "$100K+", label: "Annual cost savings" },
      ],
      technologies: ["OpenAI GPT-4", "Langchain", "Python", "React", "PostgreSQL"],
      image: "/ai-chatbot-interface.png",
      link: "/case-studies/ai-chatbot",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Case Studies
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Discover how we've helped businesses across industries transform their operations with innovative
              technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">200+</div>
              <div className="mt-1 text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="mt-1 text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="mt-1 text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="mt-1 text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden border-2">
                <div className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="h-full w-full object-cover"
                      style={{ minHeight: "300px" }}
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <Badge variant="outline">{study.client}</Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">{study.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-2">Challenge</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-2">Solution</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 rounded-lg bg-muted/50">
                          <div className="text-xl font-bold text-primary">{result.metric}</div>
                          <div className="text-xs text-muted-foreground mt-1">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" asChild>
                      <Link href={study.link}>
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Ready to Write Your Success Story?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's discuss how we can help transform your business with innovative technology solutions
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
