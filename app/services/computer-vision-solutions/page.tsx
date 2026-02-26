"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Eye, ScanLine, Box, Activity, Camera, Layers,
  Zap, Shield, TrendingUp, ArrowRight, ArrowUpRight,
  ChevronRight, BarChart3, Cpu, Globe, CheckCircle2,
  Target, Microscope, Factory, Car, ShoppingBag, HeartPulse,
} from "lucide-react"

/* ═══════════════════════ DATA ══════════════════════════ */

const capabilities = [
  {
    id: "detection",
    icon: Box,
    tag: "Object Detection",
    accent: "#3b82f6",
    grad: "from-blue-500 to-cyan-500",
    title: "Real-Time Object Detection & Tracking",
    body: "Sub-50ms inference on custom-trained YOLO, RT-DETR, and Transformer-based detectors. We handle multi-class, multi-instance detection at scale — from warehouse cameras to drone feeds.",
    tech: ["YOLOv9", "RT-DETR", "DETR", "DINO"],
    stat: { label: "mAP score", value: "96.2%" },
  },
  {
    id: "segmentation",
    icon: Layers,
    tag: "Segmentation",
    accent: "#8b5cf6",
    grad: "from-violet-500 to-purple-600",
    title: "Pixel-Perfect Semantic & Instance Segmentation",
    body: "Panoptic and instance segmentation pipelines for medical imaging, satellite analysis, and industrial quality control. Fine-tuned Segment Anything Model (SAM) + custom architectures.",
    tech: ["SAM 2", "Mask2Former", "SegFormer", "YOLOv8-seg"],
    stat: { label: "IoU score", value: "94.8%" },
  },
  {
    id: "classification",
    icon: Target,
    tag: "Classification",
    accent: "#10b981",
    grad: "from-emerald-500 to-teal-500",
    title: "High-Accuracy Visual Classification",
    body: "Product defect classification, medical image diagnosis, and content moderation systems achieving 99%+ accuracy through transfer learning on ViT, ConvNeXt, and EfficientNet variants.",
    tech: ["ViT", "ConvNeXt", "EfficientNet", "CLIP"],
    stat: { label: "Top-1 accuracy", value: "99.1%" },
  },
  {
    id: "ocr",
    icon: ScanLine,
    tag: "OCR & Document AI",
    accent: "#f59e0b",
    grad: "from-amber-500 to-orange-500",
    title: "Intelligent OCR & Document Parsing",
    body: "Extract structured data from invoices, forms, contracts, and IDs in any language. Our document AI pipelines handle skewed, low-res, and handwritten inputs with high precision.",
    tech: ["TrOCR", "PaddleOCR", "LayoutLMv3", "Tesseract"],
    stat: { label: "Field accuracy", value: "97.3%" },
  },
  {
    id: "video",
    icon: Camera,
    tag: "Video Analytics",
    accent: "#ec4899",
    grad: "from-pink-500 to-rose-600",
    title: "Real-Time Video & Stream Analytics",
    body: "Action recognition, crowd counting, anomaly detection, and person re-identification across multi-camera feeds. Deployed on edge hardware and cloud GPUs with streaming inference.",
    tech: ["SlowFast", "VideoMAE", "ByteTrack", "DeepSORT"],
    stat: { label: "Inference speed", value: "30 FPS" },
  },
  {
    id: "3d",
    icon: Box,
    tag: "3D Vision",
    accent: "#06b6d4",
    grad: "from-cyan-500 to-blue-600",
    title: "3D Reconstruction & Depth Estimation",
    body: "Point cloud processing, depth estimation from monocular cameras, and 3D scene reconstruction for robotics, automotive ADAS, and spatial computing applications.",
    tech: ["DPT", "ZoeDepth", "PointNet++", "Open3D"],
    stat: { label: "Depth accuracy", value: "±1.2cm" },
  },
]

