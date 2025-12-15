import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Brain, Bot, Eye, MessageSquare, Workflow, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AISolutionsPage() {
  const services = [
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
    "OpenAI GPT",
    "Claude",
    "TensorFlow",
    "PyTorch",
    "Langchain",
    "Hugging Face",
    "OpenCV",
    "scikit-learn",
    "Keras",
    "YOLO",
    "Stable Diffusion",
    "AWS SageMaker",
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
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">AI Solutions & Services</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Harness the power of artificial intelligence and machine learning to automate processes, gain insights,
              and drive innovation across your organization.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">Explore AI Solutions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">AI Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Comprehensive AI Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From strategy to implementation, we cover all aspects of AI development
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Cutting-Edge AI Technologies</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We work with the latest and most powerful AI frameworks and tools
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-base px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">AI Use Cases</h2>
            <p className="mt-4 text-lg text-muted-foreground">Real-world applications of AI across industries</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <Card key={useCase.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Invest in AI Solutions?</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                AI is no longer a future technology—it's transforming businesses today. Our AI solutions help you stay
                competitive, reduce costs, and unlock new opportunities for growth and innovation.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="#contact">Start Your AI Journey</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Ready to Embrace AI?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's explore how AI can revolutionize your business operations
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/case-studies">View AI Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
