"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const metrics = [
  { num: "60+", label: "Requerimientos" },
  { num: "100%", label: "Self-hosted" },
  { num: "10+", label: "Documentos técnicos" },
  { num: "40", label: "Semanas de desarrollo" },
];

const stack = ["Python", "FastAPI", "Next.js", "PostgreSQL", "Docker", "Tailscale"];

export function CaseStudy() {
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <section id="trabajo" className="relative bg-sand px-20 py-28">
      {/* Decorative gradient */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-52 h-96 pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(45,90,39,0.03), transparent)",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Left: text */}
        <div>
          <Reveal>
            <span className="font-body text-[11px] font-semibold text-amber tracking-[4px] uppercase block mb-5">
              Caso de estudio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(28px,3.5vw,40px)] font-normal text-forest-dark leading-[1.15] mb-6">
              Ecosistema digital para centro de sanación energética
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-[15px] font-normal text-charcoal leading-[1.75] mb-9">
              Plataforma completa con expediente clínico digital,
              infraestructura self-hosted, cumplimiento NOM-004-SSA3-2012, y
              documentación técnica exhaustiva. Entregado en 40 semanas.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="#"
              className="inline-flex items-center font-body text-sm font-semibold text-forest no-underline transition-all duration-300"
              onMouseEnter={() => setLinkHovered(true)}
              onMouseLeave={() => setLinkHovered(false)}
              style={{
                gap: linkHovered ? "14px" : "8px",
                color: linkHovered ? "var(--amber)" : "var(--forest)",
              }}
            >
              Ver caso completo
              <span className="text-lg">→</span>
            </a>
          </Reveal>
        </div>

        {/* Right: metrics card */}
        <Reveal delay={0.2} direction="left">
          <div className="relative overflow-hidden bg-forest-dark rounded-2xl px-11 py-14">
            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-amber/[0.06]" />
            <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-sage/[0.05]" />

            <div className="grid grid-cols-2 gap-9 mb-9 relative z-10">
              {metrics.map((m, i) => (
                <div key={i}>
                  <div className="font-display text-[46px] font-normal text-amber leading-none mb-2">
                    {m.num}
                  </div>
                  <div className="font-body text-[11px] font-medium text-sage-muted tracking-wide">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 pt-7 border-t border-sage/[0.12]">
              <div className="font-body text-[10px] font-semibold text-sage tracking-[3px] uppercase mb-3">
                Stack tecnológico
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-body text-[11px] font-medium text-sage-muted px-3 py-1.5 rounded-full border border-sage/[0.15] bg-sage/[0.05]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
