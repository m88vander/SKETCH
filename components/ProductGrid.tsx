import React from 'react'
import { ProductCard } from './ProductCard'
import { Product } from '@/data/products'

interface ProductGridProps {
  products: Product[]
  cols?: 1 | 2 | 3
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products: productList,
  cols = 3,
}) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <div className={`grid ${colClasses[cols]} gap-8`}>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          href={`/shop/${product.slug}`}
        />
      ))}
    </div>
  )
}
