'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const cols = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(cols).fill(1)

    // Caracteres: mezcla de katakana + números + símbolos tech
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]|/\\=+-*'

    const draw = () => {
      // Fade sutil — fondo semitransparente
      ctx.fillStyle = 'rgba(6, 9, 15, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize

        // Primer caracter más brillante
        if (drops[i] * fontSize < canvas.height * 0.3) {
          ctx.fillStyle = 'rgba(0, 212, 255, 0.6)'
        } else {
          ctx.fillStyle = 'rgba(59, 94, 255, 0.15)'
        }

        ctx.font = `${fontSize}px monospace`
        ctx.fillText(char, x, drops[i] * fontSize)

        // Reset aleatorio
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '7rem 4rem 4rem',
      overflow: 'hidden',
      gap: '4rem',
    }}>

      {/* Canvas Matrix */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      {/* Gradient overlay para que el contenido se lea bien */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(6,9,15,0.6) 0%, rgba(6,9,15,0.95) 100%)',
        pointerEvents: 'none',
      }} />

      {/* LEFT — Texto */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          background: 'rgba(0,212,255,0.06)',
          border: '1px solid rgba(0,212,255,0.18)',
          padding: '0.4rem 1.1rem',
          borderRadius: '100px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--accent)',
          letterSpacing: '0.12em',
          marginBottom: '2rem',
          textTransform: 'uppercase',
        }}>
          <span style={{
            width: '7px', height: '7px',
            background: 'var(--green)',
            borderRadius: '50%',
            boxShadow: '0 0 10px var(--green)',
            animation: 'pulse 2s infinite',
            flexShrink: 0,
          }} />
          Disponibles para nuevos proyectos
        </div>

        <h1 style={{
          fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
        }}>
          Soluciones<br />
          <span style={{
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(0,212,255,0.45)',
          }}>digitales</span><br />
          <span style={{ color: 'var(--accent)' }}>a tu medida.</span>
        </h1>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--muted2)',
          lineHeight: 1.75,
          maxWidth: '440px',
          marginBottom: '2.5rem',
        }}>
          Somos un equipo de tres especialistas en Paraguay construyendo sistemas,
          apps web e infraestructura tecnológica que escalan con tu negocio.
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          
           <a href="#proyectos"
            style={{
              background: 'linear-gradient(135deg, var(--accent2), var(--accent))',
              color: 'var(--bg)',
              padding: '0.9rem 2.2rem',
              borderRadius: '2px',
              fontWeight: 700,
              fontSize: '0.88rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(0,212,255,0.25)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,212,255,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,212,255,0.25)'
            }}
          >
            Ver proyectos
          </a>
          
          <a  href="#contacto"
            style={{
              color: 'var(--muted2)',
              padding: '0.9rem 2rem',
              border: '1px solid var(--border2)',
              borderRadius: '2px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border2)'
              e.currentTarget.style.color = 'var(--muted2)'
            }}
          >
            Contactar →
          </a>
        </div>
      </div>

      {/* RIGHT — Logo + Stats */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}>

        {/* Glow detrás del logo */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute',
            width: '320px', height: '320px',
            background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'breathe 4s ease-in-out infinite',
          }} />
          <Image
            src="/logos/LINKEA_3D_transparent.png"
            alt="Linkea"
            width={280}
            height={280}
            style={{
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.3)) drop-shadow(0 0 60px rgba(59,94,255,0.2))',
              animation: 'float 6s ease-in-out infinite',
              position: 'relative',
              zIndex: 1,
            }}
            priority
          />
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {[
            { num: '3+', label: 'Años' },
            { num: '6+', label: 'Proyectos' },
            { num: 'PY', label: 'Paraguay' },
          ].map(({ num, label }) => (
            <div key={label} style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              padding: '1.2rem 1.5rem',
              borderRadius: '4px',
              textAlign: 'center',
              minWidth: '90px',
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.7rem',
                color: 'var(--accent)',
                fontWeight: 700,
                display: 'block',
                lineHeight: 1,
                marginBottom: '0.3rem',
              }}>{num}</span>
              <span style={{
                fontSize: '0.65rem',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-mono)',
              }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

    </section>
  )
}