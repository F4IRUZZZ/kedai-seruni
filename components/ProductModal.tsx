"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, X } from "lucide-react";
import type { Product } from "@/data/products";
import { productToCartItem, useCart } from "@/store/cart";
import Stars from "@/components/Stars";
import ProductPrice from "@/components/ProductPrice";
import Backdrop from "@/components/ui/Backdrop";
import { useLockBody } from "@/hooks/useLockBody";

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

  useLockBody(product !== null);

  if (!product) return null;

  const buy = () => {
    addItem(productToCartItem(product));
    onClose();
    openCart();
  };

  return (
    <>
      <Backdrop
        label={`Tutup detail ${product.name}`}
        visible
        onClose={onClose}
        className="z-[60] bg-black/60"
      />
      <div
        className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label={`Detail ${product.name}`}
      >
        <div className="animate-modal-in pointer-events-auto relative w-full max-w-2xl rounded-lg bg-white p-6 text-ink">
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
            <div className="mt-3 [&>div]:justify-start">
              <Stars value={product.rating} />
            </div>
            <ProductPrice
              price={product.price}
              originalPrice={product.originalPrice}
              dark
              className="mt-3 text-xl"
            />
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
    </>
  );
}
