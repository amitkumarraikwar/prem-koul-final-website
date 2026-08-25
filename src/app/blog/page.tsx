'use client';

import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogData';
import { ScrollReveal } from '@/components/ScrollReveal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function BlogListPage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-brand-bg">
      {/* Header Banner */}
      <section className="bg-brand-primary text-slate-100 py-20 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-saffron/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="container-width text-center space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">
            Opinion Pieces & Articles / विचार-पत्र
          </span>
          <h1 className="font-hindi-alt text-4xl sm:text-5xl font-black">ब्लॉग व विचार-पत्र</h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-medium">
            संस्कृत शिक्षा, शैक्षणिक सुधार, डिजिटल मीडिया के प्रभाव और इंदौर विधानसभा क्षेत्र 5 की समस्याओं पर प्रेम चंद कौल के लेख।
          </p>
        </div>
      </section>

      {/* Blog List Grid */}
      <section className="section-padding">
        <div className="container-width max-w-4xl space-y-8">
          <div className="grid grid-cols-1 gap-6">
            {BLOG_POSTS.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 0.08}>
                <div className="card-base glassmorphism p-6 md:p-8 space-y-4 hover:scale-101 transition-all border-l-4 border-l-brand-saffron">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-brand-saffron bg-brand-saffron/10 px-3 py-1 rounded-full border border-brand-saffron/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-brand-primary/50 font-bold">{post.date}</span>
                  </div>
                  
                  <h2 className="font-hindi-alt text-2xl font-black text-brand-primary">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-brand-primary/75 leading-relaxed font-semibold">
                    {post.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-extrabold text-brand-saffron hover:underline flex items-center gap-1"
                    >
                      <span>पूरा लेख पढ़ें</span>
                      <ArrowForwardIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
