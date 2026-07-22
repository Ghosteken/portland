import { PersonalInfo, SocialLink, WorkExperience, Education, Project, Skill } from '@/types';
import { imageConfig } from '@/lib/image-config';

export const personalInfo: PersonalInfo = {
  name: "Nicholas Aigberua",
  title: "Lead Software Engineer",
  email: "aigberuan6@gmail.com",
  phone: "+234 708 072 7247",
  location: "Lagos, Nigeria",
  bio: "Backend-focused Software Engineer with 3+ years of experience designing, building, and scaling REST APIs and backend systems using Node.js, TypeScript, C#, and Python. I've led API development, integrated third-party services, enforced API versioning and backward-compatibility strategies, and optimized database performance across PostgreSQL, MongoDB, and Supabase. I'm skilled in CI/CD automation, cloud infrastructure (AWS, Azure), and serverless architecture, with hands-on experience across the full engineering lifecycle — from system design and implementation to testing, deployment, and production support. I'm comfortable working in agile, cross-functional teams using Jira, and open to collaborating across distributed/remote teams spanning US, UK, and international time zones.",
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
    position: "Lead Software Engineer",
    startDate: "2025-11",
    description: "Lead backend development for Appnable's core platform, architecting and maintaining complex Node.js/TypeScript services, driving API logic design, and optimizing performance across high-traffic endpoints. Own database operations and authentication flows built on Supabase, manage Azure-hosted infrastructure end-to-end, and contribute to backend services built with C# (.NET / ASP.NET Core) alongside the Node.js stack.",
    technologies: ["Node.js", "TypeScript", "NestJS", "C# (.NET / ASP.NET Core)", "Supabase", "PostgreSQL", "MongoDB", "Prisma", "AWS Lambda", "Azure", "GitHub Actions", "Jest", "Jira"],
    achievements: [
      "Built and maintained REST APIs in Node.js/TypeScript, integrating third-party services while keeping endpoints stable for client apps and internal teams",
      "Managed Azure-hosted infrastructure including App Service deployments, resource provisioning, scaling rules, and monitoring/alerting",
      "Contributed to backend services built with C# (.NET / ASP.NET Core), integrating them with existing Node.js services in a multi-service environment",
      "Designed and enforced API versioning and backward-compatibility strategies (/api/v1 namespaces, legacy fallbacks)",
      "Built serverless AWS Lambda functions integrated with PostgreSQL and MongoDB, handling connection reuse and cold-start mitigation",
      "Tracked and managed engineering work in Jira, maintaining sprint boards and cross-team visibility into feature delivery"
    ]
  },
  {
    id: "1",
    company: "Peppermint",
    position: "Lead Backend Developer",
    startDate: "2026-03",
    endDate: "2026-07",
    description: "Led backend development on AWS-hosted infrastructure, building and maintaining NestJS services backed by MongoDB. Designed REST APIs with Swagger documentation, built cron jobs for automated background processing, and implemented Google and Microsoft integrations including calendar sync and meeting-recording (recall) integration.",
    technologies: ["AWS", "NestJS", "MongoDB", "REST APIs", "Swagger", "Cron Jobs", "Google Calendar API", "Microsoft Graph API", "Jira"],
    achievements: [
      "Led backend development on AWS-hosted infrastructure, building and maintaining NestJS services backed by MongoDB",
      "Designed and implemented REST APIs with Swagger documentation kept current for all new endpoints",
      "Built and scheduled cron jobs to automate recurring data processing and background tasks",
      "Implemented Google and Microsoft integrations, including calendar sync and call-recall/meeting-recording integration",
      "Planned and tracked sprint work in Jira, coordinating backend delivery with product and design stakeholders"
    ]
  },
  {
    id: "2",
    company: "Sceptre",
    position: "Senior Lead Developer",
    startDate: "2024-04",
    endDate: "2025-11",
    description: "Led product development and guided the technical direction of core features. Coordinated tasks across development, design, and product teams for smooth delivery. Integrated APIs and backend services to enhance performance and reliability. Used Jira for sprint planning and backlog prioritization.",
    technologies: ["Node.js", "REST APIs", "Agile Methodologies", "Jira", "Git"],
    achievements: [
      "Drove technical direction and feature delivery",
      "Coordinated cross-functional teams for on-time milestones",
      "Integrated services to improve reliability and performance",
      "Elevated efficiency through code and workflow reviews",
      "Used Jira for sprint planning, backlog prioritization, and tracking feature delivery"
    ]
  },
  {
    id: "3",
    company: "Workbrook",
    position: "Software Engineer",
    startDate: "2025-04",
    endDate: "2025-05",
    description: "Participated in codebase reviews and assessed application structure to enhance overall efficiency. Provided feedback to improve both application functionality and workflow.",
    technologies: ["Code Review", "Application Architecture", "Git"],
    achievements: [
      "Participated in comprehensive codebase reviews",
      "Enhanced overall application efficiency",
      "Improved application functionality and workflow through feedback"
    ]
  },
  {
    id: "4",
    company: "Timest Web",
    position: "Backend Developer",
    startDate: "2024-08",
    endDate: "2024-09",
    description: "Developed and secured API endpoints using NestJS, ensuring they met industry and security standards. Identified and fixed backend issues, reducing system errors and improving overall performance.",
    technologies: ["NestJS", "Node.js", "REST APIs"],
    achievements: [
      "Developed secure API endpoints using NestJS meeting industry standards",
      "Identified and fixed backend issues reducing system errors",
      "Conducted thorough testing ensuring API reliability and compliance"
    ]
  },
  {
    id: "5",
    company: "Tiger-Logic Africa",
    position: "Network Security Intern",
    startDate: "2024-03",
    endDate: "2024-09",
    description: "Handled testing and setup of firewalls to meet security standards. Used technical skills to help reduce system errors. Tested firewalls to make sure they were safe and compliant.",
    technologies: ["Firewalls", "Network Security Tools"],
    achievements: [
      "Handled testing and configuration of firewalls to meet organizational security standards",
      "Applied technical troubleshooting skills to help reduce recurring system errors",
      "Tested firewall configurations to confirm they were secure and compliant"
    ]
  },
  {
    id: "6",
    company: "Wish to Wear",
    position: "Lead Backend Developer",
    startDate: "2024-01",
    endDate: "2024-07",
    description: "Designed and developed RESTful APIs to facilitate efficient client-server communication. Validated user inputs against the database using Express Validator to ensure data integrity and security. Led API documentation with Swagger and tracked work in Jira.",
    technologies: ["Node.js", "Express.js", "Express Validator", "Swagger", "Postman", "Jira"],
    achievements: [
      "Designed and developed RESTful APIs for efficient client-server communication",
      "Implemented data validation using Express Validator for security and integrity",
      "Led API documentation process with Swagger providing comprehensive developer documentation",
      "Conducted thorough API testing using Postman ensuring functionality and performance",
      "Tracked development tasks and bug fixes in Jira to maintain clear visibility into sprint progress"
    ]
  },
  {
    id: "7",
    company: "Edge Tech",
    position: "Full Stack Developer",
    startDate: "2023-07",
    endDate: "2024-01",
    description: "Designed client-side and server-side architecture and implemented cloud-based backend solutions. Integrated third-party APIs from external applications into web platforms.",
    technologies: ["Node.js", "REST APIs", "Swagger", "SQL"],
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
    institution: "Anchor University, Lagos",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2023-03",
    endDate: "2025-09",
    achievements: [
      "Second Class Upper Division (equivalent to a 3.3–3.7 / 4.0 GPA, or UK 2:1 Honours)"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "InsiderSignal Intelligence — MCP Server for Insider Trading Signals",
    description: "A production-grade Model Context Protocol (MCP) server unifying SEC Form 4 insider-trading filings with US Congressional trading disclosures to surface high-conviction trading signals for AI agents.",
    longDescription: "Designed an algorithmic \"Golden Signal\" detector that flags high-conviction trades by identifying when executives and legislators buy the same ticker within a 14-day window, layered with committee-enrichment mapping and legislation-overlap scoring. Ingested and indexed 60,000+ historical trading records, exposing five MCP endpoints (unified market signal feed, convergence detection, Congressional trading analysis by ticker, legislator profile deep-dives, and corporate insider buy-signal detection).",
    technologies: ["Node.js", "TypeScript", "Express.js", "Model Context Protocol SDK", "PostgreSQL", "Redis"],
    images: [],
    githubUrl: "https://github.com/Ghosteken/mcp-insidersignal",
    featured: true,
    category: "web"
  },
  {
    id: "2",
    title: "AI Work Assessment — Dual-Service Financial & Recruiting Backend",
    description: "A dual-service backend combining a FastAPI (Python) service for automated financial briefing generation with a NestJS (TypeScript) service for AI-powered candidate document summarization.",
    longDescription: "Integrated the Google Gemini API for AI-driven document summarization, implementing a queue/worker pattern with fire-and-forget background tasks and a state-machine approach to track summary status. Enforced workspace-level access controls for candidate data isolation and used normalized relational schemas over document storage to preserve data integrity across both services.",
    technologies: ["FastAPI", "Python", "NestJS", "TypeScript", "PostgreSQL", "Google Gemini API", "Docker"],
    images: [],
    githubUrl: "https://github.com/Ghosteken/AI-Work-Assesment",
    featured: true,
    category: "web"
  },
  {
    id: "3",
    title: "Stock Studio — Multi-Tenant Inventory & Sales Platform (Full-Stack)",
    description: "A full-stack, multi-tenant platform for inventory, sales, purchasing, and reporting across multiple organizations, with strict tenant-scoped data isolation.",
    longDescription: "Backend built with JWT-based authentication, role-based access control, Redis-backed caching (Upstash-compatible) for reporting dashboards, and real-time notifications via Socket.IO. Frontend built with Next.js 16 (App Router) and React 19, using Redux Toolkit with RTK Query for API calls/caching, featuring dashboard analytics, inventory tracking with batch metadata, invoice management with VAT calculations, and expense workflows with approval systems.",
    technologies: ["Node.js", "Express.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Next.js", "React", "Redux Toolkit", "Tailwind CSS"],
    images: [],
    githubUrl: "https://github.com/Ghosteken/server-invt",
    featured: true,
    category: "web"
  },
  {
    id: "4",
    title: "Agent Harness — Production-Grade Engineering Skills Framework for AI Coding Agents",
    description: "A framework of 173 curated engineering skills (24 core SDLC workflows) that package senior-engineer practices into structured guidance AI coding agents can follow consistently.",
    longDescription: "Designed a three-layer architecture: a command layer (/spec, /plan, /build, /test, /review, /code-simplify, /ship) mapped to SDLC phases, a persona layer of 12 specialist engineering roles, and a skills layer of step-by-step workflows with built-in checkpoints and verification criteria. Platform-agnostic, supporting Claude Code, Cursor, Gemini CLI, Windsurf, GitHub Copilot, and other AI coding agents.",
    technologies: ["Markdown", "AI Agent Tooling", "Claude Code", "Cursor"],
    images: [],
    githubUrl: "https://github.com/Ghosteken/agent-harness",
    featured: true,
    category: "web"
  },
  {
    id: "5",
    title: "Peppermint API Key Management System",
    description: "A secure backend API key management system (take-home assessment) enabling users to generate, list, revoke, and rotate API keys with security controls and audit logging.",
    longDescription: "Implemented JWT-based authentication for management endpoints, per-user authorization, and a configurable cap of 3 active keys per user to prevent credential sprawl. Enforced rate limiting (10 requests/minute per key) and request validation with class-validator. Built with NestJS and MongoDB (migrate-mongo for schema migrations), reaching 80%+ test coverage with Jest, containerized with Docker, and deployed to AWS Elastic Beanstalk.",
    technologies: ["NestJS", "MongoDB", "JWT", "Jest", "Docker", "AWS Elastic Beanstalk"],
    images: [],
    githubUrl: "https://github.com/Ghosteken/peppermint-BE-Assesment",
    featured: false,
    category: "web"
  },
  {
    id: "6",
    title: "Resilience 17 Venture Studio Assessment — Creator Rate Card Microservice",
    description: "A production-grade Node.js microservice for managing Creator Rate Cards, including VSL validation, automatic slug generation, and secure access controls.",
    technologies: ["JavaScript", "Express", "MongoDB"],
    images: [],
    githubUrl: "https://github.com/Ghosteken/Resilience-17-Venture-Studio-Assesment",
    featured: false,
    category: "web"
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
    name: "Next.js",
    category: "Frontend",
    icon: "nextjs",
    description: "Used for server-rendered, full-stack React applications with the App Router."
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
    description: "Framework used for building cross-platform web APIs (ASP.NET Core), microservices, and desktop applications."
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
    description: "Applied in scripting, data processing, and building backend services with frameworks like FastAPI."
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
    description: "Cloud platform utilized for deploying scalable applications, managing infrastructure, and using serverless functions (Lambda)."
  },
  {
    name: "Azure",
    category: "DevOps",
    icon: "azure",
    description: "Cloud services platform used for App Service hosting, resource provisioning, scaling, and monitoring."
  },
  {
    name: "CI/CD Pipelines",
    category: "DevOps",
    icon: "cicd",
    description: "Implemented for automated testing and deployment to ensure rapid and reliable software releases."
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    icon: "githubactions",
    description: "Used to automate linting, testing, and deployment workflows, including staging pipelines that eliminate manual redeploys."
  },
  {
    name: "Terraform",
    category: "DevOps",
    icon: "terraform",
    description: "Used for infrastructure-as-code to provision and manage cloud resources consistently."
  },

  // Testing & Tooling
  {
    name: "Jest",
    category: "Backend",
    icon: "jest",
    description: "Used for unit and integration testing, wired into CI/CD so every commit is validated before merge."
  },
  {
    name: "Postman",
    category: "Other",
    icon: "postman",
    description: "Used for API testing to verify functionality, reliability, and performance of REST endpoints."
  },
  {
    name: "Swagger",
    category: "Backend",
    icon: "swagger",
    description: "Used for API documentation, producing clear, comprehensive references for other developers."
  },
  {
    name: "Jira",
    category: "Other",
    icon: "jira",
    description: "Used for sprint planning, backlog grooming, and tracking feature delivery across engineering teams."
  }
];
