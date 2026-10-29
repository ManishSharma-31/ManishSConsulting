import { siteUrl } from "@/content/site";

const canonicalHost = new URL(siteUrl).hostname;

/**
 * One URL per page. Permanent (301) redirects send `www.` to the canonical host and
 * strip trailing slashes, so search engines consolidate signals instead of indexing
 * duplicates. The router's own trailing-slash redirect is a temporary 307.
 * Returns null when the request is already canonical.
 */
export function canonicalRedirect(request: Request): Response | null {
  if (request.method !== "GET" && request.method !== "HEAD") return null;

  const url = new URL(request.url);
  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? url.hostname).split(":")[0];
  let changed = false;

  if (host === `www.${canonicalHost}`) {
    url.protocol = "https:";
    url.hostname = canonicalHost;
    url.port = "";
    changed = true;
  }
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    changed = true;
  }

  return changed
    ? new Response(null, { status: 301, headers: { Location: url.toString(), "Cache-Control": "public, max-age=3600" } })
    : null;
}
