import { PersonalInfo, SocialLink, WorkExperience, Education, Project, Certificate, Skill, Web3Experience, BlogPost } from '@/types';
import { imageConfig } from '@/lib/image-config';

export const personalInfo: PersonalInfo = {
  name: "Nicholas Aigberua",
  title: "Software Engineer",
  email: "aigberuan6@gmail.com",
  phone: "+234 7080727247",
  location: "Lagos, Nigeria",
  bio: "I’m a Software Engineer who enjoys building systems that are fast, secure, and built to scale. Most of my work revolves around backend engineering working with tools like Node.js, Python and Docker to solve real problems. I’ve led API development, integrated third-party services, and improved database performance to make apps run smoother. I work well in agile teams, communicate clearly, and like being hands-on with the whole stack from cloud infrastructure and CI/CD pipelines to network security and performance tuning. In short, I like building reliable systems that actually work in the real world.",
  profileImage: imageConfig.profile,
  coverImage: imageConfig.cover
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Ghosteken",
    icon: "github",
    username: "Ghosteken"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/aigberua-nicholas/",
    icon: "linkedin",
    username: "aigberua-nicholas"
  }
];

export const workExperience: WorkExperience[] = [
  {
    id: "0",
    company: "Appnable",
    position: "Software Engineer",
    startDate: "2025-11",
    description: "Developed and maintained backend services using Node.js with TypeScript, focusing on complex API logic and performance optimization. Managed database operations and authentication flows with Supabase for secure data handling and smooth integrations. Implemented CI/CD pipelines and automated deployments using GitHub Actions for reliable releases. Worked with Azure for hosting, scaling, and environment management. Performed testing and debugging to improve stability and resolve production issues.",
    technologies: ["Node.js", "TypeScript", "Supabase", "Azure", "GitHub Actions", "CI/CD", "PostgreSQL", "MongoDB", "Docker"],
    achievements: [
      "Built and optimized complex API logic for scalable services",
      "Managed authentication and data flows using Supabase",
      "Automated deployments with GitHub Actions and CI/CD",
      "Operated and scaled infrastructure on Azure",
      "Improved service reliability through testing and debugging"
    ]
  },
  {
    id: "1",
    company: "Sceptre",
    position: "Project Lead Developer (Freelance)",
    startDate: "2024-04",
    endDate: "2025-11",
    description: "Led product development and guided the technical direction of core features. Coordinated tasks across development, design, and product teams for smooth delivery. Integrated APIs and backend services to enhance performance and reliability. Reviewed code and development workflows to improve efficiency and maintain standards. Facilitated stakeholder communication to ensure alignment and timely execution.",
    technologies: ["Node.js", "API Integration", "Project Management", "Code Review", "Agile"],
    achievements: [
      "Drove technical direction and feature delivery",
      "Coordinated cross-functional teams for on-time milestones",
      "Integrated services to improve reliability and performance",
      "Elevated efficiency through code and workflow reviews",
      "Kept stakeholders aligned for timely execution"
    ]
  },
  {
    id: "2",
    company: "Workbrook",
    position: "Software Engineer",
    startDate: "2025-04",
    endDate: "2025-05",
    description: "Participated in CodeBase reviews and assessed application structure to enhance overall efficiency. Provided feedback to improve both application functionality and workflow.",
    technologies: ["Code Review", "Application Architecture", "Software Development"],
    achievements: [
      "Participated in comprehensive codebase reviews",
      "Enhanced overall application efficiency",
      "Improved application functionality and workflow through feedback"
    ]
  },
  {
    id: "3",
    company: "Tiger Logic Africa",
    position: "Network Security Intern",
    startDate: "2024-03",
    endDate: "2024-09",
    description: "Handled testing and setup of firewalls to meet security standards. Used technical skills to help reduce system errors. Tested firewalls to make sure they were safe and compliant.",
    technologies: ["Network Security", "Firewall Configuration", "Security Testing", "System Administration"],
    achievements: [
      "Handled testing and setup of firewalls to meet security standards",
      "Reduced system errors through technical expertise",
      "Ensured firewall safety and compliance with security standards"
    ]
  },
  {
    id: "4",
    company: "Timest Web",
    position: "Backend Developer",
    startDate: "2024-08",
    endDate: "2024-09",
    description: "Developed and secured API endpoints using NestJS, ensuring they met industry and security standards. Identified and fixed backend issues, reducing system errors and improving overall performance.",
    technologies: ["NestJS", "API Development", "Security", "Backend Development"],
    achievements: [
      "Developed secure API endpoints using NestJS meeting industry standards",
      "Identified and fixed backend issues reducing system errors",
      "Conducted thorough testing ensuring API reliability and compliance"
    ]
  },
  {
    id: "5",
    company: "Wish to Wear",
    position: "Backend Developer",
    startDate: "2024-01",
    endDate: "2024-07",
    description: "Designed and developed RESTful APIs to facilitate efficient client-server communication. Validated user inputs against the database using Express Validator to ensure data integrity and security.",
    technologies: ["Node.js", "Express.js", "RESTful APIs", "Express Validator", "Swagger", "Postman"],
    achievements: [
      "Designed and developed RESTful APIs for efficient client-server communication",
      "Implemented data validation using Express Validator for security and integrity",
      "Led API documentation process with Swagger providing comprehensive developer documentation",
      "Conducted thorough API testing using Postman ensuring functionality and performance"
    ]
  },
  {
    id: "6",
    company: "Edge Tech",
    position: "Full Stack Developer",
    startDate: "2023-07",
    endDate: "2024-01",
    description: "Designed client-side and server-side architecture and implemented cloud-based backend solutions. Integrated third-party APIs from external applications into web platforms.",
    technologies: ["Full Stack Development", "Cloud Solutions", "API Integration", "Database Optimization", "RESTful APIs", "Swagger"],
    achievements: [
      "Designed and implemented client-side and server-side architecture",
      "Implemented cloud-based backend solutions",
      "Successfully integrated third-party APIs into web platforms",
      "Created RESTful API with proper routing, authentication, and Swagger documentation",
      "Optimized database queries, indexing, and overall database performance"
    ]
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Lagos",
    degree: "B.Levels",
    field: "Computer Science",
    startDate: "2021-10",
    endDate: "2022-08",
    achievements: [
      "Completed foundational computer science coursework",
      "Strong academic performance in core subjects"
    ]
  },
  {
    id: "2",
    institution: "University of Lagos",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2023-01",
    endDate: "2025-07",
    achievements: [
      "Currently pursuing degree in Computer Science",
      "Focus on software engineering and system design",
      "Active in academic and practical projects"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Contact Manager API (Node.js)",
    description: "RESTful backend for managing contacts with CRUD, validation, and structured controllers/middleware.",
    longDescription: "Built with Node.js + Express and MongoDB (Mongoose). Features clean controllers, input validation, error-handling middleware, and test coverage. Optional auth can restrict sensitive actions.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "Jest", "Supertest"],
    images: [],
    githubUrl: "https://github.com/Ghosteken/Contact_app",
    featured: true,
    category: "web"
  },
  {
    id: "2",
    title: "Landing Page v2 (Next.js)",
    description: "Modern, responsive marketing page with clean sections and fast loads.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    images: [],
    liveUrl: "https://landing-page2-vert.vercel.app/",
    githubUrl: "https://github.com/Ghosteken/LandingPage2",
    featured: false,
    category: "web"
  },
  {
    id: "3",
    title: "Landing Page v1 (Next.js)",
    description: "Responsive product landing page with focused CTA and sections.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    images: [],
    liveUrl: "https://landing-page1-orcin.vercel.app/",
    githubUrl: "https://github.com/Ghosteken/landing_page1",
    featured: false,
    category: "web"
  },
  {
    id: "4",
    title: "Full-Stack Todo App",
    description: "Simple CRUD todo app: REST API backend and a lightweight React frontend.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    images: [],
    liveUrl: "https://fullstack-todoapp-frontend.vercel.app/",
    githubUrl: "https://github.com/Ghosteken/Fullstack_todoapp_frontend",
    featured: true,
    category: "web"
  },
  {
    id: "5",
    title: "Landing Page v3 (Next.js)",
    description: "Another fast and clean Next.js landing variant with responsive layout.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    images: [],
    liveUrl: "https://landingtest-eight.vercel.app/",
    githubUrl: "https://github.com/Ghosteken/landingtest",
    featured: false,
    category: "web"
  },
  {
    id: "6",
    title: "Real-Time Chat App (Backend)",
    description: "Chat backend with JWT auth, public/private rooms, Socket.IO messaging, presence, typing, and rate limiting.",
    longDescription: "Node.js + Express + TypeScript with Socket.IO and MySQL (Prisma). Persists message history, tracks presence/last seen, and enforces per-room rate limits.",
    technologies: ["Node.js", "Express", "TypeScript", "Socket.IO", "MySQL", "Prisma", "JWT", "Jest"],
    images: [],
    liveUrl: "https://chat-app-hxzf.onrender.com/",
    githubUrl: "https://github.com/Ghosteken/chat-app",
    featured: true,
    category: "web"
  },
  {
    id: "7",
    title: "Inveco",
    description: "Hire Expert Freelancers. Get Work Done. (Backend connection pending)",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    images: [],
    liveUrl: "https://inveco-client.vercel.app/",
    featured: true,
    category: "web"
  },
  {
    id: "8",
    title: "StockStudio",
    description: "Inventory and Sales Management. Track products, manage invoices, and get actionable insights. Fast, simple, and ready for multi-store operations. (Backend in development)",
    longDescription: "A SaaS application with complex ERP features. Track products, manage invoices, and get actionable insights. Fast, simple, and ready for multi-store operations.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "ERP", "SaaS"],
    images: [],
    liveUrl: "https://stockstudio.vercel.app/",
    featured: true,
    category: "web"
  }
];

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issueDate: "2023-06",
    credentialId: "AWS-123456",
    verificationUrl: "https://aws.amazon.com/verification",
    image: imageConfig.certificates.aws,
    description: "Validates expertise in designing distributed systems on AWS"
  }
];

