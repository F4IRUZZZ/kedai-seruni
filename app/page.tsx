"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import ProductsSection from "@/components/ProductsSection";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { Product } from "@/data/products";

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <>
      <Navbar query={query} onQueryChange={setQuery} />
      <main>
        <Hero />
        <About />
        <MenuSection query={query} />
        <ProductsSection onDetail={setActiveProduct} />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </>
  );
}
