import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-paper min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-blue mb-4">404</p>
      <h1 className="font-condensed text-6xl md:text-8xl text-ink leading-none mb-4">
        Wrong Job Site.
      </h1>
      <div className="h-px w-16 bg-blue mb-6" />
      <p className="font-body text-base text-concrete mb-10 max-w-sm">
        This page doesn't exist. But your next customer is out there — let's make sure they find you.
      </p>
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-widest bg-blue text-paper font-bold px-8 py-4 hover:bg-ink transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
