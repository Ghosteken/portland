import { Calendar, Award, GraduationCap, BookOpen } from 'lucide-react'
import { education } from '@/data/portfolio'

export default function Education() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    
    const years = end.getFullYear() - start.getFullYear()
    const months = end.getMonth() - start.getMonth()
    
    let totalYears = years
    if (months < 0) {
      totalYears -= 1
    }
    
    return `${totalYears} year${totalYears !== 1 ? 's' : ''}`
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Education
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={edu.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <GraduationCap className="h-6 w-6 text-primary-600" />
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                          {edu.field}
                        </p>
                        <div className="flex items-center gap-2 text-lg text-primary-600 mb-3">
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {formatDate(edu.startDate)} - {' '}
                              {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>•</span>
                            <span>{calculateDuration(edu.startDate, edu.endDate)}</span>
                          </div>
                        </div>
                      </div>
                      
                      {edu.gpa && (
                        <div className="mt-4 md:mt-0">
                          <div className="bg-primary-100 dark:bg-primary-900 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-primary-800 dark:text-primary-200">
                              {edu.gpa}
                            </div>
                            <div className="text-xs text-primary-600 dark:text-primary-400">
                              GPA
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary-600" />
                          Achievements & Honors
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li 
                              key={achievementIndex}
                              className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                            >
                              <span className="text-primary-600 mt-1.5">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Relevant Coursework */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary-600" />
                        Relevant Coursework
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          'Data Structures & Algorithms',
                          'Software Engineering',
                          'Database Systems',
                          'Computer Networks',
                          'Web Development',
                          'Mobile App Development',
                          'Machine Learning',
                          'Cybersecurity'
                        ].map((course) => (
                          <div
                            key={course}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                          >
                            <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Education */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Continuous Learning
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Online Courses */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Online Courses
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Advanced React Patterns</li>
                <li>• AWS Solutions Architecture</li>
                <li>• Blockchain Development</li>
                <li>• TypeScript Masterclass</li>
              </ul>
            </div>

            {/* Workshops */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Workshops
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Google I/O Extended</li>
                <li>• React Conf Workshops</li>
                <li>• DevOps Bootcamp</li>
                <li>• UI/UX Design Thinking</li>
              </ul>
            </div>

            {/* Self-Study */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Self-Study
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Open Source Contributions</li>
                <li>• Technical Blog Writing</li>
                <li>• Side Project Development</li>
                <li>• Community Involvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Education doesn't stop at graduation. I'm committed to continuous learning 
              and staying current with the latest technologies and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/certificates"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                View Certificates
              </a>
              <a
                href="/skills"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
