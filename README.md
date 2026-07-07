<div align="center">

# 🎨 icon-pro-max

### The Complete Icon System for the Personal Web

*One catalog for every icon on [example.com](https://example.com) — payment marks, QR, social/app brand icons, the lucide UI set, tech-stack logos, and site favicons. Exact paths, components, sizes, brand colors, render recipes, and an anti-slop checklist.*

[![License: MIT](https://img.shields.io/badge/License-MIT-0078D4?style=for-the-badge)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent-Skills-E53935?style=for-the-badge)](https://github.com/buidangminh23/icon-pro-max)
[![Claude Code](https://img.shields.io/badge/Claude_Code-Plugin-FFB300?style=for-the-badge)](https://github.com/buidangminh23/icon-pro-max)
[![Works with](https://img.shields.io/badge/Works_with-Claude_·_Cursor_·_Codex_·_Gemini-43A047?style=for-the-badge)](https://github.com/buidangminh23/icon-pro-max)

</div>

---

## Why

Icons are where AI-generated UI leaks: a re-traced logo that's *almost* right, a
brand mark recolored to match a theme, a payment logo stretched out of ratio, a
generic `credit-card` glyph standing in for Visa, or the same `ZaloIcon`
copy-pasted into four files until they drift apart.

`icon-pro-max` is the **single source of truth** for every icon the site ships.
Find the icon here first, reuse its canonical component / asset path / size, and
never redraw or recolor a brand mark. The one rule:

> **An icon carries a brand's identity. Reproduce it exactly.**
> Generic UI glyphs (lucide) are the only icons you may freely restyle.

---

## Install

Pick your tool. Every block has a **copy button** (hover its top-right corner).

#### `npx` · skills

```bash
npx skills add buidangminh23/icon-pro-max
```

#### `npx` · add-skill

```bash
npx add-skill buidangminh23/icon-pro-max
```

#### Claude Code &nbsp;·&nbsp; native plugin (run inside Claude Code)

```text
/plugin marketplace add buidangminh23/icon-pro-max
/plugin install icon-pro-max@icon-pro-max
```

#### Cursor

```bash
npx skills add buidangminh23/icon-pro-max -a cursor
```

#### Codex &nbsp;·&nbsp; native marketplace

```text
codex plugin marketplace add buidangminh23/icon-pro-max
```

#### Gemini CLI &nbsp;·&nbsp; native extension

```bash
gemini extensions install https://github.com/buidangminh23/icon-pro-max
```

#### Git submodule &nbsp;·&nbsp; vendor it into a repo (how the Personal Web wires it)

```bash
git submodule add https://github.com/buidangminh23/icon-pro-max.git .agents/skills/icon-pro-max
git commit -m "chore: add icon-pro-max skill submodule"
```

**Works with:** Claude Code · Cursor · Codex · Gemini CLI.
Skill name once loaded: **`icon-pro-max`** → then prompt *"Use the icon-pro-max skill."*

<details>
<summary><b>More options</b> — global flags, other agents (Cline, opencode…), manual install</summary>

The `skills` CLI targets any agent with `-a` and installs to the user directory with `-g`:

| Tool | Command |
|---|---|
| Claude Code | `npx skills add buidangminh23/icon-pro-max -a claude-code -g` |
| Codex | `npx skills add buidangminh23/icon-pro-max -a codex -g` |
| Cursor | `npx skills add buidangminh23/icon-pro-max -a cursor -g` |
| Cline | `npx skills add buidangminh23/icon-pro-max -a cline -g` |
| opencode | `npx skills add buidangminh23/icon-pro-max -a opencode -g` |
| Several at once | `npx skills add buidangminh23/icon-pro-max -a claude-code -a cursor -a codex` |

Drop `-g` for a project-local install. Manage with `npx skills list`, `npx skills update`, `npx skills remove`.

**Manual (portable)** — fetch the catalog once, then place it where your agent looks:

```bash
curl -fsSL https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/SKILL.md -o SKILL.md
```

Clone the whole skill (catalog + bundled SVG/PNG assets):

```bash
git clone https://github.com/buidangminh23/icon-pro-max.git
```

| Tool | Where it goes |
|---|---|
| Claude Code | `~/.claude/skills/icon-pro-max/SKILL.md` (global) or `.claude/skills/…` (project) |
| Codex | save in repo, then reference from `AGENTS.md` |
| Cursor | rename to `.cursor/rules/icon-pro-max.mdc` |
| Cline / opencode / others | drop into the agent's skills/rules folder, or paste `SKILL.md` as context |

</details>

---

## The complete icon catalog

Six groups. Every icon below is documented in [`SKILL.md`](skills/icon-pro-max/SKILL.md)
with its path, component, size, brand color, and render recipe. Bundled assets
live under [`skills/icon-pro-max/assets/`](skills/icon-pro-max/assets/).

### 💳 Payment methods — 6 marks + variants

Rendered through the shared white **badge wrapper** (`PaymentLogos.tsx`), each at a tuned height.

| Logo | Component | Asset | Height |
|---|---|---|:---:|
| VietQR | `VietQRLogo` | `payment/vietqr.svg` | 13px |
| VNPAY | `VnpayLogo` | `payment/vnpay.svg` | 16px |
| ZaloPay | `ZaloPayLogo` | `payment/zalopay.svg` | 11px |
| MoMo | `MoMoLogo` | `payment/momo.svg` | 18px |
| Visa | `VisaLogo` | `payment/visa.svg` | 12px |
| Mastercard | `MastercardLogo` | `payment/mastercard.svg` | 17px |

Variants: `payment/zalo.svg`, `payment/zalo-icon.png`.

### 📱 QR codes — 2 static + 1 dynamic

| QR | Asset / How |
|---|---|
| MoMo | `qr/qr_momo.png` |
| ZaloPay | `qr/qr_zalopay.png` |
| VietQR (per-amount) | generated at runtime via `qrUrl(amount, ref, email)` — never hardcoded |

### 🔗 Social & app brand icons — 6

| Icon | Component | Style | Asset |
|---|---|---|---|
| GitHub | `GitHubIcon` | inline SVG · `currentColor` | `social/github.svg` |
| LinkedIn | `LinkedInIcon` | inline SVG · `currentColor` | `social/linkedin.svg` |
| Facebook | `FacebookIcon` | inline SVG · `currentColor` | `social/facebook.svg` |
| Telegram | `TelegramIcon` | inline SVG · `currentColor` | `social/telegram.svg` |
| Zalo | `ZaloIcon` | `<img>` brand SVG | `social/zalo.svg` |
| Gmail | `GmailIcon` | inline brand SVG (multicolor) | `social/gmail.svg` |

All six live in `src/SocialIcons.tsx` — import them, never re-inline.

### 🎛️ UI icons — lucide-react (~70 in use)

Generic action/status glyphs — the only freely-restylable icons (`currentColor`, sized by class). Reuse one of these before importing a new name:

`ArrowUpRight` · `ArrowLeft` · `X` · `Check` · `CheckCircle2` · `CircleAlert` · `AlertCircle` · `Copy` · `Download` · `Search` · `Send` · `Mail` · `Phone` · `MapPin` · `Calendar` · `Clock` · `Bell` · `ShoppingCart` · `ShoppingBag` · `Store` · `CreditCard` · `Wallet` · `Truck` · `Gift` · `Heart` · `Coffee` · `Star` · `Sparkles` · `Eye` · `Lock` · `ShieldCheck` · `Shield` · `RotateCcw` · `Home` · `User` · `Users` · `Puzzle` · `Languages` · `FileText` · `BookOpen` · `Bookmark` · `PenLine` · `Printer` · `MessageCircle` · `MessageSquare` · `Code2` · `Terminal` · `Cpu` · `Laptop` · `Smartphone` · `Layers` · `Layout` · `LayoutGrid` · `Paintbrush` · `Zap` · `BarChart2` · `Trash2` · `ChevronRight` · `Loader2` · `Building2` · `Lightbulb` · `Bot` · `Telescope` · `Leaf` · `Wrench` · `FlaskConical` · `GitBranch` · `Scale`

### 🧰 Tech-stack logos — 50

Brand-colored SVGs (`public/portfolio/assets/tech/` · `assets/tech/`). Render as-is — never recolor.

`android` · `androidstudio` · `apple` · `bash` · `batchfile` · `canvas` · `claude` · `cplusplus` · `css3` · `dart` · `docker` · `express` · `fastapi` · `flask` · `flutter` · `gemini` · `git` · `github` · `github-actions` · `gradle` · `html5` · `java` · `javascript` · `kotlin` · `langflow` · `linux` · `nodejs` · `objectivec` · `orjson` · `playwright` · `postgresql` · `powershell` · `pwa` · `pydantic` · `python` · `pytorch` · `react` · `sqlalchemy` · `sqlite` · `swift` · `telethon` · `tensorflow` · `typescript` · `uvicorn` · `vercel` · `vite` · `vscode` · `vue` · `windows` · `xcode`

### 🏷️ Site & brand icons — 9

Wired into `<head>` / `site.webmanifest`, regenerated as a set.

| Asset | Web path | Role |
|---|---|---|
| Favicon (ICO) | `/favicon.ico` | classic tab icon |
| Favicon 32 | `/favicon-32.png` | 32×32 PNG |
| Apple touch | `/apple-touch-icon.png` | iOS home-screen |
| PWA 192 | `/icon-192.png` | manifest icon |
| PWA 512 | `/icon-512.png` | manifest / splash |
| BIMI | `/bimi-logo.svg` | verified-email logo (SVG Tiny PS) |
| Avatar | `/me-avatar.png` | profile portrait |
| OG image | `/og-image.jpg` | social share preview (1200×630) |
| Institution | `institution_logo.svg` | institution logo |

---

## What's inside the skill

[`SKILL.md`](skills/icon-pro-max/SKILL.md) — 8 sections:

- **§0 Pick the right group** — brand → its exact logo; concept → a lucide glyph.
- **§1 Payment** — the badge wrapper, per-logo heights, aspect-ratio rules.
- **§2 QR** — static images and the dynamic VietQR `qrUrl()` recipe.
- **§3 Social & app** — `currentColor` vs brand-color marks, single-source rule.
- **§4 UI (lucide)** — usage, the full in-use icon set, a11y.
- **§5 Tech logos** — 50 brand-colored SVGs, no recoloring.
- **§6 Site & brand** — favicons/app icons/OG, regenerate-as-a-set.
- **§7 Anti-slop checklist** — 10 tells (re-drawn logo, recolored mark, distorted ratio, wrong-meaning glyph, re-inlined duplicate…) each with the fix.
- **§8 Add-an-icon procedure** — classify → drop asset → wire render → update catalog → a11y → verify.

All brand assets are mirrored, self-contained, under
[`skills/icon-pro-max/assets/`](skills/icon-pro-max/assets/) so the catalog works
outside the web repo.

---

## License

MIT for the skill text and structure. Bundled third-party brand marks under
`assets/` remain the property of their respective owners and **must not be
modified, recolored, or redrawn** — see [`LICENSE`](LICENSE).

---

<div align="center">

**MIT Licensed** · Built by [buidangminh23](https://github.com/buidangminh23)

*Reuse the mark. Never redraw it.*

</div>
