import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sketch.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/philosophy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journal/who-drew-your-life`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/journal/does-it-fit`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/journal/the-life-you-inherited`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/journal/the-people-in-your-picture`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/journal/when-success-stops-fitting`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/journal/the-line-you-keep-ignoring`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shop/sketch-tee`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shop/sketch-hat`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shop/sketch-hoodie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
