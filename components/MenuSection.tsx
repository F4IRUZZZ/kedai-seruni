"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { formatRupiah, menuItems, type MenuItem } from "@/data/menu";
import { useCart } from "@/store/cart";

const categories = ["Semua", "Kopi", "Non-Kopi", "Makanan"] as const;

export default function MenuSection({ query }: { query: string }) {
  const { addItem } = useCart();
  const [category, setCategory] = useState<(typeof categories)[number]>("Semua");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((m) => {
      const matchCategory = category === "Semua" || m.category === category;
      const matchQuery = !q || m.name.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  const add = (m: MenuItem) =>
    addItem({ id: `menu-${m.id}`, name: m.name, price: m.price, image: m.image });

  return (
    <section id="menu" className="scroll-mt-24 px-[7%] py-24">
      <h2 className="mb-4 text-center text-4xl font-bold text-white">
        <span className="text-primary">Menu</span> Kami
      </h2>
      <p className="mx-auto mb-8 max-w-xl text-center font-light text-white/70">
        Diseduh fresh saat dipesan. Semua harga sudah termasuk pajak.
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              category === c
                ? "bg-primary text-white"
                : "border border-white/20 text-white/70 hover:border-primary hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-white/60">
          Tidak ada menu yang cocok dengan pencarianmu.
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-10">
          {filtered.map((m) => (
            <div key={m.id} className="group w-56 text-center">
              <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="176px"
                  loading="lazy"
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">- {m.name} -</h3>
              <p className="mt-1 text-white/80">{formatRupiah(m.price)}</p>
              <button
                type="button"
                onClick={() => add(m)}
                className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-primary px-4 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <Plus size={16} /> Keranjang
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
