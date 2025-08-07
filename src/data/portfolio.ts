import { PersonalInfo, SocialLink, WorkExperience, Education, Project, Certificate, Skill, Web3Experience, BlogPost } from '@/types';
import { imageConfig } from '@/lib/image-config';

export const personalInfo: PersonalInfo = {
  name: "Nicholas Aigberua",
  title: "Software Engineer",
  email: "aigberuan6@gmail.com",
  phone: "+234 7080727247",
  location: "Lagos, Nigeria",
  bio: "Software engineer with a focus on building scalable, secure systems. Adept at solving complex backend challenges using modern tech like Node.js, Python, React, and Docker. Proven ability to lead API development, integrate third-party services, and optimize performance. Strong collaborative ethos with experience in Agile methodologies and cross-functional team environments.",
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
    id: "1",
    company: "Freelance",
    position: "Software Engineer",
    startDate: "2025-05",
    description: "Currently working as a freelance software engineer, developing custom solutions and applications for various clients.",
    technologies: ["Node.js", "React", "Python", "API Development"],
    achievements: [
      "Delivering custom software solutions for diverse clients",
      "Maintaining high code quality and best practices",
      "Managing multiple projects simultaneously"
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
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription: "A comprehensive e-commerce platform built with modern technologies, featuring user authentication, product management, shopping cart, and secure payment processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    images: imageConfig.projects.ecommerce,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1",
    featured: true,
    category: "web"
  },
  {
    id: "2",
    title: "DeFi Dashboard",
    description: "Web3 dashboard for tracking DeFi investments",
    technologies: ["React", "Web3.js", "Ethers.js", "Chart.js"],
    images: imageConfig.projects.defi,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2",
    featured: true,
    category: "web3"
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
  { name: "React", level: "Advanced", category: "Frontend", icon: "react" },
  { name: "Node.js", level: "Advanced", category: "Backend", icon: "nodejs" },
  { name: "Python", level: "Advanced", category: "Backend", icon: "python" },
  { name: "JavaScript", level: "Advanced", category: "Frontend", icon: "javascript" },
  { name: "HTML/CSS", level: "Advanced", category: "Frontend", icon: "html" },

  // Databases
  { name: "PostgreSQL", level: "Intermediate", category: "Database", icon: "postgresql" },
  { name: "MongoDB", level: "Intermediate", category: "Database", icon: "mongodb" },

  // DevOps & Tools
  { name: "Docker", level: "Intermediate", category: "DevOps", icon: "docker" },
  { name: "Git", level: "Advanced", category: "DevOps", icon: "git" },
  { name: "Linux", level: "Intermediate", category: "DevOps", icon: "linux" },

  // Networking
  { name: "Firewall Configuration", level: "Intermediate", category: "Networking", icon: "firewall" },
  { name: "Network Security", level: "Intermediate", category: "Networking", icon: "security" },
  { name: "Security Auditing", level: "Intermediate", category: "Networking", icon: "audit" },
  { name: "Network Monitoring", level: "Intermediate", category: "Networking", icon: "monitoring" },

  // Methodologies
  { name: "Agile Methodologies", level: "Advanced", category: "Other", icon: "agile" },
  { name: "API Development", level: "Advanced", category: "Backend", icon: "api" },
  { name: "Testing", level: "Intermediate", category: "Other", icon: "testing" }
];

export const web3Experience: Web3Experience = {
  blockchains: ["Ethereum", "Polygon", "Binance Smart Chain", "Solana"],
  protocols: ["Uniswap", "Aave", "Compound", "OpenSea"],
  tools: ["Hardhat", "Truffle", "MetaMask", "Web3.js", "Ethers.js"],
  projects: projects.filter(p => p.category === 'web3'),
  socialLinks: [
    {
      platform: "Mirror",
      url: "https://mirror.xyz/yourusername",
      icon: "mirror",
      username: "yourusername"
    },
    {
      platform: "Lens Protocol",
      url: "https://lenster.xyz/u/yourusername",
      icon: "lens",
      username: "yourusername"
    }
  ]
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Web3 Development",
    excerpt: "A comprehensive guide to building your first decentralized application",
    content: "Full blog post content here...",
    publishDate: "2023-10-15",
    tags: ["Web3", "Blockchain", "Tutorial"],
    readTime: 8,
    featured: true
  }
];
