import { useAtom } from 'jotai';

import { Button } from '@/components/ui/button';
import MAIN_DATA from '@/const/main-data';
import { pageAtom } from '@/state/page';
import { usePages } from '@/state/page';

import InfoBlockAnimation from '../layout/info-block-animation';

import { AnimatedText } from './animated-text';
import Header from './header';
import InfoBlock from './info-block';

const PAGES = ['General', 'Projects', 'Experience'];

export const Controls = () => {
  const [page, setPage] = useAtom(pageAtom);
  const pages = usePages();

  return (
    <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
      <Header />
      <InfoBlockAnimation key={page.toString()}>
        {page === 0 ? (
          <div>
            <h1 className="pb-2 text-4xl">Danyil Butov</h1>
            <AnimatedText />
          </div>
        ) : page !== pages.length ? (
          <InfoBlock data={MAIN_DATA[page - 1]} />
        ) : null}
      </InfoBlockAnimation>
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
