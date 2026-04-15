# Aura Digitals - Digital Marketing Agency Landing Page

A modern, responsive React landing page for Aura Digitals, a Visakhapatnam-based digital marketing agency.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **WhatsApp Integration**: One-click WhatsApp chat with pre-filled messages
- **Atomic Components**: Scalable component architecture (atoms → molecules → organisms)
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Performance Optimized**: Built with Vite for fast load times
- **SEO Friendly**: Semantic HTML and meta tags
- **Future-Ready**: Structure supports multi-page expansion with React Router

## 📋 Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI elements (Button, Heading, Text, Icon, Badge)
│   ├── molecules/      # Combinations of atoms (ServiceCard, WhatsAppButton, etc.)
│   ├── organisms/      # Complex sections (Hero, Services, About, etc.)
│   └── common/         # Shared components (Header, Footer)
├── pages/              # Page components (Home, Services, About, Contact)
├── hooks/              # Custom React hooks (useWhatsAppLink, useScrollToSection, useIsMobile)
├── services/           # Business logic services (whatsappService)
├── utils/              # Helper functions and constants
├── styles/             # Global CSS and Tailwind configuration
└── index.css          # Global styles
```

## 🛠️ Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router v6**: Client-side routing (prepared for future use)
- **React Icons**: Icon library

## 📦 Installation

1. Clone or navigate to the project:

```bash
cd aura-digitals-web
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

4. Update `.env` with your WhatsApp number:

```
VITE_WHATSAPP_NUMBER=919618878362
VITE_COMPANY_NAME=Aura Digitals
VITE_COMPANY_LOCATION=Visakhapatnam, India
```

## 🚀 Available Scripts

### Development Server

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally

## 📱 Sections

### Hero

- Main headline and subheading
- Dual CTAs: WhatsApp Now and Contact Us
- Trust indicator

### About

- Company introduction
- Brand philosophy
- Key highlights (3-column stats)

### Services (5 services)

- Social Media Management
- Content Creation
- Digital Marketing
- SEO Services
- Website Design & Development

### Why Us

- Content-First Approach
- No Templates, Only Strategy
- Young & Dedicated Team
- Affordable, Transparent Pricing
- Local Understanding, Global Standards

### Process

- 4-step workflow visualization
- Understand → Build → Execute → Grow

### Industries

- Target industries and niches
- List of served sectors

### Call-to-Action

- Final conversion section
- WhatsApp CTA

### Footer

- Brand information
- Quick links
- Contact CTA
- Social media links

## 🔗 WhatsApp Integration

The landing page includes WhatsApp integration through:

1. **WhatsAppButton Component**: Reusable button component
2. **useWhatsAppChat Hook**: Custom hook for WhatsApp link generation
3. **WhatsAppService**: Service layer for WhatsApp operations

Sample usage:

```jsx
<WhatsAppButton
  label="Chat on WhatsApp"
  message="Hi, I'm interested in your services"
  phoneNumber="919618878362"
/>
```

The WhatsApp link opens in a new tab with a pre-filled message.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize brand colors:

```js
colors: {
  primary: {
    600: '#7c3aed',  // Purple
    // ... other shades
  }
}
```

### Content

All text content is stored in `src/utils/constants.js` for easy updates.

### Services

Modify `SERVICES` array in `src/utils/constants.js` to add/remove services.

## 📊 Component Hierarchy

```
App
├── Header (sticky navigation)
├── Home (page container)
│   ├── Hero
│   ├── About
│   ├── Services (uses ServiceCard molecules)
│   ├── WhyUs (uses FeatureItem molecules)
│   ├── Process (uses ProcessStep molecules)
│   ├── Industries (uses Badge atoms)
│   └── CTASection
└── Footer (with SocialLink molecules)
```

## 🔄 Future Enhancements

1. **Multi-Page Routing**: Uncomment React Router setup in `App.jsx`
2. **Case Studies**: Add Services page with detailed case studies
3. **Blog**: Implement blog functionality with dynamic content
4. **Analytics**: Integrate Google Analytics with custom events
5. **Form**: Add contact form with email integration
6. **Dark Mode**: Toggle dark/light theme support
7. **Animations**: Add scroll animations and transitions

## ♿ Accessibility

- Semantic HTML tags (`<header>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Color contrast meets WCAG standards
- Keyboard navigation support

## ⚡ Performance

- **Vite**: Fast HMR (Hot Module Replacement) in development
- **Code Splitting**: Ready for lazy loading with React.lazy()
- **CSS Optimization**: Tailwind purges unused styles
- **Image Optimization**: Support for lazy loading
- Target metrics:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1

## 🔐 Environment Variables

```env
VITE_WHATSAPP_NUMBER=919618878362          # WhatsApp business number
VITE_COMPANY_NAME=Aura Digitals            # Company name
VITE_COMPANY_LOCATION=Visakhapatnam, India # Company location
```

## 📝 Notes

- All styling uses Tailwind CSS utilities
- No external UI component libraries to keep bundle small
- React Icons library for SVG icons
- Fully responsive from 320px (mobile) to 1920px+ (desktop)

## 🤝 Contributing

For changes or improvements:

1. Create a new branch
2. Make your changes
3. Test responsiveness across devices
4. Submit changes for review

## 📄 License

Project created for Aura Digitals

## 📞 Support

For questions or issues, contact through:

- WhatsApp: 9618878362
- Website: (add when deployed)

---

Built with ❤️ using React, Vite, and Tailwind CSS
