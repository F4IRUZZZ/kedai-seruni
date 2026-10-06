"use client";

import {
  AREAS,
  CLOSE_HOUR,
  MAX_GUESTS,
  OPEN_HOUR,
  todayISODate,
  type Reservation,
  type ReservationArea,
} from "@/data/reservation";
import { useReservationForm } from "@/hooks/useReservationForm";
import { Field, TextInput, SelectInput, AreaInput } from "@/components/ui/Field";
import ReservationSuccess from "@/components/ReservationSuccess";

export default function ReservationForm({
  onCreated,
}: {
  onCreated: (r: Reservation) => void;
}) {
  const {
    name, setName,
    phone, setPhone,
    date, setDate,
    time, setTime,
    guests, setGuests,
    area, setArea,
    note, setNote,
    errors,
    created,
    submit,
  } = useReservationForm(onCreated);

  return (
    <div className="overflow-hidden rounded-lg bg-panel">
      <form onSubmit={submit} className="flex-1 px-8 py-10">
        <div className="mb-6 text-left">
          <h2 className="text-2xl font-bold text-white">Form Reservasi</h2>
          <p className="mt-1 font-light text-white/70">
            Jam operasional {OPEN_HOUR}:00–{CLOSE_HOUR}:00, maksimal {MAX_GUESTS}{" "}
            tamu per reservasi.
          </p>
        </div>

        <Field error={errors.name}>
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nama"
            aria-label="Nama"
          />
        </Field>

        <Field error={errors.phone}>
          <TextInput
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="No. WA, misal 0812xxxx"
            aria-label="Nomor WhatsApp"
          />
        </Field>

        <div className="grid gap-0 sm:grid-cols-2 sm:gap-4">
          <Field error={errors.date}>
            <TextInput
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              min={todayISODate()}
              aria-label="Tanggal reservasi"
            />
          </Field>
          <Field error={errors.time}>
            <TextInput
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="time"
              aria-label="Jam reservasi"
            />
          </Field>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 sm:gap-4">
          <Field error={errors.guests}>
            <TextInput
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              type="number"
              min={1}
              max={MAX_GUESTS}
              aria-label="Jumlah tamu"
            />
          </Field>
          <Field>
            <SelectInput
              value={area}
              onChange={(e) => setArea(e.target.value as ReservationArea)}
              aria-label="Area tempat duduk"
            >
              {AREAS.map((a) => (
                <option key={a} value={a} className="text-black">
                  {a}
                </option>
              ))}
            </SelectInput>
          </Field>
        </div>

        <AreaInput
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Catatan (opsional), misal: dekat colokan"
          aria-label="Catatan"
          rows={3}
        />

        <button
          type="submit"
          className="mt-6 inline-block w-full bg-primary px-12 py-3 text-lg font-medium text-white transition-transform hover:scale-[1.02] sm:w-auto"
        >
          Simpan Reservasi
        </button>
      </form>

      {created && <ReservationSuccess reservation={created} />}
    </div>
  );
}
