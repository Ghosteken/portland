import { Calendar, ExternalLink, Award } from 'lucide-react'
import { workExperience } from '@/data/portfolio'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Experience() {
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
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth())
    
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    
    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the roles that have shaped my career
          </p>
        </div>

        {/* Summary removed per user request */}

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {workExperience.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold mb-2">
                            {experience.position}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-lg text-primary font-medium mb-3">
                            <span>{experience.company}</span>
                            {experience.logo && (
                              <ExternalLink className="h-4 w-4" />
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {formatDate(experience.startDate)} - {' '}
                                {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>•</span>
                              <span>{calculateDuration(experience.startDate, experience.endDate)}</span>
                            </div>
                          </div>
                        </div>
                        
                        {!experience.endDate && (
                          <div className="mt-4 md:mt-0">
                            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-100">
                              Current Role
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Award className="h-5 w-5 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li 
                                key={achievementIndex}
                                className="flex items-start gap-3 text-muted-foreground"
                              >
                                <span className="text-primary mt-1.5">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="bg-primary/5"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-muted/50 border-none p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Interested in working together?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities and exciting projects. 
                Let&apos;s connect and see how we can create something amazing together.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a href="/documents/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
