"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Code2,
  BrainCircuit,
  Cloud,
  ShoppingCart,
  BarChart3,
  Settings2,
  ArrowRight
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const services = [
  {
    title: "Software Development & Product Engineering",
    description: "We specialize in custom software development and SaaS product engineering, helping businesses design, build, and scale secure, high-performance web and mobile applications using modern, cloud-native architectures.",
    icon: Code2,
    href: "/services/software-development",
    items: ["Product Design (UI/UX)", "Web & Mobile Apps", "Custom Software Development", "DevOps & Deployment", "Product Management"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Product Engineering Services",
    description: "We help businesses design and deploy AI-powered products using machine learning, generative AI, intelligent automation, and AI-enabled software engineering.",
    icon: BrainCircuit,
    href: "/services/ai-solutions",
    items: ["AI Strategy & Consulting", "AI/ML & Generative AI Development", "AI Agents & Intelligent Automation", "AI Enabled Software Development", "Computer Vision & NLP Solutions", "AI Chatbots & Virtual Assistants", "AI Cloud Deployment"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Cloud Solutions",
    description: "We deliver scalable cloud solutions and cloud modernization services, enabling businesses to migrate, optimize, and manage applications on AWS, Azure, and Google Cloud with security, performance, and cost efficiency at the core.",
    icon: Cloud,
    href: "/services/cloud-solutions",
    items: ["Cloud Strategy & Assessment", "Cloud Migration & Modernization", "DevOps, CI/CD & Automation", "Cloud Security & Governance",
      "Cost Optimization & FinOps",
      "AI/ML & Specialized Cloud Services",
      "Managed Cloud & Support"],
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "eCommerce Solutions",
    description: "We build custom eCommerce solutions and scalable online marketplaces, helping brands launch, optimize, and grow high-performance eCommerce platforms using Shopify and modern commerce technologies.",
    icon: ShoppingCart,
    href: "/services/ecommerce",
    items: ["Shopify Development", "Custom eCommerce Platforms", "Marketplace Development", "Maintenance & Support"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Digital Marketing",
    description: "Deliver data-driven digital marketing services, SEO services, AI optimization that help businesses increase visibility, acquire customers, and scale growth through performance-focused campaigns and conversion optimization.",
    icon: BarChart3,
    href: "/services/digital-marketing",
    items: ["SEO (Search Engine Optimization)", "AI Optimization", "Social Media Marketing", "Paid Ads (Google, Facebook, LinkedIn)", "Performance Marketing", "Conversion Optimization"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Managed IT Services",
    description: "We provide reliable managed IT services and ongoing technical support to ensure your applications, infrastructure, and systems remain secure, optimized, and continuously operational.",
    icon: Settings2,
    href: "/services/managed-it",
    items: ["24/7 Support", "Network Management", "Security Services", "IT Consulting"],
    color: "from-slate-600 to-slate-800"
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-black py-20 sm:py-28 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">Our Expertise</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] mb-6">
            What We Offer
          </h3>
          {/* <p className="text-lg text-slate-600 leading-relaxed">
            From intelligent AI agents to scalable cloud architectures, we deliver
            comprehensive technology solutions tailored to your business goals.
          </p> */}
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: typeof services[0]
  index: number
}) {
  const Icon = service.icon

  return (
    <motion.div variants={cardVariants} className="h-full">
    <Link
      href={service.href}
      className="group relative flex flex-col h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 border border-purple-500/20 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(139,92,246,0.3)] overflow-hidden block"
      style={{ backgroundColor: 'rgb(26, 17, 96)' }}
    >
      {/* Gradient accent top border */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Icon */}
      <div className="mb-5 relative">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <Icon size={28} />
        </div>
        <span className="absolute -right-4 -top-4 text-5xl font-black text-white/10 select-none -z-10 transition-colors duration-500 group-hover:text-white/20">
          {`0${index + 1}`}
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {service.title}
        </h4>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Key items */}
        <ul className="space-y-1.5 mb-5">
          {service.items.map((item, i) => (
            <li key={i} className="flex items-center text-xs text-gray-400 font-medium">
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2 shrink-0`} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Button footer */}
      <div className="flex items-center text-xs font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mt-auto">
        Explore Service
        <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      {/* Decorative blobs */}
      <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.color} opacity-[0.15] rounded-full group-hover:scale-150 transition-transform duration-700`} />
    </Link>
    </motion.div>
  )
}

