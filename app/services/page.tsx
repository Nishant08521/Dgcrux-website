import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "Web Development",
    href: "/services/software-development",
    iconClass: "flaticon-responsive",
  },
  {
    title: "App Development",
    href: "/services/app-development",
    iconClass: "flaticon-computer",
  },
  {
    title: "Performance Marketing",
    href: "/services/digital-marketing",
    iconClass: "flaticon-digital-marketing",
  },
  {
    title: "Search Engine Optimization (SEO)",
    href: "/services/digital-marketing#seo",
    iconClass: "flaticon-development",
  },
  {
    title: "Social Media Management",
    href: "/services/digital-marketing#social-media",
    iconClass: "flaticon-app-development",
  },
  {
    title: "Amazon Seller Services",
    href: "/services/ecommerce#marketplace",
    iconClass: "flaticon-ui",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your Complete Digital Growth Hub - From software and app development to boosting your online presence
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-[#eef0f6] bg-[url('/images/testi-8-bg-1-1.png')] bg-repeat bg-center py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="md:col-span-2 xl:col-span-2 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl md:text-[48px] lg:text-[52px] font-bold leading-tight text-slate-900">
                Your Complete Digital Growth Hub!
              </h2>
              <p className="mt-5 text-lg leading-7 text-[#9b9fa6] max-w-2xl">
                From Software, App development to designing websites to boosting your online presence, DgCrux is your
                all-in-one place for everything you need to grow your business.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-base px-8 py-6"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            {services.slice(0, 2).map((service, idx) => (
              <ServiceCard key={service.title} service={service} index={idx} />
            ))}

            {services.slice(2).map((service, idx) => (
              <ServiceCard key={service.title} service={service} index={idx + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Explore All Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions for all your digital needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Software Development */}
            <div className="p-6 border-2 border-border rounded-lg hover:border-yellow-400 transition-all">
              <h3 className="text-xl font-bold mb-3">Software Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Product Design (UI/UX)</li>
                <li>• Application Development</li>
                <li>• Custom Software Development</li>
                <li>• QA & Testing</li>
                <li>• DevOps & Deployment</li>
              </ul>
              <Link href="/services/software-development">
                <Button variant="link" className="mt-4 text-yellow-600 hover:text-yellow-700">
                  Learn More →
                </Button>
              </Link>
            </div>

            {/* AI Solutions */}
            <div className="p-6 border-2 border-border rounded-lg hover:border-yellow-400 transition-all">
              <h3 className="text-xl font-bold mb-3">AI Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AI Strategy & Consulting</li>
                <li>• AI/ML Development</li>
                <li>• Generative AI Solutions</li>
                <li>• AI Chatbot Development</li>
                <li>• Computer Vision Solutions</li>
              </ul>
              <Link href="/services/ai-solutions">
                <Button variant="link" className="mt-4 text-yellow-600 hover:text-yellow-700">
                  Learn More →
                </Button>
              </Link>
            </div>

            {/* Cloud Solutions */}
            <div className="p-6 border-2 border-border rounded-lg hover:border-yellow-400 transition-all">
              <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cloud Strategy & Assessment</li>
                <li>• Cloud Migration & Modernization</li>
                <li>• DevOps, CI/CD & Automation</li>
                <li>• Cloud Security & Governance</li>
                <li>• Cost Optimization & FinOps</li>
              </ul>
              <Link href="/services/cloud-solutions">
                <Button variant="link" className="mt-4 text-yellow-600 hover:text-yellow-700">
                  Learn More →
                </Button>
              </Link>
            </div>

            {/* eCommerce */}
            <div className="p-6 border-2 border-border rounded-lg hover:border-yellow-400 transition-all">
              <h3 className="text-xl font-bold mb-3">eCommerce Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Shopify Store Development</li>
                <li>• Custom eCommerce Platforms</li>
                <li>• Marketplace Development</li>
                <li>• Amazon Seller Services</li>
                <li>• Maintenance & Support</li>
              </ul>
              <Link href="/services/ecommerce">
                <Button variant="link" className="mt-4 text-yellow-600 hover:text-yellow-700">
                  Learn More →
                </Button>
              </Link>
            </div>

            {/* Digital Marketing */}
            <div className="p-6 border-2 border-border rounded-lg hover:border-yellow-400 transition-all">
              <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Search Engine Optimization</li>
                <li>• Social Media Marketing</li>
                <li>• Paid Ads Management</li>
                <li>• Conversion Funnel Optimization</li>
                <li>• Performance Marketing</li>
              </ul>
              <Link href="/services/digital-marketing">
                <Button variant="link" className="mt-4 text-yellow-600 hover:text-yellow-700">
                  Learn More →
                </Button>
              </Link>
            </div>

            {/* Products */}
            <div className="p-6 border-2 border-border rounded-lg hover:border-yellow-400 transition-all">
              <h3 className="text-xl font-bold mb-3">Our Products</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AI Proctoring Exam Software</li>
                <li>• AI-Powered ATS</li>
                <li>• AI Question Paper Generator</li>
                <li>• Solar EPC ERP Solution</li>
                <li>• Dealer Management System</li>
              </ul>
              <Link href="/products/ai-proctor">
                <Button variant="link" className="mt-4 text-yellow-600 hover:text-yellow-700">
                  Learn More →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-purple-900 text-primary-foreground py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let's discuss how we can help transform your business with our expert solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-base px-8"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="tel:+919835166140">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-base px-8"
              >
                Call Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: { title: string; href: string; iconClass: string }
  index: number
}) {
  const words = service.title.split(" ")
  const breakTitle =
    words.length > 2 ? (
      words.map((word, i) => (
        <span key={`${word}-${i}`} className="block">
          {word}
        </span>
      ))
    ) : (
      service.title
    )

  return (
    <Link href={service.href} className="group block">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#1a1160] px-6 py-8 text-white transition-all duration-500 hover:bg-[#f59f0b] flex flex-col">
        <span className="absolute left-6 top-6 text-5xl font-light text-white/10">{`0${index + 1}`}</span>

        <div className="absolute right-6 top-6 text-5xl text-[#f59f0b] transition-colors duration-500 group-hover:text-[#1a1160] z-10">
          <i className={service.iconClass} aria-hidden="true"></i>
        </div>

        <div className="absolute -right-20 bottom-0 h-[80%] w-28 origin-bottom-right skew-x-0 scale-x-0 bg-black/20 transition duration-500 group-hover:skew-x-[-35deg] group-hover:scale-x-100" />

        <h6 className="mt-auto text-base font-normal uppercase tracking-[1px] leading-tight transition-colors duration-500 group-hover:text-[#1a1160]">
          {breakTitle}
        </h6>
      </div>
    </Link>
  )
}

