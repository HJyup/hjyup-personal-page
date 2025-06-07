interface AnimatedCursorProps {
  className?: string;
  color?: string;
  name?: string;
}

const COLOUR_MAPPER = {
  pink: {
    fill: '#ec4899',
    stroke: '#be185d',
    bg: 'bg-pink-500',
  },
  blue: {
    fill: '#3b82f6',
    stroke: '#1d4ed8',
    bg: 'bg-blue-500',
  },
  green: {
    fill: '#10b981',
    stroke: '#059669',
    bg: 'bg-green-500',
  },
  purple: {
    fill: '#8b5cf6',
    stroke: '#7c3aed',
    bg: 'bg-purple-500',
  },
  red: {
    fill: '#ef4444',
    stroke: '#dc2626',
    bg: 'bg-red-500',
  },
  orange: {
    fill: '#f97316',
    stroke: '#ea580c',
    bg: 'bg-orange-500',
  },
  yellow: {
    fill: '#eab308',
    stroke: '#ca8a04',
    bg: 'bg-yellow-500',
  },
  indigo: {
    fill: '#6366f1',
    stroke: '#4f46e5',
    bg: 'bg-indigo-500',
  },
} as const;

type ColorVariant = keyof typeof COLOUR_MAPPER;

const AnimatedCursor = ({
  className = '',
  color = 'pink',
  name = 'User',
}: AnimatedCursorProps) => {
  const selectedColor =
    COLOUR_MAPPER[color as ColorVariant] || COLOUR_MAPPER.pink;

  return (
    <div className={`pointer-events-none z-20 ${className}`}>
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <path
            d="M5.5 3L19.5 9L13 11L11 17.5L5.5 3Z"
            fill={selectedColor.fill}
            stroke={selectedColor.stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M13 11L11 17.5"
            stroke={selectedColor.stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className={`top-8 left-0 ${selectedColor.bg} text-white px-2 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg`}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCursor;
