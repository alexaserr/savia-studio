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
    <section className="relative min-h-screen flex flex-col justify-center px-20 pt-28 pb-20 bg-forest-dark overflow-hidden grain">
      {/* Atmospheric gradients */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 40%, rgba(168,185,156,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-[20%] -left-[10%] w-1/2 h-[60%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 80%, rgba(196,132,29,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[800px]">
        {/* Wordmark */}
        <div
          className={`flex items-baseline gap-3 mb-14 ${base}`}
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.2s",
          }}
        >
          <span className="font-display text-[56px] font-semibold text-amber tracking-tight">
            Savia
          </span>
          <span className="font-body text-[15px] font-light text-sage tracking-[7px] uppercase">
            Studio
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-[clamp(36px,5vw,58px)] font-normal text-cream leading-[1.12] mb-7 -tracking-[0.5px] ${base}`}
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
          className={`font-body text-[clamp(15px,1.5vw,18px)] font-light text-sage-muted leading-[1.75] mb-14 max-w-[580px] ${base}`}
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.6s",
          }}
        >
          Diseñamos y construimos ecosistemas digitales completos para
          clínicas, centros de bienestar y organizaciones de conocimiento en
          México.
        </p>

        {/* CTAs */}
        <div
          className={`flex gap-4 items-center flex-wrap ${base}`}
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
              px-9 py-4 rounded-md no-underline tracking-wide
              hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(196,132,29,0.3)]
              transition-all duration-400
            "
          >
            Hablemos de su proyecto
          </a>
          <a
            href="#trabajo"
            className="
              font-body text-[13px] font-medium
              text-sage border border-sage/25
              px-7 py-4 rounded-md no-underline
              hover:border-sage hover:text-cream hover:-translate-y-0.5
              transition-all duration-400
            "
          >
            Ver nuestro trabajo →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-20"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 1.5s",
        }}
      >
        <div
          className="w-px h-14 mb-3 ml-1.5 animate-scroll-pulse"
          style={{
            background:
              "linear-gradient(to bottom, var(--sage), transparent)",
          }}
        />
        <span className="font-body text-[9px] text-warm-gray tracking-[3px] uppercase">
          Scroll
        </span>
      </div>

      {/* Decorative vertical line */}
      <div
        className="absolute right-20 top-1/2 -translate-y-1/2 w-px h-44"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(196,132,29,0.15), transparent)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 2s ease 1s",
        }}
      />
    </section>
  );
}
