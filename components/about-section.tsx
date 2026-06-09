"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import sashi from "@/public/sahsi sir.png"
import sashi2 from "@/public/team.png"
import sashi3 from "@/public/group.png"
import sashi4 from "@/public/sir3.png"
import sashi5 from "@/public/award.png"


const carouselImages = [

  sashi,
  sashi2,
  sashi3,
  sashi4,
  sashi5,

]

export function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="relative overflow-hidden bg-white py-8 sm:py-10">
      {/* Background Decorative Elements */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-10">
        <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-blue-400 blur-3xl" />
        <div className="absolute right-[5%] bottom-[10%] h-96 w-96 rounded-full bg-indigo-300 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Side: Image Stack */}
          <div className="relative order-2 lg:order-1 lg:col-span-5 py-12 flex justify-center">
            <div className="relative w-full max-w-[576px] h-[570px] overflow-hidden rounded-3xl shadow-2xl bg-slate-100">
              {carouselImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={576}
                    height={570}
                    className="object-cover w-full h-full"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            {/* Overlay Card */}
            {/* <div className="absolute -bottom-10 -right-10 hidden rounded-2xl bg-blue-600 p-8 text-white shadow-2xl sm:block lg:-bottom-6 lg:-right-6">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold">10+</span>
                <span className="text-sm font-medium uppercase tracking-wider text-blue-100">Years of Innovation</span>
              </div>
            </div> */}
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2 lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600">About DgCrux</h2>
              <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Engineering the <span className="text-blue-600">Future</span> of Digital & AI Products
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                At DgCrux, we don't just build software; we architect experiences that drive growth. Our mission is to empower businesses with cutting-edge AI and cloud solutions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "AI-Driven Solutions",
                "Scalable Architecture",
                "Cloud-Native Apps",
                "UX-First Design",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-4">
              <p className="text-lg text-slate-600">
                Our team of experts brings together decades of experience in digital transformation. We partner with startups and enterprises to turn complex challenges into seamless digital realities.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  LEARN MORE ABOUT US <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:border-blue-600 hover:text-blue-600"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

