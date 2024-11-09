import { Avatar, AvatarFallback, AvatarImage } from '../ui';

const MainHeader = () => {
  return (
    <>
      <div className="flex items-center gap-4 pl-2">
        <Avatar className="h-10 w-10 md:h-12 md:w-12">
          <AvatarImage src="https://github.com/hjYup.png" />
          <AvatarFallback>DB</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-lg font-bold md:text-2xl">Danyil Butov</div>
          <div className="text-sm md:text-base">Software Engineer</div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground mt-2 md:text-sm">
        AI and CS student at the University of Edinburgh, specializing in
        frontend development with React.js. Experienced in fintech and
        educational platforms.
      </div>
    </>
  );
};

export { MainHeader };
