import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { RecognitionStrip } from "@/components/recognition-strip"
import { ServicesSection } from "@/components/services-section"
import { TechnologyStack } from "@/components/technology-stack"
import { ProductsSection } from "@/components/products-section"
import { IndustriesSection } from "@/components/industries-section"
import { ClientsSection } from "@/components/clients-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RecognitionStrip />
      <ServicesSection />
      <TechnologyStack />
      <ProductsSection />
      <IndustriesSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
