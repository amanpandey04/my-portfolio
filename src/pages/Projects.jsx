import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

import { projects } from "../data/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Projects() {
  useDocumentTitle("Projects");

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <Reveal>
        <SectionHeading
          number="01 / Work"
          title="Projects, experiments and things I've built."
          description="A collection of work ranging from frontend interfaces to experiments that taught me something useful."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} className="h-full">
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
