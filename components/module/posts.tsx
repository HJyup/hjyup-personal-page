import Image from 'next/image';

export const Text = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`text-sm sm:text-base dark:text-zinc-300 leading-relaxed ${className}`}
  >
    {children}
  </p>
);

export const Photo = ({
  className = '',
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  caption,
}: {
  className?: string;
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}) => (
  <div className={`${className} flex flex-col items-center`}>
    <Image
      className="rounded-lg border border-gray-200 dark:border-zinc-900 hidden dark:block"
      src={lightSrc}
      alt={alt}
      width={width}
      height={height}
    />
    <Image
      className="rounded-lg border border-gray-200 dark:border-zinc-900 block dark:hidden"
      src={darkSrc}
      alt={alt}
      width={width}
      height={height}
    />
    <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mt-2">
      {caption}
    </p>
  </div>
);

export const Heading = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-muted-foreground text-xs sm:text-sm mt-12 sm:mt-16 ${className}`}
  >
    {children}
  </h2>
);

export const Section = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => <section className={className}>{children}</section>;

export const Body = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`mt-6 space-y-8 ${className}`}>{children}</div>;

export const Link = ({
  children,
  className = '',
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => (
  <a
    className={`bg-gray-100 dark:bg-gray-900 p-0.5 rounded-md px-1 gap-1 text-blue-500 hover:underline whitespace-nowrap ${className}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
