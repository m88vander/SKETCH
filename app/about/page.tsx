import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/CTA'

export const metadata = {
  title: 'About | SKETCH',
  description: 'The story behind SKETCH. A philosophy and lifestyle brand.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-6">
                About SKETCH
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                A philosophy and lifestyle brand built on the practice of conscious examination.
              </p>
            </div>
          </Container>
        </Section>

        {/* Origin Story */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-3xl space-y-8">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6">
                  Why SKETCH Exists
                </h2>
                <p className="text-lg leading-relaxed text-gray-800 mb-6">
                  We built SKETCH because we noticed something: Most people are not living their own lives. They're living versions of lives drawn for them by other people.
                </p>
                <p className="text-lg leading-relaxed text-gray-800 mb-6">
                  Their parents drew lines. Their culture drew lines. Their society drew lines. Their social media feeds drew lines. Their jobs drew lines. Their relationships drew lines.
                </p>
                <p className="text-lg leading-relaxed text-gray-800 mb-6">
                  And somewhere in all of that, the original person got buried.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                  SKETCH exists to help people redraw their lives with intention. To examine the picture they're creating. To ask: Does this fit? And to have permission to change the answer.
                </p>
              </div>

              <div className="border-t border-gray-300 pt-8">
                <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight mb-4">
                  The Core Belief
                </h3>
                <blockquote className="text-2xl md:text-3xl font-display font-bold italic">
                  "Your life is a sketch. You are holding the pencil. The picture is never finished."
                </blockquote>
              </div>
            </div>
          </Container>
        </Section>

        {/* What We Do */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl space-y-8">
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                What We Do
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
                    We Create Frameworks
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    The SKETCH framework (Zoom In / Zoom Out / Does It Fit? / Redraw) is a simple tool for examining your life. It's not a prescription. It's a practice.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
                    We Tell Stories
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    The SKETCH Journal explores difficult questions about work, relationships, identity, and the ongoing process of becoming yourself. These are not answers. They are invitations to think.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
                    We Create Objects
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    SKETCH products are not fashion. They are reminders. Wear them as a commitment to conscious examination. Use them as tools for the practice.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Who Is This For */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-3xl space-y-8">
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                Who Is This For?
              </h2>
              <p className="text-lg leading-relaxed text-gray-800">
                SKETCH is for anyone who has ever asked: Is this actually what I want? Anyone who has realized that the life they're living doesn't match the person they want to be. Anyone who has the courage to examine the picture and the strength to redraw what doesn't fit.
              </p>
              <p className="text-lg leading-relaxed text-gray-800">
                You don't need to have it all figured out. You don't need to be starting from zero. You don't need to be in crisis. You just need to be willing to look.
              </p>
              <div className="space-y-4">
                <p className="text-base font-semibold">SKETCH is for people who:</p>
                <ul className="space-y-3 text-lg text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">•</span>
                    <span>Want to live intentionally, not by default</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">•</span>
                    <span>Are questioning inherited assumptions about success and happiness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">•</span>
                    <span>Know something doesn't fit but aren't sure what to change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">•</span>
                    <span>Are willing to examine difficult truths about themselves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">•</span>
                    <span>Understand that growth is continuous, not a destination</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Core Values */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl space-y-8">
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                What We Believe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-bold text-xl mb-3">Clarity Over Complexity</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We don't believe in overthinking. We believe in clear questions and honest answers.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-3">Practice Over Perfection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your life will never be finished. The goal is not to arrive. The goal is to keep examining.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-3">Intention Over Obligation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You get to choose which lines to keep and which to erase. Not because of guilt or duty, but because it serves the picture you want to create.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-3">Authenticity Over Performance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The only life worth living is the one that actually reflects who you are.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* How to Use SKETCH */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-3xl space-y-8">
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                How to Use SKETCH
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">Step 1</p>
                  <h3 className="font-display font-bold text-2xl mb-3">Read the Philosophy</h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    Start with our Philosophy page to understand the framework. Zoom In / Zoom Out / Does It Fit? / Redraw.
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">Step 2</p>
                  <h3 className="font-display font-bold text-2xl mb-3">Explore the Journal</h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    Read articles that resonate with you. The journal explores work, relationships, identity, and the practice of conscious examination.
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">Step 3</p>
                  <h3 className="font-display font-bold text-2xl mb-3">Ask the Question</h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    Take a specific area of your life and ask: Does this fit? Zoom in on the details. Zoom out and see the bigger picture.
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">Step 4</p>
                  <h3 className="font-display font-bold text-2xl mb-3">Redraw What Doesn't Work</h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    If something doesn't fit, you have an eraser. You can change it. Start small. Make one line different. See what shifts.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Closing */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl text-center space-y-8">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                SKETCH is not a brand you consume. It's a practice you inhabit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CTA href="/philosophy" variant="primary">
                  READ THE PHILOSOPHY
                </CTA>
                <CTA href="/contact" variant="secondary">
                  GET IN TOUCH
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
