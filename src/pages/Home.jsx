import { Link } from "react-router-dom";

import BlogCard from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";
import {
  ArrowUpRightIcon,
  CurlyArrow,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "../components/Icons";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

import { blogs } from "../data/blogs";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { stack } from "../data/stack";

import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Home");

  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <>
      <section className="relative mx-auto flex max-w-6xl items-center px-4 pt-12 pb-8 sm:px-6 lg:pb-10 lg:pt-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="order-2 lg:order-1">
            <p className="font-hand font-bold text-3xl text-accent sm:text-4xl">hey, I'm Aman</p>

            <h1 className="font-display mt-4 max-w-4xl text-2xl font-semibold leading-none tracking-[-0.03em] text-heading sm:text-3xl lg:text-4xl">
              I build <span className="text-accent">interfaces</span> that just make sense.
            </h1>

            <p className="font-body mt-7 max-w-2xl text-base leading-8 text-body/75 sm:text-lg">
              Web developer focused on React, JavaScript and thoughtful UI. I like turning ideas
              into interfaces that feel simple, useful and a little bit fun.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn btn-primary gap-2 px-5">
                View my work
                <ArrowUpRightIcon className="size-4" />
              </Link>
              <div className="lg:tooltip" data-tip="Github">
                <a
                  href={site.socials[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-square border-0 bg-secondary/15 text-heading transition-colors hover:bg-secondary/30 hover:text-accent"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <GithubIcon className="size-5" />
                </a>
              </div>

              <div className="lg:tooltip" data-tip="LinkedIn">
                <a
                  href={site.socials[1].href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-square border-0 bg-secondary/15 text-heading transition-colors hover:bg-secondary/30 hover:text-accent"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="size-5" />
                </a>
              </div>

              <div className="lg:tooltip" data-tip="Mail">
                <a
                  href={`mailto:${site.email}`}
                  className="btn btn-square border-0 bg-secondary/15 text-heading transition-colors hover:bg-secondary/30 hover:text-accent"
                  aria-label="Email"
                  title="Email"
                >
                  <MailIcon className="size-5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Handwritten avatar annotation */}
              <div className="avatar-annotation pointer-events-none absolute z-10 text-accent">
                <div className="relative">
                  {/* Text */}
                  <p
                    className="absolute left-0 top-0 whitespace-nowrap font-hand font-base leading-none"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    that's totally me
                  </p>

                  {/* Curly arrow */}
                  <div
                    className="absolute"
                    style={{
                      left: "115px",
                      top: 0,
                    }}
                  >
                    <CurlyArrow
                      style={{
                        width: "80px",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Avatar */}
              <div className="rounded-[3rem] border border-base-content/10 bg-base-100/70 p-4 shadow-xl backdrop-blur">
                <div className="rounded-[2.5rem] border border-secondary/40 bg-secondary/15 p-5">
                  <img
                    src="/assets/avatar.svg"
                    alt="Illustration of Aman"
                    className="w-64 max-w-full sm:w-72"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="section-anchor mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <Reveal>
          <SectionHeading
            number="01 / Selected work"
            title="Some things I've built."
            description="A mix of practical interfaces, experiments and projects where I got to solve a problem rather than just write code for the sake of writing code."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} className="h-full">
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-semibold text-accent transition-transform hover:translate-x-1"
          >
            See all projects
            <ArrowUpRightIcon className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <Reveal>
          <SectionHeading
            number="02 / What I use"
            title="Tools I like working with."
            description="The technologies I currently use to build and learn."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-3">
            {stack.map((technology) => (
              <span
                key={technology}
                className="rounded-2xl border border-secondary/30 bg-secondary/10 px-5 py-3 text-sm font-medium text-heading"
              >
                {technology}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <Reveal>
          <SectionHeading
            number="03 / Writing"
            title="Things I've written."
            description="I like documenting what I'm learning, partly because teaching yourself something twice is surprisingly effective."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <Reveal key={blog.title} className="h-full">
              <BlogCard blog={blog} index={index} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-semibold text-accent transition-transform hover:translate-x-1"
          >
            Browse blogs
            <ArrowUpRightIcon className="size-4" />
          </Link>
        </div>
      </section>

      <section id="about" className="section-anchor mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <Reveal>
          <SectionHeading number="04 / About" title="A little more about me." />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="h-full">
            <div className="h-full rounded-4xl border border-base-content/10 bg-base-200/70 p-7 shadow-sm sm:p-9">
              <p className="font-body leading-8 text-body/80">
                I'm a frontend developer who enjoys building interfaces, learning by experimenting
                and figuring out why things break when they inevitably do.
              </p>

              <p className="font-body mt-5 leading-8 text-body/80">
                I care about the details that make a website feel good to use, while still keeping
                the code understandable and maintainable.
              </p>

              <p className="font-body mt-5 leading-8 text-body/80">
                This portfolio is one of those projects. It's not just a place to dump links, it's
                also a place to show how I approach building things.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-4xl border border-secondary/40 bg-base-100/70 p-7 shadow-sm sm:p-9">
              <h3 className="mt-0 font-hand text-2xl leading-none text-heading sm:text-3xl">
                when I'm not coding...
              </h3>

              <div className="font-body mt-7 space-y-5 leading-8 text-body/80">
                <p>
                  In my free time, I like to overthink things that absolutely did not need
                  overthinking, mess around with random tech, write, workout, and make up elaborate
                  scenarios in my head.
                </p>
                <p>
                  I'm also a big fan of anime, video games, and basically anything involving
                  perception, visuals, or weird little details my brain suddenly decides are
                  extremely important.
                </p>
                <p>
                  I'm also learning how to play guitar. And a new language. Very slowly. Mostly in
                  my head, actually. I like making up scenarios. Remember?
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="contact"
        className="section-anchor mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:pb-20 lg:pt-16"
      >
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-base-content/10 bg-secondary/15 p-8 sm:p-12 lg:p-16">
            <div className="relative max-w-2xl">
              <p className="mb-4 text-base font-semibold uppercase tracking-[0.14em] text-accent sm:text-lg">
                Let's talk
              </p>

              <h2 className="font-display mt-3 text-xl font-semibold tracking-tight text-heading sm:text-2xl">
                Have something interesting in mind?
              </h2>

              <p className="font-body mt-5 text-lg leading-8 text-body/75">
                Whether it's a project, an opportunity, or just a good conversation about building
                things for the web.
              </p>

              <a href={`mailto:${site.email}`} className="btn btn-primary mt-8 gap-2 px-6">
                Email me
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
