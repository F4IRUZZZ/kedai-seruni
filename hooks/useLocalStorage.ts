"use client";

import { useCallback, useState } from "react";
import { readJSON, writeJSON } from "@/lib/storage";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() =>
    readJSON<T>(key, initialValue),
  );

  const setStoredValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved =
          typeof next === "function"
            ? (next as (prev: T) => T)(prev)
            : next;
        writeJSON(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, setStoredValue] as const;
}
