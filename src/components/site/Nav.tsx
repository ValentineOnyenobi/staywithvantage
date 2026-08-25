import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scroll";
import { navLinks } from "@/content/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-gradient-to-b from-black/40 to-transparent",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => go("home")}
          className={cn(
            "min-w-0 truncate text-left font-[family-name:var(--font-display)] text-base tracking-tight sm:text-lg",
            scrolled || open ? "text-foreground" : "text-white",
          )}
        >
          StayWithVantage
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className={cn(
                "text-sm transition-opacity hover:opacity-60",
                scrolled ? "text-foreground" : "text-white/90",
              )}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go("enquiry")}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm tracking-wide transition-colors",
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-ink"
                : "bg-white text-primary hover:bg-white/90",
            )}
          >
            Get Started
          </button>
        </nav>

        <div className="flex shrink-0 items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => go("enquiry")}
            className={cn(
              "rounded-full px-4 py-2 text-xs tracking-wide transition-colors",
              scrolled || open
                ? "bg-primary text-primary-foreground"
                : "bg-white text-primary",
            )}
          >
            Get Started
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn("p-1", scrolled || open ? "text-foreground" : "text-white")}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-8 pt-4 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="block w-full border-b border-border/60 py-4 text-left font-[family-name:var(--font-display)] text-lg"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
