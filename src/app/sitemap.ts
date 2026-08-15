import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prem-koul.vercel.app'; // Production URL fallback
  
  const staticRoutes = [
    '',
    '/about',
    '/vision',
    '/compare',
    '/team',
    '/blog',
    '/gallery',
    '/contact',
    '/grievance',
    '/volunteer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
