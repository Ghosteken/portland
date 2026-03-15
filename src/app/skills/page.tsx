import { skills } from '@/data/portfolio'

export default function Skills() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive look at the technologies I use to build robust and scalable applications.
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
                  <div key={skill.name} className="border-l-4 border-primary pl-4 hover:border-blue-500 hover:pl-6 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {skill.description || `${skill.name} — I use this technology to deliver high-quality software solutions and solve complex engineering challenges.`}
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
