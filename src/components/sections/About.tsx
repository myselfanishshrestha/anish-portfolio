const practices = [
  {
    number: "i",
    title: "Frontend craft",
    description:
      "React.js, Next.js, Redux, TypeScript and Tailwind CSS for interfaces that stay fast as they grow.",
  },
  {
    number: "ii",
    title: "Backend & cloud",
    description:
      "RESTful microservices in Node.js, Nest.js and Express.js, deployed on AWS with Docker and CI/CD.",
  },
  {
    number: "iii",
    title: "AI engineering",
    description:
      "Retrieval-augmented generation with Qdrant and OpenAI models, plus multi-step agents with guardrails.",
  },
  {
    number: "iv",
    title: "Working with people",
    description:
      "Scrum sprints alongside product managers, designers and cross-functional engineers.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-baseline justify-between border-t border-border pt-4">
          <span className="label-mono text-primary">01 &mdash; About</span>
          <span className="label-mono text-muted-foreground">
            Kathmandu, Nepal
          </span>
        </header>

        <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
              I build the parts of a product that have to keep working
              <span className="text-primary"> after launch.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-[1.75] text-muted-foreground">
              <p className="text-foreground/90">
                <span className="font-display float-left mt-1 mr-3 text-6xl leading-[0.75] text-primary">
                  I
                </span>
                &apos;m a Mid-Level Software Engineer at Rever Hub Pvt Ltd in
                Kathmandu. I work end to end &mdash; from React and Next.js
                interfaces down to RESTful microservices in Node.js and Nest.js
                &mdash; with four-plus years of shipping to real users.
              </p>
              <p>
                Day to day that means real-time features with Redis and
                Socket.IO, secure authentication with JWT/OAuth and role-based
                access control, payment gateway integrations with custom
                webhooks, and containerized deployments through Docker and
                GitHub Actions.
              </p>
              <p>
                I also build the AI side: retrieval-augmented generation with
                Qdrant and OpenAI models, multi-step agent and tool-calling
                pipelines, and Python regression and classification models for
                trend analysis and forecasting.
              </p>
              <p>
                Educated at Islington College / London Metropolitan University
                &mdash; BSc (Hons) Computing, Second Upper Class Honours &mdash;
                with an IELTS overall band of 7.0.
              </p>
            </div>
          </div>

          <aside className="md:col-span-5 md:border-l md:border-border md:pl-10">
            <span className="label-mono text-muted-foreground">
              How I work
            </span>
            <ul className="mt-6">
              {practices.map((item) => (
                <li key={item.title} className="border-t border-border py-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[0.6875rem] text-primary">
                      {item.number}
                    </span>
                    <h3 className="text-lg text-foreground">{item.title}</h3>
                  </div>
                  <p className="mt-2 pl-7 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
