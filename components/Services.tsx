/* eslint-disable react/jsx-no-comment-textnodes */
'use client'

const services = [
  {
    icon: '⚙️',
    name: 'Desarrollo a medida',
    desc: 'Sistemas y aplicaciones web construidas desde cero según los procesos específicos de tu empresa.',
  },
  {
    icon: '🎨',
    name: 'Diseño UI/UX',
    desc: 'Interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión.',
  },
  {
    icon: '🗄️',
    name: 'Administración de BD',
    desc: 'Diseño, optimización y mantenimiento de bases de datos SQL y NoSQL para máximo rendimiento.',
  },
  {
    icon: '🌐',
    name: 'Infraestructura & Redes',
    desc: 'Configuración e implementación de servidores, redes y sistemas de backup empresariales.',
  },
  {
    icon: '📱',
    name: 'Apps Web',
    desc: 'Aplicaciones web modernas, responsivas y optimizadas para todos los dispositivos.',
  },
  {
    icon: '🔧',
    name: 'Soporte Técnico',
    desc: 'Mantenimiento, actualizaciones y soporte continuo para que tus sistemas funcionen sin interrupciones.',
  },
]

export default function Services() {
  return (
    <section id="servicios" style={{
      position: 'relative',
      zIndex: 1,
      padding: '6rem 4rem',
      background: 'var(--bg2)',
    }}>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--accent)',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        marginBottom: '0.8rem',
      }}>
        // servicios
      </div>

      <h2 style={{
        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        marginBottom: '1rem',
      }}>
        Qué hacemos
      </h2>

      <p style={{
        color: 'var(--muted2)',
        maxWidth: '520px',
        lineHeight: 1.75,
        marginBottom: '3.5rem',
        fontSize: '0.98rem',
      }}>
        Soluciones tecnológicas integrales para empresas que quieren crecer.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'var(--border)',
        border: '1px solid var(--border)',
      }}>
        {services.map((s) => (
          <ServiceCard key={s.name} {...s} />
        ))}
      </div>

    </section>
  )
}

function ServiceCard({ icon, name, desc }: { icon: string; name: string; desc: string }) {
  return (
    <div
      style={{
        background: 'var(--card)',
        padding: '2.2rem',
        transition: 'background 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--card2)'
        const wrap = e.currentTarget.querySelector('.icon-wrap') as HTMLElement
        if (wrap) {
          wrap.style.background = 'rgba(0,212,255,0.15)'
          wrap.style.borderColor = 'var(--accent)'
          wrap.style.boxShadow = '0 0 16px rgba(0,212,255,0.2)'
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--card)'
        const wrap = e.currentTarget.querySelector('.icon-wrap') as HTMLElement
        if (wrap) {
          wrap.style.background = 'rgba(0,212,255,0.08)'
          wrap.style.borderColor = 'rgba(0,212,255,0.15)'
          wrap.style.boxShadow = 'none'
        }
      }}
    >
      <div
        className="icon-wrap"
        style={{
          width: '44px', height: '44px',
          background: 'rgba(0,212,255,0.08)',
          border: '1px solid rgba(0,212,255,0.15)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.2rem',
          fontSize: '1.3rem',
          transition: 'all 0.3s',
        }}
      >
        {icon}
      </div>

      <div style={{
        fontSize: '1rem',
        fontWeight: 700,
        marginBottom: '0.6rem',
        letterSpacing: '-0.01em',
      }}>
        {name}
      </div>

      <p style={{
        fontSize: '0.83rem',
        color: 'var(--muted2)',
        lineHeight: 1.65,
      }}>
        {desc}
      </p>

    </div>
  )
}