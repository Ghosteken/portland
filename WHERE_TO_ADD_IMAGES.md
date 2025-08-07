# 📸 **WHERE TO ADD YOUR IMAGES - Complete Guide**

## 📁 **Step 1: Folder Structure (Already Created)**

Your portfolio now has this folder structure:

```
portland/
├── public/
│   ├── images/                    ← Main images folder
│   │   ├── projects/              ← Project screenshots go here
│   │   ├── certificates/          ← Certificate images go here
│   │   ├── profile.jpg            ← ADD YOUR PROFILE PICTURE HERE
│   │   └── cover.jpg              ← ADD YOUR COVER PHOTO HERE
│   └── documents/
│       └── resume.pdf             ← ADD YOUR RESUME PDF HERE
```

## 🖼️ **Step 2: Add Your Images**

### **Profile Picture** 
📍 **Location**: `public/images/profile.jpg`
- **Size**: 400x400px (square)
- **Used in**: Navigation, Home page, About section, Contact page
- **Example**: Your professional headshot

### **Cover Photo**
📍 **Location**: `public/images/cover.jpg`  
- **Size**: 1920x600px (banner format)
- **Used in**: Home page hero section background
- **Example**: Workspace photo, city skyline, or abstract design

### **Project Screenshots**
📍 **Location**: `public/images/projects/`
- **Size**: 800x600px minimum
- **Used in**: Projects page, featured projects on home
- **Examples**:
  - `public/images/projects/ecommerce-1.jpg`
  - `public/images/projects/ecommerce-2.jpg`
  - `public/images/projects/defi-dashboard.jpg`

### **Certificate Images**
📍 **Location**: `public/images/certificates/`
- **Size**: 600x400px minimum  
- **Used in**: Certificates page
- **Examples**:
  - `public/images/certificates/aws-cert.jpg`
  - `public/images/certificates/google-cert.jpg`

### **Resume PDF**
📍 **Location**: `public/documents/resume.pdf`
- **Format**: PDF
- **Used in**: Resume page download button

## 🔧 **Step 3: Update Configuration**

After adding your images, update the paths in `src/lib/image-config.ts`:

```typescript
export const imageConfig = {
  // Profile and cover images
  profile: "/images/profile.jpg",        ← Your profile picture
  cover: "/images/cover.jpg",            ← Your cover photo
  
  // Project images
  projects: {
    ecommerce: [
      "/images/projects/my-ecommerce-1.jpg",    ← Your project screenshots
      "/images/projects/my-ecommerce-2.jpg",
    ],
    defi: [
      "/images/projects/my-defi-app.jpg",
    ],
    // Add more projects:
    portfolio: [
      "/images/projects/my-portfolio.jpg",
    ],
  },
  
  // Certificate images
  certificates: {
    aws: "/images/certificates/my-aws-cert.jpg",     ← Your certificates
    google: "/images/certificates/my-google-cert.jpg",
    // Add more certificates as needed
  },
}
```

## 📝 **Step 4: Add More Projects/Certificates**

### **To Add a New Project:**

1. **Add image** to `public/images/projects/my-new-project.jpg`

2. **Update config** in `src/lib/image-config.ts`:
```typescript
projects: {
  // ... existing projects
  newProject: [
    "/images/projects/my-new-project.jpg",
  ],
}
```

3. **Add project data** in `src/data/portfolio.ts`:
```typescript
export const projects: Project[] = [
  // ... existing projects
  {
    id: "3",
    title: "My New Project",
    description: "Description of your project",
    images: imageConfig.projects.newProject,  // ← Links to your images
    technologies: ["React", "Node.js"],
    liveUrl: "https://myproject.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
    category: "web"
  }
]
```

### **To Add a New Certificate:**

1. **Add image** to `public/images/certificates/my-new-cert.jpg`

2. **Update config** in `src/lib/image-config.ts`:
```typescript
certificates: {
  // ... existing certificates
  newCert: "/images/certificates/my-new-cert.jpg",
}
```

3. **Add certificate data** in `src/data/portfolio.ts`:
```typescript
export const certificates: Certificate[] = [
  // ... existing certificates
  {
    id: "2",
    title: "My New Certificate",
    issuer: "Certification Body",
    issueDate: "2023-12",
    image: imageConfig.certificates.newCert,  // ← Links to your image
    description: "Certificate description"
  }
]
```

## 🎯 **Quick Start Checklist**

### **Essential Images (Start with these):**
- [ ] `public/images/profile.jpg` - Your profile picture
- [ ] `public/images/cover.jpg` - Your cover photo  
- [ ] `public/documents/resume.pdf` - Your resume

### **Project Images (Add as you have them):**
- [ ] `public/images/projects/project1.jpg` - First project screenshot
- [ ] `public/images/projects/project2.jpg` - Second project screenshot
- [ ] Update `imageConfig.projects` in `src/lib/image-config.ts`

### **Certificate Images (Optional):**
- [ ] `public/images/certificates/cert1.jpg` - First certificate
- [ ] Update `imageConfig.certificates` in `src/lib/image-config.ts`

## 🔍 **How to Verify Your Images Work**

1. **Add your images** to the folders above
2. **Update the config** file with correct paths
3. **Start the dev server**: `npm run dev`
4. **Visit**: `http://localhost:3000`
5. **Check**: Your images should appear instead of placeholders

## 🚨 **Common Issues & Solutions**

### **Images not showing?**
- ✅ Check file paths match exactly (case-sensitive)
- ✅ Ensure images are in `public/images/` folder
- ✅ Verify file extensions (.jpg, .png, .webp)
- ✅ Check browser console for 404 errors

### **Images too large/slow?**
- ✅ Resize images to recommended dimensions
- ✅ Compress images (aim for < 500KB each)
- ✅ Use WebP format for better compression

### **Need different image names?**
- ✅ Update paths in `src/lib/image-config.ts`
- ✅ Make sure paths match your actual file names

## 📱 **Image Size Recommendations**

| Image Type | Recommended Size | Max File Size |
|------------|------------------|---------------|
| Profile | 400x400px | 200KB |
| Cover | 1920x600px | 500KB |
| Projects | 800x600px | 300KB |
| Certificates | 600x400px | 200KB |

## 🎨 **Image Optimization Tools**

### **Online Tools:**
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Resize and optimize
- [Canva](https://canva.com/) - Create/edit images

### **Desktop Tools:**
- Photoshop, GIMP, or any image editor
- Built-in tools (Preview on Mac, Photos on Windows)

---

## 🚀 **Ready to Go!**

Once you add your images and update the config file, your portfolio will automatically use them instead of the placeholder images. The fallback system ensures your site always looks good, even if some images are missing.

**Need help?** Check the browser console for any error messages, and make sure your file paths match exactly!
