import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function PoseEstimationCaseStudy() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-sm text-primary hover:underline mb-8 inline-block">
            ← Back to Case Studies
          </Link>

          <div className="mb-8">
            <Badge className="mb-4">Sports & Fitness</Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              AI-Powered Pose Estimation Platform for Athletes
            </h1>
            <p className="text-xl text-muted-foreground">
              How we helped a sports tech company improve athlete performance with computer vision
            </p>
          </div>

          <img src="/athlete-training-technology.jpg" alt="Pose estimation platform" className="w-full rounded-lg mb-12" />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A leading sports technology company approached us with a vision to revolutionize athletic training. They
              needed an AI-powered solution that could analyze athlete movements in real-time, detect form issues, and
              provide actionable feedback to both coaches and athletes. The system had to be accurate, fast, and work
              with standard camera equipment.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Our Solution</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We developed a comprehensive computer vision platform using state-of-the-art pose estimation algorithms.
              The solution included:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              {[
                "Real-time pose detection with 95% accuracy",
                "Multi-angle camera support",
                "Form analysis and comparison",
                "Injury risk assessment",
                "Performance metrics tracking",
                "Coach and athlete dashboards",
                "Video recording and playback",
                "Mobile app for on-field use",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Results & Impact</h2>
            <div className="grid gap-6 sm:grid-cols-3 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <p className="text-sm text-muted-foreground">Pose detection accuracy</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <p className="text-sm text-muted-foreground">Reduction in training injuries</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <p className="text-sm text-muted-foreground">Athletes using the platform</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {["TensorFlow", "Python", "OpenCV", "React", "Node.js", "AWS", "Docker"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Client Testimonial</h2>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "DgCrux delivered beyond our expectations. The pose estimation platform has transformed how our
                  coaches work with athletes. The accuracy and real-time feedback have been game-changing for injury
                  prevention and performance optimization."
                </p>
                <p className="text-sm font-semibold text-foreground">— CTO, Sports Tech Company</p>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Want Similar Results?</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help you build innovative AI solutions
              </p>
              <Button size="lg" asChild>
                <Link href="/#contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
