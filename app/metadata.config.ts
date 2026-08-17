import type { Metadata } from 'next'
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sketch.com'),
  title: {
    default: 'SKETCH | A Philosophy of Conscious Examination',
    template: '%s | SKETCH',
  },
  description: 'Your life is a sketch. Zoom in. Zoom out. Redraw what doesn\'t fit. A philosophy and lifestyle brand about consciously examining the life you\'re drawing.',
  applicationName: 'SKETCH',
  authors: [
    {
      name: 'SKETCH',
      url: 'https://sketch.com',
    },
  ],
  creator: 'SKETCH',
  publisher: 'SKETCH',
  formatDetection: {
    email: false,
    telephone: false,
  },
  keywords: [
    'philosophy',
    'lifestyle',
    'conscious living',
    'personal growth',
    'intentional living',
    'self-examination',
    'mindfulness',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sketch.com',
    siteName: 'SKETCH',
    title: 'SKETCH | A Philosophy of Conscious Examination',
    description: 'Your life is a sketch. Zoom in. Zoom out. Redraw what doesn\'t fit.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SKETCH - Your life is a sketch',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKETCH',
    description: 'Your life is a sketch. Zoom in. Zoom out. Redraw what doesn\'t fit.',
    creator: '@sketch',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}
