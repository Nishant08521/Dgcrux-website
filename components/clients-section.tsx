"use client"

import Image from "next/image"

export function ClientsSection() {
  const clients = [
    { name: "Suncity Projects", logo: "https://dgcrux.com/images/Dgcruxclient/1.png" },
    { name: "BingX", logo: "https://dgcrux.com/images/Dgcruxclient/2.png" },
    { name: "Rapido", logo: "https://dgcrux.com/images/Dgcruxclient/3.png" },
    { name: "Zeross", logo: "https://dgcrux.com/images/Dgcruxclient/4.png" },
    { name: "Sourcx.ai", logo: "https://dgcrux.com/images/Dgcruxclient/5.png" },
    { name: "Medicine", logo: "https://dgcrux.com/images/Dgcruxclient/6.png" },
    { name: "I-Bee Farm", logo: "https://dgcrux.com/images/Dgcruxclient/7.png" },
    { name: "Mamma", logo: "https://dgcrux.com/images/Dgcruxclient/19.png" },
    { name: "Grohood", logo: "https://dgcrux.com/images/Dgcruxclient/16.png" },
    { name: "Client J", logo: "https://dgcrux.com/images/Dgcruxclient/18.png" },
  ]

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Some of Our Esteemed Clients
          </h2>
          {/* <h2 className="text-2xl font-bold text-foreground">Some of our Esteemed Clients</h2> */}
          {/* <p className="mt-2 text-muted-foreground">Join 200+ satisfied clients worldwide</p> */}
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex aspect-square items-center justify-center rounded-lg bg-white border border-slate-200 p-4 hover:shadow-md transition-all"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={120}
                className="h-auto max-h-full w-auto max-w-full object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = `<span class="text-sm font-medium text-muted-foreground text-center">${client.name}</span>`
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
