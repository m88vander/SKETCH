import React from 'react'

interface ArticleHeroProps {
  title: string
  category: string
  readingTime: number
  author: string
  date: string
}

export const ArticleHero: React.FC<ArticleHeroProps> = ({
  title,
  category,
  readingTime,
  author,
  date,
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="space-y-6 mb-12">
      <div>
        <p className="text-sm uppercase tracking-wider text-gray-600 mb-3">
          {category} • {readingTime} min read
        </p>
        <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
          {title}
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <span className="text-gray-700 font-medium">{author}</span>
        <span className="text-gray-500">•</span>
        <time className="text-gray-600">{formattedDate}</time>
      </div>
      <div className="w-full h-96 bg-gray-300">{/* Article image placeholder */}</div>
    </div>
  )
}
