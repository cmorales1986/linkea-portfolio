/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

const projects = [
  {
    num: '01', featured: true,
    status: 'done', statusLabel: 'Realizado · Paraguay Pork',
    name: 'Pygs System',
    desc: 'Sistema integral de gestión para la industria porcina. Administración de inventario, trazabilidad de animales, reportes productivos y control de costos en tiempo real.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Vercel'],
    link: '#', linkLabel: 'Ver proyecto →', icon: '🐖',
  },
  {
    num: '02', featured: false,
    status: 'done', statusLabel: 'Realizado',
    name: 'Pygs Feed',
    desc: 'Plataforma de gestión de alimentación y nutrición para granjas porcinas. Control de raciones, consumo y optimización de costos alimentarios.',
    tech: ['Next.js', 'MongoDB', 'Tailwind'],
    link: '#', linkLabel: 'Ver proyecto →',
  },
  {
    num: '03', featured: false,
    status: 'done', statusLabel: 'Realizado',
    name: 'Linkea Web',
    desc: 'Sitio institucional y portfolio de servicios tecnológicos. Diseño orientado a conversión y captación de clientes B2B en el mercado paraguayo.',
    tech: ['WordPress', 'UI/UX', 'SEO'],
    link: 'https://linkea.com.py', linkLabel: 'Ver sitio →',
  },
  {
    num: '04', featured: false,
    status: 'done', statusLabel: 'Realizado · Mercodental',
    name: 'Mercodental',
    desc: 'Ecommerce especializado para el sector odontológico. Catálogo de productos dentales, gestión de pedidos y panel de administración para distribuidores.',
    tech: ['Next.js', 'MongoDB', 'Stripe', 'Ecommerce'],
    link: '#', linkLabel: 'Ver proyecto →',
  },
  {
    num: '05', featured: false,
    status: 'presented', statusLabel: 'Presentado',
    name: 'Sistema Taller Mecánico',
    desc: 'Sistema de gestión integral para talleres mecánicos. Control de órdenes de trabajo, inventario de repuestos, historial de vehículos y facturación.',
    tech: ['React', 'Node.js', 'MongoDB', 'PDF Reports'],
    link: '#', linkLabel: 'Ver propuesta →',
  },
  {
    num: '06', featured: false,
    status: 'requested', statusLabel: 'En desarrollo · Mega7',
    name: 'Mega7 Ecommerce',
    desc: 'Plataforma de ecommerce para tienda de informática. Catálogo, carrito de compras, integración de pagos y panel de gestión de stock.',
    tech: ['Next.js', 'MongoDB', 'Ecommerce', 'En desarrollo'],
    link: '#', linkLabel: 'En proceso →',
  },
]

const statusStyles: Record<string, { bg: string; border: string; color: string }> = {
  done:      { bg: 'rgba(0,255,136,0.08)',  border: 'rgba(0,255,136,0.22)',  color: '#00ff88' },
  presented: { bg: 'rgba(0,212,255,0.07)',  border: 'rgba(0,212,255,0.2)',   color: 'var(--accent)' },
  requested: { bg: 'rgba(251,191,36,0.07)', border: 'rgba(251,191,36,0.2)',  color: '#fbbf24' },
}

export default function Projects() {
  return (
    <section id="proyectos" style={{
      position: 'relative',
      zIndex: 1,
      padding: '6rem 4rem',
      background: 'var(--bg)',
    }}>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--accent)',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        marginBottom: '0.8rem',
      }}>
      </div>

      <h2 style={{
        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        marginBottom: '1rem',
      }}>
        Lo que construimos
      </h2>

      <p style={{
        color: 'var(--muted2)',
        maxWidth: '520px',
        lineHeight: 1.75,
        marginBottom: '3.5rem',
        fontSize: '0.98rem',
      }}>
        Sistemas reales en producción, resolviendo problemas concretos de empresas paraguayas.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1px',
        background: 'var(--border)',
        border: '1px solid var(--border)',
      }}>
        {projects.map((p) =>
          p.featured
            ? <FeaturedCard key={p.num} {...p} />
            : <ProjectCard key={p.num} {...p} />
        )}
      </div>

    </section>
  )
}

function FeaturedCard({ num, status, statusLabel, name, desc, tech, link, linkLabel, icon }: any) {
  const s = statusStyles[status]
  return (
    <div
      style={{
        gridColumn: '1 / -1',
        background: 'var(--card)',
        padding: '2.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        transition: 'background 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--card2)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--card)')}
    >
      <div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--muted)',
          marginBottom: '0.8rem',
          letterSpacing: '0.1em',
        }}>
          {num} / DESTACADO
        </div>

        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.63rem',
          padding: '0.22rem 0.7rem', borderRadius: '100px',
          letterSpacing: '0.08em', marginBottom: '1rem',
          textTransform: 'uppercase',
          background: s.bg, border: `1px solid ${s.border}`, color: s.color,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />
          {statusLabel}
        </span>

        <div style={{ fontSize: '1.55rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
          {name}
        </div>

        <p style={{ color: 'var(--muted2)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
          {desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {tech.map((t: string) => (
            <span key={t} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              padding: '0.22rem 0.65rem',
              border: '1px solid var(--border2)',
              borderRadius: '2px', color: 'var(--muted2)',
              letterSpacing: '0.05em',
            }}>{t}</span>
          ))}
        </div>

        <a href={link} style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
          color: 'var(--accent)', textDecoration: 'none',
          letterSpacing: '0.06em', transition: 'letter-spacing 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.letterSpacing = '0.12em')}
          onMouseLeave={e => (e.currentTarget.style.letterSpacing = '0.06em')}
        >
          {linkLabel}
        </a>
      </div>

      {/* Visual */}
      <div style={{
        background: 'linear-gradient(135deg, var(--bg) 0%, var(--card2) 100%)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        height: '220px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '4rem', opacity: 0.4,
      }}>
        {icon}
      </div>
    </div>
  )
}

function ProjectCard({ num, status, statusLabel, name, desc, tech, link, linkLabel }: any) {
  const s = statusStyles[status]
  const isRequested = status === 'requested'

  return (
    <div
      style={{
        background: 'var(--card)',
        padding: '2.5rem',
        transition: 'background 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--card2)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--card)')}
    >
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
        color: 'var(--muted)', marginBottom: '0.8rem', letterSpacing: '0.1em',
      }}>
        {num}
      </div>

      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        fontFamily: 'var(--font-mono)', fontSize: '0.63rem',
        padding: '0.22rem 0.7rem', borderRadius: '100px',
        letterSpacing: '0.08em', marginBottom: '1rem',
        textTransform: 'uppercase',
        background: s.bg, border: `1px solid ${s.border}`, color: s.color,
      }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />
        {statusLabel}
      </span>

      <div style={{ fontSize: '1.55rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
        {name}
      </div>

      <p style={{ color: 'var(--muted2)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
        {desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
        {tech.map((t: string) => (
          <span key={t} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            padding: '0.22rem 0.65rem',
            border: '1px solid var(--border2)',
            borderRadius: '2px', color: 'var(--muted2)',
            letterSpacing: '0.05em',
          }}>{t}</span>
        ))}
      </div>

      <a href={link} style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
        color: isRequested ? '#fbbf24' : 'var(--accent)',
        textDecoration: 'none', letterSpacing: '0.06em',
        transition: 'letter-spacing 0.2s',
      }}
        onMouseEnter={e => (e.currentTarget.style.letterSpacing = '0.12em')}
        onMouseLeave={e => (e.currentTarget.style.letterSpacing = '0.06em')}
      >
        {linkLabel}
      </a>
    </div>
  )
}