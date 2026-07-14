---
name: icons-pro-max
description: >
  The single source of truth for every icon on the Personal Web:
  payment methods, QR codes, social/app brand marks, download badges, the
  lucide-react UI icon set, and 50 tech-stack logos. Gives the exact asset path,
  React component, canonical size, brand color, render recipe, and accessibility
  rule for each icon — plus an anti-slop checklist so an agent never redraws a
  logo, recolors a brand mark, distorts an aspect ratio, or re-inlines a
  duplicated icon. Use whenever adding, rendering, swapping, or auditing an icon
  anywhere in the site.
---

# Icon Pro Max — The Complete Icon System

> Every icon the site ships, in one catalog. Before you place, swap, or invent an
> icon: find it here first. If it exists, **reuse the canonical component / asset
> path and size** — do not paste a fresh `<svg>` or a new PNG. If it does not
> exist, add it to the right group *and* update this catalog in the same change.
>
> The load-bearing rule: **an icon carries a brand's identity. Reproduce it
> exactly — never redraw, recolor, or restretch a logo.** Generic UI glyphs
> (lucide) are the only icons you may freely restyle.

Asset roots:
- **In the web app:** `public/…` (served at `/…`) and inline React components in `src/`.
- **In this skill:** `assets/{payment,social,tech,badge}/` — a self-contained mirror so the catalog is usable outside the repo.

---

## 0. PICK THE RIGHT GROUP FIRST

| You need… | Group | Section | Render style |
|-----------|-------|---------|--------------|
| A checkout / donate payment mark | **Payment** | §1 | White badge wrapper, fixed per-logo height |
| A scannable pay code | **QR** | §2 | Raster image or VietQR dynamic URL |
| A link to a social / contact account | **Social & App** | §3 | `currentColor` inline SVG (or brand SVG for Zalo/Gmail) |
| A generic action / status glyph (close, download, check…) | **UI (lucide)** | §4 | `lucide-react`, `currentColor`, sized by class |
| A technology / tool logo (portfolio) | **Tech stack** | §5 | Brand-colored SVG file |
| An app store or OS download badge | **Download badges** | §6 | Brand-colored SVG badge, black background |

**Decision rule:** a *brand* (company, product, payment network) → its exact logo asset (§1/§3/§5/§6/§7). A *concept* (save, delete, warning) → a lucide glyph (§4). Never substitute one for the other (a lucide `credit-card` is not the Visa logo).

---

## 1. PAYMENT METHODS

Brand payment marks. Rendered through the shared **badge wrapper** in `src/PaymentLogos.tsx` — a white, bordered, rounded chip that gives every logo equal optical weight regardless of its native aspect ratio.

### 1.A Catalog

| Logo | Component | Web asset | Skill asset | Canonical height | Notes |
|------|-----------|-----------|-------------|:---:|-------|
| VietQR | `VietQRLogo` | `/payment/vietqr.svg` | `assets/payment/vietqr.svg` | **13px** | national QR scheme |
| VNPAY | `VnpayLogo` | `/payment/vnpay.svg` | `assets/payment/vnpay.svg` | **16px** | |
| ZaloPay | `ZaloPayLogo` | `/payment/zalopay.svg` | `assets/payment/zalopay.svg` | **11px** | wordmark is wide → shortest height |
| MoMo | `MoMoLogo` | `/payment/momo.svg` | `assets/payment/momo.svg` | **18px** | square mark → tallest |
| Visa | `VisaLogo` | `/payment/visa.svg` | `assets/payment/visa.svg` | **12px** | card network |
| Mastercard | `MastercardLogo` | `/payment/mastercard.svg` | `assets/payment/mastercard.svg` | **17px** | card network |

Extra variants in `assets/payment/` (not in the badge set): `zalo.svg`, `zalo-icon.png` — the Zalo app mark bundled with payment; for social/contact use prefer §3 Zalo.

### 1.B The badge wrapper (single source — do not re-implement)

```tsx
// src/PaymentLogos.tsx
const BADGE =
  "inline-flex h-6 items-center justify-center rounded-md border border-neutral-200 bg-white px-1.5 shadow-sm";

const Logo = ({ src, alt, h }: { src: string; alt: string; h: number }) => (
  <span className={BADGE}>
    <img src={src} alt={alt} style={{ height: h, width: "auto" }}
         className="block max-w-none" draggable={false} loading="eager" decoding="sync" />
  </span>
);
```

