import { Reveal } from "./Reveal";

const items = [
  {
    title: "Especialización",
    desc: "Solo trabajamos con salud, bienestar y conocimiento. Entendemos su normativa, sus pacientes y sus necesidades específicas.",
    accent: "bg-forest",
  },
  {
    title: "Propiedad total",
    desc: "El código, los datos y los servidores son suyos. No creamos dependencia — construimos autonomía.",
    accent: "bg-amber",
  },
  {
    title: "Transparencia",
    desc: "Precios claros, cronogramas reales, documentación exhaustiva. Sin sorpresas.",
    accent: "bg-sage",
  },
];

export function WhySavia() {
  return (
    <section className="bg-cream px-20 py-28">
      <Reveal>
        <span className="font-body text-[11px] font-semibold text-amber tracking-[4px] uppercase block mb-4">
          Por qué Savia
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-[clamp(32px,4vw,44px)] font-normal text-forest-dark mb-[72px] max-w-[480px] leading-[1.15]">
          Lo que nos hace diferentes
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {items.map((item, i) => (
          <Reveal key={i} delay={0.15 + i * 0.12}>
            <div>
              <div className={`w-12 h-[3px] ${item.accent} rounded-sm mb-7`} />
              <h3 className="font-body text-lg font-semibold text-forest-dark mb-4">
                {item.title}
              </h3>
              <p className="font-body text-[15px] font-normal text-warm-gray leading-[1.75]">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
