export function Footer() {
  return (
    <footer className="bg-soft-black px-20 py-14 flex justify-between items-center flex-wrap gap-6">
      <div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-display text-[22px] font-semibold text-amber">
            Savia
          </span>
          <span className="font-body text-[9px] font-medium text-sage tracking-[3px] uppercase">
            Studio
          </span>
        </div>
        <p className="font-body text-xs font-light text-warm-gray">
          Tecnología con cuidado artesanal
        </p>
      </div>

      <div className="flex gap-8">
        <a
          href="mailto:hola@saviastudio.io"
          className="font-body text-[13px] text-sage-muted no-underline hover:text-amber transition-colors duration-300"
        >
          hola@saviastudio.io
        </a>
        <a
          href="https://linkedin.com/company/saviastudio"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[13px] text-sage-muted no-underline hover:text-amber transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>

      <p className="font-body text-[11px] text-warm-gray">
        © 2025 Savia Studio · México
      </p>
    </footer>
  );
}
