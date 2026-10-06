"use client";

import { useCallback } from "react";
import ReservationForm from "@/components/ReservationForm";
import ReservationList from "@/components/ReservationList";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  RESERVATION_STORAGE_KEY,
  type Reservation,
} from "@/data/reservation";

export default function ReservationSection() {
  const [items, setItems] = useLocalStorage<Reservation[]>(
    RESERVATION_STORAGE_KEY,
    [],
  );

  const handleCreated = useCallback(
    (r: Reservation) => {
      setItems((prev) => [r, ...prev]);
    },
    [setItems],
  );

  const handleCancel = useCallback(
    (id: string) => {
      setItems((prev) => prev.filter((r) => r.id !== id));
    },
    [setItems],
  );

  return (
    <>
      <ReservationForm onCreated={handleCreated} />
      <ReservationList items={items} onCancel={handleCancel} />
    </>
  );
}
