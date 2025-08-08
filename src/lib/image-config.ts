// Image configuration for easy management
// Replace these paths with your actual images

export const imageConfig = {
  // Profile and cover images
  profile: "/images/profile.jpg", // Add your profile picture here (400x400px recommended)
  cover: "/images/cover.JPG",     // Add your cover photo here (1920x600px recommended)
  
  // Project images
  projects: {
    ecommerce: [
      "/images/projects/ecommerce-1.jpg", // Add your e-commerce project screenshots
      "/images/projects/ecommerce-2.jpg",
    ],
    defi: [
      "/images/projects/defi-dashboard.jpg", // Add your DeFi project screenshot
    ],
    // Add more projects as needed
  },
  
  // Certificate images
  certificates: {
    aws: "/images/certificates/aws-cert.jpg", // Add your AWS certificate image
    // Add more certificates as needed
  },
  
  // Fallback placeholders (these will be used if actual images are not found)
  placeholders: {
    profile: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJoc2woMjIxLjIgODMuMiUgNTMuMyUpIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5Qcm9maWxlPC90ZXh0Pgo8L3N2Zz4K",
    cover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxOTIwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iNjAwIiBmaWxsPSJoc2woMjE3LjIgMzIuNiUgMTcuNSUpIi8+Cjx0ZXh0IHg9Ijk2MCIgeT0iMzEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjM2Ij5Db3ZlciBQaG90bzwvdGV4dD4KPC9zdmc+Cg==",
    project: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJoc2woMjIxLjIgODMuMiUgNTMuMyUpIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5Qcm9qZWN0PC90ZXh0Pgo8L3N2Zz4K",
    certificate: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJoc2woMzggOTIuMSUgNTAlKSIvPgo8dGV4dCB4PSIzMDAiIHk9IjIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCI+Q2VydGlmaWNhdGU8L3RleHQ+Cjwvc3ZnPgo="
  }
}

// Helper function to get image with fallback
export function getImageSrc(imagePath: string, fallbackType: keyof typeof imageConfig.placeholders = 'project'): string {
  // In a real application, you might want to check if the image exists
  // For now, we'll assume if it starts with '/images/' it's a real image
  if (imagePath.startsWith('/images/')) {
    return imagePath
  }
  return imageConfig.placeholders[fallbackType]
}

// Instructions for adding your own images:
/*
1. Create the following folders in your public directory:
   - public/images/
   - public/images/projects/
   - public/images/certificates/

2. Add your images:
   - Profile picture: public/images/profile.jpg (400x400px recommended)
   - Cover photo: public/images/cover.jpg (1920x600px recommended)
   - Project screenshots: public/images/projects/[project-name].jpg
   - Certificates: public/images/certificates/[cert-name].jpg

3. Update the paths in imageConfig above to match your actual image files

4. Supported formats: .jpg, .jpeg, .png, .webp
   
5. For best performance:
   - Optimize images before uploading
   - Use WebP format when possible
   - Keep file sizes reasonable (< 1MB for most images)
*/
