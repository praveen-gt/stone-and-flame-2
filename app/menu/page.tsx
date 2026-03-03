'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/* ── Scroll-reveal ──────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ── Types ──────────────────────────────────────────── */
type Item = { name: string; desc: string; price?: string | number }

/* ── Menu data from PDF ─────────────────────────────── */
const SMALL_PLATES: Item[] = [
  { name: 'Chicken Thigh Yakitori', desc: 'Charcoal-grilled chicken thigh, gochujang honey tare, sesame, spring onion', price: 9 },
  { name: 'Pork Belly Yakitori', desc: 'Slow-braised free-range pork belly, charcoal-grilled, pickled apple, shiro tare', price: 9 },
  { name: 'Okonomiyaki', desc: 'Savoury Japanese pancake with octopus and vegetables, tonkatsu sauce, kewpie, shaved bonito', price: 23 },
  { name: 'Vegetable Tempura', desc: 'Lightly battered seasonal vegetables, crisp and delicate, served with teriyaki sauce', price: 15 },
  { name: 'Cold Sesame Noodles', desc: 'Chilled wheat noodles, black sesame oil, soy, cucumber, chilli crisp', price: 15 },
  { name: 'Karaage Bites', desc: 'Crisp Japanese fried chicken, kewpie, seaweed salt', price: 19 },
  { name: 'Hibachi Corn', desc: 'Charcoal roasted corn, white miso butter, nori furikake, charred lime', price: 9 },
  { name: 'Salmon Bites', desc: 'Pan-seared salmon, honey yuzu glaze', price: 23 },
  { name: 'Edamame', desc: 'Warm soy, sea salt', price: 7 },
  { name: 'Steamed Rice', desc: 'Nori furikake', price: 5 },
]
const MAINS: Item[] = [
  { name: 'Lamb Cutlet', desc: 'Red miso eggplant, edamame purée, roasted carrot, bonito', price: 43 },
  { name: 'Venison Tataki', desc: 'Cucumber sunomono, dressed rice, chilli crisp, yuzu black garlic ponzu', price: 45 },
  { name: 'Market Fish', desc: 'Seasonal market fish, miso mirin glaze, asparagus, dressed rice, burnt lemon', price: 47 },
  { name: 'Eye Fillet', desc: 'Black pepper tare, charred scallion, taro crush, miso emulsion', price: 55 },
]
const BROTH: Item[] = [
  {
    name: 'Dashi Broth',
    desc: 'Clear Japanese broth from kombu and bonito, buckwheat soba noodles, seasonal greens',
    price: 25,
  },
]
const BROTH_ADDS = ['Pork belly +$12', 'Eye fillet +$16', 'Octopus +$14', 'Fried tofu +$10']
const DESSERTS: Item[] = [
  { name: 'Lemon Sorbet', desc: '', price: 11 },
  { name: 'Caramelised Banana Tartlet', desc: '', price: 15 },
  { name: 'Sweet Potato Crème Brûlée', desc: '', price: 15 },
]

/* ── Dish Row component ─────────────────────────────── */
function DishRow({ name, desc, price, delay = 0 }: Item & { delay?: number }) {
  return (
    <div
      className={`dish-row reveal reveal-delay-${Math.min(delay + 1, 4)} flex items-start justify-between gap-6 py-6 px-2`}
    >
      <div className="flex-1 min-w-0">
        <p
          className="text-[0.68rem] tracking-[0.2em] uppercase mb-1.5 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)', lineHeight: 1 }}
        >
          {name}
        </p>
        {desc && (
          <p
            className="text-base leading-snug italic"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)', opacity: 0.65 }}
          >
            {desc}
          </p>
        )}
      </div>
      {price !== undefined && (
        <span
          className="shrink-0 text-base opacity-55 mt-0.5"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-300)' }}
        >
          ${price}
        </span>
      )}
    </div>
  )
}

/* ── Section heading component ──────────────────────── */
function SectionHead({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="reveal text-center mb-12">
      <h2
        className="tracking-[0.12em] uppercase mb-2"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
          color: 'var(--color-bone)',
          letterSpacing: '0.08em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-sm italic mt-2 opacity-45"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)' }}
        >
          {subtitle}
        </p>
      )}
      {/* ornament */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-[rgba(184,146,46,0.35)]" />
        <span style={{ color: 'var(--color-bronze)', opacity: 0.5, fontSize: '0.45rem' }}>◆</span>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-[rgba(184,146,46,0.35)]" />
      </div>
    </div>
  )
}

/* ── PDF Viewer component ───────────────────────────── */
function PdfViewer() {
  const [pdfMode, setPdfMode] = useState<'embed' | 'iframe'>('embed')

  return (
    <div>
      {/* Header bar */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6"
        style={{
          background: 'rgba(184,146,46,0.05)',
          borderBottom: '1px solid rgba(184,146,46,0.15)',
        }}
      >
        <div className="flex items-center gap-3">
          {/* PDF icon */}
          <div
            className="w-9 h-9 flex items-center justify-center shrink-0"
            style={{ background: 'rgba(184,146,46,0.12)', border: '1px solid rgba(184,146,46,0.25)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-bronze)' }}/>
              <path d="M10 2v3h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" style={{ color: 'var(--color-bronze)' }}/>
              <path d="M5 9h6M5 11.5h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" style={{ color: 'var(--color-bronze)', opacity: 0.6 }}/>
            </svg>
          </div>
          <div>
            <p
              className="text-[0.62rem] tracking-[0.18em] uppercase"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bone)', opacity: 0.8 }}
            >
              Stone &amp; Flame — Menu
            </p>
            <p
              className="text-[0.52rem] tracking-[0.1em] uppercase mt-0.5 opacity-40"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
            >
              Designer original · Current menu
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="/pdf/menu.pdf"
            download="StoneAndFlame_Menu.pdf"
            className="flex items-center gap-2 px-4 py-2.5 btn-fire text-xs"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v8M3 6l3.5 3.5L10 6M1 11.5h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Download PDF</span>
          </a>
          <a
            href="/pdf/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 btn-ghost-bone text-xs"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M5 2H2v9h9V8M8 2h3v3M5.5 7.5L11 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Open in New Tab</span>
          </a>
        </div>
      </div>

      {/* PDF embed */}
      <div className="relative w-full" style={{ paddingBottom: '141.4%' /* A4 ratio */ }}>
        {/* Fallback message */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{ background: 'var(--color-charcoal-mid)' }}
        >
          <p
            className="text-[0.6rem] tracking-[0.2em] uppercase opacity-30"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
          >
            Loading menu…
          </p>
        </div>

        {/* The actual embed — sits on top */}
        <object
          data="/pdf/menu.pdf"
          type="application/pdf"
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        >
          {/* iOS / non-object browsers */}
          <iframe
            src={`/pdf/menu.pdf#toolbar=0&navpanes=0&scrollbar=0`}
            className="absolute inset-0 w-full h-full"
            title="Stone & Flame Menu"
            style={{ border: 'none', zIndex: 2 }}
          >
            <div className="p-8 text-center">
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)', fontStyle: 'italic' }}>
                Your browser can&apos;t display PDFs inline.
              </p>
              <a href="/pdf/menu.pdf" download className="btn-fire mt-6 inline-block">
                <span>Download Menu PDF</span>
              </a>
            </div>
          </iframe>
        </object>
      </div>
    </div>
  )
}

