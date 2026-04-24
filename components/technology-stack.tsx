"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Smartphone, 
  Cloud,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Laptop
} from "lucide-react"

// Mapping names to skillicon slugs for clean logo generation
const getIconUrl = (name: string) => {
  const overrides: Record<string, string> = {
    "framer motion": "https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png",
    "three.js": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg",
    "node.js": "https://skillicons.dev/icons?i=nodejs",
    "keras": "https://w7.pngwing.com/pngs/571/118/png-transparent-keras-logo-thumbnail.png",
    "react native": "https://skillicons.dev/icons?i=react",
    "next.js": "https://skillicons.dev/icons?i=nextjs",
    "tailwind css": "https://skillicons.dev/icons?i=tailwind",
    "typescript": "https://skillicons.dev/icons?i=ts",
    "javascript": "https://skillicons.dev/icons?i=js",
    "python": "https://skillicons.dev/icons?i=py",
    "django": "https://skillicons.dev/icons?i=django",
    "laravel": "https://skillicons.dev/icons?i=laravel",
    "aws": "https://skillicons.dev/icons?i=aws",
    "google cloud": "https://skillicons.dev/icons?i=gcp",
    "docker": "https://skillicons.dev/icons?i=docker",
    "kubernetes": "https://skillicons.dev/icons?i=kubernetes",
    "mongodb": "https://skillicons.dev/icons?i=mongodb",
    "postgresql": "https://skillicons.dev/icons?i=postgres",
  }

  const lowName = name.toLowerCase()
  if (overrides[lowName]) return overrides[lowName]

  const slug = lowName
    .replace(".js", "")
    .replace(" ", "")
  
  return `https://skillicons.dev/icons?i=${slug}`
}

const categories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Globe,
    techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Angular", "Vue.js"],
    color: "from-blue-600 to-cyan-500",
    glow: "rgba(37, 99, 235, 0.08)",
    bg: "bg-blue-50/50"
  },
  {
    id: "backend",
    name: "Backend",
    icon: Code2,
    techs: ["Node.js", "Python", "Django", "Laravel", "NestJS", "FastAPI", "Express.js", "Spring"],
    color: "from-emerald-600 to-teal-500",
    glow: "rgba(16, 185, 129, 0.08)",
    bg: "bg-emerald-50/50"
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: Smartphone,
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Dart"],
    color: "from-purple-600 to-pink-500",
    glow: "rgba(168, 85, 247, 0.08)",
    bg: "bg-purple-50/50"
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Prisma"],
    color: "from-orange-600 to-amber-500",
    glow: "rgba(249, 115, 22, 0.08)",
    bg: "bg-orange-50/50"
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Github Actions", "Terraform"],
    color: "from-sky-600 to-indigo-500",
    glow: "rgba(14, 165, 233, 0.08)",
    bg: "bg-sky-50/50"
  },
  {
    id: "ai",
    name: "AI & ML",
    icon: Cpu,
    techs: ["TensorFlow", "PyTorch", "OpenAI", "Keras", "Python"],
    color: "from-rose-600 to-red-500",
    glow: "rgba(244, 63, 94, 0.08)",
    bg: "bg-rose-50/50"
  }
]

export function TechnologyStack() {
  const [activeTab, setActiveTab] = useState(categories[0].id)
  const activeCategory = categories.find(c => c.id === activeTab) || categories[0]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm"
          >
            <Zap className="w-3 h-3 fill-blue-600" />
            Cutting Edge Tech Stack
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
            Technologies We <span className="text-blue-600 italic">Master</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            We leverage a diverse arsenal of industry-leading technologies to build scalable, secure, and intelligent digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:min-h-[600px]">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`group relative flex items-center gap-5 p-6 rounded-[2rem] border transition-all duration-500 text-left ${
                  activeTab === cat.id 
                  ? "bg-white border-blue-500/20 shadow-xl shadow-blue-500/10 scale-[1.02]" 
                  : "bg-slate-50/50 border-slate-200 hover:bg-white hover:border-blue-200"
                }`}
              >
                <div className={`p-4 rounded-2xl transition-all duration-500 ${
                  activeTab === cat.id 
                  ? `bg-gradient-to-br ${cat.color} text-white shadow-lg` 
                  : "bg-white text-slate-400 border border-slate-200 group-hover:bg-slate-100"
                }`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1">
                  <span className={`block text-base font-bold transition-colors ${
                    activeTab === cat.id ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                  }`}>
                    {cat.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {cat.techs.length} Technologies
                  </span>
                </div>

                <div className={`transition-all duration-500 ${
                  activeTab === cat.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}>
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </div>
              </button>
            ))}
          </div>

          {/* Tech Grid Content */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`h-full flex flex-col p-10 md:p-16 rounded-[3rem] border-2 border-slate-100 bg-white shadow-2xl shadow-slate-200 relative overflow-hidden`}
              >
                {/* Dynamic Glow Background */}
                <div 
                  className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] transition-colors duration-1000 opacity-60"
                  style={{ backgroundColor: activeCategory.glow }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-12 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                    <Layers className="w-4 h-4" />
                    Stack Components
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {activeCategory.techs.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group relative aspect-square"
                      >
                        <div className="relative w-full h-full p-6 rounded-[2rem] bg-white border border-slate-200 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:border-blue-500/20 hover:shadow-xl hover:shadow-slate-200 hover:scale-110">
                          <img 
                            src={getIconUrl(tech)}
                            alt={tech}
                            className="w-12 h-12 object-contain transition-all duration-500 group-hover:rotate-6"
                          />
                          <span className="text-[9px] font-bold text-slate-500 group-hover:text-slate-900 uppercase tracking-wider text-center">
                            {tech}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Stats - Box Type & Colorful */}
        <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Proven Expertise", icon: ShieldCheck, value: "100%", color: "from-blue-600 to-indigo-500", bg: "bg-blue-50", border: "border-blue-200" },
            { label: "Digital Products", icon: Laptop, value: "250+", color: "from-emerald-600 to-teal-500", bg: "bg-emerald-50", border: "border-emerald-200" },
            { label: "Agile Delivery", icon: Zap, value: "Real-time", color: "from-orange-600 to-red-500", bg: "bg-orange-50", border: "border-orange-200" },
            { label: "Future Ready", icon: Sparkles, value: "Cutting-Edge", color: "from-rose-600 to-pink-500", bg: "bg-rose-50", border: "border-rose-200" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group flex flex-col items-center justify-center p-8 text-center rounded-[2.5rem] border-2 ${stat.border} ${stat.bg} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</div>
              
              {/* Corner Accent Glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-0 blur-3xl transition-opacity group-hover:opacity-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
