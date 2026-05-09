import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, Target, Eye, Users, Rocket, ShieldCheck } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about_hero_abstract_1778305502626.png"
            alt="About Hero"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Pioneering <span className="text-blue-600">Innovation</span> <br /> Through Technology
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
              We are a collective of designers, engineers, and strategists dedicated to building the next generation of digital products. Our passion lies in solving complex problems with elegant solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Journey & Vision</h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Founded with a vision to bridge the gap between complex technology and business growth, DgCrux has evolved into a leading digital product engineering firm. We believe that technology should be an enabler, not a barrier.
                </p>
                <p>
                  Over the years, we have partnered with hundreds of startups and established enterprises, helping them navigate the digital landscape. Our approach is rooted in deep technical expertise and a relentless focus on user experience.
                </p>
                <p>
                  Today, we continue to push boundaries in AI, cloud computing, and mobile technology, ensuring our clients stay ahead in an ever-changing world.
                </p>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">250+</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div className="h-12 w-px bg-slate-200" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Expert Engineers</div>
                </div>
                <div className="h-12 w-px bg-slate-200" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">98%</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Client Retention</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/about_us_team_working_1778305433659.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-10 shadow-sm border border-slate-100 flex flex-col items-start gap-6 transition-all hover:shadow-md">
              <div className="p-4 rounded-2xl bg-blue-50 text-blue-600">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower businesses globally by delivering high-impact, AI-driven digital products that solve real-world problems and create sustainable value.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-10 shadow-sm border border-slate-100 flex flex-col items-start gap-6 transition-all hover:shadow-md">
              <div className="p-4 rounded-2xl bg-indigo-50 text-indigo-600">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To become the most trusted technology partner for digital transformation, recognized for our innovation, integrity, and excellence in engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-16">Our Core Values</h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "Customer Centric", desc: "We place our clients at the heart of everything we do." },
              { icon: Rocket, title: "Excellence", desc: "We strive for perfection in every line of code we write." },
              { icon: ShieldCheck, title: "Integrity", desc: "We build trust through transparency and honesty." },
              { icon: CheckCircle2, title: "Innovation", desc: "We constantly explore new frontiers in technology." },
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="p-5 rounded-full bg-blue-600 text-white shadow-lg">
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
