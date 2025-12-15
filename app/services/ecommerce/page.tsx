import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ShoppingCart, Store, Package, CreditCard, TrendingUp, Headphones } from "lucide-react"
import Link from "next/link"

export default function EcommercePage() {
  const services = [
    {
      icon: Store,
      title: "Shopify Store Development",
      description: "Custom Shopify stores with theme customization, app integration, and optimization.",
    },
    {
      icon: ShoppingCart,
      title: "Custom eCommerce Platforms",
      description: "Tailored eCommerce solutions built from scratch to match your unique business needs.",
    },
    {
      icon: Package,
      title: "Marketplace Development",
      description: "Multi-vendor marketplaces like Amazon, connecting buyers and sellers seamlessly.",
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description: "Secure payment processing with Stripe, PayPal, Razorpay, and more.",
    },
    {
      icon: TrendingUp,
      title: "eCommerce SEO & Marketing",
      description: "Drive traffic and sales with optimized product pages and marketing automation.",
    },
    {
      icon: Headphones,
      title: "Maintenance & Support",
      description: "Ongoing updates, security patches, and technical support for your store.",
    },
  ]

  const platforms = [
    {
      name: "Shopify",
      description: "Leading cloud-based eCommerce platform",
      features: ["Easy to manage", "300+ apps", "Secure hosting", "Mobile responsive"],
    },
    {
      name: "WooCommerce",
      description: "WordPress-powered eCommerce",
      features: ["Open source", "Highly customizable", "SEO friendly", "Large community"],
    },
    {
      name: "Magento",
      description: "Enterprise eCommerce solution",
      features: ["Scalable", "Feature-rich", "B2B capable", "Multi-store"],
    },
    {
      name: "Custom Solutions",
      description: "Built from scratch with your stack",
      features: ["Full control", "Unique features", "Any technology", "Scalable"],
    },
  ]

  const features = [
    "Responsive Design: Perfect on all devices",
    "Product Management: Easy inventory control",
    "Shopping Cart: Smooth checkout experience",
    "Payment Processing: Multiple payment methods",
    "Order Management: Track and fulfill orders",
    "Customer Accounts: User profiles and history",
    "Search & Filters: Find products easily",
    "Reviews & Ratings: Build trust with customers",
    "Analytics & Reports: Track sales and performance",
    "Marketing Tools: Email, discounts, and promotions",
    "Multi-currency: Sell globally",
    "SEO Optimized: Rank higher on Google",
  ]

  const benefits = [
    "Increase sales with optimized user experience",
    "Reduce cart abandonment rates",
    "Automate inventory and order management",
    "Scale to handle high traffic volumes",
    "Integrate with shipping and fulfillment",
    "Secure customer data and transactions",
    "Mobile-first design for on-the-go shoppers",
    "24/7 online presence for global customers",
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">eCommerce Solutions</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Build Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Online Store
              </span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Create powerful, secure, and scalable eCommerce platforms that drive sales and delight customers. From
              Shopify stores to custom marketplaces, we've got you covered.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">Start Your Store</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">eCommerce Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our eCommerce Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">Complete eCommerce solutions from design to deployment</p>
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

      {/* Platforms */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">eCommerce Platforms We Work With</h2>
            <p className="mt-4 text-lg text-muted-foreground">Choose the right platform for your business needs</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform) => (
              <Card key={platform.name}>
                <CardHeader>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Essential eCommerce Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">Everything you need to run a successful online store</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Why Choose DgCrux for Your eCommerce Store?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We've helped hundreds of businesses launch and grow their online stores. Our expertise in eCommerce
                development, combined with deep understanding of user experience and conversion optimization, ensures
                your store not only looks great but also drives sales.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="#contact">Launch Your Store</Link>
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
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Ready to Sell Online?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Let's build an eCommerce store that drives revenue</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/case-studies">View eCommerce Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
