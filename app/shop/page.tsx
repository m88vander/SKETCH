'use client'

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ProductGrid } from '@/components/ProductGrid'
import { CTA } from '@/components/CTA'
import { products, getCategories } from '@/data/products'
import { useState } from 'react'

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const categories = getCategories()
  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-6">
                WEAR THE IDEA.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                SKETCH products are physical expressions of the philosophy. They aren't meant to tell you how to live. They're reminders to keep looking at the picture.
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
                All Products
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

        {/* Products Grid */}
        <Section className="bg-white">
          <Container>
            <ProductGrid products={filteredProducts} cols={3} />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  )
}
