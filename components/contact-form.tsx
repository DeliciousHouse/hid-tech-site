"use client";
import { useState } from "react";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function onSubmit(formData: FormData) {
    setState({ status: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setState({ status: "success", message: "Thanks — we’ll be in touch shortly." });
    } catch (err: any) {
      setState({ status: "error", message: err?.message || "Something went wrong" });
    }
  }

  return (
    <form action={onSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label className="text-sm text-[var(--muted)]" htmlFor="name">Name</label>
        <input id="name" name="name" required className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm text-[var(--muted)]" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm text-[var(--muted)]" htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm text-[var(--muted)]" htmlFor="address">Site Address / City</label>
        <input id="address" name="address" className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm text-[var(--muted)]" htmlFor="projectType">Project Type</label>
        <input id="projectType" name="projectType" className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm text-[var(--muted)]" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div className="flex items-center gap-3">
        <button disabled={state.status === "submitting"} className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark disabled:opacity-50">
          {state.status === "submitting" ? "Submitting…" : "Submit"}
        </button>
        {state.status === "success" && (
          <p role="status" className="text-sm text-emerald-400">{state.message}</p>
        )}
        {state.status === "error" && (
          <p role="alert" className="text-sm text-red-400">{state.message}</p>
        )}
      </div>
    </form>
  );
}


