<div align="center">

# 🎨 icon-pro-max

### The Complete Icon System for the Personal Web

*One catalog for every icon on the Personal Web — payment marks, QR, social/app brand icons, the lucide UI set, and tech-stack logos. Exact paths, components, sizes, brand colors, render recipes, and an anti-slop checklist.*

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

Five groups. Every mark below is a **real asset bundled in this repo**
([`skills/icon-pro-max/assets/`](skills/icon-pro-max/assets/)) and documented in
[`SKILL.md`](skills/icon-pro-max/SKILL.md) with its path, component, size, brand
color, and render recipe.

### 💳 Payment methods — 6 marks

<div align="center">
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/payment/vietqr.svg" alt="VietQR" height="26"><br><sub>VietQR</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/payment/vnpay.svg" alt="VNPAY" height="26"><br><sub>VNPAY</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/payment/zalopay.svg" alt="ZaloPay" height="26"><br><sub>ZaloPay</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/payment/momo.svg" alt="MoMo" height="26"><br><sub>MoMo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/payment/visa.svg" alt="Visa" height="26"><br><sub>Visa</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/payment/mastercard.svg" alt="Mastercard" height="26"><br><sub>Mastercard</sub></td>
</tr>
</table>
</div>

Components: `VietQRLogo` · `VnpayLogo` · `ZaloPayLogo` · `MoMoLogo` · `VisaLogo` · `MastercardLogo` — all via the shared white **badge wrapper** in `PaymentLogos.tsx`, each at a tuned height (11–18px).

### 🔗 Social & app brand icons — 6

<div align="center">
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/social/github.svg" alt="GitHub" height="30"><br><sub>GitHub</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/social/linkedin.svg" alt="LinkedIn" height="30"><br><sub>LinkedIn</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/social/facebook.svg" alt="Facebook" height="30"><br><sub>Facebook</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/social/telegram.svg" alt="Telegram" height="30"><br><sub>Telegram</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/social/zalo.svg" alt="Zalo" height="30"><br><sub>Zalo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/social/gmail.svg" alt="Gmail" height="30"><br><sub>Gmail</sub></td>
</tr>
</table>
</div>

In the web, GitHub/LinkedIn/Facebook/Telegram render as `currentColor` inline SVGs; Zalo and Gmail keep brand colors. All six live in `src/SocialIcons.tsx` — import them, never re-inline. *(Bundled asset files carry a default brand fill for standalone display.)*

### 🧰 Tech-stack logos — 50

