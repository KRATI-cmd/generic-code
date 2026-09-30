import type { PropsWithChildren } from "react";
import clsx from "clsx";
import { useReveal } from "../../hooks/useReveal";

interface RevealProps {
  /** Stagger delay in ms — handy for animating a list item-by-item. */
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: PropsWithChildren<RevealProps>) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