**Rules**
- The badge is a fixed **24px (`h-6`)** chip; the logo height is the per-logo value above — never equalize heights, the values are tuned so every mark reads at the same optical size.
- Always `width: auto` — **never set both width and height** (distorts the mark). Aspect ratio is sacred.
- `loading="eager"` + `decoding="sync"`: payment trust marks must not pop in late.
- The white `bg-white` is required — these logos assume a light backing; do not drop them onto a dark or tinted surface bare. (The bundled `assets/payment/*.svg` copies carry a white rounded tile so they preview correctly on dark backdrops like the README; the web renders them via the badge wrapper instead.)
- Import the component; do not hand-roll `<img src="/payment/…">` at call sites.

---

## 2. QR CODES

| QR | Web asset | How |
|----|-----------|-----|
| MoMo static | `/qr_momo.png` | raster `<img>`, render on a white card (personal pay code — lives in the web `public/`, not bundled in this skill) |
| ZaloPay static | `/qr_zalopay.png` | raster `<img>`, render on a white card (personal pay code — lives in the web `public/`, not bundled in this skill) |
| VietQR **dynamic** | — | generated per-amount via `qrUrl()` (see below) |

### 2.A VietQR dynamic — never hardcode a bank QR image

```ts
// src/lib/payment.ts — bank details live here (single source)
export const PAY = { bank: "…", bankCode: "…", account: "…", holder: "…", … };

export const qrUrl = (amount: number, ref: string, email: string) =>
  `https://img.vietqr.io/image/${PAY.bankCode}-${PAY.account}-compact.png?amount=${amount}` +
  `&addInfo=${encodeURIComponent(`${ref} ${email}`.trim())}` +
  `&accountName=${encodeURIComponent(PAY.holder)}`;
```

**Rules**
- A bank transfer QR is **amount-specific** — always build it with `qrUrl(amount, ref, email)`; never save a screenshot of one.
- QR must render at ≥ 160px on a quiet white margin (scanners need the quiet zone) and never be recolored or overlaid.
- Bank account / holder come from `PAY` only — do not duplicate the account number in markup.

---

## 3. SOCIAL & APP BRAND ICONS

Contact / social-link marks. Four are monochrome inline SVGs that inherit text color (`currentColor`); Zalo and Gmail are brand-colored.

### 3.A Catalog

| Icon | Component | Style | Web source | Skill asset |
|------|-----------|-------|------------|-------------|
| GitHub | `GitHubIcon` | inline SVG, `currentColor` | `src/SocialIcons.tsx` | `assets/social/github.svg` |
| LinkedIn | `LinkedInIcon` | inline SVG, `currentColor` | `src/SocialIcons.tsx` | `assets/social/linkedin.svg` |
| Facebook | `FacebookIcon` | inline SVG, `currentColor` | `src/SocialIcons.tsx` | `assets/social/facebook.svg` |
| Telegram | `TelegramIcon` | inline SVG, `currentColor` | `src/SocialIcons.tsx` | `assets/social/telegram.svg` |
| Zalo | `ZaloIcon` | `<img>` brand SVG | `public/assets/zalo-logo.svg` | `assets/social/zalo.svg` |
| Gmail | `GmailIcon` | inline brand SVG (multicolor) | `src/SocialIcons.tsx` | `assets/social/gmail.svg` |

### 3.B Canonical component shapes

```tsx
// currentColor marks — size and color via className, default h-5 w-5
export const GitHubIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>…</svg>
);

// Zalo — one <img>, one source path, forwards extra props (alt / data-testid)
export const ZaloIcon = ({ className, alt = "Zalo logo", ...rest }) => (
  <img src="/assets/zalo-logo.svg" alt={alt} role="img" aria-label={alt} className={className} {...rest} />
);

