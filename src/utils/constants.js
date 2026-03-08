// Brand-related constants
export const APP_NAME = import.meta.env.VITE_COMPANY_NAME || "Aura Digitals";
export const APP_LOCATION =
  import.meta.env.VITE_COMPANY_LOCATION || "Visakhapatnam, India";
export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || "919618878362";

// Default WhatsApp message
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Aura Digitals, I'm interested in building my digital presence and would like to know more about your services.";

// Navigation items
export const NAVIGATION_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

// Services data
export const SERVICES = [
  {
    id: "social-media",
    title: "Social Media Management",
    description:
      "We manage your social media to create a consistent, professional brand presence that builds trust, visibility, and long-term engagement with your audience.",
    icon: "FaShareAlt",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "We craft content that reflects your brand's personality — from visuals to messaging — helping you stand out and connect authentically with your customers.",
    icon: "FaPen",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Performance-focused campaigns designed to increase reach, drive engagement, and convert attention into real business opportunities.",
    icon: "FaChartLine",
  },
  {
    id: "seo-services",
    title: "SEO Services",
    description:
      "We improve your online visibility so your business is discoverable when customers search for your services — sustainably and organically.",
    icon: "FaSearch",
  },
  {
    id: "web-design",
    title: "Website Design & Development",
    description:
      "Clean, modern websites built to represent your brand, communicate clearly, and convert visitors into inquiries.",
    icon: "FaCode",
  },
];

// Why Us features
export const WHY_US_FEATURES = [
  {
    title: "Content-First Approach",
    description:
      "We believe strong brands are built through consistent, high-quality content.",
  },
  {
    title: "No Templates, Only Strategy",
    description:
      "Every brand is different — we create custom strategies, not copy-paste solutions.",
  },
  {
    title: "Young & Dedicated Team",
    description: "Fresh thinking, high energy, and a strong work ethic.",
  },
  {
    title: "Affordable, Transparent Pricing",
    description: "Premium quality without inflated agency costs.",
  },
  {
    title: "Local Understanding, Global Standards",
    description:
      "We understand Vizag businesses while delivering modern, global-level execution.",
  },
];

// Process steps
export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Understand",
    description:
      "We take time to understand your business, goals, and audience.",
  },
  {
    number: 2,
    title: "Build",
    description:
      "We create content, platforms, and strategies aligned with your brand identity.",
  },
  {
    number: 3,
    title: "Execute",
    description:
      "Campaigns, content, and optimizations are rolled out consistently.",
  },
  {
    number: 4,
    title: "Grow",
    description: "We refine, scale, and improve for long-term digital growth.",
  },
];

// Industries we serve
export const INDUSTRIES = [
  "Startups",
  "Local Businesses",
  "Retail Brands",
  "Educational Institutions",
  "Real Estate",
  "Service-Based Businesses",
  "SMEs across industries",
];

// Social media links
export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/aura.digitals.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: "FaInstagram",
  },
];
