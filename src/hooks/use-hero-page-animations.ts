import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { CSS_CLASSES } from '@/const/css-classes';

gsap.registerPlugin(useGSAP);

const useHeroPageAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set(
        [`.${CSS_CLASSES.VERTICAL_LINE}`, `.${CSS_CLASSES.HORIZONTAL_LINE}`],
        {
          backgroundColor: '#60a5fa',
          scaleX: 0,
          scaleY: 0,
        },
      );

      gsap.set(`.${CSS_CLASSES.ANIMATED_CURSOR}`, {
        opacity: 0,
        scale: 0.8,
        x: -100,
        y: -100,
      });

      gsap.set(`.${CSS_CLASSES.ANIMATED_CURSOR} div div`, {
        opacity: 0,
        y: -10,
        scale: 0.8,
      });

      gsap.set(
        [`.${CSS_CLASSES.YELLOW_BLOCK}`, `.${CSS_CLASSES.FORMAT_BUTTONS}`],
        {
          opacity: 0,
        },
      );

      gsap.set(`.${CSS_CLASSES.ASK_AI_BTN}`, {
        opacity: 0,
      });

      gsap.set(`.${CSS_CLASSES.STACKED_CARDS}`, {
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline();

      tl.fromTo(
        `.${CSS_CLASSES.HORIZONTAL_LINE}`,
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
          [`.${CSS_CLASSES.VERTICAL_LINE}`],
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
          [`.${CSS_CLASSES.VERTICAL_LINE}`, `.${CSS_CLASSES.HORIZONTAL_LINE}`],
          {
            backgroundColor: '#71717a',
            duration: 0.5,
            ease: 'power2.inOut',
          },
          '-=0.8',
        )
        .to(
          `.${CSS_CLASSES.ANIMATED_CURSOR}`,
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
          `.${CSS_CLASSES.ANIMATED_CURSOR} div div`,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
          },
          '-=0.5',
        )
        .to(
          `.${CSS_CLASSES.YELLOW_BLOCK}`,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.9',
        )
        .to(
          [`.${CSS_CLASSES.FORMAT_BUTTONS}`],
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1,
          },
          '-=0.9',
        )
        .to(
          [`.${CSS_CLASSES.ASK_AI_BTN}`],
          {
            opacity: 1,
            duration: 0.3,
          },
          '-=0.9',
        )
        .to(
          `.${CSS_CLASSES.STACKED_CARDS}`,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
          },
          '-=0.5',
        );

      const askAiBtn = containerRef.current.querySelector(
        `.${CSS_CLASSES.ASK_AI_BTN}`,
      );
      if (askAiBtn) {
        const handleMouseEnter = () => {
          gsap.to(
            [
              askAiBtn,
              askAiBtn.querySelector(`.${CSS_CLASSES.LUCIDE_SPARKLES}`),
            ],
            {
              duration: 0.1,
              ease: 'power2.out',
              onStart: () => {
                gsap.to(
                  askAiBtn.querySelector(`.${CSS_CLASSES.LUCIDE_SPARKLES}`),
                  {
                    rotation: 15,
                    duration: 0.2,
                    ease: 'power2.out',
                  },
                );
              },
            },
          );
        };

        const handleMouseLeave = () => {
          gsap.to(
            [
              askAiBtn,
              askAiBtn.querySelector(`.${CSS_CLASSES.LUCIDE_SPARKLES}`),
            ],
            {
              rotation: 0,
              duration: 0.2,
              ease: 'power2.out',
            },
          );
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

export default useHeroPageAnimations;
