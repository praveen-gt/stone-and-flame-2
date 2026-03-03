import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reservations',
  description: 'Book a table at Stone & Flame — Japanese Bar & Dining in Salamanca, Hobart.',
}

export default function ReservationsPage() {
  return (
    <>
      {/* Hero */}
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
          Reserve a Table
        </h1>
        <p
          className="max-w-lg mx-auto text-lg opacity-60 italic"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}
        >
          Reservations are strongly recommended. Walk-ins are always welcome at the bar,
          subject to availability.
        </p>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Main CTA */}
          <div
            className="border border-[rgba(168,132,58,0.3)] p-12 text-center mb-12"
            style={{ background: 'rgba(168,132,58,0.04)' }}
          >
            <p
              className="text-[0.6rem] tracking-[0.28em] uppercase mb-4 opacity-60"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
            >
              Online Booking
            </p>
            <h2
              className="text-3xl mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
            >
              Book through our reservation partner
            </h2>
            <p
              className="text-base opacity-60 italic mb-8"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}
            >
              Our online booking system allows you to select your preferred date, time, and party size.
            </p>
            <a
              href="https://your-reservation-system.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Book Online Now</span>
            </a>
          </div>

          {/* Alt contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(168,132,58,0.1)]">
            <div className="bg-[var(--color-charcoal)] p-8">
              <p
                className="text-[0.58rem] tracking-[0.24em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
              >
                By Phone
              </p>
              <a
                href="tel:+61362001234"
                className="text-xl hover:text-[var(--color-bronze)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
              >
                (03) 6200 1234
              </a>
              <p
                className="mt-2 text-sm opacity-50"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)' }}
              >
                Wednesday – Sunday, 4:30 – 9:00 pm
              </p>
            </div>
            <div className="bg-[var(--color-charcoal)] p-8">
              <p
                className="text-[0.58rem] tracking-[0.24em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
              >
                By Email
              </p>
              <a
                href="mailto:reservations@stoneandflame.com.au"
                className="text-xl hover:text-[var(--color-bronze)] transition-colors duration-300 break-all"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
              >
                reservations@<br className="md:hidden" />stoneandflame.com.au
              </a>
              <p
                className="mt-2 text-sm opacity-50"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-400)' }}
              >
                We respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-20 px-6 border-t border-[rgba(168,132,58,0.1)]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl mb-10"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
          >
            Good to know
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How far in advance should I book?',
                a: 'We recommend booking 2–3 days ahead for midweek and 5–7 days ahead for weekends. For large groups or special occasions, reach out as early as possible.',
              },
              {
                q: 'Do you accommodate dietary requirements?',
                a: 'Yes. Please note any dietary requirements when booking, or speak with our team on arrival. We\'re happy to guide you through the menu.',
              },
              {
                q: 'What\'s your cancellation policy?',
                a: 'We ask for at least 24 hours notice for cancellations or changes. Late cancellations may attract a small fee for bookings of 4 or more.',
              },
              {
                q: 'Do you seat walk-ins?',
                a: 'Walk-ins are always welcome at the bar, subject to availability. Bar seating is first-come, first-served and does not require a reservation.',
              },
              {
                q: 'Can I bring a cake or external food?',
                a: 'We\'re unable to accommodate externally catered food, but are happy to assist with special occasion requests in advance.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="pb-6 border-b border-[rgba(168,132,58,0.1)]">
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
                >
                  {q}
                </h3>
                <p
                  className="text-base opacity-65 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto border border-[rgba(168,132,58,0.15)] p-10">
          <h2
            className="text-2xl mb-8"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
          >
            Opening Hours
          </h2>
          <div className="space-y-3">
            {[
              { day: 'Monday – Tuesday', hours: 'Closed' },
              { day: 'Wednesday – Thursday', hours: 'Bar 5:00 pm · Kitchen 6:00 pm – 9:30 pm' },
              { day: 'Friday – Saturday', hours: 'Bar 5:00 pm · Kitchen 6:00 pm – 10:00 pm' },
              { day: 'Sunday', hours: 'Bar 5:00 pm · Kitchen 6:00 pm – 9:00 pm' },
            ].map(({ day, hours }) => (
              <div
                key={day}
                className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 py-3 border-b border-[rgba(168,132,58,0.08)] last:border-0"
              >
                <span
                  className="text-base"
                  style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-stone-200)', opacity: 0.8 }}
                >
                  {day}
                </span>
                <span
                  className="text-base opacity-60 italic"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}
                >
                  {hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
