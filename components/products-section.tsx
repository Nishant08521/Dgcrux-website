import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, FileCheck, Sun, Car, Hotel, Utensils, BookOpen } from "lucide-react"
import Link from "next/link"

const products = [
  {
    icon: FileCheck,
    title: "AI Proctoring Exam Software",
    description: "Advanced AI-powered proctoring solution for secure online examinations",
    href: "/products/ai-proctor",
  },
  {
    icon: Users,
    title: "AI-Powered ATS",
    description: "Intelligent applicant tracking system to streamline your hiring process",
    href: "/products/ats",
  },
  {
    icon: GraduationCap,
    title: "AI Question Paper Generator",
    description: "Automated question paper generation with AI-driven difficulty assessment",
    href: "/products/qp-generator",
  },
  {
    icon: Sun,
    title: "Solar EPC ERP Solution",
    description: "Complete ERP solution for solar EPC project management",
    href: "/products/solar-erp",
  },
  {
    icon: Car,
    title: "Dealer Management System (DMS)",
    description: "Comprehensive management system for automotive dealerships",
    href: "/products/dms",
  },
  {
    icon: Hotel,
    title: "AI Hotel Booking Engine",
    description: "Smart booking engine with AI-powered recommendations",
    href: "/products/hotel-booking",
  },
  {
    icon: Utensils,
    title: "Restaurant Management System",
    description: "Complete POS and management solution for restaurants",
    href: "/products/restaurant-management",
  },
  {
    icon: BookOpen,
    title: "Learning Management System (LMS)",
    description: "Feature-rich LMS platform for online education",
    href: "/products/lms",
  },
]

export function ProductsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready-to-deploy SaaS solutions and white-label products for your business
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <Card
                key={product.title}
                className="flex flex-col transition-all bg-[#1a1160] hover:bg-amber-500 hover:shadow-lg border-[#1a1160] hover:border-amber-500 group"
              >
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 group-hover:bg-white/30">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-white">{product.title}</CardTitle>
                  <CardDescription className="text-sm text-white/80 group-hover:text-white/90">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button variant="ghost" size="sm" asChild className="w-full text-white hover:text-white hover:bg-white/20">
                    <Link href={product.href}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
