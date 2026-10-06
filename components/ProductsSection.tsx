"use client";

import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";
import { products, type Product } from "@/data/products";
import { productToCartItem, useCart } from "@/store/cart";
import Stars from "@/components/Stars";
import ProductPrice from "@/components/ProductPrice";
import SectionHeading from "@/components/SectionHeading";

export default function ProductsSection({
  onDetail,
}: {
  onDetail: (product: Product) => void;
}) {
  const { addItem } = useCart();

  return (
    <section id="products" className="scroll-mt-24 px-[7%] py-24">
      <SectionHeading description="Bawa pulang rasa Seruni. Biji disangrai fresh setiap minggu.">
        <span className="text-primary">Produk Unggulan</span> Kami
      </SectionHeading>

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
                onClick={() => addItem(productToCartItem(p))}
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
            <ProductPrice
              price={p.price}
              originalPrice={p.originalPrice}
              className="mt-2"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
