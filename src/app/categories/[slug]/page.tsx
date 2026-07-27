import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { loadCategory } from '@/lib/content/contentLoader';
import { REGISTRY_CATEGORIES } from '@/content/registry';
import { generateSeoMetadata } from '@/lib/seo/metadata';
import { buildCollectionPageSchema, buildBreadcrumbSchema } from '@/lib/seo/jsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(REGISTRY_CATEGORIES).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = loadCategory(slug);
  if (!category) return {};

  return generateSeoMetadata({
    title: `${category.name} Tutorials & Guides | SahayakAI`,
    description: category.description,
    path: `/categories/${slug}`,
    keywords: [category.name, 'public procurement India', 'GeM help']
  });
}

export default async function CategoryGuidesPage({ params }: Props) {
  const { slug } = await params;
  const category = loadCategory(slug);

  if (!category) {
    notFound();
  }

  const schemas = [
    buildCollectionPageSchema({
      name: category.name,
      description: category.description,
      url: `/categories/${slug}`
    }),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Knowledge Hub', url: '/knowledge' },
      { name: category.name, url: `/categories/${slug}` }
    ])
  ];

  return (
    <div style={{ background: '#f8fafc', padding: '60px 0 80px 0', minHeight: '80vh' }}>
      {/* Schema Injection */}
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
          <span style={{ color: '#475569' }}>{category.name}</span>
        </nav>

        {/* Header Block */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0C2E4A', marginBottom: '16px', letterSpacing: '-0.5px' }}>
            {category.name} Guide Directory
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.6' }}>
            {category.longDescription}
          </p>
        </div>

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

        {/* Article listing */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0C2E4A', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
          Guides in this Category
        </h2>

        {category.articles && category.articles.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {category.articles.map((art) => (
              <a key={art.slug} href={`/guides/${art.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} className="hover-card">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0C2E4A', marginBottom: '8px' }}>
                    {art.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '0 0 12px 0', lineHeight: '1.4' }}>
                    {art.summary}
                  </p>
                  <span style={{ color: '#0E8A8A', fontSize: '0.85rem', fontWeight: '700' }}>
                    Read Guide →
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div style={{ padding: '30px 20px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center', color: '#64748b' }}>
            No guides currently published in this category. Check back soon for updates.
          </div>
        )}

        {/* Disclaimer banner */}
        <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '16px 20px', marginTop: '32px', fontSize: '0.85rem', color: '#475569', textAlign: 'center' }}>
          <strong>Disclaimer:</strong> SahayakAI is an independent helper tool. This guide is for educational purposes. Access official resources directly on <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#0E8A8A', textDecoration: 'underline', fontWeight: '600' }}>gem.gov.in</a>.
        </div>

      </div>
    </div>
  );
}
