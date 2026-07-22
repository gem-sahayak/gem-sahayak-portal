import { permanentRedirect } from 'next/navigation';
import { loadArticle } from '@/lib/content/contentLoader';
import { REGISTRY_ARTICLES } from '@/content/registry';

export async function generateStaticParams() {
  return REGISTRY_ARTICLES.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostRedirect({ params }: PageProps) {
  const { slug } = await params;
  const post = await loadArticle(slug);
  
  if (!post) {
    permanentRedirect('/knowledge');
  }

  const categorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
  permanentRedirect(`/knowledge/${categorySlug}/${slug}`);
}
