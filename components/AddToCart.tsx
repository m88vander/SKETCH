'use client'

import React, { useState } from 'react'

interface AddToCartProps {
  productName: string
  size?: string
  quantity?: number
}

export const AddToCart: React.FC<AddToCartProps> = ({
  productName,
  size,
  quantity = 1,
}) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    // TODO: Integrate with Shopify or cart system
    console.log(`Added ${quantity} ${productName}${size ? ` in size ${size}` : ''} to cart`)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`w-full px-6 py-4 text-base font-medium transition-all duration-300 ${
        isAdded
          ? 'bg-green-600 text-white'
          : 'bg-black text-white hover:bg-gray-900'
      }`}
    >
      {isAdded ? '✓ Added to Cart' : 'ADD TO CART'}
    </button>
  )
}
