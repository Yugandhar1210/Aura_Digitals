# Development & Deployment Guide

Complete guide for developing, deploying, and maintaining the Aura Digitals landing page.

## 🏗️ Development Setup

### Prerequisites

- Node.js 16+ (recommend 18+)
- npm 8+ or yarn
- Git
- Code editor (VS Code recommended)

### Initial Setup

1. **Clone/Navigate to project:**

```bash
cd aura-digitals-web
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create environment file:**

```bash
cp .env.example .env
```

4. **Update .env with your details:**

```env
VITE_WHATSAPP_NUMBER=919618878362
VITE_COMPANY_NAME=Aura Digitals
VITE_COMPANY_LOCATION=Visakhapatnam, India
```

5. **Start development server:**

```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## 📝 Development Workflow

### Adding a New Section

1. **Create component in organisms:**

```bash
src/components/organisms/MySection.jsx
```

2. **Create component:**

```jsx
import React from "react";
import { Heading, Text } from "../atoms";

const MySection = () => {
  return (
    <section id="my-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Heading as="h2" size="lg">
          Title
        </Heading>
        <Text>Content here</Text>
      </div>
    </section>
  );
};

export default MySection;
```

3. **Add to organisms/index.js:**

```js
export { default as MySection } from "./MySection";
```

4. **Import and use in Home.jsx:**

```jsx
import { MySection } from "../components/organisms";

// In Home component:
<MySection />;
```

### Adding New Content

All text content is stored in `src/utils/constants.js`. To update:

1. **Edit constants.js:**

```js
export const MY_CONTENT = [
  { title: "Item 1", description: "..." },
  // ...
];
```

2. **Import and use in component:**

```jsx
import { MY_CONTENT } from "../../utils/constants";

{
  MY_CONTENT.map((item) => <MyCard {...item} />);
}
```

### Creating New Atoms

1. **Create file:** `src/components/atoms/MyAtom.jsx`
2. **Create component with similar structure to existing atoms**
3. **Export in atoms/index.js**
4. **Document in COMPONENT_API.md**

### Creating New Molecules

1. **Create file:** `src/components/molecules/MyMolecule.jsx`
2. **Combine atoms to create reusable molecule**
3. **Export in molecules/index.js**

---

## 🎨 Styling Guidelines

### Using Tailwind CSS

**Mobile-first approach:**

```jsx
// Good ✓
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Base: 1 column, medium: 2 columns, large: 3 columns */}
</div>

// Spacing scale
<div className="p-4 md:p-8 lg:p-12"> {/* padding */}
<div className="mt-6 lg:mt-12"> {/* margin-top */}
<div className="gap-4 md:gap-8"> {/* gap */}
```

### Color Usage

**Primary brand color (Purple):**

```jsx
className = "bg-primary-600 text-primary-700 hover:bg-primary-700";
```

**Semantic colors:**

```jsx
className = "bg-green-100 text-green-700"; // Success
className = "bg-yellow-100 text-yellow-700"; // Warning
className = "bg-red-100 text-red-700"; // Error
className = "bg-gray-100 text-gray-700"; // Neutral
```

### Common Patterns

**Centered container:**

```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/* Content */}</div>
```

**Section padding:**

```jsx
<section className="py-16 md:py-24">
  {/* py-16 on mobile, py-24 on medium+ screens */}
</section>
```

---

## 🔧 Common Development Tasks

### Update WhatsApp Number

Edit `.env`:

```env
VITE_WHATSAPP_NUMBER=919876543210
```

### Add New Service

1. **Edit constants.js:**

```js
export const SERVICES = [
  // ... existing services
  {
    id: "new-service",
    title: "New Service",
    description: "Description here",
    icon: "FaNewIcon",
  },
];
```

2. **Services section automatically renders all services**

### Change Brand Colors

1. **Edit tailwind.config.js:**

```js
colors: {
  primary: {
    600: '#YOUR_COLOR',
    700: '#YOUR_COLOR_DARKER',
    // ...
  }
}
```

2. **Rebuild to see changes**

### Add New Navigation Link

1. **Edit constants.js:**

```js
export const NAVIGATION_ITEMS = [
  // ... existing items
  { label: "New Page", href: "#new-page" },
];
```

2. **Create corresponding section with matching id**

### Enable React Router (Multi-Page)

1. **Uncomment in App.jsx:**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ServicesPage, AboutPage, ContactPage } from "./pages";

