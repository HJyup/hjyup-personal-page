import { HomeView } from '@/components/home-view';
import { type NowEntry } from '@/components/now-feed';
import { PageShell } from '@/components/page-shell';
import { type Project, ProjectList } from '@/components/project-list';
import { WorkList } from '@/components/work-list';
import { type Writing, WritingList } from '@/components/writing-list';

const writings: Writing[] = [
  {
    title: 'Autonomous agents',
    date: '28/08/26',
    url: '/agents',
  },
  {
    title: 'About this webpage',
    date: '10/06/26',
    url: '/about',
  },
];

const work = [
  {
    company: 'Wise',
    role: 'Software Engineer Intern',
    team: 'Platform Team',
    date: 'Summer 2026',
    icon: '/wise-icon.svg',
    url: 'https://wise.com',
  },
  {
    company: 'Solidgate',
    role: 'Software Engineer',
    team: 'Finance Engineering Team',
    date: '2023 – 2026',
    icon: '/solidgate-icon.svg',
    url: 'https://solidgate.com',
  },
];

const projects: Project[] = [
  {
    name: 'Patchdock',
    video: '/videos/patchdock.webm',
    preview: '/now/placeholder-1.svg',
    description:
      'Concurrent, containerised coding-agent pipelines with built-in audit trails',
    topic: 'Agent infrastructure',
    icon: '/patchdock_logo.svg',
    iconId: 'patchdock_logo',
    url: '/agents',
  },

  {
    name: 'HackTheBurgh',
    preview: '/images/htb.png',
    description:
      'Hackathon platform handling applications and events for 1,200+ students',
    topic: 'Web platform',
    icon: '/hacktheburgh-logo.svg',
    iconId: 'hacktheburgh_logo',
    url: 'https://hacktheburgh.com',
  },
  {
    name: 'Project Share',
    video: '/videos/project-share.webm',
    preview: '/now/placeholder-2.svg',
    description: 'Stage for students to highlight their engineering projects',
    topic: 'Student Society',
    icon: '/compsoc-logo.svg',
    iconId: 'project_share_logo',
    url: 'https://projectshare.comp-soc.com/',
  },
];

/**
 * Newest first. Placeholder moments and pictures, to be swapped for real ones:
 * each entry is a date, a line under it, a paragraph, and any photos.
 */
