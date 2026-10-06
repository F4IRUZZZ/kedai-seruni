export type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: MenuCategory;
};

export const MENU_CATEGORIES = ["Kopi", "Non-Kopi", "Makanan"] as const;
export type MenuCategory = (typeof MENU_CATEGORIES)[number];

export const menuItems: MenuItem[] = [
  { id: "americano", name: "Americano", price: 15000, image: "/img/menu/1.jpg", category: "Kopi" },
  { id: "kopi-tubruk", name: "Kopi Tubruk", price: 12000, image: "/img/menu/1.jpg", category: "Kopi" },
  { id: "cafe-latte", name: "Caffe Latte", price: 18000, image: "/img/menu/1.jpg", category: "Kopi" },
  { id: "cappuccino", name: "Cappuccino", price: 18000, image: "/img/menu/1.jpg", category: "Kopi" },
  { id: "espresso", name: "Espresso", price: 15000, image: "/img/menu/1.jpg", category: "Kopi" },
  { id: "matcha-latte", name: "Matcha Latte", price: 20000, image: "/img/menu/coffee-beans.svg", category: "Non-Kopi" },
];

export { formatRupiah } from "@/lib/format";
