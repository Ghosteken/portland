import Link from 'next/link'
import { ExternalLink, Github, Coins, Shield, Zap, Globe, Users, TrendingUp } from 'lucide-react'
import { web3Experience, projects } from '@/data/portfolio'

export default function Web3() {
  const web3Projects = projects.filter(p => p.category === 'web3')

  const blockchainIcons = {
    'Ethereum': '⟠',
    'Polygon': '⬟',
    'Binance Smart Chain': '🔶',
    'Solana': '◎',
    'Cardano': '₳',
    'Avalanche': '🔺'
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Coins className="h-4 w-4" />
            Web3 & Blockchain
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Web3 Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exploring the decentralized future through blockchain development and Web3 technologies
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">
              {web3Experience.blockchains.length}
            </div>
            <div className="text-sm opacity-90">
              Blockchains
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">
              {web3Experience.protocols.length}
            </div>
            <div className="text-sm opacity-90">
              DeFi Protocols
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">
              {web3Projects.length}
            </div>
            <div className="text-sm opacity-90">
              Web3 Projects
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">
              {web3Experience.tools.length}
            </div>
            <div className="text-sm opacity-90">
              Development Tools
            </div>
          </div>
        </div>

        {/* Blockchain Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Blockchain Ecosystems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {web3Experience.blockchains.map((blockchain) => (
              <div
                key={blockchain}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">
                    {blockchainIcons[blockchain as keyof typeof blockchainIcons] || '⛓️'}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {blockchain}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Experience building decentralized applications and smart contracts on {blockchain}.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DeFi Protocols */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            DeFi Protocols & Integration
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {web3Experience.protocols.map((protocol) => (
                <div
                  key={protocol}
                  className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="text-2xl mb-2">🔗</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {protocol}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Web3 Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Web3 Projects
          </h2>
          {web3Projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {web3Projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600">
                    <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                      🌐
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Web3 Projects Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently working on exciting Web3 projects that will be showcased here.
              </p>
            </div>
          )}
        </section>

        {/* Development Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Development Tools & Technologies
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  Smart Contract Development
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {web3Experience.tools.filter(tool => 
                    ['Hardhat', 'Truffle', 'Remix', 'Foundry'].includes(tool)
                  ).map((tool) => (
                    <li key={tool} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  Web3 Libraries
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {web3Experience.tools.filter(tool => 
                    ['Web3.js', 'Ethers.js', 'Wagmi', 'RainbowKit'].includes(tool)
                  ).map((tool) => (
                    <li key={tool} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  Infrastructure
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {web3Experience.tools.filter(tool => 
                    ['IPFS', 'The Graph', 'Alchemy', 'Infura'].includes(tool)
                  ).map((tool) => (
                    <li key={tool} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Web3 Social Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Web3 Community
          </h2>
          <div className="flex justify-center gap-6">
            {web3Experience.socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 text-center min-w-[120px]"
              >
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {link.platform}
                </h3>
                {link.username && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {link.username}
                  </p>
                )}
                <ExternalLink className="h-4 w-4 mx-auto mt-2 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Web3 Collaboration?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto opacity-90">
              I'm passionate about building the decentralized future. Let's discuss how we can 
              create innovative Web3 solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-100 transition-colors"
              >
                Start a conversation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
              >
                View all projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
