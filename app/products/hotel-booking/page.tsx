import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const highlights = [
  {
    title: "Smart rate optimization",
    description: "Maximize occupancy with dynamic pricing that responds to demand and guest preferences.",
  },
  {
    title: "Guest-first booking flow",
    description: "Deliver a frictionless reservation path from discovery to checkout on desktop and mobile.",
  },
  {
    title: "Operations in one place",
    description: "Manage rooms, invoices, deposits, and guest history with a single hotel dashboard.",
  },
]

const features = [
  {
    title: "AI Room Recommendations",
    description: "Suggest ideal rooms and packages based on traveler intent, season, and profile.",
  },
  {
    title: "Flexible Pricing Rules",
    description: "Apply automatic discounts, promotions, and revenue management strategies in real time.",
  },
  {
    title: "Direct Booking Engine",
    description: "Capture more direct reservations with polished booking widgets and fast checkout.",
  },
  {
    title: "Channel Synchronization",
    description: "Sync availability with OTAs and GDS channels without overbooking or manual updates.",
  },
  {
    title: "Guest Experience Tools",
    description: "Power post-booking communication, upsells, and loyalty offers from the same platform.",
  },
  {
    title: "Insights & Forecasting",
    description: "See revenue trends, occupancy forecasts, and guest segmentation in intuitive dashboards.",
  },
]

const workflow = [
  {
    step: "Configure your hotel",
    description: "Set room types, rates, packages, and availability rules with guided setup.",
  },
  {
    step: "Launch intelligent bookings",
    description: "Let AI recommend the best offers, prices, and guest experiences for every stay.",
  },
  {
    step: "Grow direct revenue",
    description: "Reduce commission costs and increase loyalty with a modern booking engine.",
  },
]

export default function HotelBookingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.22),_transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(248,225,130,0.16),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-2xl">
              <Badge className="mb-6 border border-amber-300/40 bg-amber-300/10 text-amber-100">
                AI Hotel Booking Engine
              </Badge>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                A smarter hotel booking experience for every guest.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100/85 sm:text-xl">
                Convert more guests, automate pricing, and keep your hotel operations effortless with one modern booking platform.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="h-14 rounded-full bg-amber-500 px-8 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400" asChild>
                  <a href="https://theroyalbihar.com/" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                </Button>
             
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10">
                  <p className="text-3xl font-black text-white">34%</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-amber-200">Direct bookings uplift</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10">
                  <p className="text-3xl font-black text-white">22h</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-amber-200">Faster reservation handling</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10">
                  <p className="text-3xl font-black text-white">100%</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-amber-200">Booking accuracy</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40">
              <div className="absolute -right-10 top-12 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="absolute -left-10 bottom-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <Image
                src="/products/hotel.png"
                alt="Hotel booking dashboard preview"
                width={920}
                height={700}
                className="relative rounded-[2rem] object-cover shadow-2xl shadow-slate-950/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Why hotels choose us</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                One platform for reservations, revenue, and guest delight.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Your team gets a fast booking engine, automated pricing, and a single source of truth for hotel operations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Core features</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Everything your hotel needs to sell more stays.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From online reservations to guest personalization, the Hotel Booking Engine helps you run bookings with confidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-amber-50">
                <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 text-white">
        <div className="mx-auto max-w-7xl grid gap-14 xl:grid-cols-[0.95fr_0.8fr] items-center">
          <div className="space-y-8 rounded-[2.5rem] border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-amber-300">
              <span>How it works</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Launch your hotel booking engine in three simple steps.
            </h2>
            <div className="space-y-5">
              {workflow.map((item, index) => (
                <div key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-200/25 text-amber-200 font-black">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.step}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-amber-500/10 p-8 shadow-[0_40px_90px_-60px_rgba(245,158,11,0.45)] ring-1 ring-amber-100">
            <div className="rounded-[2rem] bg-white/90 p-10 shadow-xl shadow-slate-950/10">
              <h3 className="text-xl font-semibold text-slate-950">Boost conversions with ease</h3>
              <p className="mt-4 text-slate-600">
                A sleek booking flow and AI-powered pricing keep guests moving from search to confirmed stay.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-slate-950/90 p-6 text-slate-100">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Fully responsive</p>
                  <p className="mt-3 text-lg font-semibold">Smooth bookings on every device.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/90 p-6 text-slate-100">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Revenue-ready</p>
                  <p className="mt-3 text-lg font-semibold">Upsells, packages, and loyalty built in.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-amber-200/30 bg-white p-10 text-center shadow-2xl shadow-amber-200/20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Ready for a better booking engine?</p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Modernize hotel bookings with AI-driven revenue tools.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Schedule a demo and see how the Hotel Booking Engine can increase direct bookings and improve guest satisfaction.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 rounded-full bg-amber-500 px-8 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400" asChild>
             <a href="https://theroyalbihar.com/" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 rounded-full border border-amber-400/30 bg-slate-950/5 px-8 font-semibold text-slate-950 hover:bg-slate-950/10" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
