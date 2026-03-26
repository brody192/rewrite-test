import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold tracking-tight">Rewrite Demo</h1>
      <p className="max-w-md text-center text-lg text-gray-400">
        Visiting <code className="rounded bg-gray-800 px-2 py-1 text-sm text-emerald-400">/about</code> silently
        serves the content from <code className="rounded bg-gray-800 px-2 py-1 text-sm text-amber-400">/secret</code> —
        the URL in the browser stays as <code className="rounded bg-gray-800 px-2 py-1 text-sm text-emerald-400">/about</code>.
      </p>
      <div className="flex gap-4">
        <Link
          href="/about"
          className="rounded-lg bg-emerald-600 px-6 py-3 font-medium transition hover:bg-emerald-500"
        >
          Go to /about (rewritten)
        </Link>
        <Link
          href="/secret"
          className="rounded-lg bg-gray-800 px-6 py-3 font-medium transition hover:bg-gray-700"
        >
          Go to /secret (direct)
        </Link>
      </div>
    </main>
  );
}
