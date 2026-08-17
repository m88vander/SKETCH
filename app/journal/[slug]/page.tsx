'use client'

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ArticleHero } from '@/components/ArticleHero'
import { RelatedArticles } from '@/components/RelatedArticles'
import { CTA } from '@/components/CTA'
import { getArticleBySlug, articles } from '@/data/articles'
import { notFound } from 'next/navigation'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticleIds = article.relatedArticles || []
  const relatedArticles = articles.filter((a) =>
    relatedArticleIds.includes(a.id)
  )

  return (
    <>
      <Navigation />

      <main>
        {/* Article Header */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <ArticleHero
                title={article.title}
                category={article.category}
                readingTime={article.readingTime}
                author={article.author}
                date={article.date}
              />
            </div>
          </Container>
        </Section>

        {/* Article Content */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-3xl prose prose-lg">
              <div className="text-lg leading-relaxed text-gray-800 space-y-6 whitespace-pre-wrap">
                {article.content}
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <Section className="bg-white">
            <Container>
              <div className="max-w-3xl">
                <RelatedArticles articles={relatedArticles} />
              </div>
            </Container>
          </Section>
        )}

        {/* CTA */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-3xl text-center space-y-8">
              <p className="text-lg text-gray-700">
                Ready to explore more of the sketch?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CTA href="/journal" variant="secondary">
                  BACK TO JOURNAL
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
