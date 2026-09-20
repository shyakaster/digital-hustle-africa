# Digital Hustle Africa — Podcast Landing Page

Official single-page site for **Digital Hustle Africa**, a revived podcast about how Africans at
home and across the diaspora navigate work, ambition, and life in the global digital economy.

- Hosts: **Alex** (UK/Uganda) & **Chaz** (Sacramento, CA)
- Season 1: 8 bi-weekly episodes (video + audio)
- Live domain: `digitalhustleafrica.space` (Namecheap → Vercel)

## Stack

Static site — `index.html` + Tailwind CDN + Plus Jakarta Sans. No build step.

## Develop

```bash
npm install
npm run lint:html
npm run format:check
# preview
python3 -m http.server 8080
# → http://localhost:8080
```

## CI

- `CI` — HTMLHint, Prettier check, Lychee link check on every PR/push to `main`.
- `Lighthouse` — on-demand + weekly performance/accessibility audit (artifacts uploaded).
- Dependabot — weekly npm + GitHub Actions updates.

## Deploy (Vercel)

1. Import this repo in Vercel → Framework Preset: **Other**, no build command, output: `.`
2. Add custom domain `digitalhustleafrica.space` (+ `www`) in Vercel → Domains.
3. Namecheap → Advanced DNS:
   - `A` `@` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com.`
   - Remove conflicting A / URL-redirect records.
4. Wait for DNS + Vercel SSL to go green.

## Repo hygiene

- Branch from `main`, open PRs with the template checklist.
- Keep the page dependency-free (CDN only) so deploys stay instant.
