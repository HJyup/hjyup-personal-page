'use client';

import Post from '@/components/module/post/post';

const Page = () => {
  return (
    <Post.Wrapper>
      <Post.TitleWrapper>
        <Post.Title
          title="Me as a Software Engineer"
          date="March 2, 2025"
          category="Personal Development"
          description="A showcase of my skills and experiences in software engineering"
        />
      </Post.TitleWrapper>

      <Post.TitleLinks
        links={[
          {
            label: 'Demo Version',
            href: 'https://demo.danyilbutov.com/',
            disabled: true,
          },
          {
            label: 'Previous Iteration',
            href: 'https://2024.danyilbutov.com/',
            disabled: true,
          },
        ]}
      />

      <Post.ContentBlock>
        <Post.TextBlock>
          Software engineer with a focus on web and distributed systems.
          Studying CS & AI at Edinburgh, while building scalable apps and diving
          into emerging tech.
        </Post.TextBlock>
      </Post.ContentBlock>

      <Post.ContentTitle id="skills-and-technologies">
        Skills & Technologies
      </Post.ContentTitle>

      <Post.ContentBlock>
        <Post.TextBlock>
          First of all, I position myself as a software engineer with a focus on
          web development, having extensive experience building beautiful and
          scalable web applications.
        </Post.TextBlock>

        <Post.TextBlock>
          For frontend development, diving into TypeScript and scalable
          architecture significantly improved my skills. Building maintainable
          frontend architecture can be challenging since practices vary widely
          between projects. Some resources that helped me grow include:{' '}
          <Post.TextLink href="https://www.amazon.co.uk/Programming-TypeScript-Making-JavaScript-Applications/dp/1492037656">
            Programming TypeScript
          </Post.TextLink>{' '}
          <Post.TextLink href="https://www.patterns.dev/">
            Patterns.dev
          </Post.TextLink>{' '}
          <Post.TextLink href="https://khalilstemmler.com/articles/client-side-architecture/architecture">
            Article about Architecture
          </Post.TextLink>
        </Post.TextBlock>

        <Post.TextBlock>
          During my first professional role, I expanded beyond frontend into
          backend systems and cloud services. This introduced me to Go and
          microservices architecture. Some key resources that helped me
          understand distributed systems:{' '}
          <Post.TextLink href="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Robust/dp/1449373321">
            Data-Intensive Applications
          </Post.TextLink>{' '}
          <Post.TextLink href="https://www.amazon.co.uk/Network-Programming-Go-Adam-Woodbeck/dp/1718500882">
            Network Programming with Go
          </Post.TextLink>
        </Post.TextBlock>

        <Post.TextBlock>
          My goal now is to become a truly language-agnostic developer, able to
          adapt to any technology stack to build scalable and performant
          applications.{' '}
          <Post.TextSecondary>
            (While still having my preferred languages and frameworks where I'm
            most productive.)
          </Post.TextSecondary>
        </Post.TextBlock>
      </Post.ContentBlock>

      <Post.ContentTitle id="personal-website">
        Personal Website
      </Post.ContentTitle>

      <Post.ContentBlock>
        <Post.TextBlock>
          Speaking about myself, I must mention this page. This website serves
          as a canvas for my projects and accomplishments. With a minimalistic
          design, the emphasis is placed squarely on the content. My goal was to
          create a layout that is highly scalable and simple to update.
        </Post.TextBlock>

        <Post.TextBlock>
          Prior to this version, I tried to develop a concept for a personal
          webpage that resembled an interactive book, crafted with Three.js. The
          vision was to offer a distinctive, book-like journey.
        </Post.TextBlock>

        <Post.TextBlock>
          I can't say if the current design stays for a long time, as my taste
          and design trends are evolving. However, I find myself genuinely
          pleased with the outcome.
        </Post.TextBlock>

        <Post.ImageBlock
          src="/posts/intro/book_pp.png"
          alt="Example of the book"
          caption="Demo iteration of the personal website (I couldn't resist to include it)"
        />

        <Post.TextBlock>
          I am incredibly thankful for the support from{' '}
          <Post.TextLink href="https://tomasmaillo.com/">
            Tomas Maillo
          </Post.TextLink>{' '}
          who inspired me to create my personal website. I couldn't even imagine
          that building my own portfolio would be such a fun experience.
        </Post.TextBlock>
      </Post.ContentBlock>

      <Post.ContentTitle id="future-vision">
        Vision about Future Projects
      </Post.ContentTitle>

      <Post.ContentBlock>
        <Post.TextBlock>
          I really want to dive into AI in my future projects, such as
          developing a code review tool or conversation prediction tool. Working
          on these projects is an exciting experience, and I will keep you
          informed of my progress.
        </Post.TextBlock>
      </Post.ContentBlock>
    </Post.Wrapper>
  );
};

export default Page;
