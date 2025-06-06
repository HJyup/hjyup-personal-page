'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { Link } from 'lucide-react';

gsap.registerPlugin(MorphSVGPlugin);

interface ProjectCardProps {
  title: string;
  className?: string;
  theme?: 'orange' | 'blue' | 'purple' | 'green';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  className = '',
  theme = 'orange',
}: ProjectCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedCircleRef = useRef<SVGCircleElement>(null);

  const getThemeColors = () => {
    const themes = {
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
    };

    return themes[theme] || themes.orange;
  };

  const colors = getThemeColors();

  useGSAP(() => {
    const container = containerRef.current;
    const circle = animatedCircleRef.current;

    if (!container || !circle) return;

    const initializeAnimations = () => {
      gsap.fromTo(
        container,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'elastic.out(1, 0.5)',
        },
      );

      gsap.set([circle], { transformOrigin: '50% 50%' });

      const animationTimeline = gsap.timeline({ repeat: -1 });

      animationTimeline.to(
        circle,
        {
          rotation: -360,
          duration: 6,
          ease: 'power1.inOut',
        },
        '-=8',
      );

      gsap.to([circle], {
        scale: 1.1,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      gsap.to([circle], {
        y: -10,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
      });
    };

    initializeAnimations();
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-col ${className}`}>
      <div
        className="w-full h-[90%] flex items-center justify-center"
        style={{ backgroundColor: colors.primary }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-2/3 h-2/3 flex items-center justify-center"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            ref={animatedCircleRef}
            cx="200"
            cy="200"
            r="150"
            fill={colors.secondary}
            fillOpacity="0.8"
          />
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
