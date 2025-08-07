import { Coins, BookOpen, Users } from 'lucide-react'

export default function Web3() {
  const blockchains = [
    { name: 'Ethereum', icon: '⟠', color: 'text-blue-500' },
    { name: 'Polygon', icon: '⬟', color: 'text-purple-500' },
    { name: 'Binance Smart Chain', icon: '🔶', color: 'text-yellow-500' },
    { name: 'Solana', icon: '◎', color: 'text-green-500' },
    { name: 'Cardano', icon: '₳', color: 'text-blue-600' },
    { name: 'Avalanche', icon: '🔺', color: 'text-red-500' }
  ]
  const defiProtocols = [
    { name: 'Uniswap', icon: '🦄', color: 'text-pink-500' },
    { name: 'Aave', icon: '👻', color: 'text-purple-600' },
    { name: 'Compound', icon: '🏛️', color: 'text-green-600' },
    { name: 'MakerDAO', icon: '🏭', color: 'text-orange-500' },
    { name: 'Curve', icon: '🌊', color: 'text-blue-400' },
    { name: 'SushiSwap', icon: '🍣', color: 'text-red-400' }
  ]
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
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Current Learning Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningAreas.map((area, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-900 dark:text-white">{area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Blockchain Networks I'm Exploring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blockchains.map((blockchain) => (
              <div key={blockchain.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center gap-3">
                  <span className={`text-2xl ${blockchain.color}`}>{blockchain.icon}</span>
                  <span className="text-gray-900 dark:text-white font-medium">{blockchain.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            DeFi Protocols I'm Learning About
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {defiProtocols.map((protocol) => (
              <div key={protocol.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center gap-3">
                  <span className={`text-2xl ${protocol.color}`}>{protocol.icon}</span>
                  <span className="text-gray-900 dark:text-white font-medium">{protocol.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm passionate about understanding the Web3 ecosystem, from blockchain fundamentals to DeFi innovations. 
              Always exploring new protocols, learning about tokenomics, and staying updated with the latest developments in the space.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
