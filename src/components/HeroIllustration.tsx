import React from 'react'

export const HeroIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full max-w-[320px] sm:max-w-[360px] aspect-[7/8] mx-auto select-none overflow-hidden ${className}`}
      aria-label="Illustration of Fahim and Joyee under a decorative pastel arch"
    >
      <svg
        viewBox="0 0 350 400"
        className="w-full h-full drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="skyArchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#E8F5FD" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#FFF5F8" stop-opacity="0.4" />
          </linearGradient>

          <linearGradient id="roseAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#EFA9BF" />
            <stop offset="100%" stop-color="#B04C6C" />
          </linearGradient>

          <linearGradient id="groomSherwani" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E8F5FD" />
            <stop offset="100%" stop-color="#CDE8F8" />
          </linearGradient>

          <linearGradient id="brideLehenga" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F9D5E0" />
            <stop offset="100%" stop-color="#EFA9BF" />
          </linearGradient>

          <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FCEAE1" />
            <stop offset="100%" stop-color="#F3D5C5" />
          </linearGradient>

          {/* Self-drawing arch stroke animation */}
          <style>{`
            @keyframes drawArch {
              0% { stroke-dashoffset: 1200; }
              100% { stroke-dashoffset: 0; }
            }
            .arch-line {
              stroke-dasharray: 1200;
              stroke-dashoffset: 0;
              animation: drawArch 1.8s ease-out forwards;
            }
            @keyframes lanternSwayL {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(3deg); }
            }
            @keyframes lanternSwayR {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-3deg); }
            }
            @keyframes dupattaWave {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-2px) rotate(1.5deg); }
            }
            @keyframes petalFloat {
              0% { transform: translate(0, 0) scale(0.8); opacity: 0; }
              25% { opacity: 0.6; }
              75% { opacity: 0.8; }
              100% { transform: translate(-8px, -60px) scale(1.1); opacity: 0; }
            }
            @keyframes moonPulse {
              0%, 100% { opacity: 0.75; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.08); }
            }
            .moon-glow {
              transform-origin: 175px 44px;
              animation: moonPulse 4s ease-in-out infinite;
            }
            .lantern-l { transform-origin: 50px 70px; animation: lanternSwayL 5s ease-in-out infinite; }
            .lantern-r { transform-origin: 300px 70px; animation: lanternSwayR 5.5s ease-in-out infinite; }
            .dupatta-animated { transform-origin: 230px 180px; animation: dupattaWave 4s ease-in-out infinite; }
            .petal-1 { animation: petalFloat 6s ease-in infinite; animation-delay: 0.5s; }
            .petal-2 { animation: petalFloat 7s ease-in infinite; animation-delay: 2.5s; }
            .petal-3 { animation: petalFloat 6.5s ease-in infinite; animation-delay: 4.2s; }

            @media (prefers-reduced-motion: reduce) {
              .arch-line, .lantern-l, .lantern-r, .dupatta-animated, .petal-1, .petal-2, .petal-3, .moon-glow {
                animation: none !important;
                stroke-dashoffset: 0 !important;
              }
            }
          `}</style>
        </defs>

        {/* Backdrop Inside Arch */}
        <path
          d="M 25 390 L 25 170 C 25 75, 120 20, 175 10 C 230 20, 325 75, 325 170 L 325 390 Z"
          fill="url(#skyArchGrad)"
        />

        {/* Outer Mihrab Arch with Self-Drawing stroke */}
        <path
          className="arch-line"
          d="M 25 390 L 25 170 C 25 75, 120 20, 175 10 C 230 20, 325 75, 325 170 L 325 390"
          stroke="url(#roseAccentGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Inner Delicate Arch Accent */}
        <path
          d="M 36 390 L 36 175 C 36 88, 125 32, 175 24 C 225 32, 314 88, 314 175 L 314 390"
          stroke="#8EC5E8"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.7"
        />

        {/* Arch Finial 8-Point Star */}
        <g transform="translate(175, 10)">
          <circle cx="0" cy="0" r="6" fill="#FFF5F8" stroke="#B04C6C" strokeWidth="1.2" />
          <path d="M 0 -4 L 1 -1 L 4 0 L 1 1 L 0 4 L -1 1 L -4 0 L -1 -1 Z" fill="#B04C6C" />
        </g>

        {/* Crescent Moon with Subtle Glow */}
        <g className="moon-glow" transform="translate(175, 44)">
          <path
            d="M -6 -8 A 9 9 0 1 0 4 8 A 7 7 0 1 1 -6 -8 Z"
            fill="#FFF5F8"
            stroke="#B04C6C"
            strokeWidth="0.8"
          />
          <circle cx="0" cy="-1" r="1.2" fill="#B04C6C" opacity="0.8" />
        </g>

        {/* Twinkling Stars in Sky */}
        <g opacity="0.6">
          <circle cx="90" cy="90" r="1.5" fill="#B04C6C" />
          <circle cx="260" cy="90" r="1.5" fill="#8EC5E8" />
          <circle cx="175" cy="55" r="2" fill="#EFA9BF" />
        </g>

        {/* Hanging Lantern Left */}
        <g className="lantern-l">
          <line x1="60" y1="70" x2="60" y2="105" stroke="#B04C6C" strokeWidth="0.8" opacity="0.6" />
          <rect x="54" y="105" width="12" height="18" rx="2" fill="#FFF5F8" stroke="#B04C6C" strokeWidth="1" />
          <polygon points="54,105 60,99 66,105" fill="#EFA9BF" />
          <polygon points="54,123 60,127 66,123" fill="#EFA9BF" />
          <circle cx="60" cy="114" r="2" fill="#B04C6C" opacity="0.7" />
        </g>

        {/* Hanging Lantern Right */}
        <g className="lantern-r">
          <line x1="290" y1="70" x2="290" y2="105" stroke="#B04C6C" strokeWidth="0.8" opacity="0.6" />
          <rect x="284" y="105" width="12" height="18" rx="2" fill="#FFF5F8" stroke="#B04C6C" strokeWidth="1" />
          <polygon points="284,105 290,99 296,105" fill="#EFA9BF" />
          <polygon points="284,123 290,127 296,123" fill="#EFA9BF" />
          <circle cx="290" cy="114" r="2" fill="#B04C6C" opacity="0.7" />
        </g>

        {/* =================================================== */}
        {/* GROOM (Left - Modest, Faceless, Sherwani in Sky Blue) */}
        {/* =================================================== */}
        <g transform="translate(10, 0)">
          {/* Head & Turban/Pagri */}
          <path
            d="M 105 130 C 105 118, 135 118, 135 130 C 135 142, 105 142, 105 130 Z"
            fill="#CDE8F8"
            stroke="#8EC5E8"
            strokeWidth="1"
          />
          {/* Pagri Kalgi/Feather accent */}
          <circle cx="120" cy="120" r="2.5" fill="#B04C6C" />

          {/* Faceless head contour */}
          <ellipse cx="120" cy="144" rx="14" ry="18" fill="url(#skinTone)" />

          {/* Sherwani Body */}
          <path
            d="M 98 170 C 98 162, 142 162, 142 170 L 148 310 C 148 315, 92 315, 92 310 Z"
            fill="url(#groomSherwani)"
            stroke="#8EC5E8"
            strokeWidth="1"
          />

          {/* Sherwani Collar & Button Placket */}
          <path d="M 112 166 L 120 174 L 128 166" fill="none" stroke="#8EC5E8" strokeWidth="1.5" />
          <line x1="120" y1="174" x2="120" y2="280" stroke="#8EC5E8" strokeWidth="1.5" />
          {/* Buttons */}
          <circle cx="120" cy="186" r="1.5" fill="#B04C6C" />
          <circle cx="120" cy="198" r="1.5" fill="#B04C6C" />
          <circle cx="120" cy="210" r="1.5" fill="#B04C6C" />
          <circle cx="120" cy="222" r="1.5" fill="#B04C6C" />
          <circle cx="120" cy="234" r="1.5" fill="#B04C6C" />

          {/* Stole / Shawl draped on shoulder */}
          <path
            d="M 100 172 Q 92 220 96 280 L 106 280 Q 106 220 108 174 Z"
            fill="#FFF5F8"
            stroke="#EFA9BF"
            strokeWidth="0.8"
            opacity="0.9"
          />

          {/* Pajama / Trousers */}
          <path d="M 104 310 L 107 385 L 117 385 L 118 310" fill="#FFF5F8" stroke="#CDE8F8" strokeWidth="0.8" />
          <path d="M 122 310 L 123 385 L 133 385 L 136 310" fill="#FFF5F8" stroke="#CDE8F8" strokeWidth="0.8" />

          {/* Traditional Mojari Shoes */}
          <path d="M 105 385 Q 112 383 118 387 Q 105 391 105 385 Z" fill="#8EC5E8" />
          <path d="M 122 385 Q 129 383 135 387 Q 122 391 122 385 Z" fill="#8EC5E8" />
        </g>

        {/* =================================================== */}
        {/* BRIDE (Right - Modest, Faceless, Saree/Dupatta in Baby Pink) */}
        {/* =================================================== */}
        <g transform="translate(10, 0)">
          {/* Dupatta on head (arched) */}
          <path
            d="M 200 134 C 200 115, 236 115, 236 134 Q 242 165 244 200 Q 194 175 200 134 Z"
            fill="#F9D5E0"
            stroke="#EFA9BF"
            strokeWidth="1"
          />

          {/* Faceless head contour */}
          <ellipse cx="218" cy="146" rx="13" ry="17" fill="url(#skinTone)" />

          {/* Maang Tikka / Forehead ornament */}
          <line x1="218" y1="130" x2="218" y2="138" stroke="#B04C6C" strokeWidth="1" />
          <circle cx="218" cy="139" r="1.5" fill="#B04C6C" />

          {/* Lehenga / Saree Blouse & Waist */}
          <path
            d="M 202 172 C 202 166, 234 166, 234 172 L 230 205 L 206 205 Z"
            fill="#B04C6C"
            stroke="#EFA9BF"
            strokeWidth="0.8"
          />

          {/* Flowing Lehenga Skirt in Baby Pink */}
          <path
            d="M 206 205 L 230 205 L 252 385 C 252 388, 184 388, 184 385 Z"
            fill="url(#brideLehenga)"
            stroke="#EFA9BF"
            strokeWidth="1"
          />

          {/* Saree Pleats / Vertical Embroidered Panel */}
          <path d="M 218 205 L 218 385" stroke="#B04C6C" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
          <path d="M 210 215 L 202 385" stroke="#B04C6C" strokeWidth="0.8" opacity="0.4" />
          <path d="M 226 215 L 234 385" stroke="#B04C6C" strokeWidth="0.8" opacity="0.4" />

          {/* Skirt Border Embroidered Hem */}
          <path
            d="M 184 378 Q 218 380 252 378 L 252 385 Q 218 387 184 385 Z"
            fill="#B04C6C"
            opacity="0.8"
          />

          {/* Flowing Dupatta Pallu (Animated gentle sway) */}
          <g className="dupatta-animated">
            <path
              d="M 228 174 Q 248 240 252 320 Q 242 320 238 240 Z"
              fill="#F9D5E0"
              stroke="#B04C6C"
              strokeWidth="0.8"
              opacity="0.85"
            />
          </g>

          {/* Delicate Bangles */}
          <circle cx="198" cy="225" r="3" stroke="#B04C6C" strokeWidth="1" fill="none" />
          <circle cx="238" cy="225" r="3" stroke="#B04C6C" strokeWidth="1" fill="none" />
        </g>

        {/* Floating Petals / Rose Hearts */}
        <g className="petal-1" transform="translate(140, 320)">
          <path d="M 0 0 C -4 -4, -6 -1, 0 6 C 6 -1, 4 -4, 0 0 Z" fill="#EFA9BF" opacity="0.7" />
        </g>
        <g className="petal-2" transform="translate(200, 300)">
          <path d="M 0 0 C -3 -3, -5 -1, 0 5 C 5 -1, 3 -3, 0 0 Z" fill="#8EC5E8" opacity="0.6" />
        </g>
        <g className="petal-3" transform="translate(170, 270)">
          <path d="M 0 0 C -4 -4, -6 -1, 0 6 C 6 -1, 4 -4, 0 0 Z" fill="#B04C6C" opacity="0.5" />
        </g>

        {/* Ground Base Floral Line */}
        <path
          d="M 45 388 Q 175 392 305 388"
          stroke="#EFA9BF"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}
