'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid var(--border)',
      padding: '2rem 4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--bg2)',
    }}>

      <Image
        src="/logos/LINKEA_3D_transparent.png"
        alt="Linkea"
        width={100}
        height={34}
        style={{
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.25))',
        }}
      />

      <div style={{
        fontSize: '0.75rem',
        color: 'var(--muted)',
        fontFamily: 'var(--font-mono)',
      }}>
        © 2025 Linkea. Asunción, Paraguay.
      </div>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { label: 'linkea.com.py', href: 'https://linkea.com.py' },
          { label: 'GitHub', href: '#' },
          { label: 'LinkedIn', href: '#' },
        ].map(({ label, href }) => (          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {label}
          </a>
        ))}
      </div>

    </footer>
  )
}