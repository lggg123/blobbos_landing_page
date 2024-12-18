import React from 'react';

interface FigmaBlobProps {
  className?: string;
}

export const FigmaBlob: React.FC<FigmaBlobProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <svg width="113.5" height="113" viewBox="0 0 113.5 113" className="w-full h-full">
        <defs>
          <filter id="blobShadow" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feComponentTransfer in="SourceAlpha">
              <feFuncR type="linear" slope="0" intercept="1"/>
              <feFuncG type="linear" slope="0" intercept="1"/>
              <feFuncB type="linear" slope="0" intercept="1"/>
              <feFuncA type="linear" slope="10000" intercept="0"/>
            </feComponentTransfer>
            <feOffset dx="5" dy="7"/>
            <feGaussianBlur stdDeviation="3"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="-1" intercept="1"/>
            </feComponentTransfer>
            <feComposite operator="in" in2="SourceGraphic"/>
            <feMerge>
              <feMergeNode in="SourceGraphic"/>
              <feMergeNode/>
            </feMerge>
          </filter>

          <linearGradient 
            id="blobGradient" 
            gradientTransform="matrix(-19.4071 111 -111.5 -19.4945 111.5 9.74724)" 
            gradientUnits="userSpaceOnUse"
            x1="0" y1="0.5" x2="1" y2="0.5"  // Added these attributes
          >
            <stop offset="0.27941176" stopColor="rgb(251, 186, 181)"/>
            <stop offset="0.72006685" stopColor="rgb(248, 99, 179)"/>
          </linearGradient>

          <filter id="mouthShadow" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feComponentTransfer in="SourceAlpha">
              <feFuncR type="linear" slope="0" intercept="0"/>
              <feFuncG type="linear" slope="0" intercept="0"/>
              <feFuncB type="linear" slope="0" intercept="0"/>
              <feFuncA type="linear" slope="10000" intercept="0"/>
            </feComponentTransfer>
            <feOffset dx="2" dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="-0.9" intercept="0.9"/>
            </feComponentTransfer>
            <feComposite operator="in" in2="SourceGraphic"/>
            <feMerge>
              <feMergeNode in="SourceGraphic"/>
              <feMergeNode/>
            </feMerge>
          </filter>
        </defs>

        {/* Main Blob Body */}
        <g filter="url(#blobShadow)">
          <path 
            transform="matrix(1 0 0 1 1 1)" 
            d="M58.5 0C95.5 0 111.5 24.8482 111.5 55.5C111.5 86.1518 82.2711 111 53 111C23.7289 111 0 86.1518 0 55.5C0 24.8482 21.5 0 58.5 0Z" 
            fill="url(#blobGradient)"
            fillRule="nonzero"
          />
          <path 
            transform="matrix(1 0 0 1 1 1)" 
            d="M82.7771 3.43915Q72.1819 -1 58.5 -1Q44.7729 -0.999996 33.3874 3.42952Q27.9337 5.55128 23.1852 8.64029Q18.5328 11.6667 14.6664 15.55Q10.86 19.3729 7.91429 23.9262Q4.9976 28.4347 3.00604 33.533Q1.02112 38.6144 0.0123802 44.1351Q-1 49.6757 -0.999996 55.5Q-0.999997 61.2717 0.0953338 66.877Q1.16309 72.3411 3.23778 77.4776Q5.27509 82.5216 8.21127 87.0727Q11.1201 91.5815 14.8001 95.4351Q18.4814 99.2899 22.7897 102.338Q27.1411 105.416 31.965 107.553Q36.8799 109.73 42.1091 110.85Q47.4747 112 53 112Q58.5278 112 64.1188 110.852Q69.5773 109.731 74.8684 107.564Q80.0906 105.425 84.909 102.366Q89.723 99.3093 93.9021 95.4819Q98.1288 91.6107 101.507 87.1328Q104.961 82.5531 107.377 77.537Q109.869 72.3607 111.16 66.9158Q112.5 61.2624 112.5 55.5Q112.5 43.5793 109.376 33.5982Q106.102 23.1362 99.6337 15.6041Q92.7893 7.63406 82.7771 3.43915ZM111.5 55.5C111.5 24.8482 95.5 0 58.5 0C21.5 0 0 24.8482 0 55.5C0 86.1518 23.7289 111 53 111C82.2711 111 111.5 86.1518 111.5 55.5Z" 
            fill="rgb(136, 93, 92)"
            fillRule="evenodd"
            style={{ opacity: 0.1}}
          />
        </g>

        {/* Eyes */}
        <path 
          transform="matrix(1 0 0 1 67 30)" 
          d="M9.5 0C15.5 1.5 22 5.5 20.5 11C20.5 16.5228 14.7467 22.5 9.5 22.5C4.2533 22.5 0 18 0 11C0 4 4.2533 0 9.5 0Z" 
          fill="rgb(87, 19, 62)"
        />
        <g style={{ mixBlendMode: 'luminosity' }}>
          <path 
            transform="matrix(1 0 0 1 70 31)" 
            d="M4.5 0C6.98528 0 10 2.61929 10 4C10 5.38071 7.98528 6.5 5.5 6.5C3.50001 8 0 4.99998 0 2.5C0 1.11929 2.01472 0 4.5 0Z" 
            fill="rgb(255, 255, 255)"
          />
        </g>
        <path 
          transform="matrix(1 0 0 1 26 29)" 
          d="M10 0C15 1 21 5.49998 19.5 11C19.5 16.5228 15.2467 22.5 10 22.5C4.7533 22.5 0 18 0 11C0 3.99998 4.7533 0 10 0Z" 
          fill="rgb(87, 19, 62)"
        />
        <g style={{ mixBlendMode: 'luminosity' }}>
          <path 
            transform="matrix(1 0 0 1 31 29)" 
            d="M4.5 0C6.98528 0 10 3.62671 10 5.53846C10 7.45022 7.98528 9 5.5 9C3.01472 9 0 6.92304 0 3.46154C0 1.54978 2.01472 0 4.5 0Z" 
            fill="rgb(255, 255, 255)"
          />
        </g>

        {/* Mouth */}
        <g filter="url(#mouthShadow)">
          <path 
            transform="matrix(1 0 0 1 42 63.8554)" 
            d="M11 0.458457C17.2068 -0.512982 27.8832 -0.0842247 29 3.14462C32 11.8183 18.2413 15.6446 11 15.6446C2.00002 17.3307 0 9.73482 0 6.31829C0 2.90177 4.27595 -0.998614 11 0.458457Z" 
            fill="rgb(211, 84, 95)"
          />
        </g>
      </svg>
    </div>
  );
}; 