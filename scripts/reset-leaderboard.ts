/**
 * Clear all leaderboard aggregates in Redis (seed data + user simulations).
 * Run after replacing seed simulations with real tracking, or before re-seeding.
 *
 * Usage:
 *   pnpm tsx scripts/reset-leaderboard.ts
 *
 * Requires REDIS_URL in .env.local
 */

import { readFileSync } from "fs";
import { resolve } from "path";
import Redis from "ioredis";

const envPath = resolve(__dirname, "../.env.local");
try {
  const envFile = readFileSync(envPath, "utf-8");
  for (const line of envFile.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let value = trimmed.slice(eqIdx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
} catch {
  // .env.local may not exist
}

async function main() {
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    console.error("REDIS_URL not found in .env.local");
    process.exit(1);
  }

  const redis = new Redis(redisUrl, { maxRetriesPerRequest: 3 });
  const before = await redis.hget("leaderboard", "total");
  const deleted = await redis.del("leaderboard");
  console.log(
    deleted
      ? `Leaderboard reset. Removed key "leaderboard" (had total=${before ?? "0"} simulations).`
      : 'Key "leaderboard" was already empty.'
  );
  await redis.quit();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
