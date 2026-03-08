# Quick Start Guide

Get up and running with the Aura Digitals landing page in 5 minutes.

## ⚡ 30-Second Quick Start

```bash
# Navigate to project
cd aura-digitals-web

# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser to http://localhost:5173
```

Done! You're running the site locally.

---

## 🎯 What's Included

✅ **Complete Landing Page**

- Hero section with CTAs
- About company info
- 5 Services with cards
- Why Us features
- 4-Step process
- Industries served
- Final CTA section
- Footer with social links

✅ **WhatsApp Integration**

- Click any button → Opens WhatsApp chat
- Pre-filled message with value proposition
- Works on mobile and desktop
- Customizable phone number & message

✅ **Fully Responsive**

- Mobile (320px)
- Tablet (768px)
- Desktop (1024px+)
- All tested and optimized

✅ **Component Library**

- 5 Atoms (Button, Heading, Text, Icon, Badge)
- 5 Molecules (ServiceCard, WhatsAppButton, etc.)
- 7 Organisms (sections)
- 2 Common layouts (Header, Footer)
- 3 Custom hooks
- Ready to extend

---

## 📂 Key Files to Know

| File                         | Purpose                             |
| ---------------------------- | ----------------------------------- |
| `src/App.jsx`                | Main app component                  |
| `src/pages/Home.jsx`         | Landing page sections               |
| `src/components/organisms/*` | Each section (Hero, Services, etc.) |
| `src/utils/constants.js`     | **All text content HERE**           |
| `src/components/atoms/*`     | Reusable UI elements                |
| `.env`                       | Configuration (WhatsApp number)     |
| `tailwind.config.js`         | Colors & theme                      |

---

## 🎨 Customizing Content

### Change Headline/Text

Edit `src/utils/constants.js`:

```javascript
// For hero section
export const HERO_TITLE = "Your New Headline";

// For services
export const SERVICES = [
  {
    title: "My Service",
    description: "My description",
    icon: "FaIcon",
  },
];
```

Then use in components:

```jsx
import { HERO_TITLE } from "../../utils/constants";
<Heading>{HERO_TITLE}</Heading>;
```

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    600: '#YourNewPrimaryColor',
    700: '#YourNewDarkColor',
  }
}
```

All components automatically update!

### Change WhatsApp Number

Edit `.env`:

```env
VITE_WHATSAPP_NUMBER=919999999999
```

### Add New Section

1. Create `src/components/organisms/NewSection.jsx`
2. Add content to `src/utils/constants.js`
3. Import in `src/pages/Home.jsx`
4. Add to layout:
   ```jsx
   <NewSection />
   ```

---

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder ready to deploy.

### Preview Production Build

```bash
npm run preview
```

Opens preview of production build at `http://localhost:5173`

### Deploy to Netlify (Recommended)

1. Push code to GitHub
2. Connect GitHub to Netlify
3. Netlify auto-detects Vite
4. Deploys automatically on push
5. Set environment variables in Netlify dashboard

### Deploy to Vercel

1. Import project on `vercel.com`
2. Vercel auto-detects Vite framework
3. Add environment variables
4. Deploy

---

## ✅ What to Check

### Mobile Responsiveness

- [ ] Open in mobile browser (or DevTools mobile view)
- [ ] Text is readable (not too small)
- [ ] Buttons are clickable
- [ ] Images scale properly
- [ ] No horizontal scroll

### WhatsApp Integration

- [ ] Click WhatsApp button
- [ ] New tab opens with wa.me link
- [ ] Message is pre-filled
- [ ] Works on both mobile and desktop

### Performance

- [ ] Page loads in < 3 seconds
- [ ] No console errors (F12 → Console)
- [ ] All images loaded
- [ ] Run Lighthouse audit (green scores)

### Content Accuracy

- [ ] All text matches PRD
- [ ] Phone number is correct
- [ ] Services listed correctly
- [ ] Social media links work

---

## 📱 Component Usage Examples

