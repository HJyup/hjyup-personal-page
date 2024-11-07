import { Avatar, AvatarFallback, AvatarImage } from '../ui';

const MainHeader = () => {
  return (
    <>
      <div className="flex items-center gap-4 pl-2">
        <Avatar>
          <AvatarImage src="https://github.com/hjYup.png" />
          <AvatarFallback>DB</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-2xl font-bold">Danyil Butov</div>
          <div>Software Engineer</div>
        </div>
      </div>
      <div className="text-sm text-muted-foreground mt-2">
        Software developer pursuing a BSc in Artificial Intelligence and
        Computer Science at the University of Edinburgh, specializing in
        frontend development with React.js. Experienced in fintech and
        educational platforms, I am passionate about optimizing user experiences
        and creating efficient, scalable systems.
      </div>
    </>
  );
};

export { MainHeader };
