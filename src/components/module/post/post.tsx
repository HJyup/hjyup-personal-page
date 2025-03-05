import { LucideLink } from 'lucide-react';
import { Roboto } from 'next/font/google';
import Image from 'next/image';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full px-4 sm:px-6 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto lg:my-40 md:my-32 my-28">
      {children}
    </div>
  );
};

const TitleWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row justify-center items-center w-full md:gap-5 gap-2">
      {children}
    </div>
  );
};

const Title = ({
  title,
  date,
  category,
  description,
}: {
  title: string;
  date: string;
  category: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="text-xs md:text-sm">{date}</p>
        <p className="text-xs md:text-sm text-muted-foreground">{category}</p>
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-4 md:mt-5 mb-4 md:mb-6">
        {title}
      </h1>
      <p className="text-sm md:text-md text-center text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

const TitleLinks = ({
  links,
}: {
  links: { label: string; href: string; disabled?: boolean }[];
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 mt-6">
      {links.map(link => (
        <a
          key={link.label}
          className={`w-full sm:w-auto text-sm bg-muted/75 p-2 px-4 rounded-md flex flex-row items-center justify-center gap-2 transition-colors duration-200 ${
            link.disabled
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-muted-foreground/10'
          }`}
          href={link.disabled ? '#' : link.href}
          onClick={e => {
            if (link.disabled) {
              e.preventDefault();
            }
          }}
        >
          {link.label}
          <LucideLink className="text-blue-400" size={12} />
        </a>
      ))}
    </div>
  );
};

const ContentBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 md:gap-10 my-12 sm:my-16">
      {children}
    </div>
  );
};

const ContentTitle = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <h2
      id={id}
      className="text-xl md:text-2xl font-bold mt-4 md:mt-5 mb-4 md:mb-6"
    >
      {children}
    </h2>
  );
};

const TextBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className={`${roboto.className} text-base/8 opacity-75`}>{children}</p>
  );
};

const ImageBlock = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
      </div>
      <p className="text-xs md:text-sm text-muted-foreground text-center">
        {caption}
      </p>
    </div>
  );
};

const TextLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className={`${roboto.className} bg-muted/75 px-2 rounded-md inline-flex gap-1 items-center my-1 hover:bg-muted-foreground/10 transition-colors duration-200`}
    >
      {children}
      <LucideLink className="text-blue-400" size={12} />
    </a>
  );
};

const Post = {
  Wrapper,
  TitleWrapper,
  Title,
  TitleLinks,
  ContentBlock,
  ContentTitle,
  TextBlock,
  ImageBlock,
  TextLink,
};

export default Post;