const industries = [
  { icon: Factory, name: "Manufacturing", useCase: "Defect detection & QC automation", stat: "99.4% defects caught" },
  { icon: HeartPulse, name: "Healthcare", useCase: "Medical image analysis & diagnosis", stat: "92% diagnostic accuracy" },
  { icon: Car, name: "Automotive", useCase: "ADAS, LiDAR fusion & lane detection", stat: "AEB precision: 99.9%" },
  { icon: ShoppingBag, name: "Retail", useCase: "Cashierless checkout & shelf analytics", stat: "40% shrinkage reduction" },
  { icon: Globe, name: "Agriculture", useCase: "Crop health & yield prediction from UAV", stat: "28% yield improvement" },
  { icon: Shield, name: "Security", useCase: "Perimeter monitoring & threat detection", stat: "<0.01% false positives" },
]

const metrics = [
  { value: "250+", label: "CV models in production", icon: Camera },
  { value: "50ms", label: "Avg. inference latency", icon: Zap },
  { value: "99%+", label: "Accuracy on benchmarks", icon: Target },
  { value: "40+", label: "CV engineers & researchers", icon: Cpu },
  { value: "6", label: "Industries served", icon: Globe },
  { value: "100%", label: "On-premise deployable", icon: Shield },
]

const techStack = [
  { name: "PyTorch", cat: "Framework" },
  { name: "OpenCV", cat: "Vision" },
  { name: "ONNX", cat: "Deployment" },
  { name: "TensorRT", cat: "Inference" },
  { name: "Roboflow", cat: "Data" },
  { name: "Label Studio", cat: "Annotation" },
  { name: "Triton", cat: "Serving" },
  { name: "CUDA", cat: "GPU" },
  { name: "Jetson", cat: "Edge" },
  { name: "Hugging Face", cat: "Models" },
  { name: "MMDetection", cat: "Detection" },
  { name: "Detectron2", cat: "Segmentation" },
]

/* ═══════════════════════ SVG COMPONENTS ══════════════════════════ */

