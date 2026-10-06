import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/data/site";
import { DEFAULT_ORDER_MESSAGE } from "@/data/contact";

export default function Hero() {
  return (
    <section id="home" className="hero-fade relative flex min-h-screen items-center">
      <Image
        src="/img/header-bg.jpg"
        alt="Suasana Kedai Seruni"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative w-full px-[7%] pt-28 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white drop-shadow md:text-6xl">
          Mari Nikmati Secangkir <span className="text-primary">Kopi</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg font-light text-white/90">
          Diseduh dari biji pilihan petani lokal, disangrai fresh setiap minggu
          di {site.city}.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/reservasi"
            className="rounded-md bg-primary px-8 py-3 text-lg font-medium text-white shadow transition-transform hover:scale-105"
          >
            Reservasi Meja
          </Link>
          <Link
            href="#menu"
            className="rounded-md border border-white/60 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-white hover:text-ink"
          >
            Lihat Menu
          </Link>
          <a
            href={waLink(DEFAULT_ORDER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/60 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-white hover:text-ink"
          >
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
