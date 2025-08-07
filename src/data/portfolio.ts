import { PersonalInfo, SocialLink, WorkExperience, Education, Project, Certificate, Skill, Web3Experience, BlogPost } from '@/types';
import { imageConfig } from '@/lib/image-config';

export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Full Stack Developer & Web3 Enthusiast",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "Passionate full-stack developer with expertise in modern web technologies and blockchain development. I love creating innovative solutions that bridge the gap between traditional web development and the decentralized future.",
  profileImage: imageConfig.profile,
  coverImage: imageConfig.cover
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "linkedin",
    username: "yourprofile"
  },
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
    username: "yourusername"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
    username: "@yourusername"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: "instagram",
    username: "@yourusername"
  }
];

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    company: "Tech Company Inc.",
    position: "Senior Full Stack Developer",
    startDate: "2022-01",
    description: "Led development of scalable web applications using React, Node.js, and cloud technologies.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    achievements: [
      "Increased application performance by 40%",
      "Led a team of 5 developers",
      "Implemented CI/CD pipelines"
    ]
  },
  {
    id: "2",
    company: "Startup XYZ",
    position: "Frontend Developer",
    startDate: "2020-06",
    endDate: "2021-12",
    description: "Developed responsive web applications and mobile-first designs.",
    technologies: ["React", "JavaScript", "CSS3", "Firebase"],
    achievements: [
      "Built 3 major product features",
      "Improved user engagement by 25%"
    ]
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2016-09",
    endDate: "2020-05",
    gpa: "3.8",
    achievements: [
      "Magna Cum Laude",
      "Dean's List for 6 semesters",
      "Computer Science Society President"
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
  { name: "React", level: "Expert", category: "Frontend", icon: "react" },
  { name: "TypeScript", level: "Advanced", category: "Frontend", icon: "typescript" },
  { name: "Node.js", level: "Advanced", category: "Backend", icon: "nodejs" },
  { name: "PostgreSQL", level: "Intermediate", category: "Database", icon: "postgresql" },
  { name: "AWS", level: "Intermediate", category: "DevOps", icon: "aws" },
  { name: "Solidity", level: "Intermediate", category: "Web3", icon: "solidity" }
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
