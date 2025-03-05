'use client';

import { Card } from '@/components/module';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui';
import { POSTS } from '@/const/sections/posts';

const PostsSection = () => {
  return (
    <Card.Wrapper id="posts" className="overflow-hidden">
      <Card.Title
        title="Posts"
        description="My thoughts on software development and other topics related to my journey as a software engineer."
      />

      <Carousel>
        <CarouselContent>
          {POSTS.map(post => (
            <CarouselItem key={post.id} className="basis-auto xl:basis-5/12">
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
      </Carousel>
    </Card.Wrapper>
  );
};

export default PostsSection;
