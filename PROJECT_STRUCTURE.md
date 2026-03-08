# Project Structure & Architecture

Comprehensive guide to the project structure, file organization, and architectural decisions.

## 📁 Directory Structure

```
aura-digitals-web/
│
├── public/                      # Static assets (if added)
│
├── src/                         # Source code
│   ├── components/
│   │   ├── atoms/              # Smallest, reusable UI elements
│   │   │   ├── Button.jsx      # Button component
│   │   │   ├── Heading.jsx     # Heading element (h1-h6)
│   │   │   ├── Text.jsx        # Text/paragraph element
│   │   │   ├── Icon.jsx        # Icon wrapper
│   │   │   ├── Badge.jsx       # Badge/tag component
│   │   │   └── index.js        # Barrel export
│   │   │
│   │   ├── molecules/          # Groups of atoms
│   │   │   ├── ServiceCard.jsx # Service card (icon + title + desc)
│   │   │   ├── WhatsAppButton.jsx # WhatsApp CTA button
│   │   │   ├── ProcessStep.jsx  # Step in process flow
│   │   │   ├── FeatureItem.jsx  # Feature with icon (used in why-us)
│   │   │   ├── SocialLink.jsx   # Social media link
│   │   │   └── index.js         # Barrel export
│   │   │
│   │   ├── organisms/          # Full sections/components
│   │   │   ├── Hero.jsx        # Hero section
│   │   │   ├── About.jsx       # About company
│   │   │   ├── Services.jsx    # Services showcase
│   │   │   ├── WhyUs.jsx       # Why choose us
│   │   │   ├── Process.jsx     # How we work
│   │   │   ├── Industries.jsx  # Industries we serve
│   │   │   ├── CTASection.jsx  # Final CTA section
│   │   │   └── index.js        # Barrel export
│   │   │
│   │   └── common/             # Shared across all pages
│   │       ├── Header.jsx      # Navigation header
│   │       ├── Footer.jsx      # Footer with links
│   │       └── index.js        # Barrel export
│   │
│   ├── pages/                  # Page components
│   │   ├── Home.jsx            # Main landing page
│   │   ├── Services.jsx        # Services detail page (future)
│   │   ├── About.jsx           # About detail page (future)
│   │   ├── Contact.jsx         # Contact page (future)
│   │   └── index.js            # Barrel export
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useWhatsAppLink.js  # Generate WhatsApp links
│   │   ├── useScrollToSection.js # Smooth scroll navigation
│   │   ├── useIsMobile.js      # Mobile detection
│   │   └── index.js            # Barrel export
│   │
│   ├── services/               # Business logic layers
│   │   └── whatsappService.js  # WhatsApp operations
│   │
│   ├── utils/                  # Utility functions
│   │   ├── constants.js        # All content & config constants
│   │   ├── helpers.js          # Helper functions
│   │   └── validation.js       # Form/data validation (future)
│   │
│   ├── styles/                 # Global styles
│   │   └── index.css           # Global CSS with Tailwind imports
│   │
│   ├── App.jsx                 # Root component
│   └── main.jsx                # Entry point
│
├── index.html                  # HTML template
│
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config (for Tailwind)
│
├── .env                        # Environment variables (local)
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies & scripts
├── package-lock.json           # Locked dependency versions
│
├── README.md                   # Project README
├── COMPONENT_API.md            # Component documentation
├── DEVELOPMENT_GUIDE.md        # Dev/deployment guide
└── PROJECT_STRUCTURE.md        # This file

```

## 🏗️ Architectural Patterns

### Atomic Design Pattern

Components are organized by complexity level:

```
ATOMS (Smallest)
  ↓ (composed of)
MOLECULES (Groups)
  ↓ (composed of)
ORGANISMS (Sections)
  ↓ (used in)
PAGES (Full pages)
```

**Benefits:**

- Reusability: Atoms used across multiple molecules
- Maintainability: Changes to atoms ripple through
- Scalability: Easy to add new components
- Consistency: Same building blocks everywhere

### Component Hierarchy Example

```
Header (organism/common)
├── Heading (atom) - "Aura Digitals"
├── Navigation (built from buttons)
└── MobileMenu (logic with atoms)

Hero (organism)
├── Heading (atom)
├── Text (atom)
├── WhatsAppButton (molecule)
│   ├── Button (atom)
│   └── Icon (atom)
└── Button (atom)
```

### Data Flow

```
Constants (src/utils/constants.js)
  ↓
Components (organisms import and use)
  ↓
Hooks (components use hooks for logic)
  ↓
Services (hooks/components use services)
```

## 📊 File Responsibility Matrix

| Component     | Responsibility                                    |
| ------------- | ------------------------------------------------- |
| **Atoms**     | Single UI element, no business logic, reusable    |
| **Molecules** | Combine atoms, minimal logic, reusable patterns   |
| **Organisms** | Full section, imports molecules, displays content |
| **Pages**     | Combines organisms, route handlers                |
| **Hooks**     | React logic (state, effects, callbacks)           |
| **Services**  | Business logic (API calls, formatting)            |
| **Utils**     | Helper functions, constants                       |
| **Constants** | All text content, config, static data             |

## 🔄 Data Flow Through App

### Content Display Flow

