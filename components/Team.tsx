'use client'

const team = [
  {
    initials: 'CM',
    name: 'Christian Morales',
    role: 'Full Stack Developer',
    desc: 'Desarrollo de sistemas completos, desde la base de datos hasta la interfaz. Especializado en arquitecturas escalables y soluciones empresariales.',
    gradient: 'linear-gradient(135deg, #3b5eff, #00d4ff)',
  },
  {
    initials: 'DC',
    name: 'Darío Cáceres',
    role: 'CEO / Comercial',
    desc: 'Lidera la estrategia de negocio y las relaciones comerciales. Conecta las necesidades del cliente con las soluciones tecnológicas del equipo.',
    gradient: 'linear-gradient(135deg, #7c3aed, #3b5eff)',
  },
  {
    initials: 'DI',
    name: 'Diego Invernizzi',
    role: 'UI/UX Designer & DBA',
    desc: 'Diseña experiencias digitales intuitivas y gestiona la arquitectura de bases de datos. La combinación perfecta entre estética y rendimiento.',
    gradient: 'linear-gradient(135deg, #0891b2, #00d4ff)',
  },
]

export default function Team() {
  return (
    <section id="equipo" style={{
      position: 'relative',
      zIndex: 1,
      padding: '6rem 4rem',
      background: 'var(--bg2)',
    }}>

      {/* Header */}
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
        Quiénes somos
      </h2>

      <p style={{
        color: 'var(--muted2)',
        maxWidth: '520px',
        lineHeight: 1.75,
        marginBottom: '3.5rem',
        fontSize: '0.98rem',
      }}>
        Tres profesionales con distintas especialidades formando un equipo
        completo para cualquier desafío tecnológico.
      </p>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'var(--border)',
        border: '1px solid var(--border)',
      }}>
        {team.map((member) => (
          <TeamCard key={member.initials} {...member} />
        ))}
      </div>

    </section>
  )
}

function TeamCard({ initials, name, role, desc, gradient }: {
  initials: string
  name: string
  role: string
  desc: string
  gradient: string
}) {
  return (
    <div
      style={{
        background: 'var(--card)',
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = 'var(--card2)'
        const bar = el.querySelector('.top-bar') as HTMLElement
        if (bar) bar.style.transform = 'scaleX(1)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = 'var(--card)'
        const bar = el.querySelector('.top-bar') as HTMLElement
        if (bar) bar.style.transform = 'scaleX(0)'
      }}
    >
      {/* Barra superior animada */}
      <div
        className="top-bar"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, var(--accent2), var(--accent))',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s ease',
        }}
      />

      {/* Avatar */}
      <div style={{
        width: '60px', height: '60px',
        borderRadius: '50%',
        background: gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        fontWeight: 800,
        color: 'white',
        marginBottom: '1.5rem',
        fontFamily: 'var(--font-mono)',
        boxShadow: '0 4px 16px rgba(0,212,255,0.15)',
      }}>
        {initials}
      </div>

      <div style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.3rem' }}>
        {name}
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--accent)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}>
        {role}
      </div>

      <p style={{ fontSize: '0.86rem', color: 'var(--muted2)', lineHeight: 1.65 }}>
        {desc}
      </p>

    </div>
  )
}