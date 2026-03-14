import Link from 'next/link'
import { Coins, BookOpen, Users, ExternalLink, Shield, Cpu, Globe } from 'lucide-react'
import { web3Experience } from '@/data/portfolio'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Web3() {
  const blockchainIcons: Record<string, string> = {
    'Ethereum': '⟠',
    'Polygon': '⬟',
    'Binance Smart Chain': '🔶',
    'Solana': '◎',
    'Cardano': '₳',
    'Avalanche': '🔺'
  }

  const protocolIcons: Record<string, string> = {
    'Uniswap': '🦄',
    'Aave': '👻',
    'Compound': '🏛️',
    'MakerDAO': '🏭',
    'Curve': '🌊',
    'SushiSwap': '🍣'
  }

  const learningAreas = [
    'Blockchain fundamentals and consensus mechanisms',
    'DeFi protocols and yield farming strategies',
    'NFT marketplaces and digital asset trading',
    'Smart contract security and best practices',
    'Tokenomics and cryptocurrency economics',
    'Layer 2 scaling solutions and cross-chain bridges'
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Coins className="h-4 w-4" />
            Web3 Enthusiast
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Learning Web3 & DeFi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring blockchain technology, decentralized finance, and the future of digital assets
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Learning Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="group-hover:text-primary transition-colors">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Blockchain Networks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {web3Experience.blockchains.map((name, index) => (
              <Card
                key={name}
                className="hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                    {blockchainIcons[name] || '🌐'}
                  </span>
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Protocols & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {web3Experience.protocols.map((name, index) => (
              <Card
                key={name}
                className="hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {protocolIcons[name] || '⚙️'}
                    </span>
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
            {web3Experience.tools.map((name) => (
              <Card
                key={name}
                className="hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer border-dashed"
              >
                <CardContent className="p-6 flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {web3Experience.socialLinks && web3Experience.socialLinks.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Web3 Presence
            </h2>
            <div className="flex justify-center gap-4">
              {web3Experience.socialLinks.map((link) => (
                <Button key={link.platform} asChild variant="outline" className="gap-2">
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    {link.platform}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 hover:shadow-xl transition-all duration-300 group">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I&apos;m passionate about understanding the Web3 ecosystem, from blockchain fundamentals to DeFi innovations.
              Always exploring new protocols, learning about tokenomics, and staying updated with the latest developments in the space.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
