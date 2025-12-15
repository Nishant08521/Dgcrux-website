import { Building2, GraduationCap, Heart, Home, ShoppingBag, Plane, Laptop, HandHeart } from "lucide-react"

const industries = [
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: Building2, name: "Business & Corporate" },
  { icon: Heart, name: "Healthcare & Medical" },
  { icon: GraduationCap, name: "Education & E-Learning" },
  { icon: Home, name: "Real Estate" },
  { icon: Plane, name: "Hospitality & Travel" },
  { icon: Laptop, name: "Technology & IT" },
  { icon: HandHeart, name: "Nonprofit & Charity" },
]

export function IndustriesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering tailored solutions across diverse sectors with deep industry expertise
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.name}
                className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-card-foreground">{industry.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
