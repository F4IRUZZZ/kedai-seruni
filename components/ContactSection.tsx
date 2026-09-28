"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, User } from "lucide-react";
import { site, waLink } from "@/data/site";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      "Halo Kedai Seruni!",
      `Nama: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `No. HP: ${phone || "-"}`,
      `Pesan: ${message || "-"}`,
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener");
  };

  return (
    <section id="contact" className="scroll-mt-24 px-[7%] py-24">
      <h2 className="mb-4 text-center text-4xl font-bold text-white">
        <span className="text-primary">Kontak</span> Kami
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center font-light text-white/70">
        Mampir langsung ke kedai atau kirim pesan — kami fast respon di jam buka.
      </p>

      <div className="flex flex-col overflow-hidden rounded-lg bg-[#222] lg:flex-row">
        <iframe
          title={`Peta lokasi ${site.name}`}
          src={site.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-80 w-full flex-1 border-0 object-cover"
        />
        <form onSubmit={send} className="flex-1 px-8 py-10 text-center">
          <div className="mb-4 flex items-center gap-3 rounded border border-white/20 bg-ink px-4">
            <User size={20} className="shrink-0 text-white" />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nama"
              aria-label="Nama"
              className="w-full bg-transparent py-4 text-white placeholder:text-white/50 focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center gap-3 rounded border border-white/20 bg-ink px-4">
            <Mail size={20} className="shrink-0 text-white" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="w-full bg-transparent py-4 text-white placeholder:text-white/50 focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center gap-3 rounded border border-white/20 bg-ink px-4">
            <Phone size={20} className="shrink-0 text-white" />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="No. HP"
              aria-label="Nomor HP"
              className="w-full bg-transparent py-4 text-white placeholder:text-white/50 focus:outline-none"
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesanmu..."
            aria-label="Pesan"
            rows={3}
            className="w-full rounded border border-white/20 bg-ink px-4 py-4 text-white placeholder:text-white/50 focus:outline-none"
          />
          <button
            type="submit"
            className="mt-6 inline-block bg-primary px-12 py-3 text-lg font-medium text-white transition-transform hover:scale-105"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
