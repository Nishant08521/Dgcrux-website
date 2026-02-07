import { Button } from "@/components/ui/button"
import {
  FileCheck,
  Hotel,
  Users,
  Utensils,
  ArrowRight,
  Sun,
  Car,
  GraduationCap,
  BookOpen
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const allProducts = [
  {
    title: "AI Proctoring",
    logo: FileCheck,
    headline: "Secure, scalable exam ecosystem.",
    stats: [{ label: "Accuracy", value: "99.9%" }],
    bgImage: "/online-learning-platform.png",
    color: "bg-indigo-600",
    watermark: "PROCTOR",
    href: "/products/ai-proctor"
  },
  {
    title: "Eco-Eats POS",
    logo: Utensils,
    headline: "Unified commerce for restaurants.",
    stats: [{ label: "Orders", value: "50%" }],
    bgImage: "/ecommerce-marketplace.png",
    color: "bg-rose-600",
    watermark: "POS",
    href: "/products/restaurant-management"
  },
  {
    title: "TalentBot ATS",
    logo: Users,
    headline: "Recruitment prioritize talent.",
    stats: [{ label: "Efficiency", value: "60%" }],
    bgImage: "/ai-chatbot-interface.png",
    color: "bg-emerald-600",
    watermark: "HRMS",
    href: "/products/ats"
  },
  {
    title: "StaySmart AI",
    logo: Hotel,
    headline: "Optimizing guest direct bookings.",
    stats: [{ label: "Direct", value: "40%" }],
    bgImage: "/mobile-banking-app.png",
    color: "bg-blue-600",
    watermark: "HOTEL",
    href: "/products/hotel-booking"
  },
  {
    title: "SolarX ERP",
    logo: Sun,
    headline: "Solar EPC project management.",
    stats: [{ label: "ROI", value: "25%" }],
    bgImage: "/modern-technology-office-team-collaboration.jpg",
    color: "bg-amber-600",
    watermark: "SOLAR",
    href: "/products/solar-erp"
  },
  {
    title: "AutoMaster DMS",
    logo: Car,
    headline: "Streamlined dealer management.",
    stats: [{ label: "Sales", value: "30%" }],
    bgImage: "/mobile-banking-app.png",
    color: "bg-slate-700",
    watermark: "AUTO",
    href: "/products/dms"
  },
  {
    title: "EduGen AI",
    logo: GraduationCap,
    headline: "AI Question Paper Generator.",
    stats: [{ label: "Time", value: "85%" }],
    bgImage: "/online-learning-platform.png",
    color: "bg-purple-600",
    watermark: "PAPER",
    href: "/products/qp-generator"
  },
  {
    title: "SkillUp LMS",
    logo: BookOpen,
    headline: "Learning Management System.",
    stats: [{ label: "Impact", value: "15k+" }],
    bgImage: "/online-learning-platform.png",
    color: "bg-cyan-600",
    watermark: "LEARN",
    href: "/products/lms"
  }
]

export function ProductsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-3">Our Products</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Measurable Growth, Delivered.
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: typeof allProducts[0] }) {
  const Logo = product.logo

  return (
    <Link href={product.href} className="group relative block w-full aspect-[4/5] overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-xl hover:shadow-indigo-100">
      {/* Background Color Layer */}
      <div className={`absolute inset-0 ${product.color} transition-transform duration-500 group-hover:scale-105`} />

      {/* Background Watermark */}
      <div className="absolute -bottom-4 -right-4 text-7xl font-black text-white/10 select-none leading-none pointer-events-none transition-all duration-500 group-hover:-translate-y-2">
        {product.watermark}
      </div>

      {/* Content Layer */}
      <div className="relative h-full w-full p-6 flex flex-col text-white z-10">
        {/* Top Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md transition-transform duration-500 group-hover:rotate-6">
            <Logo className={`w-6 h-6 ${product.color.replace('bg-', 'text-')}`} />
          </div>
          <span className="text-sm font-bold uppercase tracking-tight">{product.title}</span>
        </div>

        {/* Headline */}
        <h4 className="text-lg font-extrabold leading-tight mb-6 line-clamp-2">
          {product.headline}
        </h4>

        {/* Stats */}
        <div className="mt-auto">
          {product.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-3xl font-black">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Image Mini */}
        <div className="absolute bottom-4 right-4 w-28 h-28 pointer-events-none transition-all duration-500 group-hover:-translate-y-4">
          <div className="relative w-full h-full">
            <Image
              src={product.bgImage}
              alt={product.title}
              fill
              className="object-contain drop-shadow-lg transform rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
