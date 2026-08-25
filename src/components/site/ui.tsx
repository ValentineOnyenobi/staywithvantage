import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scroll";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 px-5 py-20 sm:px-8 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function ScrollButton({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => scrollToId(to)}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm tracking-wide transition-colors duration-300",
        variant === "solid" && "bg-primary text-primary-foreground hover:bg-ink",
        variant === "outline" &&
          "border border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
        variant === "light" && "border border-white/50 text-white hover:bg-white hover:text-primary",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function ExploreLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => scrollToId(to)}
      className="group inline-flex items-center gap-2 text-sm tracking-wide text-primary"
    >
      <span className="border-b border-primary/30 pb-1 transition-colors group-hover:border-primary">
        {children}
      </span>
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}

export function TagRow({ tags }: { tags: string[] }) {
  return (
    <p className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
      {tags.join(" · ")}
    </p>
  );
}
