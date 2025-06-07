import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const SELECTORS = {
  VERTICAL_LINE: '.vertical-line',
  HORIZONTAL_LINE: '.horizontal-line',
  ANIMATED_CURSOR: '.animated-cursor',
  ANIMATED_CURSOR_INNER: '.animated-cursor div div',
  YELLOW_BLOCK: '.yellow-block',
  FORMAT_BUTTONS: '.format-buttons',
  ASK_AI_BTN: '.ask-ai-btn',
  STACKED_CARDS: '.stacked-cards',
  LUCIDE_SPARKLES: '.lucide-sparkles',
} as const;

const useHeroPageAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set([SELECTORS.VERTICAL_LINE, SELECTORS.HORIZONTAL_LINE], {
        backgroundColor: '#60a5fa',
        scaleX: 0,
        scaleY: 0,
      });

      gsap.set(SELECTORS.ANIMATED_CURSOR, {
        opacity: 0,
        scale: 0.8,
        x: -100,
        y: -100,
      });

      gsap.set(SELECTORS.ANIMATED_CURSOR_INNER, {
        opacity: 0,
        y: -10,
        scale: 0.8,
      });

      gsap.set([SELECTORS.YELLOW_BLOCK, SELECTORS.FORMAT_BUTTONS], {
        opacity: 0,
      });

      gsap.set(SELECTORS.ASK_AI_BTN, {
        opacity: 0,
      });

      gsap.set(SELECTORS.STACKED_CARDS, {
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline();

      tl.fromTo(
        SELECTORS.HORIZONTAL_LINE,
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
          [SELECTORS.VERTICAL_LINE],
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
          [SELECTORS.VERTICAL_LINE, SELECTORS.HORIZONTAL_LINE],
          {
            backgroundColor: '#71717a',
            duration: 0.5,
            ease: 'power2.inOut',
          },
          '-=0.8',
        )
        .to(
          SELECTORS.ANIMATED_CURSOR,
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
          SELECTORS.ANIMATED_CURSOR_INNER,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
          },
          '-=0.5',
        )
        .to(
          SELECTORS.YELLOW_BLOCK,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.9',
        )
        .to(
          [SELECTORS.FORMAT_BUTTONS],
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1,
          },
          '-=0.9',
        )
        .to(
          [SELECTORS.ASK_AI_BTN],
          {
            opacity: 1,
            duration: 0.3,
          },
          '-=0.9',
        )
        .to(
          SELECTORS.STACKED_CARDS,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
          },
          '-=0.5',
        );

      const askAiBtn = containerRef.current.querySelector(SELECTORS.ASK_AI_BTN);
      if (askAiBtn) {
        const handleMouseEnter = () => {
          gsap.to(
            [askAiBtn, askAiBtn.querySelector(SELECTORS.LUCIDE_SPARKLES)],
            {
              duration: 0.1,
              ease: 'power2.out',
              onStart: () => {
                gsap.to(askAiBtn.querySelector(SELECTORS.LUCIDE_SPARKLES), {
                  rotation: 15,
                  duration: 0.2,
                  ease: 'power2.out',
                });
              },
            },
          );
        };

        const handleMouseLeave = () => {
          gsap.to(
            [askAiBtn, askAiBtn.querySelector(SELECTORS.LUCIDE_SPARKLES)],
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
