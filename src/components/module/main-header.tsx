import { Avatar, AvatarFallback, AvatarImage } from '../ui';

const MainHeader = () => {
  return (
    <div className="flex flex-col items-center md:items-start gap-4 pl-2">
      <div className="flex items-center gap-4 pl-2">
        <Avatar className="h-10 w-10 md:h-11 md:w-11">
          <AvatarImage src="https://github.com/hjYup.png" />
          <AvatarFallback>DB</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-bold text-2xl">Danyil Butov</div>
          <div className="text-sm md:text-base">Software Engineer</div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground mt-2 md:text-sm text-center md:text-left">
        Software developer focused on web technologies and distributed systems.
        Currently pursuing CS & AI at Edinburgh, building scalable applications
        and exploring new technologies.
      </div>
    </div>
  );
};

export { MainHeader };
