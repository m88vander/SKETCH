import React from 'react'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/CTA'

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main>
        <Section className="bg-white min-h-[60vh] flex items-center">
          <Container>
            <div className="max-w-2xl text-center space-y-8">
              <h1 className="font-display font-bold text-7xl md:text-8xl text-gray-200">
                404
              </h1>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                Page Not Found
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The page you're looking for doesn't exist. Maybe it's a line that got erased. Or maybe you need to redraw where you're going.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CTA href="/" variant="primary">
                  BACK TO HOME
                </CTA>
                <CTA href="/philosophy" variant="secondary">
                  READ PHILOSOPHY
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
