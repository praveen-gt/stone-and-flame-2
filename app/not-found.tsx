import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p
        className="text-[0.6rem] tracking-[0.3em] uppercase mb-4"
        style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-bronze)' }}
      >
        404
      </p>
      <h1
        className="text-6xl md:text-8xl mb-6"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bone)' }}
      >
        Not Found
      </h1>
      <p
        className="text-lg opacity-60 italic mb-10"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-stone-300)' }}
      >
        The fire still burns — but this page doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary">
        <span>Return Home</span>
      </Link>
    </div>
  )
}
