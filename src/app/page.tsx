import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, MapPin, Calendar, Github, Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react'
import { personalInfo, socialLinks, projects, workExperience, skills } from '@/data/portfolio'
import { Button } from '@/components/ui/button'
import { imageConfig } from '@/lib/image-config'

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)
  const latestExperience = workExperience[0]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Cover Photo */}
      <section className="relative">
        {/* Cover Photo */}
        <div className="h-64 md:h-80 lg:h-96 relative overflow-hidden">
          <Image
            src={personalInfo.coverImage}
            alt="Cover"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        
        {/* Profile Section */}
        <div className="relative -mt-20 md:-mt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
              {/* Profile Picture */}
              <div className="relative mx-auto md:mx-0 mb-4 md:mb-0">
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden bg-white dark:bg-gray-900">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left pb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-3">
                  {personalInfo.title}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Available for opportunities
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/resume"
                    className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-8">
              {personalInfo.bio}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              Learn more about me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Connect with me
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Follow my journey across different platforms
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => {
              const icons = {
                github: Github,
                linkedin: Linkedin,
                twitter: Twitter,
                instagram: Instagram,
              }
              const IconComponent = icons[link.icon as keyof typeof icons]
              
              if (!IconComponent) return null
              
              return (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                  <IconComponent className="h-8 w-8 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 transition-colors mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {link.platform}
                  </span>
                  {link.username && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {link.username}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Some of my recent work that I'm proud of
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Current Role */}
      {latestExperience && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                Currently Working At
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {latestExperience.position}
                </h3>
                <p className="text-xl text-primary-600 mb-4">
                  {latestExperience.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {latestExperience.description}
                </p>
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  View full experience
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
