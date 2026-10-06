import { readJSON, writeJSON } from "@/lib/storage";
import { waLink } from "@/data/site";

export const RESERVATION_STORAGE_KEY = "kedai-seruni-reservations";

export const OPEN_HOUR = 9;
export const CLOSE_HOUR = 22;
export const MAX_GUESTS = 8;
export const MIN_GUESTS = 1;

export const AREAS = ["Indoor", "Outdoor"] as const;
export type ReservationArea = (typeof AREAS)[number];

export type Reservation = {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: ReservationArea;
  note: string;
  createdAt: string;
};

export function makeReservationId(): string {
  return `SRN-${Date.now().toString(36).toUpperCase().slice(-4)}${Math.floor(
    Math.random() * 36 ** 2,
  )
    .toString(36)
    .toUpperCase()
    .padStart(2, "0")}`;
}

export function todayISODate(): string {
  const d = new Date();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export function isValidTimeRange(time: string): boolean {
  const m = /^(\d{2}):(\d{2})$/.exec(time);
  if (!m) return false;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h < 0 || h > 23 || min < 0 || min > 59) return false;
  const total = h * 60 + min;
  return total >= OPEN_HOUR * 60 && total <= CLOSE_HOUR * 60;
}

export function validateReservation(input: {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!input.name.trim()) errors.name = "Nama wajib diisi.";
  const digits = input.phone.replace(/\D/g, "");
  if (!digits) errors.phone = "No. WA wajib diisi.";
  else if (digits.length < 9) errors.phone = "No. WA minimal 9 digit angka.";
  if (!input.date) errors.date = "Tanggal wajib dipilih.";
  else if (input.date < todayISODate())
    errors.date = "Tanggal tidak boleh hari yang sudah lewat.";
  if (!input.time) errors.time = "Jam wajib dipilih.";
  else if (!isValidTimeRange(input.time))
    errors.time = `Jam reservasi ${OPEN_HOUR}:00–${CLOSE_HOUR}:00.`;
  if (!Number.isFinite(input.guests))
    errors.guests = "Jumlah tamu tidak valid.";
  else if (input.guests < MIN_GUESTS || input.guests > MAX_GUESTS)
    errors.guests = `Maksimal ${MAX_GUESTS} tamu per reservasi.`;
  return errors;
}

export function formatReservationWA(r: Reservation): string {
  return [
    "Halo Kedai Seruni! Saya mau reservasi meja:",
    `Kode: ${r.id}`,
    `Nama: ${r.name}`,
    `No. WA: ${r.phone}`,
    `Tanggal: ${r.date}`,
    `Jam: ${r.time}`,
    `Tamu: ${r.guests} orang`,
    `Area: ${r.area}`,
    `Catatan: ${r.note || "-"}`,
    "Mohon konfirmasinya. Terima kasih!",
  ].join("\n");
}

export function reservationWaLink(r: Reservation): string {
  return waLink(formatReservationWA(r));
}

export function loadReservations(): Reservation[] {
  const parsed = readJSON<unknown>(RESERVATION_STORAGE_KEY, []);
  return Array.isArray(parsed) ? (parsed as Reservation[]) : [];
}

export function saveReservations(items: Reservation[]): void {
  writeJSON(RESERVATION_STORAGE_KEY, items);
}
