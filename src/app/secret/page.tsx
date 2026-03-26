export default function SecretPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold tracking-tight text-amber-400">
        Secret Page
      </h1>
      <p className="max-w-md text-center text-lg text-gray-400">
        This is the <code className="rounded bg-gray-800 px-2 py-1 text-sm text-amber-400">/secret</code> page.
        If your URL bar says <code className="rounded bg-gray-800 px-2 py-1 text-sm text-emerald-400">/about</code>,
        you got here via a Next.js rewrite!
      </p>
    </main>
  );
}
