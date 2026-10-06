"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { formatRupiah } from "@/lib/format";
import { waLink } from "@/data/site";
import { buildCheckoutMessage, useCart } from "@/store/cart";
import Backdrop from "@/components/ui/Backdrop";
import EmptyState from "@/components/ui/EmptyState";
import { useLockBody } from "@/hooks/useLockBody";

export default function CartDrawer() {
  const { lines, total, count, isOpen, closeCart, removeItem, setQty, clear } =
    useCart();

  const checkoutMessage = () => buildCheckoutMessage(lines, total);

  useLockBody(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      <Backdrop
        label="Tutup keranjang"
        visible={isOpen}
        onClose={closeCart}
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
            <EmptyState tone="light" className="mt-10 border-0 p-0">
              Keranjang masih kosong. Yuk pilih menu favoritmu!
            </EmptyState>
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
