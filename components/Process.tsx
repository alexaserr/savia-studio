"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Conversación",
    detail: "30 minutos sin costo para entender su situación.",
  },
  {
    num: "02",
    title: "Propuesta",
    detail: "Alcance, cronograma e inversión. Sin sorpresas.",
  },
  {
    num: "03",
    title: "Desarrollo",
    detail: "Entregas cada 2–4 semanas. Avanzamos juntos.",
  },
  {
    num: "04",
    title: "Lanzamiento",
    detail: "Capacitación y soporte. El sistema es suyo.",
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="bg-white px-20 py-20">
      <Reveal>
        <h2 className="font-display text-[clamp(32px,4vw,44px)] font-normal text-forest-dark mb-20 max-w-[380px] leading-[1.15]">
          Cómo trabajamos
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-col sm:flex-row items-start gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start flex-1">
              <div
                className="flex flex-col py-4 cursor-default min-w-[180px]"
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <span
                  className={`font-display text-[52px] font-light leading-none transition-colors duration-500 ${
                    activeStep === i ? "text-amber" : "text-amber/40"
                  }`}
                >
                  {step.num}
                </span>
                <span
                  className={`font-body text-sm mt-2 transition-colors duration-500 ${
                    activeStep === i
                      ? "text-forest-dark font-semibold"
                      : "text-charcoal font-normal"
                  }`}
                >
                  {step.title}
                </span>

                {/* Expandable detail */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    activeStep === i
                      ? "max-h-48 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-body text-xs text-charcoal/50 leading-relaxed max-w-[220px]">
                    {step.detail}
                  </p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden sm:block w-full h-px bg-sand mx-8 mt-8 shrink" />
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
