import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dongwook.kim/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    }
  ]
}
