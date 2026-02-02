import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Globe2 } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Top banner / breadcrumb */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold uppercase tracking-wide">Contact Us</h1>
          <div className="text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1 text-primary-foreground/70">/</span>
            <span className="font-medium">Contact</span>
          </div>
        </div>
      </section>

      {/* Main contact content: heading + form similar to screenshot */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Join the league of our satisfied customers who trust DgCrux Technology
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Ready to embark on your digital journey with DgCrux Technology? Get in touch with us to connect,
              explore new opportunities, and unlock growth for your business.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Office Address: Bangalore</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    10B, Tower - 16, Janashar shubha phase-2,
                    <br />
                    Attibele - Anekal Rd, Bengaluru, Karnataka 562107
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Office Address: Patna</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    6th Floor, DS Business Park, Bailey Rd,
                    <br />
                    Saguna More, Kaliket Nagar, Patna, Bihar 801503
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-sm font-semibold text-muted-foreground">Connect with us</span>
              <div className="flex gap-3 text-foreground/80">
                <Link
                  href="https://www.linkedin.com/company/dgcrux-technology/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-yellow-400 transition-colors"
                  aria-label="DgCrux on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-yellow-400 transition-colors"
                  aria-label="DgCrux on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-yellow-400 transition-colors"
                  aria-label="DgCrux on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-yellow-400 transition-colors"
                  aria-label="DgCrux on Google"
                >
                  <Globe2 className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right side: reuse styling from existing ContactSection form */}
          <section aria-label="Contact form">
            <ContactSection />
          </section>
        </div>
      </section>

      {/* Quick contact info cards row */}
      <section className="bg-background py-4">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-3">

    {/* ADDRESS */}
    <Card className="flex items-center gap-4 p-4 min-h-[72px]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <MapPin className="h-5 w-5 text-primary" />
      </div>
      <p className="text-sm font-medium text-foreground">
        10B, Tower - 16, Bengaluru
      </p>
    </Card>

    {/* EMAIL */}
    <Card className="flex items-center gap-4 p-4 min-h-[72px]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <Mail className="h-5 w-5 text-primary" />
      </div>
      <p className="text-sm font-medium text-foreground">
        info@dgcrux.com
      </p>
    </Card>

    {/* PHONE */}
    <Card className="flex items-center gap-4 p-4 min-h-[72px]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <Phone className="h-5 w-5 text-primary" />
      </div>
      <p className="text-sm font-medium text-foreground">
        +91 9835166140
      </p>
    </Card>

  </div>
</section>


      {/* Map section */}
      <section className="bg-muted/30 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <iframe
              title="DgCrux Technology Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.643873583583!2d77.684!3d12.749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d2c9b6e9bb3%3A0x0!2sDgCrux%20Technology!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}


