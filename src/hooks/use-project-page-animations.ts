import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const SELECTORS = {
  MAIN_TEXT: '.main-text',
  WORD: '.word',
  CHAR: '.char',
} as const;

const useHeroPageAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!containerRef.current) return;

    const textElements = containerRef.current.querySelectorAll(
      SELECTORS.MAIN_TEXT,
    );

    textElements.forEach(element => {
      const processNode = (node: Node): string => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || '';
          return text
            .split(' ')
            .map(word => {
              if (word === '') return '<span>&nbsp;</span>';
              const chars = word
                .split('')
                .map(char => `<span class="char">${char}</span>`)
                .join('');
              return `<span class="word">${chars}</span>`;
            })
            .join('<span>&nbsp;</span>');
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as Element;
          const childContent = Array.from(element.childNodes)
            .map(child => processNode(child))
            .join('');
          return `<${element.tagName.toLowerCase()}${
            element.className ? ` class="${element.className}"` : ''
          }${Array.from(element.attributes)
            .filter(attr => attr.name !== 'class')
            .map(attr => ` ${attr.name}="${attr.value}"`)
            .join('')}>${childContent}</${element.tagName.toLowerCase()}>`;
        }
        return '';
      };

      const processedHTML = Array.from(element.childNodes)
        .map(child => processNode(child))
        .join('');
      element.innerHTML = processedHTML;
    });

    const words = containerRef.current.querySelectorAll(
      `${SELECTORS.MAIN_TEXT} ${SELECTORS.WORD}`,
    );
    const chars = containerRef.current.querySelectorAll(
      `${SELECTORS.MAIN_TEXT} ${SELECTORS.CHAR}`,
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
