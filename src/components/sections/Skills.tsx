const skillCategories = [
  {
    number: "01",
    title: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C#",
      "HTML",
      "CSS",
      "XML",
      "SQL",
    ],
  },
  {
    number: "02",
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Node.js",
      "Nest.js",
      "Express.js",
      "Tailwind CSS",
      "Pandas",
      "NumPy",
    ],
  },
  {
    number: "03",
    title: "Databases",
    skills: [
      "MySQL",
      "MongoDB",
      "Redis",
      "Qdrant",
      "PostgreSQL",
      "Oracle SQL",
      "MS SQL Server",
    ],
  },
  {
    number: "04",
    title: "Tools & Infrastructure",
    skills: [
      "REST APIs",
      "WebSockets (Socket.IO)",
      "Webhooks",
      "JWT",
      "OAuth",
      "RBAC",
      "AWS (EC2, S3, Lambda, SQS)",
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    number: "05",
    title: "AI & Machine Learning",
    skills: [
      "OpenAI API",
      "Anthropic API",
      "RAG Pipelines",
      "Multi-Step AI Agents",
      "Python ML",
    ],
  },
  {
    number: "06",
    title: "Ways of Working",
    skills: [
      "Problem-solving",
      "Adaptability",
      "Teamwork",
      "Communication",
      "Critical thinking",
      "Leadership",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/40 px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-baseline justify-between border-t border-border pt-4">
          <span className="label-mono text-primary">02 &mdash; Toolkit</span>
          <span className="label-mono text-muted-foreground">
            Six disciplines
          </span>
        </header>

        <h2 className="font-display mt-8 max-w-3xl text-4xl leading-tight text-foreground sm:text-5xl text-balance">
          The stack I reach for.
        </h2>

        <div className="mt-14 grid md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className={`border-t border-border py-8 md:pr-10 lg:pr-14 ${
                i % 2 === 1 ? "md:border-l md:pl-10 lg:pl-14" : ""
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[0.6875rem] text-primary">
                  {category.number}
                </span>
                <h3 className="text-xl text-foreground">{category.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 md:pl-9">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-border/80 pb-0.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
