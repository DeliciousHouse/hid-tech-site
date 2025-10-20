# HID Consulting — Technology Division

Production-ready, self-hosted marketing site for `https://tech.hidconsult.com`.

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS
- MDX for services/pricing/blog/legal pages
- Next API route for `/api/contact` with Zod validation, simple token-bucket rate limit, SMTP relay
- Plausible analytics (env-configurable)
- Strong SEO defaults (metadata, Open Graph, canonical, sitemap, robots)
- Dockerized; served behind Caddy (TLS)

## Getting Started
1. Copy `.env.example` to `.env` and fill values.
2. Install deps and run:
   ```bash
   npm i && npm run dev
   ```

## Docker
```bash
docker compose up --build -d
```

The site will be served via Caddy at `https://tech.hidconsult.com` once DNS is pointed to the host.


