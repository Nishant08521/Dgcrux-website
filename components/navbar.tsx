"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/dgcrux-logo.png" alt="DgCrux Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Software Development</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/software-development#product-design"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Product Design (UI/UX)</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/software-development#app-development"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Application Development (Web & Mobile)</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/software-development#custom-software"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Custom Software Development</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/software-development#qa-testing"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">QA & Testing</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/software-development#devops"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">DevOps & Deployment</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/software-development#product-management"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Product Management</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>AI Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[550px] gap-2 p-4 md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ai-solutions#strategy"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI Strategy & Consulting</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ai-solutions#ml-development"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI/ML Development</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ai-solutions#generative-ai"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Generative AI Solutions</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ai-solutions#ai-agents"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI Agent Development</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ai-solutions#computer-vision"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Computer Vision Solutions</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ai-solutions#chatbot"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI Chatbot & Virtual Assistant</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ai-solutions#automation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI Integration & Automation (RPA)</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ai-solutions#cloud-deployment"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI Cloud Deployment</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Cloud Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/cloud-solutions#strategy"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Cloud Strategy & Assessment</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/cloud-solutions#migration"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Cloud Migration & Modernization</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/cloud-solutions#devops"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">DevOps, CI/CD & Automation</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/cloud-solutions#security"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Cloud Security & Governance</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/cloud-solutions#cost-optimization"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Cost Optimization & FinOps</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/cloud-solutions#ai-ml"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI/ML & Specialized Cloud Services</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/cloud-solutions#managed"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Managed Cloud & Support</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>eCommerce</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ecommerce#shopify"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Shopify Store Development</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ecommerce#custom"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Custom eCommerce Platforms</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ecommerce#marketplace"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Marketplace Development</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/ecommerce#maintenance"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Maintenance & Support</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Digital Marketing</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/digital-marketing#seo"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">SEO (Search Engine Optimization)</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/digital-marketing#social-media"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Social Media Marketing</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/digital-marketing#paid-ads"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Paid Ads (Google, Facebook, LinkedIn)</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/digital-marketing#conversion"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Conversion Funnel</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[450px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/ai-proctor"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI Proctoring Exam Software</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/ats"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI-Powered ATS (Applicant Tracking System)</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/qp-generator"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI Question Paper Generator</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/solar-erp"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Solar EPC ERP Solution</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/dms"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Dealer Management System (DMS)</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/hotel-booking"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">AI Hotel Booking Engine</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/restaurant-management"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Restaurant Management System</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/lms"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Learning Management System (LMS)</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/about"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">About Us</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/#clients"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Our Clients</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/case-studies"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Case Studies</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/blog"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Blogs</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="#contact"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Contact Us</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:block">
            <Button asChild>
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <div>
              <button
                onClick={() => setOpenMobileSubmenu(openMobileSubmenu === "software" ? null : "software")}
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-accent rounded-md"
              >
                <span>Software Development</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openMobileSubmenu === "software" ? "rotate-180" : ""}`}
                />
              </button>
              {openMobileSubmenu === "software" && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/services/software-development#product-design"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    Product Design (UI/UX)
                  </Link>
                  <Link
                    href="/services/software-development#app-development"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    Application Development
                  </Link>
                  <Link
                    href="/services/software-development#custom-software"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    Custom Software Development
                  </Link>
                  <Link
                    href="/services/software-development#qa-testing"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    QA & Testing
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenMobileSubmenu(openMobileSubmenu === "ai" ? null : "ai")}
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-accent rounded-md"
              >
                <span>AI Solutions</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openMobileSubmenu === "ai" ? "rotate-180" : ""}`}
                />
              </button>
              {openMobileSubmenu === "ai" && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/services/ai-solutions#strategy"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    AI Strategy & Consulting
                  </Link>
                  <Link
                    href="/services/ai-solutions#ml-development"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    AI/ML Development
                  </Link>
                  <Link
                    href="/services/ai-solutions#generative-ai"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    Generative AI Solutions
                  </Link>
                  <Link
                    href="/services/ai-solutions#chatbot"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    AI Chatbot & Virtual Assistant
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenMobileSubmenu(openMobileSubmenu === "cloud" ? null : "cloud")}
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-accent rounded-md"
              >
                <span>Cloud Solutions</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openMobileSubmenu === "cloud" ? "rotate-180" : ""}`}
                />
              </button>
              {openMobileSubmenu === "cloud" && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/services/cloud-solutions#strategy"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    Cloud Strategy & Assessment
                  </Link>
                  <Link
                    href="/services/cloud-solutions#migration"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    Cloud Migration & Modernization
                  </Link>
                  <Link
                    href="/services/cloud-solutions#devops"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    DevOps, CI/CD & Automation
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenMobileSubmenu(openMobileSubmenu === "ecommerce" ? null : "ecommerce")}
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-accent rounded-md"
              >
                <span>eCommerce</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openMobileSubmenu === "ecommerce" ? "rotate-180" : ""}`}
                />
              </button>
              {openMobileSubmenu === "ecommerce" && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/services/ecommerce#shopify"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    Shopify Store Development
                  </Link>
                  <Link
                    href="/services/ecommerce#custom"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    Custom eCommerce Platforms
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenMobileSubmenu(openMobileSubmenu === "marketing" ? null : "marketing")}
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-accent rounded-md"
              >
                <span>Digital Marketing</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openMobileSubmenu === "marketing" ? "rotate-180" : ""}`}
                />
              </button>
              {openMobileSubmenu === "marketing" && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/services/digital-marketing#seo"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    SEO
                  </Link>
                  <Link
                    href="/services/digital-marketing#social-media"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    Social Media Marketing
                  </Link>
                  <Link
                    href="/services/digital-marketing#paid-ads"
                    className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  >
                    Paid Ads
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenMobileSubmenu(openMobileSubmenu === "products" ? null : "products")}
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-accent rounded-md"
              >
                <span>Our Products</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openMobileSubmenu === "products" ? "rotate-180" : ""}`}
                />
              </button>
              {openMobileSubmenu === "products" && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link href="/products/ai-proctor" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
                    AI Proctoring Software
                  </Link>
                  <Link href="/products/ats" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
                    AI-Powered ATS
                  </Link>
                  <Link href="/products/qp-generator" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Question Paper Generator
                  </Link>
                  <Link href="/products/dms" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Dealer Management System
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenMobileSubmenu(openMobileSubmenu === "company" ? null : "company")}
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-accent rounded-md"
              >
                <span>Company</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openMobileSubmenu === "company" ? "rotate-180" : ""}`}
                />
              </button>
              {openMobileSubmenu === "company" && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link href="/about" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
                    About Us
                  </Link>
                  <Link href="/#clients" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Our Clients
                  </Link>
                  <Link href="/case-studies" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Case Studies
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Blogs
                  </Link>
                  <Link href="#contact" className="block px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            <div className="px-4 pt-2">
              <Button asChild className="w-full">
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
