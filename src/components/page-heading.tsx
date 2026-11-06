export function PageHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h1 className="font-heading text-3xl leading-tight font-bold tracking-tight md:text-[40px]">
        {title}<span className="text-accent">.</span>
      </h1>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}