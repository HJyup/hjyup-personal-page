import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';

export default function Page() {
  return (
    <main className="flex items-center p-10">
      <div className="absolute top-0 left-0 w-full h-5 bg-sky-600 text-center text-sm text-white font-light">
        You are looking at a demo version of the website.
      </div>
      <div className="h-screen flex flex-col justify-center w-1/3">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/hjYup.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-2xl font-bold">Danyil Butov</div>
            <div>Software Engineer</div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-5 mb-5">
          Software developer studying AI and Computer Science at the University
          of Edinburgh. Skilled in frontend development with React.js, with
          experience in fintech and educational platforms. Passionate about
          optimizing user experiences, creating scalable systems, and
          contributing to open-source projects.
        </div>
        <div className="mb-5 text-lg font-bold">Education</div>
        <div className="mb-5 text-lg font-bold">Professional Experience</div>
        <div className="mb-5 text-lg font-bold">Projects</div>
      </div>
    </main>
  );
}
