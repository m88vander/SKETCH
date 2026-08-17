# SKETCH - A Philosophy and Lifestyle Brand

> Your life is a sketch. You are holding the pencil. The picture is never finished.

A Next.js web application for SKETCH—a philosophy and lifestyle brand focused on conscious examination of life, intentional living, and personal growth.

## 🎨 Features

- **Philosophy Page** — Complete editorial philosophy with the SKETCH framework
- **Journal System** — 6 articles covering life, work, relationships, and personal growth
- **Shop System** — 3 SKETCH products (Tee, Hat, Hoodie) with detailed product pages
- **About & Contact** — Brand story and contact form with FAQ
- **Responsive Design** — Mobile-first, fully responsive across all devices
- **SEO Optimized** — Sitemap, robots.txt, metadata, and structured data
- **Performance Ready** — Optimized images, compression, and Lighthouse-optimized CSS
- **Accessible** — WCAG 2.1 AA compliant, semantic HTML, ARIA labels

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn installed
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/m88vander/SKETCH.git
cd SKETCH

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
SKETCH/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── philosophy/        # Philosophy page
│   ├── journal/           # Journal index and articles
│   ├── shop/              # Shop index and products
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # Robots.txt
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── ArticleCard.tsx    # Article preview
│   ├── ProductCard.tsx    # Product preview
│   ├── ContactForm.tsx    # Contact form
│   └── ...
├── data/                  # Static data
│   ├── articles.ts        # Journal articles
│   └── products.ts        # Shop products
├── styles/                # Global CSS
│   └── globals.css        # Tailwind CSS
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎯 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, philosophy intro, articles, products |
| `/philosophy` | Complete SKETCH philosophy page |
| `/journal` | Journal index with all articles and category filter |
| `/journal/[slug]` | Individual article pages |
| `/shop` | Shop index with all products and category filter |
| `/shop/[slug]` | Individual product pages |
| `/about` | Brand story, mission, and values |
| `/contact` | Contact form with FAQ |
| `/404` | Custom 404 not found page |

## 🛠️ Development

### Running the Development Server

```bash
npm run dev
```

The app will start at `http://localhost:3000` with hot reload enabled.

### Building for Production

```bash
npm run build
npm run start
```

## 📝 Customization

### Edit Articles
Edit or add articles in `data/articles.ts`:

```typescript
export const articles: Article[] = [
  {
    id: '1',
    slug: 'article-slug',
    title: 'Article Title',
    excerpt: 'Brief excerpt',
    category: 'LIFE',
    readingTime: 10,
    author: 'SKETCH',
    date: '2024-01-01',
    content: 'Full article content here...',
  },
  // Add more articles
]
```

### Edit Products
Edit or add products in `data/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: '1',
    slug: 'product-slug',
    name: 'Product Name',
    price: 45,
    category: 'APPAREL',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    // ... more details
  },
  // Add more products
]
```

### Change Colors & Fonts
Edit `tailwind.config.js` to customize the design system:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
      },
      fontFamily: {
        display: ['Your Font', 'sans-serif'],
        body: ['Your Font', 'sans-serif'],
      },
    },
  },
}
```

## 🔗 Integration Setup

### Contact Form
To enable the contact form, integrate with an email service:

**Option 1: Formspree (No Backend)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your form ID
3. Update `components/ContactForm.tsx` to post to Formspree

**Option 2: Nodemailer (Self-Hosted)**
1. Create an API route at `app/api/contact/route.ts`
2. Set up environment variables for email credentials
3. Configure Nodemailer in the API route

**Option 3: SendGrid API**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key
3. Add to `.env.local` and integrate in API route

### Shop / E-commerce
To enable the cart and checkout:

1. **Shopify Integration**:
   - Sign up for Shopify
   - Set `NEXT_PUBLIC_SHOPIFY_STORE_ID` and `NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN` in `.env.local`
   - Use Shopify's Storefront API in the cart component

2. **Alternative**: Integrate with Stripe, PayPal, or another payment processor

### Analytics
Add Google Analytics or other tracking:

1. Set `NEXT_PUBLIC_GA_ID` in `.env.local`
2. Add tracking script to `app/layout.tsx`

## 📦 Build & Deploy

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

**Netlify**:
```bash
npm run build
# Deploy the .next folder
```

**Docker**:
```bash
docker build -t sketch .
docker run -p 3000:3000 sketch
```

**Environment Variables**:
Set these in your hosting platform's environment settings:
- `NEXT_PUBLIC_SITE_URL` — Your site's public URL
- Email service credentials
- Analytics IDs
- Payment processor credentials

## 🎨 Design System

**Typography**:
- Display Font: Bold, uppercase, feature headlines
- Body Font: Regular, readable, article text
- Sizing: Mobile-first responsive scaling

**Colors**:
- Primary: Black (#000000)
- Secondary: White (#FFFFFF)
- Neutral: Gray scale (#E5E5E5 to #666666)

**Spacing**:
- Base unit: 4px
- Sections: 80px (mobile) / 120px (desktop)
- Components: 16px, 24px, 32px, 48px

**Component Patterns**:
- Cards with hover states
- Sticky navigation
- Full-width sections
- Center-aligned containers
- Minimal, editorial aesthetic

## 🧪 Testing

Run tests (if configured):

```bash
npm run test
```

Run linting:

```bash
npm run lint
```

## 📊 Performance

Optimization features:
- ✅ Image optimization with Next.js Image
- ✅ CSS compression via Tailwind
- ✅ Code splitting and lazy loading
- ✅ Static site generation (SSG) where possible
- ✅ Server-side rendering (SSR) for dynamic content
- ✅ Security headers configured

Check Lighthouse score:
```bash
npm run build
npm run start
# Open DevTools → Lighthouse and audit
```

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Color contrast ratios: AA compliant (4.5:1 for text)
- Keyboard navigation support
- Focus states on all interactive elements
- Mobile-friendly touch targets (min 44x44px)

## 📝 License

Proprietary © 2024 SKETCH. All rights reserved.

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💬 Support

For questions or issues:
- Email: hello@sketch.com
- Visit: https://sketch.com/contact

---

**SKETCH** — Keep sketching.
