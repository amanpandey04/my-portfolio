import { NavLink } from "react-router-dom";

import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `
    relative inline-block
    text-sm font-semibold uppercase tracking-[0.12em]
    transition-colors duration-200
    sm:text-sm sm:tracking-[0.14em]

    after:absolute
    after:-bottom-1
    after:left-1/2
    after:h-0.5
    after:-translate-x-1/2
    after:bg-accent
    after:transition-all
    after:duration-200

    hover:after:w-3/4

    ${isActive ? "text-accent after:w-3/4" : "text-heading/75 after:w-0"}
  `;

  return (
    <header
      className="
    fixed inset-x-0 bottom-0 z-50
    flex justify-center
    px-4 pt-3
    pb-[calc(1.6rem+env(safe-area-inset-bottom))]
    md:sticky md:top-0 md:bottom-auto
    md:px-4 md:py-3
  "
    >
      <nav
        className="
    flex w-fit items-center
    gap-4
    rounded-full
    border border-secondary/40
    bg-base-300/40
    px-4 py-2.5
    backdrop-blur-xl
    sm:gap-6 sm:px-5
    md:gap-8"
      >
        <NavLink
          to="/"
          className="relative -top-1.5 font-hand text-4xl leading-none text-heading transition-transform duration-200 hover:-rotate-4"
          aria-label="Aman home"
        >
          &lt;ap&gt;
        </NavLink>

        <div className="flex items-center gap-5 sm:gap-7 md:gap-8">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Work
          </NavLink>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
