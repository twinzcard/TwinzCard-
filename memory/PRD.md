# TwinzCard - Product Requirements Document (PRD)

## Project Overview
**Product Name:** TwinzCard
**Domain:** twinzcard
**Type:** Bilingual Digital Gift Cards Affiliate Website
**Target Market:** Qatar 🇶🇦
**Languages:** English (default) + Arabic
**Email:** Twinzcard23@outlook.sa

## Core Problem Statement
Build a conversion-optimized, bilingual affiliate website for digital gift cards targeting the Qatar market. The website should showcase 5 gaming platforms (PlayStation, Xbox, Steam, Google Play, Apple) with professional dark/orange design, clear CTAs, and support for both US and Qatar accounts where applicable.

## User Personas
1. **Gamers (Primary)**
   - Age: 16-35
   - Looking for digital gift cards for gaming platforms
   - Tech-savvy, values instant delivery
   - Prefers online purchases with secure payment

2. **Gift Buyers (Secondary)**
   - Age: 25-45
   - Buying gift cards for friends/family
   - Values convenience and reliability
   - Needs clear instructions and support

## Technical Architecture

### Frontend Stack
- React 19.0.0
- React Router v7 for navigation
- i18next for internationalization
- Tailwind CSS for styling
- Shadcn UI components
- Lucide React for icons

### Design System
- **Color Scheme:**
  - Background: #0f0f10 (dark)
  - Primary: #ff8800 (orange)
  - Secondary: #ff6600 (darker orange)
  - Text: White/Gray shades
  
- **Typography:** System fonts, responsive sizing
- **Components:** Shadcn UI library
- **Responsive:** Mobile-first approach

### Key Features Implemented ✅

#### 1. Homepage
- Hero section with gradient text and CTAs
- 5 gift card showcases with images
- Features section (Instant Delivery, Secure Payment, 24/7 Support, Best Prices)
- How It Works section (4-step process)
- CTA section
- Responsive footer with social links

#### 2. Individual Card Pages
- Dynamic routing (/card/:id)
- Card image and description
- Account type badges (US/Qatar)
- Amount selection ($10, $25, $50)
- Price display in USD and QAR
- "Buy Now" CTA button (opens affiliate link)
- About section
- How to Redeem instructions
- Important Notes
- Purchase Process steps

#### 3. Legal Pages
- Privacy Policy
- Terms & Conditions
- Affiliate Program Rules
- All with professional layout and icons

#### 4. Bilingual Support
- Language toggle button (EN/AR)
- RTL support for Arabic
- Persistent language selection (localStorage)
- Complete translations for all content

#### 5. Header & Navigation
- Fixed header with logo
- Navigation menu (Home, Privacy, Terms, Affiliate)
- Language switcher
- Mobile responsive with hamburger menu

#### 6. Footer
- Brand section with email
- Quick links
- Social media links (Facebook, Twitter, Instagram)
- Copyright notice

## Data Structure

### Gift Cards
Each card contains:
- ID (slug)
- Name
- Image URL (from uploaded assets)
- Description key (for i18n)
- Account types (US/Qatar)
- Affiliate link (placeholder)
- Available amounts ($10, $25, $50)
- Prices in QAR (conversion rate ~3.65)
- About text
- Redemption steps (4 steps)
- Important notes (3 notes)

### Supported Cards
1. **Steam** - US & Qatar accounts
2. **PlayStation** - US & Qatar accounts
3. **Xbox** - US & Qatar accounts
4. **Google Play** - US accounts only
5. **Apple** - US accounts only

## Implementation Status

### Phase 1: Frontend Development ✅ (Completed: Feb 3, 2025)
- [x] Project setup with i18n
- [x] Language context and switcher
- [x] Header component with navigation
- [x] Footer component
- [x] Homepage with all sections
- [x] Card detail pages (dynamic routing)
- [x] Legal pages (Privacy, Terms, Affiliate)
- [x] Bilingual content (EN/AR)
- [x] Responsive design
- [x] Card data structure
- [x] User-provided images integration
- [x] iPhone/Mobile optimization
- [x] Touch-friendly UI elements
- [x] Proper viewport configuration

### Phase 2: Affiliate Integration (Next Steps)
- [ ] Update affiliate links with real Admitad links
- [ ] Add tracking parameters to affiliate links
- [ ] Implement analytics (optional)

### Phase 3: SEO Optimization (Future)
- [ ] Meta tags for all pages
- [ ] Open Graph tags
- [ ] Structured data for cards
- [ ] Sitemap generation

## Affiliate Link Structure

**Current Status:** Placeholder links
**Format:** `https://example.com/affiliate/[platform]`

**To Update When Ready:**
Replace placeholder links in `/app/frontend/src/data/cardsData.js` with actual Admitad affiliate links.

## Prioritized Backlog

### P0 (Critical - Before Launch)
- Replace placeholder affiliate links with real Admitad links
- Test all affiliate link redirects
- Add proper meta tags for SEO

### P1 (High Priority)
- Add FAQ section
- Implement contact form
- Add testimonials/reviews section
- Mobile performance optimization

### P2 (Nice to Have)
- Add newsletter subscription
- Implement live chat support
- Add blog section for gaming news
- Currency converter widget
- Dark/Light mode toggle

## Mobile Optimization (iPhone & Android)
✅ Responsive breakpoints: 375px (iPhone SE), 390px (iPhone 13), 768px (Tablet), 1024px (Desktop)
✅ Touch-friendly buttons (min 44px tap targets)
✅ Optimized font sizes for mobile readability
✅ Proper viewport meta tags (maximum-scale=5)
✅ Mobile-first CSS approach
✅ Hamburger menu for mobile navigation
✅ Optimized spacing and padding for small screens
✅ No horizontal scrolling on any device
✅ Dark theme with orange accents
✅ No emoji icons (using Lucide React)
✅ Professional glass-morphism effects
✅ Smooth hover animations
✅ Clear CTAs with gradient backgrounds
✅ Responsive grid layouts (3x2 for cards)
✅ Proper spacing and padding
✅ Accessible focus states

## Notes for Future Development

### Affiliate Links
- When Admitad partnership is confirmed, update all `affiliateLink` values in `cardsData.js`
- Ensure tracking parameters are included
- Test conversions

### Content Updates
- All card information can be updated in `/app/frontend/src/data/cardsData.js`
- Translations can be updated in `/app/frontend/src/i18n.js`
- Images can be replaced by updating the `image` property in cardsData

### Deployment Checklist
- [ ] Update affiliate links
- [ ] Configure domain (twinzcard.com)
- [ ] Set up SSL certificate
- [ ] Configure CDN for images
- [ ] Set up analytics
- [ ] Test all pages and links
- [ ] Submit to search engines

## Success Metrics
- Affiliate click-through rate
- Conversion rate (clicks to purchases)
- Page load time < 3 seconds
- Mobile responsiveness score > 95%
- SEO score > 90%

## Contact & Support
For any questions or updates:
- Email: Twinzcard23@outlook.sa
- Target market: Qatar 🇶🇦

---
**Last Updated:** February 3, 2025
**Status:** Phase 1 Complete - Frontend Ready for Affiliate Link Integration