/** Hero: Camera viewfinder with animated detection boxes */
function ViewfinderSVG() {
  return (
    <svg viewBox="0 0 560 380" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="vfGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Background scene — abstract shapes representing a scene */}
      <rect width="560" height="380" fill="#080e18" />
      {/* Faint silhouettes */}
      <rect x="60" y="120" width="140" height="180" rx="4" fill="rgba(255,255,255,0.03)" />
      <rect x="220" y="80" width="120" height="220" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="360" y="140" width="140" height="160" rx="4" fill="rgba(255,255,255,0.03)" />
      <ellipse cx="140" cy="170" rx="30" ry="40" fill="rgba(255,255,255,0.05)" />
      <ellipse cx="280" cy="150" rx="28" ry="36" fill="rgba(255,255,255,0.05)" />
      <ellipse cx="420" cy="175" rx="26" ry="33" fill="rgba(255,255,255,0.05)" />

      {/* Scanline effect */}
      <rect width="560" height="1" y="190" fill="rgba(59,130,246,0.15)">
        <animateTransform attributeName="transform" type="translate" values="0,-190;0,190;0,-190" dur="4s" repeatCount="indefinite" />
      </rect>

      {/* Grid overlay */}
      <pattern id="cvGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0 L0 0 0 20" fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5" />
      </pattern>
      <rect width="560" height="380" fill="url(#cvGrid)" />

      {/* Detection box 1 — person (blue) */}
      <g filter="url(#glow)">
        <rect x="95" y="110" width="110" height="170" rx="2" stroke="#3b82f6" strokeWidth="1.5" fill="rgba(59,130,246,0.04)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
        </rect>
        {/* Corner brackets */}
        <path d="M95 125 L95 110 L110 110" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <path d="M190 110 L205 110 L205 125" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <path d="M95 265 L95 280 L110 280" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <path d="M190 280 L205 280 L205 265" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        {/* Label */}
        <rect x="95" y="95" width="60" height="16" rx="2" fill="#3b82f6" />
        <text x="101" y="106" fill="white" fontSize="8" fontWeight="700">Person 98.2%</text>
      </g>

      {/* Detection box 2 — object (emerald) */}
      <g filter="url(#glow)">
        <rect x="240" y="72" width="100" height="220" rx="2" stroke="#10b981" strokeWidth="1.5" fill="rgba(16,185,129,0.04)">
          <animate attributeName="opacity" values="1;0.65;1" dur="2.7s" repeatCount="indefinite" />
        </rect>
        <path d="M240 87 L240 72 L255 72" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <path d="M325 72 L340 72 L340 87" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <path d="M240 277 L240 292 L255 292" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <path d="M325 292 L340 292 L340 277" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <rect x="240" y="56" width="72" height="16" rx="2" fill="#10b981" />
        <text x="246" y="67" fill="white" fontSize="8" fontWeight="700">Object 96.7%</text>
      </g>

      {/* Detection box 3 — anomaly (rose) */}
      <g filter="url(#glow)">
        <rect x="372" y="130" width="118" height="140" rx="2" stroke="#f43f5e" strokeWidth="1.5" fill="rgba(244,63,94,0.04)">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <path d="M372 145 L372 130 L387 130" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
        <path d="M475 130 L490 130 L490 145" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
        <path d="M372 255 L372 270 L387 270" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
        <path d="M475 270 L490 270 L490 255" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
        <rect x="372" y="114" width="78" height="16" rx="2" fill="#f43f5e" />
        <text x="378" y="125" fill="white" fontSize="8" fontWeight="700">Defect 99.1%</text>
      </g>

      {/* Viewfinder corners — outer frame */}
      <path d="M15 55 L15 15 L60 15" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      <path d="M500 15 L545 15 L545 55" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 325 L15 365 L60 365" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      <path d="M545 325 L545 365 L500 365" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />

      {/* Center crosshair */}
      <circle cx="280" cy="190" r="16" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 4" />
      <line x1="270" y1="190" x2="274" y2="190" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <line x1="286" y1="190" x2="290" y2="190" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <line x1="280" y1="180" x2="280" y2="184" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <line x1="280" y1="196" x2="280" y2="200" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

      {/* HUD elements */}
      <text x="20" y="30" fill="rgba(59,130,246,0.7)" fontSize="8" fontFamily="monospace">REC ●</text>
      <text x="90" y="30" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">4K · 60fps</text>
      <text x="400" y="30" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">INFERENCE: 23ms</text>
      <text x="20" y="370" fill="rgba(16,185,129,0.7)" fontSize="8" fontFamily="monospace">3 objects · Batch: 16 · GPU: RTX 4090</text>
      <text x="390" y="370" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">CONF ≥ 0.85</text>

      {/* Vignette */}
      <rect width="560" height="380" fill="url(#vfGrad)" />

      {/* Animated pulsing dot — scanning indicator */}
      <circle cx="530" cy="22" r="4" fill="#f43f5e">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
        <animate attributeName="r" values="4;6;4" dur="1.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

/** Segmentation mask visual */
function SegmentationSVG() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="260" rx="12" fill="#080e18" />
      {/* Segmentation masks */}
      <ellipse cx="100" cy="130" rx="65" ry="80" fill="rgba(139,92,246,0.25)" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" />
      <ellipse cx="220" cy="120" rx="55" ry="75" fill="rgba(59,130,246,0.25)" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" />
      <ellipse cx="330" cy="135" rx="55" ry="72" fill="rgba(16,185,129,0.25)" stroke="rgba(16,185,129,0.6)" strokeWidth="1.5" />
      {/* Overlapping region */}
      <ellipse cx="165" cy="125" rx="20" ry="30" fill="rgba(236,72,153,0.3)" stroke="rgba(236,72,153,0.5)" strokeWidth="1" />
      {/* Labels */}
      <rect x="55" y="34" width="50" height="14" rx="3" fill="rgba(139,92,246,0.9)" />
      <text x="80" y="44" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="700">Class A</text>
      <rect x="182" y="28" width="50" height="14" rx="3" fill="rgba(59,130,246,0.9)" />
      <text x="207" y="38" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="700">Class B</text>
      <rect x="284" y="38" width="50" height="14" rx="3" fill="rgba(16,185,129,0.9)" />
      <text x="309" y="48" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="700">Class C</text>
      {/* Pixel grid on top */}
      <pattern id="pixGrid" width="8" height="8" patternUnits="userSpaceOnUse">
        <rect width="8" height="8" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      </pattern>
      <rect width="400" height="260" rx="12" fill="url(#pixGrid)" />
      {/* Bottom metric */}
      <rect x="10" y="238" width="380" height="14" rx="3" fill="rgba(255,255,255,0.04)" />
      <text x="20" y="248" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">IoU: 94.8 · mAP@50: 97.1 · Masks: 3 · Time: 18ms</text>
    </svg>
  )
}

