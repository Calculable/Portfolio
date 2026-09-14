# Domain move — 2026-09-14

Authorized by user after confirming Basin delivery, GoatCounter and Vimeo work.
Primary URL: https://www.jan-huber.ch . Existing content path fields unchanged.

## Before change / rollback
DNS hosted by ns1/ns2/ns3.hosttech.ch. DNSSEC enabled; leave unchanged.
A @: 198.185.159.144, 198.49.23.145, 198.185.159.145, 198.49.23.144 (TTL 10800).
CNAME www: ext-cust.squarespace.com (TTL 10800).
Preserve MX mail.jan-huber.ch, SPF, DMARC, Google verification and Squarespace verification.
Squarespace subscription/site remains available for rollback.
Previous deployed commit: d681944; previous Astro site https://calculable.github.io with base /Portfolio and noindex.

## Checklist
- [x] Inspect and record original DNS.
- [x] Prepare original-domain build, root base and indexing.
- [x] Verify domain ownership with GitHub TXT record.
- [x] Set GitHub Pages custom domain www.jan-huber.ch.
- [x] Publish root-domain build (fc4526b; GitHub Actions 34820294887 succeeded).
- [x] Change apex A records and www CNAME at Hosttech.
- [x] Check authoritative DNS, HTTPS certificate, www/apex redirects and all original URLs.
- [x] Enable Enforce HTTPS in GitHub Pages.
- [ ] Allow residual DNS/edge caches to expire; check ordinary browser resolution and HTTP redirect after propagation.
- [x] Update GoatCounter site link to https://www.jan-huber.ch.

## Applied DNS
A @: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
CNAME www: calculable.github.io. Web-record TTL now 3600; previous cached values can remain for 10800 seconds.
TXT _github-pages-challenge-calculable: 881e009f50e16994e308227be59b54; domain ownership verified in GitHub.
Mail, Google/Squarespace verification, nameservers and DNSSEC retained.
Authoritative DNS verified; Astro homepage confirmed at GitHub origin over HTTP while certificate provisioning was pending.

## Verification checkpoint
- All 79 deployed HTML routes returned HTTP 200 from GitHub origin. Local route/link/media/anchor audit passed.
- Cloudflare DNS resolves www to calculable.github.io; Google DNS resolves the apex to all four GitHub Pages addresses. Some local caches still return the old Squarespace records.
- GitHub reports DNS check successful. Certificate issuance pending; used GitHub's documented remove/re-add custom-domain retry once after several minutes. HTTPS enforcement must be enabled when the certificate becomes available.

## Final origin verification
- Certificate issued; HTTPS validation succeeds without bypasses for www and apex. GitHub Enforce HTTPS is checked.
- 142 HTTPS URL variants (all original sitemap paths plus all generated routes) passed, zero failures. Astro homepage confirmed over verified TLS.
- Apex HTTPS and the old calculable.github.io/Portfolio address redirect permanently to the corresponding www path. Live robots.txt allows indexing and references the original-domain sitemap.
- All three authoritative nameservers, Cloudflare DNS and Google DNS return the intended records. GitHub's UI DNS check has intermittently reported stale InvalidCNAMEError despite successful certificate issuance and independently correct DNS.
- At 08:10 UTC local Chrome still showed Squarespace due to DNS caching, and the GitHub HTTP edge still served a previously cached 200 response (10-minute cache) despite HTTPS enforcement being enabled. These residual propagation checks remain; do not alter the correct DNS records or cancel Squarespace.
