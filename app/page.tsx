'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

/* ── Scroll-reveal hook ───────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ── Parallax hook ────────────────────────────────────── */
function useParallax(ref: React.RefObject<HTMLElement | null>, speed = 0.4) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      el.style.transform = `translateY(${center * speed}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ref, speed])
}

/* ── Animated counter ─────────────────────────────────── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = Math.ceil(to / 60)
        const t = setInterval(() => {
          start = Math.min(start + step, to)
          setVal(start)
          if (start >= to) clearInterval(t)
        }, 16)
        io.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{val}{suffix}</span>
}

export default function HomePage() {
  useReveal()
  const heroImgRef = useRef<HTMLDivElement>(null)
  useParallax(heroImgRef as React.RefObject<HTMLElement>, 0.25)

  const [heroLoaded, setHeroLoaded] = useState(false)

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO — Full-bleed cinematic
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

        {/* BG image with parallax */}
        <div
          ref={heroImgRef}
          className="absolute inset-[-8%] will-change-transform"
        >
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=2000&q=90"
            alt="Charcoal fire, Japanese dining"
            fill
            priority
            className="object-cover transition-opacity duration-1000"
            style={{ filter: 'brightness(0.22) saturate(0.6)', opacity: heroLoaded ? 1 : 0 }}
            onLoad={() => setHeroLoaded(true)}
          />
        </div>

        {/* Layered gradient atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0e0c0a 0%, rgba(14,12,10,0.7) 40%, rgba(14,12,10,0.2) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(14,12,10,0.5) 0%, transparent 60%)' }} />
          {/* Ember glow at bottom center */}
          <div style={{
            position: 'absolute',
            bottom: '-10%', left: '50%',
            transform: 'translateX(-50%)',
            width: '60vw', height: '50vh',
            background: 'radial-gradient(ellipse, rgba(196,98,42,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'emberPulse 4s ease-in-out infinite',
          }} />
        </div>

        {/* Ghost oversized decorative text */}
        <div
          className="absolute right-0 bottom-16 text-ghost anim-fade d-1000 hidden xl:block"
          style={{ right: '-2vw', lineHeight: '0.85' }}
          aria-hidden
        >
          火
        </div>

        {/* Side label */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 anim-fade d-1200"
          style={{ writingMode: 'vertical-rl' }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[rgba(184,146,46,0.4)]" />
          <span
            className="text-[0.48rem] tracking-[0.35em] uppercase opacity-35"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
          >
            Salamanca · Hobart · Tasmania
          </span>
          <div className="w-px h-16 bg-gradient-to-t from-transparent to-[rgba(184,146,46,0.4)]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-28 pt-44 w-full">
          {/* Pre-label */}
          <div className="flex items-center gap-4 mb-10 anim-up d-0">
            <div className="h-px w-10 bg-[var(--color-bronze)] opacity-70" />
            <span
              className="text-[0.58rem] tracking-[0.35em] uppercase"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
            >
              Japanese Bar &amp; Restaurant · Salamanca, Hobart
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-8 overflow-hidden" aria-label="Stone & Flame">
            <span
              className="block anim-up d-100"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4.5rem, 12vw, 10.5rem)',
                lineHeight: '0.88',
                color: 'var(--color-bone)',
                letterSpacing: '-0.01em',
              }}
            >
              Stone
            </span>
            <span
              className="block anim-up d-200"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4.5rem, 12vw, 10.5rem)',
                lineHeight: '0.88',
                color: 'var(--color-bronze)',
                letterSpacing: '-0.01em',
                textShadow: '0 0 80px rgba(196,98,42,0.25), 0 0 160px rgba(184,146,46,0.1)',
              }}
            >
              &amp; Flame
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl max-w-xl mb-14 leading-[1.6] anim-up d-300"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-stone-300)',
              fontStyle: 'italic',
              opacity: 0.75,
            }}
          >
            A Japanese kitchen shaped by hibachi fire,<br className="hidden md:block" />
            intention, and time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 anim-up d-400">
            <a href="/reservations" className="btn-fire">
              <span>Reserve a Table</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link href="/menu" className="btn-ghost-bone">
              View Menu
            </Link>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade d-1000"
            style={{ opacity: 0.3 }}
          >
            <div
              className="w-px h-14"
              style={{
                background: 'linear-gradient(to bottom, var(--color-bronze), transparent)',
                animation: 'float 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MARQUEE ETHOS STRIP
      ═══════════════════════════════════════════════ */}
      <div
        className="border-y overflow-hidden py-4 relative"
        style={{
          borderColor: 'rgba(184,146,46,0.1)',
          background: 'rgba(184,146,46,0.02)',
        }}
      >
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 px-8 shrink-0"
              style={{ fontFamily: 'var(--font-ui)', fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(184,146,46,0.5)' }}
            >
              <span>Fire Leads</span>
              <span style={{ color: 'rgba(196,98,42,0.4)', fontSize: '0.4rem' }}>◆</span>
              <span>Balance Follows</span>
              <span style={{ color: 'rgba(196,98,42,0.4)', fontSize: '0.4rem' }}>◆</span>
              <span>Comfort Remains</span>
              <span style={{ color: 'rgba(196,98,42,0.4)', fontSize: '0.4rem' }}>◆</span>
              <span>Salamanca · Hobart</span>
              <span style={{ color: 'rgba(196,98,42,0.4)', fontSize: '0.4rem' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          INTRO — Split layout
      ═══════════════════════════════════════════════ */}
      <section className="py-36 px-6 lg:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left: text */}
          <div>
            <div className="reveal">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-8 bg-[var(--color-bronze)] opacity-60" />
                <span
                  className="text-[0.55rem] tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
                >
                  Our Philosophy
                </span>
              </div>
            </div>

            <h2
              className="reveal reveal-delay-1 mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                lineHeight: '1.05',
                color: 'var(--color-bone)',
              }}
            >
              Guided by<br />
              <em style={{ color: 'var(--color-stone-400)', fontStyle: 'italic' }}>permanence.</em><br />
              Ignited by<br />
              <em style={{ color: 'var(--color-bronze)', fontStyle: 'italic' }}>flame.</em>
            </h2>

            <div className="reveal reveal-delay-2 space-y-5 mb-12" style={{ color: 'var(--color-stone-300)', fontFamily: 'var(--font-body)' }}>
              <p className="text-lg leading-[1.85]" style={{ opacity: 0.72 }}>
                At the centre of our kitchen is traditional Japanese hibachi — charcoal heat
                controlled with precision to draw depth, balance, and clarity from each ingredient.
              </p>
              <p className="text-lg leading-[1.85]" style={{ opacity: 0.72 }}>
                Set within a heritage sandstone building in Salamanca, our space carries the weight
                of the past and the warmth of the present.
              </p>
            </div>

            <div className="reveal reveal-delay-3">
              <Link href="/about" className="btn-fire">
                <span>Our Story</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: stacked images */}
          <div className="relative h-[580px] lg:h-[680px]">
            {/* Main image */}
            <div
              className="reveal absolute inset-0"
              style={{ clipPath: 'inset(0 0 0 0)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1000&q=85"
                alt="Hibachi charcoal fire"
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.6) saturate(0.7)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(14,12,10,0.8))' }} />
            </div>

            {/* Floating quote card */}
            <div
              className="reveal reveal-delay-2 absolute -bottom-8 -left-6 lg:-left-14 z-10 max-w-[260px]"
              style={{
                background: 'rgba(20,16,12,0.95)',
                border: '1px solid rgba(184,146,46,0.2)',
                backdropFilter: 'blur(12px)',
                padding: '1.5rem',
              }}
            >
              <div className="w-5 h-px bg-[var(--color-bronze)] mb-4 opacity-60" />
              <p
                className="text-sm leading-[1.7] mb-3"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-200)', fontStyle: 'italic', opacity: 0.85 }}
              >
                "The menu follows a natural progression — fire leads, balance follows, comfort remains."
              </p>
              <p
                className="text-[0.5rem] tracking-[0.2em] uppercase opacity-40"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
              >
                Stone &amp; Flame
              </p>
            </div>

            {/* Small accent image */}
            <div
              className="reveal reveal-delay-3 absolute -top-6 -right-4 lg:-right-10 w-36 h-48 hidden md:block"
              style={{ border: '1px solid rgba(184,146,46,0.15)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80"
                alt="Japanese cuisine detail"
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.55) saturate(0.65)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS / FACTS
      ═══════════════════════════════════════════════ */}
      <div
        className="py-20 px-6 lg:px-10 border-y"
        style={{ borderColor: 'rgba(184,146,46,0.08)', background: 'rgba(184,146,46,0.02)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {[
            { value: 100, suffix: '%', label: 'Charcoal Grilled' },
            { value: 5, suffix: '+', label: 'Nights a Week' },
            { value: 1830, suffix: 's', label: 'Heritage Building' },
            { value: 0, suffix: ' Shortcuts', label: 'Taken' },
          ].map(({ value, suffix, label }, i) => (
            <div key={label} className={`reveal reveal-delay-${i + 1}`}>
              <div
                className="text-4xl md:text-5xl mb-2 tabular-nums"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bronze)' }}
              >
                <Counter to={value} suffix={suffix} />
              </div>
              <p
                className="text-[0.58rem] tracking-[0.2em] uppercase opacity-50"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          MENU PREVIEW — 3 dish highlights
      ═══════════════════════════════════════════════ */}
      <section className="py-36 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">

          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div>
              <div className="reveal flex items-center gap-4 mb-5">
                <div className="h-px w-8 bg-[var(--color-bronze)] opacity-60" />
                <span className="text-[0.55rem] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}>
                  From the Kitchen
                </span>
              </div>
              <h2
                className="reveal reveal-delay-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                  lineHeight: '1',
                  color: 'var(--color-bone)',
                }}
              >
                Shaped by<br /><em style={{ color: 'var(--color-bronze)' }}>fire &amp; intention</em>
              </h2>
            </div>
            <div className="reveal reveal-delay-2">
              <Link href="/menu" className="btn-fire">
                <span>Full Menu</span>
              </Link>
            </div>
          </div>

          {/* Feature dishes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(184,146,46,0.08)' }}>
            {[
              {
                img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=800&q=85',
                tag: 'Signature',
                name: 'Eye Fillet',
                desc: 'Black pepper tare, charred scallion, taro crush, miso emulsion',
                price: '55',
              },
              {
                img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=85',
                tag: 'From the Flame',
                name: 'Pork Belly Yakitori',
                desc: 'Free-range, slow-braised, charcoal-grilled, pickled apple, shiro tare',
                price: '9',
              },
              {
                img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=85',
                tag: 'Hearth Broth',
                name: 'Dashi Broth',
                desc: 'Kombu & bonito, buckwheat soba, seasonal greens',
                price: '25',
              },
            ].map(({ img, tag, name, desc, price }, i) => (
              <div
                key={name}
                className={`reveal reveal-delay-${i + 1} group relative overflow-hidden`}
                style={{ background: 'var(--color-charcoal-mid)' }}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'brightness(0.55) saturate(0.65)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(14,12,10,0.9))' }} />
                  <span
                    className="absolute top-4 left-4 text-[0.5rem] tracking-[0.24em] uppercase px-2 py-1"
                    style={{
                      fontFamily: 'var(--font-ui)',
                      color: 'var(--color-bronze)',
                      border: '1px solid rgba(184,146,46,0.3)',
                      background: 'rgba(14,12,10,0.5)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
                        color: 'var(--color-bone)',
                        lineHeight: 1.1,
                        transition: 'color 0.3s',
                      }}
                      className="group-hover:text-[var(--color-bronze-light)]"
                    >
                      {name}
                    </h3>
                    <span
                      className="shrink-0 text-base opacity-60 mt-0.5"
                      style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
                    >
                      ${price}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)', fontStyle: 'italic', opacity: 0.7 }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FULL-BLEED AMBIENCE
      ═══════════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=85"
            alt="Stone & Flame atmosphere"
            fill
            className="object-cover"
            style={{ filter: 'brightness(0.18) saturate(0.5)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0e0c0a 0%, transparent 20%, transparent 80%, #0e0c0a 100%)' }} />
          {/* Ember glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 60%, rgba(196,98,42,0.1) 0%, transparent 55%)',
            animation: 'emberPulse 5s ease-in-out infinite',
          }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="reveal">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-[var(--color-bronze)] opacity-40" />
              <span className="text-[0.55rem] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}>The Space</span>
              <div className="h-px w-12 bg-[var(--color-bronze)] opacity-40" />
            </div>
          </div>
          <h2
            className="reveal reveal-delay-1 mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              lineHeight: '1.05',
              color: 'var(--color-bone)',
            }}
          >
            Heritage walls.<br />
            <em style={{ color: 'var(--color-bronze)', textShadow: '0 0 60px rgba(196,98,42,0.3)' }}>Living fire.</em>
          </h2>
          <p
            className="reveal reveal-delay-2 text-lg leading-[1.8] mb-12"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)', fontStyle: 'italic', opacity: 0.7 }}
          >
            Housed within one of Salamanca&apos;s iconic sandstone buildings, Stone &amp; Flame
            draws warmth from both the building&apos;s foundations and the glow of charcoal fire.
            A space built for evening — bar-forward, unhurried, alive.
          </p>
          <div className="reveal reveal-delay-3">
            <a href="/reservations" className="btn-fire">
              <span>Book Your Evening</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOURS + INFO — elegant grid
      ═══════════════════════════════════════════════ */}
      <section className="py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x"
          style={{ '--divide-color': 'rgba(184,146,46,0.1)' } as React.CSSProperties}
        >
          {[
            {
              icon: '⏱',
              label: 'Hours',
              content: (
                <div className="space-y-1.5" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)', opacity: 0.7 }}>
                  <p className="text-base">Wednesday – Thursday</p>
                  <p className="text-sm italic opacity-70">Bar 5pm · Kitchen 6–9:30pm</p>
                  <div className="h-px w-8 bg-[var(--color-bronze)] opacity-20 my-3" />
                  <p className="text-base">Friday – Saturday</p>
                  <p className="text-sm italic opacity-70">Bar 5pm · Kitchen 6–10pm</p>
                  <div className="h-px w-8 bg-[var(--color-bronze)] opacity-20 my-3" />
                  <p className="text-base">Sunday</p>
                  <p className="text-sm italic opacity-70">Bar 5pm · Kitchen 6–9pm</p>
                </div>
              ),
            },
            {
              icon: '◎',
              label: 'Location',
              content: (
                <div style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}>
                  <address className="not-italic text-xl leading-[1.6] mb-4 opacity-75" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}>
                    Salamanca Place<br />
                    Hobart, Tasmania 7004
                  </address>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.6rem] tracking-[0.18em] uppercase transition-opacity duration-300 hover:opacity-100 opacity-50"
                    style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
                  >
                    Open in Maps →
                  </a>
                </div>
              ),
            },
            {
              icon: '✦',
              label: 'Reserve',
              content: (
                <div>
                  <p className="text-lg leading-relaxed mb-6 opacity-70" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)', fontStyle: 'italic' }}>
                    Reservations are strongly recommended. Walk-ins always welcome at the bar.
                  </p>
                  <a href="/reservations" className="btn-fire">
                    <span>Book a Table</span>
                  </a>
                </div>
              ),
            },
          ].map(({ icon, label, content }, i) => (
            <div
              key={label}
              className={`reveal reveal-delay-${i + 1} p-10 md:p-14`}
              style={{ borderColor: 'rgba(184,146,46,0.1)' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span style={{ color: 'var(--color-bronze)', fontSize: '0.7rem', opacity: 0.8 }}>{icon}</span>
                <span
                  className="text-[0.55rem] tracking-[0.28em] uppercase"
                  style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)', opacity: 0.7 }}
                >
                  {label}
                </span>
              </div>
              {content}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          RESERVATION FINAL CTA
      ═══════════════════════════════════════════════ */}
      <section
        className="py-36 px-6 text-center relative overflow-hidden"
        style={{ borderTop: '1px solid rgba(184,146,46,0.08)' }}
      >
        {/* Glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(184,146,46,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="reveal ornament-line justify-center mb-10">
            <span
              className="text-[0.55rem] tracking-[0.28em] uppercase px-4"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)', opacity: 0.7 }}
            >
              @stoneandflame
            </span>
          </div>
          <h2
            className="reveal reveal-delay-1 mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              color: 'var(--color-bone)',
            }}
          >
            Come gather<br />
            <em style={{ color: 'var(--color-bronze)' }}>around the fire</em>
          </h2>
          <p
            className="reveal reveal-delay-2 text-lg italic mb-12 opacity-55"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}
          >
            A Japanese kitchen shaped by hibachi fire, intention, and time.
          </p>
          <div className="reveal reveal-delay-3 flex flex-wrap gap-4 justify-center">
            <a href="/reservations" className="btn-fire">
              <span>Reserve a Table</span>
            </a>
            <Link href="/menu" className="btn-ghost-bone">
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
