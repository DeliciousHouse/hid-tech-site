type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Smart Home Automation",
    description:
      "Lighting, climate, access, and scenes — designed for reliability and simplicity.",
  },
  {
    title: "Network Security",
    description:
      "Resilient wired/wireless networks with segmentation, IDS/IPS, and zero-trust defaults.",
  },
  {
    title: "AI Integrations",
    description:
      "Intelligent automations and assistants embedded into your daily workflows.",
  },
  {
    title: "Surveillance",
    description:
      "UniFi Protect deployments with NVR best practices, retention planning, alerting.",
  },
  {
    title: "IoT Optimization",
    description:
      "Secure provisioning, firmware hygiene, and performance tuning across device fleets.",
  },
  {
    title: "Digital Systems Development",
    description:
      "Web, app, and internal tools to connect systems and automate operations.",
  },
];

export default function FeatureCards() {
  return (
    <section id="value" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="text-base font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


