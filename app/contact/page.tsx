import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { CTA } from '@/components/CTA'

export const metadata = {
  title: 'Contact | SKETCH',
  description: 'Get in touch with SKETCH. We read every message.',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-6">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We read every message. We respond to inquiries within 48 hours. Tell us about your sketch.
              </p>
            </div>
          </Container>
        </Section>

        {/* Contact Form Section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Form */}
              <div className="md:col-span-2">
                <ContactForm />
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-lg mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@sketch.com"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    hello@sketch.com
                  </a>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg mb-3">
                    Follow
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black transition-colors"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black transition-colors"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black transition-colors"
                      >
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg mb-3">
                    Response Time
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We aim to respond to all inquiries within 48 hours. If you don't hear from us, check your spam folder.
                  </p>
                </div>

                <div className="border-t border-gray-300 pt-6">
                  <p className="text-sm text-gray-600">
                    We\'re interested in: partnership inquiries, collaboration ideas, feedback on the philosophy, and stories about how SKETCH is helping you redraw your picture.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-xl mb-3">
                    How long does shipping take?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Orders ship within 3-5 business days. Standard shipping is included and typically arrives within 5-7 business days.
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl mb-3">
                    What is your return policy?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We want you to love what you wear. If you're not satisfied, contact us within 14 days of receipt for returns or exchanges.
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl mb-3">
                    Can I wholesale SKETCH products?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We're interested in wholesale partnerships with aligned retailers. Email us at hello@sketch.com with your inquiry.
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl mb-3">
                    Do you offer custom or personalized products?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Currently, we keep our products minimal and uniform. But we're always exploring new ideas. Let us know what you're thinking.
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl mb-3">
                    Can I use SKETCH's content?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our philosophy and journal content can be shared and discussed. Please credit SKETCH and link back to the original article.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Closing CTA */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-3xl text-center space-y-8">
              <p className="text-lg text-gray-700">
                Ready to explore more?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CTA href="/" variant="secondary">
                  BACK TO HOME
                </CTA>
                <CTA href="/philosophy" variant="primary">
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
