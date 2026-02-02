import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { MissionVisionSection } from "@/components/mission-vision-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Top banner / breadcrumb */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold uppercase tracking-wide">About Us</h1>
          <div className="text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1 text-primary-foreground/70">|</span>
            <span className="font-medium">About Us</span>
          </div>
        </div>
      </section>

      {/* Intro text */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-4 text-muted-foreground leading-relaxed">
         <p>At DgCrux, we are passionate about helping businesses succeed in the digital age. We understand that the digital landscape is constantly changing, and we strive to stay ahead of the curve. Our team of experienced and knowledgeable digital marketers will create and implement effective strategies to maximize your online presence and help you reach your goals.
         We work closely with our clients to develop a custom plan that fits their budget and meets the needs. We’re committed to providing outstanding customer service and delivering results that exceed your expectations.</p>
        </div>
      </section>

      {/* Services illustration + list */}
      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex justify-center">
            <img
              src="https://dgcrux.com/images/gallery/Bussiness-and-Corporate.jpg"
              alt="Digital marketing strategy illustration"
              className="max-w-md w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              We offer a wide variety of Digital &amp; IT services like:
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
              {[
                "App Development",
                "Web Development",
                "Performance Marketing / PPC",
                "Search Engine Optimization (SEO)",
                "Social Media Management",
                "E-Commerce Services",
                "Amazon Seller Services",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-10">Our Founder</h2>

          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Founder image */}
            <div className="flex justify-center">
              <img
                src="/gallery/ceo.jpg"
                alt="Shashidhar Rajan - Founder & CEO"
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Founder details */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Shashidhar Rajan</h3>
              <p className="text-sm font-semibold text-muted-foreground">Founder &amp; CEO</p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-yellow-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-yellow-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-yellow-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Shashidhar is a young and dynamic entrepreneur aspiring a broad vision to revolutionize the digital &amp; IT
                  industry.
                </p>
                <p>
                  He has done B.Tech in Computer Science and has over 9+ years of experience serving national and
                  multinational corporate giants in the digital and IT industry.
                </p>
                <p>
                  He is the perfect amalgamation of strong technical capabilities and leadership skills. He carries
                  things logically with persistent efforts and believes in hard work and commitment.
                </p>
              </div>

              {/* Founder gallery */}
              <div className="grid grid-cols-4 gap-3 pt-2">
                {["award1.jpg", "award2.jpg", "award3.jpg", "bhojpatta.jpg"].map((img) => (
                  <img
                    key={img}
                    src={`/gallery/${img}`}
                    alt="Founder recognition"
                    className="h-20 w-full rounded object-cover border border-border"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & vision section */}
      {/* <section className="bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Get ahead of the curve</h2>
            <div className="flex gap-3">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Our Mission</Button>
              <Button variant="outline">Our Vision</Button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our mission is to help businesses grow their presence in the digital world by providing creative and
              effective digital &amp; IT solutions. Our goal is to provide quality services that help our clients
              successfully reach their target audience, increase brand awareness, and generate exponential leads, sales
              and revenue.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-[auto,1fr] items-center">
            <div className="flex justify-center">
              <img
                src="/dgcrux-logo.png"
                alt="DgCrux logo"
                className="h-28 w-28 rounded-full border border-border bg-background object-contain p-4"
              />
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              {[
                "Honesty and integrity",
                "Respect for the individual",
                "Professionalism",
                "Transparency",
                "Compliance with laws and regulations",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <MissionVisionSection />

      {/* Official agency partners */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">Official Agency Partner</h2>
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6 items-center">
            {[
              "Google Partner",
              "Shopify Partner",
              "Amazon.in Partner",
              "Razorpay Partner",
              "Cashfree Payments",
              "Hostinger",
            ].map((name) => (
              <Card key={name} className="border-none shadow-none bg-transparent">
                <CardContent className="p-2">
                  <Badge
                    variant="outline"
                    className="w-full justify-center py-3 text-xs sm:text-sm font-medium rounded-full"
                  >
                    {name}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-secondary py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary-foreground">
            We work together to build success for you
          </h2>
          <Button asChild variant="outline" className="bg-black text-secondary hover:bg-black/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
