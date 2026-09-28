"use client";

import Image from "next/image";
import { Eye, ShoppingCart, Star } from "lucide-react";
import { formatRupiah } from "@/data/menu";
import { products, type Product } from "@/data/products";
import { useCart } from "@/store/cart";

function Stars({ value }: { value: number }) {
  return (
    <div className="flex justify-center gap-0.5 text-primary">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={18}
          className={i < value ? "fill-primary" : "opacity-40"}
        />
      ))}
    </div>
  );
}

export default function ProductsSection({
  onDetail,
}: {
  onDetail: (product: Product) => void;
}) {
  const { addItem } = useCart();

  return (
    <section id="products" className="scroll-mt-24 px-[7%] py-24">
      <h2 className="mb-4 text-center text-4xl font-bold text-white">
        <span className="text-primary">Produk Unggulan</span> Kami
      </h2>
      <p className="mx-auto mb-12 max-w-xl text-center font-light text-white/70">
        Bawa pulang rasa Seruni. Biji disangrai fresh setiap minggu.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-lg border border-white/15 p-6 text-center transition-colors hover:border-primary"
          >
            <div className="mb-4 flex justify-center gap-2">
              <button
                type="button"
                aria-label={`Tambah ${p.name} ke keranjang`}
                onClick={() =>
                  addItem({ id: `product-${p.id}`, name: p.name, price: p.price, image: p.image })
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:bg-primary"
              >
                <ShoppingCart size={18} />
              </button>
              <button
                type="button"
                aria-label={`Lihat detail ${p.name}`}
                onClick={() => onDetail(p)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:bg-primary"
              >
                <Eye size={18} />
              </button>
            </div>
            <div className="relative mx-auto h-56 w-full overflow-hidden rounded">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{p.name}</h3>
            <div className="mt-2">
              <Stars value={p.rating} />
            </div>
            <p className="mt-2 font-bold text-white">
              {formatRupiah(p.price)}{" "}
              {p.originalPrice && (
                <span className="ml-1 text-sm font-light text-white/50 line-through">
                  {formatRupiah(p.originalPrice)}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
