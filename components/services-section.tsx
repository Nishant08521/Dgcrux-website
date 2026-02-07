import Link from "next/link"
import {
  Code2,
  BrainCircuit,
  Cloud,
  ShoppingCart,
  BarChart3,
  Settings2,
  ArrowRight
} from "lucide-react"

const services = [
  {
    title: "Software Development",
    description: "End-to-end development services from design to deployment.",
    icon: Code2,
    href: "/services/software-development",
    items: ["UI/UX Design", "Web & Mobile Apps", "Custom Development", "QA & Testing", "DevOps & Deployment"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Solutions & Services",
    description: "Cutting-edge AI integration for next-gen business growth.",
    icon: BrainCircuit,
    href: "/services/ai-solutions",
    items: ["AI Strategy", "AI/ML Development", "Generative AI", "AI Agents", "Chatbots & Virtual Assistants"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and modernization services.",
    icon: Cloud,
    href: "/services/cloud-solutions",
    items: ["Cloud Migration", "Modernization", "Security & Governance", "Cost Optimization", "Managed Cloud"],
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "eCommerce Solutions",
    description: "Build and scale your digital storefront with expert solutions.",
    icon: ShoppingCart,
    href: "/services/ecommerce",
    items: ["Shopify Development", "Custom Platforms", "Marketplace Dev", "Maintenance & Support"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing to boost your brand's digital presence.",
    icon: BarChart3,
    href: "/services/digital-marketing",
    items: ["SEO Optimization", "Social Media Marketing", "Paid Ads", "Performance Marketing"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Managed IT Services",
    description: "Reliable IT support and infrastructure management.",
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
      className="relative bg-[#f8fafc] py-20 sm:py-28 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">Our Expertise</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6">
            Future-Ready Solutions for Your Digital Growth
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            From intelligent AI agents to scalable cloud architectures, we deliver
            comprehensive technology solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </div>
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
    <Link
      href={service.href}
      className="group relative flex flex-col h-full bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden"
    >
      {/* Gradient accent top border */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Icon */}
      <div className="mb-8 relative">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <Icon size={32} />
        </div>
        <span className="absolute -right-4 -top-4 text-6xl font-black text-slate-50 select-none -z-10 transition-colors duration-500 group-hover:text-slate-100">
          {`0${index + 1}`}
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h4>
        <p className="text-slate-500 mb-6 line-clamp-2">
          {service.description}
        </p>

        {/* Key items */}
        <ul className="space-y-2 mb-8">
          {service.items.slice(0, 4).map((item, i) => (
            <li key={i} className="flex items-center text-sm text-slate-600 font-medium">
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2.5 shrink-0`} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Button footer */}
      <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 mt-auto">
        Explore Service
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      {/* Decorative blobs */}
      <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.color} opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700`} />
    </Link>
  )
}

