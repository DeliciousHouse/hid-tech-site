import Hero from "@/components/hero";
import FeatureCards from "@/components/feature-cards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-lg font-semibold text-white">Trusted by homeowners and small businesses</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">Testimonials coming soon.</p>
        </div>
        <div className="mt-8 flex justify-center">
          <a href="/contact" className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark">Request a consultation</a>
        </div>
      </section>
    </>
  );
}


