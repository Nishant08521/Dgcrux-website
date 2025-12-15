import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What kinds of projects do you work on?",
    answer:
      "We work on a wide range of projects including custom software development, mobile apps, web applications, AI solutions, cloud services, and e-commerce platforms. Whether you need a simple website or a complex enterprise system, we have the expertise to deliver.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies including React, Next.js, Node.js, Python, AWS, MongoDB, and many more. Our tech stack is carefully selected based on your project requirements to ensure optimal performance and scalability.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. Simple websites can be delivered in 2-4 weeks, while larger enterprise applications may take 3-6 months. We provide detailed timelines during the project planning phase.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! We offer comprehensive maintenance and support packages to keep your application running smoothly. This includes updates, bug fixes, security patches, and technical support.",
  },
  {
    question: "Can you help with existing projects?",
    answer:
      "We can take over existing projects, perform code reviews, fix bugs, add new features, or completely revamp your application. Our team is experienced in working with legacy codebases.",
  },
  {
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team engagements. The best model depends on your project scope and requirements. Contact us for a detailed quote.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">Got questions? We've got answers</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
