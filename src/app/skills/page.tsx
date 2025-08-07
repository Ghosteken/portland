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
      'JavaScript': 'Core programming language for web development, DOM manipulation, and client-side logic',
      'HTML/CSS': 'Creating semantic markup and responsive designs with modern CSS techniques',

      // Backend
      'Node.js': 'Server-side JavaScript runtime for building scalable network applications and APIs',
      'Python': 'Versatile programming language for backend development, automation, and data processing',
      'Django': 'High-level Python web framework for rapid development of secure and maintainable web applications',
      'API Development': 'Designing and implementing RESTful APIs with proper authentication and security measures',

      // Database
      'PostgreSQL': 'Advanced relational database management for complex data relationships and transactions',
      'MongoDB': 'NoSQL document database for flexible data storage and rapid application development',

      // DevOps
      'Docker': 'Containerization technology for consistent deployment environments and microservices architecture',
      'Git': 'Version control system for collaborative development and code management',
      'Linux': 'Unix-based operating system administration and command-line operations',

      // Other
      'Agile Methodologies': 'Iterative development approach with sprint planning, daily standups, and continuous improvement',
      'Testing': 'Writing unit tests, integration tests, and ensuring code quality through automated testing frameworks'
    }
    return descriptions[skillName] || 'Professional experience with this technology'
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
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
