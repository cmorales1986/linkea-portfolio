'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Equipo', 'Proyectos', 'Servicios', 'Contacto']

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scrolled ? '0.7rem 1.5rem' : '1rem 1.5rem',
        background: 'rgba(6,9,15,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        transition: 'padding 0.3s',
      }}>

        {/* Logo */}
        <Link href="#hero" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/logos/LINKEA_3D_transparent.png"
            alt="Linkea"
            width={110}
            height={36}
            style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(0,212,255,0.3))' }}
            priority
          />
        </Link>

        {/* Links desktop */}
        <ul style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
          // Oculto en mobile via JS
        }} className="nav-links-desktop">
          {links.map((item) => (
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

        {/* CTA desktop */}
        <Link
          href="#contacto"
          className="nav-cta-desktop"
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

        {/* Hamburger mobile */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'transparent',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            lineHeight: 1,
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px', left: 0, right: 0,
          zIndex: 99,
          background: 'rgba(6,9,15,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}>
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--muted2)',
                textDecoration: 'none',
                fontSize: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)',
                padding: '1rem 0',
                borderBottom: '1px solid var(--border)',
                transition: 'color 0.2s',
              }}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '1rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--accent2), var(--accent))',
              color: 'var(--bg)',
              padding: '0.85rem',
              borderRadius: '2px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.08em',
            }}
          >
            Hablemos →
          </Link>
        </div>
      )}

      {/* CSS para mostrar/ocultar elementos */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  )
}