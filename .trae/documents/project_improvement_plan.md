# Project Improvement Plan - Portfolio Website

This plan outlines the steps to enhance the current portfolio website, focusing on UI consistency, feature completion, and overall user experience.

## Current State Analysis
- **Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Radix UI (shadcn/ui).
- **Architecture**: Clean separation of data (`src/data/portfolio.ts`), components, and pages.
- **Strengths**: Modern design, responsive, functional contact form, dark/light mode.
- **Weaknesses**: Placeholder pages (Blog), inconsistent component usage (not fully utilizing shadcn/ui), some placeholder data, minimal animations.

## Proposed Changes

### 1. UI Refactoring with shadcn/ui
- **Goal**: Ensure a consistent design system across all pages.
- **Files**: 
    - `src/app/page.tsx`
    - `src/app/projects/page.tsx`
    - `src/app/contact/page.tsx`
    - `src/app/about/page.tsx`
    - `src/app/experience/page.tsx`
- **Changes**: 
    - Replace standard `<button>` and `<Link>` (styled as buttons) with the `Button` component from `src/components/ui/button.tsx`.
    - Replace custom card layouts with the `Card` component from `src/components/ui/card.tsx`.
    - Use `Badge` (to be added) for technology tags and categories.

### 2. Complete Blog Implementation
- **Goal**: Replace the "Coming Soon" placeholder with a real blog system.
- **Files**: 
    - `src/app/blog/page.tsx`
    - `src/app/blog/[id]/page.tsx` (New)
- **Changes**: 
    - Implement a listing page that maps over `blogPosts` from `src/data/portfolio.ts`.
    - Create a detail page for reading individual posts.
    - Add filtering by tags.

### 3. Enhance Web3 Page
- **Goal**: Make the Web3 page more dynamic and data-driven.
- **Files**: 
    - `src/app/web3/page.tsx`
- **Changes**: 
    - Use data from `web3Experience` in `src/data/portfolio.ts` instead of hardcoded values.
    - Improve the layout with better cards and icons.

### 4. Portfolio Data & Assets Cleanup
- **Goal**: Ensure the portfolio reflects real information and looks professional.
- **Files**: 
    - `src/data/portfolio.ts`
- **Changes**: 
    - Update placeholder links (e.g., `yourusername`).
    - Add real descriptions for all projects and blog posts.
    - Ensure resume link points to a valid file.

### 5. Enhanced Animations & UX
- **Goal**: Improve the "feel" of the site with smooth transitions.
- **Files**: 
    - `src/app/layout.tsx`
    - Various page components
- **Changes**: 
    - Implement page transition animations using Framer Motion.
    - Add hover effects and entrance animations for cards and sections.
    - Implement skeleton loaders for a smoother loading experience.

### 6. SEO & Metadata Optimization
- **Goal**: Improve search engine visibility.
- **Files**: 
    - `src/app/layout.tsx`
    - `src/app/manifest.ts`
    - `src/app/sitemap.ts`
- **Changes**: 
    - Update metadata with accurate title, description, and keywords.
    - Ensure OG images and favicon are correctly set up.

## Assumptions & Decisions
- **Assumption**: The user wants to keep the current "minimalist professional" aesthetic.
- **Decision**: We will prioritize using existing shadcn/ui components and add new ones only when necessary to maintain the design system.
- **Decision**: Blog content will remain in `portfolio.ts` for now rather than moving to a CMS, to keep the project simple and portable.

## Verification Steps
1. **Visual Inspection**: Run `npm run dev` and navigate through all pages to ensure UI consistency and check animations.
2. **Link Check**: Verify all social links, project links, and navigation links work correctly.
3. **Responsive Test**: Check the site on various screen sizes (mobile, tablet, desktop).
4. **Dark Mode Test**: Ensure all components look good and remain readable in both themes.
5. **Form Test**: Send a test message through the contact form to verify Nodemailer integration.
6. **Build Test**: Run `npm run build` to ensure there are no TypeScript or Next.js build errors.
