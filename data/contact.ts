import { waLink } from "@/data/site";

export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const DEFAULT_ORDER_MESSAGE = "Halo Kedai Seruni! Saya mau pesan kopi.";

export function buildContactMessage(input: ContactInput): string {
  return [
    "Halo Kedai Seruni!",
    `Nama: ${input.name || "-"}`,
    `Email: ${input.email || "-"}`,
    `No. HP: ${input.phone || "-"}`,
    `Pesan: ${input.message || "-"}`,
  ].join("\n");
}

export function contactWaLink(input: ContactInput): string {
  return waLink(buildContactMessage(input));
}
