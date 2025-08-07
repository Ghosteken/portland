import Image from 'next/image'
import { MapPin, Calendar, Mail, Phone } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function About() {

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


          </div>
        </div>
      </div>
    </div>
  )
}
