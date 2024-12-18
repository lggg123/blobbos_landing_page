import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

// Types and Interfaces
interface CardItem {
  id: string;
  title: string;
  icon: string;
  color: string;
}

const CARD_ITEMS: CardItem[] = [
  {
    id: 'mine',
    title: 'Mine',
    icon: '💎',
    color: 'bg-pink-100'
  },
  {
    id: 'blob',
    title: 'Blob',
    icon: '🫧',
    color: 'bg-blue-100'
  },
  {
    id: 'blobs-adventure',
    title: 'Blobs Adventure',
    icon: '🎮',
    color: 'bg-orange-100'
  },
  {
    id: 'store',
    title: 'Store',
    icon: '🏪',
    color: 'bg-pink-100'
  }
];

const BlobCharacter: React.FC<{
  className?: string;
  color: string;
  delay?: string;
}> = ({ className = '', color, delay = '' }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className={`relative ${delay}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          {/* Gradient Definition */}
          <defs>
            <radialGradient id={`blob-gradient-${color}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.9 }} />
              <stop offset="85%" style={{ stopColor: color, stopOpacity: 0.7 }} />
              <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.4 }} />
            </radialGradient>
            {/* Glow Effect */}
            <filter id="blob-glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="blur" in2="SourceGraphic" operator="over" />
            </filter>
          </defs>

          {/* Glow Layer */}
          <path
            d="M 100 0 
               C 130 0 150 20 170 50
               C 190 80 200 100 190 130
               C 180 160 150 200 100 200
               C 50 200 20 160 10 130
               C 0 100 10 80 30 50
               C 50 20 70 0 100 0"
            fill={color}
            opacity="0.4"
            filter="url(#blob-glow)"
          />

          {/* Main Blob Layer */}
          <path
            d="M 100 0 
               C 130 0 150 20 170 50
               C 190 80 200 100 190 130
               C 180 160 150 200 100 200
               C 50 200 20 160 10 130
               C 0 100 10 80 30 50
               C 50 20 70 0 100 0"
            fill={`url(#blob-gradient-${color})`}
            className="animate-float"
          />
        </svg>
      </div>
    </div>
  );
};

const BlobbosAdventure: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-purple-400 to-[#8B9DC3] relative overflow-hidden">
      {/* Corner Blobs */}
      <BlobCharacter 
        className="top-0 left-0 w-40 h-40 -translate-x-1/4 -translate-y-1/4"
        color="#FF6B9D"
      />
      <BlobCharacter 
        className="top-0 right-0 w-48 h-48 translate-x-1/4 -translate-y-1/4"
        color="#FF8FB4"
        delay="animate-float-delayed"
      />
      <BlobCharacter 
        className="top-20 left-20 w-24 h-24"
        color="#FFD700"
      />
      <BlobCharacter 
        className="top-16 right-32 w-20 h-20"
        color="#7B9FFF"
        delay="animate-float-delayed"
      />

      {/* Header Navigation */}
      <nav className="flex justify-between items-center p-4 relative z-10">
        {/* Left Side Stats */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Image src="/pepe-coin.png" alt="PEPE" width={20} height={20} className="w-5 h-5" />
            <span className="text-white font-medium">42.69K</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Image src="/doge-coin.png" alt="DOGE" width={20} height={20} className="w-5 h-5" />
            <span className="text-white font-medium">69.42K</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span>🚀</span>
            <span className="text-white font-medium">420</span>
          </div>
        </div>

        {/* Right Side Links */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
            <span>🎮</span>
            Play2Earn
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
            <span>🌟</span>
            Stake
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
            <span>🔄</span>
            Swap
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-4 pb-16 relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Stars */}
          <div className="absolute inset-0 animate-twinkle">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-200"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${1 + Math.random() * 2}s infinite`
                }}
              />
            ))}
          </div>
          
          {/* Floating Blobs */}
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-pink-400/50 animate-float" />
          <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-yellow-400/50 animate-float-delayed" />
          <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-blue-400/50 animate-float" />
        </div>

        {/* Game Scene */}
        <div className="relative mb-8">
          {/* Main Logo */}
          <div className="text-center mb-4">
            <h1 className="text-6xl font-bold text-white drop-shadow-lg">
              Blobbos
            </h1>
            <h2 className="text-4xl font-semibold text-white drop-shadow-lg">
              Adventure
            </h2>
          </div>

          {/* Main Scene Container */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/blobbos-adventure.png"
                alt="Blobbos Adventure"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="h-3 bg-white/30 backdrop-blur-sm rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" />
          </div>
        </div>

        {/* Game Mode Cards */}
        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
          {CARD_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <Card className="w-full p-4 rounded-2xl bg-white/90 backdrop-blur-sm border-0">
                <h3 className="text-center text-pink-500 font-medium">{item.title}</h3>
                <button className="w-full mt-4 py-2 rounded-full bg-pink-400 text-white text-sm hover:bg-pink-500 transition-colors">
                  Play
                </button>
              </Card>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlobbosAdventure;