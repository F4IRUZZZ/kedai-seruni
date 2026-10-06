import {
  reservationWaLink,
  type Reservation,
} from "@/data/reservation";

export default function ReservationSuccess({ reservation }: { reservation: Reservation }) {
  return (
    <div className="border-t border-white/10 bg-ink px-8 py-6 text-left">
      <h3 className="font-bold text-white">
        Reservasi tersimpan ({reservation.id})
      </h3>
      <p className="mt-1 text-sm font-light text-white/70">
        {reservation.date} pukul {reservation.time} — {reservation.guests} orang,
        area {reservation.area}. Lanjutkan konfirmasi ke kedai via WhatsApp.
      </p>
      <a
        href={reservationWaLink(reservation)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-md bg-primary px-8 py-3 font-medium text-white hover:brightness-110"
      >
        Konfirmasi via WhatsApp
      </a>
    </div>
  );
}
