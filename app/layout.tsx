import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "WebCraft",
  description: "Crafting Digital Experiences That Convert",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Tag.png" />
        {/* ...tambahkan tag lain jika perlu... */}
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
