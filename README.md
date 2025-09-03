# Treasure Coast Realty Group - Brand Guidelines Portal

A professional brand guidelines portal built with Next.js 14, featuring the complete visual identity system for Treasure Coast Realty Group.

## 🏗️ Project Overview

This is a brand guidelines portal designed specifically for Treasure Coast Realty Group, providing access to:
- **Brand Guidelines** - Complete visual identity system and usage instructions
- **Logo Assets** - High-quality logo files in various formats
- **Color Palette** - Professional color scheme with hex codes and usage guidelines
- **Typography** - Font specifications and hierarchy guidelines
- **Download Resources** - Complete brand kit for consistent application

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom brand colors
- **Fonts**: Google Fonts (Inter)
- **Icons**: Lucide React
- **Deployment**: Vercel (configured)
- **Security**: No-index headers for private access

## 📁 Project Structure

```
tcrg-portal/
├── src/
│   ├── app/
│   │   ├── brandkit/            # Brand guidelines page
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout with fonts & SEO
│   │   └── page.tsx             # Main landing page
├── tailwind.config.ts           # Tailwind + custom brand colors
├── vercel.json                 # Deployment & security headers
└── package.json                # Dependencies
```

## 🎨 Brand Colors

The portal uses Treasure Coast Realty Group's official brand colors:

### Primary Colors
- **Ocean Navy**: `#10254F` - Primary brand color for headers, navigation, and key brand elements
- **Coastal Gold**: `#B2935D` - Accent color for highlights, buttons, and call-to-action elements

### Supporting Colors
- **Charcoal**: `#1D1D1F` - Primary text color and sophisticated dark UI elements
- **Cloud**: `#F5F5F7` - Background color for sections and subtle UI elements
- **Off White**: `#FAFAFA` - Light backgrounds
- **Text Gray**: `#86868B` - Secondary text and subtle elements

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd tcrg-portal
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📱 Key Features

### 1. Landing Page (`/`)
- Professional company introduction
- Mission statement and values
- Quick access to brand resources
- Clean, modern design

### 2. Brand Guidelines (`/brandkit`)
- **Logo Showcase** - Official Treasure Coast Realty Group logo with usage guidelines
- **Color Palette** - Complete color system with hex codes and usage instructions
- **Typography** - Inter font specifications and hierarchy examples
- **Download Section** - Access to brand assets and resources
- **Usage Guidelines** - Do's and don'ts for brand consistency

### 3. Responsive Design
- Mobile-first approach
- Works perfectly on all devices
- Fast loading and optimized performance
- Modern, professional aesthetic

## 🎯 Customization Guide

### Updating Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'navy': '#10254F',
  'gold': '#B2935D',
  'charcoal': '#1D1D1F',
  // Add or modify colors here
}
```

### Adding New Pages
1. Create a new folder in `/src/app/`
2. Add a `page.tsx` file
3. Use the existing layout structure
4. Follow the established design patterns

### Updating Content
- **Company Information**: Edit `src/app/page.tsx` for landing page content
- **Brand Guidelines**: Edit `src/app/brandkit/page.tsx` for brand kit content
- **Logo**: Update the Google Drive URL in the brand kit page
- **Typography**: Modify font imports in `src/app/layout.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables are handled automatically

### Manual Deployment
```bash
npm run build
# Deploy the 'out' folder to your hosting provider
```

## 📊 Performance Optimizations

- **Next.js Image Optimization**: All images use `next/image`
- **Font Optimization**: Google Fonts with `display: swap`
- **Code Splitting**: Automatic with Next.js App Router
- **Static Generation**: Pre-rendered pages for better performance
- **Responsive Design**: Mobile-first approach with Tailwind

## 🔧 Maintenance

### Regular Updates
- Update dependencies monthly
- Review and update brand guidelines content
- Refresh logo and brand assets
- Update company information as needed
- Review and update color palette if brand evolves

### Content Updates
- **Logo**: Update Google Drive URL in brand kit page
- **Company Info**: Modify landing page content
- **Brand Guidelines**: Update usage instructions and examples
- **Colors**: Adjust color palette in Tailwind config if needed

## 📞 Support & Contact

For technical support or questions about this portal:
- Review this README first
- Check the component files for implementation details
- Ensure all dependencies are up to date
- Verify logo and asset URLs are accessible

## 📝 License

This project is proprietary to Treasure Coast Realty Group. All rights reserved.

---

**Built with ❤️ for Treasure Coast Realty Group**

*"Building Relationships, Building Community"*
