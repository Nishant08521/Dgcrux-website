import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="about-section bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative w-full max-w-2xl pb-20">
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-xl">
              <Image
                src="https://dgcrux.com/images/dgcrux-technology-about.jpg"
                alt="About helping businesses"
                width={820}
                height={560}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-[-230px]  w-[400px] sm:w-[420px] md:w-[450px] overflow-hidden rounded-2xl border border-slate-100 shadow-xl transform -translate-y-1/2">
              <Image
                src="https://dgcrux.com/images/founder.jpg"
                alt="Founder"
                width={450}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                We are Committed to provide outstanding service
              </h3>
              <p className="text-lg font-semibold uppercase tracking-wide text-amber-500">
                Passionate about helping businesses succeed in the digital age
              </p>
            </div>

            <div className="text-lg leading-8 text-slate-700">
              <p>
                At DgCrux, we understand that the digital landscape is constantly changing, and we strive to stay ahead
                of the curve. Our team of experienced and knowledgeable digital marketers will create and implement
                effective strategies to maximize your online presence and help you reach your goals. We offer a wide
                variety of Digital &amp; IT services, we&apos;re committed to providing outstanding customer service and
                delivering results that exceed your expectations.
              </p>
              <p className="mt-4">
                We look forward to helping you achieve success in the digital world!
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

