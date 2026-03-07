# 🚀 Quick Start Guide - CleanPro Landing Page

## Getting Started in 3 Steps

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start Development Server

```bash
npm run dev
```

### 3️⃣ Open in Browser

Navigate to: **http://localhost:3000**

---

## 📁 Project Overview

This is a premium SaaS landing page for **CleanPro** - a laundry service startup.

### ✨ Key Features

- ✅ Next.js 14 with App Router
- ✅ Tailwind CSS for styling
- ✅ Framer Motion animations
- ✅ Fully responsive mobile-first design
- ✅ Glassmorphism UI elements
- ✅ Video backgrounds with fallbacks
- ✅ TypeScript for type safety

### 📱 Sections

1. **Navbar** - Sticky navigation with blur effect
2. **Hero** - Full-screen with video background & floating product
3. **Trust Section** - Social proof with avatars
4. **Features** - 3 service highlights
5. **Showcase Card** - Statistics display
6. **How It Works** - 3-step process
7. **Testimonials** - Customer reviews
8. **Pricing** - 3-tier pricing plans
9. **Final CTA** - Call-to-action with gradient
10. **Footer** - Links and newsletter

---

## 🎨 Design System

### Colors

- **Pastel Blue**: `#d7ecff`
- **Pastel Peach**: `#ffd9c7`
- **Gradients**: Blue-Purple, Pink-Orange

### Typography

- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive from mobile to desktop

### Components

- Glass cards with backdrop blur
- Smooth hover animations
- Scroll-triggered reveals
- Floating elements

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Create optimized production build
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 📦 Assets Included

All media assets are in `/public/assets/`:

- `hero-bg.mp4` - Main background video
- `floating-shirt.mp4` - Product animation
- `hero-shirt.jpeg` - Hero product image
- `folded-stack.jpeg` - Showcase image
- `avatars.jpeg` - Customer trust avatars
- `minimal-icons.jpeg` - Decorative elements
- `soft-gradient.jpeg` - Background fallback

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Or use:

- Netlify
- AWS Amplify
- DigitalOcean
- Any Node.js hosting

---

## 💡 Tips

1. **Performance**: Videos are optimized, images use Next.js Image component
2. **SEO**: Metadata configured in `app/layout.tsx`
3. **Animations**: All powered by Framer Motion
4. **Responsive**: Mobile-first design with Tailwind breakpoints
5. **Glassmorphism**: Custom utility classes `.glass` and `.glass-card`

---

## 📞 Need Help?

Check the full [README.md](./README.md) for detailed documentation.

---

**Happy coding! 🎉**
