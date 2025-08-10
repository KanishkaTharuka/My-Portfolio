import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kanishka Tharuka | Web Developer Portfolio',
  description: "Official portfolio of Kanishka Tharuka, showcasing web development skills, projects, and contact information.",
  generator: 'v0.dev',
  icons: {
    icon: '/final3-01.png',
    shortcut: '/final3-01.png',
    apple: '/final3-01.png',
  },
  keywords: ['Kanishka Tharuka', 'portfolio', 'web developer', 'projects', 'skills', 'contact', 'devops'],
  authors: [{ name: 'Kanishka Tharuka', url: 'https://kanishka-tharuka-portfolio.netlify.app' }],
  openGraph: {
    title: 'Kanishka Tharuka | Web Developer Portfolio',
    description: "Portfolio of Kanishka Tharuka, a web developer specializing in Next.js, React, and Node.js.",
    url: 'https://kanishka-tharuka-portfolio.netlify.app',
    type: 'website',
    images: [
      {
        url: 'https://kanishka-tharuka-portfolio.netlify.app/final3-01.png',
        width: 1200,
        height: 630,
        alt: 'Kanishka Tharuka Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanishka Tharuka | Web Developer Portfolio',
    description: "Official portfolio of Kanishka Tharuka, showcasing web development skills and projects.",
    images: ['https://kanishka-tharuka-portfolio.netlify.app/final3-01.png'],
  },
  metadataBase: new URL('https://kanishka-tharuka-portfolio.netlify.app'),
};

import { PropsWithChildren } from 'react'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kanishka Tharuka",
              "url": "https://kanishka-tharuka-portfolio.netlify.app",
              "image": "https://kanishka-tharuka-portfolio.netlify.app/final3-01.png",
              "jobTitle": "Web Developer",
              "sameAs": [
                "https://github.com/KanishkaTharuka",
                "http://linkedin.com/in/kanishka-tharuka-247279309"
              ]
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
