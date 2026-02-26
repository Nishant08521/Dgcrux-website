"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Brain,
  Code2,
  Database,
  Zap,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  BarChart3,
  Network,
  Cpu,
  FlaskConical,
  Eye,
  MessageSquare,
  GitMerge,
  TrendingUp,
  Shield,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react"

/* ─── DATA ──────────────────────────────────────────────────────────────── */

// Bento grid capabilities
const capabilities = [
  {
    id: "ml-models",
    size: "large", // col-span-2
    icon: Brain,
    category: "Core ML",
    title: "Custom Machine Learning Models",
    description: "We architect, train, and deploy ML models tuned precisely to your data and business problem — not off-the-shelf solutions repurposed for your domain.",
    metrics: [{ label: "Model accuracy improvement", value: "+34%" }, { label: "Training time reduction", value: "5×" }],
    accent: "from-violet-500 to-indigo-600",
    accentLight: "bg-violet-500/10 border-violet-500/20 text-violet-600",
    dot: "bg-violet-500",
  },
  {
    id: "nlp",
    size: "small",
    icon: MessageSquare,
    category: "NLP",
    title: "Natural Language Processing",
    description: "Text classification, sentiment analysis, entity extraction, and custom LLM fine-tuning for your private data.",
    accent: "from-pink-500 to-rose-600",
    accentLight: "bg-pink-500/10 border-pink-500/20 text-pink-600",
    dot: "bg-pink-500",
  },
  {
    id: "cv",
    size: "small",
    icon: Eye,
    category: "Computer Vision",
    title: "Vision & Image Intelligence",
    description: "Object detection, image segmentation, video analytics, and defect inspection systems for industrial and consumer applications.",
    accent: "from-amber-500 to-orange-600",
    accentLight: "bg-amber-500/10 border-amber-500/20 text-amber-600",
    dot: "bg-amber-500",
  },
  {
    id: "pipelines",
    size: "small",
    icon: Database,
    category: "Data Engineering",
    title: "AI-Ready Data Pipelines",
    description: "End-to-end data ingestion, cleaning, feature engineering, and real-time streaming pipelines built for ML workloads.",
    accent: "from-cyan-500 to-blue-600",
    accentLight: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600",
    dot: "bg-cyan-500",
  },
  {
    id: "mlops",
    size: "large",
    icon: GitMerge,
    category: "MLOps",
    title: "Model Deployment & MLOps",
    description: "Production-grade ML infrastructure with continuous training, A/B testing, drift monitoring, and automated retraining pipelines. Your models stay accurate long after launch.",
    metrics: [{ label: "Deployment time", value: "Hours not weeks" }, { label: "Model uptime SLA", value: "99.9%" }],
    accent: "from-emerald-500 to-teal-600",
    accentLight: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600",
    dot: "bg-emerald-500",
  },
  {
    id: "genai",
    size: "small",
    icon: Sparkles,
    category: "Generative AI",
    title: "GenAI Application Development",
    description: "RAG systems, LLM agents, copilots, and multi-modal apps using OpenAI, Anthropic, Mistral, and open-source models.",
    accent: "from-indigo-500 to-purple-600",
    accentLight: "bg-indigo-500/10 border-indigo-500/20 text-indigo-600",
    dot: "bg-indigo-500",
  },
]

const metrics = [
  { value: "400+", label: "ML Models in Production", icon: Brain },
  { value: "98%", label: "Model Accuracy Target", icon: TrendingUp },
  { value: "12ms", label: "Avg. Inference Latency", icon: Zap },
  { value: "60+", label: "AI/ML Engineers", icon: Cpu },
  { value: "3×", label: "Faster Time-to-Model", icon: Clock },
  { value: "100%", label: "Model Explainability", icon: Shield },
]

const techStack = [
  { name: "PyTorch", cat: "Frameworks" },
  { name: "TensorFlow", cat: "Frameworks" },
  { name: "scikit-learn", cat: "ML" },
  { name: "Hugging Face", cat: "NLP" },
  { name: "LangChain", cat: "GenAI" },
  { name: "OpenAI API", cat: "GenAI" },
  { name: "MLflow", cat: "MLOps" },
  { name: "Kubeflow", cat: "MLOps" },
  { name: "Apache Spark", cat: "Data" },
  { name: "Kafka", cat: "Streaming" },
  { name: "Airflow", cat: "Orchestration" },
  { name: "Ray", cat: "Distributed" },
  { name: "ONNX", cat: "Deployment" },
  { name: "Triton", cat: "Serving" },
  { name: "dbt", cat: "Data" },
  { name: "Weights & Biases", cat: "Experiment" },
]