```
constants.js (SERVICES, WHY_US_FEATURES, etc.)
  ↓
organisms/Services.jsx (maps through SERVICES)
  ↓
molecules/ServiceCard.jsx (renders each service)
  ↓
atoms/Heading, Text, Icon (display content)
```

### User Interaction Flow

```
User clicks WhatsAppButton
  ↓
useWhatsAppChat hook triggered
  ↓
generateWhatsAppLink function called
  ↓
encodeURIComponent encodes message
  ↓
window.open('wa.me/...') opens WhatsApp
```

## 🎯 Design Principles

### 1. Single Responsibility

Each component has one purpose:

- Button: renders a styled button
- Hero: renders hero section
- Not mixed concerns

### 2. Composition Over Inheritance

Build complex UIs from simpler parts:

```jsx
// Good ✓
<Hero>
  <Heading />
  <Text />
  <WhatsAppButton />
</Hero>

// Avoid ✗
class HeroWithText extends Hero { ... }
```

### 3. Props Over Hardcoding

Make components flexible:

```jsx
// Good ✓
<Button variant="primary" size="lg">Click</Button>

// Avoid ✗
<PrimaryLargeButton>Click</PrimaryLargeButton>
```

### 4. Constants for Content

Keep text in constants.js, not hardcoded:

```jsx
// Good ✓
import { SERVICES } from '../../utils/constants';
SERVICES.map(s => <ServiceCard {...s} />)

// Avoid ✗
const services = [{...}, {...}]; // Hardcoded
```

### 5. Separation of Concerns

```
Components: UI rendering
Hooks: State & effects
Services: Business logic
Utils: Helper functions
Constants: Static data
```

## 🔌 Extension Points

### Adding a New Page

1. Create `src/pages/NewPage.jsx`
2. Import organisms needed
3. Combine in layout
4. Add route to App.jsx (when using Router)

### Adding New Organism Section

1. Create `src/components/organisms/NewSection.jsx`
2. Import and compose atoms/molecules
3. Export from organisms/index.js
4. Use in Home.jsx

### Adding New Data/Content

1. Add to `src/utils/constants.js`
2. Import in organism
3. Map/render with components

## 📦 Import/Export Strategy

### Barrel Exports (index.js files)

Simplifies imports:

```jsx
// Instead of:
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

// Use:
import { Button, Heading, Text } from "../atoms";
```

### Relative vs Absolute

All imports use relative paths for flexibility:

```jsx
import { SERVICES } from "../../utils/constants";
// Could add path alias in future:
import { SERVICES } from "@/utils/constants";
```

## 🎨 Styling Architecture

### Tailwind CSS Structure

```
index.css (global resets)
  ↓
tailwind.config.js (custom theme)
  ↓
Component className strings
  ↓
PostCSS builds final CSS
```

### Custom Colors

Primary color is configurable in `tailwind.config.js`:

```js
colors: {
  primary: {
    50: '#f8f5ff',   // lightest
    600: '#7c3aed',  // main
    900: '#2d1045',  // darkest
  }
}
```

## 🚀 Performance Optimizations

### Current

- ✓ Vite for fast builds
- ✓ Minified CSS/JS
- ✓ Tree-shakeable imports
- ✓ React.StrictMode for dev warnings

### Future Opportunities

- Lazy load sections with React.lazy()
- Image optimization/lazy loading
- Code splitting by route
- Service Worker for offline support

## 🔒 Security Practices

### Secure by Default

- No hardcoded secrets (use .env)
- No sensitive data in components
- External links have `rel="noopener noreferrer"`
- Input validation ready (helpers.js)

### Environment Variables

```env
VITE_WHATSAPP_NUMBER=919618878362  # Public
VITE_COMPANY_NAME=Aura Digitals    # Public
# Secret values would go here (not used currently)
```

## 📈 Scalability

### Current State (Landing Page)

- Single-page application
- All content in constants
- No backend needed

### Future Growth Paths

1. **Add backend:**
   - Create services/api.js
   - Fetch data from server
   - Update components to use useEffect

2. **Add database:**
   - Contactform submissions
   - Case study data
   - User testimonials

3. **Multi-language:**
   - Create i18n context
   - Translate constants.js
   - Add language switcher

4. **CMS Integration:**
   - Fetch content from Contentful/Strapi
   - Dynamic page generation

## 📝 Naming Conventions

### Files

- Components: PascalCase (Button.jsx)
- Utils/services: camelCase (whatsappService.js)
- Styles: camelCase (global.css)

### Components

- React components: PascalCase
- Props: camelCase
- Constant values: SCREAMING_SNAKE_CASE

### CSS Classes

- Use Tailwind utilities
- No custom CSS classes unless necessary
- Scoped within component

## 🔗 Dependencies Map

```
App
├── pages/Home
│   ├── organisms (import from)
│   │   ├── Hero
│   │   │   ├── molecules (WhatsAppButton, ProcessStep)
│   │   │   ├── atoms (Button, Heading, Text)
│   │   │   ├── hooks (useScrollToSection, useWhatsAppChat)
│   │   │   └── constants
│   │   ├── About
│   │   ├── Services
│   │   ├── etc...
│   └── utils/constants
├── common/Header
│   ├── atoms
│   ├── molecules
│   ├── hooks
│   └── constants
└── common/Footer
    ├── molecules
    ├── atoms
    └── constants
```

---

Version: 1.0
Last Updated: February 2026
