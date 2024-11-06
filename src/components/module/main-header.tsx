import { Avatar, AvatarFallback, AvatarImage } from '../ui';

const MainHeader = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/hjYup.png" />
        <AvatarFallback>DB</AvatarFallback>
      </Avatar>
      <div>
        <div className="text-2xl font-bold">Danyil Butov</div>
        <div>Software Engineer</div>
      </div>
    </div>
  );
};

export { MainHeader };
