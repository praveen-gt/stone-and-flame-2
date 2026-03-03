import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'The heritage, philosophy, and people behind Stone & Flame — a Japanese bar-led dining house in Salamanca, Hobart.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1800&q=80"
            alt="Heritage sandstone walls"
            fill
            className="object-cover"
            style={{ filter: 'sepia(0.5) brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1612] to-[#1a1612] opacity-70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p
            className="text-[0.6rem] tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
          >
            Our Story
          </p>
          <h1
            className="text-[4rem] md:text-[6rem] leading-[0.95] mb-8"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
          >
            Built on stone.<br />
            <span style={{ color: 'var(--color-bronze)', fontStyle: 'italic' }}>Warmed by flame.</span>
          </h1>
          <div className="divider-ornament max-w-xs mx-auto">
            <span className="text-xs opacity-50" style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}>✦</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=900&q=85"
                alt="Heritage sandstone facade Salamanca"
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.65) saturate(0.75)' }}
              />
            </div>
            <p
              className="mt-4 text-[0.6rem] tracking-[0.18em] uppercase opacity-40"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
            >
              Salamanca Place, Hobart
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                heading: 'The Building',
                body: `Salamanca's sandstone warehouses have stood for nearly two centuries — built to endure, built to hold. Stone & Flame inherits this foundation. The heritage walls speak of craft and patience, qualities that translate directly into how we cook and how we serve.`,
              },
              {
                heading: 'The Cuisine',
                body: `Our kitchen is shaped by Japanese technique and the discipline of fire. At the centre is the hibachi — a charcoal grill demanding precision, attention, and restraint. We don't look for shortcuts. We look for clarity: the exact moment when heat transforms ingredient into memory.`,
              },
              {
                heading: 'The Bar',
                body: `Stone & Flame is bar-forward by design. We believe a great meal begins with a great drink. Our bar program draws on Japanese whisky, sake, and original cocktails that carry the same discipline as the kitchen. Smoke, citrus, umami — all present, none overdone.`,
              },
              {
                heading: 'The Philosophy',
                body: `We are guided by the permanence of stone and the energy of flame. Not the loudest room in town, but the one you keep returning to. Unhurried. Warm. Grounded. A dining house that earns its place in the city by doing the work quietly, consistently, beautifully.`,
              },
            ].map(({ heading, body }) => (
              <div key={heading}>
                <h2
                  className="text-3xl mb-5"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
                >
                  {heading}
                </h2>
                <p
                  className="text-lg leading-[1.8] opacity-70"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-200)' }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 border-t border-[rgba(168,132,58,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
            >
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(168,132,58,0.1)]">
            {[
              { value: 'Craft', desc: 'Every dish, every drink — made with intention.' },
              { value: 'Restraint', desc: 'Nothing excess. Nothing missing.' },
              { value: 'Warmth', desc: 'Hospitality as a founding principle, not an afterthought.' },
              { value: 'Heritage', desc: 'Rooted in place, shaped by time.' },
            ].map(({ value, desc }) => (
              <div
                key={value}
                className="bg-[var(--color-charcoal)] p-10 flex flex-col items-center text-center gap-4"
              >
                <h3
                  className="text-2xl"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bronze)' }}
                >
                  {value}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-60"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
