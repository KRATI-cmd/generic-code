import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "mb-3 inline-block text-sm font-bold uppercase tracking-wide",
            light ? "text-accent-400" : "text-accent-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl font-extrabold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-brand-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-lg leading-relaxed",
            light ? "text-brand-100" : "text-ink-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
