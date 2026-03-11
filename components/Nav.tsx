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
        border-b transition-all duration-500 ease-out
        ${scrolled
          ? "py-3.5 px-12 bg-forest-dark/[0.97] border-sage/20"
          : "py-5 px-12 bg-forest-dark/[0.85] border-sage/[0.08]"
        }
      `}
    >
      {/* Wordmark */}
      <a href="/" className="flex items-baseline gap-2 no-underline">
        <span className="font-display text-[28px] font-semibold text-amber tracking-tight">
          Savia
        </span>
        <span className="font-body text-[10px] font-medium text-sage tracking-[4px] uppercase">
          Studio
        </span>
      </a>

      {/* Links */}
      <div className="flex items-center gap-9">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="
              font-body text-[12px] font-medium text-sage-muted
              tracking-[1.5px] uppercase no-underline
              hover:text-amber transition-colors duration-300
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
            px-7 py-2.5 rounded-md no-underline
            tracking-[1px] uppercase
            hover:bg-amber hover:border-amber hover:text-forest-dark
            transition-all duration-300
          "
        >
          Hablemos
        </a>

        <span className="font-body text-[10px] text-warm-gray tracking-[2px] cursor-pointer hover:text-cream transition-colors duration-300">
          ES / EN
        </span>
      </div>
    </nav>
  );
}
