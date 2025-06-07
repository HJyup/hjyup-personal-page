import { CSS_CLASSES } from '@/const/css-classes';

// I just want to hide it in my codebase. =(

/**
 * Processes a text node by wrapping each word and character in spans with appropriate classes
 */
const processNode = (node: Node): string => {
  // Handle text nodes
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent || '';

    return text
      .split(' ')
      .map(word => {
        // Handle empty words
        if (word === '') return '<span>&nbsp;</span>';

        // Wrap each character in a span
        const chars = word
          .split('')
          .map(char => `<span class="${CSS_CLASSES.CHAR}">${char}</span>`)
          .join('');

        // Wrap the word in a span
        return `<span class="${CSS_CLASSES.WORD}">${chars}</span>`;
      })
      .join('<span>&nbsp;</span>');
  }

  // Handle element nodes
  if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node as Element;

    // Process child nodes recursively
    const childContent = Array.from(element.childNodes)
      .map(child => processNode(child))
      .join('');

    // Build element attributes
    const className = element.className ? ` class="${element.className}"` : '';
    const otherAttributes = Array.from(element.attributes)
      .filter(attr => attr.name !== 'class')
      .map(attr => ` ${attr.name}="${attr.value}"`)
      .join('');

    // Return complete element with processed children. This bitch is so ugly.
    return `<${element.tagName.toLowerCase()}${className}${otherAttributes}>${childContent}</${element.tagName.toLowerCase()}>`;
  }

  return '';
};

/**
 * Processes all text elements within a given element
 */
export const processTextElements = (element: Element): string => {
  return Array.from(element.childNodes)
    .map(child => processNode(child))
    .join('');
};
