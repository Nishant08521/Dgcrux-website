"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Eye, Heart, Users, ShieldCheck, Scale, FileCheck, ArrowRight, Quote, Rocket } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-white/10">
              <Rocket className="h-3 w-3" /> About Us
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Your Partner in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Digital Transformation
              </span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-blue-100 max-w-3xl mx-auto">
              At DgCrux, we are passionate about helping businesses succeed in the digital age. We understand that the digital landscape is constantly changing, and we strive to stay ahead of the curve. Our team of experienced and knowledgeable digital marketers will create and implement effective strategies to maximize your online presence and help you reach your goals.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-blue-100 max-w-3xl mx-auto">
              We work closely with our clients to develop a custom plan that fits their budget and meets their needs. We are committed to providing outstanding customer service and delivering results that exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20 rounded-2xl overflow-hidden shadow-2xl">
            {[
              { number: "9+", label: "Years Experience" },
              { number: "100+", label: "Happy Clients" },
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Team Members" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 text-center">
                <div className="text-3xl font-black text-blue-600">{stat.number}</div>
                <div className="text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                <Quote className="h-3 w-3" /> Our Founder
              </div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Shashidhar Rajan
              </h2>
              <p className="text-blue-600 font-semibold text-lg mt-1">
                Founder & CEO of DgCrux Technology
              </p>
              <p className="text-slate-500 text-sm mt-1">
                B.Tech (CS) &bull; MBA (Business Analytics)
              </p>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Shashi is a young and dynamic entrepreneur aspiring a broad vision to revolutionize the digital & IT industry.
                </p>
                <p>
                  Shashi has done B.Tech in Computer Science from ICFAI University Dehradun & Masters in Business Analytics from Alliance University Bangalore. He is having 9+ years of experience in serving national and multinational corporate giants in the Digital and IT industry.
                </p>
                <p>
                  He is the perfect amalgamation of the person holding engineering capabilities and leadership skills. He carries things logically with persistent efforts and believes in hard work and commitment.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors mt-6"
              >
                Get ahead of the curve <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-amber-500 rounded-[2rem] blur-2xl opacity-30" />
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/sir3.png"
                    alt="Shashidhar Rajan - Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      SR
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Shashidhar Rajan</p>
                      <p className="text-[10px] text-slate-500">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Mission & Vision
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group relative p-8 rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors" />
              <div className="relative">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white w-fit shadow-lg mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our mission is to help businesses grow their presence in the digital world by providing creative and effective digital & IT solutions. Our goal is to provide quality services that help our clients successfully reach their target audience, increase brand awareness, and generate exponential leads, sales and revenue.
                </p>
              </div>
            </div>
            <div className="group relative p-8 rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-100 transition-colors" />
              <div className="relative">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white w-fit shadow-lg mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our company&apos;s ethical values and principles — being truthful and transparent in all business dealings and maintaining a reputation for trustworthiness, treating all employees, customers, and stakeholders with fairness and respect, maintaining high standards of professionalism and maintaining the trust and confidence of stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full blur-3xl opacity-20" />
              <Image
                src="/dgcrux.png"
                alt="Dgcrux Technology Logo"
                width={120}
                height={120}
                className="object-contain relative"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Our Core Values
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">
            The principles that guide everything we do at DgCrux Technology.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Heart, label: "Honesty & Integrity", color: "from-rose-500 to-red-600", bg: "bg-rose-50" },
              { icon: Users, label: "Respect for the Individual", color: "from-emerald-500 to-green-600", bg: "bg-emerald-50" },
              { icon: ShieldCheck, label: "Professionalism", color: "from-amber-500 to-orange-600", bg: "bg-amber-50" },
              { icon: Scale, label: "Transparency", color: "from-violet-500 to-purple-600", bg: "bg-violet-50" },
              { icon: FileCheck, label: "Compliance with Laws", color: "from-cyan-500 to-blue-600", bg: "bg-cyan-50" },
            ].map((val, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`p-4 rounded-full bg-gradient-to-br ${val.color} text-white w-fit mx-auto shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <val.icon className="h-6 w-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">{val.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl leading-tight">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Let&apos;s work together to create a custom plan that fits your budget and meets your needs.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full text-base font-bold hover:bg-amber-50 hover:text-blue-700 transition-all shadow-xl hover:shadow-2xl"
            >
              Get ahead of the curve <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
