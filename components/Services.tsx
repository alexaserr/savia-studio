"use client";

import { Reveal } from "./Reveal";
import {
  Monitor,
  Server,
  BookOpen,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "Plataformas a medida",
    desc: "Software para su práctica: expedientes clínicos, portales de paciente y agendamiento con cumplimiento normativo.",
    detail: "Expedientes, portales de paciente, agendamiento y más.",
    Icon: Monitor,
  },
  {
    title: "Infraestructura propia",
    desc: "Servidores self-hosted, VPN y respaldos automatizados. Control total de sus datos sin depender de terceros.",
    detail: "Servidores, VPN, respaldos automatizados en su ubicación.",
    Icon: Server,
  },
  {
    title: "Consultoría y CTO externo",
    desc: "Diagnóstico tecnológico, hoja de ruta y liderazgo técnico continuo para decisiones informadas.",
    detail: "Diagnóstico, roadmap y liderazgo técnico continuo.",
    Icon: BookOpen,
  },
  {
    title: "Identidad y comunicación",
    desc: "Marca, diseño y automatización de marketing para que su presencia digital refleje su servicio.",
    detail: "Marca, sitio web, redes sociales y automatización.",
    Icon: Globe,
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const { Icon } = service;

  return (
    <div
      className="
        group relative overflow-hidden
        bg-white border border-transparent rounded-2xl
        p-10 min-h-[280px] cursor-default
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:border-sand hover:-translate-y-1 hover:border-b-[2px] hover:border-b-amber
      "
    >
      <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
        <Icon size={36} strokeWidth={1.25} className="text-forest" />
      </div>

      <h3 className="font-body text-base font-semibold text-forest-dark mb-4 leading-snug">
        {service.title}
      </h3>
      <p className="font-body text-sm font-normal text-warm-gray leading-relaxed">
        {service.desc}
      </p>

      {/* Detail line revealed on hover */}
      <p className="font-body text-xs text-warm-gray mt-5 opacity-0 translate-y-1.5 group-hover:opacity-70 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {service.detail}
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="bg-cream px-20 py-24">
      <Reveal>
        <h2 className="font-display text-[clamp(32px,4vw,44px)] font-normal text-forest-dark mb-16 max-w-[440px] leading-[1.15]">
          Qué construimos
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <Reveal key={i} delay={0.1 + i * 0.08}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
