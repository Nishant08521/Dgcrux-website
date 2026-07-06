import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieBanner } from "@/components/cookie-banner"
import { RequirementsPopup } from "@/components/requirements-popup"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "DgCrux Technology - Custom Software Development & AI Solutions",
  description:
    "Leading software development company specializing in AI solutions, cloud services, custom software, and digital transformation for businesses worldwide.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.className} ${geistMono.className}`} suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <CookieBanner />
        <RequirementsPopup />
        <Analytics />
      </body>
    </html>
  )
}
