# AI Agent Development Rules for Raja Cutting Laser Website

This document provides rules and guidelines for AI agents modifying this codebase. Adhering to these rules ensures consistency, maintainability, and adherence to the project's architecture.

## Tech Stack Overview

This is a static website built with Astro.js and styled with Tailwind CSS. It is designed for high performance and strong SEO.

- **Framework**: [Astro.js](https://astro.build/) in static site generation (`output: 'static'`) mode.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) configured in `tailwind.config.mjs`.
- **Language**: TypeScript for type safety and utility functions (`.ts` files).
- **SEO**: Managed via `@astrojs/sitemap` and custom utilities in `src/utils/seo.ts`.
- **Data Management**: Centralized static data is stored in `src/utils/constants.js`.
- **Backend/Database**: [Supabase](https://supabase.com/) is integrated for potential dynamic features, using the `@supabase/supabase-js` client.
- **Deployment**: Continuous deployment is handled via GitHub Actions, deploying the `dist/` folder to a Hostinger FTP server.

## Library Usage and Coding Rules

### 1. Astro.js (`.astro` files)
- **Purpose**: Use Astro for creating all pages, layouts, and UI components.
- **Pages**: All user-facing pages must be located in `src/pages/`. File-based routing is used.
- **Components**: Reusable UI components must be created in `src/components/`. Create small, focused components.
- **Layouts**: Base page structure and global SEO tags are managed in `src/components/BaseLayout.astro`. All pages must use this layout.
- **Data Fetching**: Since this is a static site, all data is imported directly from `src/utils/constants.js` at build time. Do not make client-side API calls for static content.

### 2. Tailwind CSS
- **Purpose**: All styling must be done using Tailwind CSS utility classes.
- **Implementation**: Apply classes directly within the `class` attribute of HTML elements in `.astro` files.
- **Customization**:
    - For custom theme values (colors, fonts), modify `tailwind.config.mjs`.
    - For reusable component styles (`.btn-primary`, `.heading-lg`), add them to the `@layer components` in `src/styles/global.css`.
- **Avoid**: Do not write custom CSS files for individual components. Keep styling co-located with the markup.

### 3. SEO (`src/utils/seo.ts`)
- **Purpose**: To generate all SEO-related meta tags and structured data (JSON-LD).
- **Rule**: Every page **must** use the `generateMetaTags` function from `src/utils/seo.ts` to create its meta tags. This ensures consistency in titles, descriptions, and social media cards.
- **Structured Data**: Use other helpers like `generateFAQSchema`, `generateServiceSchema`, and `generateBreadcrumbSchema` where appropriate to add rich structured data to pages.

### 4. Data Management (`src/utils/constants.js`)
- **Purpose**: This file is the single source of truth for all static content on the website.
- **Rule**: Any text, links, or data that is reused or considered primary content (e.g., service descriptions, testimonials, navigation items, contact info) **must** be defined in `src/utils/constants.js` and imported into components.
- **Benefit**: This separates content from presentation, making updates easier and ensuring consistency.

### 5. Supabase (`@supabase/supabase-js`)
- **Purpose**: For any features requiring a backend, such as contact form submissions, user tracking, or future dynamic content.
- **Implementation**: Use the API endpoints in `src/pages/api/` to interact with Supabase.
- **Security**: Supabase URL and keys must be stored as environment variables, not hardcoded. The existing API routes (`tracker-customer.js`) demonstrate this pattern.

## Project Structure
- `src/pages/`: Contains all routes for the website.
- `src/components/`: Contains reusable Astro components (e.g., `Header.astro`, `CTA.astro`).
- `src/styles/`: Contains the global stylesheet (`global.css`).
- `src/utils/`: Contains helper functions and constants (`seo.ts`, `constants.js`).
- `public/`: Contains static assets like images and favicons.

## General Guidelines
- **Responsiveness**: All new components and pages must be fully responsive and tested on mobile, tablet, and desktop views.
- **Performance**: Prioritize performance. Use optimized images (WebP), lazy load images below the fold (`loading="lazy"`), and minimize client-side JavaScript.
- **Accessibility**: Ensure semantic HTML is used. Add `alt` tags for all images and use ARIA attributes where necessary.