# Kedai Seruni — Kopi Surabaya

Website Kedai Seruni, dimigrasi dari HTML/CSS/JS native ke **Next.js 16 + React 19 + TypeScript + Tailwind CSS v4**.

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Perintah lain: `npm run build`, `npm run start`, `npm run lint`.

## Struktur

```
app/                  App Router (layout + halaman utama satu halaman)
  layout.tsx          Font Poppins, metadata SEO Indonesia, CartProvider
  page.tsx            Susunan: Navbar, Hero, About, Menu, Produk, Kontak, Footer
components/           Navbar, Hero, About, MenuSection, ProductsSection,
                      ProductModal, CartDrawer, ContactSection, Footer
data/
  menu.ts             Daftar menu + kategori + format Rupiah
  products.ts         Produk unggulan + rating + deskripsi
  site.ts             Info situs + nomor WhatsApp (GANTI dengan nomor resmi)
store/cart.tsx        Keranjang belanja (Context + localStorage)
public/img/           Aset gambar dari situs lama
```

## Catatan migrasi (tahap 1)

- Tampilan 1:1 dengan situs lama, tapi menu/produk sudah **data-driven** (tidak ada lagi kartu duplikat).
- Keranjang belanja fungsional: tambah/kurang/hapus, tersimpan di `localStorage`, checkout via WhatsApp.
- Pencarian navbar memfilter menu; kategori Kopi / Non-Kopi / Makanan.
- Form kontak mengirim pesan via WhatsApp (tanpa backend).
- Bug lama diperbaiki: hero `position: fixed`, `lang="en"`, tanpa meta SEO, ikon via CDN.
- **TODO**: ganti `WHATSAPP_NUMBER` di `data/site.ts` dengan nomor resmi kedai, tambah foto menu/produk asli, isi link media sosial di `Footer.tsx`.
