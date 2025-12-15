import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                D
              </div>
              <span className="text-xl font-bold text-foreground">DgCrux</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming businesses through innovative software development and AI solutions.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/software-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-solutions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-solutions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-muted-foreground hover:text-primary transition-colors">
                  eCommerce
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/internship" className="text-muted-foreground hover:text-primary transition-colors">
                  Internship Program
                </Link>
              </li>
              <li>
                <Link href="/dgskill" className="text-muted-foreground hover:text-primary transition-colors">
                  DgSkill
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Business Park, Tech City</li>
              <li>New Delhi, India 110001</li>
              <li className="mt-4">
                <a href="mailto:info@dgcrux.com" className="hover:text-primary transition-colors">
                  info@dgcrux.com
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 123-456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DgCrux Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
