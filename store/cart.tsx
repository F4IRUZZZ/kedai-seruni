"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { readJSON, writeJSON } from "@/lib/storage";
import { formatRupiah } from "@/lib/format";
import type { MenuItem } from "@/data/menu";
import type { Product } from "@/data/products";

export type CartLine = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartLine, "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "kedai-seruni-cart";

function loadInitialLines(): CartLine[] {
  const parsed = readJSON<unknown>(STORAGE_KEY, []);
  return Array.isArray(parsed) ? (parsed as CartLine[]) : [];
}

export function menuToCartItem(m: MenuItem): Omit<CartLine, "qty"> {
  return { id: `menu-${m.id}`, name: m.name, price: m.price, image: m.image };
}

export function productToCartItem(p: Product): Omit<CartLine, "qty"> {
  return { id: `product-${p.id}`, name: p.name, price: p.price, image: p.image };
}

export function buildCheckoutMessage(lines: CartLine[], total: number): string {
  const items = lines.map(
    (l) => `- ${l.name} x${l.qty} = ${formatRupiah(l.price * l.qty)}`,
  );
  return [
    "Halo Kedai Seruni! Saya mau pesan:",
    ...items,
    `Total: ${formatRupiah(total)}`,
    "Terima kasih!",
  ].join("\n");
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(loadInitialLines);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeJSON(STORAGE_KEY, lines);
  }, [lines]);

  const addItem = useCallback((item: Omit<CartLine, "qty">, qty = 1) => {
    setLines((prev) => {
      const found = prev.find((l) => l.id === item.id);
      if (found) {
        return prev.map((l) =>
          l.id === item.id ? { ...l, qty: l.qty + qty } : l,
        );
      }
      return [...prev, { ...item, qty }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const total = lines.reduce((n, l) => n + l.qty * l.price, 0);
    return {
      lines,
      count,
      total,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      setQty,
      clear,
    };
  }, [lines, isOpen, openCart, closeCart, addItem, removeItem, setQty, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart harus dipakai di dalam CartProvider");
  return ctx;
}
