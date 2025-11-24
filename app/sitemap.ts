import type { MetadataRoute } from 'next'
import { posts } from '@/content/posts'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/blog'].map((p) => ({ url: `${baseUrl}${p || '/'}`, changeFrequency: 'weekly' as const, priority: 0.7 as const }))
  const blog = posts.map((p) => ({ url: `${baseUrl}/blog/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 as const }))
  return [...routes, ...blog]
}

