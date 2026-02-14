# HR Consultancy Website - Proof of Concept

A responsive, SEO-friendly brochure website for an HR consultancy built with semantic HTML and Tailwind CSS.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Semantic, accessible HTML5 markup
- ✅ SEO-optimized with unique meta tags per page
- ✅ Custom color system from DESIGN_SYSTEM.md
- ✅ Clean internal linking and navigation
- ✅ Primary CTA (Book a Call) and Secondary CTA (Get in Touch)
- ✅ Mobile-friendly navigation with hamburger menu

## Pages

1. **Home (/)** - Hero, services overview, who we help, process, FAQs
2. **Services (/services.html)** - Detailed service descriptions with anchor links
3. **About (/about.html)** - Company story, values, how we work
4. **Team (/team.html)** - Founder and associate profiles
5. **Book a Call (/book-a-call.html)** - HubSpot meeting scheduler placeholder
6. **Get in Touch (/get-in-touch.html)** - Contact form with privacy notice

## Tech Stack

- **HTML5** - Semantic markup with proper heading hierarchy
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vanilla JavaScript** - Mobile menu toggle

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build Tailwind CSS:
```bash
npm run build
```

Or for development with watch mode:
```bash
npm run dev
```

3. Open any HTML file in your browser to view the website.

### File Structure

```
hr-consultancy-poc/
├── css/
│   ├── input.css          # Tailwind source with custom components
│   └── output.css         # Compiled Tailwind CSS (generated)
├── index.html             # Home page
├── services.html          # Services page
├── about.html             # About page
├── team.html              # Team page
├── book-a-call.html       # Book a call page
├── get-in-touch.html      # Contact form page
├── tailwind.config.js     # Tailwind configuration with custom colors
├── package.json           # Dependencies
├── PROJECT_BRIEF.md       # Project requirements
├── SITE_COPY.md          # Content guidelines
├── DESIGN_SYSTEM.md      # Color tokens
└── README.md             # This file
```

## Color System

The website uses a custom color palette defined in `tailwind.config.js`:

- **midnight-violet** - Primary dark colors
- **slate-blue** - Primary brand color (CTAs, links)
- **soft-periwinkle** - Accent color
- **pale-slate** - Neutral tones

All colors have shades from 50 to 950 following Tailwind's naming convention.

## Component Classes

Custom component classes defined in `css/input.css`:

- `.btn-primary` - Primary call-to-action button
- `.btn-secondary` - Secondary button style
- `.container-custom` - Max-width container with responsive padding

## SEO Features

Each page includes:

- Unique `<title>` tag (60-70 characters)
- Meta description (150-160 characters)
- Open Graph tags for social media sharing
- Canonical URLs
- Semantic HTML with proper landmarks (`header`, `nav`, `main`, `footer`)
- Proper heading hierarchy (one H1 per page)
- Descriptive alt text on interactive elements
- ARIA labels for accessibility

## Accessibility

- Semantic HTML5 elements
- ARIA labels on navigation and interactive elements
- Proper heading hierarchy
- Keyboard-navigable mobile menu
- Focus states on interactive elements
- Sufficient color contrast ratios

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

This is a static website. You can deploy it to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect to Git repository
- **GitHub Pages**: Push to GitHub and enable Pages
- **Traditional hosting**: Upload all files via FTP

## Next Steps

To make this production-ready:

1. **Install Tailwind** and build the CSS (run `npm install` and `npm run build`)
2. **Replace placeholders**:
   - HubSpot meetings embed code in `book-a-call.html`
   - Contact form backend in `get-in-touch.html`
   - Domain name (currently example.co.uk)
   - Contact details (email, phone)
3. **Add Open Graph images** for social media previews
4. **Set up form handling** (e.g., Netlify Forms, Formspree, or custom backend)
5. **Add analytics** (Google Analytics, Plausible, etc.)
6. **Configure sitemap.xml** and robots.txt for SEO
7. **Test on real devices** and browsers
8. **Optimize images** if adding photos/graphics
9. **Add favicon** and apple-touch-icon

## Development

Run in development mode with auto-rebuild:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Support

This is a proof-of-concept website. Refer to PROJECT_BRIEF.md and SITE_COPY.md for requirements and content guidelines.
