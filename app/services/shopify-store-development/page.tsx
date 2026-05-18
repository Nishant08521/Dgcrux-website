"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  ShoppingBag, 
  Palette, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Settings, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layout,
  Code2,
  Globe
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ShopifyStoreDevelopmentPage() {
  const services = [
    {
      icon: Palette,
      title: "Custom Theme Design",
      description: "Bespoke UI/UX designs tailored to your brand identity, ensuring a unique and memorable shopping experience.",
      color: "green"
    },
    {
      icon: Code2,
      title: "Store Development",
      description: "Full-scale store setup, from configuration to custom Liquid coding for advanced functionalities.",
      color: "emerald"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Mobile-first approach ensuring your store looks and performs perfectly on all devices.",
      color: "teal"
    },
    {
      icon: Settings,
      title: "App Integration",
      description: "Seamlessly integrate third-party apps for marketing, logistics, and customer support enhancements.",
      color: "lime"
    },
    {
      icon: Zap,
      title: "Performance Tuning",
      description: "Optimizing page load speeds and overall performance to boost conversion rates and SEO rankings.",
      color: "cyan"
    },
    {
      icon: Globe,
      title: "Migration Services",
      description: "Secure and seamless migration from other platforms like Magento, WooCommerce, or BigCommerce to Shopify.",
      color: "blue"
    },
  ]

  const benefits = [
    "Secure & Reliable Hosting",
    "Infinite Scalability for Growth",
    "Powerful Marketing & SEO Tools",
    "Extensive App Ecosystem",
    "Multiple Payment Gateway Support",
    "24/7 Global Support Infrastructure",
  ]

  const stats = [
    { label: "Stores Launched", value: "200+" },
    { label: "Conversion Lift", value: "35%" },
    { label: "Mobile Performance", value: "A+" },
    { label: "Client Satisfaction", value: "100%" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#004c3f]">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#008060]/30 via-transparent to-[#96bf48]/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid.png')] opacity-10" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 border-[#96bf48]/50 text-[#96bf48] px-4 py-1 text-sm font-medium bg-[#96bf48]/10 backdrop-blur-sm">
                Certified Shopify Experts
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-8">
                Build a Store that <span className="text-[#96bf48] italic">Sells</span> While You <span className="text-emerald-400">Sleep</span>
              </h1>
              <p className="text-xl text-emerald-100/70 leading-relaxed mb-10 max-w-xl">
                Elevate your eCommerce game with high-converting, custom Shopify stores. From design to deployment, we build digital storefronts that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" className="h-16 px-10 text-lg font-bold bg-[#008060] hover:bg-[#004c3f] shadow-xl shadow-black/20 rounded-full border border-white/10" asChild>
                  <Link href="#contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-white/20 text-white hover:bg-white/5 rounded-full" asChild>
                  <Link href="#services">Our Services</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                <Image 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
                  alt="Shopify eCommerce"
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004c3f]/80 via-transparent to-transparent" />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-[#96bf48]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">+120% ROI Growth</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-10 p-4 bg-[#008060]/20 backdrop-blur-md rounded-2xl border border-[#008060]/30 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-[#96bf48]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Ready for Launch</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -inset-10 bg-[#008060]/20 blur-[100px] rounded-full z-[-1]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Shopify <span className="text-[#008060] italic">Expertise</span> at Your Service
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We provide end-to-end Shopify development solutions to turn your digital commerce vision into a high-performance reality.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-[#008060]/5 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-[#008060]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#008060] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {service.description}
                  </p>
                  
                  {/* Subtle Background Glow */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#008060]/5 rounded-full blur-2xl group-hover:bg-[#008060]/10 transition-colors duration-500" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Shopify Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                alt="Team Collaboration"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-[#004c3f]/20" />
            </div>

            <div>
              <Badge className="mb-6 bg-[#008060]/10 text-[#008060] border-none px-4 py-1">Why Shopify?</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-slate-900 leading-tight">
                The Platform for <span className="text-[#008060]">Future-Ready</span> Brands
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Shopify is more than just an eCommerce platform; it's a complete commerce ecosystem that powers millions of the world's most successful brands.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#008060] flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-bold tracking-tight">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Button size="lg" className="h-16 px-10 rounded-full bg-[#008060] hover:bg-[#004c3f] text-white font-bold text-lg transition-all hover:scale-105" asChild>
                  <Link href="#contact">Discuss Your Strategy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#002e25] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Our <span className="text-[#96bf48] italic">Launch</span> Roadmap</h2>
            <p className="text-emerald-100/60 text-lg">A structured, proven process to take your store from concept to conversion.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", text: "We analyze your brand, goals, and target audience to build a solid strategy." },
              { step: "02", title: "Design", text: "Crafting high-fidelity UI/UX designs that reflect your brand's unique identity." },
              { step: "03", title: "Develop", text: "Building your store with clean code, Liquid expertise, and responsive architecture." },
              { step: "04", title: "Launch", text: "Rigorous testing followed by a seamless launch and post-launch support." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all duration-500">
                <div className="text-5xl font-black text-[#96bf48]/20 mb-6 group-hover:text-[#96bf48]/40 transition-colors italic">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-emerald-100/50 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-[#004c3f] to-[#008060] rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#96bf48]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                Your <span className="text-[#96bf48]">Global Storefront</span> Awaits
              </h2>
              <p className="text-xl text-emerald-100/80 mb-12 leading-relaxed">
                Stop waiting and start selling. Join the ranks of successful Shopify entrepreneurs with a store built by experts.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button size="lg" className="h-16 px-10 text-lg font-bold bg-[#96bf48] hover:bg-[#86ac41] text-[#004c3f] rounded-full shadow-2xl border-none">
                  Get a Free Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-white/30 text-white hover:bg-white/10 rounded-full">
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
