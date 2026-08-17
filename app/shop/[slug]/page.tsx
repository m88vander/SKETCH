'use client'

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ProductHero } from '@/components/ProductHero'
import { SizeSelector } from '@/components/SizeSelector'
import { AddToCart } from '@/components/AddToCart'
import { CTA } from '@/components/CTA'
import { getProductBySlug, products } from '@/data/products'
import { useState } from 'react'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes[0])
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    notFound()
  }

  const relatedProductIds = product.relatedProducts || []
  const relatedProducts = products.filter((p) =>
    relatedProductIds.includes(p.id)
  )

  return (
    <>
      <Navigation />

      <main>
        {/* Product Hero */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image */}
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>

              {/* Product Details */}
              <div className="space-y-8">
                <ProductHero
                  name={product.name}
                  price={product.price}
                  category={product.category}
                />

                {/* Size Selector */}
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onSizeChange={setSelectedSize}
                />

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium mb-3">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 border border-black hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="text-lg font-medium w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 border border-black hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <AddToCart
                  productName={product.name}
                  size={selectedSize}
                  quantity={quantity}
                />

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Philosophy */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                The Philosophy
              </h2>
              <div className="text-lg leading-relaxed text-gray-800 space-y-6 whitespace-pre-wrap">
                {product.philosophy}
              </div>
            </div>
          </Container>
        </Section>

        {/* Materials & Care */}
        <Section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="font-display font-bold text-xl mb-4">Materials</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.materials}
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-4">Care</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.care}
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-4">Shipping</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.shipping}
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <Section className="bg-gray-50">
            <Container>
              <div className="space-y-8">
                <h2 className="font-display font-bold text-3xl md:text-4xl">
                  More from SKETCH
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedProducts.map((relatedProduct) => (
                    <a
                      key={relatedProduct.id}
                      href={`/shop/${relatedProduct.slug}`}
                      className="group block"
                    >
                      <div className="aspect-square bg-gray-300 mb-4 group-hover:opacity-80 transition-opacity"></div>
                      <h3 className="font-display font-bold text-lg leading-tight mb-2 group-hover:underline">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-base font-semibold">${relatedProduct.price}</p>
                    </a>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        )}

        {/* CTA */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl text-center space-y-8">
              <p className="text-lg text-gray-700">
                Ready to explore the philosophy?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CTA href="/shop" variant="secondary">
                  BACK TO SHOP
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
