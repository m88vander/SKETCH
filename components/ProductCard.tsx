import React from 'react'

interface ProductCardProps {
  name: string
  price: number
  category: string
  href: string
  image?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  category,
  href,
  image,
}) => {
  return (
    <a href={href} className="group block">
      {image ? (
        <div className="aspect-square bg-gray-300 mb-4 group-hover:opacity-80 transition-opacity">
          {/* Image */}
        </div>
      ) : (
        <div className="aspect-square bg-gray-200 mb-4 group-hover:opacity-80 transition-opacity flex items-center justify-center">
          <span className="text-gray-400 text-sm">Product Image</span>
        </div>
      )}
      <p className="text-xs uppercase tracking-wide text-gray-600 mb-2">
        {category}
      </p>
      <h3 className="font-display font-bold text-lg md:text-xl leading-tight mb-2 group-hover:underline transition-all">
        {name}
      </h3>
      <p className="text-base md:text-lg font-semibold text-black">${price}</p>
    </a>
  )
}
