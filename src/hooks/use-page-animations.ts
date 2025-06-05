import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const usePageAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set(['.vertical-line', '.horizontal-line'], {
        backgroundColor: '#60a5fa',
        scaleX: 0,
        scaleY: 0,
      });

      gsap.set('.animated-cursor', {
        opacity: 0,
        scale: 0.8,
        x: -100,
        y: -100,
      });

      gsap.set('.animated-cursor div div', {
        opacity: 0,
        y: -10,
        scale: 0.8,
      });

      gsap.set(['.yellow-block', '.format-buttons'], {
        opacity: 0,
      });

      gsap.set('.ask-ai-btn', {
        opacity: 0,
      });

      gsap.set('.stacked-cards', {
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline();

      tl.fromTo(
        '.horizontal-line',
        {
          scaleX: 0,
          scaleY: 5,
          transformOrigin: 'left',
        },
        {
          scaleX: 1,
          scaleY: 1,
          duration: 1.3,
          ease: 'expo.inOut',
          stagger: 0.15,
        },
      )
        .fromTo(
          ['.vertical-line'],
          {
            scaleY: 0,
            scaleX: 5,
            transformOrigin: 'top',
          },
          {
            scaleY: 1,
            scaleX: 1,
            duration: 1.5,
            stagger: 0.1,
            ease: 'expo.inOut',
          },
          '<',
        )
        .to(
          ['.vertical-line', '.horizontal-line'],
          {
            backgroundColor: '#71717a',
            duration: 0.5,
            ease: 'power2.inOut',
          },
          '-=0.8',
        )
        .to(
          '.animated-cursor',
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
          },
          '-=1.1',
        )
        .to(
          '.animated-cursor div div',
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
          },
          '-=0.5',
        )
        .to(
          '.yellow-block',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.9',
        )
        .to(
          ['.format-buttons'],
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1,
          },
          '-=0.9',
        )
        .to(
          ['.ask-ai-btn'],
          {
            opacity: 1,
            duration: 0.3,
          },
          '-=0.9',
        )
        .to(
          '.stacked-cards',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
          },
          '-=0.5',
        );

      const askAiBtn = containerRef.current.querySelector('.ask-ai-btn');
      if (askAiBtn) {
        const handleMouseEnter = () => {
          gsap.to([askAiBtn, askAiBtn.querySelector('.lucide-sparkles')], {
            duration: 0.1,
            ease: 'power2.out',
            onStart: () => {
              gsap.to(askAiBtn.querySelector('.lucide-sparkles'), {
                rotation: 15,
                duration: 0.2,
                ease: 'power2.out',
              });
            },
          });
        };

        const handleMouseLeave = () => {
          gsap.to([askAiBtn, askAiBtn.querySelector('.lucide-sparkles')], {
            rotation: 0,
            duration: 0.2,
            ease: 'power2.out',
          });
        };

        askAiBtn.addEventListener('mouseenter', handleMouseEnter);
        askAiBtn.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          askAiBtn.removeEventListener('mouseenter', handleMouseEnter);
          askAiBtn.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    },
    { scope: containerRef },
  );

  return { containerRef };
};

export default usePageAnimations;
