import { Link } from "react-router-dom";

import Reveal from "../components/ui/Reveal";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
      <Reveal>
        <p className="font-hand text-5xl text-accent">uh oh..</p>

        <h1 className="mt-4 text-6xl font-semibold tracking-tight text-heading">404</h1>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-body/70">
          The page you're looking for wandered off somewhere.
        </p>

        <Link to="/" className="btn btn-primary mt-8">
          Take me home
        </Link>
      </Reveal>
    </section>
  );
}
