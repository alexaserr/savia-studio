"use client";

import dynamic from "next/dynamic";

const SDCClinicalMockup = dynamic(() => import("./SDCClinicalMockup"), { ssr: false });

const badges = [
  "5 módulos integrados",
  "100% self-hosted",
  "Cumplimiento NOM-004",
];

export function CaseStudyTabs() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <span className="font-body text-[10px] tracking-[3px] uppercase text-amber font-semibold block mb-3">
          Demo interactiva
        </span>
        <h3 className="font-display text-2xl text-forest-dark mb-2">
          Navegue la plataforma que construimos
        </h3>
        <p className="font-body text-sm text-warm-gray">
          Expediente clínico digital con cumplimiento NOM-004-SSA3-2012. Haga clic para explorar las pantallas.
        </p>
      </div>

      {/* Mockup container */}
      <div className="rounded-2xl border border-sand shadow-[0_8px_40px_rgba(45,90,39,0.06)] bg-white overflow-hidden h-[650px] overflow-y-auto">
        <SDCClinicalMockup />
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-4 mt-6">
        {badges.map((badge) => (
          <span key={badge} className="inline-flex items-center gap-2 font-body text-xs text-charcoal">
            <span className="w-2 h-2 rounded-full bg-forest shrink-0" />
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
