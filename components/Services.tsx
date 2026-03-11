"use client";

import { useState } from "react";
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
    desc: "Software diseñado para su práctica: expedientes clínicos, portales de paciente, agendamiento y más. Con cumplimiento normativo mexicano.",
    Icon: Monitor,
  },
  {
    title: "Infraestructura propia",
    desc: "Servidores self-hosted, VPN, respaldos automatizados. Control total de sus datos sensibles sin depender de terceros.",
    Icon: Server,
  },
  {
    title: "Consultoría y CTO externo",
    desc: "Diagnóstico tecnológico, hoja de ruta, liderazgo técnico continuo. La claridad que necesita para tomar decisiones informadas.",
    Icon: BookOpen,
  },
  {
    title: "Identidad y comunicación",
    desc: "Marca, diseño, redes sociales y automatización de marketing. Para que su presencia digital refleje la calidad de su servicio.",
    Icon: Globe,
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const [hovered, setHovered] = useState(false);
  const { Icon } = service;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative overflow-hidden
        bg-white border rounded-xl
        px-8 py-10 cursor-default
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${hovered
          ? "border-sage -translate-y-1.5 shadow-[0_16px_48px_rgba(45,90,39,0.08),0_4px_12px_rgba(45,90,39,0.04)]"
          : "border-sand shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
        }
      `}
    >
      {/* Accent line on hover */}
      <div
        className="absolute top-0 left-8 right-8 h-0.5 bg-amber transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left"
        style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
      />

      <div
        className="mb-6 transition-opacity duration-400"
        style={{ opacity: hovered ? 1 : 0.6 }}
      >
        <Icon size={30} strokeWidth={1.5} className="text-forest" />
      </div>

      <h3 className="font-body text-base font-semibold text-forest-dark mb-3 leading-snug">
        {service.title}
      </h3>
      <p className="font-body text-sm font-normal text-warm-gray leading-relaxed">
        {service.desc}
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="bg-cream px-20 py-28">
      <Reveal>
        <span className="font-body text-[11px] font-semibold text-amber tracking-[4px] uppercase block mb-4">
          Soluciones
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-[clamp(32px,4vw,44px)] font-normal text-forest-dark mb-16 max-w-[500px] leading-[1.15]">
          Qué construimos para usted
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Reveal key={i} delay={0.15 + i * 0.1}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
