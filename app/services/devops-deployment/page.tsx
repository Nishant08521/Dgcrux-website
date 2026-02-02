import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Rocket, GitBranch, Cloud, Settings, Shield } from "lucide-react"
import Link from "next/link"

export default function DevOpsDeploymentPage() {
  const services = [
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated continuous integration and deployment pipelines.",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Deploy applications to AWS, Azure, GCP, and other cloud platforms.",
    },
    {
      icon: Settings,
      title: "Infrastructure as Code",
      description: "Manage infrastructure using Terraform, Ansible, and other IaC tools.",
    },
    {
      icon: Shield,
      title: "Containerization",
      description: "Docker and Kubernetes for scalable containerized deployments.",
    },
    {
      icon: Rocket,
      title: "Monitoring & Logging",
      description: "Set up monitoring, logging, and alerting systems.",
    },
  ]

  const benefits = [
    "Faster deployment cycles",
    "Reduced manual errors",
    "Improved scalability",
    "Better resource utilization",
    "Enhanced security",
    "24/7 monitoring and support",
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">DevOps & Deployment</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              DevOps & Deployment Services
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              CI/CD pipelines, containerization, and automated deployment for seamless releases.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our DevOps Services</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why DevOps Matters</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                DevOps practices enable faster, more reliable software delivery and better collaboration.
              </p>
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
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Ready to Streamline Deployment?</h2>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

