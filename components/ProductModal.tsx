"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, Star, X } from "lucide-react";
import { formatRupiah } from "@/data/menu";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cart";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { addItem, openCart } = useCart();

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  if (!product) return null;

  const buy = () => {
    addItem({
      id: `product-${product.id}`,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    onClose();
    openCart();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail ${product.name}`}
    >
      <div
        className="animate-modal-in relative w-full max-w-2xl rounded-lg bg-white p-6 text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Tutup detail"
          onClick={onClose}
          className="absolute right-4 top-4 text-ink/60 hover:text-ink"
        >
          <X size={22} />
        </button>
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="relative h-64 w-full shrink-0 overflow-hidden rounded sm:w-64">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="mt-3 leading-relaxed text-ink/70">{product.description}</p>
            <div className="mt-3 flex gap-0.5 text-primary">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < product.rating ? "fill-primary" : "opacity-40"}
                />
              ))}
            </div>
            <p className="mt-3 text-xl font-bold">
              {formatRupiah(product.price)}{" "}
              {product.originalPrice && (
                <span className="ml-1 text-sm font-light text-ink/50 line-through">
                  {formatRupiah(product.originalPrice)}
                </span>
              )}
            </p>
            <button
              type="button"
              onClick={buy}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-transform hover:scale-105"
            >
              <ShoppingCart size={18} /> Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
