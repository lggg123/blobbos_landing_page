import React from 'react';
import { Card } from '@/components/ui/card';

// Types and Interfaces
interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

interface CardItem {
  id: string;
  title: string;
  description: string;
  color: {
    from: string;
    to: string;
  };
}

interface FloatingBlob {
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: {
    width: string;
    height: string;
  };
  color: string;
  delay?: string;
}

// Constants
const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'faq', label: 'FAQ', href: '/faq' },
  { id: 'map', label: 'Map', href: '/map' }
];

const CARD_ITEMS: CardItem[] = [
  {
    id: 'mine',
    title: 'Mine',
    description: 'Explore the mines',
    color: { from: 'pink-400', to: 'purple-400' }
  },
  {
    id: 'blob',
    title: 'Blob',
    description: 'Meet your blob',
    color: { from: 'pink-400', to: 'purple-400' }
  },
  {
    id: 'adventure',
    title: 'Blobs Adventure',
    description: 'Start your journey',
    color: { from: 'pink-400', to: 'purple-400' }
  },
  {
    id: 'store',
    title: 'Store',
    description: 'Get new items',
    color: { from: 'pink-400', to: 'purple-400' }
  }
];

const FLOATING_BLOBS: FloatingBlob[] = [
  {
    position: { top: '5rem', left: '2.5rem' },
    size: { width: 'w-20', height: 'h-20' },
    color: 'bg-pink-400'
  },
  {
    position: { bottom: '5rem', right: '2.5rem' },
    size: { width: 'w-24', height: 'h-24' },
    color: 'bg-purple-400',
    delay: 'animation-delay-2000'
  },
  {
    position: { top: '50%', left: '33.333333%' },
    size: { width: 'w-16', height: 'h-16' },
    color: 'bg-yellow-400',
    delay: 'animation-delay-4000'
  }
];

// Components
const NavigationDot: React.FC<{ color: string }> = ({ color }) => (
  <div className={`w-3 h-3 rounded-full ${color}`} />
);

const NavigationButton: React.FC<{ item: NavigationItem }> = ({ item }) => (
  <button
    key={item.id}
    className="px-4 py-2 rounded-full bg-white bg-opacity-30 text-pink-600 hover:bg-opacity-40 transition-all"
  >
    {item.label}
  </button>
);

const FloatingBlob: React.FC<FloatingBlob> = ({ position, size, color, delay }) => (
  <div
    className={`absolute ${size.width} ${size.height} rounded-full ${color} opacity-50 animate-blob ${delay || ''}`}
    style={position}
  />
);

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="max-w-2xl mx-auto mb-12">
    <div className="h-4 bg-white bg-opacity-30 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const BlobbosAdventure: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-purple-200 to-blue-200 relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <NavigationDot color="bg-yellow-400" />
          <NavigationDot color="bg-pink-400" />
          <NavigationDot color="bg-blue-400" />
        </div>
        <div className="flex space-x-4">
          {NAVIGATION_ITEMS.map(item => (
            <NavigationButton key={item.id} item={item} />
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-8 pb-16">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-pink-600 mb-2 animate-bounce">
            Blobbos
          </h1>
          <h2 className="text-4xl font-semibold text-pink-500">
            Adventure
          </h2>
        </div>

        {/* Main Image Section */}
        <div className="relative w-full h-96 mb-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-100">
            <div className="absolute top-4 right-4 w-8 h-8 text-yellow-400">★</div>
            <div className="absolute top-12 left-8 w-6 h-6 text-yellow-400">✦</div>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar progress={50} />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARD_ITEMS.map((item) => (
            <Card 
              key={item.id} 
              className="p-6 rounded-3xl bg-white bg-opacity-90 backdrop-blur-sm transform hover:scale-105 transition-all"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${item.color.from} to-${item.color.to} mb-4`} />
              <h3 className="text-xl font-semibold text-pink-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <button className="mt-4 w-full py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium hover:opacity-90 transition-all">
                Play
              </button>
            </Card>
          ))}
        </div>
      </main>

      {/* Floating Blobs */}
      {FLOATING_BLOBS.map((blob, index) => (
        <FloatingBlob key={index} {...blob} />
      ))}
    </div>
  );
};

export default BlobbosAdventure;