import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Shield, Camera, AlertTriangle, Lock, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function AIProctoringPage() {
  const features = [
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "AI-powered facial recognition and eye-tracking to monitor student behavior during exams.",
    },
    {
      icon: Camera,
      title: "Multi-Camera Support",
      description: "Monitor candidates from multiple angles with webcam and mobile camera support.",
    },
    {
      icon: AlertTriangle,
      title: "Suspicious Activity Detection",
      description: "Automatically flag suspicious behavior like multiple faces, phone usage, or tab switching.",
    },
    {
      icon: Shield,
      title: "Secure Exam Environment",
      description: "Browser lockdown, copy-paste prevention, and screenshot blocking for exam integrity.",
    },
    {
      icon: Lock,
      title: "Identity Verification",
      description: "Photo ID verification and biometric authentication to ensure candidate identity.",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Comprehensive reports on exam sessions with AI-flagged incidents and recordings.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">AI-Powered Solution</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Proctoring Exam Software
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Ensure exam integrity with our advanced AI-powered proctoring solution. Detect cheating, verify identity,
              and maintain secure testing environments for online examinations.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">Try Free Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Advanced Proctoring Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AI-powered monitoring for secure and fair online examinations
            </p>
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

      <section id="contact" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Secure Your Online Exams</h2>
          <p className="mt-4 text-lg text-muted-foreground">Request a demo to see our AI proctoring in action</p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/#contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
