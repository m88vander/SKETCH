import React from 'react'
import { ArticleCard } from './ArticleCard'
import { Article } from '@/data/articles'

interface RelatedArticlesProps {
  articles: Article[]
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  if (articles.length === 0) return null

  return (
    <div className="border-t border-gray-300 pt-12">
      <h3 className="font-display font-bold text-2xl md:text-3xl mb-8">
        Related Articles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            excerpt={article.excerpt}
            category={article.category}
            readingTime={article.readingTime}
            date={article.date}
            href={`/journal/${article.slug}`}
          />
        ))}
      </div>
    </div>
  )
}
