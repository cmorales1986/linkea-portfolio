/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const projects = [
  {
    num: "01",
    featured: true,
    status: "done",
    statusLabel: "Realizado · Linkea",
    name: "GestPy",
    desc: "Sistema SaaS de gestión empresarial para el mercado paraguayo. Módulos de compras, ventas, stock, caja, bancos y reportes con auditoría completa. Multi-empresa, planes por suscripción y onboarding guiado.",
    tech: ["Next.js 15", "Prisma", "Supabase", "Tailwind", "Vercel"],
    link: "https://gest.linkea.com.py",
    linkLabel: "Ver proyecto →",
    icon: "📊",
  },
  {
    num: "02",
    featured: false,
    status: "done",
    statusLabel: "Realizado",
    name: "Pygs Feed",
    desc: "Plataforma de gestión de alimentación y nutrición para granjas porcinas. Control de raciones, consumo y optimización de costos alimentarios.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    link: "#",
    linkLabel: "Ver proyecto →",
  },
  {
    num: "03",
    featured: false,
    status: "done",
    statusLabel: "Realizado",
    name: "Linkea Web",
    desc: "Sitio institucional y portfolio de servicios tecnológicos. Diseño orientado a conversión y captación de clientes B2B en el mercado paraguayo.",
    tech: ["WordPress", "UI/UX", "SEO"],
    link: "https://linkea.com.py",
    linkLabel: "Ver sitio →",
  },
  {
    num: "04",
    featured: false,
    status: "done",
    statusLabel: "Realizado · Mercodental",
    name: "Mercodental",
    desc: "Ecommerce especializado para el sector odontológico. Catálogo de productos dentales, gestión de pedidos y panel de administración para distribuidores.",
    tech: ["Next.js", "MongoDB", "Stripe", "Ecommerce"],
    link: "#",
    linkLabel: "Ver proyecto →",
  },
  {
    num: "05",
    featured: false,
    status: "presented",
    statusLabel: "Presentado",
    name: "Sistema Taller Mecánico",
    desc: "Sistema de gestión integral para talleres mecánicos. Control de órdenes de trabajo, inventario de repuestos, historial de vehículos y facturación.",
    tech: ["React", "Node.js", "MongoDB", "PDF Reports"],
    link: "#",
    linkLabel: "Ver propuesta →",
  },
  {
    num: "06",
    featured: false,
    status: "requested",
    statusLabel: "En desarrollo · Mega7",
    name: "Mega7 Ecommerce",
    desc: "Plataforma de ecommerce para tienda de informática. Catálogo, carrito de compras, integración de pagos y panel de gestión de stock.",
    tech: ["Next.js", "MongoDB", "Ecommerce", "En desarrollo"],
    link: "#",
    linkLabel: "En proceso →",
  },
];

const statusStyles: Record<
  string,
  { bg: string; border: string; color: string }
> = {
  done: {
    bg: "rgba(0,255,136,0.08)",
    border: "rgba(0,255,136,0.22)",
    color: "#00ff88",
  },
  presented: {
    bg: "rgba(0,212,255,0.07)",
    border: "rgba(0,212,255,0.2)",
    color: "var(--accent)",
  },
  requested: {
    bg: "rgba(251,191,36,0.07)",
    border: "rgba(251,191,36,0.2)",
    color: "#fbbf24",
  },
};

