import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const benefits = [
    "Competitive salary and equity options",
    "Flexible work arrangements and remote options",
    "Health insurance and wellness programs",
    "Learning and development opportunities",
    "Collaborative and inclusive culture",
    "Work on cutting-edge technologies",
    "Career growth and advancement",
    "Team outings and celebrations",
  ]

  const openings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / New Delhi",
      type: "Full-time",
      experience: "5+ years",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Remote / Bangalore",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / New Delhi",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Pune",
      type: "Full-time",
      experience: "4+ years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "Project Manager",
      department: "Management",
      location: "New Delhi",
      type: "Full-time",
      experience: "5+ years",
      skills: ["Agile", "Scrum", "Stakeholder Management", "Technical Background"],
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "New Delhi",
      type: "Full-time",
      experience: "2+ years",
      skills: ["B2B Sales", "Lead Generation", "Client Relations", "Tech Industry"],
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
              Join Our Team
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Build your career with a team that values innovation, collaboration, and continuous learning. Work on
              exciting projects that make a real impact.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="#openings">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Work at DgCrux?</h2>
            <p className="mt-4 text-lg text-muted-foreground">We invest in our people and their growth</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit}>
                <CardContent className="pt-6">
                  <p className="text-sm text-center text-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Open Positions</h2>
            <p className="mt-4 text-lg text-muted-foreground">Find your next opportunity</p>
          </div>

          <div className="grid gap-6">
            {openings.map((job) => (
              <Card key={job.title} className="hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.experience}
                        </span>
                      </CardDescription>
                    </div>
                    <Button asChild>
                      <Link href="#apply">Apply Now</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Apply Now</h2>
            <p className="mt-4 text-lg text-muted-foreground">Submit your application and we'll get back to you soon</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position Applying For *</Label>
                  <Input id="position" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV * (URL or LinkedIn Profile)</Label>
                  <Input id="resume" type="url" required placeholder="https://" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio (Optional)</Label>
                  <Input id="portfolio" type="url" placeholder="https://" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter / Why do you want to join us? *</Label>
                  <Textarea id="coverLetter" required rows={6} />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
