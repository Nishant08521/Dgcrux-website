import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Car, FileText, Users, DollarSign, Wrench, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function DMSPage() {
  const features = [
    {
      icon: Car,
      title: "Inventory Management",
      description: "Track vehicles, parts, and accessories with real-time inventory updates across locations.",
    },
    {
      icon: Users,
      title: "Customer Relationship Management",
      description: "Manage customer data, service history, and communication in one centralized system.",
    },
    {
      icon: FileText,
      title: "Sales & Finance",
      description: "Handle quotes, invoices, financing options, and payment processing seamlessly.",
    },
    {
      icon: Wrench,
      title: "Service & Maintenance",
      description: "Schedule appointments, track service jobs, and manage workshop operations efficiently.",
    },
    {
      icon: DollarSign,
      title: "Accounting Integration",
      description: "Connect with accounting software for automated financial reporting and reconciliation.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Get insights into sales performance, inventory turnover, and profitability metrics.",
    },
  ]

  const keyFeatures = [
    "Vehicle Inventory Management",
    "Lead & Opportunity Tracking",
    "Test Drive Scheduling",
    "Sales Process Automation",
    "Finance & Insurance",
    "Service Appointment Booking",
    "Workshop Management",
    "Parts Management",
    "Customer Portal",
    "Multi-Location Support",
    "Mobile App Access",
    "Document Management",
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">SaaS Product</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Dealer Management System
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Comprehensive DMS for automotive dealerships. Manage sales, inventory, service, and customer relationships
              all in one powerful platform.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">Request Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">View Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Core Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">Everything your dealership needs to succeed</p>
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

      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-4 rounded-lg bg-background">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Transform Your Dealership Operations</h2>
          <p className="mt-4 text-lg text-muted-foreground">Get started with our comprehensive DMS today</p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/#contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
