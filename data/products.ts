export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "arabika-seruni",
    name: "Kopi Arabika Seruni",
    price: 30000,
    originalPrice: 45000,
    rating: 4,
    image: "/img/products/1.jpeg",
    description:
      "Biji kopi arabika pilihan dengan aroma floral dan rasa seimbang. Cocok untuk seduh manual maupun espresso.",
  },
  {
    id: "robusta-seruni",
    name: "Kopi Robusta Seruni",
    price: 28000,
    originalPrice: 40000,
    rating: 5,
    image: "/img/products/1.jpeg",
    description:
      "Robusta dengan body tebal dan kick kafein yang kuat. Favorit untuk kopi susu dan tubruk.",
  },
  {
    id: "blend-house",
    name: "House Blend Seruni",
    price: 35000,
    originalPrice: 50000,
    rating: 5,
    image: "/img/products/1.jpeg",
    description:
      "Campuran arabika dan robusta racikan kedai untuk espresso yang manis dan creamy.",
  },
  {
    id: "biji-pilihan",
    name: "Biji Pilihan Petani",
    price: 32000,
    rating: 4,
    image: "/img/menu/coffee-beans.svg",
    description:
      "Biji kopi musiman dari petani mitra, disangrai fresh setiap minggu dalam batch kecil.",
  },
];
