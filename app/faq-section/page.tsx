import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import Link from "next/link"

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Top banner / breadcrumb */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold uppercase tracking-wide">FAQ</h1>
          <div className="text-sm">
            <Link href="/" className="hover:text-yellow-400 hover:underline transition-colors">
              Home
            </Link>
            <span className="mx-1 text-primary-foreground/70">|</span>
            <span className="font-medium">FAQ</span>
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </main>
  )
}

