export function Footer() {
  return (
    <footer className="bg-soft-black px-20 py-14 flex justify-between items-center flex-wrap gap-6">
      <div>
        <div className="mb-2">
          <img
            src="/images/logo/savia-amber.png"
            alt="Savia Studio"
            className="h-8 w-auto"
          />
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
