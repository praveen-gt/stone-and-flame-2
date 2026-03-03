import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Find Stone & Flame in Salamanca, Hobart. Contact us for reservations, enquiries, and private events.',
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center">
        <p
          className="text-[0.6rem] tracking-[0.3em] uppercase mb-5"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
        >
          Stone &amp; Flame
        </p>
        <h1
          className="text-[4rem] md:text-[6rem] leading-[0.95] mb-6"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
        >
          Get in Touch
        </h1>
      </section>

      {/* Contact grid */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(168,132,58,0.1)]">
          {/* General */}
          <div className="bg-[var(--color-charcoal)] p-12">
            <p
              className="text-[0.58rem] tracking-[0.26em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
            >
              General Enquiries
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@stoneandflame.com.au"
                className="block text-xl hover:text-[var(--color-bronze)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
              >
                hello@stoneandflame.com.au
              </a>
              <a
                href="tel:+61362001234"
                className="block text-xl hover:text-[var(--color-bronze)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
              >
                (03) 6200 1234
              </a>
              <p
                className="text-sm opacity-50 mt-2"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)' }}
              >
                Wed – Sun, 4:30 – 9:00 pm
              </p>
            </div>
          </div>

          {/* Reservations */}
          <div className="bg-[var(--color-charcoal)] p-12">
            <p
              className="text-[0.58rem] tracking-[0.26em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
            >
              Reservations
            </p>
            <div className="space-y-4">
              <a
                href="mailto:reservations@stoneandflame.com.au"
                className="block text-xl hover:text-[var(--color-bronze)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
              >
                reservations@<br />stoneandflame.com.au
              </a>
              <p
                className="text-sm opacity-50"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)' }}
              >
                Or book online via our reservation system.
              </p>
              <a
                href="https://your-reservation-system.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 inline-block"
              >
                <span>Book a Table</span>
              </a>
            </div>
          </div>

          {/* Private Events */}
          <div className="bg-[var(--color-charcoal)] p-12">
            <p
              className="text-[0.58rem] tracking-[0.26em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
            >
              Private Events &amp; Functions
            </p>
            <p
              className="text-base opacity-65 leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}
            >
              Stone &amp; Flame is available for private dining and exclusive venue hire. We work with you to create a bespoke menu and experience for your event.
            </p>
            <a
              href="mailto:events@stoneandflame.com.au"
              className="text-xl hover:text-[var(--color-bronze)] transition-colors duration-300 block"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
            >
              events@stoneandflame.com.au
            </a>
          </div>

          {/* Location */}
          <div className="bg-[var(--color-charcoal)] p-12">
            <p
              className="text-[0.58rem] tracking-[0.26em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
            >
              Find Us
            </p>
            <address
              className="not-italic text-xl leading-[1.5] mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
            >
              Salamanca Place<br />
              Hobart, Tasmania 7004<br />
              Australia
            </address>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.68rem] tracking-[0.14em] uppercase opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative h-72 border border-[rgba(168,132,58,0.15)] flex items-center justify-center overflow-hidden"
            style={{ background: 'rgba(168,132,58,0.03)' }}
          >
            {/* Map embed would go here - replace with actual embed */}
            <div className="text-center">
              <p
                className="text-[0.6rem] tracking-[0.24em] uppercase mb-3 opacity-40"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
              >
                Map
              </p>
              <p
                className="text-lg opacity-50"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)', fontStyle: 'italic' }}
              >
                Salamanca Place, Hobart
              </p>
              <a
                href="https://maps.google.com/?q=Salamanca+Place+Hobart"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-6 inline-block"
              >
                View on Google Maps
              </a>
            </div>
            {/* Decorative grid lines */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(168,132,58,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,132,58,0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>
          <p
            className="mt-3 text-[0.6rem] tracking-[0.16em] uppercase opacity-30 text-center"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-400)' }}
          >
            Replace this section with your Google Maps embed
          </p>
        </div>
      </section>

      {/* Social */}
      <section className="py-20 px-6 border-t border-[rgba(168,132,58,0.1)] text-center">
        <p
          className="text-[0.6rem] tracking-[0.28em] uppercase mb-4 opacity-50"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
        >
          Follow Along
        </p>
        <a
          href="https://instagram.com/stoneandflame"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-[var(--color-bronze)] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
        >
          @stoneandflame
        </a>
        <p
          className="mt-3 text-sm opacity-40 italic"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)' }}
        >
          Follow us on Instagram for seasonal updates and what&apos;s on the fire.
        </p>
      </section>
    </>
  )
}
