import BlogCard from "../components/BlogCard";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

import { blogs } from "../data/blogs";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Blog() {
  useDocumentTitle("Blog");

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <Reveal>
        <SectionHeading
          number="01 / Writing"
          title="Things I've written."
          description="Notes, lessons, experiments and thoughts from the things I'm learning."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {blogs.map((blog, index) => (
          <Reveal key={blog.title} className="h-full">
            <BlogCard blog={blog} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
