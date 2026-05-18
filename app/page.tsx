export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      <div className="mb-10 max-w-xl text-left w-full">
        <h1 className="text-base font-medium">Danyil Butov</h1>
        <div className="text-neutral-500">Software Enginner</div>
      </div>
      <div className="max-w-xl mb-24">
        <div>
          Building polished web applications and developer tools. Currenty
          student at the University of Edinburgh and interning at Wise.
        </div>
        <div className="mt-5">
          Previously, working with financial system at Solidgate creating tools
          for a finance team. Led Scotland's largest hackathon as Team lead.
        </div>
      </div>
      <div className="max-w-xl w-full">
        <div className="text-xs text-neutral-500 tracking-wider mb-4">NOW</div>
        <div className="flex items-baseline">
          <span>Wise</span>
          <span className="text-neutral-500 ml-2 text-sm">
            Building developer tools
          </span>
          <span className="ml-auto text-neutral-400">26</span>
        </div>
        <div className="flex items-baseline">
          <span>Project share</span>
          <span className="text-neutral-500 ml-2 text-sm">
            Society for sharing project in university community
          </span>
          <span className="ml-auto text-neutral-400">25-</span>
        </div>

        <div className="text-xs text-neutral-500 tracking-wider mt-10 mb-4">
          PAST WORK
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline">
            <span>Solidgate</span>
            <span className="text-neutral-500 ml-2 text-sm">
              Working on web interfaces helping finance team
            </span>
            <span className="ml-auto text-neutral-400">23</span>
          </div>
          <div className="flex items-baseline">
            <span>HackTheBurgh</span>
            <span className="text-neutral-500 ml-2 text-sm">
              Building hackathon web project for 2500 applicants
            </span>
            <span className="ml-auto text-neutral-400">22</span>
          </div>
          <div className="flex items-baseline">
            <span>Comp-soc</span>
            <span className="text-neutral-500 ml-2 text-sm">
              Building event managment system for 1500 students
            </span>
            <span className="ml-auto text-neutral-400">26</span>
          </div>
        </div>
      </div>
    </main>
  );
}
