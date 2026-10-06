// GANTI nomor ini dengan nomor WhatsApp resmi kedai (format: kode negara tanpa +).
export const WHATSAPP_NUMBER = "6281234567890";

export const site = {
  name: "Kedai Seruni",
  tagline: "Mari Nikmati Secangkir Kopi",
  city: "Surabaya",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.621804308136!2d112.75555737483907!3d-7.283799692723513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbe3aa44cda7%3A0x931a33155c45f7f9!2sKedai%20Seruni!5e0!3m2!1sid!2sid!4v1762680038880!5m2!1sid!2sid",
};

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
