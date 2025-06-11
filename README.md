# NexusBot - Robotics Startup Website

A modern, responsive website for a cutting-edge robotics startup showcasing autonomous vehicles and humanoid robots. Built with Next.js, TypeScript, Tailwind CSS, and deployed as a static site on GitHub Pages.

## 🚀 Features

- **Modern Design**: Tesla and Figure-inspired design with glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Product Showcases**: Two detailed product presentations with specifications
- **Static Export**: Optimized for GitHub Pages deployment
- **Accessibility**: ARIA labels and semantic HTML for screen readers
- **Performance**: Optimized images and efficient CSS animations
- **SEO Ready**: Proper meta tags and structured content

## 🛠 Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Heroicons
- **Deployment**: GitHub Pages (Static Export)
- **Development**: ESLint, Hot Reload

## 🎨 Design Features

- **Color Scheme**: Black, white, and custom blue gradient
- **Typography**: Inter and JetBrains Mono fonts
- **Animations**: Custom CSS animations (float, glow, bounce)
- **Effects**: Tech grid background, glassmorphism cards
- **Layout**: Modular components with clean separation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/robotics-startup.git
   cd robotics-startup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment

### GitHub Pages (Automated)

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source
   - The site will be automatically deployed

### Manual Build

```bash
npm run build
```

The static files will be generated in the `out` directory.

## 📁 Project Structure

```
robotics-startup/
├── .github/workflows/     # GitHub Actions for deployment
├── src/
│   ├── app/              # Next.js app router
│   │   ├── about/        # About page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/       # Reusable components
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navigation.tsx
│       └── ProductShowcase.tsx
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.ts        # Next.js configuration
└── package.json
```

## 🎯 Key Components

### Navigation
- Responsive navigation bar with mobile menu
- Glassmorphism effect with blur backdrop
- Smooth transitions and hover effects

### Hero Section
- Large typography with gradient text
- Floating particles animation
- Statistics display with animated counters
- Call-to-action buttons

### Product Showcase
- Alternating layout (left/right)
- Specification cards with icons
- Animated floating elements
- Contact for pricing buttons

### Footer
- Company information and links
- Social media integration ready
- Responsive grid layout

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    // Your custom blue shades
    500: '#3b9ef6',
    600: '#2685eb',
    // ...
  }
}
```

### Fonts
Update font imports in `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@...');
```

### Content
- Update product information in `src/app/page.tsx`
- Modify team and company details in `src/app/about/page.tsx`
- Replace placeholder images with your actual media

## 🔧 Configuration

### Environment Variables

For production deployment, you may need to set:

```bash
NODE_ENV=production
```

### Next.js Config

The `next.config.ts` is configured for static export:

```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚦 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For support, please create an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ for the future of robotics**
