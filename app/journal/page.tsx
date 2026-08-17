import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ArticleGrid } from '@/components/ArticleGrid'
import { CTA } from '@/components/CTA'
import { articles, getCategories } from '@/data/articles'
import { useState } from 'react'

'use client'

export const metadata = {
  title: 'Journal | SKETCH',
  description: 'Thoughts on life, work, relationships, and the practice of conscious examination.',
}

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const categories = getCategories()
  const filteredArticles = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-6">
                The Journal
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Essays and explorations on the practice of conscious examination. Thoughts on work, relationships, identity, and the ongoing process of asking: Does it fit?
              </p>
            </div>
          </Container>
        </Section>

        {/* Filters */}
        <Section className="bg-gray-50 py-8">
          <Container>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === null
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-black hover:bg-gray-50'
                }`}
              >
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-black text-white'
                      : 'bg-white text-black border border-black hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Container>
        </Section>

        {/* Articles Grid */}
        <Section className="bg-white">
          <Container>
            <ArticleGrid articles={filteredArticles} cols={3} />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
