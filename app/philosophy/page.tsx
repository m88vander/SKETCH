import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { CTA } from '@/components/CTA'
import { SKETCHLogo } from '@/components/SKETCHLogo'

export const metadata = {
  title: 'Philosophy | SKETCH',
  description: 'The SKETCH philosophy. Your life is a sketch. You are holding the pencil. Keep sketching.',
}

export default function PhilosophyPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display font-bold text-6xl md:text-8xl leading-tight mb-8">
                YOUR LIFE IS A <SKETCHLogo />.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Not a finished picture. Not something to be perfected and framed. A sketch.
              </p>
            </div>
          </Container>
        </Section>

        {/* Philosophy Content */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-3xl mx-auto space-y-8 md:space-y-12 text-lg leading-relaxed">
              
              {/* Intro */}
              <div className="space-y-6">
                <p className="text-gray-800">
                  Imagine taking your entire existence and drawing it out.
                </p>
                <p className="text-gray-800">
                  Your work. Your relationships. Your routines. Your hobbies. Your health. Your environment. Your habits. Your possessions. Your conversations. Your friends. Your family. Your free[...]
                </p>
                <p className="text-gray-800">
                  Together, these become the picture of your life.
                </p>
              </div>

              {/* The Core Truth */}
              <blockquote className="border-l-4 border-black pl-8 py-4 text-2xl md:text-3xl font-display font-bold italic">
                "But the picture is never finished. It is a sketch."
              </blockquote>

              {/* Zoom In / Zoom Out */}
              <div className="space-y-6">
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">ZOOM IN AND ZOOM OUT</h2>
                <p className="text-gray-800">
                  We constantly move between two perspectives.
                </p>
                <p className="text-gray-800">
                  Sometimes we zoom in on the details. We examine a single line. A choice. A habit. A relationship. When we zoom in, that detail can look perfect by itself. The line is clean. The [...]
                </p>
                <p className="text-gray-800">
                  But then we zoom out. We see the entire picture. We ask: Does this detail belong in the larger composition? Does this line fit with all the other lines? Does this choice align wi[...]
                </p>
                <p className="text-gray-800">
                  Sometimes, when we zoom out, we realize that a line that looked perfect by itself doesn't fit the whole picture.
                </p>
              </div>

              {/* The Problem */}
              <div className="space-y-6">
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">WHAT MOST PEOPLE DO</h2>
                <p className="text-gray-800">
                  Most people are trapped at one zoom level.
                </p>
                <p className="text-gray-800">
                  Some people zoom in so far they can never see the whole picture. They obsess over individual details. A specific task. A single relationship. They lose sight of whether these det[...]
                </p>
                <p className="text-gray-800">
                  Other people zoom out so far they never examine anything carefully. They follow the default path. They adopt inherited assumptions. They don't question whether the big picture th[...]
                </p>
                <p className="text-gray-800">
                  The skill is learning to move fluidly between the zoom levels. To zoom in. To zoom out. To ask constantly: Does this still fit?
                </p>
              </div>

              {/* The Question */}
              <blockquote className="bg-white border border-black p-8 md:p-12">
                <p className="text-2xl md:text-3xl font-display font-bold mb-4">DOES IT FIT?</p>
                <p className="text-lg text-gray-800">
                  Not: "Is this objectively right?"
                </p>
                <p className="text-lg text-gray-800 mb-6">
                  Not: "Does society approve?"
                </p>
                <p className="text-lg text-gray-800 mb-6">
                  Not: "Does everyone else do it?"
                </p>
                <p className="text-lg text-gray-800 font-semibold">
                  But: "Does this fit the life I'm trying to create?"
                </p>
              </blockquote>

              {/* The Eraser */}
              <div className="space-y-6">
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">YOU HAVE AN ERASER</h2>
                <p className="text-gray-800">
                  Sometimes a line that once worked no longer works. Sometimes we need to erase something. Sometimes we need to redraw it. Sometimes we need to completely change the composition.
                </p>
                <p className="text-gray-800">
                  The world around us is constantly changing. Our bodies change. Our values change. Our relationships change. Our work changes. Our circumstances change.
                </p>
                <p className="text-gray-800">
                  So our relationship with it must change too.
                </p>
                <p className="text-gray-800">
                  This is not failure. This is not indecision. This is not weakness.
                </p>
                <p className="text-gray-800">
                  This is the ongoing process of consciously examining the picture and asking: Does this still fit?
                </p>
              </div>

              {/* The Pencil */}
              <div className="space-y-6">
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">THE PENCIL IN YOUR HAND</h2>
                <p className="text-gray-800">
                  Your soul is the thing holding the pencil.
                </p>
                <p className="text-gray-800">
                  You make the marks. You make the choices. You make the decisions. Every decision is another line. Every line is an expression of intention.
                </p>
                <p className="text-gray-800">
                  You cannot control everything that happens in the world around you. The economy. Other people's actions. Chance. Tragedy. Opportunity. You cannot control the paper you're drawin[...]
                </p>
                <p className="text-gray-800">
                  But you can continually examine the marks you're making.
                </p>
                <p className="text-gray-800">
                  You can ask if they fit the picture you're trying to create.
                </p>
                <p className="text-gray-800">
                  You can redraw what doesn't work.
                </p>
              </div>

              {/* The Continuous Process */}
              <div className="space-y-6">
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">THE PICTURE IS NEVER FINISHED</h2>
                <p className="text-gray-800">
                  You are not trying to arrive at some final version of yourself. You are not trying to create the perfect life and then maintain it forever.
                </p>
                <p className="text-gray-800">
                  The person you are today is not necessarily the person you'll be tomorrow.
                </p>
                <p className="text-gray-800">
                  Your values will evolve. Your priorities will shift. Your understanding of what matters will deepen. Your capacity will grow. Your compassion will expand. Your wounds will heal.[...]
                </p>
                <p className="text-gray-800">
                  All of this is normal. All of this is expected. All of this is the sketch.
                </p>
              </div>

              {/* The Framework */}
              <div className="space-y-6 bg-white border border-black p-8 md:p-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">THE SKETCH FRAMEWORK</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-display font-bold text-xl mb-2">ZOOM IN</p>
                    <p className="text-gray-800">Examine the small details of your life.</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl mb-2">ZOOM OUT</p>
                    <p className="text-gray-800">Look at the entire picture.</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl mb-2">ASK IF IT FITS</p>
                    <p className="text-gray-800">Does the detail actually belong within the larger life?</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl mb-2">REDRAW</p>
                    <p className="text-gray-800">Change what doesn't work.</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl mb-2">KEEP SKETCHING</p>
                    <p className="text-gray-800">Your life is never finished. Keep examining. Keep adjusting. Keep creating.</p>
                  </div>
                </div>
              </div>

              {/* Closing */}
              <div className="space-y-6 pt-8">
                <p className="text-gray-800">
                  SKETCH is not here to tell you how to live.
                </p>
                <p className="text-gray-800">
                  We are here to encourage conscious examination.
                </p>
                <p className="text-gray-800">
                  We are here to support the quiet but profound practice of looking at your life and asking: Does this fit?
                </p>
                <p className="text-gray-800">
                  We are here to remind you that you are the one holding the pencil.
                </p>
              </div>

              {/* Final Statement */}
              <div className="border-t-2 border-black pt-12 text-center">
                <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight text-black">
                  KEEP SKETCHING.
                </h2>
              </div>

            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <p className="text-lg text-gray-700">
                Ready to examine your picture?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CTA href="/" variant="secondary">
                  BACK TO HOME
                </CTA>
                <CTA href="/journal" variant="primary">
                  READ JOURNAL ARTICLES
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