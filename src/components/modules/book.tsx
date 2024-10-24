import { FC, useEffect, useState } from "react";
import { useAtom } from "jotai";

import { BookPage } from "@/components/modules/book-page";
import usePreloadTextures from "@/hooks/use-preload-textures";
import { pageAtom, usePages } from "@/state/page";

export const Book: FC = ({ ...props }) => {
  const [page] = useAtom(pageAtom);
  const pages = usePages();
  const [delayedPage, setDelayedPage] = useState(page);

  usePreloadTextures();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const goToPage = () => {
      setDelayedPage(delayedPage => {
        if (page === delayedPage) {
          return delayedPage;
        } else {
          timeout = setTimeout(
            () => {
              goToPage();
            },
            Math.abs(page - delayedPage) > 2 ? 50 : 150,
          );
          return page > delayedPage ? delayedPage + 1 : delayedPage - 1;
        }
      });
    };

    goToPage();
    return () => {
      clearTimeout(timeout);
    };
  }, [page]);

  return (
    <group {...props} rotation-y={-Math.PI / 2}>
      {[...pages].map((pageData, index) => (
        <BookPage
          key={index}
          page={delayedPage}
          number={index}
          opened={delayedPage > index}
          bookClosed={delayedPage === 0 || delayedPage === pages.length}
          {...pageData}
        />
      ))}
    </group>
  );
};
