"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
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
  Check,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { MarqueeBanner } from "@/components/marquee-banner"

export function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const softwareDevelopment = [
    { name: "Product Design", href: "/services/product-design", icon: Palette, description: "Creating user-centric UI/UX designs.", color: "bg-pink-500" },
    { name: "App Development", href: "/services/application-development", icon: Code, description: "Building scalable web & mobile apps.", color: "bg-blue-500" },
    { name: "Custom Software", href: "/services/custom-software", icon: Wrench, description: "Tailored solutions for your business.", color: "bg-indigo-500" },
    { name: "QA & Testing", href: "/services/qa-testing", icon: Check, description: "Ensuring bug-free software delivery.", color: "bg-green-500" },
    { name: "DevOps", href: "/services/devops-deployment", icon: Rocket, description: "Streamlining deployment & CI/CD.", color: "bg-orange-500" },
    { name: "Product Management", href: "/services/product-management", icon: Briefcase, description: "Expert guidance for product success.", color: "bg-purple-500" },
  ]

  const aiSolutions = [
    { name: "AI Strategy", href: "/services/ai-strategy-consulting", icon: Brain, description: "Defining your AI roadmap & vision.", color: "bg-blue-600" },
    { name: "AI/ML Dev", href: "/services/ai-ml-development", icon: Sparkles, description: "Building predictive ML models.", color: "bg-purple-600" },
    { name: "Generative AI", href: "/services/generative-ai-solutions", icon: Sparkles, description: "LLMs and creative AI solutions.", color: "bg-pink-600" },
    { name: "AI Agents", href: "/services/ai-agent-development", icon: Bot, description: "Autonomous AI for business tasks.", color: "bg-indigo-600" },
    { name: "Computer Vision", href: "/services/computer-vision-solutions", icon: Eye, description: "Visual data processing & analysis.", color: "bg-cyan-600" },
    { name: "AI Chatbots", href: "/services/ai-chatbot-development", icon: MessageSquare, description: "Intelligent conversational agents.", color: "bg-green-600" },
    { name: "AI Automation", href: "/services/ai-integration-automation", icon: Zap, description: "Automating workflows with AI.", color: "bg-yellow-600" },
    { name: "Cloud AI", href: "/services/ai-cloud-deployment", icon: Cloud, description: "Scalable AI on cloud infrastructure.", color: "bg-sky-600" },
  ]

  const cloudSolutions = [
    { name: "Cloud Strategy", href: "/services/cloud-strategy-assessment", icon: Cloud, description: "Assessing cloud readiness & goals.", color: "bg-blue-500" },
    { name: "Cloud Migration", href: "/services/cloud-migration-modernization", icon: Database, description: "Seamless transition to the cloud.", color: "bg-indigo-500" },
    { name: "Automation", href: "/services/devops-cicd-automation", icon: Rocket, description: "DevOps & CI/CD pipeline setup.", color: "bg-orange-500" },
    { name: "Cloud Security", href: "/services/cloud-security-governance", icon: Shield, description: "Ensuring compliance & protection.", color: "bg-red-500" },
    { name: "Cost Optimization", href: "/services/cost-optimization-finops", icon: DollarSign, description: "FinOps for cloud cost efficiency.", color: "bg-green-500" },
    { name: "Cloud AI", href: "/services/ai-ml-cloud-services", icon: Brain, description: "Powering AI with cloud scale.", color: "bg-purple-500" },
    { name: "Managed Cloud", href: "/services/managed-cloud-support", icon: Settings, description: "24/7 cloud support & monitoring.", color: "bg-gray-600" },
  ]

  const ecommerce = [
    { name: "Shopify Dev", href: "/services/shopify-store-development", icon: Store, description: "Fast, reliable Shopify stores.", color: "bg-green-500" },
    { name: "Custom Platforms", href: "/services/custom-ecommerce-platforms", icon: ShoppingCart, description: "Bespoke eCommerce solutions.", color: "bg-blue-600" },
    { name: "Marketplaces", href: "/services/marketplace-development", icon: Package, description: "Multi-vendor store development.", color: "bg-orange-500" },
    { name: "Maintenance", href: "/services/ecommerce-maintenance-support", icon: Settings, description: "Ongoing store support & updates.", color: "bg-gray-500" },
  ]

  const digitalMarketing = [
    { name: "SEO", href: "/services/seo", icon: BarChart, description: "Search engine ranking optimization.", color: "bg-blue-500" },
    { name: "Social Media", href: "/services/social-media-marketing", icon: Share2, description: "Building your brand presence online.", color: "bg-pink-500" },
    { name: "Performance Marketing", href: "/services/paid-ads", icon: Target, description: "High-ROI PPC and ad campaigns.", color: "bg-red-500" },
    { name: "Funnels", href: "/services/conversion-funnel", icon: TrendingUp, description: "Optimizing user journey to sales.", color: "bg-green-500" },
  ]

  const products = [
    {
      name: "AI Proctoring",
      href: "/products/ai-proctor",
      icon: Eye,
      description: "Secure exams with real-time AI monitoring.",
      color: "bg-blue-600"
    },
    {
      name: "AI-Powered ATS",
      href: "/products/ats",
      icon: Users,
      description: "Smart recruitment with automated screening.",
      color: "bg-purple-600"
    },
    {
      name: "QP Generator",
      href: "/products/qp-generator",
      icon: FileText,
      description: "Instantly create balanced question papers.",
      color: "bg-orange-500"
    },
    {
      name: "Solar ERP",
      href: "/products/solar-erp",
      icon: Sun,
      description: "Manage end-to-end solar project lifecycle.",
      color: "bg-yellow-500"
    },
    {
      name: "Dealer Management",
      href: "/products/dms",
      icon: Building,
      description: "Streamline operations for dealer networks.",
      color: "bg-cyan-600"
    },
    {
      name: "Hotel Booking",
      href: "/products/hotel-booking",
      icon: Building,
      description: "Smart system with dynamic pricing.",
      color: "bg-red-500"
    },
    {
      name: "Restaurant Management",
      href: "/products/restaurant-management",
      icon: Store,
      description: "Complete POS for modern eateries.",
      color: "bg-green-600"
    },
    {
      name: "Learning Management",
      href: "/products/lms",
      icon: GraduationCap,
      description: "Engaging platform for digital learning.",
      color: "bg-indigo-600"
    },
  ]

  const company = [
    { name: "About Us", href: "/about", icon: Building, description: "Our journey and core values.", color: "bg-blue-600" },
    { name: "Our Clients", href: "/#clients", icon: Users, description: "Global brands we partner with.", color: "bg-indigo-600" },
    { name: "Case Studies", href: "/case-studies", icon: BookOpen, description: "Success stories and project results.", color: "bg-purple-600" },
    { name: "Blogs", href: "/blogs", icon: FileText, description: "Latest insights and tech trends.", color: "bg-orange-600" },
    { name: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch with our experts.", color: "bg-green-600" },
  ]

  const showTransparent = isHomePage && !isScrolled

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out border-b ${isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm border-border -translate-y-[41px]"
          : showTransparent
            ? "bg-transparent border-white/10 translate-y-0"
            : "bg-white border-border translate-y-0"
          }`}
      >
        <MarqueeBanner isScrolled={isScrolled} isTransparent={isHomePage} />
        <div className={`transition-colors duration-500 ${showTransparent ? "bg-transparent" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="https://dgcrux.com/images/logo.png"
                  alt="dgcrux"
                  width={140}
                  height={50}
                  className={`h-12 w-auto transition-all duration-500 ${showTransparent ? "brightness-0 invert" : ""}`}
                  priority
                />
              </Link>

              <div className="hidden lg:flex items-center gap-1">
                <div className="group">
                  <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${showTransparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:bg-blue-600 hover:text-white"
                    }`}>
                    AI Development <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 right-0 mx-auto top-full mt-2 w-[850px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden">
                    <div className="flex">
                      {/* Left: Main Services Grid */}
                      <div className="w-2/3 p-8">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">AI Services & Solutions</h3>
                        <div className="grid grid-cols-2 gap-8">
                          {aiSolutions.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group/item flex items-center gap-4 transition-all duration-300 hover:translate-x-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-150"
                              >
                                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-md ${item.color} group-hover:scale-110 transition-transform`}>
                                  <Icon className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                  <div className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-muted-foreground line-clamp-2 leading-tight mt-0.5">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      {/* Right Side: Featured Content */}
                      <div className="w-1/3 p-8 bg-muted/10 border-l border-border">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">Featured Insight</h3>
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-3 group/img opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
                          <Image
                            src="/ai_solutions_featured_1778046359542.png"
                            alt="AI Featured"
                            fill
                            className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                          />
                        </div>
                        <h4 className="text-sm font-bold text-foreground mb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-400">Leader in AI-First Product Engineering</h4>
                        <p className="text-xs text-muted-foreground mb-3 leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-500">
                          Discover how we're transforming industries through advanced Generative AI and ML solutions.
                        </p>
                        <Link href="/blogs/ai-transformation" className="text-xs font-bold text-primary hover:underline flex items-center gap-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-600">
                          Read Full Article <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${showTransparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:bg-blue-600 hover:text-white"
                    }`}>
                    Software Development <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 right-0 mx-auto top-full mt-2 w-[850px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden">
                    <div className="flex">
                      {/* Left: Services Grid */}
                      <div className="w-2/3 p-8">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Software Services</h3>
                        <div className="grid grid-cols-2 gap-8">
                          {softwareDevelopment.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group/item flex items-center gap-4 transition-all duration-300 hover:translate-x-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-150"
                              >
                                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-md ${item.color} group-hover:scale-110 transition-transform`}>
                                  <Icon className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                  <div className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-muted-foreground line-clamp-2 leading-tight mt-0.5">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      {/* Right Side: Featured */}
                      <div className="w-1/3 p-8 bg-muted/10 border-l border-border">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">Our Approach</h3>
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-3 group/img opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
                          <Image
                            src="/software_dev_featured.png"
                            alt="Software Dev Featured"
                            fill
                            className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                          />
                        </div>
                        <h4 className="text-sm font-bold text-foreground mb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-400">Modern Architecture, Scalable Code</h4>
                        <p className="text-xs text-muted-foreground mb-3 leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-500">
                          We build robust applications using cutting-edge technologies that grow with your business.
                        </p>
                        <Link href="/blogs/software-modernization" className="text-xs font-bold text-primary hover:underline flex items-center gap-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-600">
                          Learn More <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="group">
                  <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${showTransparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:bg-blue-600 hover:text-white"
                    }`}>
                    Cloud Solutions <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 right-0 mx-auto top-full mt-2 w-[850px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden">
                    <div className="flex">
                      {/* Left: Services Grid */}
                      <div className="w-2/3 p-8">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Cloud Solutions</h3>
                        <div className="grid grid-cols-2 gap-8">
                          {cloudSolutions.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group/item flex items-center gap-4 transition-all duration-300 hover:translate-x-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-150"
                              >
                                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-md ${item.color} group-hover:scale-110 transition-transform`}>
                                  <Icon className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                  <div className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-muted-foreground line-clamp-2 leading-tight mt-0.5">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      {/* Right Side: Featured */}
                      <div className="w-1/3 p-8 bg-muted/10 border-l border-border">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">Cloud Innovation</h3>
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-3 group/img opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
                          <Image
                            src="/cloud_solutions_featured.png"
                            alt="Cloud Solutions Featured"
                            fill
                            className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                          />
                        </div>
                        <h4 className="text-sm font-bold text-foreground mb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-400">Seamless Migration, Maximum Uptime</h4>
                        <p className="text-xs text-muted-foreground mb-3 leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-500">
                          We help you build a resilient and secure cloud infrastructure that supports your digital growth.
                        </p>
                        <Link href="/blogs/cloud-security" className="text-xs font-bold text-primary hover:underline flex items-center gap-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-600">
                          View Insights <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${showTransparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:bg-blue-600 hover:text-white"
                    }`}>
                    eCommerce <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 right-0 mx-auto top-full mt-2 w-[850px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden">
                    <div className="flex">
                      {/* Left: Services Grid */}
                      <div className="w-2/3 p-8">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">eCommerce Solutions</h3>
                        <div className="grid grid-cols-2 gap-8">
                          {ecommerce.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group/item flex items-center gap-4 transition-all duration-300 hover:translate-x-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-150"
                              >
                                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-md ${item.color} group-hover:scale-110 transition-transform`}>
                                  <Icon className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                  <div className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-muted-foreground line-clamp-2 leading-tight mt-0.5">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      {/* Right Side: Featured */}
                      <div className="w-1/3 p-8 bg-muted/10 border-l border-border">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">Global Reach</h3>
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-3 group/img opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
                          <Image
                            src="/ecommerce_featured.png"
                            alt="eCommerce Featured"
                            fill
                            className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                          />
                        </div>
                        <h4 className="text-sm font-bold text-foreground mb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-400">Sell Everywhere, Manage Anywhere</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-500">
                          We create high-converting eCommerce experiences that drive sales and loyalty.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${showTransparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:bg-blue-600 hover:text-white"
                    }`}>
                    Digital Marketing <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 right-0 mx-auto top-full mt-2 w-[850px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden">
                    <div className="flex">
                      {/* Left: Services Grid */}
                      <div className="w-2/3 p-8">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Marketing Services</h3>
                        <div className="grid grid-cols-2 gap-8">
                          {digitalMarketing.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group/item flex items-center gap-4 transition-all duration-300 hover:translate-x-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-150"
                              >
                                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-md ${item.color} group-hover:scale-110 transition-transform`}>
                                  <Icon className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                  <div className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-muted-foreground line-clamp-2 leading-tight mt-0.5">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      {/* Right Side: Featured */}
                      <div className="w-1/3 p-8 bg-muted/10 border-l border-border">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">Marketing Trends</h3>
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-3 group/img opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
                          <Image
                            src="/software_dev_featured.png"
                            alt="Digital Marketing Featured"
                            fill
                            className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                          />
                        </div>
                        <h4 className="text-sm font-bold text-foreground mb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-400">Data-Driven Growth Strategies</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-500">
                          We use advanced analytics and creative storytelling to connect your brand with the right audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${showTransparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:bg-blue-600 hover:text-white"
                    }`}>
                    Products <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 right-0 mx-auto top-full mt-2 w-[850px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden">
                    <div className="flex">
                      {/* Left: Products Grid */}
                      <div className="w-2/3 p-8">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Our Products</h3>
                        <div className="grid grid-cols-2 gap-8">
                          {products.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group/item flex items-center gap-4 transition-all duration-300 hover:translate-x-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-150"
                              >
                                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-md ${item.color} group-hover:scale-110 transition-transform`}>
                                  <Icon className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                  <div className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-muted-foreground line-clamp-2 leading-tight mt-0.5">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      {/* Right Side: Featured */}
                      <div className="w-1/3 p-8 bg-muted/10 border-l border-border">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">New Release</h3>
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-3 group/img opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
                          <Image
                            src="/ecommerce_featured.png"
                            alt="Products Featured"
                            fill
                            className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                          />
                        </div>
                        <h4 className="text-sm font-bold text-foreground mb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-400">AI Proctoring Solution</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-500">
                          Secure and scalable online examination platform with AI-driven monitoring.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${showTransparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:bg-blue-600 hover:text-white"
                    }`}>
                    Company <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 right-0 mx-auto top-full mt-2 w-[850px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden">
                    <div className="flex">
                      {/* Left: Company Grid */}
                      <div className="w-2/3 p-8">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Company</h3>
                        <div className="grid grid-cols-2 gap-8">
                          {company.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group/item flex items-center gap-4 transition-all duration-300 hover:translate-x-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-150"
                              >
                                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-md ${item.color} group-hover:scale-110 transition-transform`}>
                                  <Icon className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                  <div className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-muted-foreground line-clamp-2 leading-tight mt-0.5">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      {/* Right Side: Featured */}
                      <div className="w-1/3 p-8 bg-muted/10 border-l border-border">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">Our Values</h3>
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-3 group/img opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
                          <Image
                            src="/cloud_solutions_featured.png"
                            alt="Company Featured"
                            fill
                            className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                          />
                        </div>
                        <h4 className="text-sm font-bold text-foreground mb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-400">Innovation & Integrity</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-500">
                          We believe in building long-term partnerships through transparent and innovative solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2 transition-colors ${showTransparent ? "text-white" : "text-foreground"}`}
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
                      className="block text-sm text-muted-foreground hover:bg-blue-600 hover:text-white py-1 pl-4 rounded transition-colors"
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
                      className="block text-sm text-muted-foreground hover:bg-blue-600 hover:text-white py-1 pl-4 rounded transition-colors"
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
                      className="block text-sm text-muted-foreground hover:bg-blue-600 hover:text-white py-1 pl-4 rounded transition-colors"
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
                      className="block text-sm text-muted-foreground hover:bg-blue-600 hover:text-white py-1 pl-4 rounded transition-colors"
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
                      className="block text-sm text-muted-foreground hover:bg-blue-600 hover:text-white py-1 pl-4 rounded transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Our Products</h3>
                  {products.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-muted-foreground hover:bg-blue-600 hover:text-white py-1 pl-4 rounded transition-colors"
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
                      className="block text-sm text-muted-foreground hover:bg-blue-600 hover:text-white py-1 pl-4 rounded transition-colors"
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
      <div className={`transition-all duration-500 ${isHomePage && !isScrolled ? "h-0" : (isScrolled ? "h-20" : "h-[120px]")}`} />
    </>
  )
}
