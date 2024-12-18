import React from 'react';

interface TreeProps {
  x: number;
  y: number;
  scale?: number;
  variant?: 'normal' | 'tall' | 'wide';
}

export const Tree: React.FC<TreeProps> = ({ x, y, scale = 1, variant = 'normal' }) => {
  const getTreeShape = () => {
    switch (variant) {
      case 'tall':
        return {
          trunk: "M45 150 L45 70 Q50 65 55 70 L55 150 Z",
          foliage1: "M50 10 L85 80 Q50 90 15 80 Z",
          foliage2: "M50 0 L75 50 Q50 60 25 50 Z"
        };
      case 'wide':
        return {
          trunk: "M45 150 L45 90 Q50 85 55 90 L55 150 Z",
          foliage1: "M50 30 L90 90 Q50 100 10 90 Z",
          foliage2: "M50 20 L80 70 Q50 80 20 70 Z"
        };
      default:
        return {
          trunk: "M45 150 L45 80 Q50 75 55 80 L55 150 Z",
          foliage1: "M50 20 L80 90 Q50 100 20 90 Z",
          foliage2: "M50 0 L70 60 Q50 70 30 60 Z"
        };
    }
  };

  const shape = getTreeShape();

  return (
    <svg 
      width={100 * scale} 
      height={150 * scale} 
      viewBox="0 0 100 150" 
      x={x} 
      y={y}
      className="transition-transform hover:scale-105"
    >
      <defs>
        <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3A7734', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2D5A27', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Tree trunk with shadow */}
      <path
        d={shape.trunk}
        fill="#8B4513"
      />
      <ellipse cx="50" cy="150" rx="15" ry="5" fill="rgba(0,0,0,0.1)" />
      
      {/* Tree foliage with gradient */}
      <path
        d={shape.foliage1}
        fill="url(#treeGradient)"
        className="hover:animate-sway"
      />
      <path
        d={shape.foliage2}
        fill="url(#treeGradient)"
        className="hover:animate-sway-delayed"
      />
    </svg>
  );
}; 