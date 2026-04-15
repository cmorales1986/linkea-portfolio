'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '0.7rem 4rem' : '1rem 4rem',
      background: 'rgba(6,9,15,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
      transition: 'padding 0.3s',
    }}>

      {/* Logo */}
      <Link href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
        <Image
          src="/logos/LINKEA_3D_transparent.png"
          alt="Linkea"
          width={120}
          height={40}
          style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(0,212,255,0.3))' }}
          priority
        /> 0
      </Link>

      {/* Links */}
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {['Equipo', 'Proyectos', 'Servicios', 'Contacto'].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              style={{
                color: 'var(--muted)',
                textDecoration: 'none',
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="#contacto"
        style={{
          background: 'transparent',
          border: '1px solid var(--accent)',
          color: 'var(--accent)',
          padding: '0.55rem 1.5rem',
          borderRadius: '2px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textDecoration: 'none',
          transition: 'all 0.25s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--accent)'
          e.currentTarget.style.color = 'var(--bg)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = 'var(--accent)'
        }}
      >
        Hablemos →
      </Link>

    </nav>
  )
}