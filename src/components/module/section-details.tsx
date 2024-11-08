import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Image from 'next/image';
import Video from 'next-video';
import { Asset } from 'next-video/dist/assets.js';

import { SectionItemType } from '@/const';

import { Badge, Separator } from '../ui';

const SectionDetails = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

const SectionDetailsHeader = ({
  sectionItem,
}: {
  sectionItem: SectionItemType;
}) => {
  return (
    <div
      key={sectionItem?.title}
      className={'flex gap-5 items-center py-1 px-2 rounded-lg'}
    >
      <Avatar className="h-12 w-12">
        <AvatarImage src={sectionItem?.logo} />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <div className="flex-auto">
        <div className="flex items-center justify-between">
          <div>{sectionItem?.title}</div>
        </div>
        <div className="text-md text-muted-foreground">
          {sectionItem?.subtitle}
        </div>
      </div>
    </div>
  );
};

const SectionDetailsText = ({ children }: { children: ReactNode }) => (
  <div className="text-md text-muted-foreground">{children}</div>
);

const SectionDetailsImage = ({
  image,
  caption,
}: {
  image: string;
  caption?: string;
}) => (
  <div className="flex flex-col justify-center items-center">
    <Image src={image} alt={image} height={300} width={700} />
    <div className="text-xs text-muted-foreground">{caption}</div>
  </div>
);

const SectionDetailsVideo = ({
  video,
  caption,
}: {
  video: Asset;
  caption?: string;
}) => (
  <div className="flex flex-col justify-center items-center">
    <Video
      src={video}
      controls={false}
      muted
      loop
      autoPlay
      className="w-full h-full"
    />
    <div className="text-xs text-muted-foreground">{caption}</div>
  </div>
);

const SectionDetailsTechStack = ({ techStack }: { techStack: string[] }) => (
  <div className="py-1 px-2">
    <div className="text-md">TECH</div>
    <div className="flex flex-wrap gap-1 my-2">
      {techStack.map(tech => (
        <Badge key={tech} className="text-xs mb-1" variant="outline">
          {tech}
        </Badge>
      ))}
    </div>
  </div>
);

const SectionDetailsWrapper = ({ children }: { children: ReactNode }) => (
  <div className="py-1 px-2">{children}</div>
);

const SectionDetailsSeparator = () => <Separator className="my-3" />;

SectionDetails.Header = SectionDetailsHeader;
SectionDetails.Text = SectionDetailsText;
SectionDetails.Image = SectionDetailsImage;
SectionDetails.Video = SectionDetailsVideo;
SectionDetails.TechStack = SectionDetailsTechStack;
SectionDetails.Wrapper = SectionDetailsWrapper;
SectionDetails.Separator = SectionDetailsSeparator;

export { SectionDetails };
