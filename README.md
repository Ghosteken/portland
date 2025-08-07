# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a comprehensive showcase of professional experience, projects, skills, and Web3 expertise.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode toggle
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed and SEO
- **Comprehensive Sections**:
  - Home with hero section and social links
  - About me with detailed background
  - Work experience timeline
  - Education history
  - Projects showcase with filtering
  - Skills & technologies with proficiency levels
  - Certificates gallery
  - Blog/articles section
  - Web3 experience showcase
  - Contact form with social media integration
  - Resume viewer with PDF download

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Theme**: Next Themes for dark/light mode
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your actual values.

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/portfolio.ts`:
- Personal details (name, title, bio, contact info)
- Work experience
- Education
- Projects
- Skills
- Certificates
- Web3 experience
- Blog posts

### Images
Replace placeholder images in the `public/images/` directory:
- `profile.jpg` - Your profile picture
- `cover.jpg` - Cover photo for hero section
- Project screenshots
- Certificate images

### Resume
Add your resume PDF to `public/documents/resume.pdf`

### Styling
- Colors and themes can be customized in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 SEO & Performance

- Optimized meta tags and Open Graph data
- Automatic sitemap generation
- Robots.txt for search engines
- Image optimization with Next.js Image component
- Performance monitoring with Vercel Analytics

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you need help customizing this portfolio or have any questions, feel free to reach out through the contact form on the website or open an issue on GitHub.
