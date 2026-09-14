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
- [ ] Publish root-domain build.
- [ ] Change apex A records and www CNAME at Hosttech.
- [ ] Check DNS, HTTPS certificate, www/apex redirects and all original URLs.
- [ ] Update GoatCounter site link.
