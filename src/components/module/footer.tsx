const Footer = () => (
  <div className="w-1/2 flex justify-around mb-10">
    <p className="text-xs text-muted-foreground font-bold">Edinburgh, UK</p>
    <a
      href="mailto:danyil.butov.tech@gmail.com"
      className="text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer"
    >
      danyil.butov.tech@gmail.com
    </a>
    <a
      href="https://www.linkedin.com/in/danyil-butov"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer"
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/HJyup"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer"
    >
      GitHub
    </a>
    <a
      href="/how-i-built-this"
      className="text-xs text-muted-foreground font-bold hover:text-white hover:cursor-pointer"
    >
      How i built this site
    </a>
  </div>
);

export default Footer;
