import { Link, useParams } from "react-router-dom";
import { ArrowUpRightIcon, ExternalLinkIcon } from "../components/Icons";
import Reveal from "../components/ui/Reveal";
import { projects } from "../data/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  // The hook always runs, regardless of whether the project exists.
  useDocumentTitle(project ? project.title : "Project not found");

  if (!project) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
        <h1 className="text-5xl font-semibold text-heading">Project not found.</h1>

        <p className="mt-4 text-body/70">Looks like this project wandered off somewhere.</p>

        <Link to="/projects" className="btn btn-primary mt-8">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:py-24">
      <Reveal>
        <Link to="/projects" className="text-sm font-medium text-accent hover:underline">
          ← Back to work
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {project.category}
        </p>

        <h1 className="font-display mt-3 text-5xl font-semibold tracking-tight text-heading sm:text-6xl">
          {project.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-body/55">
          <span>{project.year}</span>

          <span>•</span>

          <span>{project.technologies.join(" • ")}</span>
        </div>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-body/75">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary gap-2"
            >
              Live demo
              <ExternalLinkIcon className="size-4" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="btn btn-primary cursor-not-allowed gap-2 opacity-40"
              title="Add the live demo URL in projects.js"
            >
              Live demo
              <ExternalLinkIcon className="size-4" />
            </button>
          )}

          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline gap-2 border-base-content/20 text-heading"
            >
              Source
              <ExternalLinkIcon className="size-4" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="btn btn-outline cursor-not-allowed gap-2 border-base-content/20 text-heading opacity-40"
              title="Add the GitHub URL in projects.js"
            >
              Source
              <ExternalLinkIcon className="size-4" />
            </button>
          )}
        </div>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.35fr]">
        <div className="space-y-14">
          <Reveal>
            <section>
              <p className="font-display inline-block border-b-2 border-accent/60 pb-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Overview
              </p>

              <p className="font-body mt-4 leading-8 text-body/80">{project.details.overview}</p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <p className="font-display inline-block border-b-2 border-accent/60 pb-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                The challenge
              </p>

              <p className="font-body mt-4 leading-8 text-body/80">{project.details.challenge}</p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <p className="font-display inline-block border-b-2 border-accent/60 pb-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                My approach
              </p>

              <p className="font-body mt-4 leading-8 text-body/80">{project.details.approach}</p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <p className="font-display inline-block border-b-2 border-accent/60 pb-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                What I learned
              </p>

              <p className="font-body mt-4 leading-8 text-body/80">{project.details.learning}</p>
            </section>
          </Reveal>
        </div>

        <aside>
          <div className="sticky top-28 rounded-3xl border border-base-content/10 bg-base-100/70 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Tech stack
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-base-content/10 bg-base-200 px-3 py-2 text-xs font-medium text-heading"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-16 border-t border-base-content/10 pt-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-semibold text-accent transition-transform hover:translate-x-1"
        >
          See more projects
          <ArrowUpRightIcon className="size-4" />
        </Link>
      </div>
    </article>
  );
}
