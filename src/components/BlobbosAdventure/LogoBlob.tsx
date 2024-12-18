import React from 'react';

export const LogoBlob: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
      >
        <defs>
          {/* Main Blob Gradient */}
          <radialGradient id="logo-blob-gradient" cx="50%" cy="35%" r="50%">
            <stop offset="0%" stopColor="#FFB5C5" />
            <stop offset="85%" stopColor="#FF9FB5" />
            <stop offset="100%" stopColor="#FF89A0" />
          </radialGradient>
          
          {/* Highlight Gradient */}
          <radialGradient id="logo-highlight" cx="70%" cy="20%" r="35%">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Adjusted Text Path for Curved BLOBBOS - made arc wider and higher */}
          <path
            id="textArc"
            d="M 60 180 A 140 140 0 0 1 340 180"
            fill="none"
          />
        </defs>

        {/* Main Blob - moved up by adjusting transform */}
        <g transform="translate(0, 20)">
          {/* Blob Shadow */}
          <ellipse
            cx="200"
            cy="280"
            rx="120"
            ry="20"
            fill="rgba(0,0,0,0.1)"
            filter="blur(8px)"
          />

          {/* Blob Body */}
          <circle
            cx="200"
            cy="150"
            r="120"
            fill="url(#logo-blob-gradient)"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="2"
            className="drop-shadow-lg"
          />

          {/* Highlight */}
          <circle
            cx="200"
            cy="150"
            r="100"
            fill="url(#logo-highlight)"
          />

          {/* Eyes */}
          <g className="transform translate-y-2">
            {/* Left Eye */}
            <g transform="translate(150, 130)">
              <ellipse cx="0" cy="0" rx="15" ry="20" fill="black" />
              <circle cx="-4" cy="-8" r="6" fill="white" />
              {/* Eyelash */}
              <path
                d="M -10 -15 L -15 -22 M 0 -18 L 0 -25 M 10 -15 L 15 -22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            
            {/* Right Eye */}
            <g transform="translate(250, 130)">
              <ellipse cx="0" cy="0" rx="15" ry="20" fill="black" />
              <circle cx="-4" cy="-8" r="6" fill="white" />
              {/* Eyelash */}
              <path
                d="M -10 -15 L -15 -22 M 0 -18 L 0 -25 M 10 -15 L 15 -22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* Happy Mouth */}
          <path
            d="M 160 180 Q 200 220 240 180"
            fill="none"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Cheeks */}
          <circle cx="140" cy="170" r="20" fill="#FFB5B5" opacity="0.4" />
          <circle cx="260" cy="170" r="20" fill="#FFB5B5" opacity="0.4" />
        </g>

        {/* Curved BLOBBOS Text - adjusted fontSize and spacing */}
        <text className="font-bold" fill="#FF4081">
          <textPath
            href="#textArc"
            startOffset="50%"
            textAnchor="middle"
            fontSize="52"
            letterSpacing="6"
          >
            BLOBBOS
          </textPath>
        </text>

        {/* ADVENTURE Text - adjusted position */}
        <text
          x="200"
          y="300"
          fontSize="36"
          fontWeight="bold"
          fill="#FF4081"
          textAnchor="middle"
          letterSpacing="3"
        >
          ADVENTURE
        </text>
      </svg>
    </div>
  );
}; 