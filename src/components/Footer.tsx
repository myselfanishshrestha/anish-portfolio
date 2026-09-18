const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:myselfshresthaanish@gmail.com" },
  { label: "Resume", href: "/resume.pdf" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-6 py-12 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl leading-none text-foreground">
              Anish Shrestha
            </p>
            <p className="label-mono mt-3 text-muted-foreground">
              Software Engineer &middot; Kathmandu, Nepal
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="label-mono border-b border-border pb-0.5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="label-mono mt-10 border-t border-border pt-6 text-muted-foreground">
          &copy; {currentYear} Anish Shrestha 
        </p>
      </div>
    </footer>
  );
}
