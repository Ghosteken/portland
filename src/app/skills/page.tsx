import { skills } from '@/data/portfolio'

export default function Skills() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  const getSkillDescription = (skillName: string) => {
    const descriptions: Record<string, string> = {
      // Frontend
      'React': 'Building interactive user interfaces and single-page applications with component-based architecture',
      'TypeScript': 'Strongly-typed superset of JavaScript that improves reliability and developer productivity',
      'JavaScript': 'Core programming language for web development, DOM manipulation, and client-side logic',
      'HTML/CSS': 'Creating semantic markup and responsive designs with modern CSS techniques',

      // Backend
      'Node.js': 'Server-side JavaScript runtime for building scalable network applications and APIs',
      'Express.js': 'Minimal and flexible Node.js web framework for building REST APIs and middleware',
      'Python': 'Versatile programming language for backend development, automation, and data processing',
      'API Development': 'Designing and implementing RESTful APIs with proper authentication and security measures',
      'API Documentation (Swagger)': 'OpenAPI-based documentation and tooling to describe, test, and share HTTP APIs',

      // Database
      'PostgreSQL': 'Advanced relational database management for complex data relationships and transactions',
      'MySQL': 'Popular relational database known for speed and reliability in web applications',
      'MongoDB': 'NoSQL document database for flexible data storage and rapid application development',
      'Supabase': 'Managed backend platform offering Postgres, auth, and storage with a simple SDK',
      'Redis': 'In-memory data store used for caching, sessions, and pub/sub messaging',
      'Prisma': 'Type-safe ORM for Node.js with rich migrations and schema modeling',
      'TypeORM': 'ORM for Node.js supporting multiple databases with decorators and repositories',
      'Mongoose': 'MongoDB ODM for modeling application data with schemas and validation',

      // DevOps
      'Docker': 'Containerization technology for consistent deployment environments and microservices architecture',
      'Git': 'Version control system for collaborative development and code management',
      'Linux': 'Unix-based operating system administration and command-line operations',
      'CI/CD Pipelines': 'Automated build, test, and deploy workflows that ensure reliable releases',
      'GitHub Actions': 'CI/CD platform for automating builds, tests, and deployments directly from GitHub',
      'Terraform': 'Infrastructure as Code tool to provision and manage cloud resources declaratively',
      'NGINX': 'High-performance web server and reverse proxy for load balancing and caching',
      'AWS': 'Cloud platform offering compute, storage, and managed services for scalable apps',
      'Azure': 'Microsoft cloud platform for hosting, scaling, and managing application services',

      // Networking
      'Firewall Configuration': 'Hands-on experience with testing and setup of firewalls to meet security standards during internship at Tiger Logic Africa',
      'Network Security': 'Applied technical skills to monitor network infrastructure, reduce system errors, and ensure compliance with security protocols',
      'Security Auditing': 'Conducted comprehensive testing to ensure firewalls and network systems were safe and compliant with industry standards',
      'Network Monitoring': 'Utilized cutting-edge tools and methods to monitor and audit network infrastructure for security vulnerabilities',

      // Other
      'Agile Methodologies': 'Iterative development approach with sprint planning, daily standups, and continuous improvement',
      'Postman': 'API testing tool used to validate endpoints, workflows, and performance',
      'Jest': 'JavaScript testing framework for unit and integration tests with rich assertions',
      'Testing': 'Writing unit tests, integration tests, and ensuring code quality through automated testing frameworks'
    }
    return descriptions[skillName] || `${skillName} — concise description coming soon`
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="border-l-4 border-primary-500 pl-4 hover:border-blue-500 hover:pl-6 transition-all duration-300 group">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {getSkillDescription(skill.name)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
