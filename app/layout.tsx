import { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Display typeface: Modern Grotesk
const displayFont = localFont({
  src: [
    {
      path: '../public/fonts/grotesk-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/grotesk-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/grotesk-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/grotesk-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-display',
})

// Body typeface: Clean Sans-Serif
const bodyFont = localFont({
  src: [
    {
      path: '../public/fonts/sans-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/sans-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/sans-600.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'SKETCH — Zoom In. Zoom Out. Redraw.',
  description: 'SKETCH is a philosophy and lifestyle brand about consciously examining the life you\'re drawing and continuously reshaping what doesn\'t fit.',
  openGraph: {
    title: 'SKETCH — Zoom In. Zoom Out. Redraw.',
    description: 'SKETCH is a philosophy and lifestyle brand about consciously examining the life you\'re drawing and continuously reshaping what doesn\'t fit.',
    url: 'https://sketch.com',
    siteName: 'SKETCH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKETCH — Zoom In. Zoom Out. Redraw.',
    description: 'SKETCH is a philosophy and lifestyle brand about consciously examining the life you\'re drawing and continuously reshaping what doesn\'t fit.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
