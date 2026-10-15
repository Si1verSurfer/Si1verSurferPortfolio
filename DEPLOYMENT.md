# Deploying to [basharr.com](https://basharr.com)

This site is a **Next.js** app on **Vercel**. The canonical URL is set in `data/profile.ts` (`https://basharr.com`).

## 1. Connect GitHub (one time)

1. Open [vercel.com/new](https://vercel.com/new).
2. Import **Si1verSurfer/Si1verSurferPortfolio**.
3. Framework: **Next.js** (auto-detected). Root directory: `.`
4. Deploy.

## 2. Custom domain (one time)

1. Vercel project → **Settings** → **Domains**.
2. Add **`basharr.com`** and **`www.basharr.com`**.
3. At your domain registrar, set DNS as Vercel shows (typically):
   - **A** `@` → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`

DNS for basharr.com is already on Vercel if the site loads with `server: Vercel`.

## 3. Production environment variables

**Settings** → **Environment Variables** → scope **Production**:

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://basharr.com` |
| `RESEND_API_KEY` | Your [Resend](https://resend.com) API key |
| `CONTACT_TO_EMAIL` | `bashar772004@gmail.com` |
| `CONTACT_FROM_EMAIL` | `Portfolio <hello@basharr.com>` (after domain verified in Resend) |

Redeploy after adding variables.

## 4. Ship updates

Push to **`main`** on GitHub. Vercel rebuilds automatically when the repo is linked.

Manual redeploy: **Deployments** → latest → **Redeploy** → **Production**.

## 5. CLI (optional)

```bash
npm i -g vercel
vercel login
vercel link
vercel --prod
```
