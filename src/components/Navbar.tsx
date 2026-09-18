import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "About", href: "#about", index: "01" },
  { label: "Skills", href: "#skills", index: "02" },
  { label: "Work", href: "#projects", index: "03" },
  { label: "Path", href: "#experience", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleAnchorClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-12 lg:px-16">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl leading-none">
            Anish Shrestha
          </span>
          <span className="label-mono hidden text-muted-foreground sm:inline">
            Software Engineer
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick(link.href);
                }}
                className="group flex items-baseline gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="font-mono text-[0.625rem] text-primary/70">
                  {link.index}
                </span>
                <span className="border-b border-transparent pb-0.5 group-hover:border-foreground">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="/resume.pdf"
            download
            className="label-mono border-b border-border pb-0.5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleAnchorClick("#contact");
            }}
            className="label-mono bg-foreground px-4 py-2.5 text-background transition-colors hover:bg-primary"
          >
            Hire me
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="cursor-pointer p-1 text-foreground md:hidden"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 border-l border-border bg-background"
          >
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="flex h-full flex-col px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="label-mono text-muted-foreground">Index</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="cursor-pointer text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="mt-10">
                {navLinks.map((link) => (
                  <li key={link.href} className="border-t border-border">
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnchorClick(link.href);
                      }}
                      className="flex items-baseline gap-3 py-4"
                    >
                      <span className="font-mono text-[0.625rem] text-primary/70">
                        {link.index}
                      </span>
                      <span className="font-display text-2xl">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-3 border-t border-border pt-6">
                <a
                  href="/resume.pdf"
                  download
                  className="label-mono block border border-border px-4 py-3 text-center text-foreground"
                >
                  Download resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick("#contact");
                  }}
                  className="label-mono block bg-foreground px-4 py-3 text-center text-background"
                >
                  Hire me
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
