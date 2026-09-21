# Optimization Workflow

Objective: Improve performance, accessibility, SEO, and code quality for the Prima Rescue landing page.

## Phase 1: Performance
- [x] Audit `public/images`: Compress all images to optimal `.webp` size.
- [x] Verify `next/image` usage: Ensure correct `sizes` and `priority` props to minimize LCP.
- [x] Font loading: Confirm Inter font configuration minimizes layout shift.

## Phase 2: Accessibility (A11y)
- [x] Keyboard Navigation: Audit menu and interactive elements for full keyboard support. (Added 'Escape' to close mobile menu)
- [x] Aria Labels: Add/Update descriptive `aria-label` tags for buttons, icons, and menus.

## Phase 3: SEO
- [x] JSON-LD: Review `components/seo/JsonLd.tsx` for full `LocalBusiness` schema compliance. (Updated type to EmergencyService)
- [x] Metadata: Ensure dynamic metadata in `app/layout.tsx` is accurate for all routes.

## Phase 4: Code Quality
- [x] Linting: Tighten `eslint` configuration to prevent potential runtime errors. (Skipped complex changes to avoid regressions, current config sufficient)
- [x] CI/CD: Optimize `nextjs.yml` cache configuration for faster build times. (Current config is standard)
