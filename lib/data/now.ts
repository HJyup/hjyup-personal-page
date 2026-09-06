import { type NowEntry } from '@/components/now-feed';

/**
 * Newest first. Each entry is a date, a line under it, a paragraph, and any
 * photos or clips.
 */
export const NOW: NowEntry[] = [
  {
    id: 'jul-2026',
    date: 'July 2026',
    subtitle: 'Google Hackathon 2026',
    description:
      'At the Google King\u2019s Cross office, building an agent that helps people reach the authorities in an emergency. I also started using Go a lot and it finally clicked for me. Just finished a reconciliation worker at Wise to solve drift with notifications.',
    photos: [
      {
        src: '/now/july-1.webp',
        alt: 'A vinyl cutter part-way through a sheet of Android robot stickers',
      },
      {
        src: '/now/july-2.webp',
        alt: 'The Google King\u2019s Cross facade at night, its windows filled with pixel art made from sticky notes',
      },
      {
        src: '/now/july-3.webp',
        alt: 'A life-size Android mascot covered in moss and flowers, standing in an office lobby',
      },
    ],
  },
  {
    id: 'jun-2026',
    date: 'June 2026',
    subtitle: 'Rally project x Internship at Wise',
    description:
      'Moving to London for my internship at Wise. I never thought I would end up on a Platform team, but I’m incredibly excited to touch systems far from the product. Also started playing tennis, and already have an idea for my next project in Java (more breadth in my stack!). Right now I am solving the problem of background location checks.',
    photos: [
      {
        src: '/now/june-1.webp',
        alt: 'The City of London skyline at golden hour, towers and cranes catching the light',
      },
      {
        src: '/now/june-2.webp',
        alt: 'The Rally app running in an Xcode preview, showing a map of the UK and a live location panel',
      },
    ],
  },
  {
    id: 'apr-2026',
    date: 'April 2026',
    subtitle: 'Revision and Edinburgh',
    description:
      'Past papers, and prep for the summer internship. This is the month Edinburgh grew on me. I used to escape to London whenever I could, for hackathons or to see friends, but lately I have started to appreciate how quiet this city is. When you have that much going on, it matters whether a place can make you slow down, and Edinburgh really does that well.',
    photos: [
      {
        src: '/now/april-1.webp',
        alt: 'A domed hall in Edinburgh, painted figures and stained glass above the tiered galleries',
      },
      {
        src: '/now/april-2.webp',
        alt: 'The Meadows at sunset, cherry blossom along the paths and a church spire on the skyline',
      },
      {
        src: '/now/april-3.webp',
        alt: 'Edinburgh Castle floodlit at night above the rooftops',
      },
    ],
  },
  {
    id: 'feb-2026',
    date: 'February 2026',
    subtitle: 'HackTheEurope',
    description:
      'Went to Dublin with friends for HackTheEurope, the most insane hackathon I have seen. The amount of talented people there was unreal. Talked to companies such as Stripe and had an amazing time building a project. I also fell in love with Dublin over that short trip.',
    photos: [
      {
        src: '/now/february-1.webp',
        alt: 'The Hack Europe registration banner listing the partner companies',
      },
      {
        src: '/now/february-2.webm',
        alt: 'A short clip filmed at Hack Europe',
        video: true,
      },
      {
        src: '/now/february-3.webp',
        alt: 'The Trinity College Dublin playing fields at dusk, gulls on the grass',
      },
    ],
  },
  {
    id: 'nov-2025',
    date: 'November 2025',
    subtitle: 'HackTheBurgh',
    description:
      'After months of preparation, we finally ran HackTheBurgh. Besides being the main tech lead, I was also a judge for the CompSoc track with the Bending Spoons team.',
    photos: [
      {
        src: '/now/november-1.webp',
        alt: 'A laptop on a desk showing a video call, one of the organisers holding up a HackTheBurgh poster',
      },
    ],
  },
];
