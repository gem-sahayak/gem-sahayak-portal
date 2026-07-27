import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { loadFAQ } from '@/lib/content/contentLoader';
import { REGISTRY_FAQS, REGISTRY_ARTICLES } from '@/content/registry';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import { buildFAQSchema, buildBreadcrumbSchema } from '@/lib/seo/jsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(REGISTRY_FAQS).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const faq = loadFAQ(slug);
  if (!faq) return {};

  return generateSeoMetadata({
    title: `${faq.question} — GeM Procurement FAQ | SahayakAI`,
    description: faq.answer.slice(0, 155),
    path: `/faq/${slug}`,
    keywords: [faq.question, 'gem faq', 'procurement compliance Q&A']
  });
}

export default async function FAQArticlePage({ params }: Props) {
  const { slug } = await params;
  const faq = loadFAQ(slug);

  if (!faq) {
    notFound();
  }

  const schemas = [
    buildFAQSchema([{ q: faq.question, a: faq.answer }]),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Knowledge Hub', url: '/knowledge' },
      { name: 'FAQ', url: `/faq/${slug}` }
    ])
  ];

  return (
    <div style={{ background: '#f8fafc', padding: '60px 0 80px 0', minHeight: '80vh' }}>
      {/* Schema Graph Injection */}
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Navigation Breadcrumb */}
        <nav style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '24px' }}>
          <a href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</a>
          <span style={{ margin: '0 8px' }}>&gt;</span>
          <a href="/knowledge" style={{ color: '#64748b', textDecoration: 'none' }}>Knowledge Hub</a>
          <span style={{ margin: '0 8px' }}>&gt;</span>
          <span style={{ color: '#475569' }}>Q&A</span>
        </nav>

        {/* 🇮🇳 Trust Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(14, 138, 138, 0.03) 0%, rgba(13, 33, 55, 0.05) 100%)', 
          border: '1px solid rgba(226, 232, 240, 0.8)', 
          borderRadius: '12px', 
          padding: '16px 24px', 
          marginBottom: '32px', 
          textAlign: 'center' 
        }}>
          <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>🇮🇳</span>
          <strong style={{ color: '#0C2E4A' }}>Proudly Supporting Indian Businesses:</strong>
          <span style={{ color: '#475569', marginLeft: '8px' }}>
            AI-Powered &bull; Compliance-First &bull; Independent Technology Platform
          </span>
        </div>

        {/* Content Block */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0C2E4A', marginBottom: '24px', lineHeight: '1.3' }}>
            {faq.question}
          </h1>
          <div style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', whiteSpace: 'pre-line', marginBottom: '32px' }}>
            {faq.answer}
          </div>

          {/* Related Articles Loop */}
          {faq.relatedArticles && faq.relatedArticles.length > 0 && (
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0C2E4A', marginBottom: '16px' }}>
                Related Compliance Guides
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {faq.relatedArticles.map(artSlug => {
                  const foundArt = REGISTRY_ARTICLES.find(a => a.slug === artSlug);
                  const catSlug = foundArt ? foundArt.category.toLowerCase().replace(/\s+/g, '-') : 'gem-registration';
                  return (
                    <a key={artSlug} href={`/knowledge/${catSlug}/${artSlug}`} style={{ textDecoration: 'none', color: '#0E8A8A', fontWeight: '600', fontSize: '0.95rem' }}>
                      📖 Read: How to resolve issues under {artSlug.replace(/-/g, ' ')} →
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Compliance Non-Affiliation Disclaimer */}
        <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '16px 20px', marginTop: '32px', fontSize: '0.85rem', color: '#475569', textAlign: 'center' }}>
          <strong>Disclaimer:</strong> SahayakAI is an independent helper tool. This guide is for educational purposes. Access official resources directly on <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#0E8A8A', textDecoration: 'underline', fontWeight: '600' }}>gem.gov.in</a>.
        </div>

      </div>
    </div>
  );
}
