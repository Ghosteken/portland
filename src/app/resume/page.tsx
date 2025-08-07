import { Download, Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react'
import { personalInfo, workExperience, education, skills, projects } from '@/data/portfolio'

export default function Resume() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)
  
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    })
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header with Download Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Download or view my professional resume
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="/documents/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Download className="h-5 w-5" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 print:shadow-none print:p-0">
          {/* Header Section */}
          <div className="text-center mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-primary-600 mb-6">
              {personalInfo.title}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600">
                  {personalInfo.email}
                </a>
              </div>
              {personalInfo.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-primary-600">
                    {personalInfo.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Professional Summary
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Work Experience
            </h2>
            <div className="space-y-8">
              {workExperience.map((experience) => (
                <div key={experience.id}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {experience.position}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                      {formatDate(experience.startDate)} - {' '}
                      {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>
                  
                  {experience.achievements && experience.achievements.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600 dark:text-gray-300">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.field}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                      <div>{formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}</div>
                      {edu.gpa && <div>GPA: {edu.gpa}</div>}
                    </div>
                  </div>
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Featured Projects
            </h2>
            <div className="space-y-6">
              {featuredProjects.map((project) => (
                <div key={project.id}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-2 md:mt-0">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 text-sm flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 text-sm flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Print Instructions */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 print:hidden">
          <p>
            To print this resume, use your browser's print function (Ctrl+P / Cmd+P) or download the PDF version above.
          </p>
        </div>
      </div>
    </div>
  )
}
