import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { allow } from "@/lib/ratelimit";
import { sendMail } from "@/lib/mail";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(50).optional().or(z.literal("")),
  address: z.string().max(200).optional().or(z.literal("")),
  projectType: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(10).max(2000),
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.ip || "unknown";
  const { allowed } = allow(`contact:${ip}`);
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const subject = `New inquiry: ${data.name}`;
  const text = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nAddress: ${data.address}\nProject Type: ${data.projectType}\n\nMessage:\n${data.message}`;

  try {
    await sendMail({ subject, text, replyTo: data.email });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}


