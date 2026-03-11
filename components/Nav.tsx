"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Nosotros", href: "#nosotros" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-xl flex items-center justify-between
        border-b border-transparent transition-all duration-700 ease-out
        ${scrolled
          ? "py-3.5 px-16 bg-forest-dark/70"
          : "py-5 px-16 bg-forest-dark/70"
        }
      `}
    >
      {/* Wordmark */}
      <a href="/" className="no-underline">
        <img
          src="/images/logo/savia-amber.png"
          alt="Savia Studio"
          className="h-9 w-auto"
        />
      </a>

      {/* Links */}
      <div className="flex items-center gap-12">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="
              font-body text-[12px] font-medium text-sage-muted
              tracking-[1.5px] uppercase no-underline
              hover:text-amber transition-colors duration-700
            "
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contacto"
          className="
            font-body text-[12px] font-medium text-cream
            bg-forest/60 border border-sage/30
            px-8 py-2.5 rounded-full no-underline
            tracking-[1px] uppercase
            hover:bg-amber hover:border-amber hover:text-forest-dark
            transition-all duration-700
          "
        >
          Hablemos
        </a>

        <span className="font-body text-[10px] text-warm-gray tracking-[2px] cursor-pointer hover:text-cream transition-colors duration-700">
          ES / EN
        </span>
      </div>
    </nav>
  );
}
