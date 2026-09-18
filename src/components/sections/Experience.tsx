export function Experience() {
  return (
    <section id="experience" className="bg-secondary/40 px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-baseline justify-between border-t border-border pt-4">
          <span className="label-mono text-primary">04 &mdash; Path</span>
          <span className="label-mono text-muted-foreground">
            Experience & education
          </span>
        </header>

        <h2 className="font-display mt-8 max-w-2xl text-4xl leading-tight text-foreground sm:text-5xl">
          Where I have worked and studied.
        </h2>

        <div className="mt-14 grid gap-16 md:grid-cols-12 md:gap-10">
          {/* Professional experience */}
          <div className="md:col-span-7">
            <h3 className="label-mono text-foreground">
              Professional experience
            </h3>

            <div className="mt-8 space-y-12">
              <article className="border-t border-border pt-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                    Rever Hub Pvt Ltd
                  </h4>
                  <span className="label-mono text-muted-foreground">
                    Kathmandu, Nepal
                  </span>
                </div>

                <div className="mt-2 space-y-0.5 text-sm text-foreground/70">
                  <p>Mid-Level Software Engineer &mdash; Jul 2026 &ndash; Present</p>
                  <p>Junior Software Engineer &mdash; Jul 2022 &ndash; Jul 2026</p>
                </div>

                <ul className="mt-5 list-disc space-y-2.5 pl-4 text-base leading-relaxed text-muted-foreground marker:text-primary">
                  <li>
                    Developed scalable web applications using React.js, Redux,
                    Next.js, TypeScript, and Tailwind CSS.
                  </li>
                  <li>
                    Built and designed RESTful backend microservices with
                    Node.js, Nest.js, Express.js, MySQL, MongoDB, and AWS (EC2,
                    S3, RDS, Lambda).
                  </li>
                  <li>
                    Used Redis for caching and WebSockets (Socket.IO) to deliver
                    real-time data and messaging.
                  </li>
                  <li>
                    Containerized app environments using Docker and automated
                    deployment pipelines using GitHub Actions and CI/CD.
                  </li>
                  <li>
                    Worked with product managers, designers, and
                    cross-functional engineers in fast-paced Scrum sprints,
                    converting broad product requirements into detailed
                    technical specifications and delivering features on time.
                  </li>
                  <li>
                    Integrated and secured third-party payment gateways using
                    custom webhooks.
                  </li>
                  <li>
                    Worked on JWT/OAuth authentication and role-based access
                    control (RBAC) on backend endpoints to ensure the security
                    architecture of the system.
                  </li>
                  <li>
                    Contributed to a RAG system with Qdrant, OpenAI models, and
                    agent-based workflows.
                  </li>
                  <li>
                    Created and deployed machine learning algorithms in Python,
                    such as regression and classification models that analyze
                    historical datasets and offer predictive trend analysis and
                    forecasting for business operations.
                  </li>
                  <li>
                    Built multi-step AI agent workflows and tool-calling
                    pipelines to enable content generation automation with
                    robust AI safety guardrails like input/output validation,
                    content filtering, and rate limiting.
                  </li>
                </ul>
              </article>

              <article className="border-t border-border pt-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                    Software Engineer Intern
                  </h4>
                  <span className="label-mono text-muted-foreground">
                    Apr 2022 &ndash; Jul 2022
                  </span>
                </div>
                <p className="mt-1 text-sm text-foreground/70">
                  Rever Hub Pvt Ltd, Kathmandu
                </p>

                <ul className="mt-5 list-disc space-y-2.5 pl-4 text-base leading-relaxed text-muted-foreground marker:text-primary">
                  <li>
                    Contributed to development projects by building and
                    enhancing user interface components using React.js and
                    Tailwind CSS, while efficiently debugging and resolving
                    front-end and back-end issues.
                  </li>
                  <li>
                    Assisted in consuming and testing RESTful APIs built with
                    Node.js and Express.js to ensure smooth data flow between
                    the client and database.
                  </li>
                </ul>
              </article>
            </div>
          </div>

          {/* Education & certificates */}
          <div className="md:col-span-5 md:border-l md:border-border md:pl-10">
            <h3 className="label-mono text-foreground">
              Education & certificates
            </h3>

            <div className="mt-8 space-y-10">
              <article className="border-t border-border pt-8">
                <span className="label-mono text-primary">Degree</span>
                <h4 className="font-display mt-2 text-2xl leading-snug text-foreground sm:text-3xl">
                  BSc (Hons) Computing
                </h4>
                <p className="mt-1 text-sm text-foreground/70">
                  Islington College / London Metropolitan University
                </p>
                <p className="label-mono mt-2 text-muted-foreground">
                  2018 &ndash; 2021
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Graduated with Second Upper Class Honours. Final year project:
                  a Hospital Management System with a mobile app for patients
                  and doctors plus a web admin panel.
                </p>
              </article>

              <article className="border-t border-border pt-8">
                <span className="label-mono text-primary">Certificate</span>
                <h4 className="font-display mt-2 text-2xl leading-snug text-foreground sm:text-3xl">
                  IELTS &mdash; Overall Band 7.0 / 9.0
                </h4>
                <p className="mt-1 text-sm text-foreground/70">
                  International English Language Testing System
                </p>
                <p className="label-mono mt-2 text-muted-foreground">
                  May 2026
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Certified English proficiency across listening, reading,
                  writing and speaking.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
