export default function SectionHeading({ number, title, description }) {
  return (
    <div className="max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <p className="text-base font-semibold uppercase tracking-[0.14em] text-accent sm:text-lg">
          {number}
        </p>

        <span className="h-px w-10 bg-accent/60 sm:w-14" aria-hidden="true" />
      </div>

      <h2 className="font-display text-xl font-semibold tracking-tight text-heading sm:text-2xl">
        {title}
      </h2>

      {description && <p className="mt-4 leading-7 text-body/80">{description}</p>}
    </div>
  );
}
