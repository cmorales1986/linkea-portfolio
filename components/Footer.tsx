'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">

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

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { label: 'linkea.com.py', href: 'https://linkea.com.py' },
          { label: 'GitHub', href: '#' },
          { label: 'LinkedIn', href: '#' },
        ].map(({ label, href }) => ( <a
          
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

      <style>{`
        .footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid var(--border);
          padding: 2rem 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg2);
          flex-wrap: wrap;
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .footer {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>

    </footer>
  )
}