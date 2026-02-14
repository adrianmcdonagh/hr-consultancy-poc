# Quick Setup Guide

## ⚠️ Important: CSS Build Required

The website is complete but requires Tailwind CSS to be built before viewing in a browser.

## Setup Steps

### 1. Install Node.js

If you don't have Node.js installed:

1. Download from https://nodejs.org/ (LTS version recommended)
2. Install following the installer instructions
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### 2. Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

This will install Tailwind CSS and its dependencies.

### 3. Build the CSS

Run one of these commands:

**For development (with auto-rebuild on changes):**
```bash
npm run dev
```

**For production (minified CSS):**
```bash
npm run build
```

### 4. View the Website

Once the CSS is built, open any HTML file in your browser:

- `index.html` - Home page
- `services.html` - Services
- `about.html` - About us
- `team.html` - Team profiles
- `book-a-call.html` - Call booking
- `get-in-touch.html` - Contact form

## Alternative: Use a CDN (Quick Preview Only)

If you need to preview the site immediately without building, you can temporarily use Tailwind's CDN:

1. Open any HTML file
2. Replace `<link rel="stylesheet" href="./css/output.css">` with:
   ```html
   <script src="https://cdn.tailwindcss.com"></script>
   <script>
     tailwind.config = {
       theme: {
         extend: {
           colors: {
             'midnight-violet': {
               50: '#f0eff6', 100: '#e1dfec', 200: '#c3beda',
               300: '#a59ec7', 400: '#877db5', 500: '#695da2',
               600: '#544a82', 700: '#3f3861', 800: '#2a2541',
               900: '#151320', 950: '#0f0d17'
             },
             'slate-blue': {
               50: '#efedf8', 100: '#dfdaf1', 200: '#c0b5e3',
               300: '#a090d5', 400: '#816bc7', 500: '#6146b9',
               600: '#4e3894', 700: '#3a2a6f', 800: '#271c4a',
               900: '#130e25', 950: '#0e0a1a'
             },
             'soft-periwinkle': {
               50: '#eeedf7', 100: '#dedcef', 200: '#bcb9df',
               300: '#9b95d0', 400: '#7a72c0', 500: '#594fb0',
               600: '#473f8d', 700: '#352f6a', 800: '#232046',
               900: '#121023', 950: '#0c0b19'
             },
             'pale-slate': {
               50: '#f2f1f3', 100: '#e6e3e8', 200: '#cdc7d1',
               300: '#b4acb9', 400: '#9b90a2', 500: '#82748b',
               600: '#685d6f', 700: '#4e4653', 800: '#342e38',
               900: '#1a171c', 950: '#121013'
             }
           }
         }
       }
     }
   </script>
   ```

**Note:** The CDN approach is for preview only. For production, build the CSS properly.

## File Structure

```
hr-consultancy-poc/
├── css/
│   ├── input.css          # Tailwind source
│   └── output.css         # Generated CSS (after build)
├── *.html                 # Website pages
├── tailwind.config.js     # Tailwind config
├── package.json           # Dependencies
└── README.md             # Full documentation
```

## Troubleshooting

**"npm: command not found"**
- Install Node.js from https://nodejs.org/

**Styles not loading**
- Run `npm run build` to generate CSS
- Check that `css/output.css` exists
- Clear browser cache

**Changes not appearing**
- Run `npm run dev` for auto-rebuild
- Or manually run `npm run build` after each change

## Next Steps

See README.md for:
- Full feature list
- Production deployment instructions
- Adding HubSpot integration
- Setting up the contact form
- SEO and analytics setup
