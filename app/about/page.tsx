import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description:
        "We put our clients' success at the heart of everything we do, delivering solutions that exceed expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description:
        "We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work as an extension of your team, fostering transparent communication and partnership.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in code quality, security, and user experience.",
    },
  ]

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through technology",
    },
    { year: "2016", title: "50+ Projects", description: "Reached milestone of 50 successful project deliveries" },
    {
      year: "2018",
      title: "Startup India Recognition",
      description: "Recognized by Government of India as innovative startup",
    },
    { year: "2020", title: "100+ Team Members", description: "Expanded team to serve clients globally" },
    { year: "2022", title: "Google Partner", description: "Became certified Google Cloud Partner" },
    { year: "2024", title: "500+ Projects", description: "Delivered 500+ successful projects across 20+ countries" },
  ]

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
  ]

  const team = [
    {
      name: "Shashi Kumar",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years of experience in software development and business transformation.",
    },
    {
      name: "Technical Team",
      role: "Development Experts",
      bio: "Skilled developers, designers, and architects working on cutting-edge technologies.",
    },
    {
      name: "Business Team",
      role: "Client Success",
      bio: "Dedicated professionals ensuring seamless project delivery and client satisfaction.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About DgCrux Technology
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              We are a team of passionate technologists, designers, and innovators dedicated to transforming businesses
              through cutting-edge software solutions and AI technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-foreground">{stat.number}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, DgCrux Technology started with a simple mission: to help businesses leverage
                  technology to achieve their full potential. What began as a small team of developers has grown into a
                  full-service software development company serving clients across the globe.
                </p>
                <p>
                  Over the years, we've evolved from building websites to creating complex AI-powered systems, cloud
                  infrastructure, and enterprise software solutions. Our commitment to excellence and innovation has
                  earned us recognition from Startup India, partnerships with Google and AWS, and most importantly, the
                  trust of over 200 clients worldwide.
                </p>
                <p>
                  Today, we're proud to be at the forefront of digital transformation, helping businesses of all sizes
                  harness the power of artificial intelligence, cloud computing, and modern software development
                  practices.
                </p>
              </div>
            </div>
            <div>
              <img src="/modern-technology-office-team-collaboration.jpg" alt="DgCrux team" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Journey</h2>
            <p className="mt-4 text-lg text-muted-foreground">Key milestones that shaped our growth</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((milestone) => (
              <Card key={milestone.year}>
                <CardHeader>
                  <Badge className="w-fit mb-2">{milestone.year}</Badge>
                  <CardTitle className="text-lg">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Leadership & Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">Meet the people behind DgCrux Technology</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-24 w-24 mx-auto items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-center mb-2">{member.name}</h3>
                  <p className="text-sm text-primary text-center mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Recognition & Partnerships</h2>
            <p className="mt-4 text-lg text-muted-foreground">Trusted by industry leaders</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {["Startup India", "Google Partner", "AWS Partner", "Microsoft Partner", "ISO Certified"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center p-6 rounded-lg bg-background border border-border"
              >
                <span className="text-sm font-medium text-foreground text-center">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Join Our Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're looking to work with us or join our team, we'd love to hear from you
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Start a Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
