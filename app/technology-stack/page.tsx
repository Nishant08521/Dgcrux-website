"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  Brain,
  Github,
  Wind,
  Layers,
  Cpu,
  Globe,
  Terminal,
  ShieldCheck,
  Zap
} from "lucide-react"

// Types
type Technology = {
  name: string
  color: string
  icon: React.ReactNode
  category: string
  glowColor: string
}

const technologies: Technology[] = [
  {
    name: "React",
    color: "text-blue-400",
    icon: <Code2 className="w-10 h-10" />,
    category: "frontend",
    glowColor: "rgba(96, 165, 250, 0.4)"
  },
  {
    name: "HTML5",
    color: "text-orange-500",
    icon: <ShieldCheck className="w-10 h-10" />,
    category: "frontend",
    glowColor: "rgba(249, 115, 22, 0.4)"
  },
  {
    name: "CSS3",
    color: "text-blue-500",
    icon: <ShieldCheck className="w-10 h-10" />,
    category: "frontend",
    glowColor: "rgba(37, 99, 235, 0.4)"
  },
  {
    name: "JavaScript",
    color: "text-yellow-400",
    icon: <span className="text-3xl font-bold">JS</span>,
    category: "frontend",
    glowColor: "rgba(250, 204, 21, 0.4)"
  },
  {
    name: "Bootstrap",
    color: "text-purple-500",
    icon: <span className="text-4xl font-extrabold italic">B</span>,
    category: "frontend",
    glowColor: "rgba(168, 85, 247, 0.4)"
  },
  {
    name: "Next.js",
    color: "text-white",
    icon: <span className="text-3xl font-bold">N</span>,
    category: "frontend",
    glowColor: "rgba(255, 255, 255, 0.2)"
  },
  {
    name: "Tailwind CSS",
    color: "text-cyan-400",
    icon: <Wind className="w-10 h-10" />,
    category: "frontend",
    glowColor: "rgba(34, 211, 238, 0.4)"
  },
  {
    name: "GitHub",
    color: "text-indigo-400",
    icon: <Github className="w-10 h-10" />,
    category: "tools",
    glowColor: "rgba(129, 140, 248, 0.4)"
  },
  {
    name: "Framer Motion",
    color: "text-pink-500",
    icon: (
      <div className="flex flex-col items-center">
        <Zap className="w-8 h-8" />
        <span className="text-[10px] font-bold mt-[-4px]">Motion</span>
      </div>
    ),
    category: "frontend",
    glowColor: "rgba(236, 72, 153, 0.4)"
  },
  {
    name: "TypeScript",
    color: "text-blue-600",
    icon: <span className="text-2xl font-bold">TS</span>,
    category: "frontend",
    glowColor: "rgba(37, 99, 235, 0.4)"
  },
  {
    name: "Node.js",
    color: "text-green-500",
    icon: <Terminal className="w-10 h-10" />,
    category: "backend",
    glowColor: "rgba(34, 197, 94, 0.4)"
  },
  {
    name: "Python",
    color: "text-blue-400",
    icon: <Cpu className="w-10 h-10" />,
    category: "backend",
    glowColor: "rgba(96, 165, 250, 0.4)"
  },
  {
    name: "MongoDB",
    color: "text-green-600",
    icon: <Database className="w-10 h-10" />,
    category: "database",
    glowColor: "rgba(22, 163, 74, 0.4)"
  },
  {
    name: "AWS",
    color: "text-orange-400",
    icon: <Cloud className="w-10 h-10" />,
    category: "cloud",
    glowColor: "rgba(251, 146, 60, 0.4)"
  },
  {
    name: "Flutter",
    color: "text-sky-400",
    icon: <Globe className="w-10 h-10" />,
    category: "mobile",
    glowColor: "rgba(56, 189, 248, 0.4)"
  },
]

const CircleCard = ({ tech, index }: { tech: Technology; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      className="relative group cursor-pointer flex flex-col items-center gap-4"
    >
      <div
        className="w-24 h-24 rounded-full bg-white flex items-center justify-center relative transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-slate-100"
      >
        <div className={`z-10 transition-transform duration-300 group-hover:scale-110 ${tech.color}`}>
          {tech.icon}
        </div>

        {/* Subtle glow effect on hover */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
          style={{ backgroundColor: tech.glowColor }}
        />
      </div>

      <p className="text-black text-xs font-bold text-center">
        {tech.name}
      </p>
    </motion.div>
  )
}

export default function TechnologyStack() {
  const [filter, setFilter] = useState("all")

  const filteredTech = filter === "all"
    ? technologies
    : technologies.filter(t => t.category === filter)

  const categories = [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Databases" },
    { id: "mobile", name: "Mobile" },
    { id: "cloud", name: "Cloud" },
    { id: "ai", name: "AI/ML" },
  ]

  return (
    <section className="relative w-full bg-[#f8fafc] py-20 font-sans">
      {/* Dark Header Banner for White Text */}
      <div className="absolute top-0 left-0 w-full h-96 bg-slate-900 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 opacity-90" />
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 pt-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Digital Innovation Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto font-medium"
          >
            We leverage world-class technologies to build powerful, scalable, and stunning digital experiences.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${filter === cat.id
                ? "bg-white text-blue-600 border-white shadow-xl scale-105"
                : "bg-white/10 text-white/70 border-white/10 hover:bg-white/20 backdrop-blur-sm"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid Area - Using a nice white card container */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-16 justify-items-center"
          >
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech, idx) => (
                <CircleCard key={tech.name} tech={tech} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
