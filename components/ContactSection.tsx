"use client";

import { Mail, Phone, User } from "lucide-react";
import { site } from "@/data/site";
import { useContactForm } from "@/hooks/useContactForm";
import SectionHeading from "@/components/SectionHeading";
import IconInput from "@/components/ui/IconInput";
import { AreaInput } from "@/components/ui/Field";

export default function ContactSection() {
  const {
    name, setName,
    email, setEmail,
    phone, setPhone,
    message, setMessage,
    send,
  } = useContactForm();

  return (
    <section id="contact" className="scroll-mt-24 px-[7%] py-24">
      <SectionHeading description="Mampir langsung ke kedai atau kirim pesan — kami fast respon di jam buka.">
        <span className="text-primary">Kontak</span> Kami
      </SectionHeading>

      <div className="flex flex-col overflow-hidden rounded-lg bg-panel lg:flex-row">
        <iframe
          title={`Peta lokasi ${site.name}`}
          src={site.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-80 w-full flex-1 border-0 object-cover"
        />
        <form onSubmit={send} className="flex-1 px-8 py-10 text-center">
          <IconInput
            icon={User}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nama"
            aria-label="Nama"
          />
          <IconInput
            icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            aria-label="Email"
          />
          <IconInput
            icon={Phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="No. HP"
            aria-label="Nomor HP"
          />
          <AreaInput
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesanmu..."
            aria-label="Pesan"
            rows={3}
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
