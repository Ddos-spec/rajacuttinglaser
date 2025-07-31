// SEO utilities untuk optimasi meta tags dan structured data - Optimized for Jabodetabek
import { SITE_CONFIG } from './constants.js';

interface MetaTagOptions {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'blog';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  url: string;
  type: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    image: string;
    type: string;
    siteName: string;
    locale: string;
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
}

/**
 * Generate meta tags untuk SEO
 * @param options - Meta tag options
 * @returns Complete meta tags object
 */
export function generateMetaTags({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author
}: MetaTagOptions = {}): MetaTags {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const fullDescription = description || SITE_CONFIG.description;
  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;
  const fullImage = image ? `${SITE_CONFIG.url}${image}` : `${SITE_CONFIG.url}/logo.webp`;
  
  // Default keywords fallback
  const defaultKeywords = 'laser cutting, cnc router, laser fiber, laser co2, jabodetabek';
  const siteKeywords = SITE_CONFIG.keywords || defaultKeywords;
  const fullKeywords = keywords ? `${keywords}, ${siteKeywords}` : siteKeywords;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    url: fullUrl,
    type: type,
    canonical: fullUrl,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      image: fullImage,
      type: type,
      siteName: SITE_CONFIG.name,
      locale: 'id_ID',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { author })
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      image: fullImage
    }
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate FAQ Schema markup for structured data
 * @param faqItems Array of FAQ items 
 */
export function generateFAQSchema(faqItems: FAQItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

interface Review {
  name: string;
  rating: number;
  content: string;
  company?: string;
}

/**
 * Generate Review Schema markup for structured data
 * @param reviews Array of review objects
 */
export function generateReviewSchema(reviews: Review[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization", 
    "name": SITE_CONFIG.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": calculateAverageRating(reviews),
      "reviewCount": reviews.length
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      },
      "reviewBody": review.content,
      ...(review.company && {
        "publisher": {
          "@type": "Organization",
          "name": review.company
        }
      })
    }))
  };
}

function calculateAverageRating(reviews: Review[]): number {
  if (!reviews || reviews.length === 0) return 5;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Number((total / reviews.length).toFixed(1));
}
