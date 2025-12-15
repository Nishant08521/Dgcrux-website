import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Code2, Smartphone, Globe, TestTube, Rocket, Users } from "lucide-react"
import Link from "next/link"

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      icon: Users,
      title: "Product Design (UI/UX)",
      description: "User-centered design that combines aesthetics with functionality for exceptional experiences.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, scalable web applications using React, Next.js, and modern frameworks.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs and workflows.",
    },
    {
      icon: TestTube,
      title: "QA & Testing",
      description: "Comprehensive testing services ensuring quality, performance, and security.",
    },
    {
      icon: Rocket,
      title: "DevOps & Deployment",
      description: "CI/CD pipelines, containerization, and automated deployment for seamless releases.",
    },
  ]

  const technologies = {
    "Front-End": ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Vue.js", "Angular"],
    "Back-End": ["Node.js", "Python", "PHP", "Django", "Laravel", "Express.js"],
    Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    DevOps: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
  }

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description:
        "We thoroughly understand your business objectives, target audience, and project requirements to create a comprehensive roadmap.",
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description:
        "Our designers create intuitive wireframes and interactive prototypes that align with your brand identity.",
    },
    {
      step: "3",
      title: "Development & Implementation",
      description:
        "Our developers build your solution using cutting-edge technologies, following best practices and coding standards.",
    },
    {
      step: "4",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing across devices, browsers, and platforms ensures flawless performance and security.",
    },
    {
      step: "5",
      title: "Launch & Deployment",
      description: "Seamless deployment to production with proper monitoring, documentation, and knowledge transfer.",
    },
    {
      step: "6",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements to keep your application running at peak performance.",
    },
  ]

  const benefits = [
    "Tailored solutions aligned with your business goals",
    "Expertise in modern technologies and frameworks",
    "Agile development methodology for flexibility",
    "Scalable architecture for future growth",
    "Comprehensive documentation and training",
    "Dedicated project manager and support team",
    "Transparent communication and regular updates",
    "Competitive pricing and on-time delivery",
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">Software Development</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Custom Software Development Services
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Transform your vision into reality with our comprehensive software development services. We build
              scalable, secure, and innovative solutions tailored to your business needs.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Software Development Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              End-to-end software development services for businesses of all sizes
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

      {/* Technology Stack */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Technology Arsenal</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We leverage cutting-edge technologies to build robust applications
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(technologies).map(([category, techs]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Development Approach</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven process that ensures successful project delivery
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <Card key={item.step} className="relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-muted/20">{item.step}</div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Why Choose DgCrux for Software Development?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We combine technical excellence with business understanding to deliver solutions that drive real
                results. Our team of experienced developers, designers, and project managers work collaboratively to
                bring your vision to life.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="#contact">Get Started Today</Link>
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
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Ready to Transform Your Business?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's discuss your project and create something amazing together
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Request a Callback</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="mailto:info@dgcrux.com">Email Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