export const skills: Skill[] = [
  // Frontend & Languages
  { 
    name: "React", 
    category: "Frontend", 
    icon: "react",
    description: "Used for building highly interactive and component-based user interfaces for modern web applications."
  },
  { 
    name: "TypeScript", 
    category: "Frontend", 
    icon: "typescript",
    description: "Leveraged for writing scalable, maintainable, and type-safe code in both frontend and backend projects."
  },
  { 
    name: "Node.js", 
    category: "Backend", 
    icon: "nodejs",
    description: "Core environment for developing high-performance, asynchronous server-side applications and RESTful APIs."
  },
  { 
    name: "NestJS", 
    category: "Backend", 
    icon: "nestjs",
    description: "Preferred framework for building modular, enterprise-grade server-side applications with strong architectural patterns."
  },
  { 
    name: "C#", 
    category: "Backend", 
    icon: "csharp",
    description: "Utilized for developing robust, statically-typed enterprise applications and system components."
  },
  { 
    name: ".NET", 
    category: "Backend", 
    icon: "dotnet",
    description: "Framework used for building cross-platform web APIs, microservices, and desktop applications."
  },
  { 
    name: "Express.js", 
    category: "Backend", 
    icon: "express",
    description: "Used as a minimalist web framework for quickly spinning up flexible and efficient web services."
  },
  { 
    name: "Python", 
    category: "Backend", 
    icon: "python",
    description: "Applied in scripting, data processing, and building backend services with frameworks like Django and FastAPI."
  },
  { 
    name: "JavaScript", 
    category: "Frontend", 
    icon: "javascript",
    description: "The fundamental language for implementing dynamic behavior and logic across the web stack."
  },
  { 
    name: "HTML/CSS", 
    category: "Frontend", 
    icon: "html",
    description: "Essential for crafting structured, responsive, and visually appealing web layouts."
  },

  // Databases
  { 
    name: "PostgreSQL", 
    category: "Database", 
    icon: "postgresql",
    description: "Relational database used for complex data modeling, ensuring integrity and high performance."
  },
  { 
    name: "MySQL", 
    category: "Database", 
    icon: "mysql",
    description: "Widely used relational database for scalable and reliable data storage in various web projects."
  },
  { 
    name: "MongoDB", 
    category: "Database", 
    icon: "mongodb",
    description: "NoSQL database utilized for flexible, document-oriented data storage in real-time applications."
  },
  { 
    name: "Supabase", 
    category: "Database", 
    icon: "supabase",
    description: "Open-source Firebase alternative used for rapid backend development with integrated Auth and Database."
  },
  { 
    name: "Redis", 
    category: "Database", 
    icon: "redis",
    description: "In-memory data store used for high-speed caching and real-time data messaging."
  },
  { 
    name: "Prisma", 
    category: "Backend", 
    icon: "prisma",
    description: "Type-safe ORM for Node.js used to streamline database access and migration workflows."
  },

  // DevOps & Tools
  { 
    name: "Docker", 
    category: "DevOps", 
    icon: "docker",
    description: "Used for containerizing applications to ensure consistent environments across development and production."
  },
  { 
    name: "Git", 
    category: "DevOps", 
    icon: "git",
    description: "Essential version control system for collaborative development and code history management."
  },
  { 
    name: "AWS", 
    category: "DevOps", 
    icon: "aws",
    description: "Cloud platform utilized for deploying scalable applications, managing infrastructure, and using serverless functions."
  },
  { 
    name: "Azure", 
    category: "DevOps", 
    icon: "azure",
    description: "Cloud services platform used for enterprise-level hosting, CI/CD integration, and active directory services."
  },
  { 
    name: "CI/CD Pipelines", 
    category: "DevOps", 
    icon: "cicd",
    description: "Implemented for automated testing and deployment to ensure rapid and reliable software releases."
  }
];

