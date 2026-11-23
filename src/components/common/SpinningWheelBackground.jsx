import React from 'react';

/**
 * SpinningWheelBackground
 * Renders a kinetic grid of authentic banknote guilloche rosette wheels.
 * Because the ornamental guilloche rosettes are circular, each wheel rotates
 * continuously on its central axis, with alternating clockwise and counter-clockwise
 * motions reminiscent of precision clockwork balance wheels and financial minting plates.
 */
export default function SpinningWheelBackground({
  opacity = 'opacity-70',
  className = '',
  tilesCount = 120,
}) {
  const tiles = Array.from({ length: tilesCount });

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden flex flex-wrap justify-center items-center content-center select-none ${opacity} ${className}`}
      aria-hidden="true"
    >
      {tiles.map((_, i) => {
        // Alternating rotational direction (interlocking mechanical wheel aesthetic)
        const isClockwise = (Math.floor(i / 12) + (i % 12)) % 2 === 0;
        // Natural speed variation across rows/columns for organic, mesmerizing movement
        const speed = i % 3 === 0 ? 36 : i % 3 === 1 ? 44 : 52;

        return (
          <div
            key={i}
            className="w-[120px] h-[120px] flex items-center justify-center shrink-0 p-0 m-0"
            style={{
              animation: `${isClockwise ? 'wheelSpin' : 'wheelSpinReverse'} ${speed}s linear infinite`,
              willChange: 'transform',
            }}
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Outer Solid Rim Circle */}
              <circle
                cx="60"
                cy="60"
                r="52"
                stroke="#B69A64"
                strokeWidth="1"
                strokeOpacity="0.35"
              />

              {/* Concentric Dashed Tachymeter Ring (Spins with the wheel perimeter) */}
              <circle
                cx="60"
                cy="60"
                r="38"
                stroke="#B69A64"
                strokeWidth="1"
                strokeOpacity="0.30"
                strokeDasharray="4 3"
              />

              {/* Inner Core Guide Circle */}
              <circle
                cx="60"
                cy="60"
                r="24"
                stroke="#B69A64"
                strokeWidth="0.85"
                strokeOpacity="0.28"
              />

              {/* Primary 4-Petal Guilloche Curved Rosette Spokes */}
              <path
                d="M10 60 Q 35 25, 60 60 T 110 60"
                stroke="#B69A64"
                strokeWidth="1"
                strokeOpacity="0.32"
              />
              <path
                d="M10 60 Q 35 95, 60 60 T 110 60"
                stroke="#B69A64"
                strokeWidth="1"
                strokeOpacity="0.32"
              />
              <path
                d="M60 10 Q 25 35, 60 60 T 60 110"
                stroke="#B69A64"
                strokeWidth="1"
                strokeOpacity="0.32"
              />
              <path
                d="M60 10 Q 95 35, 60 60 T 60 110"
                stroke="#B69A64"
                strokeWidth="1"
                strokeOpacity="0.32"
              />

              {/* Secondary Diagonal Hairline Spokes for Shimmering Wheel Motion */}
              <path
                d="M25 25 Q 60 38, 60 60 T 95 95"
                stroke="#DFC89B"
                strokeWidth="0.8"
                strokeOpacity="0.25"
              />
              <path
                d="M95 25 Q 60 38, 60 60 T 25 95"
                stroke="#DFC89B"
                strokeWidth="0.8"
                strokeOpacity="0.25"
              />

              {/* Central Axis Gold Hub Bushing */}
              <circle
                cx="60"
                cy="60"
                r="4"
                fill="#B69A64"
                fillOpacity="0.6"
              />
              <circle
                cx="60"
                cy="60"
                r="1.8"
                fill="#DFC89B"
                fillOpacity="0.95"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
