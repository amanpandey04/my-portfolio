export default function SectionHeading({ number, title, description, as = "h2" }) {
  const Heading = as;
  return (
    <div className="max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <p className="text-base font-bold uppercase tracking-[0.14em] text-accent sm:text-lg">
          {number}
        </p>

        <span className="h-px w-10 bg-accent/60 sm:w-14" aria-hidden="true" />
      </div>

      <Heading className="font-display text-xl font-semibold tracking-tight text-heading sm:text-2xl">
        {title}
      </Heading>

      {description && <p className="font-body mt-4 leading-7 text-body/80">{description}</p>}
    </div>
  );
}
