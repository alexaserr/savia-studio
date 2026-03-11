"use client";

import { useState } from "react";

const font = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const C = {
  bg:            "#FAF7F2",
  card:          "#FFFFFF",
  sidebar:       "#1B3A18",
  text:          "#2C2C2C",
  textSecondary: "#9B9286",
  accent:        "#2D5A27",
  amber:         "#A8B99C",
  sand:          "#E8E0D4",
  sage:          "#A8B99C",
  sageMuted:     "#C5D1BC",
  border:        "rgba(0,0,0,0.06)",
  hoverBg:       "rgba(0,0,0,0.02)",
};

const cardShadow = "0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.02)";
const t = "all 0.2s ease";

const CHAKRA_DATA = [
  { name: "Raíz",        ini: 8,  fin: 11 },
  { name: "Sacro",       ini: 6,  fin: 9  },
  { name: "Plexo Solar", ini: 10, fin: 12 },
  { name: "Corazón",     ini: 12, fin: 13 },
  { name: "Garganta",    ini: 7,  fin: 10 },
  { name: "Tercer Ojo",  ini: 5,  fin: 8  },
  { name: "Corona",      ini: 9,  fin: 12 },
];

// ─── Sidebar ────────────────────────────────────────────────────────────────

const Sidebar = ({ active, onNav }) => {
  const items = [
    { id: "dashboard", label: "Dashboard"  },
    { id: "patients",  label: "Pacientes"  },
    { id: "sessions",  label: "Sesiones"   },
  ];
  return (
    <div style={{
      width: 220, minHeight: "100%", background: C.sidebar,
      display: "flex", flexDirection: "column", fontFamily: font,
    }}>
      {/* Logo */}
      <div style={{ padding: "28px 24px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 300, color: C.sage, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>
          Centro de Bienestar
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#fff", letterSpacing: -0.3 }}>
          Integral
        </div>
        <div style={{ width: 24, height: 1, background: C.amber, opacity: 0.4, marginTop: 12 }} />
      </div>

      {/* Nav */}
      <nav style={{ padding: "8px 0", flex: 1 }}>
        {items.map(it => (
          <div
            key={it.id}
            onClick={() => onNav(it.id)}
            style={{
              padding: "12px 24px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
              background: active === it.id ? "rgba(255,255,255,0.06)" : "transparent",
              fontSize: 13, fontWeight: active === it.id ? 600 : 400,
              color: active === it.id ? "#fff" : C.sageMuted,
              transition: t,
            }}
          >
            {active === it.id && (
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.amber, flexShrink: 0 }} />
            )}
            {it.label}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: "16px 24px", fontSize: 10, color: C.sage, opacity: 0.3, letterSpacing: 0.5 }}>
        Demo · Savia Studio
      </div>
    </div>
  );
};

// ─── TopBar ──────────────────────────────────────────────────────────────────

const TopBar = ({ title }) => (
  <div style={{
    height: 48, background: "transparent",
    borderBottom: `1px solid ${C.border}`,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 28px", fontFamily: font, flexShrink: 0,
  }}>
    <span style={{ fontSize: 14, fontWeight: 600, color: C.text, letterSpacing: -0.2 }}>{title}</span>
    <span style={{ fontSize: 12, color: C.textSecondary }}>Admin</span>
  </div>
);

// ─── Dashboard ───────────────────────────────────────────────────────────────

const MetricCard = ({ label, value, sub }) => (
  <div style={{
    background: C.card, borderRadius: 20, padding: "24px 24px 20px",
    boxShadow: cardShadow, fontFamily: font,
  }}>
    <div style={{ fontSize: 10, color: C.textSecondary, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
      {label}
    </div>
    <div style={{ fontSize: 40, fontWeight: 200, color: C.text, letterSpacing: -1, lineHeight: 1 }}>
      {value}
    </div>
    {sub && (
      <div style={{ fontSize: 11, color: C.accent, marginTop: 8 }}>{sub}</div>
    )}
  </div>
);

const DashboardScreen = ({ onNav }) => {
  const patients = ["María Fernanda López", "Carlos Eduardo Ramírez", "Ana Gabriela Torres", "José Miguel Hernández", "Lucía Valentina Díaz"];
  const dates    = ["8 mar", "7 mar", "5 mar", "3 mar", "1 mar"];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ padding: "28px", fontFamily: font }}>
      {/* Greeting */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 24, fontWeight: 200, color: C.text, letterSpacing: -0.5, lineHeight: 1.2 }}>
          Buenos días
        </div>
        <div style={{ fontSize: 13, color: C.textSecondary, marginTop: 4 }}>
          Resumen de su práctica
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 36 }}>
        <MetricCard label="Pacientes Activos" value="364" sub="+2 este mes" />
        <MetricCard label="Sesiones este Mes" value="18"  sub="↑ 12% vs anterior" />
        <MetricCard label="Total Sesiones"    value="783" />
        <MetricCard label="Energía Promedio"  value="62.4" sub="Nivel general" />
      </div>

      {/* Recent patients */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: C.text, letterSpacing: -0.2 }}>Pacientes recientes</span>
        <button onClick={() => onNav("patients")} style={{
          background: "none", border: "none", fontSize: 12, color: C.textSecondary,
          cursor: "pointer", fontFamily: font, transition: t,
          padding: 0,
        }}
          onMouseEnter={e => (e.currentTarget.style.color = C.accent)}
          onMouseLeave={e => (e.currentTarget.style.color = C.textSecondary)}
        >Ver todos →</button>
      </div>

      <div>
        {patients.map((name, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "12px 16px", borderRadius: 12,
              background: hovered === i ? C.hoverBg : "transparent",
              transition: t, cursor: "default",
            }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: "50%", background: C.sand,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 600, color: C.accent, flexShrink: 0,
            }}>
              {name[0]}{name.split(" ")[1]?.[0]}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: C.text }}>{name}</div>
              <div style={{ fontSize: 12, color: C.textSecondary, marginTop: 1 }}>Última sesión: {dates[i]} 2026</div>
            </div>
            <button
              onClick={() => onNav("detail")}
              style={{
                background: "none", border: "none", fontSize: 12, color: C.amber,
                cursor: "pointer", fontFamily: font, transition: t,
                opacity: hovered === i ? 1 : 0, padding: 0,
              }}
            >Ver ficha</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Patients ─────────────────────────────────────────────────────────────────

