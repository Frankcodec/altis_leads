# Altis Studio - Copilot Instructions

## Project Overview
**Altis Studio** is a marketing/portfolio website built with React + TypeScript + Vite. It showcases web design and development services through a highly animated, performance-optimized landing page. The site emphasizes premium visuals with motion design as a core feature.

**Tech Stack:**
- React 19, TypeScript, Vite 7
- Tailwind CSS 4 with custom animations
- Framer Motion for page animations
- Lucide React for consistent iconography

## Architecture & Component Structure

### Page Structure (App.tsx)
The site is composed of discrete **section components** stacked vertically. Each section is self-contained and independently styled:
- `Hero` - Main headline with navbar, gradient background, call-to-action
- `PortfolioSection` - Project showcase (Bento grid layout)
- `AboutSection` - Company/team information
- `ServicesSection` - Service offerings in uneven grid
- `ProcessSection` - Workflow visualization
- `Plans` - Pricing tiers
- `ReviewsSection` - User testimonials with canvas animations
- `FAQSection` - Frequently asked questions
- `CTASection` - Final conversion push
- `Footer` - Navigation and company info

### Key Pattern: Section Components
All sections follow a consistent structure:
1. **Background layer** - Often a subtle grid pattern (`backgroundImage` with CSS gradients)
2. **Section badge** - Dashed border pill with icon (e.g., "Services" with Star icon)
3. **Header** - Centered h2 with supporting description
4. **Main content** - Grid layout with motion-animated cards

### Shared Components
- `Navbar` - Sticky header with scroll-based styling transitions; responsive mobile menu
- `components/Bento*` - Reusable grid card patterns (Bento1.tsx, Bento2.tsx, Bento3.tsx) for portfolio showcase

## Design & Animation Conventions

### Motion Animations (Framer Motion)
All interactive elements use consistent animation patterns:
```tsx
<motion.div
  initial={{ opacity: 0, y: 10 }}      // Start state
  whileInView={{ opacity: 1, y: 0 }}   // Trigger when in viewport
  viewport={{ once: true }}             // Animation fires once
  className="..."
>
```
**Key Convention:** Use `whileInView` + `viewport={{ once: true }}` for scroll-triggered entrance animations. Avoid `animate` for lazy-loaded content (it fires immediately).

### Color & Styling
- **Primary accent:** Orange-500 (`text-orange-500`, `fill-orange-500`) - used for highlights, CTAs, icons
- **Dark mode cards:** `bg-[#141414]` (charcoal) with `border border-white/5` for subtle definition
- **Light background:** `bg-[#FCFCFC]` (off-white) for main sections
- **Typography:** Track-tight headers (`tracking-tight`), use `leading-relaxed` for body text
- **Spacing:** Use `gap-2`/`gap-3` for tight icon+text, larger `gap-6`/`gap-8` for section spacing

### Grid Patterns
- Background grids defined via inline style: `backgroundImage: 'linear-gradient(...)'` with `backgroundSize: '32px 32px'`
- Often set `opacity-[0.03]` to stay subtle
- Applied as absolute positioned overlay with `pointer-events-none`

### Custom Animations
Tailwind extended with custom keyframes in `tailwind.config.js`:
- `animation-marquee` - Continuous horizontal scrolling (used in testimonials)

## Developer Workflow

### Local Development
```bash
npm run dev        # Vite dev server with HMR
npm run build      # TypeScript compilation + Vite bundle
npm run lint       # ESLint check
npm run preview    # Preview production build locally
```

### Code Quality
- **Linting:** ESLint flat config with React hooks and refresh plugins (`eslint.config.js`)
- **Types:** Strict TypeScript in `tsconfig.app.json`; node types in `tsconfig.node.json`
- **No testing framework configured** - focus on visual/manual testing

## Common Patterns to Replicate

### Adding a New Section
1. Create `YourSection.tsx` in `/src`
2. Import in `App.tsx` and add to the component tree
3. Follow this template:
   ```tsx
   const YourSection = () => {
     return (
       <section className="relative py-20 md:py-32 bg-[#FCFCFC]">
         {/* Grid background */}
         <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
         
         <div className="relative z-10 max-w-6xl mx-auto px-6">
           {/* Badge */}
           {/* Header */}
           {/* Content */}
         </div>
       </section>
     );
   };
   ```

### Badge Component Pattern
Every section opens with a dashed-border pill badge:
- Icon (usually from lucide-react) + text label
- `border border-dashed border-gray-300 bg-white/50`
- Animated with `whileInView`

### Card Component Pattern
- Dark background cards use `bg-[#141414]` with `rounded-[22px]` (extra rounded)
- Padding: `p-8 md:p-7`
- Include tag pills: `bg-[#222222] border border-white/5`
- Always set `min-h-[360px]` or explicit height for consistency

## Performance Considerations
- Images in `/public` are static assets (gradient backgrounds, logos, portfolio images)
- Vite handles code-splitting automatically for dev/prod
- Framer Motion animations are GPU-accelerated (use transform/opacity)
- No analytics or external tracking libraries (keep it clean)

## Important Files Reference
- `src/App.tsx` - Entry point; lists all sections
- `src/Navbar.tsx` - Scroll state management and mobile menu logic
- `src/ServicesSection.tsx` - Exemplifies uneven grid layouts and tag patterns
- `src/ReviewsSection.tsx` - Shows canvas animations and useRef patterns
- `tailwind.config.js` - Custom animation definitions
- `eslint.config.js` - Type-aware linting rules
