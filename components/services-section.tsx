import Link from "next/link"

const services = [
  {
    title: "Web Development",
    href: "/services/software-development",
    iconClass: "flaticon-responsive",
  },
  {
    title: "App Development",
    href: "/services/app-development",
    iconClass: "flaticon-computer",
  },
  {
    title: "Performance Marketing",
    href: "/services/digital-marketing",
    iconClass: "flaticon-digital-marketing",
  },
  { 
    title: "Search Engine Optimization (SEO)",
    href: "/services/digital-marketing#seo",
    iconClass: "flaticon-development",
  },
  {
    title: "Social Media Management",
    href: "/services/digital-marketing#social-media",
    iconClass: "flaticon-app-development",
  },
  {
    title: "Amazon Seller Services",
    href: "/services/ecommerce#marketplace",
    iconClass: "flaticon-ui",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#eef0f6] bg-[url('/images/testi-8-bg-1-1.png')] bg-repeat bg-center py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="md:col-span-2 xl:col-span-2 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-[48px] lg:text-[52px] font-bold leading-tight text-slate-900">
              Your Complete Digital Growth Hub!
            </h2>
            <p className="mt-5 text-lg leading-7 text-[#9b9fa6] max-w-2xl">
              From Software, App development to designing websites to boosting your online presence, DgCrux is your
              all-in-one place for everything you need to grow your business.
            </p>
          </div>

          {services.slice(0, 2).map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}

          {services.slice(2).map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: { title: string; href: string; iconClass: string }
  index: number
}) {
  const words = service.title.split(" ")
  const breakTitle =
    words.length > 2 ? (
      words.map((word, i) => (
        <span key={`${word}-${i}`} className="block">
          {word}
        </span>
      ))
    ) : (
      service.title
    )

  return (
    <Link href={service.href} className="group block">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#1a1160] px-6 py-8 text-white transition-all duration-500 hover:bg-[#f59f0b] flex flex-col">
        <span className="absolute left-6 top-6 text-5xl font-light text-white/10">{`0${index + 1}`}</span>

        <div className="absolute right-6 top-6 text-5xl text-[#f59f0b] transition-colors duration-500 group-hover:text-[#1a1160] z-10">
          <i className={service.iconClass} aria-hidden="true"></i>
        </div>

        <div className="absolute -right-20 bottom-0 h-[80%] w-28 origin-bottom-right skew-x-0 scale-x-0 bg-black/20 transition duration-500 group-hover:skew-x-[-35deg] group-hover:scale-x-100" />

        <h6 className="mt-auto text-base font-normal uppercase tracking-[1px] leading-tight transition-colors duration-500 group-hover:text-[#1a1160]">
          {breakTitle}
        </h6>
      </div>
    </Link>
  )
}