const now: NowEntry[] = [
  {
    id: 'aug-2026',
    date: 'August 2026',
    subtitle: 'Wrapping up the summer at Wise',
    description:
      'Last weeks on the Platform team. Shipped the infrastructure I had been circling all summer and learned more about running things at scale than any course taught me.',
  },
  {
    id: 'jul-2026',
    date: 'July 2026',
    subtitle: 'Google Hackathon 2026',
    description:
      'At the Google King\u2019s Cross office, building an agent that helps people reach the authorities in an emergency. Also caught up with friends around London and saw a few new offices, the Apple one being the highlight.',
    photos: [
      {
        src: '/now/july-1.jpg',
        alt: 'A vinyl cutter part-way through a sheet of Android robot stickers',
      },
      {
        src: '/now/july-2.jpg',
        alt: 'The Google King\u2019s Cross facade at night, its windows filled with pixel art made from sticky notes',
      },
      {
        src: '/now/july-3.jpg',
        alt: 'A life-size Android mascot covered in moss and flowers, standing in an office lobby',
      },
    ],
  },
  {
    id: 'jun-2026',
    date: 'June 2026',
    subtitle: 'Rally project x Internship at Wise',
    description:
      'Moving to London for my internship at Wise. I have only worked on web in product teams, so Developer Experience should be a good place to learn something different. Also finishing my mobile app for tennis lovers :)',
    photos: [
      {
        src: '/now/june-1.jpg',
        alt: 'The City of London skyline at golden hour, towers and cranes catching the light',
      },
      {
        src: '/now/june-2.jpg',
        alt: 'The Rally app running in an Xcode preview, showing a map of the UK and a live location panel',
      },
    ],
  },
  {
    id: 'apr-2026',
    date: 'April 2026',
    subtitle: 'Revision and Edinburgh',
    description:
      'Past papers, and prep for the summer internship. This is the month Edinburgh grew on me. I used to escape to London whenever I could, but with so much on, it matters more to have somewhere you can stop for a second. Edinburgh turns out to be very good at that.',
    photos: [
      {
        src: '/now/april-1.jpg',
        alt: 'A domed hall in Edinburgh, painted figures and stained glass above the tiered galleries',
      },
      {
        src: '/now/april-2.jpg',
        alt: 'The Meadows at sunset, cherry blossom along the paths and a church spire on the skyline',
      },
      {
        src: '/now/april-3.jpg',
        alt: 'Edinburgh Castle floodlit at night above the rooftops',
      },
    ],
  },
  {
    id: 'feb-2026',
    date: 'February 2026',
    subtitle: 'HackTheEurope',
    description:
      'Went to Dublin with friends for HackTheEurope, the most insane hackathon I have seen. Good to talk with the Stripe team and meet other ambitious people. Not gonna lie, I fell in love with Dublin over that short trip.',
    photos: [
      {
        src: '/now/february-1.jpg',
        alt: 'The Hack Europe registration banner listing the partner companies',
      },
      {
        src: '/now/february-2.mp4',
        alt: 'A short clip filmed at Hack Europe',
        video: true,
      },
      {
        src: '/now/february-3.jpg',
        alt: 'The Trinity College Dublin playing fields at dusk, gulls on the grass',
      },
    ],
  },
  {
    id: 'nov-2025',
    date: 'November 2025',
    subtitle: 'HackTheBurgh',
    description:
      'After months of preparation, we finally ran HackTheBurgh. Judging the CompSoc track with Bending Spoons put a good amount of hackathon work in front of me.',
    photos: [
      {
        src: '/now/november-1.jpg',
        alt: 'A laptop on a desk showing a video call, one of the organisers holding up a HackTheBurgh poster',
      },
    ],
  },
];

export default function Page() {
  return (
    <PageShell>
      <header>
        <h1 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          Danyil Butov
        </h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Software Engineer
        </p>
      </header>

      <section className="mt-8 sm:mt-10" aria-label="About">
        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          <strong className="font-semibold text-neutral-800 dark:text-neutral-200">
            Passionate about building web applications that people genuinely
            enjoy using.
          </strong>{' '}
          Lately, I've been diving deeper into distributed systems and
          infrastructure while continuing to build and experiment with web
          technologies.
        </p>
      </section>

      <HomeView entries={now}>
        <section className="mt-12 sm:mt-16" aria-labelledby="work-title">
          <h2
            id="work-title"
            className="text-sm font-semibold text-neutral-900 dark:text-neutral-100"
          >
            Work{' '}
            <span className="font-normal text-neutral-500 dark:text-neutral-500">
              ({work.length})
            </span>
          </h2>
          <WorkList items={work} />
        </section>

        <section className="mt-16 sm:mt-20" aria-labelledby="projects-title">
          <h2
            id="projects-title"
            className="text-sm font-semibold text-neutral-900 dark:text-neutral-100"
          >
            Projects{' '}
            <span className="font-normal text-neutral-500 dark:text-neutral-500">
              ({projects.length})
            </span>
          </h2>
          <ProjectList items={projects} />
        </section>

        <section className="mt-16 sm:mt-20" aria-labelledby="writing-title">
          <h2
            id="writing-title"
            className="text-sm font-semibold text-neutral-900 dark:text-neutral-100"
          >
            Writing{' '}
            <span className="font-normal text-neutral-500 dark:text-neutral-500">
              ({writings.length})
            </span>
          </h2>
          <WritingList items={writings} />
        </section>
      </HomeView>
    </PageShell>
  );
}