export const web3Experience: Web3Experience = {
  blockchains: ["Ethereum", "Polygon", "Binance Smart Chain", "Solana"],
  protocols: ["Uniswap", "Aave", "Compound", "OpenSea"],
  tools: ["Hardhat", "Truffle", "MetaMask", "Web3.js", "Ethers.js"],
  projects: projects.filter(p => p.category === 'web3'),
  socialLinks: [
    {
      platform: "Mirror",
      url: "https://mirror.xyz/ghosteken.eth",
      icon: "mirror",
      username: "ghosteken"
    },
    {
      platform: "Lens Protocol",
      url: "https://lenster.xyz/u/ghosteken",
      icon: "lens",
      username: "ghosteken"
    }
  ]
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Web3 Development",
    excerpt: "A comprehensive guide to building your first decentralized application",
    content: `Web3 development is more than just writing smart contracts; it's about building a decentralized future. In this guide, we'll explore the fundamental concepts of blockchain, how decentralized applications (dApps) work, and how you can start your journey as a Web3 developer.

We'll cover:
1. Understanding the Blockchain
2. Smart Contracts and Solidity
3. Connecting to the Ethereum Network
4. Building your first dApp frontend with Ethers.js

Whether you're a seasoned web developer or a complete beginner, this guide will provide you with the tools and knowledge you need to get started.`,
    publishDate: "2023-10-15",
    tags: ["Web3", "Blockchain", "Tutorial"],
    readTime: 8,
    featured: true
  }
];
