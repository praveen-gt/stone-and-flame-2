'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Story' },
  { href: '/menu', label: 'Menu' },
  { href: '/reservations', label: 'Reserve' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const dot = document.querySelector('.cursor-dot') as HTMLElement
    const ring = document.querySelector('.cursor-ring') as HTMLElement
    let raf: number

    const onMove = (e: MouseEvent) => {
      raf = requestAnimationFrame(() => {
        if (dot) { dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px' }
        if (ring) { ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px' }
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Custom cursor (desktop only) */}
      <div className="cursor-dot hidden md:block" />
      <div className="cursor-ring hidden md:block" />

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          padding: scrolled ? '1rem 0' : '1.75rem 0',
          background: scrolled ? 'rgba(14,12,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(184,146,46,0.1)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          {/* <Link href="/" className="group flex flex-col gap-0.5 select-none">
            <div className="flex items-baseline gap-2">
              <span
                className="text-[1.45rem] leading-none tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
              >
                Stone
              </span>
              <span
                className="text-[1.45rem] leading-none"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bronze)', transition: 'color 0.3s' }}
              >
                &amp;
              </span>
              <span
                className="text-[1.45rem] leading-none tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
              >
                Flame
              </span>
            </div>
            <span
              className="text-[0.5rem] tracking-[0.32em] uppercase opacity-45 group-hover:opacity-70 transition-opacity duration-300"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
            >
              Japanese Bar &amp; Restaurant
            </span>
          </Link> */}

          <Link href="/" className="group flex items-center select-none">
            <Image
              src="/images/logo.webp"
              alt="Stone & Flame Logo"
              width={160}
              height={60}
              priority
              className="h-auto w-[140px] md:w-[160px] object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Reserve CTA */}
          <a
            href="/reservations"
            className="hidden lg:inline-flex btn-fire"
          >
            <span>Reserve</span>
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px bg-[var(--color-bone)] transition-all duration-400"
                style={{
                  width: i === 1 ? (menuOpen ? '0' : '100%') : '100%',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translateY(8px)'
                      : i === 2 ? 'rotate(-45deg) translateY(-8px)'
                        : ''
                    : '',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center px-10 transition-all duration-600"
        style={{
          background: 'rgba(10,8,6,0.98)',
          backdropFilter: 'blur(20px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      >
        {/* Decorative ember in background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(196,98,42,0.06), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <nav className="flex flex-col gap-8 mb-16 relative">
          {NAV_LINKS.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-display)',
                color: pathname === href ? 'var(--color-bronze)' : 'var(--color-stone-200)',
                fontSize: '2.8rem',
                lineHeight: 1,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms, opacity 0.5s ease ${i * 60}ms, color 0.3s ease`,
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a href="/reservations" className="btn-fire w-fit">
          <span>Reserve a Table</span>
        </a>
        <p
          className="absolute bottom-8 left-10 text-[0.5rem] tracking-[0.3em] uppercase opacity-20"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
        >
          Salamanca · Hobart, Tasmania
        </p>
      </div>
    </>
  )
}
