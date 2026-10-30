/**
 * Permanent (301) redirect from a trailing-slash URL to its slash-less twin, so search
 * engines see one URL per page (the router's own redirect for this is a temporary 307).
 *
 * This deliberately does NOT redirect between `www` and the bare domain. That choice
 * belongs to the host (Vercel's domain settings): redirecting in the app as well as at
 * the host sends the two redirects in opposite directions and produces
 * ERR_TOO_MANY_REDIRECTS. The Location is relative, so it can never name the wrong host.
 * Returns null when the request is already canonical.
 */
export function canonicalRedirect(request: Request): Response | null {
  if (request.method !== "GET" && request.method !== "HEAD") return null;

  const url = new URL(request.url);
  if (url.pathname.length <= 1 || !url.pathname.endsWith("/")) return null;

  const path = url.pathname.replace(/\/+$/, "") || "/";
  return new Response(null, {
    status: 301,
    headers: { Location: `${path}${url.search}`, "Cache-Control": "public, max-age=3600" },
  });
}
