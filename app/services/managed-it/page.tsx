import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ServiceContact from "@/components/service-contact"
import Link from "next/link"

export default function ManagedITPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-3 bg-emerald-50 text-emerald-600">Managed IT Services</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Reliable IT Operations & Support</h1>
              <p className="text-lg text-slate-600 mb-6">24/7 managed services, monitoring, and support to keep your systems secure and available.</p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700"><Link href="#contact">Request Support Plan</Link></Button>
              </div>
            </div>

            <div className="w-full max-w-md">
              <ServiceContact accent="emerald" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">What we manage</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 bg-white rounded-lg shadow">Network & Connectivity</div>
            <div className="p-5 bg-white rounded-lg shadow">Server & Cloud Maintenance</div>
            <div className="p-5 bg-white rounded-lg shadow">Security & Compliance</div>
            <div className="p-5 bg-white rounded-lg shadow">User Support & Helpdesk</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
