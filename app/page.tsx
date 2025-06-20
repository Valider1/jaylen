// ── app/page.tsx ──
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="features"
        className="py-20 bg-white text-gray-800 px-4 md:px-16"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          Our Features
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Fast</h3>
            <p>Lightning-fast performance out of the box.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Responsive</h3>
            <p>Looks great on any device, big or small.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Secure</h3>
            <p>Built-in HTTPS and best practices by default.</p>
          </div>
        </div>
      </section>
    </>
  )
}
