import { Reveal } from "./Reveal";

const stack = [
  "Python/FastAPI",
  "Next.js/TypeScript",
  "PostgreSQL",
  "Docker",
  "Tailscale",
  "NAS Self-hosted",
];

export function Founder() {
  return (
    <section id="nosotros" className="bg-cream px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
          {/* Photo placeholder */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="aspect-[3/4] bg-sand rounded-2xl border border-sage/20 flex flex-col items-center justify-center gap-3 text-warm-gray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-25"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
              <span className="font-body text-sm text-warm-gray/60">Foto próximamente</span>
            </div>
          </Reveal>

          {/* Bio */}
          <div className="lg:col-span-3">
            <Reveal>
              <span className="font-body text-[11px] font-semibold text-amber tracking-[3px] uppercase block mb-8">
                Quién está detrás
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl text-forest-dark mb-2">
                Alexa Serrano
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-body text-sm text-amber font-medium tracking-wide mb-8">
                Fundadora · Ingeniera de Software
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-base text-charcoal leading-[1.8]">
                Desarrolladora fullstack con experiencia en arquitectura de sistemas, infraestructura
                self-hosted y cumplimiento normativo mexicano. Antes de fundar Savia Studio, desarrolló
                ecosistemas digitales completos para el sector salud, incluyendo plataformas con
                cumplimiento NOM-004-SSA3-2012 y LFPDPPP.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="font-body text-sm text-charcoal/50 leading-relaxed mb-12 mt-6">
                Antes de fundar Savia Studio, trabajó en ingeniería de infraestructura en Ericsson y ha publicado sobre política tecnológica en ASIET y DPL News. Participa como ponente en conferencias de tecnología organizadas por el Gobierno de la Ciudad de México.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="w-12 h-[2px] bg-amber rounded-full mb-8" />
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] text-forest/60 bg-forest/[0.05] px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
