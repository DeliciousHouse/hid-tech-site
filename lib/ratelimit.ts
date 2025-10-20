type Bucket = {
  tokens: number;
  lastRefill: number; // epoch ms
};

const buckets = new Map<string, Bucket>();

const REFILL_INTERVAL_MS = 60_000; // 1 minute
const TOKENS_PER_INTERVAL = 5; // 5 requests/minute per key
const MAX_TOKENS = 5;

export function allow(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const bucket = buckets.get(key) ?? { tokens: MAX_TOKENS, lastRefill: now };

  if (now - bucket.lastRefill >= REFILL_INTERVAL_MS) {
    const intervals = Math.floor((now - bucket.lastRefill) / REFILL_INTERVAL_MS);
    bucket.tokens = Math.min(MAX_TOKENS, bucket.tokens + intervals * TOKENS_PER_INTERVAL);
    bucket.lastRefill = bucket.lastRefill + intervals * REFILL_INTERVAL_MS;
  }

  const allowed = bucket.tokens > 0;
  if (allowed) bucket.tokens -= 1;
  buckets.set(key, bucket);

  return { allowed, remaining: bucket.tokens };
}


