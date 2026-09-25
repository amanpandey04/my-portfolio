import { site } from "../../data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "../Icons";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-base-content/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-hand text-3xl text-heading">&lt;ap&gt;</p>

          <p className="mt-1 text-sm text-body/55">
            Built with React, and a suspicious amount of over-engineering.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="lg:tooltip" data-tip="Mail">
            <a
              href={`mailto:${site.email}`}
              className="btn btn-ghost btn-circle text-heading hover:bg-base-300"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>

          <div className="lg:tooltip" data-tip="Github">
            <a
              href={site.socials[0].href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle text-heading hover:bg-base-300"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </div>

          <div className="lg:tooltip" data-tip="LinkedIn">
            <a
              href={site.socials[1].href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle text-heading hover:bg-base-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
