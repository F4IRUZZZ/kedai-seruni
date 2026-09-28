import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-[7%] py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        <span className="text-primary">Tentang</span> Kami
      </h2>
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="md:flex-1">
          <Image
            src="/img/tentang-kami.jpg"
            alt="Barista Kedai Seruni sedang menyeduh kopi"
            width={800}
            height={600}
            className="h-auto w-full rounded-lg object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:flex-1">
          <h3 className="mb-4 text-2xl font-semibold text-white">
            Mengapa memilih kedai kami?
          </h3>
          <p className="mb-3 font-light leading-relaxed text-white/80">
            Kedai Seruni adalah tempat nongkrong hangat untuk menikmati kopi
            yang diseduh dengan teliti. Kami memakai biji pilihan dari petani
            lokal dan menyangrainya dalam batch kecil agar rasa selalu fresh.
          </p>
          <p className="font-light leading-relaxed text-white/80">
            Selain dine-in yang nyaman, biji kopi kami juga dijual dalam
            kemasan untuk diseduh di rumah. Mampir, cicipi, dan temukan favorit
            barumu.
          </p>
        </div>
      </div>
    </section>
  );
}
