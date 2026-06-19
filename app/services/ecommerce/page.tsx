"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Store, Package, CreditCard, TrendingUp, Headphones, CheckCircle, Star, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function EcommercePage() {
  const [activePlatform, setActivePlatform] = useState(0)

  const services = [
    {
      icon: Store,
      title: "Shopify Store Development",
      desc: "Custom Shopify stores with theme customization, app integration, and conversion optimization.",
      highlight: "Most Popular",
    },
    {
      icon: ShoppingCart,
      title: "Custom eCommerce Platforms",
      desc: "Tailored eCommerce solutions built from scratch to match your unique business needs.",
      highlight: "",
    },
    {
      icon: Package,
      title: "Marketplace Development",
      desc: "Multi-vendor marketplaces connecting buyers and sellers with commission management.",
      highlight: "",
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      desc: "Secure payment processing with Stripe, PayPal, Razorpay, and 50+ providers.",
      highlight: "",
    },
    {
      icon: TrendingUp,
      title: "eCommerce SEO & Marketing",
      desc: "Drive traffic and sales with optimized product pages and marketing automation.",
      highlight: "",
    },
    {
      icon: Headphones,
      title: "Maintenance & Support",
      desc: "Ongoing updates, security patches, and 24/7 technical support for your store.",
      highlight: "",
    },
  ]

  const platforms = [
    {
      name: "Shopify",
      desc: "Best for fast launches",
      features: ["Easy to manage", "300+ apps", "Secure hosted", "Mobile responsive", "SEO built-in"],
      price: "Quick Launch",
      image: "/shopify.png",
    },
    {
      name: "WooCommerce",
      desc: "Best for WordPress sites",
      features: ["Open source", "Full control", "SEO friendly", "Large community", "Free to start"],
      price: "Flexible",
      image: "/ecommerce_featured.png",
    },
    {
      name: "Custom",
      desc: "Best for unique needs",
      features: ["Any tech stack", "Unique features", "Full ownership", "Unlimited scale", "No platform fees"],
      price: "Enterprise",
      image: "/ecommerce_featured.png",
    },
  ]

  const features = [
    "Responsive mobile-first design", "Smart product search & filters",
    "Smooth cart & checkout flow", "Multi-currency & multi-language",
    "Customer accounts & wishlist", "Order tracking & management",
    "Reviews, ratings & Q&A", "Abandoned cart recovery",
    "Discount & coupon engine", "Real-time inventory sync",
    "Detailed sales analytics", "Marketing automation tools",
  ]

  const benefits = [
    "Increase sales with optimized UX", "Reduce cart abandonment",
    "Scale to handle high traffic", "Secure customer transactions",
    "Mobile-first shopping experience", "24/7 global selling",
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 backdrop-blur-sm text-teal-300 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-teal-500/20">
              <ShoppingCart className="h-3 w-3" /> eCommerce Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Launch High-Converting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Online Stores
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              We build fast, secure, and scalable online stores — Shopify, WooCommerce, and custom platforms — optimized for conversions and long-term growth.
            </p>
            <div className="flex gap-4 mt-8">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white rounded-full shadow-lg shadow-teal-500/30" asChild>
                <Link href="#contact">Request Quote <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
                <Link href="/case-studies">View Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Compact grid with highlights */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our eCommerce Services</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Complete eCommerce solutions from design to deployment</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="group relative p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {s.highlight && (
                    <div className="absolute -top-2.5 right-4 px-3 py-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-[10px] font-bold rounded-full">
                      {s.highlight}
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Tabs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Choose Your Platform</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">We recommend the best platform based on your goals</p>
          </div>
          <div className="flex justify-center gap-2 mb-10">
            {platforms.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActivePlatform(i)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activePlatform === i ? "bg-teal-600 text-white shadow-lg" : "bg-white text-slate-600 border border-slate-200 hover:border-teal-300"}`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-600 text-xs font-bold rounded-full mb-3 uppercase tracking-widest">
                {platforms[activePlatform].price}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{platforms[activePlatform].name}</h3>
              <p className="text-slate-500 mb-6">{platforms[activePlatform].desc}</p>
              <ul className="space-y-3">
                {platforms[activePlatform].features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8 bg-teal-600 hover:bg-teal-500 rounded-full" asChild>
                <Link href="#contact">Build on {platforms[activePlatform].name} <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-[2rem] blur-2xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
                <Image
                  src={platforms[activePlatform].image}
                  alt={platforms[activePlatform].name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Features */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Everything Your Store Needs</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Built-in features to run and grow your online business</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-teal-50 hover:border-teal-200 transition-all">
                <Star className="h-4 w-4 text-teal-600 flex-shrink-0 fill-teal-600" />
                <span className="text-sm text-slate-700 font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Stats */}
      <section className="py-24 bg-gradient-to-br from-teal-600 via-emerald-700 to-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Why DgCrux for eCommerce?</h2>
              <p className="mt-4 text-lg text-teal-100">We&apos;ve helped 100+ businesses launch and scale their online stores.</p>
              <div className="mt-8 grid gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-50">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "100+", l: "Stores Built" },
                { n: "3x", l: "Avg Revenue Boost" },
                { n: "50+", l: "Apps Integrated" },
                { n: "24/7", l: "Support" },
              ].map((s) => (
                <div key={s.l} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                  <div className="text-3xl font-black text-white">{s.n}</div>
                  <div className="text-sm text-teal-200 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-24 overflow-hidden bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl leading-tight">Ready to Start Selling Online?</h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">Tell us about your catalog and goals — we&apos;ll propose the best platform and plan.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-500 rounded-full shadow-xl px-10" asChild>
              <Link href="/#contact">Start Your Store</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-50" asChild>
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
