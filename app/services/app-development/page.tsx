"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Smartphone, Code2, Globe, Shield, Zap, Users, Rocket, TestTube, Target, Plus, Minus } from "lucide-react"
import Link from "next/link"

type FAQItem = {
  question: string
  answer: string
}

export default function AppDevelopmentPage() {
  const appTypes = [
    {
      icon: Smartphone,
      title: "Native Apps",
      description: "Built for specific operating systems (iOS or Android) for optimal performance and user experience.",
      features: [
        "Platform-specific languages (Swift/Objective-C for iOS, Java/Kotlin for Android)",
        "Access to device-specific features like camera, GPS, and push notifications",
        "Superior performance and seamless user experience",
      ],
    },
    {
      icon: Globe,
      title: "Cross-Platform Apps",
      description: "Develop once, deploy everywhere. Reach both iOS and Android users with a single codebase.",
      features: [
        "React Native and Flutter frameworks",
        "Cost-effective development",
        "Consistent user experience across platforms",
      ],
    },
    {
      icon: Shield,
      title: "Hybrid Apps",
      description: "Combine web technologies with native capabilities for flexible and efficient app development.",
      features: [
        "Web technologies (HTML, CSS, JavaScript) wrapped in native container",
        "Faster development cycle",
        "Easy maintenance and updates",
      ],
    },
  ]

  const onDemandApps = [
    { name: "Dating App", icon: "💕" },
    { name: "Investment Advisory", icon: "📈" },
    { name: "Food Delivery App", icon: "🍔" },
    { name: "Real Estate App", icon: "🏠" },
    { name: "Healthcare App", icon: "🏥" },
    { name: "News Portal APP", icon: "📰" },
    { name: "Hotel Booking App", icon: "🏨" },
    { name: "Doctor & Healthcare", icon: "👨‍⚕️" },
    { name: "Gym/Fitness App", icon: "💪" },
    { name: "Home Service App", icon: "🔧" },
    { name: "Taxi/Cab Booking App", icon: "🚕" },
    { name: "Social Media App", icon: "📱" },
    { name: "Laundry Services App", icon: "👔" },
    { name: "Ticket Booking App", icon: "🎫" },
    { name: "Grocery Delivery App", icon: "🛒" },
    { name: "Loan Lending App", icon: "💰" },
    { name: "Pharmacy Delivery App", icon: "💊" },
    { name: "Beauty & Salon App", icon: "💅" },
    { name: "Education Institute App", icon: "📚" },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery Phase",
      description:
        "We thoroughly understand your business objectives, target audience, and project requirements to create a comprehensive roadmap.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Our designers create intuitive wireframes and interactive prototypes that align with your brand identity and user expectations.",
    },
    {
      step: "03",
      title: "Development Phase",
      description:
        "Our developers build your mobile app using cutting-edge technologies, following best practices and coding standards.",
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing across devices, operating systems, and platforms ensures flawless performance, security, and user experience.",
    },
    {
      step: "05",
      title: "App Launch",
      description: "Seamless deployment to App Store and Google Play Store with proper optimization, documentation, and support.",
    },
    {
      step: "06",
      title: "Post-Launch Support",
      description: "Ongoing support, updates, bug fixes, and feature enhancements to keep your app running at peak performance.",
    },
  ]

  const whyChooseUs = [
    {
      icon: Code2,
      title: "Expertise That Matters",
      description: "Years of experience in mobile app development with a proven track record of successful launches.",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom mobile apps designed specifically for your business needs and target audience.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces and seamless user experiences that drive engagement and retention.",
    },
    {
      icon: Zap,
      title: "Agile Development",
      description: "Flexible development methodology that adapts to your changing requirements and feedback.",
    },
    {
      icon: Zap,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality checks to ensure your app performs flawlessly across all devices.",
    },
  ]

  const technologies = [
    {
      icon: Smartphone,
      title: "iOS App Development",
      description: "Native iOS apps using Swift and Objective-C",
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Native Android apps using Java and Kotlin",
    },
    {
      icon: Globe,
      title: "Web App Development",
      description: "Progressive Web Apps (PWA) for cross-platform reach",
    },
    {
      icon: Shield,
      title: "Hybrid-Native App Development",
      description: "React Native and Flutter for cross-platform solutions",
    },
  ]

  const faqs = [
    {
      question: "What is Android and iOS Mobile App Development?",
      answer:
        "Android and iOS app development involves creating software applications specifically designed for Android and iOS devices. It includes designing, coding, testing, and launching apps for smartphones and tablets.",
    },
    {
      question: "Why is it essential to have both Android and iOS apps for my business?",
      answer:
        "Having both Android and iOS apps allows you to reach a broader audience, as these two platforms dominate the mobile market. It ensures maximum market coverage and provides users with a native experience on their preferred platform.",
    },
    {
      question: "What is the typical process for developing a mobile app?",
      answer:
        "Our mobile app development process includes: Discovery & Planning, Design & Prototyping, Development, Testing & QA, App Launch, and Post-Launch Support. Each phase is carefully executed to ensure quality and success.",
    },
    {
      question: "Can you help with app concept and design, or do I need to provide the idea and design?",
      answer:
        "We can help with both! Whether you have a complete concept or just an idea, our team can assist with concept development, UI/UX design, and full implementation. We work collaboratively with you throughout the process.",
    },
    {
      question: "Do you develop apps for specific industries or niches?",
      answer:
        "Yes, we develop mobile apps for various industries including healthcare, e-commerce, food delivery, real estate, education, fitness, and more. We have experience across multiple sectors and can tailor solutions to your industry needs.",
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "The development timeline varies based on app complexity, features, and requirements. A simple app may take 2-3 months, while complex apps with advanced features can take 6-12 months. We provide detailed timelines during the discovery phase.",
    },
    {
      question: "What about app maintenance and updates after the launch?",
      answer:
        "We offer comprehensive post-launch support including bug fixes, security updates, feature enhancements, and performance optimization. Our maintenance packages ensure your app stays current and performs optimally.",
    },
    {
      question: "Can you help with app store submissions and marketing strategies?",
      answer:
        "Yes, we assist with App Store and Google Play Store submissions, including preparing all required materials, optimizing app listings, and handling the submission process. We can also provide guidance on app marketing strategies.",
    },
    {
      question: "What technologies and programming languages do you use for app development?",
      answer:
        "For native iOS: Swift and Objective-C. For native Android: Java and Kotlin. For cross-platform: React Native and Flutter. We also work with various backend technologies, databases, and third-party integrations based on project requirements.",
    },
    {
      question: "How do you ensure the security and privacy of user data in the apps you develop?",
      answer:
        "We implement industry-standard security practices including data encryption, secure authentication, secure API communication, regular security audits, and compliance with data protection regulations like GDPR and CCPA.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a1160] to-[#0d0840] py-20 sm:py-32 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10">
                <Smartphone className="h-8 w-8" />
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10">
                <Smartphone className="h-8 w-8" />
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10">
                <Globe className="h-8 w-8" />
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Android & iOS Mobile App Development
            </h1>
            <p className="mt-4 text-xl text-white/90">We Turn Your Idea Into A Mobile App Reality!</p>
            <p className="mt-2 text-lg text-white/70">- From Concept To Code</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-[#f59f0b] hover:bg-[#f59f0b]/90 text-white" asChild>
                <Link href="#contact">BOOK A 15 MIN FREE CONSULTATION</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="#contact">CHAT WITH US</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            DgCrux Technology is your trusted partner for mobile app development. We specialize in delivering
            cutting-edge mobile applications tailored to your unique needs. Our team of experienced developers combines
            technical expertise with creative innovation to bring your mobile app vision to life.
          </p>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M0,50 Q25,30 50,50 T100,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <path
                  d="M0,60 Q25,40 50,60 T100,60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Mobile App Development Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are committed to providing our customers with exceptional service while offering our employees the best
              training
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative py-20">
            {/* Connecting Line - Orange */}
            <div className="absolute top-1/2 left-4 right-4 h-1.5 bg-[#f59f0b] transform -translate-y-1/2 hidden lg:block z-0" />

            {/* Process Steps */}
            <div className="relative flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-16 lg:gap-0">
              {process.map((item, index) => {
                const isEven = index % 2 === 0
                return (
                  <div
                    key={item.step}
                    className="relative flex flex-col items-center w-full lg:w-auto lg:flex-1"
                  >
                    {/* Text Label - Alternating Above/Below */}
                    <div
                      className={`w-full text-center mb-6 lg:mb-0 ${
                        isEven
                          ? "lg:absolute lg:bottom-full lg:mb-6 lg:left-1/2 lg:transform lg:-translate-x-1/2"
                          : "lg:absolute lg:top-full lg:mt-6 lg:left-1/2 lg:transform lg:-translate-x-1/2"
                      }`}
                    >
                      <h3 className="text-base lg:text-lg font-bold text-foreground whitespace-nowrap">{item.title}</h3>
                    </div>

                    {/* Circle with Number */}
                    <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-[#f59f0b] text-white font-bold text-2xl shadow-lg border-4 border-white">
                      {item.step}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Mobile App Development Services We Offer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              There are several types of apps, each with unique characteristics and benefits
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {appTypes.map((appType) => {
              const Icon = appType.icon
              return (
                <Card key={appType.title} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{appType.title}</CardTitle>
                    <CardDescription className="text-base">{appType.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {appType.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* On-Demand Apps Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our On Demand App Development Solutions Offering
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {onDemandApps.map((app) => (
              <Card key={app.name} className="group text-center bg-white border border-slate-200 hover:bg-[#1E1566] hover:border-[#1E1566] transition-all">
                <CardHeader>
                  <div className="text-4xl mb-2">{app.icon}</div>
                  <CardTitle className="text-sm font-normal text-foreground group-hover:text-yellow-400 transition-colors">{app.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a1160] to-[#0d0840] py-20 sm:py-32 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">We Build Apps, That makes life better!</h2>
          <div className="mt-10">
            <Button size="lg" className="bg-[#f59f0b] hover:bg-[#f59f0b]/90 text-white" asChild>
              <Link href="#contact">BOOK A 15 MIN FREE CONSULTATION</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose DgCrux Technology for Mobile App Development?
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Mobile App Technology we are expertise In.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech) => {
              const Icon = tech.icon
              return (
                <Card key={tech.title} className="text-center border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{tech.title}</CardTitle>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FAQSectionWithState faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Are you Ready to bring your mobile app idea to life?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team is eager to collaborate with you and make your mobile app vision a reality.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-[#f59f0b] hover:bg-[#f59f0b]/90 text-white" asChild>
              <Link href="/#contact">BOOK A 15 MIN FREE CONSULTATION</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function FAQSectionWithState({ faqs }: { faqs: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const leftColumnFaqs = faqs.slice(0, 5)
  const rightColumnFaqs = faqs.slice(5)

  return (
    <div className="relative">
      {/* Title and Tagline - Top Left */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-2">
          FAQ for Android & iOS Mobile <br /> App Development
        </h2>
        <p className="text-lg text-muted-foreground">
          Elevate Your Business with Custom Android & iOS Apps Services!
        </p>
      </div>

      <div className="relative flex gap-8 lg:gap-12">
        {/* FAQ Badge with Line */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="w-24 h-24 rounded-xl bg-muted flex items-center justify-center mb-4">
            <span className="text-4xl font-bold text-foreground">FAQ</span>
          </div>
          {/* <div className="w-0.5 h-full bg-muted-foreground/20"></div> */}
        </div>

        {/* Two Column Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column - Questions 1-5 */}
          <div className="space-y-4">
            {leftColumnFaqs.map((faq, idx) => {
              const id = `faq-${idx}`
              const isOpen = openId === id
              const questionNumber = idx + 1

              return (
                <button
                  key={id}
                  onClick={() => toggle(id)}
                  className="group w-full rounded-lg border border-slate-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59f0b]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-xl font-bold text-[#f59f0b] pt-0.5">{questionNumber}.</span>
                      <p className="text-base font-semibold text-foreground flex-1">{faq.question}</p>
                    </div>
                    <span className="text-[#f59f0b] transition-transform group-hover:scale-110 flex-shrink-0">
                      {isOpen ? (
                        <Minus className="h-5 w-5" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-5 w-5" strokeWidth={2.5} />
                      )}
                    </span>
                  </div>
                  <div
                    className={`mt-3 ml-8 text-sm leading-relaxed text-muted-foreground transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column - Questions 6-10 */}
          <div className="space-y-4">
            {rightColumnFaqs.map((faq, idx) => {
              const id = `faq-${idx + 5}`
              const isOpen = openId === id
              const questionNumber = idx + 6

              return (
                <button
                  key={id}
                  onClick={() => toggle(id)}
                  className="group w-full rounded-lg border border-slate-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59f0b]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-xl font-bold text-[#f59f0b] pt-0.5">{questionNumber}.</span>
                      <p className="text-base font-semibold text-foreground flex-1">{faq.question}</p>
                    </div>
                    <span className="text-[#f59f0b] transition-transform group-hover:scale-110 flex-shrink-0">
                      {isOpen ? (
                        <Minus className="h-5 w-5" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-5 w-5" strokeWidth={2.5} />
                      )}
                    </span>
                  </div>
                  <div
                    className={`mt-3 ml-8 text-sm leading-relaxed text-muted-foreground transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

