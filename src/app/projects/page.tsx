import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Projects() {

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            A showcase of my work, from web applications to blockchain projects
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            Updating Projects
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-primary/5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <Button asChild variant="ghost" size="sm" className="gap-2">
                          <Link href={project.githubUrl}>
                            <Github className="h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button asChild variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                          <Link href={project.liveUrl}>
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-muted/50 border-none p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Have a project in mind?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new and challenging projects.
                Let's discuss how we can bring your ideas to life.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in touch
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
