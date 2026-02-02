"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { 
  ChevronDown, 
  Menu, 
  X, 
  Palette, 
  Code, 
  Wrench, 
  TestTube, 
  Rocket, 
  Briefcase,
  Brain,
  Sparkles,
  Bot,
  Eye,
  MessageSquare,
  Zap,
  Cloud,
  Database,
  Shield,
  DollarSign,
  Settings,
  ShoppingCart,
  Store,
  Package,
  BarChart,
  Share2,
  Target,
  TrendingUp,
  GraduationCap,
  FileText,
  Sun,
  Building,
  Users,
  BookOpen,
  Phone,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { MarqueeBanner } from "@/components/marquee-banner"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const softwareDevelopment = [
    { name: "Product Design (UI/UX)", href: "/services/product-design", icon: Palette },
    { name: "Application Development", href: "/services/application-development", icon: Code },
    { name: "Custom Software Development", href: "/services/custom-software", icon: Wrench },
    { name: "QA & Testing", href: "/services/qa-testing", icon: Check },
    { name: "DevOps & Deployment", href: "/services/devops-deployment", icon: Rocket },
    { name: "Product Management", href: "/services/product-management", icon: Briefcase },
  ]

  const aiSolutions = [
    { name: "AI Strategy & Consulting", href: "/services/ai-strategy-consulting", icon: Brain },
    { name: "AI/ML Development", href: "/services/ai-ml-development", icon: Sparkles },
    { name: "Generative AI Solutions", href: "/services/generative-ai-solutions", icon: Sparkles },
    { name: "AI Agent Development", href: "/services/ai-agent-development", icon: Bot },
    { name: "Computer Vision Solutions", href: "/services/computer-vision-solutions", icon: Eye },
    { name: "AI Chatbot Development", href: "/services/ai-chatbot-development", icon: MessageSquare },
    { name: "AI Integration & Automation", href: "/services/ai-integration-automation", icon: Zap },
    { name: "AI Cloud Deployment", href: "/services/ai-cloud-deployment", icon: Cloud },
  ]

  const cloudSolutions = [
    { name: "Cloud Strategy & Assessment", href: "/services/cloud-strategy-assessment", icon: Cloud },
    { name: "Cloud Migration & Modernization", href: "/services/cloud-migration-modernization", icon: Database },
    { name: "DevOps, CI/CD & Automation", href: "/services/devops-cicd-automation", icon: Rocket },
    { name: "Cloud Security & Governance", href: "/services/cloud-security-governance", icon: Shield },
    { name: "Cost Optimization & FinOps", href: "/services/cost-optimization-finops", icon: DollarSign },
    { name: "AI/ML Cloud Services", href: "/services/ai-ml-cloud-services", icon: Brain },
    { name: "Managed Cloud & Support", href: "/services/managed-cloud-support", icon: Settings },
  ]

  const ecommerce = [
    { name: "Shopify Store Development", href: "/services/shopify-store-development", icon: Store },
    { name: "Custom eCommerce Platforms", href: "/services/custom-ecommerce-platforms", icon: ShoppingCart },
    { name: "Marketplace Development", href: "/services/marketplace-development", icon: Package },
    { name: "Maintenance & Support", href: "/services/ecommerce-maintenance-support", icon: Settings },
  ]

  const digitalMarketing = [
    { name: "SEO", href: "/services/seo", icon: BarChart },
    { name: "Social Media Marketing", href: "/services/social-media-marketing", icon: Share2 },
    { name: "Paid Ads", href: "/services/paid-ads", icon: Target },
    { name: "Conversion Funnel", href: "/services/conversion-funnel", icon: TrendingUp },
  ]

  const products = [
    { name: "AI Proctoring Exam Software", href: "/products/ai-proctor", icon: Eye },
    { name: "AI-Powered ATS", href: "/products/ats", icon: Users },
    { name: "AI Question Paper Generator", href: "/products/qp-generator", icon: FileText },
    { name: "Solar EPC ERP Solution", href: "/products/solar-erp", icon: Sun },
    { name: "Dealer Management System", href: "/products/dms", icon: Building },
    { name: "AI Hotel Booking Engine", href: "/products/hotel-booking", icon: Building },
    { name: "Restaurant Management System", href: "/products/restaurant-management", icon: Store },
    { name: "Learning Management System", href: "/products/lms", icon: GraduationCap },
  ]

  const company = [
    { name: "About Us", href: "/about", icon: Building },
    { name: "Our Clients", href: "/#clients", icon: Users },
    { name: "Case Studies", href: "/case-studies", icon: BookOpen },
    { name: "Blogs", href: "/blogs", icon: FileText },
    { name: "Contact Us", href: "/contact", icon: Phone },
  ]

  return (
    <nav className="sticky top-0 w-full z-50 bg-background">
      <MarqueeBanner />
      <div className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://dgcrux.com/images/logo.png"
              alt="dgcrux"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-yellow-400 hover:text-black transition-colors rounded-md">
                Software Development <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-[600px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Software Development Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {softwareDevelopment.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item p-4 rounded-lg border border-border hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <Icon className="h-5 w-5 text-muted-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm font-medium text-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400">
                              {item.name}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-yellow-400 hover:text-black transition-colors rounded-md">
                AI Solutions <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-[600px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">AI Solutions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {aiSolutions.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item p-4 rounded-lg border border-border hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <Icon className="h-5 w-5 text-muted-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm font-medium text-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400">
                              {item.name}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-yellow-400 hover:text-black transition-colors rounded-md">
                Cloud Solutions <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-[600px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Cloud Solutions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {cloudSolutions.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item p-4 rounded-lg border border-border hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <Icon className="h-5 w-5 text-muted-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm font-medium text-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400">
                              {item.name}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-yellow-400 hover:text-black transition-colors rounded-md">
                eCommerce <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-[500px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">eCommerce Solutions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {ecommerce.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item p-4 rounded-lg border border-border hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <Icon className="h-5 w-5 text-muted-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm font-medium text-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400">
                              {item.name}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-yellow-400 hover:text-black transition-colors rounded-md">
                Digital Marketing <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-[500px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Digital Marketing Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {digitalMarketing.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item p-4 rounded-lg border border-border hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <Icon className="h-5 w-5 text-muted-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm font-medium text-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400">
                              {item.name}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-yellow-400 hover:text-black transition-colors rounded-md">
                Products <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-[600px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Our Products</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {products.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item p-4 rounded-lg border border-border hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <Icon className="h-5 w-5 text-muted-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm font-medium text-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400">
                              {item.name}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-yellow-400 hover:text-black transition-colors rounded-md">
                Company <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-[400px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Company</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {company.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item p-4 rounded-lg border border-border hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <Icon className="h-5 w-5 text-muted-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm font-medium text-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400">
                              {item.name}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* <Button size="sm" className="ml-4">
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Software Development</h3>
              {softwareDevelopment.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:bg-yellow-400 hover:text-black py-1 pl-4 rounded transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">AI Solutions</h3>
              {aiSolutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:bg-yellow-400 hover:text-black py-1 pl-4 rounded transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Cloud Solutions</h3>
              {cloudSolutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:bg-yellow-400 hover:text-black py-1 pl-4 rounded transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">eCommerce</h3>
              {ecommerce.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:bg-yellow-400 hover:text-black py-1 pl-4 rounded transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Digital Marketing</h3>
              {digitalMarketing.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:bg-yellow-400 hover:text-black py-1 pl-4 rounded transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Products</h3>
              {products.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:bg-yellow-400 hover:text-black py-1 pl-4 rounded transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Company</h3>
              {company.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:bg-yellow-400 hover:text-black py-1 pl-4 rounded transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* <Button className="w-full">Get Started</Button> */}
          </div>
        </div>
      )}
      </div>
    </nav>
  )
}
