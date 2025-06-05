'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { NotepadText } from 'lucide-react';

import {
  AskAiSection,
  TypographyControls,
  WelcomeSection,
} from '@/components/module';
import AnimatedCard from '@/components/ui/animated-card';
import AnimatedCursor from '@/components/ui/animated-cursor';
import AnimatedLine from '@/components/ui/animated-line';
import usePageAnimations from '@/hooks/use-page-animations';
import useTypography from '@/hooks/use-typography';

gsap.registerPlugin(useGSAP);

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

  return (
    <div className="scroll-container">
      <div
        ref={containerRef}
        className="w-full h-screen grid grid-cols-6 grid-rows-6 snap-start"
      >
        <AnimatedLine
          className="col-start-2 row-start-1 row-span-6 vertical-line h-full"
          position="vertical"
        />
        <AnimatedLine
          className="col-start-6 row-start-1 row-span-6 vertical-line h-full"
          position="vertical"
        />

        <h1
          className={`col-start-2 col-span-5 row-start-3 text-8xl flex items-end z-10 text-zinc-200 leading-[0.774] ms-[-6px] ${getClassName()}`}
        >
          Danyil Butov.
        </h1>

        {/* TODO: Think about this. what i can do add here? */}
        {/* <div className="col-start-2 col-span-4 row-start-1 row-span-2 flex w-full h-full items-end justify-start z-20 pl-10">
          <div className="stacked-cards">
            <StackedCards />
          </div>
        </div> */}

        <AnimatedCursor
          className="animated-cursor col-start-4 row-start-4 self-center justify-self-start"
          name="AFK user [probably watching cat videos]"
        />
        <AnimatedCursor
          className="animated-cursor col-start-2 row-start-5 self-center justify-self-start"
          color="blue"
          name="Wants to mess with font styles"
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

        <AnimatedLine
          className="row-start-3 col-start-1 horizontal-line col-span-6 w-full"
          position="horizontal"
        />
        <AnimatedLine
          className="row-start-5 col-start-1 horizontal-line col-span-6 w-full"
          position="horizontal"
        />
        <AnimatedLine
          className="row-start-4 col-start-1 col-span-6 horizontal-line w-full"
          position="horizontal"
        />
      </div>
      <div className="w-full h-screen grid grid-cols-6 grid-rows-6 bg-zinc-100 snap-start">
        <AnimatedLine
          className="col-start-2 row-start-1 row-span-6 vertical-line h-full"
          color="bg-blue-300"
          position="vertical"
        />
        <AnimatedLine
          className="col-start-6 row-start-1 row-span-6 vertical-line h-full"
          color="bg-blue-300"
          position="vertical"
        />

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

        <div className="col-start-1 row-start-1 flex items-start justify-center font-mono text-xs text-blue-400">
          <span className="italic">
            This is a page where i want to display my best projects.
          </span>
        </div>

        <div className="col-start-2 row-start-1 col-span-3 flex items-end font-mono text-xs text-blue-400 pl-4">
          <span className="italic">
            Hm... Maybe I can add a little about me here. And my project can
            prove my vision about me?
          </span>
        </div>

        <div className="col-start-6 row-start-6 m-2">
          <button
            className="border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all px-6 py-3 inline-flex items-center rounded-lg gap-3 text-lg font-semibold hover:cursor-pointer"
            disabled
          >
            <NotepadText className="h-5 w-5 text-blue-500" />
            View my Resume
          </button>
        </div>

        <div className="col-start-2 col-span-2 row-start-3 row-span-3 flex items-center justify-center p-4">
          <AnimatedCard
            title="Project Share"
            variant="purple"
            className="w-full h-full"
          />
        </div>

        <div className="col-start-4 col-span-2 row-start-3 row-span-3 flex items-center justify-center p-4">
          <AnimatedCard
            title="MicroSketch"
            variant="green"
            className="w-full h-full"
          />
        </div>

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
            <span className="p-2 text-xs font-mono text-blue-400 transform rotate-90 bg-zinc-100">
              240px
            </span>
            <div className="flex-1 w-px bg-blue-400" />
          </div>
        </div>

        <AnimatedLine
          className="row-start-2 col-start-1 horizontal-line col-span-6 w-full"
          color="bg-blue-300"
          position="horizontal"
        />
        <AnimatedLine
          className="row-start-3 col-start-1 horizontal-line col-span-6 w-full"
          color="bg-blue-300"
          position="horizontal"
        />
        <AnimatedLine
          className="row-start-6 col-start-1 horizontal-line col-span-6 w-full"
          color="bg-blue-300"
          position="horizontal"
        />
      </div>
      <div className="w-full h-screen grid grid-cols-6 grid-rows-6 bg-zinc-100 snap-start">
        <AnimatedLine
          className="col-start-2 row-start-1 row-span-6 vertical-line h-full"
          color="bg-blue-300"
          position="vertical"
        />
        <AnimatedLine
          className="col-start-6 row-start-1 row-span-6 vertical-line h-full"
          color="bg-blue-300"
          position="vertical"
        />

        <AnimatedLine
          className="row-start-2 col-start-1 horizontal-line col-span-6 w-full"
          color="bg-blue-300"
          position="horizontal"
        />
        <AnimatedLine
          className="row-start-3 col-start-1 horizontal-line col-span-6 w-full"
          color="bg-blue-300"
          position="horizontal"
        />
        <AnimatedLine
          className="row-start-5 col-start-1 horizontal-line col-span-6 w-full"
          color="bg-blue-300"
          position="horizontal"
        />
      </div>
      <div className="w-full h-screen grid grid-cols-6 grid-rows-6 snap-start pb-10">
        <div className="col-start-1 col-span-6 row-start-6 flex items-end justify-center">
          <div className="flex items-center justify-around gap-2 w-2/3">
            <div className="text-xs text-zinc-500 font-bold">Edinburgh, UK</div>
            <div className="text-xs text-zinc-500 font-bold underline">
              How i built this site?
            </div>
            <div className="text-sm text-zinc-500 font-bold underline">
              Github
            </div>
            <div className="text-sm text-zinc-500 font-bold underline">
              LinkedIn
            </div>
            <div className="text-sm text-zinc-500 font-bold underline">
              Email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
