import { Star } from "lucide-react";

export default function Stars({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex justify-center gap-0.5 text-primary" aria-label={`Rating ${value} dari ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={18}
          aria-hidden="true"
          className={i < value ? "fill-primary" : "opacity-40"}
        />
      ))}
    </div>
  );
}
