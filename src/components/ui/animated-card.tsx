'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'lucide-react';

interface AnimatedCardProps {
  title: string;
  className?: string;
  variant?: 'orange' | 'blue' | 'purple' | 'green';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  className = '',
  variant = 'orange',
}: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<SVGCircleElement>(null);

  const getColors = () => {
    switch (variant) {
      case 'orange':
        return {
          primary: '#FFB74D',
          secondary: '#FF6B35',
        };
      case 'blue':
        return {
          primary: '#90CAF9',
          secondary: '#1D4ED8',
        };
      case 'purple':
        return {
          primary: '#CE93D8',
          secondary: '#7C3AED',
        };
      case 'green':
        return {
          primary: '#81C784',
          secondary: '#16A34A',
        };
      default:
        return {
          primary: '#FFB74D',
          secondary: '#FF6B35',
        };
    }
  };

  const colors = getColors();

  useEffect(() => {
    const card = cardRef.current;
    const circle2 = circle2Ref.current;

    if (!card || !circle2) return;

    // Initial fade in animation with a bounce effect
    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
      },
    );

    // Set initial transform origin for circles
    gsap.set([circle2], {
      transformOrigin: '50% 50%',
    });

    // Create a timeline for more complex animations
    const tl = gsap.timeline({ repeat: -1 });

    // Rotation animations with easing
    tl.to(
      circle2,
      {
        rotation: -360,
        duration: 6,
        ease: 'power1.inOut',
      },
      '-=8',
    );

    // Morphing effect
    gsap.to([circle2], {
      scale: 1.1,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    });

    // Add a subtle floating effect
    gsap.to([circle2], {
      y: -10,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col hover:cursor-pointer overflow-hidden ${className}`}
    >
      <div className="w-full h-[90%]">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ backgroundColor: colors.primary }}
        >
          <circle
            cx="200"
            cy="200"
            r="100"
            fill={colors.primary}
            fillOpacity="0.9"
          />

          <circle
            ref={circle2Ref}
            cx="200"
            cy="200"
            r="100"
            fill={colors.secondary}
            fillOpacity="0.8"
          />
        </svg>
      </div>
      <div className="h-[10%] w-full flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:underline">
          {title}
        </h3>
        <Link className="text-blue-500 h-4 w-4" />
      </div>
    </div>
  );
};

export default AnimatedCard;
