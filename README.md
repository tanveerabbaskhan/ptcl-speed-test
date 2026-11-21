# PTCL Speed Test — Astro Clone

A modern rebuild of [ptclspeed.com.pk](https://ptclspeed.com.pk) as a fast, static
Astro 5 site — same purpose (a free PTCL internet speed test for Pakistan), with the
original's gaps filled in.

## What's in the clone

| Page | Purpose |
| --- | --- |
| `/` | Homepage: live speed test in the hero, what the test measures, speed-needs table, why speed drops below your package, FAQ |
| `/speed-test` | Dedicated test page with accuracy tips |
| `/speedtest/` | Provider index — all 13 provider tests |
| `/speedtest/<provider>` | One page per provider (PTCL, Nayatel, StormFiber, Jazz, Zong, Telenor, EVO, Wateen, Wi-Tribe, FiberLink, Transworld, KK Networks, Connect Communications), each with the live test widget plus provider-specific guidance. Data-driven from `src/data/providers.ts` via a single dynamic route |
| `/packages` | PTCL speed tiers (DSL vs Flash Fiber) and how to choose — prices deliberately not listed, they change too often |
| `/guides/` | Guide index |
| `/guides/understanding-your-results` | Download / upload / ping / jitter explained, incl. Mbps vs MBps |
| `/guides/improve-ptcl-speed` | 10 fixes ordered by impact, incl. when to call PTCL (1218) |
| `/guides/ping-jitter-explained` | Ping & jitter for gaming and calls |
| `/faq` | 12 questions with FAQPage schema |
| `/about`, `/contact`, `/privacy-policy` | Standard pages the original lacks |

## The speed test (real, client-side)

`src/components/SpeedTest.astro` runs a genuine test in the browser — no backend:

- **Ping & jitter** — repeated tiny requests to the nearest Cloudflare edge server
- **Download** — 4 parallel streams, measured after a 1 s warm-up
- **Upload** — 3 parallel POST streams
- Live SVG gauge (log scale, 0–1000 Mbps), phase indicator, progress bar
- Plain-English verdict based on the result
- History saved in `localStorage` only, with copy-result and clear-history buttons
- Server/IP detection via Cloudflare's meta endpoint, with graceful fallback

Test traffic uses Cloudflare's public speed-test endpoints
(`speed.cloudflare.com/__down` and `/__up`), the same ones Cloudflare's own speed
test uses.

## Gaps in the original that this covers

1. **Working test on the homepage** — the original's homepage is mostly text and links
   out to a test; here the test is the hero.
2. **Outdated content** — the original quotes decade-old statistics (2.7 billion users,
   South Korea at 38 Mbps). All copy here is rewritten and current.
3. **No guides** — the original has no how-to content; this adds 3 guides + FAQ.
4. **No packages page** — added, with DSL vs fibre explained.
5. **No trust/legitimacy pages** — added About, Contact, Privacy, plus an
   "independent, not affiliated with PTCL" disclaimer in the footer.
6. **No test history or result sharing** — added (local only).
7. **SEO basics** — meta descriptions, canonical URLs, Open Graph, sitemap
   (`@astrojs/sitemap`), robots.txt, FAQPage + WebSite JSON-LD schema.
8. **Mobile-first responsive design** — sticky header with mobile menu, responsive
   gauge and grids.
9. **Performance** — static Astro output, zero client JS except the test widget and
   the mobile menu; no frameworks shipped to the browser.
10. **Branded 404 page** — the original returns a bare plain-text "404 page not
    found"; this site has a proper 404 with navigation back to the test and homepage.
11. **Own speed test, nearest server** — the original embeds Ookla's widget, which
    defaulted to a US server (Wichita, KS) on visit. This test measures against the
    nearest Cloudflare edge server, with no app-install banner and no ad pushing the
    test below the fold.

## Deliberately not cloned: the directories

The original has two long directory tables — PTCL Exchanges
(`/ptcl-exchange.html`, ~200 entries, Punjab only) and Ufone Franchises
(`/ufone-franchise.html`, ~240 entries). Both were reviewed (21 Nov 2026) and
deliberately left out of this build:

- Entries are heavily duplicated (same exchange/franchise listed 2–5 times,
  sometimes with different spellings: "Gawader", "Fsd", "Bunair"/"Buner").
- Many rows have blank contact fields; the Ufone table has no phone column at all.
- Coverage is lopsided (PTCL table is Punjab-only despite the "near me" label).
- Bulk-copying a stale, duplicated table would import the original's worst content.

If directories are wanted, the right move is to compile fresh data from official
PTCL/Ufone sources and build searchable, filterable directory pages (search by
city, deduped, with a map link per entry) — the page templates for that are a
small addition once the data exists.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview the production build
```

## Before launch

- Set the real domain in `astro.config.mjs` (`site`), `public/robots.txt`, and the
  `siteUrl` in `src/layouts/BaseLayout.astro` (currently `ptclspeed.example.com`).
- Replace the placeholder contact email in `src/pages/contact.astro`.
- Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages,
  GitHub Pages).

## Notes

- All copy is original, written for this rebuild — no text was copied from the
  source site.
- PTCL package prices are intentionally not listed; the packages page explains why
  and points to ptcl.com.pk / helpline 1218.
