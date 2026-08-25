import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
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

const buttonBase =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm tracking-wide transition-colors duration-300";

function variantClass(variant: "solid" | "outline" | "light") {
  return cn(
    variant === "solid" && "bg-primary text-primary-foreground hover:bg-ink",
    variant === "outline" &&
      "border border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
    variant === "light" && "border border-white/50 text-white hover:bg-white hover:text-primary",
  );
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
      className={cn(buttonBase, variantClass(variant), className)}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  to,
  hash,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  hash?: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <Link
      {...({ to, ...(hash ? { hash } : {}) } as { to: string })}
      className={cn(buttonBase, variantClass(variant), className)}
    >
      {children}
    </Link>
  );
}

export function ExploreLink({
  to,
  hash,
  children,
}: {
  to: string;
  hash?: string;
  children: ReactNode;
}) {
  return (
    <Link
      {...({ to, ...(hash ? { hash } : {}) } as { to: string })}
      className="group inline-flex items-center gap-2 text-sm tracking-wide text-primary"
    >
      <span className="border-b border-primary/30 pb-1 transition-colors group-hover:border-primary">
        {children}
      </span>
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}


export function TagRow({ tags }: { tags: string[] }) {
  return (
    <p className="text-xs tracking-[0.16em] uppercase text-muted-foreground">{tags.join(" · ")}</p>
  );
}
