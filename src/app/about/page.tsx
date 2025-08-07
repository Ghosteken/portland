import Image from 'next/image'
import { MapPin, Calendar, Mail, Phone } from 'lucide-react'
import { personalInfo, skills } from '@/data/portfolio'

export default function About() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500'
      case 'Advanced':
        return 'bg-blue-500'
      case 'Intermediate':
        return 'bg-yellow-500'
      case 'Beginner':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'w-full'
      case 'Advanced':
        return 'w-4/5'
      case 'Intermediate':
        return 'w-3/5'
      case 'Beginner':
        return 'w-2/5'
      default:
        return 'w-1/5'
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, skills, and what drives me as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-lg text-primary-600 mb-4">
                  {personalInfo.title}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Mail className="h-5 w-5 text-primary-600" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                {personalInfo.phone && (
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <a href={`tel:${personalInfo.phone}`} className="hover:text-primary-600 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Calendar className="h-5 w-5 text-primary-600" />
                  <span>Available for opportunities</span>
                </div>
              </div>


            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio Section */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm passionate about creating innovative solutions that solve real-world problems. 
                  My journey in technology started with curiosity about how things work, and it has 
                  evolved into a career focused on building scalable, user-friendly applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge through blog posts and community 
                  involvement. I believe in continuous learning and staying up-to-date with the 
                  latest industry trends.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Expertise
              </h3>
              <div className="space-y-8">
                {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {category}
                    </h4>
                    <div className="space-y-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests Section */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technology
                  </h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Blockchain & Web3 Development</li>
                    <li>• AI & Machine Learning</li>
                    <li>• Open Source Contributions</li>
                    <li>• Tech Blogging</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Personal
                  </h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Photography</li>
                    <li>• Traveling</li>
                    <li>• Reading Tech Books</li>
                    <li>• Community Meetups</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Value
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Always looking for creative solutions and new ways to solve problems
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Collaboration
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Believing in the power of teamwork and knowledge sharing
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Learning
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Committed to continuous growth and staying current with technology
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
