"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Brain, Code, Settings, Smartphone, Database, Cloud, Shield } from "lucide-react"
import Image from "next/image"

type Category = {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
}

type Technology = {
  name: string
  icon?: string
  logo?: string
}

const categories: Category[] = [
  { id: "frontend", name: "Frontend Programming Languages", icon: Code },
  { id: "backend", name: "Backend Programming Languages", icon: Settings },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "database", name: "Databases / Data Storages", icon: Database },
  { id: "cloud", name: "Cloud Services", icon: Cloud },
  { id: "ai", name: "AI/ML", icon: Brain },
]

const technologies: Record<string, Technology[]> = {
  frontend: [
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Vue.js", icon: "vue" },
    { name: "Angular", icon: "angular" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "tailwind" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" },
    { name: "PHP", icon: "php" },
    { name: "Django", icon: "django" },
    { name: "Laravel", icon: "laravel" },
    { name: "Express.js", icon: "express" },
  ],
  mobile: [
    { name: "React Native", icon: "react" },
    { name: "Flutter", icon: "flutter" },
    { name: "iOS", icon: "ios" },
    { name: "Android", icon: "android" },
  ],
  database: [
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
    { name: "Redis", icon: "redis" },
  ],
  cloud: [
    { name: "AWS", icon: "aws" },
    { name: "Google Cloud", icon: "gcp" },
    { name: "Azure", icon: "azure" },
    { name: "Digital Ocean", icon: "digitalocean" },
  ],
  ai: [
    { name: "TensorFlow", icon: "tensorflow" },
    { name: "PyTorch", icon: "pytorch" },
    { name: "OpenAI", icon: "openai" },
    { name: "Langchain", icon: "langchain" },
  ],
}

const getTechIconColor = (name: string): string => {
  const colors: Record<string, string> = {
    "React.js": "bg-blue-400",
    "Next.js": "bg-black",
    "Vue.js": "bg-green-500",
    Angular: "bg-red-500",
    TypeScript: "bg-blue-600",
    "Tailwind CSS": "bg-cyan-500",
    "Node.js": "bg-green-600",
    Python: "bg-yellow-500",
    PHP: "bg-indigo-600",
    Django: "bg-green-700",
    Laravel: "bg-red-600",
    "Express.js": "bg-gray-800",
    "React Native": "bg-blue-400",
    Flutter: "bg-blue-500",
    iOS: "bg-gray-800",
    Android: "bg-green-600",
    MongoDB: "bg-green-600",
    PostgreSQL: "bg-blue-700",
    MySQL: "bg-blue-600",
    Redis: "bg-red-600",
    AWS: "bg-orange-500",
    "Google Cloud": "bg-blue-500",
    Azure: "bg-blue-600",
    "Digital Ocean": "bg-blue-500",
    TensorFlow: "bg-orange-600",
    PyTorch: "bg-red-500",
    OpenAI: "bg-green-600",
    Langchain: "bg-blue-600",
  }
  return colors[name] || "bg-slate-500"
}

const getTechInitials = (name: string): string => {
  if (name === "Vue.js") return "V"
  if (name === "Next.js") return "NEXT."
  if (name === "React.js") return "R"
  if (name === "React Native") return "RN"
  if (name === "Express.js") return "EX"
  if (name === "Tailwind CSS") return "TW"
  if (name === "Google Cloud") return "GC"
  if (name === "Digital Ocean") return "DO"
  if (name.includes(" ")) {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 4)
  }
  return name.slice(0, 2).toUpperCase()
}

export default function TechnologyStackPage() {
  const [activeCategory, setActiveCategory] = useState("ai")

  const activeTechnologies = technologies[activeCategory] || []

  return (
    <main className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
        {/* Shield Icons in Upper Right */}
        <div className="absolute top-8 right-8 flex gap-2">
          <Shield className="h-6 w-6 text-purple-400" />
          <Shield className="h-6 w-6 text-purple-400" />
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Tech Capabilities Driving Digital Transformation For Our Clients
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar - Purple Rounded Card */}
            <aside className="w-full lg:w-80 bg-purple-600 rounded-2xl p-6 flex-shrink-0">
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  const isActive = activeCategory === category.id
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-purple-500 text-white shadow-lg"
                          : "text-purple-100 hover:bg-purple-500/50"
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm font-medium text-left flex-1">{category.name}</span>
                      {isActive && (
                        <span className="ml-auto">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </aside>

            {/* Right Content Area - White Rounded Card */}
            <div className="flex-1 bg-white rounded-2xl p-8">
              {/* Header with Shield Icon */}
              <div className="flex items-center justify-center mb-8">
                <div className="bg-slate-100 rounded-full p-3">
                  <Shield className="h-6 w-6 text-slate-700" />
                </div>
              </div>

              {/* Technology Grid */}
              <div className="grid grid-cols-2 gap-4">
                {activeTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
                  >
                    {/* Tech Icon/Logo */}
                    <div className="flex-shrink-0">
                      {tech.logo ? (
                        <div className="w-10 h-10 flex items-center justify-center">
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="object-contain"
                            onError={(e) => {
                              // Fallback to colored circle if image fails
                              const target = e.target as HTMLImageElement
                              target.style.display = "none"
                              const parent = target.parentElement
                              if (parent) {
                                parent.innerHTML = `<div class="w-10 h-10 rounded-full ${getTechIconColor(tech.name)} flex items-center justify-center text-white font-bold text-xs">${getTechInitials(tech.name)}</div>`
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-10 h-10 rounded-full ${getTechIconColor(tech.name)} flex items-center justify-center text-white font-bold text-xs`}
                        >
                          {getTechInitials(tech.name)}
                        </div>
                      )}
                    </div>

                    {/* Tech Name */}
                    <div className="flex-1 min-w-0 flex items-center gap-1">
                      <h3 className="text-sm font-medium text-slate-900 truncate">{tech.name}</h3>
                      {tech.name === "CSS" && (
                        <Shield className="h-3 w-3 text-slate-400 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </main>
  )
}