### Use WhatsAppButton

```jsx
import { WhatsAppButton } from "@/components/molecules";

<WhatsAppButton
  label="Get Started"
  message="Tell me about your services"
  size="lg"
/>;
```

### Use ServiceCard

```jsx
import { ServiceCard } from "@/components/molecules";

<ServiceCard
  title="Social Media"
  description="We manage your presence..."
  icon="FaShareAlt"
/>;
```

### Use Button

```jsx
import { Button } from "@/components/atoms";

<Button variant="primary" size="lg">
  Click Me
</Button>;
```

### Use Heading

```jsx
import { Heading } from "@/components/atoms";

<Heading as="h2" size="lg">
  Our Services
</Heading>;
```

---

## 🐛 Troubleshooting

| Issue                           | Solution                                                |
| ------------------------------- | ------------------------------------------------------- |
| **"Cannot find module"**        | Run `npm install` again                                 |
| **Changes not showing**         | Clear browser cache (Cmd+Shift+R) or restart dev server |
| **WhatsApp button not working** | Check `.env` has `VITE_WHATSAPP_NUMBER`                 |
| **Styles look broken**          | Restart dev server, clear `.vite` cache                 |
| **Build fails**                 | Delete `node_modules`, run `npm install`, try again     |

---

## 📚 Learn More

- **Component API**: See [COMPONENT_API.md](./COMPONENT_API.md)
- **Development Guide**: See [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)
- **Project Structure**: See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
- **Main README**: See [README.md](./README.md)

---

## 🎯 Next Steps

1. ✅ Run `npm run dev` (already done)
2. ✅ Open `http://localhost:5173` in browser
3. ✅ Click around, test WhatsApp button
4. ✅ Edit `src/utils/constants.js` to customize text
5. ✅ Build with `npm run build` when ready
6. ✅ Deploy to Netlify/Vercel

---

## 💡 Tips

### Keyboard Shortcuts

- **HMR**: Changes auto-reload (magic!)
- **React DevTools**: Install browser extension for component inspection
- **VS Code**: Install "ES7+ React/Redux/React-Native snippets" for faster coding

### Performance Tips

- Keep components small and focused
- Use `const` for components to prevent rerenders
- Lazy load images when you add them
- Monitor bundle size with `npm run build`

### Development Tips

- Keep all content in `constants.js` for easy updates
- Use Tailwind classes instead of custom CSS
- Name components after what they display
- Document complex logic with comments

---

## 📊 Project Stats

- **Build Size**: 171 KB (55 KB gzipped) - ⚡ Super fast!
- **Pages**: 1 fully built + 3 stub pages for future
- **Components**: 20+ reusable components
- **No Dependencies**: Only React, Vite, Tailwind (essentials)
- **Mobile Friendly**: 100% responsive
- **SEO Optimized**: Semantic HTML, meta tags

---

## 🤔 FAQ

**Q: Can I add a blog?**  
A: Yes! Create `pages/Blog.jsx`, add routes in `App.jsx` with React Router.

**Q: How do I add a contact form?**  
A: Create `components/organisms/ContactForm.jsx`, integrate with email service (Formspree, SendGrid, etc.)

**Q: Can I change colors?**  
A: Yes! Edit `tailwind.config.js` primary colors.

**Q: Multiple WhatsApp numbers?**  
A: Create separate buttons with different `phoneNumber` prop.

**Q: How to add Google Analytics?**  
A: Install `@react-ga/core`, initialize in `main.jsx`, track events.

---

## 🎉 You're All Set!

Your Aura Digitals landing page is ready to customize and deploy.

**Start with:**

```bash
npm run dev
```

Then edit `src/utils/constants.js` to make it truly yours!

Questions? Check the other documentation files or inspect the code - it's all well-commented.

Good luck! 🚀

---

**Still need help?**

- Check [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) for detailed setup
- Review [COMPONENT_API.md](./COMPONENT_API.md) for component usage
- See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for architecture details
