import React from 'react'
import { ArticleCard } from './ArticleCard'
import { Article } from '@/data/articles'

interface ArticleGridProps {
  articles: Article[]
  cols?: 1 | 2 | 3
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles: articleList,
  cols = 3,
}) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <div className={`grid ${colClasses[cols]} gap-8`}>
      {articleList.map((article) => (
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
  )
}
