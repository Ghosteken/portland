import { PersonalInfo, SocialLink, WorkExperience, Education, Project, Certificate, Skill, Web3Experience, BlogPost } from '@/types';
import { imageConfig } from '@/lib/image-config';

export const personalInfo: PersonalInfo = {
  name: "Nicholas Aigberua",
  title: "Software Engineer",
  email: "aigberuan6@gmail.com",
  phone: "+234 7080727247",
  location: "Lagos, Nigeria",
  bio: "Software engineer with a focus on building scalable, secure systems. Adept at solving complex backend challenges using modern tech like Node.js, Python, Django, React, and Docker. Proven ability to lead API development, integrate third-party services, and optimize performance. Strong collaborative ethos with experience in Agile methodologies and cross-functional team environments.",
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
    company: "Worldcoin",
    position: "Software Engineer",
    startDate: "2024-05",
    description: "Developed in Codellama software and presented application structure to enhance internal efficiency. Provided feedback to improve both application performance and user experience.",
    technologies: ["Codellama", "Software Development", "Application Architecture"],
    achievements: [
      "Enhanced internal efficiency through software development",
      "Improved application performance and user experience",
      "Presented application structure to stakeholders"
    ]
  },
  {
    id: "2",
    company: "Network Security Intern, Tiger Logic Africa",
    position: "Network Security Intern",
    startDate: "2024-03",
    endDate: "2024-09",
    description: "Utilized cutting-edge tools and methods to monitor and audit the network infrastructure. Tested firewalls to make sure they were safe and compliant.",
    technologies: ["Network Security", "Firewall Testing", "Network Monitoring", "Security Auditing"],
    achievements: [
      "Monitored and audited network infrastructure",
      "Ensured firewall safety and compliance",
      "Utilized cutting-edge security tools"
    ]
  },
  {
    id: "3",
    company: "Freelance",
    position: "Software Engineer",
    startDate: "2023-01",
    endDate: "2024-05",
    description: "Developed pre-secured API endpoints using Node.js, ensuring they met industry standards. Implemented user authentication and authorization systems. Contributed through testing to ensure APIs were robust, safe, and compliant with best practices.",
    technologies: ["Node.js", "API Development", "Authentication", "Authorization", "Testing"],
    achievements: [
      "Developed secure API endpoints meeting industry standards",
      "Implemented robust authentication and authorization systems",
      "Ensured API compliance with security best practices"
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
  { name: "Django", level: "Advanced", category: "Backend", icon: "django" },
  { name: "JavaScript", level: "Advanced", category: "Frontend", icon: "javascript" },
  { name: "HTML/CSS", level: "Advanced", category: "Frontend", icon: "html" },

  // Databases
  { name: "PostgreSQL", level: "Intermediate", category: "Database", icon: "postgresql" },
  { name: "MongoDB", level: "Intermediate", category: "Database", icon: "mongodb" },

  // DevOps & Tools
  { name: "Docker", level: "Intermediate", category: "DevOps", icon: "docker" },
  { name: "Git", level: "Advanced", category: "DevOps", icon: "git" },
  { name: "Linux", level: "Intermediate", category: "DevOps", icon: "linux" },

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
