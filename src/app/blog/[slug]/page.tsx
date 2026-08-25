import { BLOG_POSTS } from '@/data/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex-1 w-full bg-brand-bg pb-16">
      {/* Blog Details Header */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-16 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="container-width max-w-3xl space-y-6 relative z-10 text-left">
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span>वापस ब्लॉग पर जाएं</span>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                {post.category}
              </span>
              <span className="text-xs text-slate-300 font-bold">{post.date}</span>
            </div>
            <h1 className="font-hindi-alt text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Details Body */}
      <section className="section-padding py-12">
        <div className="container-width max-w-3xl">
          <article className="prose dark:prose-invert max-w-none text-brand-primary/90 font-medium">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="space-y-6 text-sm sm:text-base leading-relaxed"
            />
          </article>

          <div className="mt-12 pt-8 border-t border-brand-border/60 flex items-center justify-between">
            <Link
              href="/blog"
              className="btn-secondary text-xs font-extrabold flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              <span>वापस ब्लॉग सूची</span>
            </Link>
            
            <Link
              href="/contact"
              className="btn-primary text-xs font-extrabold"
            >
              <span>विचार साझा करें / संपर्क</span>
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.coverImage,
            "author": {
              "@type": "Person",
              "name": "Prem Chand Koul"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Prem Koul Film Production",
              "logo": {
                "@type": "ImageObject",
                "url": "https://media.licdn.com/dms/image/v2/D5603AQG0Me2IFI_vXQ/profile-displayphoto-scale_400_400/B56ZmaUFiRI8Ag-/0/1759230583447?e=1787788800&v=beta&t=8o9F-2i_vNFM1xf4_rqz0SX5dtc91XmX8mtGKm-167Q"
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://prem-koul.vercel.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://prem-koul.vercel.app/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://prem-koul.vercel.app/blog/${post.slug}`
              }
            ]
          })
        }}
      />
    </div>
  );
}
