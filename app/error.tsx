'use client'

import React, { useEffect } from 'react'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/CTA'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Navigation />

      <main>
        <Section className="bg-white min-h-[60vh] flex items-center">
          <Container>
            <div className="max-w-2xl text-center space-y-8">
              <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight">
                Something Went Wrong
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We encountered an error. This line didn't turn out right. Let's erase it and try again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => reset()}
                  className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors"
                >
                  TRY AGAIN
                </button>
                <CTA href="/" variant="secondary">
                  BACK TO HOME
                </CTA>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
