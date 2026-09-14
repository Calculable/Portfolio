# Squarespace → Astro migration

## Requirements
- Preserve existing URL paths under the temporary /Portfolio base; domain migration is later.
- Migrate all public, online pages; exclude disabled/hidden and unpublished pages.
- Preserve text (only obvious typo fixes), images, downloads, captions, links and HTML SEO metadata.
- Clean consistent design, simple code; no Squarespace animated background.
- Easy-to-edit text content; download publicly available assets so the site does not depend on Squarespace.
- Reuse Basin for forms (existing endpoint https://usebasin.com/f/ff509d632e80).
- Existing /portfolio migration must be retained.
- Do not modify Squarespace, change domain, migrate analytics, or push/deploy.
- Work on branch migrate/squarespace-content, test locally, announce each completed page and continue.
- Document technical decisions and keep this checklist current for another agent.

## Inventory and scope
Source sitemap downloaded 2026-09-13: migration/source/sitemap.xml (63 URLs).
Squarespace Pages inspected read-only: most published pages are “Nicht verlinkt”; this is not the same as disabled. AI-generiertes Hörspiel is explicitly disabled and absent from sitemap. Use sitemap plus public links for scope, excluding disabled pages.
Homepage / is included. /jan-huber-portfolio is its source alias and shares home.md.

## Decisions
- Keep Astro and the existing GitHub Pages base configuration.
- Keep existing preview noindex until domain/indexing launch is explicitly requested; preserve source SEO separately.
- Markdown content and OpenStreetMap embeds; implementation details below.

## Checklist
- [x] / — homepage; local browser and build verified
- [x] /fotoorte-zuercher-oberland — migrated and verified
- [x] /fotoorte-zuercher-oberland/ambitzgi-riet — migrated and verified
- [x] /fotoorte-zuercher-oberland/bachtel — migrated and verified
- [x] /fotoorte-zuercher-oberland/brandegg — migrated and verified
- [x] /fotoorte-zuercher-oberland/einzelner-baum-bei-adetswil — migrated and verified
- [x] /fotoorte-zuercher-oberland/fehraltorf — migrated and verified
- [x] /fotoorte-zuercher-oberland/giessenfaelle-bei-neuthal — migrated and verified
- [x] /fotoorte-zuercher-oberland/greifensee — migrated and verified
- [x] /fotoorte-zuercher-oberland/wildbach-tobel-bei-hinwil — migrated and verified
- [x] /fotoorte-zuercher-oberland/hochmoor-wildert-bei-illnau — migrated and verified
- [x] /fotoorte-zuercher-oberland/hoernli — migrated and verified
- [x] /fotoorte-zuercher-oberland/huettchopf — migrated and verified
- [x] /fotoorte-zuercher-oberland/itziker-riet — migrated and verified
- [x] /fotoorte-zuercher-oberland/roemer-kastell-irgenhausen — migrated and verified
- [x] /fotoorte-zuercher-oberland/kemptner-tobel — migrated and verified
- [x] /fotoorte-zuercher-oberland/kempt-bei-illnau — migrated and verified
- [x] /fotoorte-zuercher-oberland/kyburg — migrated and verified
- [x] /fotoorte-zuercher-oberland/pfannenstiel-aussichtsturm — migrated and verified
- [x] /fotoorte-zuercher-oberland/robenhauser-ried — migrated and verified
- [x] /fotoorte-zuercher-oberland/ried-in-bubikon — migrated and verified
- [x] /fotoorte-zuercher-oberland/rosinli — migrated and verified
- [x] /fotoorte-zuercher-oberland/sagenraintobel — migrated and verified
- [x] /fotoorte-zuercher-oberland/scheidegg — migrated and verified
- [x] /fotoorte-zuercher-oberland/schnebelhorn — migrated and verified
- [x] /fotoorte-zuercher-oberland/schreizen-giessen-wasserfall — migrated and verified
- [x] /fotoorte-zuercher-oberland/schweipel — migrated and verified
- [x] /fotoorte-zuercher-oberland/schwerzenbach-am-greifensee — migrated and verified
- [x] /fotoorte-zuercher-oberland/seegraeben — migrated and verified
- [x] /fotoorte-zuercher-oberland/pfaeffikersee-seequai — migrated and verified
- [x] /fotoorte-zuercher-oberland/pfaeffikersee-seestege — migrated and verified
- [x] /fotoorte-zuercher-oberland/sitzberg — migrated and verified
- [x] /fotoorte-zuercher-oberland/tannertobel — migrated and verified
- [x] /fotoorte-zuercher-oberland/tobelweiher — migrated and verified
- [x] /fotoorte-zuercher-oberland/taetschtobel-bei-illnau — migrated and verified
- [x] /fotoorte-zuercher-oberland/tauferhoehle — migrated and verified
- [x] /fotoorte-zuercher-oberland/wildberg-tobelbach — migrated and verified
- [x] /blocky — text/image preservation and build verified
- [x] /24h-hintergrundbild — text/image preservation and build verified
- [x] /pixly — text/image preservation and build verified
- [x] /walky — text/image preservation and build verified
- [x] /game-of-gale — text/image preservation and build verified
- [x] /jan-huber-portfolio — text/image preservation and build verified
- [x] /unsplash-fotoarchiv — migrated and verified
- [x] /kontakt — migrated; Basin fields and local browser verified
- [x] /datenschutzerklaerung — text/image preservation and build verified
- [x] /portfolio — previously migrated; lightbox, next/close and all 42 photos verified
- [x] /ortsverwaltung — migrated and verified
- [x] /noteophant — migrated and verified
- [x] /erste-programmierprojekte — migrated and verified
- [x] /informatikprojekte-berufsausbildung — migrated and verified
- [x] /informatikprojekte-an-der-fachhochschule-ost — migrated and verified
- [x] /timetracker — migrated and verified
- [x] /abschlussarbeit-informatikmittelschule-ipa — migrated and verified
- [x] /radio-recorder — migrated and verified
- [x] /textprocessor — migrated and verified
- [x] /wasserfall-verzeichnis — migrated and verified
- [x] /generative-art — migrated and verified
- [x] /bachelorarbeit — migrated and verified
- [x] /remember-app/privacy-policy — migrated and verified
- [x] /still-remember-app — migrated and verified
- [x] /memosaurus-app — migrated and verified
- [x] /note-finder — migrated and verified
- [x] /endless-peaks-app — migrated and verified

## Verification and handoff
Migration complete locally. All 72 HTML routes build and pass link/asset checks. No commits, pushes, deployment or domain changes performed.

## Confirmed scope clarification
User confirmed: include publicly linked support/privacy pages omitted from sitemap.
Public homepage also links /staatskunde, which returns 200: include it.
/contact returns 404 on the original site: do not reproduce the error; investigate referring link.

## Implementation decisions
- Markdown in src/content/pages with original HTML SEO in frontmatter. Semantic HTML only for figures, links, embeds and forms.
- One shared Astro layout and a static catch-all route preserve original paths. Build-time rewriting adds /Portfolio to internal links and local media.
- OpenStreetMap embeds replace Squarespace maps at the original marker coordinates; direct map links are also provided. No API key or map library.
- Vimeo remains embedded independently of Squarespace; native Squarespace videos will be downloaded.
- Basin uses the existing endpoint, required name, email and message fields (the main contact form now uses one name field). No real test messages sent.
- System fonts match the existing migrated portfolio; no remote font dependency.
- Source HTML snapshots stay local (gitignored); sitemap and asset provenance manifest are retained.
- Current local preview: http://127.0.0.1:4323/Portfolio/ (Astro assigned this port).

Website privacy policy updated at the user’s request to describe GitHub Pages, Basin, OpenStreetMap and Vimeo; obsolete Squarespace analytics/cookie sections removed. App policies retain their source content. No analytics code was copied.

## Source link corrections
- /remember-app/privacy-policy linked to nonexistent /contact (original returns 404). Corrected to its live app-specific /remember-app/contact page.
- /pixly used /flappybird.io as a relative link; corrected the obvious URL typo to https://flappybird.io.
- Tätschtobel has only map centre coordinates, no marker; reused those coordinates. Tannertobel original marker and address coordinates differ; original marker preserved rather than inventing a correction.
- Kept Article JSON-LD (author, dates, headline, image) and WebSite JSON-LD; mapped domain/media references to the temporary site. Homepage alias retains the original canonical-to-root relationship.

## Additional public pages completed
- [x] /staatskunde
- [x] /endless-peaks/contact
- [x] /note-finder/contact
- [x] /remember-app/contact
- [x] /memosaurus/privacy-policy
- [x] /memosaurus/contact
- [x] /5second-app/privacy-policy
- [x] /5seconds-app/contact

## Final implementation notes
- 79 HTML routes after the requested follow-up: 77 Markdown content documents plus the homepage alias and existing Astro portfolio.
- /jan-huber-portfolio and / share home.md. Both work; canonical is root, matching the source.
- 430 valid local image files, the original favicon, and one native MP4 video (1566×1080, 23.883 seconds). Media provenance is in migration/assets.json and migration/video.json. The video has no audio stream in the source.
- The 35-location overview displays all entries on one page, retaining titles; author/date labels removed at the user’s request. Previous/next article links remain.
- Source SEO meta fields include descriptions, Open Graph, Twitter cards, article dates, author, and geographic coordinates. Article/WebSite JSON-LD retained. Original portfolio SEO implementation retained; its favicon/navigation were updated.
- Existing noindex retained on every preview page. New sitemap.xml has unique canonical URLs under the temporary GitHub Pages base.
- No Squarespace runtime JS, analytics, CSS, fonts, image hosting or video player dependencies. The website privacy policy now describes the current services.
- Forms use plain native POST to existing Basin endpoint, matching the established template. Basin displays its standard success page. Each form includes its source page path. Submission/email delivery was not tested by sending messages.
- Responsive system-font styling and a shared header/footer retain the existing portfolio’s visual style. Original large animated hero is replaced by a static white introduction.

## Verification completed
- Production build: 72 HTML routes, plus sitemap.xml.
- Original sitemap coverage: every URL present; disabled AI-generiertes Hörspiel not included.
- All source text blocks and image captions found in generated content; image-count checks pass.
- All local links, media references and in-page anchors resolve, including /Portfolio base paths.
- All 430 image files decoded successfully with image metadata inspection.
- Local MP4 metadata: 1566×1080 H.264, 23.883333 seconds; browser loaded duration correctly with no media error.
- Browser visual checks: homepage desktop/mobile (390px), contact and English support form, photo article and OpenStreetMap, photo-location overview, app page, and existing gallery.
- Gallery regression: 42 photos, lightbox opens, next advances from 1/42 to 2/42, close works.
- No real Basin form submissions sent; no external account/settings changes.

## Handoff / future work (not part of this migration)
1. User can review http://127.0.0.1:4323/Portfolio/ while the local server runs. To restart, use npm run dev and the port Astro reports.
2. Review visual preferences and content against the source; editing guide is in README.md.
3. Before public launch, review the updated privacy policy against any service changes made since this local migration.
4. Domain migration, analytics, indexing approval, and deployment remain explicitly deferred. Do not push to main without a new request (the existing workflow deploys main).
5. Current branch: migrate/squarespace-content. Changes are uncommitted and local. The original website has not been modified.

Final SEO comparison: 1,358 original metadata fields checked against built HTML; zero mismatches after the intentional base-domain/media URL mapping (empty attributes treated as empty values).


## User follow-up completed (2026-09-13)
- [x] Removed homepage “Projekte” heading; project images and titles link to their pages (33 linked projects, 2 without a published target).
- [x] Smooth Software anchor scroll, respecting reduced-motion preferences.
- [x] Extracted 35 projects into editable src/content/projects.json; editing instructions in README.md.
- [x] Portfolio images now use native src/srcset and lazy loading; no dependence on IntersectionObserver for image URLs. Verified all 42 load in the production preview, including the final image in the lightbox.
- [x] Main contact form has one required name field.
- [x] Datenschutzerklärung title and content updated for actual hosting, forms, maps, video, and cookie behavior. Provider documentation linked in the page. Vimeo embeds use dnt=1; this limits tracking but does not guarantee zero cookies.
- [x] Shared compact project header: optional 88px icon (64px mobile), optional cover capped at 200px, one heading. NoteFinder icon reduced.
- [x] Bachelorarbeit heading has no forced break; thesis link corrected to https://eprints.ost.ch/id/eprint/1051/.
- [x] Photo captions centered and subdued; content images capped at 640px/70vh (520px/65vh mobile); gallery fallback also has a height cap.
- [x] Photo-location index and all 35 articles omit visible author/date; source SEO metadata retained. Navigation uses “Weiter:” / “Zurück:”.
- [x] Single main titles “Radio Recorder” and “Tax Monitor”. Training project videos/content shown directly, without disclosure sections.
- [x] /walky/privacy-policy
- [x] /walky/contact
- [x] /note-finder/privacy-policy
- [x] /last-directory-app/privacy-policy
- [x] /last-directory-app/contact
- [x] /endless-peaks/privacy-policy
- [x] /endless-peaks/contact (already transferred, retained)
- [x] /memosaurus/terms-of-use
- Corrected legacy links /forgotten-os/contact and /contact in the new pages to /last-directory-app/contact and /memosaurus/contact respectively.
- Additional-page source comparison passed for six pages. NoteFinder policy differs only in four literal double-asterisk markers, now rendered as emphasis; policy wording is unchanged.
- Production build and local-link/media/anchor audit: 79 HTML routes, zero errors. Original sitemap coverage remains complete.
- Browser checks: desktop homepage project links and smooth-scroll setting; all 42 production gallery images and last-image lightbox; compact NoteFinder header; mobile Bachelorarbeit heading without a forced break or overflow; mobile single-name contact form.
- Production preview: http://127.0.0.1:4324/Portfolio/ . Editable development preview remains on port 4323.
- Branch remains migrate/squarespace-content. No push, domain change, source-site changes, or analytics migration.


## Mobile navigation and terminal introduction (2026-09-13)
- [x] Shared header uses a menu button at widths up to 760px; desktop links keep their existing arrangement. The button exposes expanded state, supports Escape with focus return, and closes on link/outside click. Without JavaScript, navigation links remain visible.
- [x] Homepage introduction retains the text in home.md, displayed inside a terminal-style panel using system monospace fonts. CSS cursor blinks four times, then stays visible; reduced-motion preferences disable the animation. No new dependency or remote font.
- [x] Production build and link audit: 79 routes, zero errors. Browser verified 390px mobile closed/open menu, Escape and focus return, no horizontal overflow, and desktop layout. Local preview remains http://127.0.0.1:4324/Portfolio/.


## Playful homepage project cards (2026-09-13)
- [x] Replaced the long plain list with softly coloured cards, terminal-style sequential numbers, framed images, and arrow links. First project spans both desktop columns; remaining cards use two columns, stacking on mobile.
- [x] Small hover lift and alternating image tilt apply only with a hover-capable pointer and no reduced-motion preference. No dependency, content rewrite, or changes to project data maintenance.
- [x] Production build/link audit: 79 pages, zero errors. Desktop and 390px mobile visually checked; all 35 projects remain, with 33 image/title links and no horizontal overflow. Two projects without target URLs remain unlinked.


## Cleaner cards and immersive terminal (2026-09-13)
- [x] User refinement: retained the rounded two-column card grid and subtle hover lift/zoom, removed all project numbering, per-project colours, image rotation and heavy shadows. All image stages use the same neutral background.
- [x] “Anzeigen” is now a simple text link with an inline arrow, without the divider or coloured circle. Images and titles remain clickable; project content/order unchanged.
- [x] Homepage terminal now fills the available page width and shares its dark background with the top navigation. Removed window border, rounded container, shadow and window dots. Content stays aligned with the card grid; mobile menu retained.
- [x] Build/link audit: 79 pages, zero errors. Desktop/mobile visual checks passed; all 35 cards present, no number elements or mobile horizontal overflow. No push or source-site changes.


## Equal cards and edge-to-edge images (2026-09-13)
- [x] Fotoarchiv now occupies one normal grid cell, matching the other projects.
- [x] Removed artwork padding/background; images fill a square area at the top of each card using object-fit: cover. Non-square sources are cropped centrally in these previews; original assets are unchanged. Rounded outer corners and subtle hover retained.
- [x] Production build/link audit: 79 pages, zero errors. Desktop preview checked for matching card sizes and edge-to-edge images.


## Fluid project grid (2026-09-13)
- [x] Removed grid maximum width; automatic columns use a 300px minimum card width and share available space. Existing outer padding remains; mobile stays one column.
- [x] Browser verified four columns at 1453px, five at 1920px, one at 390px; no horizontal overflow. Build/link audit: 79 pages, zero errors. Local only.


## Authorized GitHub Pages release (2026-09-14)
- User explicitly requested “push and deploy”. Release target is the existing GitHub Pages site at https://calculable.github.io/Portfolio/ via main.
- Final production build: 79 pages; local link/media/anchor audit: zero errors. Remote main checked; no divergent changes.
- Source files approximately 302 MiB; generated site approximately 348 MiB. Dependencies, generated output and downloaded source HTML remain excluded from Git.
- Domain, original Squarespace site, analytics and noindex remain unchanged. Earlier “local only / nothing pushed” notes describe historical checkpoints, superseded by this release authorization.

## Content organization and markup cleanup (2026-09-14, local review)
- Branch: refactor/content-organization. These follow-up edits are not committed, pushed or deployed.
- Every former top-level content file now lives in a project/page directory as index.md. App support/privacy pages are grouped with their project: endless-peaks, memosaurus, still-remember, 5seconds, etc. Existing path/canonicalPath/aliases fields are unchanged; filesystem names do not determine routes.
- Removed 1,020 empty/redundant metadata entries from frontmatter: duplicate itemprop microdata, Twitter fields covered by Open Graph, repeated site name/URL, empty descriptions and obsolete geographic Open Graph fields. Site name/URL are generated centrally. Retained meaningful descriptions, Open Graph previews, twitter:card, canonical URLs, noindex and Article JSON-LD. Generic WebSite JSON-LD remains on the homepage only. Portfolio metadata similarly deduplicated.
- Preserved every original span/anchor ID and position to keep existing fragment links working. These anchors are not needed on new pages but may have external incoming links.
- Converted 318 simple image figures to ordinary Markdown. An immediately following italic paragraph is rendered as its figure caption by a small build-time helper, src/lib/content-images.js. Original dimensions are kept in src/content/image-dimensions.json; lazy loading/decoding and caption appearance preserved. Complex figures, maps, videos and forms retain HTML. No new dependencies or client JavaScript.
- README.md documents the new structure, Markdown image/caption convention, dist output and migration archive. migration/README.md explains provenance files. Source comparison helper now locates moved pages by source URL.
- Verification: build and link audit pass for all 79 routes. Automated before/after comparison confirms identical route sets, normalized visible text, image references and anchor IDs. Browser checked Markdown image rendering, dimensions, lazy loading and captions on Bachelorarbeit. noindex retained on all pages.


## Remove unused section anchors (2026-09-14, local review)
- User requested retaining only section anchors actually linked within this site; this supersedes the earlier blanket preservation decision.
- Scanned generated HTML and source links: the homepage Software link (also on its alias) is the only page-section target in use. Kept page-section-625aab9ff90d7a4b52b57ace on ProjectList.
- Removed 124 unused span anchors and 35 unused project-card anchor fields/IDs. Old external bookmarks to those removed fragments no longer target a section; page URLs are unchanged.
- Verification: production build and link/anchor audit pass for all 79 pages; only the used project-list section ID remains in source. Changes remain local on refactor/content-organization.

## GoatCounter integration (2026-09-14, local review)
- User explicitly authorized GoatCounter implementation; this supersedes the earlier deferral of analytics. Signed-in Chrome dashboard supplied the endpoint https://janhuber.goatcounter.com/count.
- Added shared Analytics.astro to both layouts. Production-build gate plus configured-site hostname gate prevents loading on localhost and other preview hosts; Do Not Track is respected. Uses the official async https://gc.zgo.at/count.js script, without extra click/form events or a new banner.
- GoatCounter “Your site” set to https://calculable.github.io so current /Portfolio page paths link correctly. Existing private dashboard and individual-pageview-storage-off settings preserved. Account email verification is pending; user informed.
- Updated website privacy statement for aggregate statistics, temporary session recognition, provider/hosting and DNT behavior. No source-site or domain change.
- Validation: production build and link audit pass for all 79 pages. Executed each generated loader with simulated local, preview, production and DNT contexts: correct endpoint, one loader per page, no loading outside the permitted conditions. Browser confirmed no external analytics script on the local production preview. No synthetic pageviews sent; dashboard receipt remains to be checked after deployment.
- Changes remain local on refactor/content-organization along with the content/SEO/anchor cleanup. Not pushed or deployed.


## Follow-up release authorized (2026-09-14)
- User requested push and deploy of the content organization, SEO/anchor cleanup and GoatCounter integration. Earlier local-only notes describe pre-release checkpoints.
- Final production build/link audit passes for 79 pages. Domain and noindex remain unchanged.

## Domain launch authorized (2026-09-14)
- User confirmed form delivery, GoatCounter and Vimeo, then explicitly authorized moving the domain while preserving URLs.
- Deployed fc4526b via successful Actions run 34820294887. Astro site is https://www.jan-huber.ch with base /; production noindex removed and robots.txt added. All existing content route fields remain unchanged.
- Verified domain ownership with GitHub, configured www.jan-huber.ch as the Pages custom domain, and changed only the five web DNS records at Hosttech. Registration, nameservers, DNSSEC, mail and other verification records retained. Squarespace remains available for rollback.
- GoatCounter site link updated to https://www.jan-huber.ch; account verification and receipt were confirmed by user.
- Local build/audit: 79 pages, zero errors. All 79 routes served successfully from GitHub origin over HTTP; public DNS resolvers now return GitHub records. HTTPS provisioning still pending at this checkpoint.
- See DOMAIN-MOVE.md for exact DNS records, rollback information and remaining verification. Earlier preview/noindex/domain deferral notes are historical and superseded by this launch.
- Certificate subsequently issued and Enforce HTTPS enabled. All 142 original/generated HTTPS URL variants pass; apex and old GitHub Pages addresses preserve paths in redirects. Residual browser DNS/HTTP edge caches still propagating; recorded in DOMAIN-MOVE.md.

## Pfäffikon – Historisch (2026-09-14)
- [x] User explicitly requested this additional page; original URL /historische-bilder-pfaffikon-zh retained.
- [x] Original text, nine image pairs, dates, source/licence links and SEO imported. All 19 images (including header) stored in public/media/pfaeffikon-historisch.
- [x] Existing homepage card activated and obsolete offline label removed.
- Technical decision: lightweight custom element with native range input and CSS clipping replaces the old comparison widget. Supports keyboard and touch; without JavaScript both images remain visible side by side. No third-party runtime or new dependency. Text remains Markdown; comparison pairs use small HTML blocks because they are interactive.
- Branch content/pfaeffikon-historisch. Existing unrelated SiteHeader.astro and portfolio.css edits left untouched.
- [x] Local build: 80 pages; link/media/anchor audit: zero errors. Nine sliders initialized; keyboard Home/End/Arrow controls verified, mobile viewport has no horizontal overflow.
- [x] User approved merge and deployment of the Pfäffikon page and restored comparison slider.

### Original comparison-slider styling restored
- Adapted the user's supplied Squarespace snippet: circular 44px arrow handle with shadow, labels over the images, 70% starting position and a bounce reveal when scrolled into view. Labels hide when their image side becomes too narrow.
- Retained the native range control for keyboard/touch interaction instead of loading jQuery 2.1.1 and jQuery Mobile from external CDNs. Omitted the snippet's global rewrite of every link to rel=external, which served the old mobile framework. Images remain local. Reduced-motion preferences disable the opening animation.
- Browser verified photo overlay, handle, labels, click and keyboard changes; production build and 80-page link audit pass. Still local, not published.

### Pfäffikon release authorization
- User requested “merge and deploy”. Final production build and link/media/anchor audit pass for 80 pages; remote main has no divergent commits. Earlier local-only notes describe review checkpoints.
