export interface Product {
  id: string
  slug: string
  name: string
  price: number
  category: 'APPAREL' | 'ACCESSORIES'
  sizes: string[]
  description: string
  philosophy: string
  materials: string
  care: string
  shipping: string
  image?: string
  relatedProducts?: string[]
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'sketch-tee',
    name: 'SKETCH Tee',
    price: 45,
    category: 'APPAREL',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'The foundational tee. Minimal design. Maximum intention.',
    philosophy: `The SKETCH Tee is not a graphic. It is a question.

Worn as a reminder to examine the picture. To zoom in. To zoom out. To ask if the line still fits.

The shirt itself is simple. We believe in simplicity. Not as aesthetics, but as practice. Fewer choices means more clarity. Less noise means you can hear yourself think.

The only visual is the word SKETCH, small and understated on the chest. Not a logo to broadcast. A note to yourself.

When you wear this, you are not advertising a brand. You are carrying a practice. A way of thinking. A commitment to conscious examination.

This is the first SKETCH. The foundational piece. Everything else begins here.`,
    materials: '100% organic cotton, pre-shrunk, ring-spun thread for durability and softness',
    care: 'Wash cold, dry flat or on low heat. This shirt is designed to age beautifully. Small imperfections are part of the design.',
    shipping: 'Ships within 3-5 business days. Standard shipping included.',
    relatedProducts: ['2', '3'],
  },
  {
    id: '2',
    slug: 'sketch-hat',
    name: 'SKETCH Hat',
    price: 35,
    category: 'ACCESSORIES',
    sizes: ['One Size'],
    description: 'A simple hat. Made to be worn.',
    philosophy: `The SKETCH Hat is made for clarity.

It sits at the boundary between you and the world. Between your internal picture and the external distractions.

A hat is not just an accessory. It is a boundary. It is a moment of pause. Something changes when you put on a hat. The world feels a little quieter. Your attention shifts inward.

We designed this hat to facilitate that pause. To create a small moment of separation. To help you zoom out and see the bigger picture.

The hat is simple. No logos. No statements. Just the practice.

Wear it when you need to think. When you need to examine. When you need to ask: Does this still fit?

The world will keep moving. But you will have this small moment of clarity. That is what the hat is for.`,
    materials: '100% organic cotton twill, adjustable strap, unstructured design',
    care: 'Spot clean or hand wash in cool water. Air dry. The hat will mold to your head and improve with wear.',
    shipping: 'Ships within 3-5 business days. Standard shipping included.',
    relatedProducts: ['1', '3'],
  },
  {
    id: '3',
    slug: 'sketch-hoodie',
    name: 'SKETCH Hoodie',
    price: 85,
    category: 'APPAREL',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Comfort as philosophy. A hoodie for the practice.',
    philosophy: `The SKETCH Hoodie is made for long thinking.

It is oversized and comfortable because the best thinking happens when you are not aware of your body. When you are not distracted by fit or restriction. When you can simply exist and think.

The hoodie is a space. It is a pause. It is a moment where you can step back from the performance and just be.

We all live in a world that demands constant presentation. Constant performance. Constant visibility.

The hoodie is a small rebellion against that. It is permission to be less visible. To take up less space. To think without being watched.

When you wear the SKETCH Hoodie, you are giving yourself permission to zoom out. To step back. To examine.

Your life is a sketch. Sometimes you need a quiet space to look at it. This hoodie is that space.

It is made for the long conversations. The difficult thinking. The uncomfortable questions. The moments when you ask: Does this still fit? And you don't yet know the answer.`,
    materials: '80% organic cotton / 20% polyester blend, heavyweight fabric, kangaroo pocket, drawstring hood',
    care: 'Wash inside out in cold water with like colors. Dry on medium heat or lay flat. The hoodie will soften with each wash.',
    shipping: 'Ships within 3-5 business days. Standard shipping included.',
    relatedProducts: ['1', '2'],
  },
]

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug)
}

export const getProductsByCategory = (
  category: Product['category']
): Product[] => {
  return products.filter((product) => product.category === category)
}

export const getCategories = (): Array<Product['category']> => {
  const categories = new Set(products.map((product) => product.category))
  return Array.from(categories).sort()
}
