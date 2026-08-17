import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SKETCH | A Philosophy of Conscious Examination',
  description: 'Your life is a sketch. Zoom in. Zoom out. Redraw what doesn\'t fit. A philosophy and lifestyle brand about consciously examining the life you\'re drawing.',
  applicationName: 'SKETCH',
  authors: [{ name: 'SKETCH', url: 'https://sketch.com' }],
  keywords: ['philosophy', 'lifestyle', 'conscious living', 'personal growth', 'intentional living'],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sketch.com',
    siteName: 'SKETCH',
    title: 'SKETCH | A Philosophy of Conscious Examination',
    description: 'Your life is a sketch. Zoom in. Zoom out. Redraw what doesn\'t fit.',
    images: [
      {
        url: 'https://sketch.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SKETCH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKETCH',
    description: 'Your life is a sketch. Zoom in. Zoom out. Redraw what doesn\'t fit.',
    images: ['https://sketch.com/og-image.jpg'],
  },
}
