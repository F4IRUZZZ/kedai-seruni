import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  children: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  children,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <h2 className="mb-4 text-4xl font-bold text-white">{children}</h2>
      {description && (
        <p
          className={cn(
            "mb-10 max-w-xl font-light text-white/70",
            align === "center" ? "mx-auto text-center" : "text-left",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
