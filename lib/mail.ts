import nodemailer from "nodemailer";

export type MailPayload = {
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

export async function sendMail(payload: MailPayload) {
  const host = process.env.MAIL_HOST;
  const port = Number(process.env.MAIL_PORT || 587);
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;
  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO;

  if (!host || !port || !user || !pass || !from || !to) {
    throw new Error("Missing mail environment variables");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return transporter.sendMail({
    from,
    to,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
    replyTo: payload.replyTo,
  });
}