export default function Projects() {
  return (
    <section id="proyectos" className="projects-section">
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--accent)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          marginBottom: "0.8rem",
        }}
      ></div>

      <h2
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
        }}
      >
        Lo que construimos
      </h2>

      <p
        style={{
          color: "var(--muted2)",
          maxWidth: "520px",
          lineHeight: 1.75,
          marginBottom: "3.5rem",
          fontSize: "0.98rem",
        }}
      >
        Sistemas reales en producción, resolviendo problemas concretos de
        empresas paraguayas.
      </p>

      <div className="projects-grid">
        {projects.map((p) =>
          p.featured ? (
            <FeaturedCard key={p.num} {...p} />
          ) : (
            <ProjectCard key={p.num} {...p} />
          ),
        )}
      </div>

      <style>{`
        .projects-section {
          position: relative;
          z-index: 1;
          padding: 6rem 4rem;
          background: var(--bg);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }
        .featured-card {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .projects-section {
            padding: 4rem 1.5rem !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-card {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .featured-visual {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function FeaturedCard({
  num,
  status,
  statusLabel,
  name,
  desc,
  tech,
  link,
  linkLabel,
  icon,
}: any) {
  const s = statusStyles[status];
  return (
    <div
      className="featured-card"
      style={{
        background: "var(--card)",
        padding: "2.5rem",
        transition: "background 0.3s",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--card2)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--card)")}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--muted)",
            marginBottom: "0.8rem",
            letterSpacing: "0.1em",
          }}
        >
          {num} / DESTACADO
        </div>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.63rem",
            padding: "0.22rem 0.7rem",
            borderRadius: "100px",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
            textTransform: "uppercase" as const,
            background: s.bg,
            border: `1px solid ${s.border}`,
            color: s.color,
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "currentColor",
              flexShrink: 0,
            }}
          />
          {statusLabel}
        </span>

        <div
          style={{
            fontSize: "1.55rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "0.8rem",
          }}
        >
          {name}
        </div>

        <p
          style={{
            color: "var(--muted2)",
            fontSize: "0.88rem",
            lineHeight: 1.65,
            marginBottom: "1.5rem",
          }}
        >
          {desc}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: "1.5rem",
          }}
        >
          {tech.map((t: string) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                padding: "0.22rem 0.65rem",
                border: "1px solid var(--border2)",
                borderRadius: "2px",
                color: "var(--muted2)",
                letterSpacing: "0.05em",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--accent)",
            textDecoration: "none",
            letterSpacing: "0.06em",
            transition: "letter-spacing 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = "0.12em")}
          onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = "0.06em")}
        >
          {linkLabel}
        </a>
      </div>

      {/* Visual — oculto en mobile */}
      <div
        className="featured-visual"
        style={{
          background:
            "linear-gradient(135deg, var(--bg) 0%, var(--card2) 100%)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          height: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <svg
          width="260"
          height="160"
          viewBox="0 0 260 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines de fondo */}
          <line
            x1="0"
            y1="40"
            x2="260"
            y2="40"
            stroke="rgba(0,212,255,0.07)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="80"
            x2="260"
            y2="80"
            stroke="rgba(0,212,255,0.07)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="120"
            x2="260"
            y2="120"
            stroke="rgba(0,212,255,0.07)"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="160"
            stroke="rgba(0,212,255,0.05)"
            strokeWidth="1"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="160"
            stroke="rgba(0,212,255,0.05)"
            strokeWidth="1"
          />
          <line
            x1="150"
            y1="0"
            x2="150"
            y2="160"
            stroke="rgba(0,212,255,0.05)"
            strokeWidth="1"
          />
          <line
            x1="200"
            y1="0"
            x2="200"
            y2="160"
            stroke="rgba(0,212,255,0.05)"
            strokeWidth="1"
          />

          {/* Barras */}
          <rect
            x="30"
            y="90"
            width="22"
            height="50"
            rx="2"
            fill="rgba(0,212,255,0.25)"
          />
          <rect
            x="62"
            y="60"
            width="22"
            height="80"
            rx="2"
            fill="rgba(0,212,255,0.35)"
          />
          <rect
            x="94"
            y="45"
            width="22"
            height="95"
            rx="2"
            fill="rgba(0,255,136,0.30)"
          />
          <rect
            x="126"
            y="70"
            width="22"
            height="70"
            rx="2"
            fill="rgba(0,212,255,0.25)"
          />
          <rect
            x="158"
            y="35"
            width="22"
            height="105"
            rx="2"
            fill="rgba(0,255,136,0.45)"
          />
          <rect
            x="190"
            y="55"
            width="22"
            height="85"
            rx="2"
            fill="rgba(0,212,255,0.30)"
          />

          {/* Línea de tendencia */}
          <polyline
            points="41,90 73,60 105,45 137,65 169,35 201,50"
            stroke="rgba(0,255,136,0.7)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 2"
          />
          {/* Puntos en la línea */}
          <circle cx="41" cy="90" r="3" fill="#00ff88" opacity="0.8" />
          <circle cx="73" cy="60" r="3" fill="#00ff88" opacity="0.8" />
          <circle cx="105" cy="45" r="3" fill="#00ff88" opacity="0.8" />
          <circle cx="137" cy="65" r="3" fill="#00ff88" opacity="0.8" />
          <circle cx="169" cy="35" r="4" fill="#00ff88" />
          <circle cx="201" cy="50" r="3" fill="#00ff88" opacity="0.8" />

          {/* Label en el pico */}
          <rect
            x="152"
            y="18"
            width="42"
            height="14"
            rx="3"
            fill="rgba(0,255,136,0.15)"
          />
          <text
            x="173"
            y="28"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="8"
            fill="#00ff88"
          >
            +24.8%
          </text>

          {/* Etiquetas eje X */}
          <text
            x="41"
            y="152"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="7"
            fill="rgba(255,255,255,0.2)"
          >
            ENE
          </text>
          <text
            x="73"
            y="152"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="7"
            fill="rgba(255,255,255,0.2)"
          >
            FEB
          </text>
          <text
            x="105"
            y="152"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="7"
            fill="rgba(255,255,255,0.2)"
          >
            MAR
          </text>
          <text
            x="137"
            y="152"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="7"
            fill="rgba(255,255,255,0.2)"
          >
            ABR
          </text>
          <text
            x="169"
            y="152"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="7"
            fill="rgba(255,255,255,0.2)"
          >
            MAY
          </text>
          <text
            x="201"
            y="152"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="7"
            fill="rgba(255,255,255,0.2)"
          >
            JUN
          </text>
        </svg>
      </div>
    </div>
  );
}

function ProjectCard({
  num,
  status,
  statusLabel,
  name,
  desc,
  tech,
  link,
  linkLabel,
}: any) {
  const s = statusStyles[status];
  const isRequested = status === "requested";

  return (
    <div
      style={{
        background: "var(--card)",
        padding: "2.5rem",
        transition: "background 0.3s",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--card2)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--card)")}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.68rem",
          color: "var(--muted)",
          marginBottom: "0.8rem",
          letterSpacing: "0.1em",
        }}
      >
        {num}
      </div>

      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.63rem",
          padding: "0.22rem 0.7rem",
          borderRadius: "100px",
          letterSpacing: "0.08em",
          marginBottom: "1rem",
          textTransform: "uppercase" as const,
          background: s.bg,
          border: `1px solid ${s.border}`,
          color: s.color,
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "currentColor",
            flexShrink: 0,
          }}
        />
        {statusLabel}
      </span>

      <div
        style={{
          fontSize: "1.55rem",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: "0.8rem",
        }}
      >
        {name}
      </div>

      <p
        style={{
          color: "var(--muted2)",
          fontSize: "0.88rem",
          lineHeight: 1.65,
          marginBottom: "1.5rem",
        }}
      >
        {desc}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          marginBottom: "1.5rem",
        }}
      >
        {tech.map((t: string) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              padding: "0.22rem 0.65rem",
              border: "1px solid var(--border2)",
              borderRadius: "2px",
              color: "var(--muted2)",
              letterSpacing: "0.05em",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={link}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: isRequested ? "#fbbf24" : "var(--accent)",
          textDecoration: "none",
          letterSpacing: "0.06em",
          transition: "letter-spacing 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = "0.12em")}
        onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = "0.06em")}
      >
        {linkLabel}
      </a>
    </div>
  );
}
