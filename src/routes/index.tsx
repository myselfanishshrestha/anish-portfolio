import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Anish Shrestha | Software Engineer Portfolio",
      },
      {
        name: "description",
        content:
          "Portfolio of Anish Shrestha, a software engineer in Kathmandu building scalable web apps with React, Next.js, Node.js and AI features.",
      },
      {
        property: "og:title",
        content: "Anish Shrestha | Software Engineer Portfolio",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Anish Shrestha, a software engineer in Kathmandu building scalable web apps with React, Next.js, Node.js and AI features.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
