'use client';

import { Card } from '@/components/module';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import { POSTS } from '@/const/sections/posts';

const PostsSection = () => {
  return (
    <Card.Wrapper id="posts">
      <Card.Title
        title="Posts"
        description="My thoughts on software development and other topics related to my journey as a software engineer."
      />

      <Carousel>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselContent>
          {POSTS.map(post => (
            <CarouselItem key={post.id} className="lg:basis-6/12 basis-12/12">
              <Card.ImageCard
                id={post.id}
                image={post.image}
                title={post.title}
                description={post.description}
                link={post.link}
                disabled={post.disabled}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </Card.Wrapper>
  );
};

export default PostsSection;
