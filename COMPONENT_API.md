# Component API Documentation

Complete API reference for all components in the Aura Digitals landing page.

## Atoms (Base Components)

### Button

Basic button component with multiple variants and sizes.

**Props:**

- `children` (React.ReactNode) - Button text or content
- `variant` (string) - 'primary' | 'secondary' | 'outline' | 'ghost' - default: 'primary'
- `size` (string) - 'sm' | 'md' | 'lg' | 'xl' - default: 'md'
- `className` (string) - Additional CSS classes
- `disabled` (boolean) - Whether button is disabled - default: false
- `...props` - All standard HTML button attributes

**Example:**

```jsx
<Button variant="primary" size="lg">
  Click Me
</Button>
```

---

### Heading

Semantic heading component with size variants.

**Props:**

- `as` (string) - 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' - default: 'h1'
- `size` (string) - 'xs' | 'sm' | 'md' | 'lg' | 'xl' - default: 'md'
- `className` (string) - Additional CSS classes
- `children` (React.ReactNode) - Heading text
- `...props` - All standard HTML heading attributes

**Example:**

```jsx
<Heading as="h2" size="lg">
  Our Services
</Heading>
```

---

### Text

Paragraph/text component with size and color variants.

**Props:**

- `as` (string) - 'p' | 'span' | 'div' | 'article' etc. - default: 'p'
- `size` (string) - 'xs' | 'sm' | 'base' | 'lg' | 'xl' - default: 'base'
- `color` (string) - Tailwind color class - default: 'gray-700'
- `className` (string) - Additional CSS classes
- `children` (React.ReactNode) - Text content
- `...props` - All standard HTML element attributes

**Example:**

```jsx
<Text size="lg" color="gray-600">
  High-end digital marketing results at an affordable price
</Text>
```

---

### Icon

Wrapper for react-icons library icons.

**Props:**

- `name` (string) - Icon name (e.g., 'FaShareAlt', 'FaPen')
- `size` (number) - Icon size in pixels - default: 24
- `color` (string) - Icon color - default: 'currentColor'
- `className` (string) - Additional CSS classes
- `library` (string) - 'fa' | 'fi' - default: 'fa'
- `...props` - All standard React component props

**Example:**

```jsx
<Icon name="FaShareAlt" size={40} color="#7c3aed" />
```

---

### Badge

Tag/label component with multiple variants.

**Props:**

- `children` (React.ReactNode) - Badge text
- `variant` (string) - 'primary' | 'secondary' | 'success' | 'warning' | 'error' - default: 'primary'
- `size` (string) - 'sm' | 'md' | 'lg' - default: 'md'
- `className` (string) - Additional CSS classes
- `...props` - All standard HTML span attributes

**Example:**

```jsx
<Badge variant="primary" size="md">
  Startups
</Badge>
```

---

## Molecules (Component Groups)

### ServiceCard

Displays a single service with icon, title, and description.

**Props:**

- `title` (string) - Service title
- `description` (string) - Service description
- `icon` (string) - Icon name (e.g., 'FaShareAlt')
- `className` (string) - Additional CSS classes
- `...props` - All standard HTML div attributes

**Example:**

```jsx
<ServiceCard
  title="Social Media Management"
  description="Manage your social media presence..."
  icon="FaShareAlt"
/>
```

---

### WhatsAppButton

Button that opens WhatsApp chat with pre-filled message.

**Props:**

- `label` (string) - Button label - default: 'Chat on WhatsApp'
- `message` (string) - WhatsApp message - default: DEFAULT_WHATSAPP_MESSAGE
- `phoneNumber` (string) - WhatsApp number - default: WHATSAPP_NUMBER
- `variant` (string) - Button variant - default: 'primary'
- `size` (string) - Button size - default: 'md'
- `className` (string) - Additional CSS classes
- `showIcon` (boolean) - Show WhatsApp icon - default: true
- `...props` - All standard button attributes

**Example:**

```jsx
<WhatsAppButton
  label="Get Started Now"
  message="Hi, I want to know more about your services"
  size="lg"
/>
```

---

### ProcessStep

Displays a single step in a process flow.

**Props:**

- `number` (number) - Step number
- `title` (string) - Step title
- `description` (string) - Step description
- `className` (string) - Additional CSS classes
- `...props` - All standard HTML div attributes

**Example:**

```jsx
<ProcessStep
  number={1}
  title="Understand"
  description="We take time to understand your business..."
/>
```

---

### FeatureItem

Displays a feature with icon and description.

**Props:**

