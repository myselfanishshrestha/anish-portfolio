import { ArrowDownRight, Github, Linkedin, Mail, Phone } from "lucide-react";

import profileImg from "@/assets/profile.jpeg";

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/myselfanishshrestha/", icon: Linkedin },
  { label: "Email", href: "mailto:myselfshresthaanish@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+9779860989161", icon: Phone },
];

const facts = [
  { value: "4+", label: "Years shipping" },
  { value: "Kathmandu", label: "Based in Nepal" },
  { value: "Full-stack", label: "Web & AI systems" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="paper-grain relative bg-background px-6 pt-28 pb-16 md:px-12 md:pt-36 md:pb-20 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <div className="flex items-baseline justify-between border-b border-border pb-4">
          <span className="label-mono text-muted-foreground">
            Portfolio 
          </span>
          <span className="label-mono text-muted-foreground">
            Software Engineer
          </span>
        </div>

        <div className="grid gap-12 pt-10 md:grid-cols-12 lg:gap-16">
          <div className="md:col-span-7">
            <h1 className="font-display text-[3.25rem] leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]">
              Anish
              <br />
              Shrestha
              <span className="text-primary">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I’m a mid-level software engineer who builds real-world web applications using React, Next.js,
               TypeScript, Node.js, and Nest.js. Alongside building reliable products, I work on integrating AI into applications through retrieval pipelines, multi-step agent workflows, and practical guardrails that keep AI systems useful and dependable.

            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="label-mono group inline-flex items-center gap-2 bg-foreground px-6 py-3.5 text-background transition-colors hover:bg-primary"
              >
                View selected work
                <ArrowDownRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="label-mono border-b border-foreground pb-1 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Hire me
              </a>
              <a
                href="/resume.pdf"
                download="Anish-Shrestha-Resume.pdf"
                className="label-mono border-b border-border pb-1 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <figure className="group relative">
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-muted/20 shadow-xl shadow-foreground/5 transition-all duration-500 hover:border-border hover:shadow-2xl hover:shadow-primary/5">
                <img
                  src={profileImg}
                  alt="Anish Shrestha, software engineer"
                  width={520}
                  height={620}
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Status Badge */}
                <div className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/90 px-3 py-1 shadow-md backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="label-mono font-medium text-foreground">Available for roles</span>
                </div>
              </div>
            </figure>

            <div className="mt-4 flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    aria-label={social.label}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-1 border-t border-border sm:grid-cols-3 lg:mt-20">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-border px-0 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <dt className="label-mono text-muted-foreground">{fact.label}</dt>
              <dd className="font-display mt-2 text-3xl text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
