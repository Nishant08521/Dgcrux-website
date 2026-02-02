import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Code2, Settings, Database, Shield } from "lucide-react"
import Link from "next/link"

export default function CustomSoftwarePage() {
  const services = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored software solutions designed for your specific business needs.",
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration with your existing systems and workflows.",
    },
    {
      icon: Database,
      title: "Enterprise Solutions",
      description: "Scalable enterprise software for large organizations.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Secure software with industry-standard compliance.",
    },
  ]

  const benefits = [
    "Tailored to your business needs",
    "Scalable and flexible architecture",
    "Integration with existing systems",
    "Enhanced productivity and efficiency",
    "Competitive advantage",
    "Long-term support and maintenance",
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">Custom Software</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Custom Software Development
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tailored software solutions designed specifically for your business needs and workflows.
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
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Custom Software?</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Custom software gives you complete control and flexibility to meet your unique requirements.
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
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Ready to Build Custom Software?</h2>
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

