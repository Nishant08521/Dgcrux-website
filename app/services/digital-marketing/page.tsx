import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ServiceContact from "@/components/service-contact"
import Link from "next/link"

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-tr from-white to-rose-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-3 bg-rose-50 text-rose-600">Digital Marketing</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Drive Growth with Data-Driven Marketing</h1>
              <p className="text-lg text-slate-600 mb-6">SEO, paid media, social and content strategies that move the needle — measurable results, transparent reporting.</p>
              <div>
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700"><Link href="/#contact">Get a Strategy</Link></Button>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-20 bottom-6 hidden lg:block opacity-25">
              <svg width="280" height="280" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g2" x1="0%" x2="100%">
                    <stop stopColor="#fb7185" offset="0%" />
                    <stop stopColor="#fecdd3" offset="100%" />
                  </linearGradient>
                </defs>
                <g transform="translate(300,300)">
                  <path d="M110,-140C150,-100,180,-60,180,0C180,60,150,120,110,160C70,200,0,220,-50,200C-100,180,-150,120,-170,60C-190,0,-190,-60,-160,-110C-130,-160,-80,-190,-30,-200C20,-210,60,-200,110,-140Z" fill="url(#g2)" />
                </g>
              </svg>
            </div>

            <div className="w-full max-w-md">
              <ServiceContact accent="rose" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
