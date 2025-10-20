export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Secure, Connected, and Intelligent Homes & Offices.
            </h1>
            <p className="mt-5 max-w-xl text-base text-[var(--muted)] sm:text-lg">
              We design, deploy, and manage integrated systems that make your spaces smarter, safer, and more efficient — with security-first best practices.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#value" className="rounded-md border border-[var(--border)] px-4 py-2 text-sm text-white hover:bg-[var(--card)]">Learn more</a>
              <a href="/contact" className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark">Talk to an engineer</a>
            </div>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-md border border-[var(--border)] p-4">
                <div className="text-2xl font-bold text-white">300+</div>
                <div className="text-xs text-[var(--muted)]">Devices Managed</div>
              </div>
              <div className="rounded-md border border-[var(--border)] p-4">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-[var(--muted)]">Uptime Targets</div>
              </div>
              <div className="rounded-md border border-[var(--border)] p-4">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-[var(--muted)]">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


