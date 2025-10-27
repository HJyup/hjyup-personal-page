import LinkBlock from '@/components/module/link-block';
import type { WidgetId } from '@/types/widgets';

interface ExperienceItem {
  id: WidgetId;
  title: string;
  company: string;
  period: string;
  description: string;
  status: 'active' | 'inactive';
  statusColor: 'green' | 'red' | 'violet';
  href: string;
}

const MAP_STATUS_COLOR = {
  green: 'bg-green-500',
  red: 'bg-red-500',
  violet: 'bg-violet-500',
} as const;

export function ExperienceLayout({
  experiences,
  hover,
}: {
  experiences: ExperienceItem[];
  hover: (id: WidgetId) => () => void;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xs mt-10 text-muted-foreground w-full mb-4">
        Experience
      </h2>
      {experiences.map(e => (
        <div key={e.id} className="mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <div
                className={`${MAP_STATUS_COLOR[e.statusColor]} w-1.5 h-1.5 rounded-full`}
              />
              <a
                className="hover:underline"
                onMouseEnter={hover(e.id)}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkBlock className="text-xs md:text-sm">
                  {e.title} at {e.company}
                </LinkBlock>
              </a>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {e.period}
            </p>
          </div>
          <p className="text-xs md:text-sm mt-2 text-muted-foreground leading-relaxed ml-3.5">
            {e.description}
          </p>
        </div>
      ))}
    </div>
  );
}
