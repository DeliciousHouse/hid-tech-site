# Multi-stage build for Next.js 14 app
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm -v || true
RUN if [ -f package-lock.json ]; then npm ci --no-audit --no-fund --legacy-peer-deps; \
    elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile; \
    else npm i --no-audit --no-fund --legacy-peer-deps; fi
RUN npm update --no-audit --no-fund --legacy-peer-deps || true

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build || (echo "If npm not available, ensure lockfile present" && exit 1)

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs
EXPOSE 3000

ENV PORT=3000 HOSTNAME=0.0.0.0
CMD ["node", "server.js"]


