export type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "Kopi" | "Non-Kopi" | "Makanan";
};

export const menuItems: MenuItem[] = [
  { id: "americano", name: "Americano", price: 15000, image: "/img/menu/1.jpg", category: "Kopi" },
  { id: "kopi-tubruk", name: "Kopi Tubruk", price: 12000, image: "/img/menu/1.jpg", category: "Kopi" },
  { id: "cafe-latte", name: "Caffe Latte", price: 18000, image: "/img/menu/1.jpg", category: "Kopi" },
  { id: "cappuccino", name: "Cappuccino", price: 18000, image: "/img/menu/1.jpg", category: "Kopi" },
  { id: "espresso", name: "Espresso", price: 15000, image: "/img/menu/1.jpg", category: "Kopi" },
  { id: "matcha-latte", name: "Matcha Latte", price: 20000, image: "/img/menu/coffee-beans.svg", category: "Non-Kopi" },
];

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}
