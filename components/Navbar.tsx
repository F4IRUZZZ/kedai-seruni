"use client";

import { useState } from "react";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/store/cart";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#menu", label: "Menu" },
  { href: "#products", label: "Produk" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  const { count, openCart } = useCart();
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-coffee bg-ink/80 backdrop-blur">
      <div className="flex items-center justify-between px-[7%] py-5">
        <a href="#home" className="text-2xl font-bold italic text-white">
          Kedai<span className="text-primary">Seruni</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Cari menu"
            onClick={() => setSearchOpen((v) => !v)}
            className="p-2 text-white transition-colors hover:text-primary"
          >
            <Search size={22} />
          </button>
          <button
            type="button"
            aria-label="Buka keranjang"
            onClick={openCart}
            className="relative p-2 text-white transition-colors hover:text-primary"
          >
            <ShoppingCart size={22} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Buka menu navigasi"
            onClick={() => setNavOpen((v) => !v)}
            className="p-2 text-white transition-colors hover:text-primary md:hidden"
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-white/10 bg-ink px-[7%] py-3">
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Cari menu, misal: latte..."
            className="w-full rounded-md bg-white px-4 py-2.5 text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      )}

      {navOpen && (
        <div className="flex flex-col border-t border-white/10 bg-ink px-[7%] py-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setNavOpen(false)}
              className="border-b border-white/5 py-3 text-lg text-white last:border-0 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
