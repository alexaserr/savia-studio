import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative bg-forest-dark px-20 py-28 text-center overflow-hidden"
    >
      <div className="relative z-10 max-w-[520px] mx-auto">
        <Reveal>
          <h2 className="font-display text-5xl font-normal text-cream leading-[1.1] mb-6">
            ¿Conversamos?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-body text-base font-light text-sage-muted leading-[1.75] mb-12">
            30 minutos. Sin compromiso. Sin costo.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href="mailto:hola@saviastudio.io"
            className="
              inline-block font-body text-sm font-semibold
              text-forest-dark bg-amber
              px-11 py-4 rounded-full no-underline tracking-wide
              hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(196,132,29,0.3)]
              transition-all duration-700
            "
          >
            Agendar conversación
          </a>
        </Reveal>
      </div>
    </section>
  );
}
