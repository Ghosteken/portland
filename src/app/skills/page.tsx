'use client'

import { useState } from 'react'
import { Code, Database, Cloud, Smartphone, Globe, Zap, Star, TrendingUp } from 'lucide-react'
import { skills } from '@/data/portfolio'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const categories = ['all', ...Array.from(new Set(skills.map(s => s.category)))]
  
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory)

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Globe className="h-6 w-6" />
      case 'Backend':
        return <Code className="h-6 w-6" />
      case 'Database':
        return <Database className="h-6 w-6" />
      case 'DevOps':
        return <Cloud className="h-6 w-6" />
      case 'Mobile':
        return <Smartphone className="h-6 w-6" />
      case 'Web3':
        return <Zap className="h-6 w-6" />
      default:
        return <Star className="h-6 w-6" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'from-blue-500 to-cyan-500'
      case 'Backend':
        return 'from-green-500 to-emerald-500'
      case 'Database':
        return 'from-purple-500 to-violet-500'
      case 'DevOps':
        return 'from-orange-500 to-red-500'
      case 'Mobile':
        return 'from-pink-500 to-rose-500'
      case 'Web3':
        return 'from-indigo-500 to-purple-500'
      default:
        return 'from-gray-500 to-slate-500'
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {skills.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Total Skills
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {skills.filter(s => s.level === 'Expert').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Expert Level
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {skills.filter(s => s.level === 'Advanced').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Advanced Level
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {Object.keys(skillsByCategory).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Categories
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'All Skills' : category}
            </button>
          ))}
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <section key={category} className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(category)} flex items-center justify-center text-white`}>
                  {getCategoryIcon(category)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {categorySkills.length} skill{categorySkills.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        skill.level === 'Expert' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                      <div
                        className={`h-3 rounded-full ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)} transition-all duration-500`}
                      />
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Proficiency</span>
                      <span>
                        {skill.level === 'Expert' ? '90-100%' :
                         skill.level === 'Advanced' ? '70-89%' :
                         skill.level === 'Intermediate' ? '50-69%' :
                         '30-49%'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Learning Journey */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Continuous Learning
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Always Improving
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Constantly updating and expanding my skill set to stay current with industry trends and best practices.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quality Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Prioritizing depth over breadth, ensuring strong fundamentals in core technologies before expanding.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Practical Application
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learning through real-world projects and hands-on experience to build practical, applicable skills.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              With this diverse skill set, I'm ready to tackle complex projects and deliver 
              high-quality solutions. Let's discuss how my expertise can help your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Start a project
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View my work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
