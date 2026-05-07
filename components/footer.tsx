import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Mail, PhoneCall } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://dgcrux.com/images/logo.png"
                alt="DgCrux Logo"
                width={150}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Transforming businesses through innovative digital product engineering, AI solutions, and scalable cloud architectures. Empowering the modern era.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/software-development" className="text-slate-400 hover:text-[#FFB800] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" /> Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-solutions" className="text-slate-400 hover:text-[#FFB800] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" /> AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-slate-400 hover:text-[#FFB800] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" /> Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-slate-400 hover:text-[#FFB800] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" /> eCommerce
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-slate-400 hover:text-[#FFB800] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" /> Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3 text-sm grid grid-cols-2 gap-x-4 gap-y-3 sm:block">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-[#FFB800] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-[#FFB800] transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-[#FFB800] transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/internship" className="text-slate-400 hover:text-[#FFB800] transition-colors">Internship Program</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-[#FFB800] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/faq-section" className="text-slate-400 hover:text-[#FFB800] transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">123 Business Park, Tech City<br />New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2563eb] flex-shrink-0" />
                <a href="mailto:info@dgcrux.com" className="text-slate-400 hover:text-[#FFB800] transition-colors">
                  info@dgcrux.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-[#2563eb] flex-shrink-0" />
                <a href="tel:+911234567890" className="text-slate-400 hover:text-[#FFB800] transition-colors">
                  +91 123-456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 mt-8 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} DgCrux Technology. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