<div align="center">
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/android.svg" alt="Android" height="34"><br><sub>Android</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/androidstudio.svg" alt="Android Studio" height="34"><br><sub>Studio</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/apple.svg" alt="Apple" height="34"><br><sub>Apple</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/bash.svg" alt="Bash" height="34"><br><sub>Bash</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/batchfile.svg" alt="Batch" height="34"><br><sub>Batch</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/canvas.svg" alt="Canvas" height="34"><br><sub>Canvas</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/claude.svg" alt="Claude" height="34"><br><sub>Claude</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/cplusplus.svg" alt="C++" height="34"><br><sub>C++</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/css3.svg" alt="CSS3" height="34"><br><sub>CSS3</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/dart.svg" alt="Dart" height="34"><br><sub>Dart</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/docker.svg" alt="Docker" height="34"><br><sub>Docker</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/express.svg" alt="Express" height="34"><br><sub>Express</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/fastapi.svg" alt="FastAPI" height="34"><br><sub>FastAPI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/flask.svg" alt="Flask" height="34"><br><sub>Flask</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/flutter.svg" alt="Flutter" height="34"><br><sub>Flutter</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/gemini.svg" alt="Gemini" height="34"><br><sub>Gemini</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/git.svg" alt="Git" height="34"><br><sub>Git</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/github.svg" alt="GitHub" height="34"><br><sub>GitHub</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/github-actions.svg" alt="GitHub Actions" height="34"><br><sub>Actions</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/gradle.svg" alt="Gradle" height="34"><br><sub>Gradle</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/html5.svg" alt="HTML5" height="34"><br><sub>HTML5</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/java.svg" alt="Java" height="34"><br><sub>Java</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/javascript.svg" alt="JavaScript" height="34"><br><sub>JS</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/kotlin.svg" alt="Kotlin" height="34"><br><sub>Kotlin</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/langflow.svg" alt="Langflow" height="34"><br><sub>Langflow</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/linux.svg" alt="Linux" height="34"><br><sub>Linux</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/nodejs.svg" alt="Node.js" height="34"><br><sub>Node</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/objectivec.svg" alt="Objective-C" height="34"><br><sub>Obj-C</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/orjson.svg" alt="orjson" height="34"><br><sub>orjson</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/playwright.svg" alt="Playwright" height="34"><br><sub>Playwright</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/postgresql.svg" alt="PostgreSQL" height="34"><br><sub>Postgres</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/powershell.svg" alt="PowerShell" height="34"><br><sub>PowerShell</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/pwa.svg" alt="PWA" height="34"><br><sub>PWA</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/pydantic.svg" alt="Pydantic" height="34"><br><sub>Pydantic</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/python.svg" alt="Python" height="34"><br><sub>Python</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/pytorch.svg" alt="PyTorch" height="34"><br><sub>PyTorch</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/react.svg" alt="React" height="34"><br><sub>React</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/sqlalchemy.svg" alt="SQLAlchemy" height="34"><br><sub>SQLAlchemy</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/sqlite.svg" alt="SQLite" height="34"><br><sub>SQLite</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/swift.svg" alt="Swift" height="34"><br><sub>Swift</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/telethon.svg" alt="Telethon" height="34"><br><sub>Telethon</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/tensorflow.svg" alt="TensorFlow" height="34"><br><sub>TensorFlow</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/typescript.svg" alt="TypeScript" height="34"><br><sub>TS</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/uvicorn.svg" alt="Uvicorn" height="34"><br><sub>Uvicorn</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/vercel.svg" alt="Vercel" height="34"><br><sub>Vercel</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/vite.svg" alt="Vite" height="34"><br><sub>Vite</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/vscode.svg" alt="VS Code" height="34"><br><sub>VS Code</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/vue.svg" alt="Vue" height="34"><br><sub>Vue</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/windows.svg" alt="Windows" height="34"><br><sub>Windows</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icon-pro-max/main/skills/icon-pro-max/assets/tech/xcode.svg" alt="Xcode" height="34"><br><sub>Xcode</sub></td>
</tr>
</table>
</div>

### 🎛️ UI icons — lucide-react (~70 in use)

Generic action/status glyphs — the only freely-restylable icons (`currentColor`, sized by class). These come from the [lucide-react](https://lucide.dev) package (no bundled files). Reuse one before importing a new name:

`ArrowUpRight` · `ArrowLeft` · `X` · `Check` · `CheckCircle2` · `CircleAlert` · `AlertCircle` · `Copy` · `Download` · `Search` · `Send` · `Mail` · `Phone` · `MapPin` · `Calendar` · `Clock` · `Bell` · `ShoppingCart` · `ShoppingBag` · `Store` · `CreditCard` · `Wallet` · `Truck` · `Gift` · `Heart` · `Coffee` · `Star` · `Sparkles` · `Eye` · `Lock` · `ShieldCheck` · `Shield` · `RotateCcw` · `Home` · `User` · `Users` · `Puzzle` · `Languages` · `FileText` · `BookOpen` · `Bookmark` · `PenLine` · `Printer` · `MessageCircle` · `MessageSquare` · `Code2` · `Terminal` · `Cpu` · `Laptop` · `Smartphone` · `Layers` · `Layout` · `LayoutGrid` · `Paintbrush` · `Zap` · `BarChart2` · `Trash2` · `ChevronRight` · `Loader2` · `Building2` · `Lightbulb` · `Bot` · `Telescope` · `Leaf` · `Wrench` · `FlaskConical` · `GitBranch` · `Scale`

---

## What's inside the skill

[`SKILL.md`](skills/icon-pro-max/SKILL.md) — 8 sections:

- **§0 Pick the right group** — brand → its exact logo; concept → a lucide glyph.
- **§1 Payment** — the badge wrapper, per-logo heights, aspect-ratio rules.
- **§2 QR** — the dynamic VietQR `qrUrl()` recipe.
- **§3 Social & app** — `currentColor` vs brand-color marks, single-source rule.
- **§4 UI (lucide)** — usage, the full in-use icon set, a11y.
- **§5 Tech logos** — 50 brand-colored SVGs, no recoloring.
- **§6 Anti-slop checklist** — 9 tells (re-drawn logo, recolored mark, distorted ratio, wrong-meaning glyph, re-inlined duplicate…) each with the fix.
- **§7 Add-an-icon procedure** — classify → drop asset → wire render → update catalog → a11y → verify.

All bundled marks are mirrored, self-contained, under
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