/* ── Page ───────────────────────────────────────────── */
export default function MenuPage() {
  useReveal()
  const [view, setView] = useState<'digital' | 'pdf'>('digital')

  return (
    <>
      {/* ─── HEADER ──────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Decorative ghost character */}
        <div
          aria-hidden
          className="absolute right-0 top-0 text-ghost hidden xl:block select-none pointer-events-none"
          style={{ opacity: 0.035, top: '2rem', right: '-1rem' }}
        >
          食
        </div>

        {/* Ember glow */}
        <div style={{
          position: 'absolute', bottom: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '50vw', height: '30vh',
          background: 'radial-gradient(ellipse, rgba(196,98,42,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">

            {/* Left: title */}
            <div>
              <div className="flex items-center gap-4 mb-8 anim-up d-0">
                <div className="h-px w-8 bg-[var(--color-bronze)] opacity-60" />
                <span className="text-[0.55rem] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}>
                  Stone &amp; Flame · Japanese Bar &amp; Restaurant
                </span>
              </div>
              <h1
                className="anim-up d-100"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                  lineHeight: '0.9',
                  color: 'var(--color-bone)',
                  letterSpacing: '-0.01em',
                }}
              >
                The<br />
                <em style={{ color: 'var(--color-bronze)', textShadow: '0 0 60px rgba(196,98,42,0.2)' }}>Menu</em>
              </h1>
            </div>

            {/* Right: view toggle + tagline */}
            <div className="anim-up d-300 flex flex-col items-start lg:items-end gap-6">
              <p
                className="text-base italic opacity-50 max-w-xs lg:text-right"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}
              >
                A Japanese kitchen shaped by hibachi fire, intention, and time.
              </p>

              {/* Toggle */}
              <div
                className="flex items-center gap-1 p-1"
                style={{
                  border: '1px solid rgba(184,146,46,0.2)',
                  background: 'rgba(14,12,10,0.6)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {(['digital', 'pdf'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setView(mode)}
                    className="px-5 py-2 transition-all duration-300 flex items-center gap-2"
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      background: view === mode ? 'var(--color-bronze)' : 'transparent',
                      color: view === mode ? 'var(--color-charcoal)' : 'rgba(205,185,154,0.5)',
                      cursor: 'pointer',
                      border: 'none',
                    }}
                  >
                    {mode === 'pdf' && (
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M2 1h5l2.5 2.5V10H2V1z" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <path d="M7 1v2.5h2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    )}
                    {mode === 'digital' ? 'Digital Menu' : 'Original PDF'}
                  </button>
                ))}
              </div>

              {/* Download shortcut (always visible) */}
              <a
                href="/pdf/menu.pdf"
                download="StoneAndFlame_Menu.pdf"
                className="flex items-center gap-2 text-[0.58rem] tracking-[0.16em] uppercase opacity-50 hover:opacity-100 transition-opacity duration-300"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v7M3 5.5L6 9l3-3.5M1 11h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Menu
              </a>
            </div>
          </div>

          {/* Dietary note */}
          <div
            className="anim-up d-400 flex flex-wrap gap-6 mt-10 pt-8"
            style={{ borderTop: '1px solid rgba(184,146,46,0.1)' }}
          >
            {[
              'All prices in AUD · inclusive of GST',
              'Please advise of dietary requirements',
              'Menu subject to seasonal change',
            ].map((note) => (
              <span
                key={note}
                className="text-[0.52rem] tracking-[0.16em] uppercase opacity-35"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTENT: PDF or Digital ─────────────────── */}
      {view === 'pdf' ? (

        /* ── PDF VIEWER ──────────────────────────────── */
        <section className="pb-28 px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div
              className="overflow-hidden"
              style={{
                border: '1px solid rgba(184,146,46,0.2)',
                background: 'var(--color-charcoal-mid)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(184,146,46,0.08)',
              }}
            >
              <PdfViewer />
            </div>

            {/* Download CTA below */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a href="/pdf/menu.pdf" download="StoneAndFlame_Menu.pdf" className="btn-fire">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v9M3 7l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Download Menu PDF</span>
              </a>
              <button
                onClick={() => setView('digital')}
                className="btn-ghost-bone"
              >
                View Digital Menu
              </button>
            </div>
          </div>
        </section>

      ) : (

        /* ── DIGITAL MENU ────────────────────────────── */
        <section className="pb-28 px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto space-y-24">

            {/* Small Plates */}
            <div>
              <SectionHead
                title="Small Plates from the Flame"
                subtitle="Inspired by Hibachi Fire and Japanese techniques"
              />
              {SMALL_PLATES.map((item, i) => (
                <DishRow key={item.name} {...item} delay={i % 4} />
              ))}
            </div>

            {/* Ornament divider */}
            <div className="reveal ornament-line justify-center py-4">
              <span
                className="px-6 text-[0.55rem] tracking-[0.26em] uppercase opacity-40"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
              >
                ✦
              </span>
            </div>

            {/* Mains */}
            <div>
              <SectionHead title="Mains" />
              {MAINS.map((item, i) => (
                <DishRow key={item.name} {...item} delay={i % 4} />
              ))}
            </div>

            {/* Ornament divider */}
            <div className="reveal ornament-line justify-center py-4">
              <span
                className="px-6 text-[0.55rem] tracking-[0.26em] uppercase opacity-40"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
              >
                ✦
              </span>
            </div>

            {/* Hearth Broth */}
            <div>
              <SectionHead title="Hearth Broth" />
              {BROTH.map((item) => (
                <div key={item.name}>
                  <DishRow {...item} />
                  {/* Add-ons */}
                  <div
                    className="reveal mx-2 py-4 px-4"
                    style={{
                      background: 'rgba(184,146,46,0.04)',
                      borderLeft: '1px solid rgba(184,146,46,0.2)',
                      marginTop: '-1px',
                    }}
                  >
                    <p
                      className="text-[0.52rem] tracking-[0.18em] uppercase mb-2 opacity-50"
                      style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
                    >
                      Add-ons
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1">
                      {BROTH_ADDS.map((add) => (
                        <span
                          key={add}
                          className="text-sm italic opacity-55"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)' }}
                        >
                          {add}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ornament divider */}
            <div className="reveal ornament-line justify-center py-4">
              <span
                className="px-6 text-[0.55rem] tracking-[0.26em] uppercase opacity-40"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
              >
                ✦
              </span>
            </div>

            {/* Desserts */}
            <div>
              <SectionHead title="Desserts" subtitle="A gentle close" />
              {DESSERTS.map((item, i) => (
                <DishRow key={item.name} {...item} delay={i % 4} />
              ))}
            </div>

            {/* Bottom note */}
            <div
              className="reveal text-center py-10"
              style={{ borderTop: '1px solid rgba(184,146,46,0.1)' }}
            >
              <p
                className="text-[0.52rem] tracking-[0.22em] uppercase opacity-30 mb-6"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
              >
                View our designer-created original
              </p>
              <button
                onClick={() => { setView('pdf'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="btn-fire"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 1h5l2.5 2.5V11H2V1z" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  <path d="M7 1v2.5h2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                <span>View Original Menu PDF</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ─── FOOTER CTA ──────────────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{ borderTop: '1px solid rgba(184,146,46,0.08)' }}
      >
        <p
          className="reveal text-[0.52rem] tracking-[0.28em] uppercase mb-4 opacity-35"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
        >
          @stoneandflame
        </p>
        <p
          className="reveal reveal-delay-1 text-lg italic opacity-50 mb-8"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}
        >
          Ready to experience it in person?
        </p>
        <div className="reveal reveal-delay-2 flex flex-wrap gap-4 justify-center">
          <a href="/reservations" className="btn-fire">
            <span>Reserve a Table</span>
          </a>
          <a href="/pdf/menu.pdf" download="StoneAndFlame_Menu.pdf" className="btn-ghost-bone">
            Download Menu
          </a>
        </div>
      </section>
    </>
  )
}

/* ── Inline PDF viewer sub-component ───────────────── */
// function PdfViewer() {
//   return (
//     <div>
//       {/* Toolbar */}
//       <div
//         className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-4"
//         style={{
//           background: 'rgba(184,146,46,0.06)',
//           borderBottom: '1px solid rgba(184,146,46,0.15)',
//         }}
//       >
//         <div className="flex items-center gap-3">
//           <div
//             className="w-8 h-8 flex items-center justify-center shrink-0"
//             style={{ background: 'rgba(184,146,46,0.15)', border: '1px solid rgba(184,146,46,0.3)' }}
//           >
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//               <path d="M2.5 1.5h6l3 3v8H2.5v-11z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-bronze)' }}/>
//               <path d="M8.5 1.5v3h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" style={{ color: 'var(--color-bronze)' }}/>
//             </svg>
//           </div>
//           <div>
//             <p className="text-[0.6rem] tracking-[0.16em] uppercase" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bone)', opacity: 0.8 }}>
//               Stone &amp; Flame — Menu.pdf
//             </p>
//             <p className="text-[0.5rem] tracking-[0.1em] uppercase mt-0.5 opacity-35" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}>
//               Designer original · Current edition
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2 flex-wrap">
//           <a
//             href="/pdf/menu.pdf"
//             download="StoneAndFlame_Menu.pdf"
//             className="flex items-center gap-1.5 btn-fire py-2 px-4"
//           >
//             <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
//               <path d="M5.5 1v7M2.5 5.5l3 3 3-3M1 10h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             <span style={{ fontSize: '0.58rem', letterSpacing: '0.18em' }}>Download</span>
//           </a>
//           <a
//             href="/pdf/menu.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1.5 btn-ghost-bone py-2 px-4"
//           >
//             <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
//               <path d="M4.5 2H2v7h7V6.5M7 2h2v2M4.5 6.5 9 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             <span style={{ fontSize: '0.58rem', letterSpacing: '0.18em' }}>New Tab</span>
//           </a>
//         </div>
//       </div>

//       {/* A4 aspect ratio container */}
//       <div className="relative w-full" style={{ paddingBottom: '141.4%' }}>
//         {/* Loading bg */}
//         <div
//           className="absolute inset-0 flex items-center justify-center"
//           style={{ background: 'var(--color-charcoal-mid)' }}
//         >
//           <p className="text-[0.55rem] tracking-[0.2em] uppercase opacity-20" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}>
//             Loading…
//           </p>
//         </div>
//         {/* Embed */}
//         <object
//           data="/pdf/menu.pdf#toolbar=0"
//           type="application/pdf"
//           className="absolute inset-0 w-full h-full"
//           style={{ zIndex: 1 }}
//         >
//           <iframe
//             src="/pdf/menu.pdf#toolbar=0&navpanes=0"
//             className="absolute inset-0 w-full h-full"
//             title="Stone & Flame Menu PDF"
//             style={{ border: 'none', zIndex: 2 }}
//           />
//         </object>
//       </div>
//     </div>
//   )
// }

