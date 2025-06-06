'use client';

import {
  AskAiSection,
  TypographyControls,
  WelcomeSection,
} from '@/components/module';
import { FigmaComments, PageLayout } from '@/components/ui';
import AnimatedCard from '@/components/ui/animated-card';
import AnimatedCursor from '@/components/ui/animated-cursor';
import usePageAnimations from '@/hooks/use-page-animations';
import useTypography from '@/hooks/use-typography';

export default function Home() {
  const { containerRef } = usePageAnimations();
  const {
    isBold,
    isItalic,
    isUnderline,
    setBold,
    setItalic,
    setUnderline,
    getClassName,
  } = useTypography();

  const classes = getClassName();

  return (
    <div className="scroll-container">
      <PageLayout
        ref={containerRef}
        verticalLines={[{ position: 2 }, { position: 6 }]}
        horizontalLines={[{ position: 3 }, { position: 4 }, { position: 5 }]}
      >
        <h1
          className={`col-start-2 col-span-5 row-start-3 text-8xl flex items-end z-10 text-zinc-200 leading-[0.774] ms-[-6px] ${classes}`}
        >
          Danyil Butov.
        </h1>

        <AnimatedCursor
          className="animated-cursor col-start-4 row-start-4 self-center justify-self-start"
          name="AFK user [probably watching cat videos]"
        />

        <div className="col-start-1 row-start-5 flex w-full h-full justify-end">
          <TypographyControls
            isBold={isBold}
            isItalic={isItalic}
            isUnderline={isUnderline}
            onBoldChange={setBold}
            onItalicChange={setItalic}
            onUnderlineChange={setUnderline}
          />
        </div>

        <WelcomeSection className="col-start-6 row-start-1 row-span-2" />

        <AskAiSection className="col-start-5 row-start-5" />
      </PageLayout>

      <PageLayout
        backgroundColor="bg-white"
        verticalLines={[
          { position: 2, color: 'bg-blue-300' },
          { position: 6, color: 'bg-blue-300' },
          { position: 5, color: 'bg-blue-300', start: 6 },
        ]}
        horizontalLines={[
          { position: 2, color: 'bg-blue-300' },
          { position: 3, color: 'bg-blue-300' },
          { position: 6, color: 'bg-blue-300' },
        ]}
      >
        <h1
          className={`col-start-2 col-span-4 row-start-2 font-bold text-4xl flex z-10 text-black items-center p-4`}
        >
          <span>
            Passionate software engineer with a love for design and frontend
            development,{' '}
            <span className="text-blue-500">
              combined with growing knowledge in building scalable systems.
            </span>
          </span>
        </h1>

        <div className="col-start-1 row-start-1 flex items-start justify-center p-2">
          <span className="font-caveat text-md text-blue-400">
            This is a page where i want to display my best projects.
          </span>
        </div>

        <div className="col-start-2 row-start-1 col-span-3 flex items-end pl-4">
          <span className="font-caveat text-md text-blue-400">
            A short "About Me" might fit here — along with a project that shows
            my skills.
          </span>
        </div>

        <div className="row-start-5 flex justify-end items-end p-2">
          <span className="italic font-mono text-sm text-blue-400 text-right">
            PRJ_001
          </span>
        </div>

        <div className="col-start-2 col-span-2 row-start-3 row-span-3 flex items-center justify-center p-4">
          <AnimatedCard
            title="Project Share"
            theme="purple"
            className="w-full h-full"
          />
        </div>

        <div className="col-start-4 col-span-2 row-start-3 row-span-3 flex items-center justify-center p-4">
          <AnimatedCard
            title="MicroSketch"
            theme="green"
            className="w-full h-full"
          />
        </div>

        <AnimatedCursor
          className="animated-cursor col-start-6 row-start-2 self-center justify-self-center"
          color="blue"
          name="Danyil Butov"
        />

        <div className="col-start-2 col-span-2 row-start-6 flex items-start justify-start pt-5 px-2">
          <div className="flex w-full items-center justify-start">
            <div className="flex-1 h-px bg-blue-400" />
            <span className="px-2 text-xs font-mono text-blue-400">320px</span>
            <div className="flex-1 h-px bg-blue-400" />
          </div>
        </div>

        <div className="col-start-6 row-start-3 row-span-3 flex flex-col w-full p-2 justify-start">
          <div className="flex h-full flex-col items-center justify-center w-fit">
            <div className="flex-1 w-px bg-blue-400" />
            <span className="p-2 text-xs font-mono text-blue-400 transform rotate-90 bg-white">
              240px
            </span>
            <div className="flex-1 w-px bg-blue-400" />
          </div>
        </div>

        <FigmaComments className="col-start-6 row-start-2" variant="projects" />
      </PageLayout>
      <PageLayout
        backgroundColor="bg-white"
        verticalLines={[
          { position: 2, color: 'bg-blue-300' },
          { position: 6, color: 'bg-blue-300' },
          { position: 5, color: 'bg-blue-300', span: 1 },
        ]}
        horizontalLines={[
          { position: 2, color: 'bg-blue-300' },
          { position: 3, color: 'bg-blue-300', span: 1 },
          { position: 3, start: 6, color: 'bg-blue-300', span: 1 },
          { position: 6, color: 'bg-blue-300' },
        ]}
      >
        <div className="col-start-2 col-span-2 row-start-1 p-4 flex flex-col gap-3 justify-center">
          <p className="text-4xl font-bold text-black">
            More Than Just Projects
          </p>
          <p className="text-sm text-zinc-500 font-light">
            My journey has been about more than just code — feel free to explore
            and get to know the person behind the work.
          </p>
        </div>
        <div className="col-start-2 col-span-4 row-span-4 row-start-2 m-4">
          <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-2">
            <div className="bg-blue-300 row-span-2 relative">
              <div className="absolute top-0 left-0 m-4 bg-white px-2 rounded-lg">
                <span className="text-black font-semibold text-xs flex justify-center items-center">
                  University of Edinburgh
                </span>
              </div>
            </div>
            <div className="bg-red-300 col-start-2 relative">
              <div className="absolute top-0 left-0 m-4 bg-white px-2 rounded-lg">
                <span className="text-black font-semibold text-xs flex justify-center items-center">
                  comp-soc
                </span>
              </div>
            </div>
            <div className="bg-green-300 col-start-2 row-start-2 relative">
              <div className="absolute top-0 left-0 m-4 bg-white px-2 rounded-lg">
                <span className="text-black font-semibold text-xs flex justify-center items-center">
                  Project share
                </span>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
      <PageLayout>
        <div className="col-start-2 row-start-5 col-span-2 bg-red-500 m-2" />
        <div className="col-start-4 row-start-5 rounded-full bg-pink-500 m-2" />
        <div className="col-start-5 row-start-5 bg-green-500 m-2" />
        <div className="col-start-5 row-start-3 row-span-2 bg-yellow-500 m-2" />
        <div className="col-start-3 row-start-4 col-span-2 bg-cyan-500 m-2" />
        <div className="col-start-2 row-start-4 rounded-full bg-lime-500 m-2" />
        <div className="col-start-4 row-start-3 flex items-end justify-end m-2">
          <button
            className="bg-white text-black hover:text-blue-600 hover:bg-blue-50 transition-all px-6 py-3 rounded-lg shadow-lg hover:shadow-xl inline-flex items-center gap-3 text-lg font-semibold group z-10"
            disabled
          >
            Discover more
          </button>
        </div>
        <div className="col-start-1 col-span-6 row-span-6 row-start-6 flex justify-center items-end">
          <div className="w-1/2 flex justify-around mb-10">
            <p className="text-xs text-muted-foreground font-bold">
              Edinburgh, UK
            </p>
            <p className="text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer">
              danyil.butov.tech@gmail.com
            </p>
            <p className="text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer">
              LinkedIn
            </p>
            <p className="text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer">
              GitHub
            </p>
            <p className="text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer">
              How i built this site
            </p>
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
