import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Cloud, Server, Shield, DollarSign, Zap, Settings } from "lucide-react"
import Link from "next/link"

export default function CloudSolutionsPage() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Strategy & Assessment",
      description: "Evaluate your infrastructure and develop a comprehensive cloud adoption strategy.",
    },
    {
      icon: Server,
      title: "Cloud Migration & Modernization",
      description: "Seamlessly migrate your applications and data to AWS, GCP, or Azure with zero downtime.",
    },
    {
      icon: Zap,
      title: "DevOps, CI/CD & Automation",
      description: "Implement automated pipelines for faster, more reliable software delivery.",
    },
    {
      icon: Shield,
      title: "Cloud Security & Governance",
      description: "Protect your cloud infrastructure with enterprise-grade security and compliance.",
    },
    {
      icon: DollarSign,
      title: "Cost Optimization & FinOps",
      description: "Reduce cloud spending while maintaining performance through intelligent optimization.",
    },
    {
      icon: Settings,
      title: "Managed Cloud & Support",
      description: "24/7 monitoring, maintenance, and support for your cloud infrastructure.",
    },
  ]

  const cloudProviders = [
    {
      name: "Amazon Web Services (AWS)",
      services: ["EC2", "S3", "Lambda", "RDS", "ECS", "CloudFront"],
    },
    {
      name: "Google Cloud Platform (GCP)",
      services: ["Compute Engine", "Cloud Storage", "Cloud Functions", "BigQuery", "Kubernetes Engine"],
    },
    {
      name: "Microsoft Azure",
      services: ["Virtual Machines", "Blob Storage", "Azure Functions", "SQL Database", "AKS"],
    },
  ]

  const benefits = [
    "Scalability: Scale resources up or down based on demand",
    "Cost Efficiency: Pay only for what you use",
    "High Availability: 99.99% uptime SLA",
    "Global Reach: Deploy worldwide in minutes",
    "Security: Enterprise-grade security and compliance",
    "Disaster Recovery: Automated backups and failover",
    "Faster Time to Market: Deploy features quickly",
    "Innovation: Access to cutting-edge services",
  ]

  const migrationProcess = [
    { step: "1", title: "Assessment", description: "Analyze current infrastructure and requirements" },
    { step: "2", title: "Planning", description: "Design cloud architecture and migration strategy" },
    { step: "3", title: "Migration", description: "Execute phased migration with minimal disruption" },
    { step: "4", title: "Optimization", description: "Fine-tune performance and costs" },
    { step: "5", title: "Management", description: "Ongoing monitoring and support" },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">Cloud Solutions</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Scale Your Business with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cloud Solutions
              </span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Leverage the power of AWS, Google Cloud, and Azure to build scalable, secure, and cost-effective
              infrastructure for your business.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">Start Cloud Journey</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">Cloud Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Comprehensive Cloud Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">End-to-end cloud solutions for modern businesses</p>
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

      {/* Cloud Providers */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Multi-Cloud Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground">Certified experts in all major cloud platforms</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {cloudProviders.map((provider) => (
              <Card key={provider.name}>
                <CardHeader>
                  <CardTitle className="text-xl">{provider.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {provider.services.map((service) => (
                      <Badge key={service} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Cloud Migration Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">A proven methodology for seamless cloud adoption</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {migrationProcess.map((item) => (
              <Card key={item.step} className="relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-bold text-muted/20">{item.step}</div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Choose Cloud Computing?</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Cloud computing offers unparalleled flexibility, scalability, and cost savings. Move away from expensive
                on-premise infrastructure and embrace the agility of the cloud.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="#contact">Get Cloud Assessment</Link>
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
      <section id="contact" className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Ready to Move to the Cloud?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Let's discuss your cloud strategy and migration plan</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Request Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="mailto:cloud@dgcrux.com">Email Cloud Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