// Uncomment the BrowserRouter section
```

2. **Create new pages in pages/ folder**

---

## 🧪 Testing & QA

### Browser Testing

Test across browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest on Mac)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Responsiveness Testing

Test at breakpoints:

- 320px (mobile)
- 640px (sm)
- 768px (md / tablet)
- 1024px (lg)
- 1280px (xl)
- 1920px (2xl desktop)

### WhatsApp Testing

1. **Click WhatsApp button**
2. **Verify message is pre-filled correctly**
3. **Ensure it opens in new tab**
4. **Test on both desktop and mobile**

### Performance Testing

**Local Lighthouse audit:**

```bash
npm run build
npm run preview
# Open DevTools > Lighthouse, run audit
```

**Target scores:**

- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

## 📦 Building for Production

### Build process:

```bash
npm run build
```

This creates `dist/` folder with optimized files:

- `index.html` - Minified HTML
- `assets/index-[hash].css` - Minified CSS
- `assets/index-[hash].js` - Minified JavaScript

### Build stats from production:

- HTML: 0.76 KB
- CSS: 14.85 KB (gzipped: 3.35 KB)
- JS: 171.78 KB (gzipped: 55.70 KB)
- **Total: ~60 KB gzipped** ✓ Excellent for web

### Preview production build:

```bash
npm run preview
```

---

## 🚀 Deployment Options

### Deploy to Netlify

1. **Create Netlify account**

2. **Connect GitHub repository**

3. **Set build settings:**

```
Build command: npm run build
Publish directory: dist
```

4. **Set environment variables:**

```
VITE_WHATSAPP_NUMBER=919618878362
VITE_COMPANY_NAME=Aura Digitals
VITE_COMPANY_LOCATION=Visakhapatnam, India
```

5. **Deploy**

### Deploy to Vercel

1. **Import project on Vercel**

2. **Framework: Vite**

3. **Build & environment settings auto-configured**

4. **Add environment variables in Vercel dashboard**

### Deploy to GitHub Pages

1. **Update vite.config.js:**

```js
export default defineConfig({
  base: "/repo-name/", // if not root domain
});
```

2. **Build:**

```bash
npm run build
```

3. **Push dist folder (or use CI/CD)**

---

## 🔒 Security Best Practices

### Environment Variables

- Never commit `.env` file (it's in .gitignore)
- Use `.env.example` as template
- Keep secrets/tokens safe in CI/CD

### WhatsApp Integration

- Phone number is public (OK - WhatsApp business numbers are public)
- No sensitive data in pre-filled messages
- Links are standard HTTPS (wa.me)

### Dependencies

- Keep dependencies updated: `npm update`
- Audit for vulnerabilities: `npm audit`
- Review new versions before updating

---

## 📊 Analytics & Monitoring

### Add Google Analytics

1. **Install package:**

```bash
npm install @react-ga/core @react-ga/page-view
```

2. **Initialize in main.jsx or App.jsx**

3. **Track events:**

```js
// Example: Track WhatsApp clicks
handleWhatsAppClick = () => {
  ReactGA.event({
    category: "engagement",
    action: "whatsapp_click",
    label: "Hero CTA",
  });
};
```

### SEO Considerations

- ✓ Meta tags in index.html
- ✓ Semantic HTML
- ✓ Alt text on images
- ✓ Mobile responsive
- ✓ Fast load time

Add more metadata as needed in `index.html`.

---

## 🐛 Debugging

### Common Issues

**Build fails:**

```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Changes not reflecting:**

- Clear browser cache (Cmd+Shift+R)
- Restart dev server
- Clear .vite cache: `rm -rf .vite`

**WhatsApp button not working:**

- Check .env has correct VITE_WHATSAPP_NUMBER
- Ensure message is URL encoded properly
- Test link directly: `wa.me/919618878362?text=hello`

**Styling issues:**

- Check Tailwind content config includes all files
- Restart dev server after config changes
- Inspect element to see applied classes

---

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Responsive Design Tips](https://web.dev/responsive-web-design-basics/)

---

## 📞 Support & Maintenance

### Regular Maintenance

- Update dependencies monthly
- Run security audits
- Monitor performance metrics
- Check for broken links/resources

### Content Updates

- Update text in `utils/constants.js`
- Update brand info in `.env`
- Update social links in constants
- Rebuild and deploy

### Adding New Features

Follow the component creation guides above for:

- New services
- New sections
- Additional pages (with React Router)
- New integrations (email, CRM, etc.)

---

Version: 1.0  
Last Updated: February 2026
