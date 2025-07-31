// SEO utilities untuk optimasi meta tags dan structured data - Optimized for Jabodetabek
import { SITE_CONFIG } from './constants.js';

/**
 * Generate meta tags untuk SEO
 * @param {Object} options - Meta tag options
 * @returns {Object} Complete meta tags object
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
} = {}) {
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
      image: fullImage,
      site: '@lasercutpro',
      creator: '@lasercutpro'
    },
    jsonLd: generateJsonLd({ title: fullTitle, description: fullDescription, url: fullUrl, image: fullImage, type })
  };
}

/**
 * Generate JSON-LD structured data
 * @param {Object} options - JSON-LD options
 * @returns {Object} JSON-LD schema
 */
export function generateJsonLd({ title, description, url, image, type = 'website' } = {}) {
  // Safe defaults
  const safeTitle = title || SITE_CONFIG.title || 'LaserCut Pro';
  const safeDescription = description || SITE_CONFIG.description || 'Jasa laser cutting terpercaya';
  const safeUrl = url || SITE_CONFIG.url || 'https://example.com';
  const safeImage = image || `${SITE_CONFIG.url}/logo-company.webp`;
  
  // Base organization schema
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name || 'LaserCut Pro',
    url: SITE_CONFIG.url || 'https://example.com',
    logo: `${SITE_CONFIG.url || 'https://example.com'}/logo-company.webp`,
    description: SITE_CONFIG.description || 'Jasa laser cutting terpercaya',
    telephone: SITE_CONFIG.phone || '+62 851 6569 3179',
    email: SITE_CONFIG.email || 'info@lasercutpro.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address || 'Jl. Raya Bogor No. 123',
      addressLocality: 'Jakarta Selatan',
      addressRegion: 'DKI Jakarta',
      postalCode: '12560',
      addressCountry: 'ID'
    },
    openingHours: 'Mo-Sa 08:00-17:00',
    sameAs: SITE_CONFIG.socialMedia ? Object.values(SITE_CONFIG.socialMedia) : [],
    areaServed: [
      'Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi',
      'Jakarta Pusat', 'Jakarta Utara', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur',
      'Tangerang Selatan', 'Kota Bogor', 'Kabupaten Bogor', 'Kota Bekasi', 'Kabupaten Bekasi',
      'Kota Depok', 'Kota Tangerang', 'Kabupaten Tangerang'
    ],
    serviceType: [
      'Laser Cutting Akurat', 'CNC Router Cepat', 'Laser Fiber Presisi', 'Laser CO2 Akrilik',
      'Galvo Engraving', 'Cutting Metal', 'Potong Kayu', 'Cutting Akrilik'
    ]
  };

  // Type-specific schemas
  switch (type) {
    case 'service':
      return {
        ...baseSchema,
        '@type': 'Service',
        name: safeTitle,
        description: safeDescription,
        url: safeUrl,
        image: safeImage,
        provider: {
          '@type': 'Organization',
          name: SITE_CONFIG.name || 'LaserCut Pro',
          url: SITE_CONFIG.url || 'https://example.com'
        },
        areaServed: baseSchema.areaServed,
        serviceType: baseSchema.serviceType
      };

    case 'article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: safeTitle,
        description: safeDescription,
        url: safeUrl,
        image: safeImage,
        author: {
          '@type': 'Organization',
          name: SITE_CONFIG.name || 'LaserCut Pro',
          url: SITE_CONFIG.url || 'https://example.com'
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name || 'LaserCut Pro',
          url: SITE_CONFIG.url || 'https://example.com',
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_CONFIG.url || 'https://example.com'}/logo-company.webp`
          }
        }
      };

    default:
      return baseSchema;
  }
}

/**
 * Generate breadcrumb structured data
 * @param {Array} breadcrumbs - Array of breadcrumb objects
 * @returns {Object} Breadcrumb JSON-LD schema
 */
export function generateBreadcrumbSchema(breadcrumbs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_CONFIG.url || 'https://example.com'}${crumb.url}`
    }))
  };
}

/**
 * Generate FAQ structured data
 * @param {Array} faqs - Array of FAQ objects
 * @returns {Object} FAQ JSON-LD schema
 */
export function generateFAQSchema(faqs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generate review/rating structured data
 * @param {Array} reviews - Array of review objects
 * @returns {Object} Review JSON-LD schema
 */
export function generateReviewSchema(reviews = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name || 'LaserCut Pro',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: review.content
    }))
  };
}

/**
 * Generate service-specific structured data
 * @param {Object} service - Service object
 * @returns {Object} Service JSON-LD schema
 */
export function generateServiceSchema(service = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name || 'Laser Cutting Service',
    description: service.description || 'Professional laser cutting service',
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name || 'LaserCut Pro',
      url: SITE_CONFIG.url || 'https://example.com',
      telephone: SITE_CONFIG.phone || '+62 851 6569 3179',
      email: SITE_CONFIG.email || 'info@lasercutpro.com'
    },
    areaServed: [
      'Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi',
      'Jakarta Pusat', 'Jakarta Utara', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur',
      'Tangerang Selatan', 'Kota Bogor', 'Kabupaten Bogor', 'Kota Bekasi', 'Kabupaten Bekasi',
      'Kota Depok', 'Kota Tangerang', 'Kabupaten Tangerang'
    ],
    offers: {
      '@type': 'Offer',
      description: service.price || 'Competitive pricing',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock'
    }
  };
}

