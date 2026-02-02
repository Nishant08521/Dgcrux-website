"use client"

import Image from "next/image"

export function RecognitionStrip() {
    const logos = [
      { src: "https://vectorseek.com/wp-content/uploads/2023/09/Google-Partner-Logo-Vector.svg-.png", alt: "Partner 1" },
      { src: "https://logowik.com/content/uploads/images/aws-partner-network2396.logowik.com.webp", alt: "Partner 2" },
      { src: "https://www.uxdt.nic.in/wp-content/uploads/2020/06/Startup-India_Preview.png", alt: "Partner 3" },
      { src: "https://media.licdn.com/dms/image/v2/C4E12AQHvuLCHhKuejQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520077509521?e=2147483647&v=beta&t=RlzC0uMNRc0wvHNLfqqeiruP6W91lSjzUf0tIZcvkrs", alt: "Partner 4" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTksIuHkp-7zuNNa4tXwZQ-sI6d8x9v6QaA&s", alt: "Partner 5" },
      { src: "https://p7.hiclipart.com/preview/85/385/219/iso-9000-quality-management-systems%E2%80%94requirements-iso-9001-logo-international-organization-for-standardization-iso-9001-thumbnail.jpg", alt: "Partner 6" },
      { src: "https://miraculoustaxes.in/wp-content/uploads/2024/05/msme-ssi-registration.png", alt: "Partner 7" },
    ]

  return (
    <section className="relative -mt-16 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={80}
                  className="h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
