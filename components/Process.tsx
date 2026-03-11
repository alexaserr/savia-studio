import { Reveal } from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Conversación inicial",
    desc: "30 minutos sin costo para entender su situación y evaluar si podemos ayudar.",
  },
  {
    num: "02",
    title: "Descubrimiento y propuesta",
    desc: "2–4 semanas de análisis. Entregamos propuesta con alcance, precio y cronograma exactos.",
  },
  {
    num: "03",
    title: "Desarrollo iterativo",
    desc: "Entregas cada 2–4 semanas. Usted ve avance real, no promesas.",
  },
  {
    num: "04",
    title: "Lanzamiento y soporte",
    desc: "Capacitación, documentación y soporte post-lanzamiento incluido.",
  },
];

export function Process() {
  return (
    <section className="bg-white px-20 py-28 border-t border-b border-sand">
      <Reveal>
        <span className="font-body text-[11px] font-semibold text-amber tracking-[4px] uppercase block mb-4">
          Proceso
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-[clamp(32px,4vw,44px)] font-normal text-forest-dark mb-[72px] max-w-[480px] leading-[1.15]">
          Cómo trabajamos
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <Reveal key={i} delay={0.15 + i * 0.1}>
            <div>
              <span className="font-display text-[52px] font-light text-sand leading-none block mb-4">
                {step.num}
              </span>
              <h3 className="font-body text-[15px] font-semibold text-forest-dark mb-2.5">
                {step.title}
              </h3>
              <p className="font-body text-sm font-normal text-warm-gray leading-relaxed">
                {step.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
