import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Primary font for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
})

// Secondary font for body text
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Akeenalee Resource Limited – Leading Infrastructure Company in Nigeria",
  description:
    "Powering Nigeria's Future with reliable ICT and energy infrastructure solutions, including power distribution, solar energy, and LED lighting systems.",
  keywords: "ICT infrastructure, power distribution, solar energy, LED lighting, Nigeria infrastructure company",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="akeenalee-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
