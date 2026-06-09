"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import goal from "../public/goal.png"
import digi from "../public/digi.png"
import source from "../public/sourcex.png"
import empquick from "../public/empquick.png"
import pawsome from "../public/pawsome.jpeg"
// import royal from "../public/royal.webp"
import ws from "../public/wsmobility.jpg"
import vajirao from "../public/vajiraonew.jpg"
import suncity from "../public/suncity.png"
import bing from "../public/bing x.png"
import zeross from "../public/zeros.png"
import rapido from "../public/rapido.png"
import medicin from "../public/medicine.png"
import ibee from "../public/ibee.png"
import kidzee from "../public/kidzee.png"
import mount from "../public/maount.png"
import teenpati from "../public/teenpati.png"
import meal from "../public/meal.png"


const clientsRow1 = [
  { name: "Suncity Projects", logo: suncity },
  { name: "Goal", logo: goal },
  { name: "Digi", logo: digi },
  { name: "SourceX", logo: source },
  { name: "Vajirao", logo: vajirao },
  { name: "BingX", logo: bing },
  { name: "Rapido", logo: rapido },
  { name: "Zeross", logo: zeross },
  { name: "Sourcx.ai", logo: kidzee },

  
]

const clientsRow2 = [
  { name: "Medicine", logo: medicin },
  { name: "Empquick", logo: empquick },
  { name: "Pawsome", logo: pawsome },
  // { name: "Royal Enfield", logo: royal },
  { name: "WS Mobility", logo: ws },
  
  { name: "I-Bee Farm", logo: ibee },
  { name: "Mamma", logo: meal },
  { name: "Grohood", logo: mount },
  { name: "Client J", logo: teenpati },
]

export function ClientsSection() {
  // Duplicate for infinite scroll
  const fullRow1 = [...clientsRow1, ...clientsRow1, ...clientsRow1]
  const fullRow2 = [...clientsRow2, ...clientsRow2, ...clientsRow2]

  return (
    <section className="py-12 bg-white overflow-hidden relative border-y border-slate-100">
      {/* Soft gradient edges */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-white opacity-80" />
      </div>

      <div className="relative z-20">
        <div className="text-center mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[#1b1338] mb-4"
          >
            Some of Our <span className="text-blue-600 italic">Esteemed </span> Clients
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
                  className="flex-shrink-0 w-[160px] h-[60px] flex items-center justify-center transition-all cursor-pointer group/card"
                >
                  <div className="h-full w-full relative">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="160px"
                      className="object-contain transition-all duration-300 grayscale group-hover/card:grayscale-0 opacity-60 group-hover/card:opacity-100 group-hover/card:scale-110"
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
                  className="flex-shrink-0 w-[160px] h-[60px] flex items-center justify-center transition-all cursor-pointer group/card"
                >
                  <div className="h-full w-full relative">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="160px"
                      className="object-contain transition-all duration-300 grayscale group-hover/card:grayscale-0 opacity-60 group-hover/card:opacity-100 group-hover/card:scale-110"
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
