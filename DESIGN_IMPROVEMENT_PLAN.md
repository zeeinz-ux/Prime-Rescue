# Design Improvement Plan

Objective: Refine UI/UX, improve visual hierarchy, and enhance micro-interactions.

## Improvements

### 1. Spacing & Breathing Room
- [x] Standardize section padding: Update all section wrappers to use consistent `py-16 md:py-24` for better vertical flow.
- [x] Container review: Ensure `Container` components maintain consistent horizontal padding across all devices.

### 2. Micro-interactions
- [x] Scroll reveal: Implement subtle CSS-based fade-in transition for sections as they enter the viewport to improve perceived performance and modern feel.

### 3. Accessibility & Contrast Audit
- [x] Contrast check: Audit text colors against `bg-background-soft` and `bg-clinical-white` to ensure WCAG AA compliance.
- [x] Typography: Review line-heights for all body text for optimal readability. (Standardized via global CSS and existing Tailwind classes).

### 4. Component Refinement
- [x] WhyChooseUs: Update icon containers to have higher visual weight (e.g., increased padding, subtle shadow) to improve icon prominence.

## Implementation Principles
- Avoid unnecessary dependencies (prefer CSS transitions/Tailwind classes).
- Maintain 8px spacing rhythm.
- Title Case section headers.
- Single source of truth for all content.
