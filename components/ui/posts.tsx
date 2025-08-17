import { GoArrowUpRight } from 'react-icons/go';
import Image from 'next/image';

export const Text = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`text-xs md:text-sm text-neutral-900 dark:text-neutral-50 leading-relaxed ${className}`}
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
      className="rounded-lg border border-gray-200 dark:border-neutral-900 hidden dark:block"
      src={lightSrc}
      alt={alt}
      width={width}
      height={height}
    />
    <Image
      className="rounded-lg border border-gray-200 dark:border-neutral-900 block dark:hidden"
      src={darkSrc}
      alt={alt}
      width={width}
      height={height}
    />
    <p className="text-xs text-center text-muted-foreground mt-2">{caption}</p>
  </div>
);

export const Heading = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={`text-muted-foreground text-xs mt-10 ${className}`}>
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
    className={`py-0.5 rounded-md text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 whitespace-nowrap transition-colors inline-flex w-fit items-center ${className}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children} <GoArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
  </a>
);
