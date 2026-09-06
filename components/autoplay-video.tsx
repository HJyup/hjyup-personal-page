'use client';

import { type ReactNode, useEffect, useRef } from 'react';

/**
 * A silent, looping clip that starts on its own, including on phones.
 *
 * Mobile browsers insist on three things before they will autoplay, and the
 * JSX props alone only cover one of them:
 *
 * - `muted` has to be true on the element itself. React treats it as a
 *   property rather than an attribute, so it never reaches the server-rendered
 *   HTML; the browser has already refused autoplay by the time hydration sets
 *   it. The ref sets it before the first play attempt.
 * - iOS needs `playsInline`, or it refuses rather than playing in place.
 * - Safari only autoplays a clip that is actually on screen, so one that starts
 *   outside the viewport (in a scrolling strip, say) needs a second attempt
 *   once it scrolls in.
 *
 * `play()` is still allowed to fail. Low Power Mode and data saver block it
 * outright, and there is nothing useful to do about that but leave the first
 * frame showing.
 */
export function AutoplayVideo({
  src,
  poster,
  label,
  className,
  controls = false,
  children,
}: {
  src?: string;
  poster?: string;
  label: string;
  className?: string;
  /** Reduced motion: show the controls and let the reader start it instead. */
  controls?: boolean;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || controls) return;

    video.muted = true;
    video.defaultMuted = true;

    const attempt = () => {
      video.play()?.catch(() => {});
    };
    attempt();

    // Also frees phones from decoding video nobody is looking at.
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) attempt();
          else video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      draggable={false}
      autoPlay={!controls}
      controls={controls}
      loop
      muted
      playsInline
      className={className}
    >
      {children}
    </video>
  );
}
