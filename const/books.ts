enum BookStatus {
  CURRENTLY_READING = 'CURRENTLY READING',
  COMPLETED = 'COMPLETED',
  RECOMMENDED = 'RECOMMENDED',
}

type Book = {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  amazonUrl: string;
  status: BookStatus;
};

const BOOKS: Book[] = [
  {
    id: 'design-everyday-things',
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    imageUrl:
      'https://m.media-amazon.com/images/I/41rHjQCElcL._SY445_SX342_.jpg',
    amazonUrl:
      'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654',
    status: BookStatus.CURRENTLY_READING,
  },
  {
    id: 'creative-selection',
    title: 'Creative Selection',
    author: 'Ken Kocienda',
    imageUrl: 'https://m.media-amazon.com/images/I/71AiWmqkN2L._SY522_.jpg',
    amazonUrl:
      'https://www.amazon.com/Creative-Selection-Inside-Apples-Process/dp/1250194466',
    status: BookStatus.COMPLETED,
  },
  {
    id: 'software-engineer-google',
    title: 'Software Engineering at Google',
    author: 'Titus Winters, Tom Manshreck, Hyrum Wright',
    imageUrl:
      'https://m.media-amazon.com/images/I/410MEGnUOCL._SY445_SX342_.jpg',
    amazonUrl:
      'https://www.amazon.com/Software-Engineering-Google-Lessons-Programming/dp/1492082791',
    status: BookStatus.COMPLETED,
  },
  {
    id: 'designing-data-intensive-apps',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    imageUrl: 'https://m.media-amazon.com/images/I/91YfNb49PLL._SY522_.jpg',
    amazonUrl:
      'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
    status: BookStatus.COMPLETED,
  },
  {
    id: 'art-of-doing-science',
    title: 'The Art of Doing Science and Engineering',
    author: 'Richard W. Hamming',
    imageUrl: 'https://m.media-amazon.com/images/I/41hZEEzw30L._SY522_.jpg',
    amazonUrl:
      'https://www.amazon.com/Art-Doing-Science-Engineering-Learning/dp/1732265178',
    status: BookStatus.RECOMMENDED,
  },
];

export { BOOKS, BookStatus };
export type { Book };
