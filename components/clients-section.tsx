"use client"

export function ClientsSection() {
  const clients = [
    "Client A",
    "Client B",
    "Client C",
    "Client D",
    "Client E",
    "Client F",
    "Client G",
    "Client H",
    "Client I",
    "Client J",
  ]

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground">Trusted by Leading Companies</h2>
          <p className="mt-2 text-muted-foreground">Join 200+ satisfied clients worldwide</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex h-20 items-center justify-center rounded-lg bg-muted/50 px-4 text-muted-foreground font-medium hover:bg-muted transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
