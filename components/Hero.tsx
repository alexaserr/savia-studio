"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const base = "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 pt-40 pb-32 bg-forest-dark overflow-hidden">
      <div className="relative z-10 max-w-[720px] mx-auto flex flex-col items-center">
        {/* Wordmark */}
        <div
          className={`mb-16 ${base}`}
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.2s",
          }}
        >
          <img
            src="/images/logo/savia-amber.png"
            alt="Savia Studio"
            className="h-40 w-auto drop-shadow-[0_0_32px_rgba(196,132,29,0.18)]"
          />
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-[clamp(40px,6vw,72px)] font-normal text-cream leading-[1.1] mb-8 -tracking-[0.5px] ${base}`}
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.4s",
          }}
        >
          Tecnología con cuidado artesanal
          <br />
          para salud y bienestar
        </h1>

        {/* Subheadline */}
        <p
          className={`font-body text-[clamp(15px,1.5vw,18px)] font-light text-sage-muted leading-[1.8] mb-14 max-w-[500px] mx-auto ${base}`}
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.6s",
          }}
        >
          Ecosistemas digitales completos para clínicas, centros de bienestar
          y organizaciones de conocimiento en México.
        </p>

        {/* CTAs */}
        <div
          className={`flex gap-4 items-center justify-center flex-wrap ${base}`}
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.8s",
          }}
        >
          <a
            href="#contacto"
            className="
              font-body text-[13px] font-semibold
              text-forest-dark bg-amber
              px-9 py-4 rounded-full no-underline tracking-wide
              hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(196,132,29,0.3)]
              transition-all duration-700
            "
          >
            Hablemos de su proyecto
          </a>
          <a
            href="#trabajo"
            className="
              font-body text-[13px] font-medium
              text-sage border border-sage/25
              px-7 py-4 rounded-full no-underline
              hover:border-sage hover:text-cream hover:-translate-y-0.5
              transition-all duration-700
            "
          >
            Ver nuestro trabajo →
          </a>
        </div>
      </div>
    </section>
  );
}
