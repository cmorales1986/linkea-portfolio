/* eslint-disable react/jsx-no-comment-textnodes */
'use client'

export default function Contact() {
  return (
    <section id="contacto" style={{
      position: 'relative',
      zIndex: 1,
      padding: '6rem 4rem',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>

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
          Hablemos
        </h2>

        <p style={{
          color: 'var(--muted2)',
          lineHeight: 1.75,
          marginBottom: '3rem',
          fontSize: '0.98rem',
        }}>
          ¿Tenés un proyecto en mente? Contanos de qué se trata
          y te respondemos a la brevedad.
        </p>

        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          padding: '2.5rem',
          borderRadius: '6px',
          textAlign: 'left',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        }}>

          {/* Fila nombre + email */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <FormField label="Nombre" type="text" placeholder="Tu nombre" />
            <FormField label="Email" type="email" placeholder="correo@empresa.com" />
          </div>

          <FormField label="Empresa" type="text" placeholder="Nombre de tu empresa (opcional)" />

          {/* Select */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              display: 'block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              Servicio de interés
            </label>
            <select
              style={{
                width: '100%',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                padding: '0.8rem 1rem',
                borderRadius: '3px',
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '0.88rem',
                outline: 'none',
                appearance: 'none',
                cursor: 'pointer',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.08)'
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <option value="">Seleccioná un servicio...</option>
              <option>Desarrollo a medida</option>
              <option>Diseño UI/UX</option>
              <option>Administración de BD</option>
              <option>Infraestructura & Redes</option>
              <option>Apps Web</option>
              <option>Soporte Técnico</option>
            </select>
          </div>

          {/* Textarea */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              Mensaje
            </label>
            <textarea
              placeholder="Contanos sobre tu proyecto..."
              rows={4}
              style={{
                width: '100%',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                padding: '0.8rem 1rem',
                borderRadius: '3px',
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '0.88rem',
                outline: 'none',
                resize: 'vertical',
                minHeight: '120px',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.08)'
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Submit */}
          <button
            style={{
              width: '100%',
              padding: '1rem',
              background: 'linear-gradient(135deg, var(--accent2), var(--accent))',
              color: 'var(--bg)',
              border: 'none',
              borderRadius: '3px',
              fontFamily: 'var(--font-outfit), sans-serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 24px rgba(0,212,255,0.2)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,212,255,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,212,255,0.2)'
            }}
          >
            Enviar mensaje →
          </button>

        </div>
      </div>
    </section>
  )
}

function FormField({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{
        display: 'block',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        color: 'var(--muted)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: '100%',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
          padding: '0.8rem 1rem',
          borderRadius: '3px',
          fontFamily: 'var(--font-outfit), sans-serif',
          fontSize: '0.88rem',
          outline: 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onFocus={e => {
          e.currentTarget.style.borderColor = 'var(--accent)'
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.08)'
        }}
        onBlur={e => {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}