/* ═══════════════════════ PAGE ════════════════════════ */

export default function ComputerVisionSolutionsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#07090f" }}>
      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background: deep blue-black with scanner glow */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(59,130,246,0.1), transparent 70%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 0% 80%, rgba(16,185,129,0.06), transparent 70%)" }} />
        </div>
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #3b82f6, #10b981, transparent)" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 w-full">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">

            {/* ── Left text ── */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <Eye className="h-5 w-5" style={{ color: "#60a5fa" }} />
                <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#60a5fa" }}>Computer Vision Solutions</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white mb-6">
                Give your systems<br />
                <span style={{ background: "linear-gradient(135deg, #60a5fa 0%, #34d399 60%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  the power of sight
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
                We build production-grade computer vision systems — from object detection and segmentation to 3D reconstruction and video analytics. Deployed on cloud, edge, and embedded hardware.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" asChild className="rounded-xl px-8 py-6 text-base font-bold border-0 hover:scale-105 transition-all group"
                  style={{ background: "linear-gradient(135deg, #1d4ed8, #0d9488)", boxShadow: "0 0 40px rgba(59,130,246,0.3)" }}>
                  <Link href="/contact">
                    Start Your Vision Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" asChild className="rounded-xl border text-slate-300 hover:text-white hover:bg-white/5 px-8 py-6 text-base font-semibold"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <Link href="/case-studies">See Demos</Link>
                </Button>
              </div>

              {/* Quick stat pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "50ms inference", color: "#3b82f6" },
                  { label: "99%+ accuracy", color: "#10b981" },
                  { label: "Edge & cloud", color: "#a78bfa" },
                  { label: "250+ models live", color: "#f59e0b" },
                ].map((p) => (
                  <div key={p.label} className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white"
                    style={{ background: `${p.color}14`, border: `1px solid ${p.color}30`, color: p.color }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                    {p.label}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Viewfinder SVG ── */}
            <div>
              <div className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(59,130,246,0.2)", boxShadow: "0 0 60px rgba(59,130,246,0.08)" }}>
                {/* Window chrome */}
                <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 text-xs text-slate-500 font-mono">camera-feed-01.live</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-xs font-mono" style={{ color: "#f87171" }}>LIVE</span>
                  </div>
                </div>
                <div style={{ aspectRatio: "560/380" }}>
                  <ViewfinderSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ METRICS STRIP ══════════════ */}
      <section style={{ background: "#0b1220", borderTop: "1px solid rgba(59,130,246,0.12)", borderBottom: "1px solid rgba(59,130,246,0.12)" }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x" style={{ divideColor: "rgba(255,255,255,0.05)" }}>
            {metrics.map((m, i) => {
              const Icon = m.icon
              return (
                <div key={i} className="px-6 py-9 text-center group hover:bg-blue-950/20 transition-colors" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <Icon className="h-5 w-5 mx-auto mb-3 text-blue-400 opacity-70" />
                  <div className="text-3xl font-black text-white mb-1">{m.value}</div>
                  <div className="text-xs text-slate-500">{m.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ CAPABILITIES GRID ══════════════ */}
      <section className="py-24" style={{ background: "#07090f" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#60a5fa" }}>Capabilities</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Every dimension of<br className="hidden sm:block" /> computer vision, covered
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">From a single camera to a distributed edge network — we have the model architecture and engineering depth to match.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.id} className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {/* Top gradient accent */}
                  <div className={`h-0.5 w-full bg-gradient-to-r ${cap.grad} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${cap.accent}12, transparent)` }} />

                  <div className="relative p-8">
                    {/* Icon + tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${cap.accent}15`, border: `1px solid ${cap.accent}30` }}>
                        <Icon className="h-6 w-6" style={{ color: cap.accent }} />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: `${cap.accent}12`, border: `1px solid ${cap.accent}25`, color: cap.accent }}>
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white mb-3 leading-snug">{cap.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{cap.body}</p>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cap.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md text-slate-400"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Stat */}
                    <div className="flex items-center justify-between pt-4"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="text-xs text-slate-500">{cap.stat.label}</span>
                      <span className="text-xl font-black" style={{ color: cap.accent }}>{cap.stat.value}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ SEGMENTATION DEMO ══════════════ */}
      <section className="py-24 border-y" style={{ background: "#0b1220", borderColor: "rgba(59,130,246,0.1)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">

            {/* Left: SVG diagram */}
            <div className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(139,92,246,0.2)", boxShadow: "0 0 50px rgba(139,92,246,0.06)" }}>
              <div className="flex items-center gap-2 px-5 py-3" style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <Layers className="h-4 w-4 text-violet-400" />
                <span className="text-xs font-mono text-slate-500">segmentation-output.png</span>
              </div>
              <div style={{ aspectRatio: "400/260" }}>
                <SegmentationSVG />
              </div>
            </div>

            {/* Right: description */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#a78bfa" }}>Spotlight Feature</p>
              <h2 className="text-4xl font-black text-white leading-tight mb-5">
                Pixel-level understanding<br />of any visual scene
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Our segmentation models don't just draw boxes — they trace exact contours around every object, pixel by pixel. Whether it's separating tissue types in a medical scan or isolating products on a shelf, we achieve clinical-grade precision.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: "Semantic segmentation", desc: "Every pixel classified by category" },
                  { label: "Instance segmentation", desc: "Individual object masks, even when overlapping" },
                  { label: "Panoptic segmentation", desc: "Full scene understanding — 'stuff' + 'things'" },
                  { label: "Video segmentation", desc: "Temporally consistent masks at real-time speeds" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-violet-400" />
                    <div>
                      <span className="text-sm font-bold text-white">{item.label} — </span>
                      <span className="text-sm text-slate-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold transition-all group" style={{ color: "#a78bfa" }}>
                Discuss your use case <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ INDUSTRIES ══════════════ */}
      <section className="py-24" style={{ background: "#07090f" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#60a5fa" }}>Industries</p>
            <h2 className="text-4xl font-black text-white">Computer vision that knows your domain</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">We embed domain experts in every engagement — a radiologist-trained model thinks differently from a defect detection model.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <div key={ind.name} className="group flex items-center gap-5 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)" }}>
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-white">{ind.name}</span>
                      <span className="text-xs font-bold text-emerald-400 shrink-0 ml-2">{ind.stat}</span>
                    </div>
                    <p className="text-sm text-slate-400">{ind.useCase}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ TECH TICKER ══════════════ */}
      <section className="py-5 border-y overflow-hidden" style={{ background: "rgba(59,130,246,0.04)", borderColor: "rgba(59,130,246,0.1)" }}>
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Vision Tech Stack</p>
        <div className="flex">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack, ...techStack].map((t, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-sm font-semibold text-slate-300">{t.name}</span>
                <span className="text-xs text-slate-600">// {t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="relative py-36 overflow-hidden" style={{ background: "#07090f" }}>
        {/* Scanner beam */}
        <div className="absolute inset-x-0 h-px animate-pulse" style={{ background: "linear-gradient(90deg, transparent, #3b82f6, #10b981, transparent)", top: "50%" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
          style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.14) 0%, rgba(16,185,129,0.06) 40%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #3b82f6, transparent)" }} />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Detection frame decoration */}
          <div className="relative inline-block mb-10">
            <div className="absolute -inset-3 opacity-40">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-400" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-blue-400" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-blue-400" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-400" />
            </div>
            <div className="rounded-2xl px-6 py-3" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)" }}>
              <span className="text-sm font-mono" style={{ color: "#60a5fa" }}>
                target: your_vision_problem · confidence: 100%
              </span>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.0] mb-6">
            Show us the problem.<br />
            <span style={{ background: "linear-gradient(135deg, #60a5fa, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              We'll build the system.
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Share your camera feed, your dataset, or just a description of what you want your system to see. We'll design an architecture, validate it on your data, and deploy it — fast.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="rounded-xl px-12 py-7 text-lg font-black border-0 hover:scale-105 transition-all group"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #0d9488)", boxShadow: "0 0 60px rgba(59,130,246,0.35)" }}>
              <Link href="/contact">
                Get a Vision Prototype <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="rounded-xl border text-white hover:bg-white/5 px-12 py-7 text-lg font-semibold hover:scale-105 transition-all"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
