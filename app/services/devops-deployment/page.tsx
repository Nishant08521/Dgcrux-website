"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  GitBranch, Cloud, Settings, Shield, Rocket, ArrowRight, CheckCircle2,
  Star, Clock, TrendingUp, Cpu, Layers, Terminal, Lock, Activity, Server, RefreshCw, BarChart3,
} from "lucide-react"

const services = [
  { icon: GitBranch, title: "CI/CD Pipelines", description: "Automated build, test, and deploy pipelines. From PR merge to production in minutes with GitHub Actions, ArgoCD, and Jenkins.", color: "from-orange-500 to-amber-500", bg: "bg-orange-500/10", border: "border-orange-500/20", highlight: "text-orange-600", tag: "GitHub Actions · ArgoCD" },
  { icon: Cloud, title: "Cloud Deployment", description: "Deploy to AWS, Azure, or GCP with confidence. Multi-region architectures and blue-green deployments for zero-downtime releases.", color: "from-sky-500 to-blue-600", bg: "bg-sky-500/10", border: "border-sky-500/20", highlight: "text-sky-600", tag: "AWS · Azure · GCP" },
  { icon: Settings, title: "Infrastructure as Code", description: "Reproducible, version-controlled infrastructure with Terraform, Pulumi, and Ansible. Spin up environments in minutes.", color: "from-violet-500 to-purple-600", bg: "bg-violet-500/10", border: "border-violet-500/20", highlight: "text-violet-600", tag: "Terraform · Pulumi · Ansible" },
  { icon: Shield, title: "Containerisation", description: "Docker and Kubernetes orchestration for scalable, resilient workloads. Helm charts, autoscaling, and service meshes.", color: "from-cyan-500 to-teal-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20", highlight: "text-cyan-600", tag: "Docker · Kubernetes · Helm" },
  { icon: Activity, title: "Monitoring & Observability", description: "Full-stack observability with Prometheus, Grafana, ELK, and Datadog. Custom alerting and SLO dashboards.", color: "from-emerald-500 to-green-600", bg: "bg-emerald-500/10", border: "border-emerald-500/20", highlight: "text-emerald-600", tag: "Prometheus · Grafana · Datadog" },
  { icon: Lock, title: "DevSecOps", description: "Security gates at every pipeline stage. SAST, DAST, container scanning, secrets management, and compliance automation.", color: "from-rose-500 to-pink-600", bg: "bg-rose-500/10", border: "border-rose-500/20", highlight: "text-rose-600", tag: "SAST · DAST · Vault" },
]

const process = [
  { step: "01", icon: BarChart3, title: "DevOps Assessment", description: "Audit current pipeline and infrastructure. We produce a maturity score and clear improvement roadmap." },
  { step: "02", icon: Layers, title: "Architecture Design", description: "Cloud architecture, networking, IAM policies, and pipeline blueprints — reviewed and approved before implementation." },
  { step: "03", icon: Terminal, title: "Pipeline Automation", description: "Build CI/CD pipelines with automated testing, security scanning, and environment promotion gates." },
  { step: "04", icon: Server, title: "Infrastructure Provisioning", description: "Provision cloud resources as code using Terraform. Every environment is reproducible and version-controlled." },
  { step: "05", icon: Activity, title: "Observability Setup", description: "Deploy monitoring, logging, tracing, and alerting with SLOs and incident-response runbooks." },
  { step: "06", icon: RefreshCw, title: "Continuous Optimisation", description: "Monthly cost reviews, performance tuning, capacity planning, and incident retrospectives." },
]

const benefits = [
  { icon: TrendingUp, text: "10× faster deployment cycles" },
  { icon: Shield, text: "Security embedded at every stage" },
  { icon: Clock, text: "Zero-downtime releases" },
  { icon: Cpu, text: "Infrastructure as Code — version-controlled" },
  { icon: Star, text: "24/7 monitoring & on-call support" },
  { icon: CheckCircle2, text: "30–60% cloud cost savings" },
]

const techStack = ["Docker", "Kubernetes", "Helm", "Terraform", "Ansible", "GitHub Actions", "ArgoCD", "Jenkins", "AWS", "Azure", "GCP", "Prometheus", "Grafana", "Datadog", "Vault", "Istio"]

