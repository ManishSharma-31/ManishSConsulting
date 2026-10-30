import { describe, expect, it } from "vitest";

import { canonicalRedirect } from "@/lib/canonical-redirect";

const req = (url: string, init: RequestInit = {}) => new Request(url, init);

describe("canonicalRedirect", () => {
  it("strips a trailing slash with a permanent, relative redirect", () => {
    const res = canonicalRedirect(req("https://www.manishsconsulting.tech/services/"));
    expect(res?.status).toBe(301);
    expect(res?.headers.get("Location")).toBe("/services");
  });

  it("keeps the query string", () => {
    const res = canonicalRedirect(req("https://www.manishsconsulting.tech/contact/?ref=a"));
    expect(res?.headers.get("Location")).toBe("/contact?ref=a");
  });

  it("never redirects between www and the bare domain, so it cannot loop with the host", () => {
    expect(canonicalRedirect(req("https://manishsconsulting.tech/services"))).toBeNull();
    expect(canonicalRedirect(req("https://www.manishsconsulting.tech/services"))).toBeNull();
    expect(canonicalRedirect(req("https://www.manishsconsulting.tech/"))).toBeNull();
  });

  it("produces a target that is itself left alone", () => {
    const location = canonicalRedirect(req("https://example.test/work/"))?.headers.get("Location") ?? "";
    expect(canonicalRedirect(req(`https://example.test${location}`))).toBeNull();
  });

  it("ignores non-GET requests", () => {
    expect(canonicalRedirect(req("https://www.manishsconsulting.tech/contact/", { method: "POST" }))).toBeNull();
  });
});
