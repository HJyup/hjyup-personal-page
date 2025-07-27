export function Footer() {
  return (
    <footer className="mt-20 mb-16 w-full flex flex-col items-center">
      <div className="flex flex-col lg:flex-row justify-between px-2 w-full">
        <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 text-sm">
          <a
            href="https://github.com/HJyup"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/danyil-butov/"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/HJyup"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Twitter
          </a>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
          © 2025 Danyil Butov
        </p>
      </div>
    </footer>
  );
}
