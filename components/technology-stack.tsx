import { Badge } from "@/components/ui/badge"

export function TechnologyStack() {
  const technologies = {
    Frontend: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Python", "PHP", "Django", "Laravel", "Express.js"],
    Mobile: ["React Native", "Flutter", "iOS", "Android"],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    Cloud: ["AWS", "Google Cloud", "Azure", "Digital Ocean"],
    "AI/ML": ["TensorFlow", "PyTorch", "OpenAI", "Langchain"],
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technology Stack We Master
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build scalable, secure, and innovative solutions
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
