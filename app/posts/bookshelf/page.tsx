import Image from 'next/image';

import { BooksWidget } from '@/components/module/widgets/books';
import PostsLayout, {
  PostContentContainer,
} from '@/components/ui/layout/posts';

const allBooks = [
  {
    id: 'designing-data-intensive-apps',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    description:
      'I read this when I started my first job. It completely changed how I see backend architecture and helped me grasp the bigger picture behind scalable systems.',
    imageUrl: 'https://m.media-amazon.com/images/I/91YfNb49PLL._SY522_.jpg',
    amazonUrl:
      'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
  },
  {
    id: 'network-programming-go',
    title: 'Network Programming with Go',
    author: 'Jan Newmarch',
    description:
      'A solid mix of networking fundamentals and Go. It made learning how the internet really works both practical and enjoyable.',
    imageUrl:
      'https://m.media-amazon.com/images/I/51VXBQMW7uL._SY445_SX342_.jpg',
    amazonUrl:
      'https://www.amazon.com/Network-Programming-Go-Essential-Developers/dp/1718500882',
  },
  {
    id: 'programming-typescript',
    title: 'Programming TypeScript',
    author: 'Boris Cherny',
    year: '2019',
    description:
      'After struggling with a discriminated union, this book helped me dive deeper into TypeScript’s type system. A bit verbose, but I enjoyed it.',
    imageUrl:
      'https://m.media-amazon.com/images/I/511YUCKEYrL._SY445_SX342_.jpg',
    amazonUrl:
      'https://www.amazon.com/Programming-TypeScript-Making-JavaScript-Applications/dp/1492037656',
  },
  {
    id: 'dont-make-me-think',
    title: "Don't Make Me Think",
    author: 'Steve Krug',
    description:
      'Some parts feel intuitive, but it’s a great reminder that everyday design decisions often have solid reasoning behind them.',
    imageUrl:
      'https://m.media-amazon.com/images/I/41V6w537SKL._SY445_SX342_.jpg',
    amazonUrl:
      'https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515',
  },
  {
    id: 'software-engineer-google',
    title: 'Software Engineer at Google',
    author: 'Alex Allain',
    description:
      'A reminder that being a good developer isn’t just about hard skills. I learned a lot about teamwork from this book.',
    imageUrl:
      'https://m.media-amazon.com/images/I/410MEGnUOCL._SY445_SX342_.jpg',
    amazonUrl:
      'https://www.amazon.com/Software-Engineer-Google-Lessons-Programming/dp/1492082791',
  },
];

const BookshelfPage = () => {
  return (
    <PostsLayout>
      <PostContentContainer>
        <section>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-zinc-900 dark:text-white mb-6">
            Bookshelf
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 lg:w-3/4">
            My personal library and reading journey. Exploring tech, design, and
            personal growth through carefully curated books.
          </p>
        </section>

        <section>
          <BooksWidget className="!mx-0" />
        </section>

        <section className="py-12">
          <div className="space-y-12">
            {allBooks.map(book => (
              <div key={book.id} className="group flex gap-5 sm:gap-6 lg:gap-8">
                <div className="w-20 sm:w-24 lg:w-32 h-32 sm:h-36 lg:h-44 bg-zinc-100 dark:bg-zinc-800 rounded-sm overflow-hidden flex-shrink-0">
                  <Image
                    src={book.imageUrl}
                    alt={book.title}
                    width={128}
                    height={200}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-medium text-zinc-800 dark:text-zinc-200">
                      <a
                        href={book.amazonUrl}
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {book.title}
                      </a>
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-500">
                      by {book.author}
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1 w-full">
                    {book.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </PostContentContainer>
    </PostsLayout>
  );
};

export default BookshelfPage;
