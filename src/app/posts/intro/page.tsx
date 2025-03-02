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

      <Post.ContentTitle id="technical-expertise">
        Tech Stack & Growth Journey
      </Post.ContentTitle>

      <Post.ContentBlock>
        <Post.TextBlock>
          My core expertise lies in frontend development, with a particular
          emphasis on building scalable applications with great user experience.
        </Post.TextBlock>

        <Post.TextBlock>
          I've spent a lot of time getting really good with TypeScript and React
          - building stuff that actually works well and doesn't fall apart when
          you try to change it later. I picked up a ton from some really helpful
          resources like{' '}
          <Post.TextLink href="https://www.amazon.co.uk/Programming-TypeScript-Making-JavaScript-Applications/dp/1492037656">
            Programming TypeScript
          </Post.TextLink>
          {', '}
          <Post.TextLink href="https://www.patterns.dev/">
            Patterns.dev
          </Post.TextLink>
          {', and '}
          <Post.TextLink href="https://khalilstemmler.com/articles/client-side-architecture/architecture">
            Modern Frontend Architecture Patterns
          </Post.TextLink>
          .
        </Post.TextBlock>

        <Post.TextBlock>
          My backend journey kicked off during my first work experience - it was
          mind-blowing how much I didn't know! That's where I first got my hands
          on Golang and honestly, I just clicked with it right away. I dove into
          some really good books that helped me figure things out:{' '}
          <Post.TextLink href="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Robust/dp/1449373321">
            Designing Data-Intensive Applications
          </Post.TextLink>
          {' and '}
          <Post.TextLink href="https://www.amazon.co.uk/Network-Programming-Go-Adam-Woodbeck/dp/1718500882">
            Network Programming with Go
          </Post.TextLink>
          . These were total game-changers for getting my head around
          distributed systems, data consistency, and how to build stuff.
        </Post.TextBlock>

        <Post.TextBlock>
          My current focus is on becoming a language-agnostic engineer capable
          of architecting and implementing solutions across different technology
          stacks. While I maintain expertise in specific technologies, I believe
          the true value lies in understanding fundamental principles and
          patterns that transcend specific tools or frameworks.
        </Post.TextBlock>
      </Post.ContentBlock>

      <Post.ContentTitle id="portfolio-evolution">
        Portfolio Evolution
      </Post.ContentTitle>

      <Post.ContentBlock>
        <Post.TextBlock>
          Describing my journey is hard without telling you about this webpage.
          It embodies my understanding of clean, maintainable code and intuitive
          user experience. The minimalist design isn't just aesthetic choice;
          it's a decision to prioritise content accessibility and user
          engagement.
        </Post.TextBlock>

        <Post.TextBlock>
          My previous iteration was more experimental rather than practical - an
          interactive book experience built with Three.js. It was a fun project
          to work on, but I realised that it's not the best way to showcase my
          work as it was not practical and not user-friendly.
        </Post.TextBlock>

        <Post.TextBlock>
          The current iteration reflects my maturing approach to web
          development. I can't say if the current design stays for a long time,
          as my taste and design trends are evolving. However, I find myself
          genuinely pleased with the outcome.
        </Post.TextBlock>

        <Post.ImageBlock
          src="/posts/intro/book_pp.png"
          alt="Interactive 3D book portfolio concept"
          caption="Previous portfolio iteration: An experimental 3D book interface built with Three.js"
        />

        <Post.TextBlock>
          I owe significant gratitude to{' '}
          <Post.TextLink href="https://tomasmaillo.com/">
            Tomas Maillo
          </Post.TextLink>
          , whose inspiration was crucial in my portfolio development. He really
          helped me understand that personal projects are invaluable
          opportunities for both creative expression and technical growth.
        </Post.TextBlock>
      </Post.ContentBlock>

      <Post.ContentTitle id="future-aspirations">
        Future Aspirations & Projects
      </Post.ContentTitle>

      <Post.ContentBlock>
        <Post.TextBlock>
          I'm currently developing several ambitious projects: an AI-powered
          code review assistant that combines static analysis with machine
          learning, and a conversation prediction. These projects are incredibly
          fun to work on and I'll be documenting my progress and insights here,
          sharing both successes and learning experiences along the way.
        </Post.TextBlock>
      </Post.ContentBlock>
    </Post.Wrapper>
  );
};

export default Page;
