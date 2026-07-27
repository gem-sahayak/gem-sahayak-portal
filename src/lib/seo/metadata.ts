/**
 * Metadata Engine
 * Path: /src/lib/seo/metadata.ts
 * Description: Dynamic Metadata Generator mapping title, description, canonical, robots, OG, Twitter, and keywords.
 */

import { Metadata } from 'next';

export interface SeoMetadataProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  keywords?: string | string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
}

const DEFAULT_KEYWORDS = [
  'GeM portal helper',
  'Government e-Marketplace assistant',
  'GeM bidding compliance',
  'Udyam registration error check',
  'MSME public procurement India',
  'L1 margin calculator GeM'
];

/**
 * Programmatically compiles Next.js Metadata objects to ensure strict canonical consistency and search compliance.
 */
export function generateSeoMetadata(props: SeoMetadataProps): Metadata {
  const baseUrl = 'https://sahayakai.co.in';
  
  // Normalize canonical paths by trimming query params and trailing slashes
  const cleanPath = props.path.split('?')[0].replace(/\/+$/, '');
  const canonicalUrl = `${baseUrl}${cleanPath === '' ? '' : cleanPath}`;

  const formattedKeywords = Array.isArray(props.keywords)
    ? [...props.keywords, ...DEFAULT_KEYWORDS]
    : props.keywords
      ? [props.keywords, ...DEFAULT_KEYWORDS]
      : DEFAULT_KEYWORDS;

  const robotsConfig: Metadata['robots'] = props.noIndex
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
        }
      }
    : {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        }
      };

  return {
    title: props.title,
    description: props.description,
    keywords: formattedKeywords.join(', '),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: robotsConfig,
    openGraph: {
      title: props.title,
      description: props.description,
      url: canonicalUrl,
      siteName: 'SahayakAI',
      locale: 'en_IN',
      type: props.ogType || 'website',
      images: [
        {
          url: props.ogImage || '/assets/logo_sahayak_ai.png',
          width: 800,
          height: 600,
          alt: props.title,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: props.title,
      description: props.description,
      images: [props.ogImage || '/assets/logo_sahayak_ai.png'],
      creator: '@sahayakai',
    }
  };
}
