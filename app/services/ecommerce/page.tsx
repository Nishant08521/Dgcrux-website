import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ServiceContact from "@/components/service-contact"
import { CheckCircle2, ShoppingCart, Store, Package, CreditCard, TrendingUp, Headphones, ArrowRight } from "lucide-react"
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

      {/* Hero (fresh design) */}
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-3 bg-teal-50 text-teal-600">eCommerce Solutions</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Launch High-Converting Stores with a Modern eCommerce Stack
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                We build fast, secure, and scalable online stores—Shopify, Magento, WooCommerce, and custom platforms—optimized for conversions and long-term growth.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700"><Link href="#contact">Request Quote</Link></Button>
                <Button size="lg" variant="outline"><Link href="/case-studies">View Work</Link></Button>
              </div>
            </div>

            {/* decorative accent */}
            <div className="pointer-events-none absolute -right-24 top-8 hidden lg:block opacity-30">
              <svg width="320" height="320" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g1" x1="0%" x2="100%">
                    <stop stopColor="#2dd4bf" offset="0%" />
                    <stop stopColor="#99f6e4" offset="100%" />
                  </linearGradient>
                </defs>
                <g transform="translate(300,300)">
                  <path d="M120,-160C160,-120,180,-60,180,0C180,60,160,120,120,160C80,200,0,220,-60,200C-120,180,-160,120,-180,60C-200,0,-200,-60,-170,-110C-140,-160,-80,-190,-20,-200C40,-210,80,-200,120,-160Z" fill="url(#g1)" />
                </g>
              </svg>
            </div>

            <div className="w-full max-w-md">
              <ServiceContact accent="teal" />
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
                <Link key={service.title} href={service.href || "#"}>
                  <Card className="border-2 hover:shadow-lg transition-all h-full cursor-pointer group border-l-4 border-teal-100 pl-6">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                      <div className="flex items-center gap-2 text-sm font-semibold text-teal-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
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

      {/* Contact CTA (embedded form) */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Ready to Sell Online?</h2>
              <p className="mt-4 text-lg text-slate-600">Tell us about your catalog and goals — we'll propose the best platform and plan.</p>
            </div>
            <div className="w-full max-w-md">
              <ServiceContact accent="teal" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
