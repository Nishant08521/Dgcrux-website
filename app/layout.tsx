import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieBanner } from "@/components/cookie-banner"
import { RequirementsPopup } from "@/components/requirements-popup"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DgCrux Technology - Custom Software Development & AI Solutions",
  description:
    "Leading software development company specializing in AI solutions, cloud services, custom software, and digital transformation for businesses worldwide.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "https://dgcrux.com/images/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://dgcrux.com/images/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "https://dgcrux.com/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`font-sans antialiased`}>
        {children}
        <CookieBanner />
        <RequirementsPopup />
        <Analytics />
      </body>
    </html>
  )
}
