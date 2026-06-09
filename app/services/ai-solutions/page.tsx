"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ServiceContact from "@/components/service-contact"
import { CheckCircle2, Brain, Bot, Eye, MessageSquare, Workflow, Sparkles, ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"

type Service = {
  icon: LucideIcon
  title: string
  description: string
}

export default function AISolutionsPage() {
  const services: Service[] = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description:
        "Strategic guidance to identify AI opportunities and develop implementation roadmaps for your business.",
    },
    {
      icon: Sparkles,
      title: "AI/ML Development",
      description: "Custom machine learning models and algorithms tailored to solve your specific business challenges.",
    },
    {
      icon: MessageSquare,
      title: "Generative AI Solutions",
      description:
        "Leverage GPT, Claude, and other LLMs to build intelligent content generation and automation systems.",
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Autonomous AI agents that can perform complex tasks, make decisions, and interact intelligently.",
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "Image recognition, object detection, and visual intelligence for real-world applications.",
    },
    {
      icon: Workflow,
      title: "AI Integration & Automation",
      description: "Seamlessly integrate AI capabilities into existing systems and automate workflows with RPA.",
    },
  ]

  const technologies = [
    "OpenAI GPT", "Claude", "TensorFlow", "PyTorch", "Langchain",
    "Hugging Face", "OpenCV", "scikit-learn", "Keras", "YOLO",
    "Stable Diffusion", "AWS SageMaker",
  ]

  const useCases = [
    {
      title: "Intelligent Chatbots & Virtual Assistants",
      description: "24/7 customer support with AI-powered conversational interfaces",
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends, customer behavior, and business outcomes with ML models",
    },
    {
      title: "Document Processing & OCR",
      description: "Automated extraction and processing of information from documents",
    },
    {
      title: "Recommendation Systems",
      description: "Personalized product and content recommendations for users",
    },
    {
      title: "Fraud Detection & Security",
      description: "Real-time anomaly detection and risk assessment",
    },
    {
      title: "Image & Video Analysis",
      description: "Automated quality control, object detection, and facial recognition",
    },
  ]

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Improve decision-making with data-driven insights",
    "Automate repetitive tasks and workflows",
    "Enhance customer experience with personalization",
    "Scale operations without proportional cost increase",
    "Gain competitive advantage through innovation",
    "24/7 availability with AI-powered systems",
    "Faster time-to-market for new features",
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 backdrop-blur-sm text-indigo-300 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-indigo-500/20">
                <Sparkles className="h-3 w-3" /> AI Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Turn Data into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Intelligent Action
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-xl">
                From prototypes to production-grade AI systems — we build solutions that scale and deliver measurable outcomes.
              </p>
              <div className="flex gap-4 mt-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full" asChild>
                  <Link href="#contact">Start AI Project <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
                  <Link href="/case-studies">Explore Use Cases</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-30" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <Image
                  src="/ai_solutions_featured_1778046359542.png"
                  alt="AI Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Comprehensive AI Services</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              From strategy to implementation, we cover all aspects of AI development
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Technologies + Image */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Cutting-Edge AI Technologies</h2>
              <p className="mt-4 text-lg text-slate-500 mb-8">
                We work with the latest and most powerful AI frameworks and tools
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-4 py-2 bg-white border border-slate-200 text-slate-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-[2rem] blur-2xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/ai-chatbot-interface.png"
                  alt="AI Chatbot Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">AI Use Cases</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Real-world applications of AI across industries</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold mb-4">
                  {(useCases.indexOf(useCase) + 1).toString().padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-slate-500 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Invest in AI Solutions?</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                AI is no longer a future technology — it&apos;s transforming businesses today. Our AI solutions help you stay
                competitive, reduce costs, and unlock new opportunities for growth and innovation.
              </p>
              <div className="mt-8 grid gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 rounded-full" asChild>
                  <Link href="#contact">Start Your AI Journey <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] blur-2xl opacity-20" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/ai_solutions_featured_1778046359542.png"
                    alt="AI Technology"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-700 to-slate-900" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl leading-tight">
            Ready to Embrace AI?
          </h2>
          <p className="mt-6 text-lg text-indigo-200 max-w-2xl mx-auto">
            Let&apos;s explore how AI can revolutionize your business operations
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 rounded-full shadow-xl" asChild>
              <Link href="/#contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-indigo-400 text-indigo-200 hover:bg-indigo-500/20" asChild>
              <Link href="/case-studies">View AI Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
