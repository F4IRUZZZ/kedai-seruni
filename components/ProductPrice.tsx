import { formatRupiah } from "@/lib/format";
import { cn } from "@/lib/cn";

type ProductPriceProps = {
  price: number;
  originalPrice?: number;
  dark?: boolean;
  className?: string;
};

export default function ProductPrice({
  price,
  originalPrice,
  dark = false,
  className,
}: ProductPriceProps) {
  return (
    <p className={cn("font-bold", dark ? "text-ink" : "text-white", className)}>
      {formatRupiah(price)}{" "}
      {originalPrice && (
        <span
          className={cn(
            "ml-1 text-sm font-light line-through",
            dark ? "text-ink/50" : "text-white/50",
          )}
        >
          {formatRupiah(originalPrice)}
        </span>
      )}
    </p>
  );
}
