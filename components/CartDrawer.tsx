"use client";

import Image from "next/image";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { formatRupiah } from "@/data/menu";
import { waLink } from "@/data/site";
import { useCart } from "@/store/cart";

export default function CartDrawer() {
  const { lines, total, count, isOpen, closeCart, removeItem, setQty, clear } =
    useCart();

  const checkoutMessage = () => {
    const items = lines.map((l) => `- ${l.name} x${l.qty} = ${formatRupiah(l.price * l.qty)}`);
    return [
      "Halo Kedai Seruni! Saya mau pesan:",
      ...items,
      `Total: ${formatRupiah(total)}`,
      "Terima kasih!",
    ].join("\n");
  };

  return (
    <>
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-label="Keranjang belanja"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white text-ink shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <h2 className="text-lg font-bold">
            Keranjang {count > 0 && <span className="text-primary">({count})</span>}
          </h2>
          <button
            type="button"
            aria-label="Tutup keranjang"
            onClick={closeCart}
            className="text-ink/60 hover:text-ink"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <p className="mt-10 text-center text-ink/60">
              Keranjang masih kosong. Yuk pilih menu favoritmu!
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {lines.map((l) => (
                <li
                  key={l.id}
                  className="flex items-center gap-3 border-b border-dashed border-ink/15 pb-4"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={l.image}
                      alt={l.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-medium">{l.name}</h3>
                    <p className="text-sm text-ink/60">{formatRupiah(l.price)}</p>
                    <div className="mt-1.5 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Kurangi ${l.name}`}
                        onClick={() => setQty(l.id, l.qty - 1)}
                        className="rounded border border-ink/15 p-1 hover:border-primary hover:text-primary"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{l.qty}</span>
                      <button
                        type="button"
                        aria-label={`Tambah ${l.name}`}
                        onClick={() => setQty(l.id, l.qty + 1)}
                        className="rounded border border-ink/15 p-1 hover:border-primary hover:text-primary"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Hapus ${l.name}`}
                    onClick={() => removeItem(l.id)}
                    className="text-ink/50 hover:text-primary"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-ink/10 px-5 py-4">
            <div className="mb-3 flex items-center justify-between font-bold">
              <span>Total</span>
              <span>{formatRupiah(total)}</span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={clear}
                className="rounded-md border border-ink/15 px-4 py-2.5 text-sm hover:border-primary hover:text-primary"
              >
                Kosongkan
              </button>
              <a
                href={waLink(checkoutMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-md bg-primary px-4 py-2.5 text-center font-medium text-white hover:brightness-110"
              >
                Checkout via WhatsApp
              </a>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
