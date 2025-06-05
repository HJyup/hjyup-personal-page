'use client';

import { ReactNode, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { PencilRuler, Proportions, Settings } from 'lucide-react';

interface Card {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: 'Frontend Development',
    description:
      'React, Next.js, TypeScript, Tailwind CSS, i18n, Shadcn UI, Storybook',
    icon: <Proportions className="h-5 w-5" />,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Backend Development',
    description:
      'Go, PostgreSQL, MongoDB, gRPC, Redis, RabbitMQ, Kafka, Microservices',
    icon: <Settings className="h-5 w-5" />,
    color: 'bg-orange-400',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Figma and a sprinkle of design magic ✨',
    icon: <PencilRuler className="h-5 w-5" />,
    color: 'bg-purple-400',
  },
];

export default function StackedCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const cardElements = containerRef.current.querySelectorAll('.stack-card');

      gsap.set(cardElements, {
        y: index => index * 8,
        x: index => index * 4,
        zIndex: index => cards.length - index,
        rotation: index => index * 2,
        scale: index => 1 - index * 0.02,
      });

      const handleMouseEnter = () => {
        gsap.to(cardElements, {
          y: index => index * 120,
          x: index => index * 20,
          rotation: index => index * 5,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.1,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(cardElements, {
          y: index => index * 8,
          x: index => index * 4,
          rotation: index => index * 2,
          scale: index => 1 - index * 0.02,
          duration: 0.5,
          ease: 'power2.inOut',
          stagger: 0.05,
        });
      };

      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener(
            'mouseenter',
            handleMouseEnter,
          );
          containerRef.current.removeEventListener(
            'mouseleave',
            handleMouseLeave,
          );
        }
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative w-80 h-60 cursor-pointer">
      {cards.map(card => (
        <div
          key={card.id}
          className={`stack-card absolute inset-0 w-full h-48 ${card.color} rounded-xl shadow-lg p-6 flex flex-col justify-between backdrop-blur-sm border border-zinc-800 ${
            card.color === 'bg-white'
              ? 'text-black'
              : card.color === 'bg-yellow-400'
                ? 'text-black'
                : 'text-white'
          }`}
        >
          <div className="flex items-start justify-between">
            <div
              className={`w-12 h-12 rounded-lg ${
                card.color === 'bg-white'
                  ? 'bg-zinc-100'
                  : card.color === 'bg-yellow-400'
                    ? 'bg-yellow-300'
                    : 'bg-white/10'
              } flex items-center justify-center`}
            >
              <span className="text-2xl">{card.icon}</span>
            </div>
            <div
              className={`w-2 h-2 rounded-full ${
                card.color === 'bg-white'
                  ? 'bg-zinc-300'
                  : card.color === 'bg-yellow-400'
                    ? 'bg-yellow-600'
                    : 'bg-white/30'
              }`}
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p
              className={`text-sm ${
                card.color === 'bg-white'
                  ? 'text-zinc-600'
                  : card.color === 'bg-yellow-400'
                    ? 'text-zinc-800'
                    : 'text-white/80'
              }`}
            >
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
