"use client";

import { useState, type FormEvent } from "react";
import {
  makeReservationId,
  validateReservation,
  type Reservation,
  type ReservationArea,
} from "@/data/reservation";

export function useReservationForm(onCreated: (r: Reservation) => void) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [area, setArea] = useState<ReservationArea>("Indoor");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [created, setCreated] = useState<Reservation | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validateReservation({ name, phone, date, time, guests });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const r: Reservation = {
      id: makeReservationId(),
      name: name.trim(),
      phone: phone.trim(),
      date,
      time,
      guests,
      area,
      note: note.trim(),
      createdAt: new Date().toISOString(),
    };
    onCreated(r);
    setCreated(r);
    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setGuests(2);
    setArea("Indoor");
    setNote("");
  };

  return {
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
  };
}
