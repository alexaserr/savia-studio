import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative bg-forest-dark px-20 py-36 text-center overflow-hidden grain"
    >
      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 130%, rgba(196,132,29,0.07) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-[620px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(32px,4vw,46px)] font-normal text-cream leading-[1.15] mb-6">
            ¿Listo para profesionalizar la tecnología de su práctica?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-body text-base font-light text-sage-muted leading-[1.75] mb-11">
            Una conversación de 30 minutos es todo lo que necesitamos para
            entender su situación y decirle si podemos ayudar. Sin compromiso.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href="mailto:hola@saviastudio.io"
            className="
              inline-block font-body text-sm font-semibold
              text-forest-dark bg-amber
              px-11 py-4.5 rounded-md no-underline tracking-wide
              hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(196,132,29,0.3)]
              transition-all duration-400
            "
          >
            Agendar conversación
          </a>
        </Reveal>
      </div>
    </section>
  );
}
