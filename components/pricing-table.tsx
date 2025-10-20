type Tier = {
  name: string;
  price: string;
  blurb: string;
  items: string[];
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Monitor",
    price: "$50/mo",
    blurb: "Uptime checks, firmware updates, remote troubleshooting.",
    items: [
      "Device and service uptime monitoring",
      "Managed firmware and security updates",
      "Remote troubleshooting & support",
    ],
  },
  {
    name: "Manage",
    price: "$100/mo",
    blurb: "Monitor + storage integration, security auditing, quarterly optimization.",
    items: [
      "All Monitor features",
      "Secure storage/NVR retention planning",
      "Network security auditing",
      "Quarterly optimization review",
    ],
    highlight: true,
  },
  {
    name: "Priority",
    price: "$200/mo",
    blurb: "Manage + on-site quarterly visit, priority expansions, advanced tuning.",
    items: [
      "All Manage features",
      "Quarterly on-site visit",
      "Priority system expansions",
      "Advanced performance tuning",
    ],
  },
];

export default function PricingTable() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-xl border p-6 ${
              t.highlight
                ? "border-brand bg-[var(--card)]"
                : "border-[var(--border)] bg-[var(--card)]"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <div className="text-sm text-[var(--muted)]">{t.price}</div>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">{t.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {t.items.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className={`block rounded-md px-4 py-2 text-center text-sm font-medium text-white ${
                  t.highlight ? "bg-brand hover:bg-brand-dark" : "bg-[var(--bg)] border border-[var(--border)] hover:bg-[var(--card)]"
                }`}
              >
                Get started
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-[var(--muted)]">
        Project-based installs priced separately. Typical turnkey install range depends on scope and equipment.
      </p>
    </section>
  );
}


