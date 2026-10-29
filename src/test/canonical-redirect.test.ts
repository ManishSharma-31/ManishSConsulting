import { describe, expect, it } from "vitest";

import { canonicalRedirect } from "@/lib/canonical-redirect";

const req = (url: string, init: RequestInit = {}) => new Request(url, init);

describe("canonicalRedirect", () => {
  it("sends www to the canonical host over https with a 301", () => {
    const res = canonicalRedirect(req("http://www.manishsconsulting.tech/work/terraform-migration"));
    expect(res?.status).toBe(301);
    expect(res?.headers.get("Location")).toBe("https://manishsconsulting.tech/work/terraform-migration");
  });

  it("strips a trailing slash and keeps the query string", () => {
    const res = canonicalRedirect(req("https://manishsconsulting.tech/services/?ref=a"));
    expect(res?.status).toBe(301);
    expect(res?.headers.get("Location")).toBe("https://manishsconsulting.tech/services?ref=a");
  });

  it("fixes www and the trailing slash in a single hop", () => {
    const res = canonicalRedirect(req("https://www.manishsconsulting.tech/services/"));
    expect(res?.headers.get("Location")).toBe("https://manishsconsulting.tech/services");
  });

  it("honours x-forwarded-host behind a proxy", () => {
    const res = canonicalRedirect(req("http://internal:3000/about", { headers: { "x-forwarded-host": "www.manishsconsulting.tech" } }));
    expect(res?.headers.get("Location")).toBe("https://manishsconsulting.tech/about");
  });

  it("leaves canonical URLs, the root and non-GET requests alone", () => {
    expect(canonicalRedirect(req("https://manishsconsulting.tech/"))).toBeNull();
    expect(canonicalRedirect(req("https://manishsconsulting.tech/services"))).toBeNull();
    expect(canonicalRedirect(req("https://www.manishsconsulting.tech/contact/", { method: "POST" }))).toBeNull();
  });
});
