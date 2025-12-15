import { Badge } from "@/components/ui/badge"

export function RecognitionStrip() {
  const recognitions = ["Startup India", "Google Partner", "AWS Partner", "Microsoft Partner", "ISO Certified"]

  return (
    <section className="border-y border-border bg-muted/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 overflow-x-auto">
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Recognized by:</span>
          <div className="flex gap-6">
            {recognitions.map((item) => (
              <Badge key={item} variant="secondary" className="whitespace-nowrap text-sm font-medium">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
