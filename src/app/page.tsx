'use client';

import { FolderClosed, PlayIcon } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="text-black flex flex-col pt-16 sm:pt-20 md:pt-28 justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col w-full items-center h-full">
        <div className="w-full max-w-6xl">
          <div className="text-muted-foreground text-lg sm:text-xl">
            Danyil Butov
          </div>
          <div className="text-lg sm:text-xl">Software Developer</div>
          <div className="text-muted-foreground text-xs sm:text-sm mt-8 sm:mt-12">
            About
          </div>
          <div className="text-base sm:text-lg lg:text-xl mt-3 xl:w-2/3 lg:w-3/4 md:w-5/6 w-full leading-relaxed">
            Computer Science & AI student at the
            University&nbsp;of&nbsp;Edinburgh and a software developer at
            Solidgate. I love crafting solutions to real-world problems. It's my
            third iteration of my portfolio.
            Built&nbsp;with&nbsp;care&nbsp;and&nbsp;a&nbsp;touch&nbsp;of&nbsp;fun.
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-6 lg:gap-8">
            <div className="w-full lg:w-1/2">
              <div className="text-muted-foreground text-xs sm:text-sm mt-8 sm:mt-12">
                Experience
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="bg-blue-400 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                    <a
                      href="https://solidgate.com"
                      target="_blank"
                      className="hover:underline text-sm sm:text-base truncate"
                      rel="noreferrer"
                    >
                      Solidgate
                    </a>
                  </div>
                  <div className="text-muted-foreground text-xs flex-shrink-0 ml-2">
                    2023 - Present
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="bg-violet-400 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                    <a
                      href="https://projectshare.comp-soc.com/"
                      target="_blank"
                      className="hover:underline text-sm sm:text-base truncate"
                      rel="noreferrer"
                    >
                      Vice President of Project Share
                    </a>
                  </div>
                  <div className="text-muted-foreground text-xs flex-shrink-0 ml-2">
                    2025 - Present
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="bg-red-400 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                    <a
                      href="https://comp-soc.com/"
                      target="_blank"
                      className="hover:underline text-sm sm:text-base truncate"
                      rel="noreferrer"
                    >
                      Committee Member of Comp Soc
                    </a>
                  </div>
                  <div className="text-muted-foreground text-xs flex-shrink-0 ml-2">
                    2025 - Present
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-muted-foreground text-xs sm:text-sm mt-8 sm:mt-12 lg:mt-12">
                Blog
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="bg-zinc-400 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                    <span className="text-sm sm:text-base truncate">
                      How i built this website?
                    </span>
                  </div>
                  <div className="text-muted-foreground text-xs flex-shrink-0 ml-2">
                    2025 - 07 - 15
                  </div>
                </div>
                <div className="flex items-center justify-between hover:border-1 hover:border-zinc-200">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="bg-violet-400 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                    <span className="blur-sm text-sm sm:text-base truncate">
                      My restrospective on Kowalski design course
                    </span>
                  </div>
                  <div className="text-muted-foreground text-xs flex-shrink-0 ml-2">
                    Coming soon
                  </div>
                </div>
                <div className="flex items-center justify-between select-none">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="bg-red-400 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                    <span className="blur-sm text-sm sm:text-base truncate">
                      Monte-carlo stuff (i know u're watching)
                    </span>
                  </div>
                  <div className="text-muted-foreground text-xs flex-shrink-0 ml-2">
                    Coming soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full my-8 sm:my-12 lg:my-16">
        <div className="columns-1 sm:columns-2 gap-3 w-full space-y-3">
          <div className="bg-gray-100 h-[40vh] sm:h-[50vh] rounded-2xl sm:rounded-3xl break-inside-avoid"></div>
          <div className="bg-gray-100 h-[50vh] sm:h-[50vh] rounded-2xl sm:rounded-3xl break-inside-avoid flex justify-end items-end">
            <div className="w-5/6 bg-white rounded-t-2xl rounded-br-2xl sm:rounded-t-3xl sm:rounded-br-3xl">
              <div className="w-full h-[5vh] sm:h-[6vh] bg-gradient-to-t from-[#fabd00] to-[#fed202] rounded-t-2xl sm:rounded-t-3xl flex items-center text-white text-base sm:text-lg gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8">
                <FolderClosed className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="truncate">Notes</span>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative max-h-[40vh] overflow-hidden">
                <div>
                  <div className="py-1 sm:py-2">
                    <span className="text-sm sm:text-base leading-relaxed">
                      Design a new landing page for HackTheBurgh XII
                    </span>
                    <br />
                    <span className="bg-zinc-100 text-zinc-500 text-xs px-2 py-0.5 rounded-md mr-2 mt-1 inline-block">
                      Project
                    </span>
                  </div>
                  <div className="border-b border-gray-200 w-full mt-0.5" />
                </div>
                <div>
                  <div className="py-1 sm:py-2">
                    <span className="text-sm sm:text-base leading-relaxed">
                      Read "Designing Data-Intensive Applications"
                      by&nbsp;Martin&nbsp;Kleppmann
                    </span>
                    <br />
                    <span className="bg-zinc-100 text-zinc-500 text-xs px-2 py-0.5 rounded-md mr-2 mt-1 inline-block">
                      Book
                    </span>
                    <span className="bg-zinc-100 text-zinc-500 text-xs px-2 py-0.5 rounded-md mr-2 mt-1 inline-block">
                      Backend
                    </span>
                  </div>
                  <div className="border-b border-gray-200 w-full mt-0.5" />
                </div>
                <div>
                  <div className="py-1 sm:py-2">
                    <span className="text-sm sm:text-base leading-relaxed">
                      Explore microservices architecture with Go
                    </span>
                    <br />
                    <span className="bg-zinc-100 text-zinc-500 text-xs px-2 py-0.5 rounded-md mr-2 mt-1 inline-block">
                      Code
                    </span>
                  </div>
                  <div className="border-b border-gray-200 w-full mt-0.5" />
                </div>
                <div>
                  <div className="py-1 sm:py-2">
                    <span className="text-sm sm:text-base leading-relaxed">
                      Read "The Design of Everyday Things" by Don Norman
                    </span>
                    <br />
                    <span className="bg-zinc-100 text-zinc-500 text-xs px-2 py-0.5 rounded-md mr-2 mt-1 inline-block">
                      Book
                    </span>
                    <span className="bg-zinc-100 text-zinc-500 text-xs px-2 py-0.5 rounded-md mr-2 mt-1 inline-block">
                      Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 h-[40vh] sm:h-[50vh] rounded-2xl sm:rounded-3xl break-inside-avoid"></div>
          <div className="bg-[#37425e] min-h-[25vh] rounded-2xl sm:rounded-3xl break-inside-avoid p-3 sm:p-4 lg:p-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-5">
            <Image
              className="rounded-lg sm:rounded-xl shadow-xl w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 flex-shrink-0 object-cover"
              src="/music/melodrama.png"
              alt="blog-1"
              width={190}
              height={190}
            />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full min-w-0">
              <div className="text-[#c1ccee] text-xs sm:text-sm">
                NOW PLAYING
              </div>
              <div className="text-[#fcfcfc] text-lg sm:text-xl lg:text-2xl font-medium truncate w-full">
                Supercut
              </div>
              <div className="text-[#c1ccee] text-base sm:text-lg truncate w-full">
                Lorde
              </div>
              <button className="text-[#fcfcfc] text-sm sm:text-base lg:text-lg bg-[#56617c] rounded-full gap-2 flex justify-center items-center mt-2 px-3 py-1 sm:px-4 sm:py-1.5 hover:bg-[#6b7590] transition-colors duration-200 min-w-0">
                <PlayIcon
                  className="w-3 h-3 sm:w-4 sm:h-4 text-[#fcfcfc] flex-shrink-0"
                  fill="#fcfcfc"
                />
                <span className="truncate">Play</span>
              </button>
            </div>
          </div>
          <div className="bg-gray-100 h-[40vh] sm:h-[50vh] rounded-2xl sm:rounded-3xl break-inside-avoid"></div>
          <div className="bg-gray-100 h-[40vh] sm:h-[50vh] rounded-2xl sm:rounded-3xl break-inside-avoid"></div>
        </div>
      </div>
    </div>
  );
}
