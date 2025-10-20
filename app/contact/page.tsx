import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-white">Contact</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Tell us about your project. We’ll follow up to schedule a consultation.
      </p>
      <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
        <ContactForm />
      </div>
    </div>
  );
}


