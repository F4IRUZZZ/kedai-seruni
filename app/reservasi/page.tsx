import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ReservationSection from "@/components/ReservationSection";

export const metadata: Metadata = {
  title: "Reservasi Meja — Kedai Seruni",
  description:
    "Reservasi meja Kedai Seruni Surabaya: pilih tanggal, jam, jumlah tamu, dan area, lalu konfirmasi via WhatsApp.",
};

export default function ReservasiPage() {
  return (
    <>
      <Navbar />
      <main className="px-[7%] pb-24 pt-32">
        <p className="mb-4 text-sm font-light text-white/60">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>{" "}
          / Reservasi
        </p>
        <h1 className="text-4xl font-bold text-white">
          Reservasi <span className="text-primary">Meja</span>
        </h1>
        <p className="mb-10 mt-3 max-w-xl font-light text-white/70">
          Isi form di bawah, riwayat tersimpan di browser ini, lalu konfirmasi
          ke kedai via WhatsApp. Tanpa backend — konfirmasi final manual oleh
          kedai.
        </p>
        <ReservationSection />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