const process = [
  { step: "01", title: "Problem Framing", description: "We translate your business challenge into a precise ML problem statement — choosing the right task type, success metrics, and data requirements before touching code." },
  { step: "02", title: "Data Assessment", description: "Audit your existing data for quality, volume, and relevance. We design data collection strategies and feature engineering pipelines that give models the best possible inputs." },
  { step: "03", title: "Experimentation", description: "Rapid prototyping with tracked experiments in MLflow or W&B. Multiple model architectures evaluated against your success metrics with full reproducibility." },
  { step: "04", title: "Training & Optimisation", description: "Distributed training on GPU clusters, hyperparameter tuning, and model compression for efficient inference. We optimise for both accuracy and serving cost." },
  { step: "05", title: "Evaluation & Validation", description: "Rigorous hold-out testing, bias audits, and explainability reports. We don't deploy what we can't explain and validate." },
  { step: "06", title: "Production Deployment", description: "Containerised model serving with auto-scaling, A/B testing infrastructure, real-time monitoring, and automated retraining triggers." },
]

const useCases = [
  { industry: "Fintech", useCase: "Fraud detection model", lift: "43% fewer false positives" },
  { industry: "Healthcare", useCase: "Medical image diagnosis", lift: "92% diagnostic accuracy" },
  { industry: "Retail", useCase: "Demand forecasting", lift: "28% inventory reduction" },
  { industry: "Manufacturing", useCase: "Predictive maintenance", lift: "67% downtime reduction" },
  { industry: "SaaS", useCase: "Churn prediction", lift: "3.1× retention improvement" },
  { industry: "Logistics", useCase: "Route optimisation", lift: "22% fuel cost reduction" },
]

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

