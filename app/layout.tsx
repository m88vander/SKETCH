import { Metadata } from 'next'
import './globals.css'

// Force rebuild - removing all font imports
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}