/**
 * Generate product structured data
 * @param {Object} material - Material/product object
 * @returns {Object} Product JSON-LD schema
 */
export function generateProductSchema(material = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: material.name || 'Laser Cutting Material',
    description: material.description || 'High quality material for laser cutting',
    image: `${SITE_CONFIG.url || 'https://example.com'}${material.image || '/images/default.webp'}`,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name || 'LaserCut Pro'
    },
    manufacturer: {
      '@type': 'Organization',
      name: SITE_CONFIG.name || 'LaserCut Pro',
      url: SITE_CONFIG.url || 'https://example.com'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'IDR',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name || 'LaserCut Pro'
      }
    }
  };
}

/**
 * Generate portfolio/ItemList structured data
 * @param {Array} items - Portfolio items
 * @returns {Object} ItemList JSON-LD schema
 */
export function generatePortfolioSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio LaserCut Pro',
    description: 'Koleksi project laser cutting, CNC router, dan engraving terbaik dari LaserCut Pro',
    url: `${SITE_CONFIG.url}/portfolio/`,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: item.title,
        description: item.description,
        image: `${SITE_CONFIG.url}${item.image}`,
        url: `${SITE_CONFIG.url}/portfolio/${item.slug}`
      }
    })),
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name || 'LaserCut Pro'
    }
  };
}

/**
 * Generate blog post structured data
 * @param {Object} post - Blog post object
 * @returns {Object} BlogPosting JSON-LD schema
 */
export function generateBlogPostSchema(post = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_CONFIG.url}${post.image}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name || 'LaserCut Pro'
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name || 'LaserCut Pro',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo-company.webp`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${post.slug}`
    }
  };
}

/**
 * Generate local business schema for Jabodetabek cities
 * @param {string} city - Target city
 * @returns {Object} LocalBusiness JSON-LD schema
 */
export function generateLocalBusinessSchema(city = 'Jakarta') {
  const cityCoordinates = {
    'Jakarta': { lat: -6.2088, lng: 106.8456 },
    'Bogor': { lat: -6.5971, lng: 106.8060 },
    'Depok': { lat: -6.4025, lng: 106.7942 },
    'Tangerang': { lat: -6.1781, lng: 106.6298 },
    'Bekasi': { lat: -6.2383, lng: 106.9756 }
  };

  const coords = cityCoordinates[city] || cityCoordinates['Jakarta'];
  const siteUrl = SITE_CONFIG.url || 'https://example.com';
  const siteName = SITE_CONFIG.name || 'LaserCut Pro';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#business-${city.toLowerCase()}`,
    name: `${siteName} - Laser Cutting ${city}`,
    description: `Jasa laser cutting akurat & cepat di ${city}. Spesialis akrilik, kayu, metal dengan teknologi terdepan.`,
    url: siteUrl,
    telephone: SITE_CONFIG.phone || '+62 851 6569 3179',
    email: SITE_CONFIG.email || 'info@lasercutpro.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: city === 'Jakarta' ? 'DKI Jakarta' : 'Jawa Barat',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: coords.lat,
      longitude: coords.lng
    },
    openingHours: 'Mo-Sa 08:00-17:00',
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: city
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: coords.lat,
        longitude: coords.lng
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Laser Cutting',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Laser Cutting Akurat',
            description: `Layanan laser cutting presisi tinggi di ${city}`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CNC Router Cepat',
            description: `Layanan CNC router cepat dan akurat di ${city}`
          }
        }
      ]
    }
  };
}

/**
 * Generate sitemap URLs for Jabodetabek
 * @returns {Array} Array of sitemap URL objects
 */
export function generateSitemapUrls() {
  const baseUrls = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog', priority: 0.7, changefreq: 'weekly' }
  ];

  const serviceUrls = [
    '/jasa-cnc-router',
    '/jasa-laser-fiber', 
    '/jasa-laser-co2',
    '/jasa-galvo-engraving'
  ].map(url => ({ url, priority: 0.9, changefreq: 'monthly' }));

  const materialUrls = [
    '/material-acp',
    '/material-pvc',
    '/material-metal',
    '/material-acrylic',
    '/material-ply-wood-multiplex',
    '/material-grc'
  ].map(url => ({ url, priority: 0.8, changefreq: 'monthly' }));

  // Location-specific URLs for Jabodetabek SEO
  const locationUrls = [
    '/laser-cutting-jakarta',
    '/laser-cutting-bogor',
    '/laser-cutting-depok',
    '/laser-cutting-tangerang',
    '/laser-cutting-bekasi'
  ].map(url => ({ url, priority: 0.7, changefreq: 'monthly' }));

  return [...baseUrls, ...serviceUrls, ...materialUrls, ...locationUrls];
}

/**
 * Generate robots.txt content
 * @returns {string} Robots.txt content
 */
export function generateRobotsTxt() {
  const siteUrl = SITE_CONFIG.url || 'https://example.com';
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /_astro/
Disallow: /api/

# Allow important pages
Allow: /
Allow: /jasa-*
Allow: /material-*
Allow: /laser-cutting-*
Allow: /blog*
Allow: /about
Allow: /contact`;
}