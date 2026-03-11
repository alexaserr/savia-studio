"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { CaseStudyTabs } from "./case-study/CaseStudyTabs";

const metrics = [
  { num: "60+", label: "Requerimientos" },
  { num: "100%", label: "Self-hosted" },
  { num: "10+", label: "Documentos técnicos" },
  { num: "40", label: "Semanas de desarrollo" },
];

export function CaseStudy() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="trabajo" className="relative bg-cream px-20 py-24">
      {/* Subtle separator */}
      <div className="w-16 h-px bg-sand mx-auto mb-20" />

      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <span className="font-body text-[11px] font-semibold text-amber tracking-[4px] uppercase block mb-5">
            Caso de estudio
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-normal text-forest-dark leading-[1.15] mb-6 max-w-2xl mx-auto">
            Ecosistema digital para centro de sanación energética
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-body text-[15px] font-normal text-warm-gray leading-[1.75] mb-12 max-w-lg mx-auto">
            Plataforma clínica completa con cumplimiento NOM-004-SSA3-2012,
            infraestructura self-hosted y documentación exhaustiva.
            Entregado en 40 semanas.
          </p>
        </Reveal>

        {/* Metrics */}
        <Reveal delay={0.25}>
          <div className="flex flex-wrap justify-center gap-12 mb-14">
            {metrics.map((m, i) => (
              <div key={i} className="text-center min-w-[100px]">
                <div className="font-display text-5xl font-normal text-amber leading-none mb-2">
                  {m.num}
                </div>
                <div className="font-body text-xs text-warm-gray uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <button
            onClick={() => setShowDemo(!showDemo)}
            className="inline-block font-body text-sm font-semibold text-cream bg-forest px-8 py-3 rounded-full no-underline tracking-wide hover:bg-forest-dark transition-all duration-700 cursor-pointer border-none"
          >
            {showDemo ? "Cerrar demo ×" : "Ver caso completo →"}
          </button>
        </Reveal>
      </div>

      {/* Interactive demo */}
      <div
        className={`transition-all duration-700 ease-out overflow-hidden ${
          showDemo ? "max-h-[900px] opacity-100 mt-20" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <CaseStudyTabs />
        </div>
      </div>
    </section>
  );
}
