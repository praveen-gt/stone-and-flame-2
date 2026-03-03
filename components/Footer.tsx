import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-charcoal)',
        borderTop: '1px solid rgba(184,146,46,0.1)',
      }}
    >
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand — wide col */}
          <div className="md:col-span-5">
            <Link href="/" className="group inline-block mb-6">
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-[2rem] leading-none tracking-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}>Stone</span>
                <span className="text-[2rem] leading-none" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bronze)' }}>&amp;</span>
                <span className="text-[2rem] leading-none tracking-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}>Flame</span>
              </div>
              <p className="text-[0.5rem] tracking-[0.3em] uppercase opacity-35" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}>
                Japanese Bar &amp; Restaurant · Salamanca
              </p>
            </Link>
            <p
              className="text-base leading-[1.85] max-w-xs"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)', fontStyle: 'italic', opacity: 0.65 }}
            >
              A Japanese kitchen shaped by hibachi fire, intention, and time. Set within a heritage sandstone building in Salamanca, Hobart.
            </p>
            {/* Social */}
            <a
              href="https://instagram.com/stoneandflame"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 group/ig"
            >
              <div
                className="w-7 h-7 flex items-center justify-center transition-colors duration-300 group-hover/ig:border-[var(--color-bronze)]"
                style={{ border: '1px solid rgba(184,146,46,0.25)', borderRadius: '2px' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" style={{ color: 'rgba(184,146,46,0.7)' }}/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" style={{ color: 'rgba(184,146,46,0.7)' }}/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" style={{ color: 'rgba(184,146,46,0.7)' }}/>
                </svg>
              </div>
              <span
                className="text-[0.58rem] tracking-[0.18em] uppercase transition-colors duration-300 group-hover/ig:opacity-100 opacity-40"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
              >
                @stoneandflame
              </span>
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Navigate */}
          <div className="md:col-span-3">
            <p
              className="text-[0.5rem] tracking-[0.28em] uppercase mb-5"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)', opacity: 0.6 }}
            >
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'Our Story' },
                { href: '/menu', label: 'Menu' },
                { href: '/reservations', label: 'Reservations' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors duration-300 hover:text-[var(--color-bone)] w-fit"
                  style={{ fontFamily: 'var(--font-ui)', color: 'rgba(205,185,154,0.4)', letterSpacing: '0.04em' }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & hours */}
          <div className="md:col-span-3">
            <p
              className="text-[0.5rem] tracking-[0.28em] uppercase mb-5"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)', opacity: 0.6 }}
            >
              Visit
            </p>
            <address
              className="not-italic space-y-1 mb-5"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(205,185,154,0.5)', fontSize: '0.95rem' }}
            >
              <p>Salamanca Place</p>
              <p>Hobart, Tasmania 7004</p>
            </address>
            <div className="space-y-1 mb-5" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', color: 'rgba(205,185,154,0.4)' }}>
              <p>Wed – Thu · 5pm – late</p>
              <p>Fri – Sat · 5pm – late</p>
              <p>Sun · 5pm – late</p>
            </div>
            <a
              href="tel:+61362001234"
              className="text-sm transition-colors duration-300 hover:text-[var(--color-bone)] block"
              style={{ fontFamily: 'var(--font-ui)', color: 'rgba(205,185,154,0.4)' }}
            >
              (03) 6200 1234
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(184,146,46,0.06)' }}
      >
        <p
          className="text-[0.5rem] tracking-[0.14em] uppercase opacity-20"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
        >
          © {new Date().getFullYear()} Stone &amp; Flame. All rights reserved.
        </p>
        <p
          className="text-[0.5rem] tracking-[0.14em] uppercase opacity-20"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
        >
          Fire leads · Balance follows · Comfort remains
        </p>
      </div>
    </footer>
  )
}
