import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { CartProvider } from "@/store/cart";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kedai Seruni — Kopi Surabaya",
  description:
    "Kedai Seruni: nikmati secangkir kopi dari biji pilihan petani lokal di Surabaya. Lihat menu, produk unggulan, dan pesan via WhatsApp.",
  openGraph: {
    title: "Kedai Seruni — Kopi Surabaya",
    description:
      "Biji pilihan, disangrai fresh setiap minggu. Lihat menu dan pesan via WhatsApp.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ink text-white">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