export default function AIMLDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#08090e] overflow-x-hidden">
      <Navbar />

      {/* ── HERO: Full-width terminal/code aesthetic ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Mesh gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(124,58,237,0.15),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_80%_60%_at_20%_100%,rgba(16,185,129,0.08),transparent_70%)]" />
        </div>

        {/* Animated horizontal scan line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

        {/* Background code pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03] select-none pointer-events-none font-mono text-[10px] leading-5 text-green-400 break-all p-8">
          {`import torch\nimport torch.nn as nn\nfrom transformers import AutoModel\n\nclass CustomMLModel(nn.Module):\n    def __init__(self, config):\n        super().__init__()\n        self.backbone = AutoModel.from_pretrained(config.model_name)\n        self.classifier = nn.Sequential(\n            nn.Linear(config.hidden_size, 256),\n            nn.ReLU(),\n            nn.Dropout(0.1),\n            nn.Linear(256, config.num_labels)\n        )\n    \n    def forward(self, input_ids, attention_mask):\n        outputs = self.backbone(input_ids=input_ids, attention_mask=attention_mask)\n        pooled = outputs.last_hidden_state[:, 0]\n        return self.classifier(pooled)\n\n# Training pipeline\ntrainer = Trainer(\n    model=model,\n    args=training_args,\n    train_dataset=train_dataset,\n    eval_dataset=eval_dataset,\n    compute_metrics=compute_metrics\n)`.repeat(6)}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
          {/* Terminal window header */}
          <div className="inline-flex items-center gap-2 rounded-t-lg border border-white/10 bg-white/5 px-4 py-2 mb-0 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-slate-500 font-mono">ai-ml-development.tsx</span>
          </div>

          <div className="rounded-b-2xl rounded-tr-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-10 sm:p-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-1.5 font-mono text-sm">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-300">dgcrux</span>
                  <span className="text-slate-500"> build</span>
                  <span className="text-violet-400"> --service=ai-ml</span>
                  <span className="text-emerald-400 ml-2 animate-pulse">▌</span>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black text-white leading-[1.0] tracking-tight mb-8">
                AI & ML that{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                    ships to production
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-emerald-500" />
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                We don't just build models — we deploy them. Every project ends with a production-ready, monitored, and continuously improving ML system integrated into your product.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="rounded-lg bg-violet-600 hover:bg-violet-500 text-white border-0 px-8 py-6 text-base font-bold shadow-2xl shadow-violet-500/30 hover:scale-105 transition-all font-mono group">
                  <Link href="/contact">
                    <span className="text-violet-300 mr-1">{">"}</span> start_project()
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" asChild className="rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 px-8 py-6 text-base font-semibold transition-all">
                  <Link href="/case-studies">View Results</Link>
                </Button>
              </div>
            </div>

            {/* Floating stat pills */}
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                { label: "400+ models in production", dot: "bg-emerald-400" },
                { label: "12ms avg. inference", dot: "bg-violet-400" },
                { label: "60+ ML engineers", dot: "bg-amber-400" },
                { label: "PyTorch · TensorFlow · JAX", dot: "bg-cyan-400" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
                  <div className={`w-2 h-2 rounded-full ${p.dot}`} />
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH TICKER ── */}
      <section className="py-6 border-y border-white/8 bg-black/40 overflow-hidden">
        <div className="relative flex">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap will-change-transform">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-sm font-mono text-slate-400">{tech.name}</span>
                <span className="text-xs text-slate-600 ml-1">// {tech.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENTO CAPABILITIES ── */}
      <section className="py-24 bg-[#08090e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-sm font-bold tracking-[0.2em] text-violet-400 uppercase font-mono mb-3">{"// capabilities"}</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Every flavour of AI/ML,<br className="hidden sm:block" /> production-proven
            </h2>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              const isLarge = cap.size === "large"
              return (
                <div
                  key={cap.id}
                  className={`group relative rounded-2xl border border-white/8 bg-white/[0.03] p-8 overflow-hidden hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 ${isLarge ? "lg:col-span-2" : ""}`}
                >
                  {/* Gradient top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${cap.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  {/* Hover glow */}
                  <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${cap.accent} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500`} />

                  <div className="relative">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.accent} bg-opacity-20 flex items-center justify-center`} style={{ background: `linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.05))` }}>
                        <Icon className="h-6 w-6 text-white opacity-80" />
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="h-5 w-5 text-slate-500" />
                      </div>
                    </div>

                    {/* Category tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${cap.dot}`} />
                      <span className="text-xs font-bold text-slate-500 tracking-widest uppercase font-mono">{cap.category}</span>
                    </div>

                    <h3 className="text-xl font-black text-white mb-4 leading-snug">{cap.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>

                    {/* Metrics row for large cards */}
                    {isLarge && cap.metrics && (
                      <div className="mt-8 flex gap-6">
                        {cap.metrics.map((m) => (
                          <div key={m.label} className="rounded-xl border border-white/8 bg-white/5 px-5 py-4">
                            <div className="text-2xl font-black text-white mb-1">{m.value}</div>
                            <div className="text-xs text-slate-500">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── METRICS WALL ── */}
      <section className="py-20 bg-gradient-to-b from-[#0d0b1a] to-[#08090e] border-y border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8">
            {metrics.map((m) => {
              const Icon = m.icon
              return (
                <div key={m.label} className="bg-[#08090e] px-6 py-10 text-center group hover:bg-violet-950/30 transition-colors">
                  <Icon className="h-5 w-5 text-violet-400 mx-auto mb-4 opacity-70" />
                  <div className="text-3xl font-black text-white mb-2">{m.value}</div>
                  <div className="text-xs text-slate-500 leading-snug">{m.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS: Numbered list with connector ── */}
      <section className="py-24 bg-[#08090e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Sticky left label */}
            <div className="lg:col-span-2 lg:sticky lg:top-24 self-start">
              <p className="text-sm font-bold tracking-[0.2em] text-violet-400 uppercase font-mono mb-4">{"// process"}</p>
              <h2 className="text-4xl font-black text-white leading-tight mb-6">
                From raw data to live model in 6 stages
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">Every ML project follows a rigorous, reproducible methodology — not ad-hoc notebooks. You get full visibility at every stage.</p>
              <Button asChild className="rounded-lg bg-violet-600 hover:bg-violet-500 text-white border-0 px-7 py-5 font-bold hover:scale-105 transition-all group">
                <Link href="/contact">
                  Discuss Your Project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Steps */}
            <div className="lg:col-span-3 relative">
              {/* Vertical connector */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent hidden sm:block" />

              <div className="space-y-6">
                {process.map((item, idx) => (
                  <div key={item.step} className="group relative flex gap-8 rounded-2xl border border-white/6 bg-white/[0.02] p-7 pl-16 sm:pl-20 hover:border-violet-500/30 hover:bg-violet-950/20 transition-all duration-300">
                    {/* Circle on connector */}
                    <div className="absolute left-4 top-7 w-5 h-5 rounded-full border-2 border-violet-500/40 bg-[#08090e] group-hover:border-violet-500 group-hover:bg-violet-500 transition-all flex items-center justify-center hidden sm:flex">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 group-hover:bg-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-violet-500 font-bold mb-2 tracking-widest">{item.step}</div>
                      <h3 className="text-lg font-black text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES TABLE ── */}
      <section className="py-24 bg-gradient-to-b from-[#08090e] to-[#0d0b1a]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-[0.2em] text-violet-400 uppercase font-mono mb-3">{"// results"}</p>
            <h2 className="text-4xl font-black text-white leading-tight">Real models. Real outcomes.</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">A sample of what we've shipped across industries.</p>
          </div>

          <div className="rounded-2xl border border-white/8 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-white/5 px-8 py-4 border-b border-white/8">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Industry</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Use Case</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">Outcome</span>
            </div>
            {useCases.map((uc, i) => (
              <div key={i} className={`grid grid-cols-3 px-8 py-5 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors group`}>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  <span className="text-sm font-bold text-slate-300">{uc.industry}</span>
                </div>
                <span className="text-sm text-slate-400">{uc.useCase}</span>
                <span className="text-sm font-bold text-emerald-400">{uc.lift}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: Dark, minimal, dramatic ── */}
      <section className="relative py-32 overflow-hidden bg-[#08090e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(124,58,237,0.18),transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-mono text-sm text-violet-400 mb-6">
            <span className="text-slate-600">{">"}</span> model.status = <span className="text-emerald-400">"ready_for_production"</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
            Your ML model is<br />
            one conversation away
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us your problem. We'll tell you which ML approach fits, estimate the data requirements, and give you a realistic timeline — free, with no strings.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 px-10 py-7 text-lg font-black shadow-2xl shadow-violet-500/30 hover:scale-105 transition-all group">
              <Link href="/contact">
                Build My ML System <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-xl border-white/15 text-white hover:bg-white/5 px-10 py-7 text-lg font-semibold hover:scale-105 transition-all">
              <Link href="/case-studies">See More Results</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
