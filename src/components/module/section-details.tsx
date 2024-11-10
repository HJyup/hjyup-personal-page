import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Autoplay from 'embla-carousel-autoplay';
import Image, { StaticImageData } from 'next/image';

import { SectionItemType } from '@/const';

import {
  Badge,
  Carousel,
  CarouselContent,
  CarouselItem,
  Separator,
} from '../ui';

const SectionDetails = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-3">{children}</div>
);

const SectionDetailsHeader = ({
  sectionItem,
}: {
  sectionItem: SectionItemType;
}) => (
  <div
    key={sectionItem?.title}
    className="flex gap-5 items-center py-0 px-0 md:py-1 md:px-2 justify-center md:justify-start"
  >
    <Avatar className="w-10 md:h-11 md:w-11 ml-2 md:ml-0">
      <AvatarImage src={sectionItem.logo} />
      <AvatarFallback>{sectionItem.title.slice(0, 2)}</AvatarFallback>
    </Avatar>
    <div className="flex flex-col gap-1 w-/3">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
        <div className="text-sm md:text-base">{sectionItem?.title}</div>
      </div>
      <div className="text-xs md:text-sm text-muted-foreground">
        {sectionItem?.subtitle}
      </div>
    </div>
  </div>
);

const SectionDetailsText = ({ children }: { children: ReactNode }) => (
  <div className="text-sm text-muted-foreground md:text-md">{children}</div>
);
const SectionDetailsImage = ({
  image,
  alt,
}: {
  image: StaticImageData;
  alt?: string;
}) => (
  <div className="relative w-full h-full">
    <Image
      className="object-contain w-full h-full bg-card rounded-lg"
      src={image}
      width={500}
      height={300}
      layout="responsive"
      alt={alt ?? image.src}
    />
  </div>
);

const SectionDetailsVideo = ({
  video,
  caption,
}: {
  video: string;
  caption?: string;
}) => (
  <div className="flex flex-col justify-center items-center">
    <video
      className="w-full h-full bg-card rounded-lg overflow-hidden"
      src={video}
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="text-xs text-muted-foreground">{caption}</div>
  </div>
);

const SectionDetailsTechStack = ({ techStack }: { techStack: string[] }) => (
  <div className="py-1 px-2">
    <div className="text-xs md:text-sm">TECH</div>
    <div className="flex flex-wrap gap-1 my-2">
      {techStack.map(tech => (
        <Badge
          key={tech}
          className="text-xs mb-1 font-normal md:font-bold"
          variant="outline"
        >
          {tech}
        </Badge>
      ))}
    </div>
  </div>
);

const SectionDetailsWrapper = ({ children }: { children: ReactNode }) => (
  <div className="py-1 px-1 md:px-2">{children}</div>
);

const SectionDetailsSeparator = () => <Separator className="my-3" />;

const SectionDetailsCarousel = ({
  images,
  autoPlay = true,
  caption,
}: {
  images: {
    image: StaticImageData;
    alt?: string;
  }[];
  autoPlay?: boolean;
  caption?: string;
}) => (
  <div className="flex flex-col justify-center items-center">
    <Carousel
      opts={{ align: 'center', loop: true }}
      plugins={autoPlay ? [Autoplay({ delay: 2000 })] : []}
      className="flex flex-col justify-center items-center"
    >
      <CarouselContent>
        {images.map(({ image, alt }, index) => (
          <CarouselItem key={index}>
            <SectionDetailsImage image={image} alt={alt} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    {caption && <div className="text-xs text-muted-foreground">{caption}</div>}
  </div>
);

SectionDetails.Header = SectionDetailsHeader;
SectionDetails.Text = SectionDetailsText;
SectionDetails.Image = SectionDetailsImage;
SectionDetails.Video = SectionDetailsVideo;
SectionDetails.TechStack = SectionDetailsTechStack;
SectionDetails.Wrapper = SectionDetailsWrapper;
SectionDetails.Separator = SectionDetailsSeparator;
SectionDetails.Carousel = SectionDetailsCarousel;

export { SectionDetails };
