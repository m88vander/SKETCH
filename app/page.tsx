import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text'
import { Grid } from '@/components/Grid'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Hero className="bg-white">
        <div className="space-y-6 md:space-y-8">
          <div className="flex justify-center">
            <img
              src="nes1k.jpg"
              alt="SKETCH"
              className="h-24 md:h-32 w-auto"
            />
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg md:text-2xl leading-relaxed font-body font-normal tracking-tight">
              <span className="block font-display font-bold text-2xl md:text-4xl mb-4">ZOOM IN.</span>
              <span className="block font-display font-bold text-2xl md:text-4xl mb-4">ZOOM OUT.</span>
              <span className="block font-display font-bold text-2xl md:text-4xl">REDRAW WHAT DOESN'T FIT.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTA href="#philosophy" variant="primary">
              EXPLORE SKETCH
            </CTA>
            <CTA href="/shop" variant="secondary">
              SHOP THE FIRST SKETCH
            </CTA>
          </div>
        </div>
      </Hero>

      {/* The Idea Section */}
      <Section id="philosophy" className="bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              YOUR LIFE IS A SKETCH.
            </h2>
            <Text variant="lead" className="text-gray-700">
              Your life isn't a finished picture. It's something you are constantly drawing.
            </Text>
            <Text className="text-gray-700">
              The people around you. The places you go. The things you do. The things you consume. The choices you make. Every detail becomes another line.
            </Text>
            <Text className="text-gray-700">
              Sometimes you zoom in and realize a line looks perfect. Then you zoom out. And realize it doesn't belong. That's okay. You have an eraser. You can redraw it.
            </Text>
            <div className="pt-4">
              <CTA href="/philosophy" variant="secondary">
                READ THE PHILOSOPHY
              </CTA>
            </div>
          </div>
        </Container>
      </Section>

      {/* Does It Fit Section */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              DOES IT FIT?
            </h2>
          </div>
          <Grid cols={2}>
            {[
              { title: 'Your Work', question: 'Is your career building the life you actually want?' },
              { title: 'Your Relationships', question: 'Do the people around you bring out the person you\'re becoming?' },
              { title: 'Your Health', question: 'Are you healthy because it fits your life, or because you\'re trying to become someone else\'s idea of healthy?' },
              { title: 'Your Habits', question: 'Do your daily routines serve the person you want to become?' },
              { title: 'Your Environment', question: 'Does your physical space reflect and support who you are?' },
              { title: 'Your Ambitions', question: 'Are you chasing what you actually want, or what you think you should want?' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 md:p-8 border border-gray-200 hover:border-black transition-colors duration-200 group cursor-pointer"
              >
                <h3 className="font-display font-bold text-xl md:text-2xl mb-4 group-hover:underline transition-all">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.question}
                </p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Journal Preview Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              THINGS WORTH THINKING ABOUT.
            </h2>
          </div>
          <Grid cols={3}>
            {[
              { title: 'Who Drew Your Life?', category: 'Philosophy', readTime: '8 min' },
              { title: 'The Life You Inherited', category: 'Relationships', readTime: '12 min' },
              { title: 'Does Success Still Fit?', category: 'Work', readTime: '10 min' },
              { title: 'Who Are You Without the Performance?', category: 'Psychology', readTime: '15 min' },
              { title: 'The People in Your Picture', category: 'Relationships', readTime: '9 min' },
              { title: 'The Line You Keep Ignoring', category: 'Life', readTime: '7 min' },
            ].map((article, index) => (
              <a
                key={index}
                href="/journal"
                className="group"
              >
                <div className="aspect-square bg-gray-300 mb-4 group-hover:opacity-80 transition-opacity"></div>
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                  {article.category} • {article.readTime}
                </p>
                <h3 className="font-display font-bold text-lg md:text-xl leading-tight group-hover:underline transition-all">
                  {article.title}
                </h3>
              </a>
            ))}
          </Grid>
          <div className="text-center mt-12">
            <CTA href="/journal" variant="secondary">
              READ THE JOURNAL
            </CTA>
          </div>
        </Container>
      </Section>

      {/* Product Preview Section */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
              WEAR THE IDEA.
            </h2>
            <Text className="max-w-2xl mx-auto text-gray-700">
              SKETCH products are physical expressions of the philosophy. They aren't meant to tell you how to live. They're reminders to keep looking at the picture.
            </Text>
          </div>
          <div className="text-center">
            <CTA href="/shop" variant="primary" size="lg">
              SHOP SKETCH
            </CTA>
          </div>
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img
                src="nes1k.jpg"
                alt="SKETCH"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-lg leading-relaxed mb-2 text-gray-700">
              One idea.
            </p>
            <p className="text-lg leading-relaxed mb-2 text-gray-700">
              One question.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              One line worth redrawing.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-black text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors"
              >
                JOIN
              </button>
            </form>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  )
}
