import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CSS_CLASSES } from '@/const/css-classes';
import { processTextElements } from '@/lib/text-processing';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const useHeroPageAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!containerRef.current) return;

    const textElements = containerRef.current.querySelectorAll(
      `.${CSS_CLASSES.MAIN_TEXT}`,
    );

    textElements.forEach(element => {
      element.innerHTML = processTextElements(element);
    });

    const words = containerRef.current.querySelectorAll(
      `.${CSS_CLASSES.MAIN_TEXT} .${CSS_CLASSES.WORD}`,
    );
    const chars = containerRef.current.querySelectorAll(
      `.${CSS_CLASSES.MAIN_TEXT} .${CSS_CLASSES.CHAR}`,
    );

    gsap.set(words, {
      display: 'inline-block',
      whiteSpace: 'nowrap',
    });

    gsap.set(chars, {
      display: 'inline-block',
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.to(chars, {
      opacity: 1,
      duration: 0.05,
      ease: 'power2.out',
      stagger: 0.01,
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      animation: tl,
      scrub: 1,
      pin: true,
      pinSpacing: true,
      markers: true,
      end: () => `+=${containerRef.current?.clientHeight}`,
    });
  }, []);

  return { containerRef };
};

export default useHeroPageAnimations;
