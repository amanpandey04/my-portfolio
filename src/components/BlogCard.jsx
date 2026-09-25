import { ExternalLinkIcon } from "./Icons";

export default function BlogCard({ blog, index }) {
  return (
    <article className="flex h-full min-h-85 flex-col rounded-4xl border border-base-content/10 bg-base-200/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
      {/* Blog meta */}
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-semibold tracking-[0.12em] text-accent">
          {String(index + 1).padStart(2, "0")}
        </p>

        <p className="hidden text-sm text-body/50 md:block">{blog.date}</p>
      </div>

      {/* Blog title and description */}
      <div className="mt-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight text-heading">
            {blog.title}
          </h3>

          <p className="hidden shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-body/45 md:block">
            {blog.category}
          </p>
        </div>

        <p className="font-body mt-4 leading-7 text-body/75">{blog.excerpt}</p>
      </div>

      {/* Read article button */}
      <div className="mt-auto pt-8">
        <a
          href={blog.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm gap-2"
        >
          Read article
          <ExternalLinkIcon className="size-4" />
        </a>
      </div>
    </article>
  );
}