- `title` (string) - Feature title
- `description` (string) - Feature description
- `icon` (React.ReactNode) - Icon component - default: FaCheckCircle
- `className` (string) - Additional CSS classes
- `...props` - All standard HTML div attributes

**Example:**

```jsx
<FeatureItem
  title="Content-First Approach"
  description="We believe strong brands are built through consistent content"
/>
```

---

### SocialLink

Link to social media profile.

**Props:**

- `label` (string) - Social platform name
- `url` (string) - Social media URL
- `icon` (string) - Icon name (e.g., 'FaInstagram')
- `size` (number) - Icon size - default: 24
- `className` (string) - Additional CSS classes
- `...props` - All standard HTML anchor attributes

**Example:**

```jsx
<SocialLink
  label="Instagram"
  url="https://instagram.com/aura.digitals.in"
  icon="FaInstagram"
  size={24}
/>
```

---

## Organisms (Complex Sections)

### Hero

Main hero section with headline, subheading, and CTAs.

**Props:**
None (uses constants from utils/constants.js)

**Example:**

```jsx
<Hero />
```

**Content includes:**

- Main tagline "Building Brands Digitally"
- Subheading
- WhatsApp CTA and Contact CTA
- Trust indicator

---

### About

About section with company information.

**Props:**
None (uses constants)

**Contains:**

- Company description
- Brand philosophy
- 3-column stat highlights

---

### Services

Services showcase section with service cards grid.

**Props:**
None (uses SERVICES from constants)

**Features:**

- Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
- 5 service cards with icons
- Section heading and description

---

### WhyUs

Why choose us section with feature items.

**Props:**
None (uses WHY_US_FEATURES from constants)

**Contains:**

- 5 feature items with checkmarks
- Each with title and description

---

### Process

How we work section with process steps.

**Props:**
None (uses PROCESS_STEPS from constants)

**Features:**

- 4-step process visualization
- Numbered steps with descriptions
- Responsive grid layout

---

### Industries

Industries we serve section.

**Props:**
None (uses INDUSTRIES from constants)

**Contains:**

- Badge list of industries
- Supporting description text

---

### CTASection

Final call-to-action conversion section.

**Props:**
None (static content with WhatsApp CTA)

**Features:**

- Primary heading for conversion
- Descriptive text
- Large WhatsApp button
- Trust message

---

## Common Components

### Header

Sticky navigation header with mobile menu.

**Props:**

- Uses NAVIGATION_ITEMS from constants
- Uses APP_NAME from constants

**Features:**

- Logo/brand name on left
- Desktop navigation links
- Mobile hamburger menu
- Smooth scroll to sections
- Sticky positioning

---

### Footer

Footer with links, info, and social buttons.

**Props:**
None (uses constants for brand info and links)

**Contains:**

- Brand information
- Quick links
- Contact CTA
- Social media links
- Copyright notice

---

## Hooks

### useWhatsAppLink

Generate WhatsApp link with encoded message.

**Usage:**

```jsx
const link = useWhatsAppLink("919618878362", "Hello!");
// Returns: https://wa.me/919618878362?text=Hello%21
```

---

### useWhatsAppChat

Get WhatsApp link and click handler.

**Usage:**

```jsx
const { link, handleClick } = useWhatsAppChat();
return <button onClick={handleClick}>Chat</button>;
```

---

### useScrollToSection

Scroll to a section by ID.

**Usage:**

```jsx
const scrollToSection = useScrollToSection();
return (
  <button onClick={() => scrollToSection("services")}>Go to Services</button>
);
```

---

### useIsMobile

Detect if device is mobile.

**Usage:**

```jsx
const isMobile = useIsMobile();
return <div>{isMobile ? "Mobile" : "Desktop"}</div>;
```

---

## Services

### WhatsAppService

Service layer for WhatsApp operations.

**Methods:**

- `getChatLink(message?, phoneNumber?)` - Get WhatsApp link
- `openChat(message?, phoneNumber?)` - Open WhatsApp chat
- `getPhoneNumber()` - Get default phone number
- `getDefaultMessage()` - Get default message

**Usage:**

```jsx
import WhatsAppService from "@/services/whatsappService";

WhatsAppService.openChat("Hi!", "919618878362");
```

---

## Constants

See `src/utils/constants.js` for:

- Brand information
- Service definitions
- Feature descriptions
- Process steps
- Industries list
- Social links
- Navigation items

---

## Styling

All components use Tailwind CSS with custom Aura Digitals theme colors:

- Primary: Purple (#7c3aed)
- Dark: Gray shades
- Accent: Pink (#ec4899)

Refer to `tailwind.config.js` for complete color palette.
