import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { BackgroundScene } from './BackgroundScene';
import { Tree } from './Tree';
import { House } from './House';
import { CuteBlob } from './CuteBlob';
import { LogoBlob } from './LogoBlob';

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

const BlobbosAdventure: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <BackgroundScene />
      </div>

      {/* Scene Elements Layer */}
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full" viewBox="0 0 1200 675" preserveAspectRatio="xMidYMid slice">
          {/* Trees */}
          <Tree x={100} y={300} scale={1.2} />
          <Tree x={200} y={320} scale={0.8} />
          <Tree x={800} y={310} scale={1} />
          <Tree x={900} y={330} scale={0.9} />
          
          {/* Houses */}
          <House x={150} y={400} />
          <House x={400} y={420} scale={0.9} />
          <House x={700} y={410} scale={1.1} />
        </svg>
      </div>

      {/* Logo Layer - adjusted positioning */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ marginTop: '-10%' }}>
        <div className="w-[700px] max-w-full">
          <LogoBlob className="animate-float-slow" />
        </div>
      </div>

      {/* Floating Blobs Layer - adjust z-index to be behind logo */}
      <div className="absolute inset-0 z-10">
        <CuteBlob 
          className="absolute top-20 left-20 w-40 h-40"
          color="#FFB5C5"
          expression="worried"
          delay="animate-float"
        />
        <CuteBlob 
          className="absolute top-40 right-40 w-32 h-32"
          color="#FFD6E0"
          expression="happy"
          delay="animate-float-delayed"
        />
      </div>

      {/* UI Layer */}
      <div className="relative z-30 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-4">
          {/* Left Side Stats */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span>💎</span>
              <span className="text-white font-medium">42.69K</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span>🪙</span>
              <span className="text-white font-medium">69.42K</span>
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

        {/* Main Content - Added more spacing */}
        <main className="mt-auto pb-12">
          {/* Increased spacer height */}
          <div className="h-[45vh]"></div>
          
          {/* Progress Bar - Added more top margin */}
          <div className="max-w-2xl mx-auto pt-80">
            <div className="h-3 bg-white/30 backdrop-blur-sm rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" />
            </div>
          </div>

          {/* Game Mode Cards - Added more spacing */}
          <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto px-6 mt-8">
            {CARD_ITEMS.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center mb-3`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <Card className="w-full p-5 rounded-2xl bg-white/90 backdrop-blur-sm">
                  <h3 className="text-center text-pink-500 font-medium text-lg mb-2">{item.title}</h3>
                  <button className="w-full mt-4 py-2.5 rounded-full bg-pink-400 text-white text-sm hover:bg-pink-500 transition-colors">
                    Play
                  </button>
                </Card>
              </div>
            ))}
          </div>

          {/* Increased bottom spacing */}
          <div className="h-16"></div>
        </main>
      </div>
    </div>
  );
};

export default BlobbosAdventure;