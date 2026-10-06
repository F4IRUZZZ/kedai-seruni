"use client";

import {
  reservationWaLink,
  type Reservation,
} from "@/data/reservation";
import EmptyState from "@/components/ui/EmptyState";

export default function ReservationList({
  items,
  onCancel,
}: {
  items: Reservation[];
  onCancel: (id: string) => void;
}) {
  if (items.length === 0) {
    return (
      <EmptyState className="mt-8">
        Belum ada reservasi di browser ini. Isi form di atas untuk membuat
        reservasi pertama.
      </EmptyState>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-bold text-white">
        Reservasi Saya{" "}
        <span className="text-primary">({items.length})</span>
      </h2>
      <ul className="flex flex-col gap-4">
        {items.map((r) => (
          <li
            key={r.id}
            className="rounded-lg bg-panel px-6 py-5 text-left"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-bold text-white">{r.id}</p>
              <span className="rounded-full bg-ink px-3 py-1 text-xs text-white/70">
                {r.area}
              </span>
            </div>
            <p className="mt-2 font-light text-white/80">
              {r.name} — {r.date} pukul {r.time} — {r.guests} orang
            </p>
            {r.note && (
              <p className="mt-1 text-sm font-light text-white/60">
                Catatan: {r.note}
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={reservationWaLink(r)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-white hover:brightness-110"
              >
                Kirim ulang WA
              </a>
              <button
                type="button"
                onClick={() => onCancel(r.id)}
                aria-label={`Batalkan reservasi ${r.id}`}
                className="rounded-md border border-white/20 px-5 py-2 text-sm text-white/80 hover:border-primary hover:text-primary"
              >
                Batalkan
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm font-light text-white/50">
        Riwayat hanya tersimpan di browser ini. Konfirmasi final dilakukan
        manual oleh kedai via WhatsApp.
      </p>
    </div>
  );
}
