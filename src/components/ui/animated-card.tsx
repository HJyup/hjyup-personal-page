'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { Link } from 'lucide-react';

gsap.registerPlugin(MorphSVGPlugin);

const CIRCLE_ID = '#initial-circle';

interface ProjectCardProps {
  title: string;
  className?: string;
  theme?: 'orange' | 'blue' | 'purple' | 'green';
}

const THEME_MAPPER = {
  orange: {
    primary: '#FFB74D',
    secondary: '#FF6B35',
  },
  blue: {
    primary: '#90CAF9',
    secondary: '#1D4ED8',
  },
  purple: {
    primary: '#CE93D8',
    secondary: '#7C3AED',
  },
  green: {
    primary: '#81C784',
    secondary: '#16A34A',
  },
} as const;

type ThemeVariant = keyof typeof THEME_MAPPER;

const ProjectCard = ({
  title,
  className = '',
  theme = 'orange',
}: ProjectCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = THEME_MAPPER[theme as ThemeVariant] || THEME_MAPPER.orange;

  useGSAP(() => {
    const container = containerRef.current;

    if (!container) return;

    gsap.set(CIRCLE_ID, { transformOrigin: '50% 50%' });

    const animationTimeline = gsap.timeline({ repeat: -1 });

    animationTimeline.to(
      CIRCLE_ID,
      {
        rotation: -360,
        duration: 6,
        ease: 'power1.inOut',
      },
      '-=8',
    );

    gsap.to(CIRCLE_ID, {
      scale: 1.1,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    });

    gsap.to(CIRCLE_ID, {
      y: -10,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });

    gsap.to('#initial-circle', {
      duration: 0.6,
      morphSVG: '#pencil-stroke',
    });
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-col ${className}`}>
      <div
        className="w-full h-[90%] flex items-center justify-center"
        style={{ backgroundColor: colors.primary }}
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          className="w-2/3 h-2/3"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fillOpacity="0.8"
            fill={colors.secondary}
            id="initial-circle"
            d="M350,200 C350,282.84271 282.84271,350 200,350 117.15729,350 50,282.84271 50,200 50,117.15729 117.15729,50 200,50 282.84271,50 350,117.15729 350,200 z"
          />
          {/* TODO: Add pencil stroke as an animation here */}
          {/* <path
            d="M191.741 48.1249C197.028 42.839 199.999 35.6693 200 28.193C200.001 20.7167 197.032 13.5462 191.746 8.259C186.46 2.97179 179.291 0.000937981 171.814 2.22072e-07C164.338 -0.000937537 157.168 2.96811 151.881 8.254L18.4195 141.747C16.0977 144.062 14.3806 146.912 13.4195 150.047L0.209346 193.568C-0.0491031 194.433 -0.0686222 195.352 0.152857 196.227C0.374337 197.102 0.828555 197.901 1.46732 198.538C2.10609 199.176 2.90558 199.629 3.78096 199.849C4.65635 200.069 5.57499 200.048 6.4394 199.788L49.9698 186.588C53.1015 185.636 55.9516 183.929 58.2699 181.618L191.741 48.1249Z"
            fill={colors.secondary}
            stroke={colors.secondary}
            className="hidden"
            id="pencil-stroke"
          /> */}
        </svg>
      </div>
      <div className="h-[10%] w-full flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 hover:underline cursor-pointer">
          {title}
        </h3>
        <Link className="text-blue-500 h-4 w-4" />
      </div>
    </div>
  );
};

export default ProjectCard;
