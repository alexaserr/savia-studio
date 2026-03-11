"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/PLACEHOLDER", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "bg-transparent border-b border-sage/30 text-cream placeholder-sage/50 font-body text-sm py-3 w-full outline-none focus:border-amber transition-colors duration-300";

  return (
    <section
      id="contacto"
      className="relative bg-forest-dark px-20 py-28 text-center overflow-hidden"
    >
      <div className="relative z-10 max-w-md mx-auto">
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

        <Reveal delay={0.25}>
          {status === "sent" ? (
            <p className="font-body text-base text-amber">
              Mensaje enviado ✓ Le responderemos pronto.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
              <input
                type="text"
                name="name"
                placeholder="Su nombre"
                required
                value={formData.name}
                onChange={handleChange}
                className={fieldClass}
              />
              <input
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                required
                value={formData.email}
                onChange={handleChange}
                className={fieldClass}
              />
              <input
                type="text"
                name="org"
                placeholder="Organización (opcional)"
                value={formData.org}
                onChange={handleChange}
                className={fieldClass}
              />
              <textarea
                name="message"
                placeholder="Cuéntenos brevemente sobre su proyecto"
                rows={3}
                required
                value={formData.message}
                onChange={handleChange}
                className={`${fieldClass} resize-none`}
              />

              <div className="flex flex-col items-center mt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="
                    font-body text-sm font-semibold
                    text-forest-dark bg-amber
                    px-10 py-4 rounded-full mt-8
                    hover:shadow-[0_8px_32px_rgba(196,132,29,0.3)] hover:-translate-y-0.5
                    transition-all duration-700
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0
                  "
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>
                <p className="font-body text-xs text-sage/40 mt-4">
                  Le responderemos en menos de 24 horas hábiles.
                </p>
                {status === "error" && (
                  <p className="font-body text-xs text-red-400 mt-2">
                    Algo salió mal. Escríbanos a hola@saviastudio.io
                  </p>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
