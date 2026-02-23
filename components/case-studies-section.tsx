"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
    {
        client: "FinLeap Inc.",
        title: "Predictive Analytics Platform",
        desc: "Engineered a real-time analytics and risk assessment platform that reduced processing time by 70% and improved trading decision accuracy.",
        kpis: [
            { value: "70%", label: "Faster processing" },
            { value: "4X", label: "Decision accuracy" },
        ],
        tags: ["AI/ML", "FinTech", "Cloud"],
        gradient: "from-primary/20 via-primary/5 to-transparent",
    },
    {
        client: "EduVerse",
        title: "AI-Powered Learning Management System",
        desc: "Built a next-gen LMS handling 100K+ concurrent users with AI-driven personalized learning paths and automated content generation.",
        kpis: [
            { value: "100K+", label: "Concurrent users" },
            { value: "3X", label: "Learning engagement" },
        ],
        tags: ["EdTech", "SaaS", "AI"],
        gradient: "from-accent/20 via-accent/5 to-transparent",
    },
    {
        client: "AutoNex",
        title: "Dealer Management System",
        desc: "Delivered an end-to-end DMS revolutionizing dealer network operations with inventory management, CRM, and F&I automation.",
        kpis: [
            { value: "90%", label: "Faster operations" },
            { value: "500+", label: "Dealers onboarded" },
        ],
        tags: ["Automotive", "ERP", "Mobile"],
        gradient: "from-primary/20 via-primary/5 to-transparent",
    },
    {
        client: "SolarGrid Pro",
        title: "Solar EPC ERP Platform",
        desc: "Architected a comprehensive ERP for solar energy companies covering project management, procurement, installation tracking, and compliance.",
        kpis: [
            { value: "60%", label: "Project efficiency gain" },
            { value: "200+", label: "Projects managed" },
        ],
        tags: ["Energy", "ERP", "Cloud"],
        gradient: "from-accent/20 via-accent/5 to-transparent",
    },
];

export const CaseStudiesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="section-padding" id="case-studies">
            <div className="container-narrow mx-auto">
                <div className="mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
                    >
                        Innovation,{" "}
                        <span className="gradient-text">Engineered by DgCrux</span>
                    </motion.h2>
                </div>

                {/* Client tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {caseStudies.map((cs, i) => (
                        <button
                            key={cs.client}
                            onClick={() => setActiveIndex(i)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeIndex === i
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                                }`}
                        >
                            {cs.client}
                        </button>
                    ))}
                </div>

                {/* Active case study card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="glass-card overflow-hidden"
                    >
                        <div
                            className={`bg-gradient-to-r ${caseStudies[activeIndex].gradient}`}
                        >
                            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                                {/* Left: Content */}
                                <div className="flex flex-col justify-center">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {caseStudies[activeIndex].tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                                        {caseStudies[activeIndex].client}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                                        {caseStudies[activeIndex].title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-8">
                                        {caseStudies[activeIndex].desc}
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="w-fit border-primary/30 text-primary hover:bg-primary/10 gap-2"
                                    >
                                        View Success Story <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>

                                {/* Right: KPIs */}
                                <div className="flex items-center justify-center">
                                    <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                                        {caseStudies[activeIndex].kpis.map((kpi) => (
                                            <div
                                                key={kpi.label}
                                                className="glass-card p-6 text-center"
                                            >
                                                <p className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                                                    {kpi.value}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {kpi.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
