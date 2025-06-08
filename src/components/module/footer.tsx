const Footer = () => (
  <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 md:gap-0 mb-10 px-4">
    <p className="text-sm md:text-xs text-muted-foreground font-bold">
      Edinburgh, UK
    </p>
    <a
      href="mailto:danyil.butov.tech@gmail.com"
      className="text-sm md:text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer text-center"
    >
      danyil.butov.tech@gmail.com
    </a>
    <a
      href="https://www.linkedin.com/in/danyil-butov"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm md:text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer"
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/HJyup"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm md:text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer"
    >
      GitHub
    </a>
    <a
      href="/how-i-built-this"
      className="text-sm md:text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer"
    >
      How i built this site
    </a>
  </div>
);

export default Footer;
