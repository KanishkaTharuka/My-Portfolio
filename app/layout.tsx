import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kanishka Tharuka',
  description: "Kanishka Tharuka's portfolio showcasing skills, projects, and contact information.",
  generator: 'v0.dev',
  icons: {
    icon: '/final3-01.png',
    shortcut: '/final3-01.png',
    apple: '/final3-01.png',
  },
  keywords: ['Kanishka Tharuka', 'portfolio', 'web developer', 'projects', 'skills', 'contact', 'devops'],
  authors: [{ name: 'Kanishka Tharuka' }],
  image: 'https://kanishka-tharuka-portfolio.netlify.app/final3-01.png',
  creator: 'Kanishka Tharuka',
  viewport: 'width=device-width, initial-scale=1',
  url: 'https://kanishka-tharuka-portfolio.netlify.app',
  type: 'website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
