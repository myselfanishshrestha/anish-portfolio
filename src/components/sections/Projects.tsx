import projectOneImg from "@/assets/project-1.jpg";
import projectTwoImg from "@/assets/project-2.jpg";

const projects = [
  {
    number: "01",
    title: "Hospital Management System",
    year: "2021",
    description:
      "A mobile application for patients and doctors paired with a web admin panel for hospital operations. Final year project, documented in a 450-plus page report.",
    image: projectOneImg,
    tags: ["React Native", "Node.js", "MySQL", "Laravel"],
  },
  {
    number: "02",
    title: "Movie Recommendation AI",
    year: "2021",
    description:
      "A recommendation engine built on collaborative filtering and K-nearest neighbours, explored and tuned in Jupyter Notebook.",
    image: projectTwoImg,
    tags: ["Python", "NumPy", "Pandas", "Jupyter"],
  },
  
];

const otherProjects = [
  { title: "Good Food Restaurant", stack: "Oracle, ASP.NET, SQL", year: "2021" },
  { title: "Stock Management System", stack: "MSSQL, ASP.NET", year: "2020" },
  { title: "Medicine Management System", stack: "Java", year: "2020" },
  { title: "Car E-commerce Website Design", stack: "XML, CSS", year: "2019" },
  { title: "Hospital Database System", stack: "SQL", year: "2019" },
  { title: "Dental Clinic Database & UI Design", stack: "Java", year: "2019" },
  { title: "Developer Assignment System", stack: "Java", year: "2018" },
  { title: "Library Management System", stack: "Python", year: "2018" },
];

export function Projects() {
  return (
    <section id="projects" className="bg-background px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-baseline justify-between border-t border-border pt-4">
          <span className="label-mono text-primary">03 &mdash; Selected work</span>
          <span className="label-mono text-muted-foreground">
            Projects & reports
          </span>
        </header>

        <h2 className="font-display mt-8 max-w-3xl text-4xl leading-tight text-foreground sm:text-5xl text-balance">
          Things I have built, in order of how much I learned.
        </h2>

        <div className="mt-16 space-y-0">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group grid gap-8 border-t border-border py-12 md:grid-cols-12 md:gap-10 lg:gap-14"
            >
              <div
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  width={1024}
                  height={720}
                  loading="lazy"
                  className="aspect-[4/3] w-full border border-border object-cover grayscale-[0.4] transition-[filter,transform] duration-700 group-hover:grayscale-0"
                />
              </div>

              <div className="md:col-span-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[0.6875rem] text-primary">
                    {project.number}
                  </span>
                  <span className="label-mono text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h3 className="font-display mt-3 text-3xl leading-tight text-foreground sm:text-4xl text-balance">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="label-mono whitespace-nowrap text-muted-foreground before:mr-2 before:text-primary before:content-['/']"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-10">
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-2xl text-foreground">
              Also in the archive
            </h3>
            <span className="label-mono text-muted-foreground">2018&ndash;2021</span>
          </div>

          <ul className="mt-6">
            {otherProjects.map((project) => (
              <li
                key={project.title}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-border py-4"
              >
                <p className="text-base text-foreground">{project.title}</p>
                <p className="label-mono text-muted-foreground">
                  {project.stack} &middot; {project.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
