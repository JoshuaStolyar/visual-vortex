import { NextResponse, type NextRequest } from "next/server";

/**
 * portal.visualvrtx.com: the partner portal under your own address. The portal runs on Visual Vortex's own machine
 * behind a tunnel whose address changes; its current address is posted (signed) every minute. Requests to the portal
 * host are passed straight through to it, so the address bar always shows portal.visualvrtx.com. The website itself is
 * untouched.
 */
const SUPABASE = "https://gjksyrsfmszhewtwtdej.supabase.co";
const ANON = "sb_publishable_bxifeMb2ZEzTrLbG6TEwwA_n6-15_hs";
const PUBLIC_KEY: JsonWebKey = { kty: "EC", crv: "P-256", x: "HHx2tQ9Vh8BQEa0LFKHH0rbPz9yDv9ugrYQ05ZrBFdA", y: "KOgWBz1zNRY-t1-ww4jdMaP9Q5xMJbRZmdor6jau_xE" };
const FRESH_MS = 5 * 60 * 1000;
const CACHE_MS = 20 * 1000;

let cached: { url: string | null; at: number } = { url: null, at: 0 };

const b64 = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4)), (c) => c.charCodeAt(0));

/** The portal's current address, checked against its signature; null when it's offline. Remembered for 20 seconds. */
async function portalAddress(): Promise<string | null> {
  if (cached.url && Date.now() - cached.at < CACHE_MS) return cached.url;
  try {
    const res = await fetch(`${SUPABASE}/rest/v1/thumb_docs?coll=eq.vv_portal&id=eq.address&select=data`, { headers: { apikey: ANON, Authorization: `Bearer ${ANON}` }, cache: "no-store" });
    const [row] = (await res.json()) as { data?: { payload?: unknown; sig?: unknown } }[];
    const payload = row?.data?.payload;
    const sig = row?.data?.sig;
    if (typeof payload !== "string" || typeof sig !== "string") return null;
    const key = await crypto.subtle.importKey("jwk", PUBLIC_KEY, { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]);
    if (!(await crypto.subtle.verify({ name: "ECDSA", hash: "SHA-256" }, key, b64(sig), new TextEncoder().encode(payload)))) return null;
    const { url, at } = JSON.parse(payload) as { url?: string; at?: string };
    if (!url || !/^https:\/\/[a-z0-9-]+\.trycloudflare\.com$/.test(url) || !at || Date.now() - Date.parse(at) > FRESH_MS) return null;
    cached = { url, at: Date.now() };
    return url;
  } catch {
    return null;
  }
}

const RESTING = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="refresh" content="20"><title>Visual Vortex · Portal</title><style>body{margin:0;min-height:100dvh;display:grid;place-items:center;background:#08080a;color:#f4f2ee;font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;text-align:center;padding:24px}p{color:#8d8a85}</style></head><body><main><h1>The portal is resting</h1><p>It'll be back in a minute. This page tries again on its own.</p></main></body></html>`;

export async function proxy(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").split(":")[0]!.toLowerCase();
  if (!host.startsWith("portal.")) return NextResponse.next();
  const url = await portalAddress();
  if (!url) return new NextResponse(RESTING, { status: 503, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "retry-after": "20" } });
  const headers = new Headers(req.headers);
  // The portal sees its public address (for its form checks and links), not the tunnel's.
  headers.set("x-forwarded-host", host);
  headers.set("x-forwarded-proto", "https");
  return NextResponse.rewrite(new URL(req.nextUrl.pathname + req.nextUrl.search, url), { request: { headers } });
}

export const config = { matcher: "/:path*" };
