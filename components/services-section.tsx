import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Cloud, ShoppingCart, TrendingUp, Wrench } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software, web & mobile applications with cutting-edge technologies",
    features: ["Product Design (UI/UX)", "Custom Software Development", "QA & Testing", "DevOps & Deployment"],
    href: "/services/software-development",
  },
  {
    icon: Brain,
    title: "AI Solutions & Services",
    description: "Advanced AI/ML development and generative AI solutions for your business",
    features: ["AI/ML Development", "Generative AI Solutions", "AI Agent Development", "Computer Vision"],
    href: "/services/ai-solutions",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Comprehensive cloud strategy, migration, and managed services",
    features: ["Cloud Migration", "DevOps & CI/CD", "Cloud Security", "Cost Optimization"],
    href: "/services/cloud-solutions",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description: "Build powerful online stores with Shopify and custom platforms",
    features: ["Shopify Development", "Custom eCommerce", "Marketplace Development", "Payment Integration"],
    href: "/services/ecommerce",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Drive growth with SEO, social media, and paid advertising campaigns",
    features: ["SEO Optimization", "Social Media Marketing", "Paid Ads Management", "Conversion Funnel"],
    href: "/services/digital-marketing",
  },
  {
    icon: Wrench,
    title: "IT Staff Augmentation",
    description: "Scale your team with skilled developers and technical experts",
    features: ["Dedicated Developers", "Technical Experts", "Flexible Engagement", "Quick Onboarding"],
    href: "/services/staff-augmentation",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions to power your digital transformation
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.title} href={service.href}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm text-muted-foreground">
                          <span className="mr-2 mt-1 text-primary">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
