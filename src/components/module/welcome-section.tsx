interface WelcomeSectionProps {
  className?: string;
}

const WelcomeSection = ({ className }: WelcomeSectionProps) => {
  return (
    <div
      className={`yellow-block font-extrabold text-2xl flex flex-col justify-between leading-snug pt-10 pb-5 px-5 w-full h-full bg-yellow-400 ${className}`}
    >
      <div>
        <span className="text-black">
          Welcome to my digital portfolio.{' '}
          <span className="text-zinc-800">Explore my projects.</span>
        </span>
      </div>
      <div className="text-yellow-800 text-sm w-full ">@my_third_iteration</div>
    </div>
  );
};

export default WelcomeSection;
