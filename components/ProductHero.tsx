import React from 'react'

interface ProductHeroProps {
  name: string
  price: number
  category: string
}

export const ProductHero: React.FC<ProductHeroProps> = ({
  name,
  price,
  category,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-wider text-gray-600 mb-3">
          {category}
        </p>
        <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
          {name}
        </h1>
      </div>
      <div className="text-3xl md:text-4xl font-semibold text-black">
        ${price}
      </div>
    </div>
  )
}
