import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useAtom } from 'jotai';

import { Button } from '@/components/ui/button';
import { pageAtom } from '@/state/page';
import { usePages } from '@/state/page';

const PAGES = ['General', 'About', 'Projects', 'Experience', 'Blog'];

export const Controls = () => {
  const [page, setPage] = useAtom(pageAtom);
  const pages = usePages();

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
      <div className="flex justify-between m-10">
        <a className="pointer-events-auto" href="https://github.com/HJyup">
          Danyil-Butov.
        </a>
        <div className="flex gap-2">
          <a className="pointer-events-auto" href="https://github.com/HJyup">
            Github
          </a>
          <p>|</p>
          <a className="pointer-events-auto" href="https://github.com/HJyup">
            Linkedin
          </a>
        </div>
      </div>
      <motion.div
        key={page}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
        className="w-1/3 ml-10 mb-64"
      >
        {page === 0 ? (
          <div>
            <h1 className="underline pb-2">General</h1>
            <p>
              Software Engineer from Ukraine. <br />
            </p>
            <p>
              Studying at the University of Edinburgh. <br />
            </p>
          </div>
        ) : page === 1 ? (
          <div>
            <h1 className="underline pb-2 font-bold">Projects</h1>
            <p className="mb-5">
              Here's listed projects that I've done. <br />
            </p>
            <div className="flex gap-5 flex-col">
              <div>
                <p>
                  1. FictAdvisor ------
                  <br />
                </p>
                <p className="font-extralight text-opacity-80">
                  Platform for teacher evaluations and interactive timetables
                  across all Universities faculties.
                  <br />
                </p>
              </div>
              <div>
                <p>
                  2. ChipInAI ------
                  <br />
                </p>
                <p className="font-extralight text-opacity-80">
                  App that scans restaurant bills, automatically itemises group
                  charges, and effortlessly calculates each person’s share for
                  easy and accurate bill splitting
                  <br />
                </p>
              </div>
              <div>
                <p>
                  3. Personal Website ------
                  <br />
                </p>
                <p className="font-extralight text-opacity-80">
                  Personal website that showcases my projects and skills.
                  <br />
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="underline pb-2">Final</h1>
            <p>
              Web developer from Ukraine. <br />
            </p>
            <p>
              Studying at the University of
              Edinburghdasdknjsadkjhasbjkdasjkhdbjkaskbjhdsabjkhdjkbhas. <br />
            </p>
          </div>
        )}
      </motion.div>
      <div className="w-full overflow-auto pointer-events-auto flex justify-center">
        <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
          {pages.map((_, index) => (
            <Button
              key={index}
              className={`${index === page && 'underline'}`}
              onClick={() => setPage(index)}
            >
              {PAGES[index]}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
};