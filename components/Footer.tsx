function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#menu", label: "Menu" },
  { href: "#products", label: "Produk" },
  { href: "#contact", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="mt-12 bg-primary px-[7%] pb-12 pt-6 text-center">
      <div className="flex justify-center gap-2 py-4">
        <a
          href="#home"
          aria-label="Instagram Kedai Seruni"
          className="p-2 text-white transition-colors hover:text-ink"
        >
          <InstagramIcon />
        </a>
        <a
          href="#home"
          aria-label="X Kedai Seruni"
          className="p-2 text-white transition-colors hover:text-ink"
        >
          <XIcon />
        </a>
        <a
          href="#home"
          aria-label="Facebook Kedai Seruni"
          className="p-2 text-white transition-colors hover:text-ink"
        >
          <FacebookIcon />
        </a>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-x-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-4 py-2 text-white transition-colors hover:text-ink"
          >
            {l.label}
          </a>
        ))}
      </div>

      <p className="text-sm text-white">
        Created by <span className="font-bold text-ink">Alfairuz.</span> | &copy;{" "}
        {new Date().getFullYear()}.
      </p>
    </footer>
  );
}
