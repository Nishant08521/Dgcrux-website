"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Shield, DollarSign, Zap, Settings, ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function CloudSolutionsPage() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Strategy & Assessment",
      desc: "Evaluate your infrastructure and develop a comprehensive cloud adoption roadmap tailored to your business goals.",
      tag: "Assessment",
      href: "/services/cloud-strategy-assessment",
    },
    {
      icon: Server,
      title: "Cloud Migration & Modernization",
      desc: "Seamlessly migrate your applications and data to AWS, GCP, or Azure with zero downtime and minimal disruption.",
      tag: "Migration",
      href: "/services/cloud-migration-modernization",
    },
    {
      icon: Zap,
      title: "DevOps, CI/CD & Automation",
      desc: "Implement automated pipelines for faster, more reliable software delivery and infrastructure as code.",
      tag: "Automation",
      href: "/services/devops-cicd-automation",
    },
    {
      icon: Shield,
      title: "Cloud Security & Governance",
      desc: "Protect your cloud infrastructure with enterprise-grade security, compliance frameworks, and identity management.",
      tag: "Security",
      href: "/services/cloud-security-governance",
    },
    {
      icon: DollarSign,
      title: "Cost Optimization & FinOps",
      desc: "Reduce cloud spending while maintaining performance through intelligent resource optimization and right-sizing.",
      tag: "FinOps",
      href: "/services/cost-optimization-finops",
    },
    {
      icon: Settings,
      title: "Managed Cloud & Support",
      desc: "24/7 monitoring, maintenance, and support for your cloud infrastructure with guaranteed SLAs.",
      tag: "Support",
      href: "/services/managed-cloud-support",
    },
  ]

  const processSteps = [
    { step: 1, title: "Discover", desc: "Audit current infrastructure, applications, and business requirements" },
    { step: 2, title: "Design", desc: "Architect cloud-native solutions with security, scalability, and cost in mind" },
    { step: 3, title: "Migrate", desc: "Execute phased migration using automated tools with rollback safeguards" },
    { step: 4, title: "Optimize", desc: "Fine-tune performance, implement auto-scaling, and reduce waste" },
    { step: 5, title: "Manage", desc: "Ongoing monitoring, patching, backup, and 24/7 support" },
  ]

  const providers = [
    { name: "Amazon Web Services", logo: "/aws.png", services: ["EC2", "S3", "Lambda", "RDS", "ECS"] },
    { name: "Google Cloud Platform", logo: "/google.png", services: ["Compute", "Storage", "BigQuery", "GKE"] },
    { name: "Microsoft Azure", logo: "/azure.png", services: ["VMs", "Blob", "Functions", "AKS"] },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 backdrop-blur-sm text-blue-300 text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-blue-500/20">
                <Cloud className="h-3 w-3" /> Cloud Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Scale Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Cloud Solutions
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-xl">
                Leverage the power of AWS, Google Cloud, and Azure to build scalable, secure, and cost-effective infrastructure for your business.
              </p>
              <div className="flex gap-4 mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-500/30" asChild>
                  <Link href="#contact">Start Cloud Journey <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
                  <Link href="/case-studies">Cloud Success Stories</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl blur-2xl opacity-30" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <Image
                  src="/cloud_solutions_featured.png"
                  alt="Cloud Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "200+", label: "Cloud Migrations" },
                { num: "99.99%", label: "Uptime Achieved" },
                { num: "3", label: "Cloud Platforms" },
                { num: "40%", label: "Avg Cost Saved" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{s.num}</div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services - Horizontal alternating layout */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Comprehensive Cloud Services</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">End-to-end cloud solutions for modern businesses</p>
          </div>
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = service.icon
              const isEven = i % 2 === 0
              return (
                <Link key={service.title} href={service.href} className="block group">
                  <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 items-center p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300`}>
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">{service.tag}</span>
                      </div>
                      <p className="text-slate-500">{service.desc}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Migration Process - Vertical Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Cloud Migration Process</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">A proven 5-step methodology for seamless cloud adoption</p>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />
            <div className="space-y-8">
              {processSteps.map((step) => (
                <div key={step.step} className="relative flex items-start gap-6 md:pl-0">
                  <div className="hidden md:flex h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white items-center justify-center text-xl font-black shadow-lg flex-shrink-0 relative z-10">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-slate-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Cloud Providers */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Multi-Cloud Expertise</h2>
              <p className="mt-4 text-lg text-slate-500 mb-10">Certified experts across all major cloud platforms</p>
              <div className="space-y-4">
                {providers.map((p) => (
                  <div key={p.name} className="flex items-center gap-5 p-5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                    <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center p-2">
                      <Image src={p.logo} alt={p.name} width={36} height={36} className="object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{p.name}</h4>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {p.services.map((s) => (
                          <span key={s} className="text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-[2rem] blur-2xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/cloud_solutions_featured.png"
                  alt="Cloud Providers"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-700 to-slate-900" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl leading-tight">Ready to Move to the Cloud?</h2>
          <p className="mt-6 text-lg text-blue-200 max-w-2xl mx-auto">Let&apos;s discuss your cloud strategy and migration plan</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 rounded-full shadow-xl px-10" asChild>
              <Link href="/#contact">Request Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-blue-400 text-blue-200 hover:bg-blue-500/20" asChild>
              <Link href="mailto:cloud@dgcrux.com">Email Cloud Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