const PatientsScreen = ({ onNav }) => {
  const patients = [
    { name: "María Fernanda López",     sessions: 12, last: "8 mar 2026"   },
    { name: "Carlos Eduardo Ramírez",   sessions: 8,  last: "7 mar 2026"   },
    { name: "Ana Gabriela Torres",      sessions: 15, last: "5 mar 2026"   },
    { name: "José Miguel Hernández",    sessions: 3,  last: "3 mar 2026"   },
    { name: "Lucía Valentina Díaz",     sessions: 22, last: "1 mar 2026"   },
    { name: "Roberto Alejandro Martín", sessions: 6,  last: "28 feb 2026"  },
    { name: "Sofía Isabella Morales",   sessions: 10, last: "25 feb 2026"  },
    { name: "Diego Fernando Castillo",  sessions: 4,  last: "20 feb 2026"  },
  ];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ padding: "28px", fontFamily: font }}>
      {/* Toolbar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <input placeholder="Buscar paciente..." style={{
          borderRadius: 9999, background: C.card, border: `1px solid ${C.border}`,
          padding: "10px 20px", fontSize: 13, color: C.text, outline: "none",
          fontFamily: font, width: 260, boxShadow: cardShadow,
        }} />
        <button style={{
          borderRadius: 9999, background: C.accent, color: "#fff", border: "none",
          padding: "10px 20px", fontSize: 12, fontWeight: 500, cursor: "pointer",
          fontFamily: font, transition: t, boxShadow: "0 2px 8px rgba(45,90,39,0.2)",
        }}>+ Nuevo Paciente</button>
      </div>

      {/* Header row */}
      <div style={{
        display: "flex", padding: "0 16px 10px", borderBottom: `1px solid ${C.border}`,
        marginBottom: 4,
      }}>
        {[["Nombre", 2], ["Sesiones", 1], ["Última sesión", 1], ["", 1]].map(([h, f], i) => (
          <div key={i} style={{ flex: f as number, fontSize: 10, color: C.textSecondary, textTransform: "uppercase", letterSpacing: 1.5 }}>
            {h}
          </div>
        ))}
      </div>

      {/* Rows */}
      {patients.map((p, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            display: "flex", alignItems: "center", padding: "12px 16px",
            borderRadius: 12, background: hovered === i ? C.hoverBg : "transparent",
            transition: t,
          }}
        >
          <div style={{ flex: 2, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 34, height: 34, borderRadius: "50%", background: C.sand,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 600, color: C.accent, flexShrink: 0,
            }}>
              {p.name[0]}{p.name.split(" ")[1]?.[0]}
            </div>
            <span style={{ fontSize: 14, fontWeight: 500, color: C.text }}>{p.name}</span>
          </div>
          <div style={{ flex: 1, fontSize: 13, color: C.textSecondary }}>{p.sessions}</div>
          <div style={{ flex: 1, fontSize: 13, color: C.textSecondary }}>{p.last}</div>
          <div style={{ flex: 1, display: "flex", gap: 8, opacity: hovered === i ? 1 : 0, transition: t }}>
            <button onClick={() => onNav("detail")} style={{
              background: "none", border: "none", fontSize: 12, color: C.accent,
              cursor: "pointer", fontFamily: font, padding: 0, transition: t,
            }}>Ver</button>
            <button onClick={() => onNav("wizard")} style={{
              background: "none", border: "none", fontSize: 12, color: C.amber,
              cursor: "pointer", fontFamily: font, padding: 0, transition: t,
            }}>+ Sesión</button>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, padding: "0 16px" }}>
        <span style={{ fontSize: 11, color: C.textSecondary }}>Mostrando 1–8 de 364 pacientes</span>
        <div style={{ display: "flex", gap: 4 }}>
          {[1, 2, 3, "…", 19].map((n, i) => (
            <span key={i} style={{
              padding: "4px 10px", borderRadius: 8, fontSize: 11, cursor: "pointer",
              background: n === 1 ? C.accent : "transparent",
              color: n === 1 ? "#fff" : C.textSecondary, transition: t,
            }}>{n}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Patient Detail ───────────────────────────────────────────────────────────

const PatientDetailScreen = ({ onNav }) => {
  const [tab, setTab] = useState("personal");
  const sessions = [
    { date: "8 mar 2026",  type: "Sanación Energética", energy: 68, cost: "$1,500" },
    { date: "22 feb 2026", type: "Limpieza General",    energy: 55, cost: "$1,200" },
    { date: "10 feb 2026", type: "Sanación Energética", energy: 72, cost: "$1,500" },
  ];

  return (
    <div style={{ padding: "28px", fontFamily: font }}>
      {/* Back */}
      <button onClick={() => onNav("patients")} style={{
        background: "none", border: "none", fontSize: 12, color: C.textSecondary,
        cursor: "pointer", fontFamily: font, padding: 0, marginBottom: 20, transition: t,
      }}
        onMouseEnter={e => (e.currentTarget.style.color = C.accent)}
        onMouseLeave={e => (e.currentTarget.style.color = C.textSecondary)}
      >← Pacientes</button>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 200, color: C.text, letterSpacing: -0.5, marginBottom: 12 }}>
            María Fernanda López
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["40 años", "12 sesiones", "Desde ene 2025", "Psicóloga"].map((pill, i) => (
              <span key={i} style={{
                background: C.sand, borderRadius: 9999, padding: "4px 12px",
                fontSize: 11, color: C.text,
              }}>{pill}</span>
            ))}
          </div>
        </div>
        <button onClick={() => onNav("wizard")} style={{
          background: C.accent, color: "#fff", border: "none", borderRadius: 9999,
          padding: "10px 22px", fontSize: 13, fontWeight: 500, cursor: "pointer",
          fontFamily: font, transition: t, boxShadow: "0 2px 8px rgba(45,90,39,0.2)",
        }}>+ Nueva Sesión</button>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: `1px solid ${C.border}`, marginBottom: 24 }}>
        {[["personal", "Datos Personales"], ["history", "Historial de Sesiones"]].map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} style={{
            background: "none", border: "none", padding: "10px 20px 12px",
            fontSize: 13, cursor: "pointer", fontFamily: font, transition: t,
            color: tab === id ? C.accent : C.textSecondary,
            fontWeight: tab === id ? 600 : 400,
            borderBottom: `2px solid ${tab === id ? C.accent : "transparent"}`,
            marginBottom: -1,
          }}>{label}</button>
        ))}
      </div>

      {tab === "personal" ? (
        <div>
          {/* Personal data */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
            {[
              ["Fecha de nacimiento", "15/06/1985"], ["Estado civil", "Casada"],
              ["Lugar de nacimiento", "CDMX"],       ["Lugar de residencia", "Pedregal"],
              ["Profesión", "Psicóloga"],            ["Hijos", "2"],
              ["Hermanos", "3"],                     ["Orden de nacimiento", "2°"],
              ["Motivación de visita", "Dolor crónico de espalda"],
            ].map(([k, v], i) => (
              <div key={i} style={{ padding: "14px 0", borderBottom: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 10, color: C.textSecondary, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 5 }}>{k}</div>
                <div style={{ fontSize: 14, color: C.text, fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Chakra evaluation */}
          <div style={{ marginTop: 32 }}>
            <div style={{ fontSize: 10, color: C.textSecondary, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 20 }}>
              Última evaluación energética
            </div>
            {CHAKRA_DATA.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <span style={{ fontSize: 12, color: C.text, width: 90, fontWeight: 400 }}>{c.name}</span>
                <div style={{ flex: 1, height: 4, background: C.sand, borderRadius: 9999, overflow: "hidden" }}>
                  <div style={{
                    width: `${(c.fin / 14) * 100}%`, height: "100%",
                    background: `linear-gradient(90deg, ${C.sageMuted}, ${C.accent})`,
                    borderRadius: 9999,
                  }} />
                </div>
                <span style={{ fontSize: 11, color: C.textSecondary, width: 32, textAlign: "right" }}>{c.fin}/14</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {sessions.map((s, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: "16px 0", borderBottom: i < sessions.length - 1 ? `1px solid ${C.border}` : "none",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.sage, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: C.text }}>{s.type}</div>
                <div style={{ fontSize: 12, color: C.textSecondary, marginTop: 2 }}>{s.date}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: C.textSecondary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>Energía</div>
                <div style={{ fontSize: 16, fontWeight: 200, color: C.accent, letterSpacing: -0.5 }}>{s.energy}%</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: C.textSecondary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>Costo</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: C.text }}>{s.cost}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Wizard ───────────────────────────────────────────────────────────────────

const WizardScreen = ({ onNav }) => {
  const [step, setStep] = useState(0);
  const steps = ["General", "Energía Inicial", "Chakras Inicial", "Temas", "Energía Final", "Chakras Final", "Cierre", "Resumen"];

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: 12,
    border: `1px solid ${C.border}`, fontSize: 13,
    color: C.text, background: C.bg, boxSizing: "border-box",
    fontFamily: font, outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 10, color: C.textSecondary, display: "block",
    marginBottom: 6, textTransform: "uppercase", letterSpacing: 1.5,
  };

  const EnergyBar = ({ label, value }: { label: string; value: number }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: C.text, fontWeight: 400 }}>{label}</span>
        <span style={{ fontSize: 12, color: C.textSecondary }}>{value}</span>
      </div>
      <div style={{ height: 4, background: C.sand, borderRadius: 9999, overflow: "hidden" }}>
        <div style={{
          width: `${value}%`, height: "100%",
          background: `linear-gradient(90deg, ${C.sageMuted}, ${C.accent})`,
          borderRadius: 9999,
        }} />
      </div>
    </div>
  );

  const ChakraBar = ({ name, value }: { name: string; value: number }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
      <span style={{ fontSize: 12, color: C.text, width: 90 }}>{name}</span>
      <div style={{ flex: 1, height: 4, background: C.sand, borderRadius: 9999, overflow: "hidden" }}>
        <div style={{
          width: `${(value / 14) * 100}%`, height: "100%",
          background: `linear-gradient(90deg, ${C.sageMuted}, ${C.accent})`,
          borderRadius: 9999,
        }} />
      </div>
      <span style={{ fontSize: 11, color: C.textSecondary, width: 32, textAlign: "right" }}>{value}/14</span>
    </div>
  );

  const CompareBar = ({ label, ini, fin }: { label: string; ini: number; fin: number }) => {
    const delta = fin - ini;
    return (
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 13, color: C.text }}>{label}</span>
          <span style={{ fontSize: 11, color: C.textSecondary }}>
            {ini} → <span style={{ fontWeight: 600, color: C.text }}>{fin}</span>
            {"  "}
            <span style={{
              fontSize: 10, fontWeight: 600,
              color: delta > 0 ? C.accent : "#922B21",
              background: delta > 0 ? "rgba(45,90,39,0.08)" : "rgba(146,43,33,0.08)",
              padding: "1px 6px", borderRadius: 9999,
            }}>
              {delta > 0 ? "+" : ""}{delta}
            </span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ flex: 1, height: 4, background: C.sand, borderRadius: 9999, overflow: "hidden" }}>
            <div style={{ width: `${ini}%`, height: "100%", background: C.sageMuted, borderRadius: 9999 }} />
          </div>
          <div style={{ flex: 1, height: 4, background: C.sand, borderRadius: 9999, overflow: "hidden" }}>
            <div style={{
              width: `${fin}%`, height: "100%",
              background: `linear-gradient(90deg, ${C.sageMuted}, ${C.accent})`,
              borderRadius: 9999,
            }} />
          </div>
        </div>
      </div>
    );
  };

  const energyDims    = ["Vitalidad", "Emocional", "Mental", "Espiritual", "Creatividad", "Voluntad", "Comunicación", "Intuición", "Conexión"];
  const energyIni     = [72, 45, 58, 80, 63, 55, 70, 48, 75];
  const energyFin     = [82, 65, 70, 88, 75, 68, 80, 62, 85];
  const chakraIni     = [8, 6, 10, 12, 7, 5, 9];
  const chakraFin     = [11, 9, 12, 13, 10, 8, 12];
  const chakraNames   = CHAKRA_DATA.map(c => c.name);

  const stepContents: React.ReactNode[] = [
    // 0 — General
    <div key={0}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[["Paciente", "María Fernanda López"], ["Tipo de Terapia", "Sanación Energética"], ["Fecha", "11 mar 2026"], ["Energía General", "65"]].map(([l, v], i) => (
          <div key={i}><label style={labelStyle}>{l}</label><input value={v} readOnly style={inputStyle} /></div>
        ))}
      </div>
      <div style={{ marginTop: 14 }}>
        <label style={labelStyle}>Notas</label>
        <textarea rows={3} placeholder="Observaciones generales de la sesión..." style={{ ...inputStyle, resize: "none" }} />
      </div>
    </div>,

    // 1 — Energía Inicial
    <div key={1}>
      <p style={{ fontSize: 12, color: C.textSecondary, margin: "0 0 20px" }}>Escala 0–100 por dimensión.</p>
      {energyDims.map((d, i) => <EnergyBar key={i} label={d} value={energyIni[i]} />)}
    </div>,

    // 2 — Chakras Inicial
    <div key={2}>
      <p style={{ fontSize: 12, color: C.textSecondary, margin: "0 0 20px" }}>Escala 0–14 nativa.</p>
      {chakraNames.map((n, i) => <ChakraBar key={i} name={n} value={chakraIni[i]} />)}
    </div>,

    // 3 — Temas
    <div key={3}>
      {[{ topic: "Relación de pareja", pct: 60, src: "Emocional" }, { topic: "Estrés laboral", pct: 40, src: "Mental" }, { topic: "Dolor lumbar", pct: 75, src: "Físico" }].map((t2, i) => (
        <div key={i} style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: C.text }}>{t2.topic}</span>
            <span style={{
              fontSize: 10, color: C.textSecondary, background: C.sand,
              padding: "3px 10px", borderRadius: 9999,
            }}>{t2.src}</span>
          </div>
          <div style={{ height: 4, background: C.sand, borderRadius: 9999, overflow: "hidden" }}>
            <div style={{ width: `${t2.pct}%`, height: "100%", background: `linear-gradient(90deg, ${C.sageMuted}, ${C.accent})`, borderRadius: 9999 }} />
          </div>
        </div>
      ))}
      <button style={{
        background: "none", border: `1px dashed ${C.sand}`, borderRadius: 12,
        padding: "10px", width: "100%", fontSize: 12, color: C.textSecondary,
        cursor: "pointer", fontFamily: font, marginTop: 8,
      }}>+ Agregar tema</button>
    </div>,

    // 4 — Energía Final
    <div key={4}>
      <p style={{ fontSize: 12, color: C.textSecondary, margin: "0 0 20px" }}>Comparativa inicial → final.</p>
      {energyDims.map((d, i) => <CompareBar key={i} label={d} ini={energyIni[i]} fin={energyFin[i]} />)}
    </div>,

    // 5 — Chakras Final
    <div key={5}>
      <p style={{ fontSize: 12, color: C.textSecondary, margin: "0 0 20px" }}>Comparativa chakras. Escala 0–14.</p>
      {chakraNames.map((n, i) => {
        const delta = chakraFin[i] - chakraIni[i];
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
            <span style={{ fontSize: 12, color: C.text, width: 90 }}>{n}</span>
            <div style={{ flex: 1, display: "flex", gap: 4 }}>
              <div style={{ flex: 1, height: 4, background: C.sand, borderRadius: 9999, overflow: "hidden" }}>
                <div style={{ width: `${(chakraIni[i] / 14) * 100}%`, height: "100%", background: C.sageMuted, borderRadius: 9999 }} />
              </div>
              <div style={{ flex: 1, height: 4, background: C.sand, borderRadius: 9999, overflow: "hidden" }}>
                <div style={{ width: `${(chakraFin[i] / 14) * 100}%`, height: "100%", background: `linear-gradient(90deg, ${C.sageMuted}, ${C.accent})`, borderRadius: 9999 }} />
              </div>
            </div>
            <span style={{ fontSize: 10, color: C.textSecondary, width: 36, textAlign: "right" }}>{chakraIni[i]}→{chakraFin[i]}</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: C.accent, background: "rgba(45,90,39,0.08)", padding: "1px 6px", borderRadius: 9999 }}>+{delta}</span>
          </div>
        );
      })}
    </div>,

    // 6 — Cierre
    <div key={6}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        {[["Costo", "$1,500.00"], ["Notas de pago", "Transferencia BBVA"], ["Entidades", "3"], ["Implantes", "1"]].map(([l, v], i) => (
          <div key={i}><label style={labelStyle}>{l}</label><input value={v} readOnly style={inputStyle} /></div>
        ))}
      </div>
      <div><label style={labelStyle}>Limpiezas Totales</label><input value="5" readOnly style={{ ...inputStyle, width: 120 }} /></div>
    </div>,

    // 7 — Resumen
    <div key={7}>
      <div style={{
        background: "rgba(45,90,39,0.05)", borderRadius: 16,
        padding: "20px 24px", marginBottom: 24, textAlign: "center",
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%", background: C.accent,
          margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 8l4 4 8-8"/>
          </svg>
        </div>
        <div style={{ fontSize: 14, fontWeight: 500, color: C.accent }}>Sesión lista para guardar</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.border, borderRadius: 16, overflow: "hidden" }}>
        {[["Paciente", "María F. López"], ["Terapia", "Sanación Energética"], ["Energía General", "65 → 82"], ["Chakra Promedio", "8.1 → 10.7"], ["Temas tratados", "3"], ["Costo", "$1,500"], ["Entidades", "3"], ["Implantes", "1"]].map(([k, v], i) => (
          <div key={i} style={{ padding: "14px 18px", background: C.card }}>
            <div style={{ fontSize: 10, color: C.textSecondary, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 5 }}>{k}</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: C.text }}>{v}</div>
          </div>
        ))}
      </div>
    </div>,
  ];

  return (
    <div style={{ padding: "28px", fontFamily: font }}>
      <button onClick={() => onNav("detail")} style={{
        background: "none", border: "none", fontSize: 12, color: C.textSecondary,
        cursor: "pointer", fontFamily: font, padding: 0, marginBottom: 20, transition: t,
      }}
        onMouseEnter={e => (e.currentTarget.style.color = C.accent)}
        onMouseLeave={e => (e.currentTarget.style.color = C.textSecondary)}
      >← Ficha del paciente</button>

      <div style={{ fontSize: 20, fontWeight: 300, color: C.text, letterSpacing: -0.4, marginBottom: 28 }}>
        Nueva Sesión
      </div>

      {/* Stepper */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 28, overflow: "auto", paddingBottom: 4 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "none" }}>
            <div onClick={() => setStep(i)} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", minWidth: 52 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%", marginBottom: 5,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 600, transition: t,
                background: i === step ? C.accent : i < step ? C.sage : "transparent",
                border: i >= step ? (i === step ? "none" : `1.5px solid ${C.sand}`) : "none",
                color: i <= step ? "#fff" : C.textSecondary,
              }}>
                {i < step ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6l3 3 5-5"/>
                  </svg>
                ) : i + 1}
              </div>
              <div style={{ fontSize: 9, color: i === step ? C.accent : C.textSecondary, fontWeight: i === step ? 600 : 400, textAlign: "center", letterSpacing: 0.3, whiteSpace: "nowrap" }}>{s}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 1, background: i < step ? C.sage : C.sand, margin: "0 4px", marginBottom: 18 }} />
            )}
          </div>
        ))}
      </div>

      {/* Step card */}
      <div style={{ background: C.card, borderRadius: 20, boxShadow: cardShadow, padding: "28px", minHeight: 280 }}>
        <div style={{ fontSize: 10, color: C.textSecondary, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 20 }}>
          {steps[step]}
        </div>
        {stepContents[step]}
      </div>

      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
        <button
          onClick={() => step > 0 && setStep(step - 1)}
          style={{
            background: "none", border: "none", fontSize: 13, color: step === 0 ? C.sand : C.textSecondary,
            cursor: step === 0 ? "default" : "pointer", fontFamily: font, padding: 0, transition: t,
          }}
        >← Anterior</button>
        <button
          onClick={() => step < 7 ? setStep(step + 1) : onNav("detail")}
          style={{
            background: C.accent, color: "#fff", border: "none", borderRadius: 9999,
            padding: "10px 28px", fontSize: 13, fontWeight: 500, cursor: "pointer",
            fontFamily: font, transition: t, boxShadow: "0 2px 8px rgba(45,90,39,0.2)",
          }}
        >{step === 7 ? "Guardar Sesión" : "Siguiente →"}</button>
      </div>
    </div>
  );
};

