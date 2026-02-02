"use client"

import Image from "next/image"
import Link from "next/link"

type Industry = {
  title: string
  subtitle: string
  copy: string
  image: string
}

const industries: Industry[] = [
  {
    title: "E-commerce",
    subtitle: "E-commerce",
    copy:
      "Craft sales-driving platforms with seamless shopping, secure payments, and efficient inventory management.",
    image: "/1.jpg",
  },
  {
    title: "Business and Corporate",
    subtitle: "Business and Corporate",
    copy:
      "Establish a professional brand presence with portfolios, case studies, and lead-generating contact flows.",
    image: "/2.jpg",
  },
  {
    title: "Healthcare and Medical",
    subtitle: "Healthcare and Medical",
    copy:
      "HIPAA-conscious experiences with patient info, scheduling, secure records, and online consultations.",
    image: "/3.jpg",
  },
  {
    title: "Education and E-Learning",
    subtitle: "Education and E-Learning",
    copy:
      "Dynamic e-learning with course management, registration, progress tracking, and interactive content.",
    image: "/4.jpg",
  },
  {
    title: "Real Estate",
    subtitle: "Real Estate",
    copy:
      "Visually rich listings with virtual tours, smart search, location insights, and mortgage calculators.",
    image: "/5.jpg",
  },
  {
    title: "Hospitality and Travel",
    subtitle: "Hospitality and Travel",
    copy:
      "Booking-ready sites with event calendars, destination guides, responsive design, and API integrations.",
    image: "/6.jpg",
  },
  {
    title: "IT Services",
    subtitle: "Technology and IT Services",
    copy:
      "Showcase innovative IT solutions with custom web apps that streamline operations and experiences.",
    image: "/7a.jpg",
  },
  {
    title: "Nonprofit and Charity",
    subtitle: "Nonprofit and Charity",
    copy:
      "Mission-driven sites with project storytelling, donations, volunteer registration, and supporter engagement.",
    image: "/8.jpg",
  },
  {
    title: "Entertainment and Media",
    subtitle: "Entertainment and Media",
    copy:
      "Media-rich hubs for artists and brands with players, event listings, and social integrations.",
    image: "/9a.jpg",
  },
  {
    title: "Food and Beverage",
    subtitle: "Food and Beverage",
    copy:
      "Restaurant-ready menus, online ordering, and reservations optimized for on-the-go diners.",
    image: "/10a.jpg",
  },
]

export function IndustriesSection() {
  return (
    <section
      id="gallery-section"
      className="relative bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Industries we specialize in</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            In the field of web development, we serve a diverse range of industries, leveraging our expertise to create
            tailored digital solutions that cater to the unique needs and goals of each sector. Our comprehensive web
            development services empower businesses to enhance their online presence, engage their target audience, and
            achieve remarkable growth.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex gap-6"
            style={{
              // Faster auto scroll, roughly one card width per cycle
              animation: "industries-marquee 6s linear infinite",
            }}
          >
            {[...industries, ...industries].map((item, idx) => (
              <IndustryCard key={`${item.title}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes industries-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move by approximately one card width + gap */
            transform: translateX(calc(-380px - 24px));
          }
        }
      `}</style>
    </section>
  )
}

function IndustryCard({ item }: { item: Industry }) {
  return (
    <div className="group relative w-[380px] flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-lg border border-slate-200 sm:w-[420px] lg:w-[480px] xl:w-[24%]">
      {/* Image on top, larger height */}
      <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.subtitle}
          fill
          sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text block at bottom, black/dark text */}
      <div className="flex flex-col justify-between p-4 sm:p-5">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-500">
          {item.subtitle}
        </div>
        <h5 className="mt-1 text-lg font-semibold leading-snug text-slate-900">
          {item.title}
        </h5>
        <p className="mt-2 text-sm text-slate-700 line-clamp-3 group-hover:line-clamp-none">
          {item.copy}
        </p>
        <Link
          href="#"
          className="mt-3 inline-flex text-sm font-semibold uppercase tracking-wide text-[#1a1160] hover:text-amber-500"
        >
          Learn more →
        </Link>
      </div>
    </div>
  )
}