const stats = [
  { value: "500+", label: "Pipelines Delivered" },
  { value: "99.99%", label: "Deployment Success Rate" },
  { value: "10×", label: "Faster Release Cycles" },
  { value: "40%", label: "Avg. Cloud Cost Savings" },
]

// Framer Motion Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function DevOpsDeploymentPage() {
  return (
    <main className="min-h-screen bg-slate-950 overflow-x-hidden text-slate-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-slate-950" />
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-orange-600/20 blur-[100px]" 
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariant}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={itemVariant} className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <Rocket className="h-4 w-4" /> DevOps &amp; Deployment
            </motion.div>
            
            <motion.h1 variants={itemVariant} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl">
              Ship Faster,{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">Ship Smarter</span>
            </motion.h1>
            
            <motion.p variants={itemVariant} className="max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
              Automate your pipeline, harden your infrastructure, and deploy with total confidence. We transform manual, error-prone releases into reliable, repeatable engineering workflows.
            </motion.p>
            
            <motion.div variants={itemVariant} className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white border-0 px-8 py-6 text-base font-semibold shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)]">
                <Link href="/contact">Start Automating <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/case-studies">Explore Case Studies</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div 
                key={s.label}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md px-6 py-8 text-center"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl transform translate-x-12 -translate-y-12" />
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold text-white mb-2">{s.value}</div>
                  <div className="text-sm font-medium text-amber-500/80 uppercase tracking-wider">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 sm:py-32 bg-slate-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariant}
            className="text-center mb-16 sm:mb-24"
          >
            <motion.h2 variants={itemVariant} className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Excellence</span>
            </motion.h2>
            <motion.p variants={itemVariant} className="text-lg text-slate-400 max-w-2xl mx-auto">
              From pipeline automation to complete platform engineering — every layer of your infrastructure covered by specialized DevOps engineers.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-3xl border border-slate-800 bg-slate-900/60 p-8 hover:bg-slate-800/60 transition-colors overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all`}>
                    <Icon className={`h-6 w-6 ${service.highlight}`} />
                  </div>
                  
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800">
                    <span className="text-xs font-semibold text-slate-500">{service.tag}</span>
                    <ArrowRight className="h-5 w-5 text-slate-600 group-hover:text-amber-500 transition-colors" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="py-24 sm:py-32 bg-slate-900 relative border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 mb-6">
                <GitBranch className="h-4 w-4" /> The Playbook
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Our approach to <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">continuous delivery</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We implement a structured, transparent, and results-driven methodology. From initial assessment to continuous optimisation, we ensure your infrastructure scales dynamically while remaining secure.
              </p>
              
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-slate-300 font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 blur-3xl -z-10 rounded-full" />
              <div className="grid gap-4 sm:grid-cols-2">
                {process.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div 
                      key={item.step}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      className={`rounded-2xl border border-slate-700 bg-slate-800/80 backdrop-blur-sm p-6 relative overflow-hidden ${i % 2 === 1 ? 'sm:mt-8' : ''}`}
                    >
                      <div className="absolute -right-4 -top-4 text-7xl font-black text-slate-700/30 select-none pb-2">{item.step}</div>
                      <Icon className="h-8 w-8 text-amber-400 mb-4" />
                      <h4 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h4>
                      <p className="text-sm text-slate-400 relative z-10">{item.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <section className="py-20 bg-slate-950 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Technologies We Master</p>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-6 px-3 whitespace-nowrap"
          >
            {[...techStack, ...techStack].map((tech, idx) => (
              <span 
                key={`${tech}-${idx}`} 
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          {/* Faders */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15),transparent_70%)]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Stop firefighting. <br/>
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Start deploying.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Get a comprehensive DevOps assessment. We'll identify architectural bottlenecks, security vulnerabilities, and pipeline inefficiencies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 border-0 px-8 py-6 text-base font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 transition-all">
              <Link href="/contact">Schedule Technical Audit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-slate-700 bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 text-base font-semibold hover:scale-105 transition-all">
              <Link href="/services">Explore More Services</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
