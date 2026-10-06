import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export default function EmptyState({
  children,
  className,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed px-8 py-10 text-center",
        tone === "dark"
          ? "border-white/15"
          : "border-ink/15",
        className,
      )}
    >
      <p
        className={cn(
          "font-light",
          tone === "dark" ? "text-white/60" : "text-ink/60",
        )}
      >
        {children}
      </p>
    </div>
  );
}
