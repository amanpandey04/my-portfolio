import { Link } from "react-router-dom";

import { ArrowUpRightIcon, ExternalLinkIcon } from "./Icons";

export default function ProjectCard({ project, index }) {
  return (
    <article className="flex h-full min-h-85 flex-col rounded-4xl border border-base-content/10 bg-base-200/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
      {/* Project meta */}
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-semibold tracking-[0.12em] text-accent">
          {String(index + 1).padStart(2, "0")}
        </p>

        <p className="hidden text-sm text-body/50 md:block">{project.year}</p>
      </div>

      {/* Project title */}
      <div className="mt-7">
        <div className="flex items-start justify-between gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="group/title inline-flex items-center gap-2"
          >
            <h3 className="font-display text-xl font-semibold tracking-tight text-heading">
              {project.title}
            </h3>

            <ArrowUpRightIcon className="size-5 shrink-0 text-accent opacity-0 transition-all duration-200 group-hover/title:translate-x-0.5 group-hover/title:opacity-100" />
          </Link>

          <p className="hidden shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-body/45 md:block">
            {project.category}
          </p>
        </div>

        <p className="font-body mt-4 leading-7 text-body/75">{project.description}</p>
      </div>

      {/* Technology tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-base-content/10 bg-base-200 px-3 py-1.5 text-xs font-medium text-heading/80"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {project.links.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm gap-2"
          >
            Live demo
            <ExternalLinkIcon className="size-4" />
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="btn btn-primary btn-sm cursor-not-allowed gap-2 opacity-40"
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
            className="btn btn-ghost btn-sm gap-2 text-heading"
          >
            Source
            <ExternalLinkIcon className="size-4" />
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="btn btn-ghost btn-sm cursor-not-allowed gap-2 text-heading opacity-40"
            title="Add the GitHub URL in projects.js"
          >
            Source
            <ExternalLinkIcon className="size-4" />
          </button>
        )}

        <Link to={`/projects/${project.slug}`} className="btn btn-ghost btn-sm gap-2 text-heading">
          Details
          <ArrowUpRightIcon className="size-4" />
        </Link>
      </div>
    </article>
  );
}