// ─── Sessions placeholder ────────────────────────────────────────────────────

const SessionsScreen = ({ onNav }) => (
  <div style={{ padding: "28px", fontFamily: font }}>
    <div style={{ fontSize: 24, fontWeight: 200, color: C.text, letterSpacing: -0.5, marginBottom: 8 }}>Sesiones</div>
    <div style={{ fontSize: 13, color: C.textSecondary, marginBottom: 32 }}>Vista de todas las sesiones registradas</div>
    <div style={{ background: C.card, borderRadius: 20, boxShadow: cardShadow, padding: "48px", textAlign: "center" }}>
      <div style={{ fontSize: 13, color: C.textSecondary, marginBottom: 20 }}>
        Próximamente: filtros por fecha, terapeuta y tipo de sesión.
      </div>
      <button onClick={() => onNav("wizard")} style={{
        background: C.accent, color: "#fff", border: "none", borderRadius: 9999,
        padding: "10px 24px", fontSize: 13, fontWeight: 500, cursor: "pointer",
        fontFamily: font, transition: t, boxShadow: "0 2px 8px rgba(45,90,39,0.2)",
      }}>+ Nueva Sesión</button>
    </div>
  </div>
);

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function SDCMockup() {
  const [screen, setScreen] = useState("dashboard");
  const [sidebarActive, setSidebarActive] = useState("dashboard");

  const handleNav = (target: string) => {
    if (target === "wizard") { setScreen("wizard"); setSidebarActive("sessions"); return; }
    if (target === "detail") { setScreen("detail"); setSidebarActive("patients"); return; }
    setScreen(target);
    setSidebarActive(target);
  };

  const titles: Record<string, string> = {
    dashboard: "Dashboard", patients: "Pacientes",
    sessions: "Sesiones", detail: "Ficha del Paciente", wizard: "Nueva Sesión",
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: C.bg, fontFamily: font }}>
      <Sidebar active={sidebarActive} onNav={handleNav} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <TopBar title={titles[screen] || "Dashboard"} />
        <div style={{ flex: 1, overflow: "auto" }}>
          {screen === "dashboard" && <DashboardScreen onNav={handleNav} />}
          {screen === "patients"  && <PatientsScreen  onNav={handleNav} />}
          {screen === "detail"    && <PatientDetailScreen onNav={handleNav} />}
          {screen === "wizard"    && <WizardScreen    onNav={handleNav} />}
          {screen === "sessions"  && <SessionsScreen  onNav={handleNav} />}
        </div>
      </div>
    </div>
  );
}
