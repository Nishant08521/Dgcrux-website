"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clientsRow1 = [
  { name: "Suncity Projects", logo: "https://dgcrux.com/images/Dgcruxclient/1.png" },
  { name: "BingX", logo: "https://dgcrux.com/images/Dgcruxclient/2.png" },
  { name: "Rapido", logo: "https://dgcrux.com/images/Dgcruxclient/3.png" },
  { name: "Zeross", logo: "https://dgcrux.com/images/Dgcruxclient/4.png" },
  { name: "Sourcx.ai", logo: "https://dgcrux.com/images/Dgcruxclient/5.png" },
]

const clientsRow2 = [
  { name: "Medicine", logo: "https://dgcrux.com/images/Dgcruxclient/6.png" },
  { name: "I-Bee Farm", logo: "https://dgcrux.com/images/Dgcruxclient/7.png" },
  { name: "Mamma", logo: "https://dgcrux.com/images/Dgcruxclient/19.png" },
  { name: "Grohood", logo: "https://dgcrux.com/images/Dgcruxclient/16.png" },
  { name: "Client J", logo: "https://dgcrux.com/images/Dgcruxclient/18.png" },
]

export function ClientsSection() {
  // Duplicate for infinite scroll
  const fullRow1 = [...clientsRow1, ...clientsRow1, ...clientsRow1]
  const fullRow2 = [...clientsRow2, ...clientsRow2, ...clientsRow2]

  return (
    <section className="py-24 bg-white overflow-hidden relative border-y border-slate-100">
      {/* Soft gradient edges */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-white opacity-80" />
      </div>

      <div className="relative z-20">
        <div className="text-center mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4"
          >
            Some of Our Esteemed Clients
          </motion.h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col gap-10">
          {/* Row 1: Left to Right */}
          <div className="flex overflow-hidden group">
            <motion.div
              className="flex gap-8 pr-8"
              animate={{ x: ["-33.33%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity
              }}
            >
              {fullRow1.map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-[220px] h-[120px] flex flex-col items-center justify-center rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all cursor-pointer group/card"
                >
                  <div className="h-full w-full relative">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain transition-transform group-hover/card:scale-110"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex overflow-hidden group">
            <motion.div
              className="flex gap-8 pr-8"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{
                ease: "linear",
                duration: 28,
                repeat: Infinity
              }}
            >
              {fullRow2.map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-[220px] h-[120px] flex flex-col items-center justify-center rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all cursor-pointer group/card"
                >
                  <div className="h-full w-full relative">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain transition-transform group-hover/card:scale-110"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