// Gmail — brand-colored, decorative when paired with a visible text label
export const GmailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="52 42 88 66" className={className} aria-hidden="true">…5 brand paths…</svg>
);
```

**Rules**
- **All six live in `src/SocialIcons.tsx` — import from there.** Do **not** paste a fresh definition into a page. (Historically `ZaloIcon` and `GmailIcon` were copy-pasted into `ContactSection`, `BlogApp`, and `PortfolioApp`; that was consolidated — keep it consolidated. See §7 Anti-Slop #5.)
- `currentColor` marks: set color on the parent (`text-neutral-600 hover:text-neutral-900`); size only via `className` (`h-5 w-5`). Never bake a fill color into these four **web components** — the web keeps them `currentColor`. (The bundled `assets/social/*.svg` files carry a brand-color default and a white rounded tile so they preview correctly as standalone images — dark marks like GitHub stay visible on dark backdrops, e.g. in the README.)
- Zalo `/assets/zalo-logo.svg` is the contact/social source; keep it distinct from the payment `zalo.svg`.
- Gmail is multicolor and immutable — never recolor it to match a theme; mark `aria-hidden` when a visible "Email" label sits beside it.
- Each link needs an accessible name: a visible label, or `aria-label` on the anchor.

---

## 4. UI ICONS — lucide-react

Generic action/status glyphs. **These are the only freely-restylable icons** — one library, `currentColor`, sized by class. Reach here for *concepts*, never for brands.

### 4.A Usage

```tsx
import { Download, Check, X } from "lucide-react";
<Download className="h-4 w-4" />           // size via class, inherits text color
```

- Size with `h-* w-*`; color with `text-*` on the icon or parent. Default stroke is fine — don't override `strokeWidth` per-icon without reason.
- Prefer an existing name from the set below before pulling a new one, to keep the visual language consistent.
- Decorative icon beside a text label → the label carries meaning (icon `aria-hidden` implicitly via lucide). Icon-only button → add `aria-label`.

### 4.B Icons already in use (reuse before adding new)

`ArrowUpRight` · `ArrowLeft` · `X` · `Check` · `CheckCircle2` · `CircleAlert` · `AlertCircle` · `Copy` · `Download` · `Search` · `Send` · `Mail` · `Phone` · `MapPin` · `Calendar` · `Clock` · `Bell` · `ShoppingCart` · `ShoppingBag` · `Store` · `CreditCard` · `Wallet` · `Truck` · `Gift` · `Heart` · `Coffee` · `Star` · `Sparkles` · `Eye` · `Lock` · `ShieldCheck` · `Shield` · `RotateCcw` · `Home` · `User` · `Users` · `Puzzle` · `Languages` · `FileText` · `BookOpen` · `Bookmark` · `PenLine` · `Printer` · `MessageCircle` · `MessageSquare` · `Code2` · `Terminal` · `Cpu` · `Laptop` · `Smartphone` · `Layers` · `Layout` · `LayoutGrid` · `Paintbrush` · `Zap` · `BarChart2` · `Trash2` · `ChevronRight` · `Loader2` · `Building2` · `Lightbulb` · `Bot` · `Telescope` · `Leaf` · `Wrench` · `FlaskConical` · `GitBranch` · `Scale`

---

## 5. TECH-STACK LOGOS

50 brand-colored SVGs for the portfolio tech stack. Colors are baked into each file — render as-is.

**Location:** web `public/portfolio/assets/tech/<name>.svg` · skill `assets/tech/<name>.svg`

`android` · `androidstudio` · `apple` · `bash` · `batchfile` · `canvas` · `claude` · `cplusplus` · `css3` · `dart` · `docker` · `express` · `fastapi` · `flask` · `flutter` · `gemini` · `git` · `github` · `github-actions` · `gradle` · `html5` · `java` · `javascript` · `kotlin` · `langflow` · `linux` · `nodejs` · `objectivec` · `orjson` · `playwright` · `postgresql` · `powershell` · `pwa` · `pydantic` · `python` · `pytorch` · `react` · `sqlalchemy` · `sqlite` · `swift` · `telethon` · `tensorflow` · `typescript` · `uvicorn` · `vercel` · `vite` · `vscode` · `vue` · `windows` · `xcode`

**Rules**
- Reference by path (`/portfolio/assets/tech/python.svg`); do not paste the SVG source inline.
- These carry their own brand colors — do **not** apply `currentColor` or a `fill` override.
- Keep the aspect ratio; size the container, let `object-fit: contain` do the rest.
- A few near-black marks (`apple`, `vercel`, `github`, `gradle`, `express`, `bash`, `batchfile`) carry a white rounded tile in their **bundled** copy so they stay visible on dark backdrops (e.g. the README). The web's `public/portfolio/assets/tech/` copies stay pristine — render those on light surfaces.
- `github` appears here (tech context) *and* as a `currentColor` social mark in §3 — pick by context: a stack chip → tech SVG; a "follow me" link → `GitHubIcon`.

---

## 6. DOWNLOAD BADGES

App Store, Google Play, macOS, and Windows download badges. Rendered on a black background, with rounded corners and high contrast, these badges are used to direct users to application download links.

### 6.A Catalog

| Badge | Web asset | Skill asset | Aspect Ratio | Text / Notes |
|-------|-----------|-------------|:------------:|--------------|
| App Store | `/badge/appstore.svg` | `assets/badge/appstore.svg` | **3.0:1** | Download on the App Store |
| Google Play | `/badge/googleplay.svg` | `assets/badge/googleplay.svg` | **3.38:1** | GET IT ON Google Play |
| macOS | `/badge/macos.svg` | `assets/badge/macos.svg` | **3.0:1** | Download cho macOS (Finder icon) |
| Windows | `/badge/windows.svg` | `assets/badge/windows.svg` | **3.0:1** | Download cho Windows (Windows 11 icon) |

**Rules**
- Maintain the original aspect ratio (always set only height or use `object-fit: contain`).
- Render at a standard height (typically **40px**).
- Do not invert or modify the brand icons or colors in the badges.

---

## 7. ANTI-SLOP CHECKLIST — Fix On Sight

The meta-rule: **an icon references something real. Preserve its identity; reuse its one source.**

| # | The tell | Why it's wrong | The fix |
|---|----------|----------------|---------|
| 1 | A **re-drawn / re-traced** logo (pasted path that "looks close") | breaks brand identity; legal risk | use the exact asset from this catalog |
| 2 | A **recolored brand mark** (Gmail forced monochrome, tech logo tinted) | falsifies the brand | brand icons keep their colors; only lucide + the four `currentColor` social marks restyle |
| 3 | **Width + height both set** on a payment/tech logo | distorts aspect ratio | set one dimension, `width:auto` / `object-fit:contain` |
| 4 | A **lucide glyph standing in for a brand** (lucide `credit-card` as "Visa") | wrong meaning | brands → §1/§3/§5/§6 assets; concepts → §4 |
| 5 | **Re-inlined duplicate** of a shared icon in a page | drift across copies; the ZaloIcon/GmailIcon trap | import from `src/SocialIcons.tsx` (social) / `src/PaymentLogos.tsx` (payment) |
| 6 | **Payment mark on a bare dark/tinted surface** | logos assume light backing | keep the white badge wrapper |
| 7 | **Hardcoded VietQR / bank QR image** | amount-specific, goes stale | generate via `qrUrl()`; bank data from `PAY` |
| 8 | **Icon-only control with no accessible name** | fails a11y | `aria-label` on the button; brand `<img>` gets real `alt` |
| 9 | **New icon added, catalog not updated** | this file goes stale, next agent re-inlines | add the asset *and* the row here in one change |

---

## 8. ADD-AN-ICON PROCEDURE

1. **Classify** — brand or concept? Which group (§0)?
2. **Concept (lucide)** — reuse a name from §4.B if one fits; otherwise import the new lucide name and add it to §4.B.
3. **Brand** — drop the official asset into the right folder (`public/payment|portfolio|badge/assets/tech` + this skill's `assets/…`), keep native colors, respect aspect ratio.
4. **Wire the render** — payment → add a `…Logo` to `PaymentLogos.tsx` with a tuned height; social/app → add to `SocialIcons.tsx`; never inline at the call site.
5. **Update this catalog** — add the row (path, component, size, color) in the matching section.
6. **A11y** — give it an accessible name; mark decorative marks `aria-hidden` when a text label is present.
7. **Verify** — it renders at the right size, correct colors, no distortion, light + dark backing where relevant.
