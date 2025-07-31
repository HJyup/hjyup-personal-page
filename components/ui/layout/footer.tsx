export function Footer() {
  return (
    <footer className="mt-20 mb-16 w-full flex flex-col items-center">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="flex items-center gap-4 text-muted-foreground text-sm sm:text-base">
          <a
            href="https://github.com/HJyup"
            className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/danyil-butov/"
            className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base mt-2">
          © 2025 Danyil Butov
        </p>
      </div>
    </footer>
  );
}
