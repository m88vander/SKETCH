import React from 'react'

interface ArticleCardProps {
  title: string
  excerpt?: string
  category: string
  readingTime: number
  date: string
  href: string
  image?: string
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  category,
  readingTime,
  date,
  href,
  image,
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <a href={href} className="group block">
      {image && (
        <div className="aspect-video bg-gray-300 mb-4 group-hover:opacity-80 transition-opacity">
          {/* Image placeholder */}
        </div>
      )}
      <p className="text-xs uppercase tracking-wide text-gray-600 mb-2">
        {category} • {readingTime} min
      </p>
      <h3 className="font-display font-bold text-lg md:text-xl leading-tight mb-2 group-hover:underline transition-all">
        {title}
      </h3>
      {excerpt && (
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
          {excerpt}
        </p>
      )}
      <p className="text-xs text-gray-500">{formattedDate}</p>
    </a>
  )
}
