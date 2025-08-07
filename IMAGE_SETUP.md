# 📸 Image Setup Guide

This guide will help you add your own images to the portfolio website.

## 📁 Directory Structure

Create the following folders in your `public` directory:

```
public/
├── images/
│   ├── profile.jpg          # Your profile picture
│   ├── cover.jpg            # Cover/hero image
│   ├── projects/
│   │   ├── ecommerce-1.jpg  # Project screenshots
│   │   ├── ecommerce-2.jpg
│   │   ├── defi-dashboard.jpg
│   │   └── [your-project].jpg
│   └── certificates/
│       ├── aws-cert.jpg     # Certificate images
│       └── [your-cert].jpg
```

## 🖼️ Image Requirements

### Profile Picture (`profile.jpg`)
- **Size**: 400x400px (square)
- **Format**: JPG, PNG, or WebP
- **Usage**: Navigation, about section, contact page
- **Tips**: Use a professional headshot with good lighting

### Cover Photo (`cover.jpg`)
- **Size**: 1920x600px (16:5 ratio)
- **Format**: JPG, PNG, or WebP
- **Usage**: Hero section background
- **Tips**: Use a high-quality image that represents you or your work

### Project Screenshots
- **Size**: 800x600px minimum (4:3 ratio recommended)
- **Format**: JPG, PNG, or WebP
- **Usage**: Project gallery, featured projects
- **Tips**: Show your actual work, use clean screenshots

### Certificate Images
- **Size**: 600x400px minimum
- **Format**: JPG, PNG, or WebP
- **Usage**: Certificates page
- **Tips**: Scan or download official certificate images

## 🔧 How to Add Your Images

### Step 1: Create Directories
```bash
mkdir -p public/images/projects
mkdir -p public/images/certificates
```

### Step 2: Add Your Images
1. Copy your profile picture to `public/images/profile.jpg`
2. Copy your cover photo to `public/images/cover.jpg`
3. Add project screenshots to `public/images/projects/`
4. Add certificate images to `public/images/certificates/`

### Step 3: Update Configuration
Edit `src/lib/image-config.ts` to match your image filenames:

```typescript
export const imageConfig = {
  profile: "/images/profile.jpg",
  cover: "/images/cover.jpg",
  
  projects: {
    ecommerce: [
      "/images/projects/my-ecommerce-1.jpg",
      "/images/projects/my-ecommerce-2.jpg",
    ],
    defi: [
      "/images/projects/my-defi-app.jpg",
    ],
  },
  
  certificates: {
    aws: "/images/certificates/my-aws-cert.jpg",
  },
}
```

### Step 4: Update Portfolio Data
Edit `src/data/portfolio.ts` to add more projects or certificates:

```typescript
export const projects: Project[] = [
  {
    id: "3",
    title: "My New Project",
    description: "Description of your project",
    images: ["/images/projects/my-new-project.jpg"],
    // ... other project details
  }
]

export const certificates: Certificate[] = [
  {
    id: "2",
    title: "My New Certificate",
    issuer: "Certification Body",
    image: "/images/certificates/my-new-cert.jpg",
    // ... other certificate details
  }
]
```

## 🎨 Image Optimization Tips

### Before Adding Images:
1. **Resize** images to the recommended dimensions
2. **Compress** images to reduce file size (aim for < 500KB each)
3. **Convert** to WebP format for better performance (optional)
4. **Rename** files with descriptive, URL-friendly names

### Tools for Optimization:
- **Online**: TinyPNG, Squoosh.app, Canva
- **Desktop**: Photoshop, GIMP, ImageOptim
- **Command Line**: ImageMagick, Sharp

### Example Optimization Commands:
```bash
# Resize and compress with ImageMagick
magick input.jpg -resize 800x600 -quality 85 output.jpg

# Convert to WebP
magick input.jpg -quality 85 output.webp
```

## 🔄 Fallback System

The portfolio includes a fallback system:
- If your images are not found, placeholder SVGs will be shown
- This ensures the site always looks good during development
- Replace placeholders with real images when ready

## 📱 Responsive Images

The portfolio automatically handles responsive images:
- Images are optimized for different screen sizes
- Next.js Image component provides automatic optimization
- WebP format is served when supported by the browser

## 🚀 Deployment Notes

### For Vercel Deployment:
- Images in the `public` folder are automatically served
- No additional configuration needed
- Images are cached for optimal performance

### For Other Platforms:
- Ensure the `public` folder is properly served as static assets
- Configure CDN if needed for better performance

## ❓ Troubleshooting

### Images Not Showing?
1. Check file paths in `image-config.ts`
2. Verify images exist in the `public/images/` directory
3. Check browser console for 404 errors
4. Ensure file extensions match (case-sensitive on some systems)

### Images Too Large?
1. Compress images before adding them
2. Use appropriate dimensions for each image type
3. Consider using WebP format for better compression

### Need Different Sizes?
1. Update the `imageConfig` in `src/lib/image-config.ts`
2. Add new image paths for different sizes
3. Update components to use the new image paths

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify file paths and names
3. Ensure images are in the correct format
4. Test with a simple image first

Remember: The portfolio will work with placeholder images, so you can deploy and add real images later!
