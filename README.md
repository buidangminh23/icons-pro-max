<div align="center">

# 🎨 icons-pro-max

### A Portable Icon System for AI Agents

*One portable catalog — payment marks, QR guidance, social/app brand icons, the lucide UI set, 144 tech-stack logos, 86 full-color AI provider marks, and 516 Claude connector icons. Bundled assets, rendering recipes, sources, and an anti-slop checklist.*

[![CI](https://github.com/buidangminh23/icons-pro-max/actions/workflows/ci.yml/badge.svg)](https://github.com/buidangminh23/icons-pro-max/actions/workflows/ci.yml)
[![GitHub Release](https://img.shields.io/github/v/release/buidangminh23/icons-pro-max?style=for-the-badge)](https://github.com/buidangminh23/icons-pro-max/releases/latest)
[![npm](https://img.shields.io/npm/v/@minhspark/icons-pro-max?style=for-the-badge)](https://www.npmjs.com/package/@minhspark/icons-pro-max)
[![License: MIT](https://img.shields.io/badge/License-MIT-0078D4?style=for-the-badge)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent-Skills-E53935?style=for-the-badge)](https://github.com/buidangminh23/icons-pro-max)
[![Claude Code](https://img.shields.io/badge/Claude_Code-Plugin-FFB300?style=for-the-badge)](https://github.com/buidangminh23/icons-pro-max)
[![Works with](https://img.shields.io/badge/Works_with-Claude_·_Cursor_·_Codex_·_Gemini-43A047?style=for-the-badge)](https://github.com/buidangminh23/icons-pro-max)

[Latest release](https://github.com/buidangminh23/icons-pro-max/releases/latest) · [CI](https://github.com/buidangminh23/icons-pro-max/actions/workflows/ci.yml) · [npm package](https://www.npmjs.com/package/@minhspark/icons-pro-max)

Available on npm and GitHub Releases.

</div>

---

## Release notifications

To receive new release notifications, open [this repository](https://github.com/buidangminh23/icons-pro-max), select **Watch → Custom → Releases**, then click **Apply**. Choose GitHub or email delivery in your [notification settings](https://github.com/settings/notifications).

Starring the repository or downloading/installing a package does not subscribe you to release notifications. Notifications do not update your installed copy; follow the installation instructions to update.

[View release notes](https://github.com/buidangminh23/icons-pro-max/releases).

## Why

Icons are where AI-generated UI leaks: a re-traced logo that's *almost* right, a
brand mark recolored to match a theme, a payment logo stretched out of ratio, a
generic `credit-card` glyph standing in for Visa, or the same `ZaloIcon`
copy-pasted into four files until they drift apart.

`icons-pro-max` is the **single source of truth** for every icon the site ships.
Find the icon here first, reuse its canonical component / asset path / size, and
never redraw or recolor a brand mark. The one rule:

> **An icon carries a brand's identity. Reproduce it exactly.**
> Generic UI glyphs (lucide) are the only icons you may freely restyle.

---

## Install

#### ChatGPT Agent Plugin

The release asset `icons-pro-max-X.Y.Z-plugin.zip` contains the portable
`plugin.json` at its root, the skill, all bundled assets, listing artwork, and
third-party notices. Check it against the release's `SHA256SUMS` before uploading.
For author testing, open **Plugins → Upload new or existing plugin** using the
intended publisher account and upload this ZIP as a skills-only package.

This prepares a draft; public directory availability still requires a verified
developer identity, review, and publication through the
[OpenAI submission portal](https://developers.openai.com/plugins/deploy/submission).
The GitHub release is not a public directory listing. No Sites hosting, MCP
server, or account connection is required by this skill-only package.

In Codex or the ChatGPT desktop app, the repository marketplace below provides
local installation. Bundled asset paths are relative to the skill directory;
application paths in the catalog are examples to adapt to the current project.

#### GitHub Packages

A repository-linked copy is available as `@buidangminh23/icons-pro-max` on
[GitHub Packages](https://github.com/buidangminh23/icons-pro-max/packages).
The npmjs.com package remains `@minhspark/icons-pro-max`.
GitHub's npm registry requires authentication with a classic token with
`read:packages` even for public packages. Authenticate locally, never commit a token:

```bash
npm login --scope=@buidangminh23 --registry=https://npm.pkg.github.com --auth-type=legacy
npm install @buidangminh23/icons-pro-max --registry=https://npm.pkg.github.com
```

This downloads the bundle; use the agent-specific instructions below to register it.

#### npm package

```bash
npm install @minhspark/icons-pro-max
```

This downloads the bundle to `node_modules/@minhspark/icons-pro-max`. It does not
register the skill with an agent automatically; use the agent installers below
or copy the bundled skill and assets to the appropriate agent directory.


Download a complete, versioned bundle from [GitHub Releases](https://github.com/buidangminh23/icons-pro-max/releases/latest):
ZIP or TAR.GZ, including the catalog, all assets, and plugin manifests. Verify it
against the attached `SHA256SUMS` before extracting. The general release archives have a single
`icons-pro-max-X.Y.Z/` root; preserve its hidden manifest directories when copying.
See [release and verification instructions](CONTRIBUTING.md#release-rules).
The separate `-plugin.zip` uses an unprefixed root for the submission portal.

Pick your tool. Every block has a **copy button** (hover its top-right corner).

#### `npx` · skills

```bash
npx skills add buidangminh23/icons-pro-max
```

#### `npx` · add-skill

```bash
npx add-skill buidangminh23/icons-pro-max
```

#### Claude Code &nbsp;·&nbsp; native plugin (run inside Claude Code)

```text
/plugin marketplace add buidangminh23/icons-pro-max
/plugin install icons-pro-max@icons-pro-max
```

#### Cursor

```bash
npx skills add buidangminh23/icons-pro-max -a cursor
```

#### Codex &nbsp;·&nbsp; native marketplace

```text
codex plugin marketplace add buidangminh23/icons-pro-max
```

#### Gemini CLI &nbsp;·&nbsp; native extension

```bash
gemini extensions install https://github.com/buidangminh23/icons-pro-max
```

#### Git submodule &nbsp;·&nbsp; vendor it into a repo (how the Personal Web wires it)

```bash
git submodule add https://github.com/buidangminh23/icons-pro-max.git .agents/skills/icons-pro-max
git commit -m "chore: add icons-pro-max skill submodule"
```

**Works with:** Claude Code · Cursor · Codex · Gemini CLI.
Skill name once loaded: **`icons-pro-max`** → then prompt *"Use the icons-pro-max skill."*

<details>
<summary><b>More options</b> — global flags, other agents (Cline, opencode…), manual install</summary>

The `skills` CLI targets any agent with `-a` and installs to the user directory with `-g`:

| Tool | Command |
|---|---|
| Claude Code | `npx skills add buidangminh23/icons-pro-max -a claude-code -g` |
| Codex | `npx skills add buidangminh23/icons-pro-max -a codex -g` |
| Cursor | `npx skills add buidangminh23/icons-pro-max -a cursor -g` |
| Cline | `npx skills add buidangminh23/icons-pro-max -a cline -g` |
| opencode | `npx skills add buidangminh23/icons-pro-max -a opencode -g` |
| Several at once | `npx skills add buidangminh23/icons-pro-max -a claude-code -a cursor -a codex` |

Drop `-g` for a project-local install. Manage with `npx skills list`, `npx skills update`, `npx skills remove`.

**Manual (portable)** — fetch the catalog once, then place it where your agent looks:

```bash
curl -fsSL https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/SKILL.md -o SKILL.md
```

Clone the whole skill (catalog + bundled SVG/PNG assets):

```bash
git clone https://github.com/buidangminh23/icons-pro-max.git
```

| Tool | Where it goes |
|---|---|
| Claude Code | `~/.claude/skills/icons-pro-max/SKILL.md` (global) or `.claude/skills/…` (project) |
| Codex | save in repo, then reference from `AGENTS.md` |
| Cursor | rename to `.cursor/rules/icons-pro-max.mdc` |
| Cline / opencode / others | drop into the agent's skills/rules folder, or paste `SKILL.md` as context |

</details>

---

## The complete icon catalog

Seven galleries below — **QR** is recipe-only (SKILL.md §2) and
bundles no marks. Every payment, social, tech, badge, AI, and connector mark shown is a
**real asset bundled in this repo**
([`skills/icons-pro-max/assets/`](skills/icons-pro-max/assets/)), and
[`SOURCES.md`](skills/icons-pro-max/assets/SOURCES.md) records where each one comes from
(devicon, Simple Icons, LobeHub Icons, or the brand's own file — never a redraw). The UI set
comes from the [lucide-react](https://lucide.dev) package. Each group is documented in
[`SKILL.md`](skills/icons-pro-max/SKILL.md) with its path, component, size, brand color, and
render recipe.

### 💳 Payment methods — 6 marks

<div align="center">
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/vietqr.svg" alt="VietQR" width="90"><br><sub>VietQR</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/vnpay.svg" alt="VNPAY" width="90"><br><sub>VNPAY</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/zalopay.svg" alt="ZaloPay" width="90"><br><sub>ZaloPay</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/momo.svg" alt="MoMo" width="90"><br><sub>MoMo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/visa.svg" alt="Visa" width="90"><br><sub>Visa</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/mastercard.svg" alt="Mastercard" width="90"><br><sub>Mastercard</sub></td>
</tr>
</table>
</div>

Components: `VietQRLogo` · `VnpayLogo` · `ZaloPayLogo` · `MoMoLogo` · `VisaLogo` · `MastercardLogo` — all via the shared white **badge wrapper** in `PaymentLogos.tsx`, each at a tuned height (11–18px).

**More payment marks** — bundled on padded white chips, not yet wired into `PaymentLogos.tsx`:

<div align="center">
<table>
<tr>
<td align="center" valign="bottom"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/americanexpress.svg" alt="American Express" width="35" height="35"><br><sub>Amex</sub></td>
<td align="center" valign="bottom"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/applepay.svg" alt="Apple Pay" width="41" height="30"><br><sub>Apple Pay</sub></td>
<td align="center" valign="bottom"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/googlepay.svg" alt="Google Pay" width="49" height="25"><br><sub>Google Pay</sub></td>
<td align="center" valign="bottom"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/grab.svg" alt="Grab" width="50" height="25"><br><sub>Grab</sub></td>
<td align="center" valign="bottom"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/jcb.svg" alt="JCB" width="61" height="22"><br><sub>JCB</sub></td>
<td align="center" valign="bottom"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/paypal.svg" alt="PayPal" width="32" height="35"><br><sub>PayPal</sub></td>
<td align="center" valign="bottom"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/shopee.svg" alt="Shopee" width="33" height="35"><br><sub>Shopee</sub></td>
<td align="center" valign="bottom"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/stripe.svg" alt="Stripe" width="29" height="35"><br><sub>Stripe</sub></td>
</tr>
<tr>
<td align="center" valign="bottom"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/zalo.svg" alt="Zalo" width="52" height="24"><br><sub>Zalo</sub></td>
<td align="center" valign="bottom"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/payment/zalo-icon.png" alt="Zalo app icon" width="31" height="34"><br><sub>Zalo app i…</sub></td>
</tr>
</table>
</div>

### 🔗 Social & app brand icons — 28

<div align="center">
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/bluesky.svg" alt="Bluesky" height="30"><br><sub>Bluesky</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/devto.svg" alt="DEV" height="30"><br><sub>DEV</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/discord.svg" alt="Discord" height="30"><br><sub>Discord</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/facebook.svg" alt="Facebook" height="30"><br><sub>Facebook</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/github.svg" alt="GitHub" height="30"><br><sub>GitHub</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/gmail.svg" alt="Gmail" height="30"><br><sub>Gmail</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/instagram.svg" alt="Instagram" height="30"><br><sub>Instagram</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/kakaotalk.svg" alt="KakaoTalk" height="30"><br><sub>KakaoTalk</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/line.svg" alt="LINE" height="30"><br><sub>LINE</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/linkedin.svg" alt="LinkedIn" height="30"><br><sub>LinkedIn</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/mastodon.svg" alt="Mastodon" height="30"><br><sub>Mastodon</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/medium.svg" alt="Medium" height="30"><br><sub>Medium</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/messenger.svg" alt="Messenger" height="30"><br><sub>Messenger</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/pinterest.svg" alt="Pinterest" height="30"><br><sub>Pinterest</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/reddit.svg" alt="Reddit" height="30"><br><sub>Reddit</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/signal.svg" alt="Signal" height="30"><br><sub>Signal</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/snapchat.svg" alt="Snapchat" height="30"><br><sub>Snapchat</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/stackoverflow.svg" alt="Stack Overflow" height="30"><br><sub>StackOverf…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/telegram.svg" alt="Telegram" height="30"><br><sub>Telegram</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/threads.svg" alt="Threads" height="30"><br><sub>Threads</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/tiktok.svg" alt="TikTok" height="30"><br><sub>TikTok</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/twitch.svg" alt="Twitch" height="30"><br><sub>Twitch</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/viber.svg" alt="Viber" height="30"><br><sub>Viber</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/wechat.svg" alt="WeChat" height="30"><br><sub>WeChat</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/whatsapp.svg" alt="WhatsApp" height="30"><br><sub>WhatsApp</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/x.svg" alt="X" height="30"><br><sub>X</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/youtube.svg" alt="YouTube" height="30"><br><sub>YouTube</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/social/zalo.svg" alt="Zalo" height="30"><br><sub>Zalo</sub></td>
</tr>
</table>
</div>

In the web, GitHub/LinkedIn/Facebook/Telegram render as `currentColor` inline SVGs; Zalo and Gmail keep brand colors. Those six live in `src/SocialIcons.tsx` — import them, never re-inline. The other 22 are bundled marks ready for a new component. *(Bundled files carry the brand fill on a white tile for standalone display.)*

### 🧰 Tech-stack logos — 144

<div align="center">
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/dotnet.svg" alt=".NET" height="34"><br><sub>.NET</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/aws.svg" alt="Amazon Web Services" height="34"><br><sub>AWS</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/anaconda.svg" alt="Anaconda" height="34"><br><sub>Anaconda</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/android.svg" alt="Android" height="34"><br><sub>Android</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/androidstudio.svg" alt="Android Studio" height="34"><br><sub>Studio</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/angular.svg" alt="Angular" height="34"><br><sub>Angular</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/ansible.svg" alt="Ansible" height="34"><br><sub>Ansible</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/apache.svg" alt="Apache HTTP Server" height="34"><br><sub>Apache</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/apple.svg" alt="Apple" height="34"><br><sub>Apple</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/archlinux.svg" alt="Arch Linux" height="34"><br><sub>Arch Linux</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/astro.svg" alt="Astro" height="34"><br><sub>Astro</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/babel.svg" alt="Babel" height="34"><br><sub>Babel</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/bash.svg" alt="Bash" height="34"><br><sub>Bash</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/batchfile.svg" alt="Batch" height="34"><br><sub>Batch</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/bitbucket.svg" alt="Bitbucket" height="34"><br><sub>Bitbucket</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/bootstrap.svg" alt="Bootstrap" height="34"><br><sub>Bootstrap</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/bun.svg" alt="Bun" height="34"><br><sub>Bun</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/c.svg" alt="C" height="34"><br><sub>C</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/csharp.svg" alt="C#" height="34"><br><sub>C#</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/cplusplus.svg" alt="C++" height="34"><br><sub>C++</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/canvas.svg" alt="Canvas LMS" height="34"><br><sub>Canvas</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/claude.svg" alt="Claude" height="34"><br><sub>Claude</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/cloudflare.svg" alt="Cloudflare" height="34"><br><sub>Cloudflare</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/cmake.svg" alt="CMake" height="34"><br><sub>CMake</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/css3.svg" alt="CSS3" height="34"><br><sub>CSS3</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/cypress.svg" alt="Cypress" height="34"><br><sub>Cypress</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/dart.svg" alt="Dart" height="34"><br><sub>Dart</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/debian.svg" alt="Debian" height="34"><br><sub>Debian</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/deno.svg" alt="Deno" height="34"><br><sub>Deno</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/digitalocean.svg" alt="DigitalOcean" height="34"><br><sub>DigitalOce…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/django.svg" alt="Django" height="34"><br><sub>Django</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/docker.svg" alt="Docker" height="34"><br><sub>Docker</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/elasticsearch.svg" alt="Elasticsearch" height="34"><br><sub>Elastic</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/electron.svg" alt="Electron" height="34"><br><sub>Electron</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/eslint.svg" alt="ESLint" height="34"><br><sub>ESLint</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/express.svg" alt="Express" height="34"><br><sub>Express</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/fastapi.svg" alt="FastAPI" height="34"><br><sub>FastAPI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/fedora.svg" alt="Fedora" height="34"><br><sub>Fedora</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/firebase.svg" alt="Firebase" height="34"><br><sub>Firebase</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/firefox.svg" alt="Firefox" height="34"><br><sub>Firefox</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/flask.svg" alt="Flask" height="34"><br><sub>Flask</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/flutter.svg" alt="Flutter" height="34"><br><sub>Flutter</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/gemini.svg" alt="Gemini" height="34"><br><sub>Gemini</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/git.svg" alt="Git" height="34"><br><sub>Git</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/github.svg" alt="GitHub" height="34"><br><sub>GitHub</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/github-actions.svg" alt="GitHub Actions" height="34"><br><sub>Actions</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/gitlab.svg" alt="GitLab" height="34"><br><sub>GitLab</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/go.svg" alt="Go" height="34"><br><sub>Go</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/chrome.svg" alt="Google Chrome" height="34"><br><sub>Chrome</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/googlecloud.svg" alt="Google Cloud" height="34"><br><sub>GCP</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/gradle.svg" alt="Gradle" height="34"><br><sub>Gradle</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/graphql.svg" alt="GraphQL" height="34"><br><sub>GraphQL</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/heroku.svg" alt="Heroku" height="34"><br><sub>Heroku</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/html5.svg" alt="HTML5" height="34"><br><sub>HTML5</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/intellij.svg" alt="IntelliJ IDEA" height="34"><br><sub>IntelliJ</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/java.svg" alt="Java" height="34"><br><sub>Java</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/javascript.svg" alt="JavaScript" height="34"><br><sub>JS</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/jenkins.svg" alt="Jenkins" height="34"><br><sub>Jenkins</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/jest.svg" alt="Jest" height="34"><br><sub>Jest</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/jquery.svg" alt="jQuery" height="34"><br><sub>jQuery</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/json.svg" alt="JSON" height="34"><br><sub>JSON</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/jupyter.svg" alt="Jupyter" height="34"><br><sub>Jupyter</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/keras.svg" alt="Keras" height="34"><br><sub>Keras</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/kotlin.svg" alt="Kotlin" height="34"><br><sub>Kotlin</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/kubernetes.svg" alt="Kubernetes" height="34"><br><sub>Kubernetes</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/langflow.svg" alt="Langflow" height="34"><br><sub>Langflow</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/laravel.svg" alt="Laravel" height="34"><br><sub>Laravel</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/latex.svg" alt="LaTeX" height="34"><br><sub>LaTeX</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/linux.svg" alt="Linux" height="34"><br><sub>Linux</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/lua.svg" alt="Lua" height="34"><br><sub>Lua</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/mariadb.svg" alt="MariaDB" height="34"><br><sub>MariaDB</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/markdown.svg" alt="Markdown" height="34"><br><sub>Markdown</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/matplotlib.svg" alt="Matplotlib" height="34"><br><sub>Matplotlib</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/azure.svg" alt="Microsoft Azure" height="34"><br><sub>Azure</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/mongodb.svg" alt="MongoDB" height="34"><br><sub>MongoDB</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/mysql.svg" alt="MySQL" height="34"><br><sub>MySQL</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/neo4j.svg" alt="Neo4j" height="34"><br><sub>Neo4j</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/neovim.svg" alt="Neovim" height="34"><br><sub>Neovim</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/nestjs.svg" alt="NestJS" height="34"><br><sub>NestJS</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/netlify.svg" alt="Netlify" height="34"><br><sub>Netlify</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/nextjs.svg" alt="Next.js" height="34"><br><sub>Next.js</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/nginx.svg" alt="NGINX" height="34"><br><sub>NGINX</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/nodejs.svg" alt="Node.js" height="34"><br><sub>Node.js</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/npm.svg" alt="npm" height="34"><br><sub>npm</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/numpy.svg" alt="NumPy" height="34"><br><sub>NumPy</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/nuxt.svg" alt="Nuxt" height="34"><br><sub>Nuxt</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/objectivec.svg" alt="Objective-C" height="34"><br><sub>Obj-C</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/opencv.svg" alt="OpenCV" height="34"><br><sub>OpenCV</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/orjson.svg" alt="orjson" height="34"><br><sub>orjson</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/pandas.svg" alt="pandas" height="34"><br><sub>pandas</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/php.svg" alt="PHP" height="34"><br><sub>PHP</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/playwright.svg" alt="Playwright" height="34"><br><sub>Playwright</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/pnpm.svg" alt="pnpm" height="34"><br><sub>pnpm</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/postgresql.svg" alt="PostgreSQL" height="34"><br><sub>Postgres</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/postman.svg" alt="Postman" height="34"><br><sub>Postman</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/powershell.svg" alt="PowerShell" height="34"><br><sub>PowerShell</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/prettier.svg" alt="Prettier" height="34"><br><sub>Prettier</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/prisma.svg" alt="Prisma" height="34"><br><sub>Prisma</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/pwa.svg" alt="PWA" height="34"><br><sub>PWA</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/pycharm.svg" alt="PyCharm" height="34"><br><sub>PyCharm</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/pydantic.svg" alt="Pydantic" height="34"><br><sub>Pydantic</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/python.svg" alt="Python" height="34"><br><sub>Python</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/pytorch.svg" alt="PyTorch" height="34"><br><sub>PyTorch</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/r.svg" alt="R" height="34"><br><sub>R</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/raspberrypi.svg" alt="Raspberry Pi" height="34"><br><sub>Raspberry</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/react.svg" alt="React" height="34"><br><sub>React</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/redis.svg" alt="Redis" height="34"><br><sub>Redis</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/redux.svg" alt="Redux" height="34"><br><sub>Redux</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/ruby.svg" alt="Ruby" height="34"><br><sub>Ruby</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/rails.svg" alt="Ruby on Rails" height="34"><br><sub>Rails</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/rust.svg" alt="Rust" height="34"><br><sub>Rust</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/safari.svg" alt="Safari" height="34"><br><sub>Safari</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/sass.svg" alt="Sass" height="34"><br><sub>Sass</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/scala.svg" alt="Scala" height="34"><br><sub>Scala</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/scikitlearn.svg" alt="scikit-learn" height="34"><br><sub>sklearn</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/selenium.svg" alt="Selenium" height="34"><br><sub>Selenium</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/spring.svg" alt="Spring" height="34"><br><sub>Spring</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/sqlserver.svg" alt="SQL Server" height="34"><br><sub>SQL Server</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/sqlalchemy.svg" alt="SQLAlchemy" height="34"><br><sub>SQLAlchemy</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/sqlite.svg" alt="SQLite" height="34"><br><sub>SQLite</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/storybook.svg" alt="Storybook" height="34"><br><sub>Storybook</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/supabase.svg" alt="Supabase" height="34"><br><sub>Supabase</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/svelte.svg" alt="Svelte" height="34"><br><sub>Svelte</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/swift.svg" alt="Swift" height="34"><br><sub>Swift</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/tailwindcss.svg" alt="Tailwind CSS" height="34"><br><sub>Tailwind</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/telethon.svg" alt="Telethon" height="34"><br><sub>Telethon</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/tensorflow.svg" alt="TensorFlow" height="34"><br><sub>TensorFlow</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/terraform.svg" alt="Terraform" height="34"><br><sub>Terraform</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/threejs.svg" alt="Three.js" height="34"><br><sub>Three.js</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/typescript.svg" alt="TypeScript" height="34"><br><sub>TS</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/ubuntu.svg" alt="Ubuntu" height="34"><br><sub>Ubuntu</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/uvicorn.svg" alt="Uvicorn" height="34"><br><sub>Uvicorn</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/vercel.svg" alt="Vercel" height="34"><br><sub>Vercel</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/vim.svg" alt="Vim" height="34"><br><sub>Vim</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/vite.svg" alt="Vite" height="34"><br><sub>Vite</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/vitest.svg" alt="Vitest" height="34"><br><sub>Vitest</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/vscode.svg" alt="VS Code" height="34"><br><sub>VS Code</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/vue.svg" alt="Vue.js" height="34"><br><sub>Vue.js</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/webpack.svg" alt="webpack" height="34"><br><sub>webpack</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/webstorm.svg" alt="WebStorm" height="34"><br><sub>WebStorm</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/windows.svg" alt="Windows" height="34"><br><sub>Windows</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/xcode.svg" alt="Xcode" height="34"><br><sub>Xcode</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/yaml.svg" alt="YAML" height="34"><br><sub>YAML</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/tech/yarn.svg" alt="Yarn" height="34"><br><sub>Yarn</sub></td>
</tr>
</table>
</div>

### 📱 Download & store badges — 8

<div align="center">
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/badge/appstore.svg" alt="App Store" height="40"><br><sub>App Store</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/badge/appstore-vi.svg" alt="appstore-vi" height="40"><br><sub>appstore-vi</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/badge/googleplay.svg" alt="Google Play" height="40"><br><sub>Google Play</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/badge/googleplay-vi.png" alt="googleplay-vi" height="40"><br><sub>googleplay…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/badge/macos.svg" alt="macOS" height="40"><br><sub>macOS</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/badge/macos-en.svg" alt="macOS (English)" height="40"><br><sub>macOS EN</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/badge/windows.svg" alt="Windows" height="40"><br><sub>Windows</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/badge/windows-en.svg" alt="Windows (English)" height="40"><br><sub>Windows EN</sub></td>
</tr>
</table>
</div>

Vietnamese and English variants: Apple and Google publish their own localized badges; the macOS and Windows badges are house-built (`macos.svg`/`windows.svg` read *Tải cho*, `macos-en.svg`/`windows-en.svg` read *Download for*).

### 🤖 AI providers — 86

<div align="center">
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/ai21.svg" alt="AI21 Labs" height="34"><br><sub>AI21 Labs</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/bedrock.svg" alt="Amazon Bedrock" height="34"><br><sub>Bedrock</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/anthropic.svg" alt="Anthropic" height="34"><br><sub>Anthropic</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/aws.svg" alt="AWS" height="34"><br><sub>AWS</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/azureai.svg" alt="Azure AI" height="34"><br><sub>Azure AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/baichuan.svg" alt="Baichuan" height="34"><br><sub>Baichuan</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/bfl.svg" alt="Black Forest Labs" height="34"><br><sub>BFL</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/cerebras.svg" alt="Cerebras" height="34"><br><sub>Cerebras</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/chatglm.svg" alt="ChatGLM" height="34"><br><sub>ChatGLM</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/claude.svg" alt="Claude" height="34"><br><sub>Claude</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/claudecode.svg" alt="Claude Code" height="34"><br><sub>Claude Code</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/cline.svg" alt="Cline" height="34"><br><sub>Cline</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/codex.svg" alt="Codex" height="34"><br><sub>Codex</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/cohere.svg" alt="Cohere" height="34"><br><sub>Cohere</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/crewai.svg" alt="CrewAI" height="34"><br><sub>CrewAI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/cursor.svg" alt="Cursor" height="34"><br><sub>Cursor</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/dalle.svg" alt="DALL·E" height="34"><br><sub>DALL·E</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/deepinfra.svg" alt="DeepInfra" height="34"><br><sub>DeepInfra</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/deepseek.svg" alt="DeepSeek" height="34"><br><sub>DeepSeek</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/devin.svg" alt="Devin" height="34"><br><sub>Devin</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/dify.svg" alt="Dify" height="34"><br><sub>Dify</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/doubao.svg" alt="Doubao" height="34"><br><sub>Doubao</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/elevenlabs.svg" alt="ElevenLabs" height="34"><br><sub>ElevenLabs</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/wenxin.svg" alt="ERNIE" height="34"><br><sub>ERNIE</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/fireworks.svg" alt="Fireworks AI" height="34"><br><sub>Fireworks…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/flux.svg" alt="FLUX" height="34"><br><sub>FLUX</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/gemini.svg" alt="Gemini" height="34"><br><sub>Gemini</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/geminicli.svg" alt="Gemini CLI" height="34"><br><sub>Gemini CLI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/gemma.svg" alt="Gemma" height="34"><br><sub>Gemma</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/githubcopilot.svg" alt="GitHub Copilot" height="34"><br><sub>GH Copilot</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/google.svg" alt="Google" height="34"><br><sub>Google</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/aistudio.svg" alt="Google AI Studio" height="34"><br><sub>AI Studio</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/deepmind.svg" alt="Google DeepMind" height="34"><br><sub>DeepMind</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/grok.svg" alt="Grok" height="34"><br><sub>Grok</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/groq.svg" alt="Groq" height="34"><br><sub>Groq</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/hailuo.svg" alt="Hailuo" height="34"><br><sub>Hailuo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/huggingface.svg" alt="Hugging Face" height="34"><br><sub>Hugging Fa…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/hunyuan.svg" alt="Hunyuan" height="34"><br><sub>Hunyuan</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/ideogram.svg" alt="Ideogram" height="34"><br><sub>Ideogram</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/inflection.svg" alt="Inflection AI" height="34"><br><sub>Inflection…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/kimi.svg" alt="Kimi" height="34"><br><sub>Kimi</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/kling.svg" alt="Kling" height="34"><br><sub>Kling</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/langchain.svg" alt="LangChain" height="34"><br><sub>LangChain</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/llamaindex.svg" alt="LlamaIndex" height="34"><br><sub>LlamaIndex</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/lmstudio.svg" alt="LM Studio" height="34"><br><sub>LM Studio</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/lovable.svg" alt="Lovable" height="34"><br><sub>Lovable</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/luma.svg" alt="Luma AI" height="34"><br><sub>Luma AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/manus.svg" alt="Manus" height="34"><br><sub>Manus</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/meta.svg" alt="Meta" height="34"><br><sub>Meta</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/metaai.svg" alt="Meta AI" height="34"><br><sub>Meta AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/microsoft.svg" alt="Microsoft" height="34"><br><sub>Microsoft</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/copilot.svg" alt="Microsoft Copilot" height="34"><br><sub>Copilot</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/midjourney.svg" alt="Midjourney" height="34"><br><sub>Midjourney</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/minimax.svg" alt="MiniMax" height="34"><br><sub>MiniMax</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/mistral.svg" alt="Mistral AI" height="34"><br><sub>Mistral AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/mcp.svg" alt="Model Context Protocol" height="34"><br><sub>MCP</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/moonshot.svg" alt="Moonshot AI" height="34"><br><sub>Moonshot AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/n8n.svg" alt="n8n" height="34"><br><sub>n8n</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/notebooklm.svg" alt="NotebookLM" height="34"><br><sub>NotebookLM</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/nvidia.svg" alt="NVIDIA" height="34"><br><sub>NVIDIA</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/ollama.svg" alt="Ollama" height="34"><br><sub>Ollama</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/openai.svg" alt="OpenAI" height="34"><br><sub>OpenAI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/openrouter.svg" alt="OpenRouter" height="34"><br><sub>OpenRouter</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/perplexity.svg" alt="Perplexity" height="34"><br><sub>Perplexity</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/pika.svg" alt="Pika" height="34"><br><sub>Pika</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/poe.svg" alt="Poe" height="34"><br><sub>Poe</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/qwen.svg" alt="Qwen" height="34"><br><sub>Qwen</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/reka.svg" alt="Reka" height="34"><br><sub>Reka</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/replicate.svg" alt="Replicate" height="34"><br><sub>Replicate</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/replit.svg" alt="Replit" height="34"><br><sub>Replit</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/runway.svg" alt="Runway" height="34"><br><sub>Runway</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/sambanova.svg" alt="SambaNova" height="34"><br><sub>SambaNova</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/sora.svg" alt="Sora" height="34"><br><sub>Sora</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/stability.svg" alt="Stability AI" height="34"><br><sub>Stability…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/stepfun.svg" alt="StepFun" height="34"><br><sub>StepFun</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/suno.svg" alt="Suno" height="34"><br><sub>Suno</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/together.svg" alt="Together AI" height="34"><br><sub>Together AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/trae.svg" alt="Trae" height="34"><br><sub>Trae</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/udio.svg" alt="Udio" height="34"><br><sub>Udio</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/upstage.svg" alt="Upstage" height="34"><br><sub>Upstage</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/v0.svg" alt="v0" height="34"><br><sub>v0</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/vertexai.svg" alt="Vertex AI" height="34"><br><sub>Vertex AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/windsurf.svg" alt="Windsurf" height="34"><br><sub>Windsurf</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/xai.svg" alt="xAI" height="34"><br><sub>xAI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/yi.svg" alt="Yi" height="34"><br><sub>Yi</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/ai/zhipu.svg" alt="Zhipu AI" height="34"><br><sub>Zhipu AI</sub></td>
</tr>
</table>
</div>

Full-color marks from [LobeHub Icons](https://github.com/lobehub/lobe-icons) (the `-color` variant wherever the brand has one). Monochrome brands ship black on a white tile.

### 🔌 Claude connectors — 516

The services in the Claude connector directory — Google Drive, Gmail, Google Calendar, Canva, Microsoft 365, Notion, Figma, Slack, and the rest.

<details>
<summary>Show all 516 connector icons</summary>

<div align="center">
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/8am-mycase.png" alt="8am MyCase" height="34"><br><sub>8am MyCase</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/abency.png" alt="Abency" height="34"><br><sub>Abency</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/accuweather.svg" alt="AccuWeather®" height="34"><br><sub>AccuWeathe…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/activecampaign.png" alt="ActiveCampaign" height="34"><br><sub>ActiveCamp…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/addepar.png" alt="Addepar MCP" height="34"><br><sub>Addepar MCP</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/adisinsight.png" alt="AdisInsight" height="34"><br><sub>AdisInsight</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/adobe.png" alt="Adobe" height="34"><br><sub>Adobe</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/adobe-customer-journey-analytics.png" alt="Adobe Customer Journey Analytics" height="34"><br><sub>Adobe Cust…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/adobe-experience-manager.png" alt="Adobe Experience Manager" height="34"><br><sub>Adobe Expe…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/adobe-journey-optimizer.png" alt="Adobe Journey Optimizer" height="34"><br><sub>Adobe Jour…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/adobe-marketing-agent.png" alt="Adobe Marketing Agent" height="34"><br><sub>Adobe Mark…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/adobe-workfront.png" alt="Adobe Workfront" height="34"><br><sub>Adobe Work…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/adspirer-ads-and-performance-marketing-agent.png" alt="Adspirer Ads & Performance Marketing Agent" height="34"><br><sub>Adspirer A…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/adwhispr-ads.png" alt="AdWhispr Ads" height="34"><br><sub>AdWhispr A…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/aftership-channels-for-tiktok-shop.svg" alt="AfterShip Channels for TikTok Shop" height="34"><br><sub>AfterShip…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/agentmail.png" alt="AgentMail" height="34"><br><sub>AgentMail</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/agility-cms.png" alt="Agility CMS" height="34"><br><sub>Agility CMS</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ahrefs.png" alt="Ahrefs" height="34"><br><sub>Ahrefs</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/airtable.svg" alt="Airtable" height="34"><br><sub>Airtable</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/aiwyn-tax.png" alt="Aiwyn Tax (formerly Column Tax)" height="34"><br><sub>Aiwyn Tax…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/aleph.png" alt="Aleph" height="34"><br><sub>Aleph</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/alltrails.svg" alt="AllTrails" height="34"><br><sub>AllTrails</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/alpha-vantage.png" alt="Alpha Vantage MCP Server" height="34"><br><sub>Alpha Vant…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/alphaxiv.svg" alt="alphaXiv" height="34"><br><sub>alphaXiv</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/amass.png" alt="Amass Connector" height="34"><br><sub>Amass Conn…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/amazon-selling-partner.png" alt="Amazon Selling Partner" height="34"><br><sub>Amazon Sel…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/amplitude.png" alt="Amplitude" height="34"><br><sub>Amplitude</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/anthropic-economic-index.svg" alt="Anthropic Economic Index" height="34"><br><sub>Anthropic…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/apollo-io.png" alt="Apollo.io" height="34"><br><sub>Apollo.io</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/articulate.png" alt="Articulate" height="34"><br><sub>Articulate</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/asana.svg" alt="Asana" height="34"><br><sub>Asana</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ashby.png" alt="Ashby" height="34"><br><sub>Ashby</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/astravue-app.png" alt="Astravue App" height="34"><br><sub>Astravue A…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/atlassian.svg" alt="Atlassian MCP" height="34"><br><sub>Atlassian…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/atlassian-rovo.svg" alt="Atlassian Rovo" height="34"><br><sub>Atlassian…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/attio.png" alt="Attio" height="34"><br><sub>Attio</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/august.png" alt="august" height="34"><br><sub>august</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/aurora.png" alt="Aurora" height="34"><br><sub>Aurora</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/aws-marketplace.png" alt="AWS Marketplace" height="34"><br><sub>AWS Market…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/aws.svg" alt="AWS MCP" height="34"><br><sub>AWS MCP</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/badger-maps-standard.png" alt="Badger Maps (Standard)" height="34"><br><sub>Badger Map…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/bamboohr.svg" alt="BambooHR" height="34"><br><sub>BambooHR</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/base44.png" alt="Base44" height="34"><br><sub>Base44</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/beehiiv.png" alt="beehiiv" height="34"><br><sub>beehiiv</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/benchling.png" alt="Benchling" height="34"><br><sub>Benchling</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/benevity.png" alt="Benevity" height="34"><br><sub>Benevity</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/bigdata-com.png" alt="Bigdata.com" height="34"><br><sub>Bigdata.com</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/bigin-by-zoho-crm.png" alt="Bigin by Zoho CRM" height="34"><br><sub>Bigin by Z…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/biorender.png" alt="BioRender" height="34"><br><sub>BioRender</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/biorxiv.png" alt="bioRxiv" height="34"><br><sub>bioRxiv</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/bitrise.svg" alt="Bitrise MCP" height="34"><br><sub>Bitrise MCP</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/black-diamond.svg" alt="Black Diamond" height="34"><br><sub>Black Diam…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/blockscout.png" alt="Blockscout" height="34"><br><sub>Blockscout</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/bloomberg-law.png" alt="Bloomberg Law" height="34"><br><sub>Bloomberg…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/boltz-api.png" alt="Boltz API" height="34"><br><sub>Boltz API</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/bonsai.png" alt="Bonsai" height="34"><br><sub>Bonsai</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/booking-com.png" alt="Booking.com" height="34"><br><sub>Booking.com</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/box.svg" alt="Box" height="34"><br><sub>Box</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/braze.png" alt="Braze" height="34"><br><sub>Braze</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/breezing.png" alt="Breezing" height="34"><br><sub>Breezing</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/brek-hotel-wholesale-booking.png" alt="Brek - Hotel Wholesale Booking" height="34"><br><sub>Brek - Hot…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/brevo.svg" alt="Brevo" height="34"><br><sub>Brevo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/brex.svg" alt="Brex" height="34"><br><sub>Brex</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/brightdeck.png" alt="Brightdeck" height="34"><br><sub>Brightdeck</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/brisk-teaching.png" alt="Brisk Teaching" height="34"><br><sub>Brisk Teac…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/bronto.png" alt="Bronto" height="34"><br><sub>Bronto</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/calendly.svg" alt="Calendly" height="34"><br><sub>Calendly</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/campfire.png" alt="Campfire" height="34"><br><sub>Campfire</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/candid.svg" alt="Candid" height="34"><br><sub>Candid</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/canva.svg" alt="Canva" height="34"><br><sub>Canva</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cargoai.png" alt="CargoAi" height="34"><br><sub>CargoAi</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cargurus.png" alt="CarGurus" height="34"><br><sub>CarGurus</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/carrefour.svg" alt="Carrefour" height="34"><br><sub>Carrefour</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/carta.png" alt="Carta" height="34"><br><sub>Carta</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/catalyst-by-zoho.png" alt="Catalyst by Zoho" height="34"><br><sub>Catalyst b…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cb-insights.png" alt="CB Insights" height="34"><br><sub>CB Insights</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cdata-connect-ai.png" alt="CData Connect AI" height="34"><br><sub>CData Conn…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/celigo.png" alt="Celigo" height="34"><br><sub>Celigo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/chargebee.png" alt="Chargebee" height="34"><br><sub>Chargebee</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/chariot.png" alt="Chariot" height="34"><br><sub>Chariot</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/chartmogul.svg" alt="ChartMogul" height="34"><br><sub>ChartMogul</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/chembl.png" alt="ChEMBL" height="34"><br><sub>ChEMBL</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/chronograph.png" alt="Chronograph" height="34"><br><sub>Chronograph</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/circleback.png" alt="Circleback" height="34"><br><sub>Circleback</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/circleci.svg" alt="CircleCI" height="34"><br><sub>CircleCI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/clarify.png" alt="Clarify" height="34"><br><sub>Clarify</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/clarity-ai.png" alt="Clarity AI" height="34"><br><sub>Clarity AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/clarivate-ipone-compumark-trademarks.svg" alt="Clarivate IPOne CompuMark Trademarks" height="34"><br><sub>Clarivate…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/claude-docs.svg" alt="Claude Docs" height="34"><br><sub>Claude Docs</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/clay.png" alt="Clay" height="34"><br><sub>Clay</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/clear-street.png" alt="Clear Street" height="34"><br><sub>Clear Stre…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/clerk.svg" alt="Clerk" height="34"><br><sub>Clerk</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/clickup.svg" alt="ClickUp" height="34"><br><sub>ClickUp</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/clinical-trials.png" alt="Clinical Trials" height="34"><br><sub>Clinical T…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/close.png" alt="Close" height="34"><br><sub>Close</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cloudflare-developer-platform.svg" alt="Cloudflare Developer Platform" height="34"><br><sub>Cloudflare…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cloudinary.svg" alt="Cloudinary" height="34"><br><sub>Cloudinary</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cms-coverage.png" alt="CMS Coverage" height="34"><br><sub>CMS Covera…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cocounsel-legal.png" alt="CoCounsel Legal" height="34"><br><sub>CoCounsel…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/codewords.png" alt="CodeWords" height="34"><br><sub>CodeWords</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cognito-forms.png" alt="Cognito Forms" height="34"><br><sub>Cognito Fo…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/coindesk.png" alt="CoinDesk" height="34"><br><sub>CoinDesk</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/coinversa-pulse.png" alt="Coinversa Pulse" height="34"><br><sub>Coinversa…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/common-room.png" alt="Common Room" height="34"><br><sub>Common Room</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/consensus.png" alt="Consensus" height="34"><br><sub>Consensus</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/constant-contact.png" alt="Constant Contact" height="34"><br><sub>Constant C…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/contentful.svg" alt="Contentful MCP" height="34"><br><sub>Contentful…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/contentsquare.png" alt="Contentsquare" height="34"><br><sub>Contentsqu…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/context7.png" alt="Context7" height="34"><br><sub>Context7</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/control-plane.png" alt="Control Plane" height="34"><br><sub>Control Pl…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/coralogix.png" alt="Coralogix" height="34"><br><sub>Coralogix</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cortellis-cmc-intelligence.png" alt="Cortellis CMC Intelligence" height="34"><br><sub>Cortellis…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cotality.png" alt="Cotality" height="34"><br><sub>Cotality</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/coteach.svg" alt="Coteach" height="34"><br><sub>Coteach</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/coursera.svg" alt="Coursera" height="34"><br><sub>Coursera</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/courtlistener.png" alt="CourtListener" height="34"><br><sub>CourtListe…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/courtroom5.png" alt="Courtroom5" height="34"><br><sub>Courtroom5</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/craft.png" alt="Craft" height="34"><br><sub>Craft</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/craft-io.png" alt="Craft.io" height="34"><br><sub>Craft.io</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/crunchbase.svg" alt="Crunchbase MCP" height="34"><br><sub>Crunchbase…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/crustdata.png" alt="Crustdata" height="34"><br><sub>Crustdata</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/crypto-com.png" alt="Crypto.com" height="34"><br><sub>Crypto.com</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/customer-io.svg" alt="Customer.io" height="34"><br><sub>Customer.io</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/d-and-b-finance-analytics.svg" alt="D&B Finance Analytics" height="34"><br><sub>D&B Financ…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/d-and-b-risk-analytics.png" alt="D&B Risk Analytics" height="34"><br><sub>D&B Risk A…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/daloopa.png" alt="Daloopa" height="34"><br><sub>Daloopa</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/databricks-genie.svg" alt="Databricks Genie" height="34"><br><sub>Databricks…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/datacamp.svg" alt="DataCamp" height="34"><br><sub>DataCamp</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/datadog.svg" alt="Datadog" height="34"><br><sub>Datadog</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/datagrail.png" alt="DataGrail" height="34"><br><sub>DataGrail</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/datahub.png" alt="DataHub" height="34"><br><sub>DataHub</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/datarails-financeos.png" alt="Datarails FinanceOS" height="34"><br><sub>Datarails…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/day-ai.png" alt="Day AI" height="34"><br><sub>Day AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/dbt.png" alt="dbt" height="34"><br><sub>dbt</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/deel.png" alt="Deel" height="34"><br><sub>Deel</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/definely.png" alt="Definely" height="34"><br><sub>Definely</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/descript.png" alt="Descript" height="34"><br><sub>Descript</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/descrybe-legal-engine.png" alt="Descrybe Legal Engine" height="34"><br><sub>Descrybe L…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/diffit.png" alt="Diffit" height="34"><br><sub>Diffit</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/digits.png" alt="Digits" height="34"><br><sub>Digits</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/directbooker.png" alt="DirectBooker" height="34"><br><sub>DirectBook…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/docfarm.png" alt="Docfarm" height="34"><br><sub>Docfarm</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/docusign.png" alt="Docusign" height="34"><br><sub>Docusign</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/domino-s-india.png" alt="Domino's India" height="34"><br><sub>Domino's I…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/drata.png" alt="Drata" height="34"><br><sub>Drata</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/dremio-cloud.png" alt="Dremio Cloud" height="34"><br><sub>Dremio Clo…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/dropbox.svg" alt="Dropbox" height="34"><br><sub>Dropbox</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/dualentry.png" alt="DualEntry" height="34"><br><sub>DualEntry</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/eden-by-basecamp-research.png" alt="EDEN by Basecamp Research" height="34"><br><sub>EDEN by Ba…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/eedi.svg" alt="Eedi" height="34"><br><sub>Eedi</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/egnyte.svg" alt="Egnyte" height="34"><br><sub>Egnyte</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/elastic-cloud-serverless.svg" alt="Elastic Cloud Serverless" height="34"><br><sub>Elastic Cl…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/elevenlabs.svg" alt="ElevenLabs" height="34"><br><sub>ElevenLabs</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/elfcare.svg" alt="Elfcare" height="34"><br><sub>Elfcare</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/elicit.png" alt="Elicit" height="34"><br><sub>Elicit</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/enterpret.png" alt="Enterpret" height="34"><br><sub>Enterpret</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/era-context.png" alt="Era Context" height="34"><br><sub>Era Context</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/exa.svg" alt="Exa" height="34"><br><sub>Exa</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/excalidraw.svg" alt="Excalidraw" height="34"><br><sub>Excalidraw</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/expedia.png" alt="Expedia" height="34"><br><sub>Expedia</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/expo.svg" alt="Expo" height="34"><br><sub>Expo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/fastmail.png" alt="Fastmail" height="34"><br><sub>Fastmail</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/fathom-your-meeting-intelligence-layer.png" alt="Fathom – Your Meeting Intelligence Layer" height="34"><br><sub>Fathom – Y…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/felt-maps.png" alt="Felt Maps" height="34"><br><sub>Felt Maps</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/fibery.svg" alt="Fibery" height="34"><br><sub>Fibery</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/figma.svg" alt="Figma" height="34"><br><sub>Figma</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/files-com.png" alt="Files.com" height="34"><br><sub>Files.com</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/filevine.png" alt="Filevine" height="34"><br><sub>Filevine</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/firecrawl.svg" alt="Firecrawl" height="34"><br><sub>Firecrawl</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/fireflies.png" alt="Fireflies" height="34"><br><sub>Fireflies</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/fiscal-ai.png" alt="Fiscal.ai" height="34"><br><sub>Fiscal.ai</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/flexport.png" alt="Flexport" height="34"><br><sub>Flexport</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/floot.png" alt="Floot" height="34"><br><sub>Floot</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/flourish.png" alt="Flourish" height="34"><br><sub>Flourish</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/fmp.png" alt="FMP" height="34"><br><sub>FMP</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/freshbooks.png" alt="FreshBooks" height="34"><br><sub>FreshBooks</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/freshservice.png" alt="Freshservice" height="34"><br><sub>Freshservi…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/frontify.png" alt="Frontify" height="34"><br><sub>Frontify</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/fullstory.png" alt="Fullstory" height="34"><br><sub>Fullstory</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/fyxer.png" alt="Fyxer" height="34"><br><sub>Fyxer</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/g2.svg" alt="G2" height="34"><br><sub>G2</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/gainsight-cs.png" alt="Gainsight (CS)" height="34"><br><sub>Gainsight…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/gainsight-staircase-ai.png" alt="Gainsight (Staircase AI)" height="34"><br><sub>Gainsight…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/gamma.png" alt="Gamma" height="34"><br><sub>Gamma</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/general-legal.png" alt="General Legal" height="34"><br><sub>General Le…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/gis-cloud.png" alt="GIS Cloud" height="34"><br><sub>GIS Cloud</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/givebutter.svg" alt="Givebutter" height="34"><br><sub>Givebutter</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/glean.png" alt="Glean" height="34"><br><sub>Glean</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/gmail.png" alt="Gmail" height="34"><br><sub>Gmail</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/gocardless.png" alt="GoCardless" height="34"><br><sub>GoCardless</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/goodnotes.png" alt="Goodnotes" height="34"><br><sub>Goodnotes</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/google-calendar.png" alt="Google Calendar" height="34"><br><sub>Google Cal…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/google-cloud-bigquery.svg" alt="Google Cloud BigQuery" height="34"><br><sub>Google Clo…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/google-docs.png" alt="Google Docs" height="34"><br><sub>Google Docs</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/google-drive.png" alt="Google Drive" height="34"><br><sub>Google Dri…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/google-slides.png" alt="Google Slides" height="34"><br><sub>Google Sli…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/govtribe.png" alt="GovTribe" height="34"><br><sub>GovTribe</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/grain.png" alt="Grain" height="34"><br><sub>Grain</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/granola.png" alt="Granola" height="34"><br><sub>Granola</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/granted.png" alt="Granted" height="34"><br><sub>Granted</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/graphos.svg" alt="GraphOS MCP Tools" height="34"><br><sub>GraphOS MC…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/grtwo-docs.svg" alt="grtwo-docs" height="34"><br><sub>grtwo-docs</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/guru.png" alt="Guru" height="34"><br><sub>Guru</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/gusto.svg" alt="Gusto" height="34"><br><sub>Gusto</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/hanover-park.png" alt="Hanover Park" height="34"><br><sub>Hanover Pa…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/harmonic.png" alt="Harmonic" height="34"><br><sub>Harmonic</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/have-i-been-pwned.svg" alt="Have I Been Pwned" height="34"><br><sub>Have I Bee…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/health-data-avatar-hda.svg" alt="Health Data Avatar (HDA)" height="34"><br><sub>Health Dat…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/helena-by-enrich-labs.png" alt="Helena by Enrich Labs" height="34"><br><sub>Helena by…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/helium-10.png" alt="Helium 10" height="34"><br><sub>Helium 10</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/helix-genosphere.png" alt="Helix GenoSphere" height="34"><br><sub>Helix Geno…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/hex.png" alt="Hex" height="34"><br><sub>Hex</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/highspot.png" alt="Highspot" height="34"><br><sub>Highspot</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/honeycomb.png" alt="Honeycomb" height="34"><br><sub>Honeycomb</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/hubspot.svg" alt="HubSpot" height="34"><br><sub>HubSpot</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/hugging-face.svg" alt="Hugging Face" height="34"><br><sub>Hugging Fa…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/hyperframes-by-heygen.png" alt="HyperFrames by HeyGen" height="34"><br><sub>HyperFrame…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/icd-10-codes.svg" alt="ICD-10 Codes" height="34"><br><sub>ICD-10 Cod…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ideals.png" alt="Ideals" height="34"><br><sub>Ideals</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/imanage-work.png" alt="iManage Work" height="34"><br><sub>iManage Wo…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/incident-io.png" alt="incident.io" height="34"><br><sub>incident.io</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/inductive-bio.png" alt="Inductive Bio" height="34"><br><sub>Inductive…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/infobip-message.png" alt="Infobip Message" height="34"><br><sub>Infobip Me…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/inkbox.png" alt="Inkbox" height="34"><br><sub>Inkbox</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/instacart.svg" alt="Instacart" height="34"><br><sub>Instacart</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/instrumentl.png" alt="Instrumentl" height="34"><br><sub>Instrumentl</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/interactive-brokers-ibkr.png" alt="Interactive Brokers (IBKR)" height="34"><br><sub>Interactiv…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/intercom.svg" alt="Intercom" height="34"><br><sub>Intercom</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/intuit-credit-karma.png" alt="Intuit Credit Karma" height="34"><br><sub>Intuit Cre…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/intuit-mailchimp.svg" alt="Intuit Mailchimp" height="34"><br><sub>Intuit Mai…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/intuit-quickbooks.svg" alt="Intuit QuickBooks" height="34"><br><sub>Intuit Qui…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/intuit-turbotax.svg" alt="Intuit TurboTax" height="34"><br><sub>Intuit Tur…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ironclad-contracts.png" alt="Ironclad Contracts" height="34"><br><sub>Ironclad C…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/isolved-people-cloud.svg" alt="isolved People Cloud" height="34"><br><sub>isolved Pe…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/iubenda.png" alt="iubenda" height="34"><br><sub>iubenda</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/jam.png" alt="Jam" height="34"><br><sub>Jam</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/jobber.png" alt="Jobber" height="34"><br><sub>Jobber</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/jotform.png" alt="Jotform" height="34"><br><sub>Jotform</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/jotform-apps.png" alt="Jotform Apps" height="34"><br><sub>Jotform Ap…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/jus-ai-by-jus-mundi-light-mode.png" alt="Jus AI by Jus Mundi (Light Mode)" height="34"><br><sub>Jus AI by…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/kahoot.png" alt="Kahoot!" height="34"><br><sub>Kahoot!</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/kernel.png" alt="Kernel" height="34"><br><sub>Kernel</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ketryx.png" alt="Ketryx" height="34"><br><sub>Ketryx</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/kindora-funder-discovery.png" alt="Kindora Funder Discovery" height="34"><br><sub>Kindora Fu…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/kit.png" alt="Kit MCP" height="34"><br><sub>Kit MCP</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/klaviyo.png" alt="Klaviyo" height="34"><br><sub>Klaviyo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/klue.png" alt="Klue" height="34"><br><sub>Klue</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/kpler.png" alt="Kpler" height="34"><br><sub>Kpler</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/kuliko-ai.png" alt="Kuliko AI" height="34"><br><sub>Kuliko AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lastminute-com.png" alt="lastminute.com" height="34"><br><sub>lastminute…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lattice.png" alt="Lattice" height="34"><br><sub>Lattice</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lawstronaut.png" alt="Lawstronaut" height="34"><br><sub>Lawstronaut</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lawve-ai.png" alt="Lawve AI" height="34"><br><sub>Lawve AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lawvu.png" alt="LawVu" height="34"><br><sub>LawVu</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/leadfeeder.png" alt="Leadfeeder" height="34"><br><sub>Leadfeeder</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/learning-commons.png" alt="Learning Commons" height="34"><br><sub>Learning C…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/legal-brain-agent.png" alt="Legal Brain Agent" height="34"><br><sub>Legal Brai…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/legal-data-hunter.png" alt="Legal Data Hunter" height="34"><br><sub>Legal Data…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/legalzoom.png" alt="LegalZoom" height="34"><br><sub>LegalZoom</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/letsbot.svg" alt="LetsBot" height="34"><br><sub>LetsBot</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/light.svg" alt="Light" height="34"><br><sub>Light</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/linear.svg" alt="Linear" height="34"><br><sub>Linear</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/llamaparse.svg" alt="LlamaParse" height="34"><br><sub>LlamaParse</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/local-falcon.svg" alt="Local Falcon" height="34"><br><sub>Local Falc…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/loops.svg" alt="Loops" height="34"><br><sub>Loops</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lorikeet.png" alt="Lorikeet" height="34"><br><sub>Lorikeet</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lovable.svg" alt="Lovable" height="34"><br><sub>Lovable</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lseg.png" alt="LSEG" height="34"><br><sub>LSEG</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lucid.svg" alt="Lucid" height="34"><br><sub>Lucid</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lumin.png" alt="Lumin" height="34"><br><sub>Lumin</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lunarcrush.png" alt="LunarCrush" height="34"><br><sub>LunarCrush</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lusha.png" alt="Lusha" height="34"><br><sub>Lusha</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/lz-virtual-mail.png" alt="LZ Virtual Mail" height="34"><br><sub>LZ Virtual…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/macaly-cloud.png" alt="Macaly Cloud" height="34"><br><sub>Macaly Clo…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mailerlite.png" alt="MailerLite" height="34"><br><sub>MailerLite</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/make.svg" alt="Make" height="34"><br><sub>Make</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/manatal.png" alt="Manatal" height="34"><br><sub>Manatal</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/manufact.png" alt="Manufact" height="34"><br><sub>Manufact</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mary.png" alt="Mary" height="34"><br><sub>Mary</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/maryland-community-compass.png" alt="Maryland Community Compass" height="34"><br><sub>Maryland C…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mastercard-developers.svg" alt="Mastercard Developers" height="34"><br><sub>Mastercard…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/maven-bio.png" alt="Maven Bio" height="34"><br><sub>Maven Bio</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/melon.png" alt="Melon" height="34"><br><sub>Melon</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/meridian-for-quickbooks.png" alt="Meridian Connector for QuickBooks" height="34"><br><sub>Meridian C…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mermaid-chart.svg" alt="Mermaid Chart" height="34"><br><sub>Mermaid Ch…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/metabase.svg" alt="Metabase" height="34"><br><sub>Metabase</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/metaview.png" alt="Metaview" height="34"><br><sub>Metaview</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/metricool-social-media-management.png" alt="Metricool Social Media Management" height="34"><br><sub>Metricool…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/microsoft-365.svg" alt="Microsoft 365" height="34"><br><sub>Microsoft…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/microsoft-learn.svg" alt="Microsoft Learn" height="34"><br><sub>Microsoft…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/midpage-legal-research.png" alt="Midpage Legal Research" height="34"><br><sub>Midpage Le…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mintlify.svg" alt="Mintlify" height="34"><br><sub>Mintlify</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/miro.svg" alt="Miro" height="34"><br><sub>Miro</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mittwald.png" alt="mittwald" height="34"><br><sub>mittwald</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mixpanel.svg" alt="Mixpanel" height="34"><br><sub>Mixpanel</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mobbin.svg" alt="Mobbin" height="34"><br><sub>Mobbin</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/moda-slides-and-designs.png" alt="Moda - Slides and Designs" height="34"><br><sub>Moda - Sli…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/monday-com.png" alt="monday.com" height="34"><br><sub>monday.com</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mongodb-atlas.svg" alt="MongoDB Atlas" height="34"><br><sub>MongoDB At…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/monte-carlo.png" alt="Monte Carlo" height="34"><br><sub>Monte Carlo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/moody-s-credit.png" alt="Moody's Credit MCP" height="34"><br><sub>Moody's Cr…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/morningstar.png" alt="Morningstar" height="34"><br><sub>Morningstar</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/morningstar-credit-analytics.png" alt="Morningstar Credit Analytics" height="34"><br><sub>Morningsta…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mospi.png" alt="MoSPI" height="34"><br><sub>MoSPI</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/motherduck.png" alt="MotherDuck" height="34"><br><sub>MotherDuck</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/motion-creative-analytics.png" alt="Motion Creative Analytics" height="34"><br><sub>Motion Cre…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/msci.png" alt="MSCI Connector" height="34"><br><sub>MSCI Conne…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mt-newswires.png" alt="MT Newswires" height="34"><br><sub>MT Newswir…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/mulesoft.png" alt="MuleSoft" height="34"><br><sub>MuleSoft</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/n8n.svg" alt="n8n" height="34"><br><sub>n8n</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/natoma.png" alt="Natoma" height="34"><br><sub>Natoma</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/neon.svg" alt="Neon" height="34"><br><sub>Neon</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/netlify.svg" alt="Netlify" height="34"><br><sub>Netlify</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/nimble.png" alt="Nimble" height="34"><br><sub>Nimble</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ninout.png" alt="Ninout" height="34"><br><sub>Ninout</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/notion.svg" alt="Notion" height="34"><br><sub>Notion</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/nutshell-crm.png" alt="Nutshell CRM" height="34"><br><sub>Nutshell C…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/oak-national-academy.png" alt="Oak National Academy" height="34"><br><sub>Oak Nation…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/omni-analytics.png" alt="Omni Analytics" height="34"><br><sub>Omni Analy…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/onesignal.svg" alt="OneSignal" height="34"><br><sub>OneSignal</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/openrush.png" alt="OpenRush" height="34"><br><sub>OpenRush</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/orion.svg" alt="Orion" height="34"><br><sub>Orion</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/orion-by-gravity.png" alt="Orion by Gravity" height="34"><br><sub>Orion by G…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/otter-ai.png" alt="Otter.ai" height="34"><br><sub>Otter.ai</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/otto-travel.png" alt="Otto Travel" height="34"><br><sub>Otto Travel</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/outreach.png" alt="Outreach" height="34"><br><sub>Outreach</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/owkin.png" alt="Owkin" height="34"><br><sub>Owkin</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/oxford-economics.png" alt="Oxford Economics" height="34"><br><sub>Oxford Eco…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/padlet.png" alt="Padlet" height="34"><br><sub>Padlet</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pagerduty.svg" alt="PagerDuty" height="34"><br><sub>PagerDuty</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pandadoc.png" alt="PandaDoc" height="34"><br><sub>PandaDoc</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/patlytics.png" alt="Patlytics" height="34"><br><sub>Patlytics</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/paxton-legal-research.png" alt="Paxton Legal Research" height="34"><br><sub>Paxton Leg…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/paypal.svg" alt="paypal" height="34"><br><sub>paypal</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/paytm-payment-gateway.png" alt="Paytm Payment Gateway" height="34"><br><sub>Paytm Paym…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pdf-viewer.svg" alt="PDF Viewer" height="34"><br><sub>PDF Viewer</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pdf-net.png" alt="PDF.net" height="34"><br><sub>PDF.net</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/peec-ai.png" alt="Peec AI" height="34"><br><sub>Peec AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pendo.png" alt="Pendo" height="34"><br><sub>Pendo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/perspective-ai.png" alt="Perspective AI" height="34"><br><sub>Perspectiv…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pg-aiguide.svg" alt="pg-aiguide" height="34"><br><sub>pg-aiguide</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/phished.png" alt="Phished" height="34"><br><sub>Phished</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/phoenix-by-hg-insights.png" alt="Phoenix by HG Insights" height="34"><br><sub>Phoenix by…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pi-security.png" alt="Pi Security" height="34"><br><sub>Pi Security</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pine-labs-payments-assistant.png" alt="Pine Labs Payments Assistant" height="34"><br><sub>Pine Labs…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pinegap.png" alt="Pinegap" height="34"><br><sub>Pinegap</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pipedrive.png" alt="Pipedrive" height="34"><br><sub>Pipedrive</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pitchbook-premium.png" alt="PitchBook Premium" height="34"><br><sub>PitchBook…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/plaid-developer-tools.png" alt="Plaid Developer Tools" height="34"><br><sub>Plaid Deve…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/planetscale.svg" alt="PlanetScale" height="34"><br><sub>PlanetScale</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/planning-center.png" alt="Planning Center" height="34"><br><sub>Planning C…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/play-sheet-music.svg" alt="Play Sheet Music" height="34"><br><sub>Play Sheet…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pocketsmith-complete-access.png" alt="PocketSmith Complete Access" height="34"><br><sub>PocketSmit…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pointone.png" alt="PointOne" height="34"><br><sub>PointOne</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/polar-analytics.png" alt="Polar Analytics" height="34"><br><sub>Polar Anal…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/posthog.svg" alt="PostHog" height="34"><br><sub>PostHog</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/postman.svg" alt="Postman" height="34"><br><sub>Postman</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/productised.png" alt="Productised" height="34"><br><sub>Productised</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pubmed.svg" alt="PubMed" height="34"><br><sub>PubMed</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/pushwoosh-manymoney.svg" alt="Pushwoosh ManyMoney" height="34"><br><sub>Pushwoosh…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/qonto.png" alt="Qonto" height="34"><br><sub>Qonto</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/quartr.png" alt="Quartr" height="34"><br><sub>Quartr</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/quicknode.png" alt="QuickNode" height="34"><br><sub>QuickNode</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/railway.svg" alt="Railway" height="34"><br><sub>Railway</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/rally.png" alt="Rally MCP" height="34"><br><sub>Rally MCP</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ramp.png" alt="Ramp" height="34"><br><sub>Ramp</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ramp-data.png" alt="Ramp Data" height="34"><br><sub>Ramp Data</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ratehub-mortgage.png" alt="Ratehub Mortgage" height="34"><br><sub>Ratehub Mo…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/readwise.png" alt="Readwise" height="34"><br><sub>Readwise</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/reclaim-ai.png" alt="Reclaim.ai" height="34"><br><sub>Reclaim.ai</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/reco.png" alt="Reco" height="34"><br><sub>Reco</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/relativity.png" alt="Relativity" height="34"><br><sub>Relativity</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/remesh.png" alt="Remesh" height="34"><br><sub>Remesh</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/remote-com.png" alt="Remote.com" height="34"><br><sub>Remote.com</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/render.svg" alt="Render" height="34"><br><sub>Render</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/resend.svg" alt="Resend" height="34"><br><sub>Resend</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/revealed.png" alt="Revealed" height="34"><br><sub>Revealed</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/rillet.png" alt="Rillet" height="34"><br><sub>Rillet</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/risotto.png" alt="Risotto" height="34"><br><sub>Risotto</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/riverside.png" alt="Riverside" height="34"><br><sub>Riverside</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/roboflow.svg" alt="Roboflow" height="34"><br><sub>Roboflow</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/rsvpify.png" alt="RSVPify" height="34"><br><sub>RSVPify</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/runway-team.png" alt="Runway (runway.team)" height="34"><br><sub>Runway (ru…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/s-and-p-deterministic-retrieval.png" alt="S&P - Deterministic Retrieval" height="34"><br><sub>S&P - Dete…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/s-and-p-global-adaptive-retrieval.png" alt="S&P Global - Adaptive Retrieval" height="34"><br><sub>S&P Global…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/salesflare.png" alt="Salesflare" height="34"><br><sub>Salesflare</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/salesforce.svg" alt="Salesforce" height="34"><br><sub>Salesforce</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/salesloft.png" alt="Salesloft" height="34"><br><sub>Salesloft</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/sandboxaq.png" alt="SandboxAQ" height="34"><br><sub>SandboxAQ</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/sanity.svg" alt="Sanity" height="34"><br><sub>Sanity</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/seamless.png" alt="Seamless" height="34"><br><sub>Seamless</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/seismic.png" alt="Seismic" height="34"><br><sub>Seismic</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/semrush.svg" alt="Semrush" height="34"><br><sub>Semrush</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/send.png" alt="Send" height="34"><br><sub>Send</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/sendcloud.png" alt="Sendcloud" height="34"><br><sub>Sendcloud</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/sentry.svg" alt="Sentry" height="34"><br><sub>Sentry</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/servicenow.png" alt="ServiceNow" height="34"><br><sub>ServiceNow</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/shapes.png" alt="Shapes" height="34"><br><sub>Shapes</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/shipbob.svg" alt="ShipBob" height="34"><br><sub>ShipBob</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/shopify.svg" alt="Shopify" height="34"><br><sub>Shopify</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/sigma.png" alt="Sigma" height="34"><br><sub>Sigma</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/signeasy.png" alt="Signeasy" height="34"><br><sub>Signeasy</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/signnow.png" alt="SignNow" height="34"><br><sub>SignNow</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/similarweb.svg" alt="Similarweb" height="34"><br><sub>Similarweb</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/slack.svg" alt="Slack" height="34"><br><sub>Slack</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/slicktrip.png" alt="SlickTrip" height="34"><br><sub>SlickTrip</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/slidesgpt.png" alt="SlidesGPT" height="34"><br><sub>SlidesGPT</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/smartling.png" alt="Smartling" height="34"><br><sub>Smartling</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/smartsheet.png" alt="Smartsheet" height="34"><br><sub>Smartsheet</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/snomed-ct-terminology.png" alt="SNOMED CT Terminology" height="34"><br><sub>SNOMED CT…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/snowflake.svg" alt="Snowflake" height="34"><br><sub>Snowflake</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/solve-intelligence.png" alt="Solve Intelligence" height="34"><br><sub>Solve Inte…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/spara.png" alt="Spara" height="34"><br><sub>Spara</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/speko.png" alt="Speko" height="34"><br><sub>Speko</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/sprinto.svg" alt="Sprinto MCP" height="34"><br><sub>Sprinto MCP</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/square.svg" alt="Square" height="34"><br><sub>Square</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/steadybit.svg" alt="Steadybit" height="34"><br><sub>Steadybit</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/strava.png" alt="Strava" height="34"><br><sub>Strava</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/stripe.svg" alt="Stripe" height="34"><br><sub>Stripe</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/stub.png" alt="stub" height="34"><br><sub>stub</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/stytch.png" alt="Stytch" height="34"><br><sub>Stytch</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/sumble.png" alt="Sumble" height="34"><br><sub>Sumble</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/sumsub.png" alt="Sumsub" height="34"><br><sub>Sumsub</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/supabase.svg" alt="Supabase" height="34"><br><sub>Supabase</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/super-com.png" alt="Super.com" height="34"><br><sub>Super.com</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/superbooks.png" alt="SuperBooks" height="34"><br><sub>SuperBooks</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/superhuman-docs.png" alt="Superhuman Docs" height="34"><br><sub>Superhuman…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/superhuman-mail.png" alt="Superhuman Mail" height="34"><br><sub>Superhuman…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/supermetrics-marketing-analytics.png" alt="Supermetrics Marketing Analytics" height="34"><br><sub>Supermetri…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/surveymonkey.svg" alt="SurveyMonkey" height="34"><br><sub>SurveyMonk…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/swagger.png" alt="Swagger" height="34"><br><sub>Swagger</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/synapse-org.png" alt="Synapse.org" height="34"><br><sub>Synapse.org</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/synthflow.svg" alt="Synthflow" height="34"><br><sub>Synthflow</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tabs.png" alt="Tabs" height="34"><br><sub>Tabs</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tactiq.png" alt="Tactiq" height="34"><br><sub>Tactiq</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tally.png" alt="Tally" height="34"><br><sub>Tally</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/taskrabbit-booking-assistance.png" alt="Taskrabbit Booking Assistance" height="34"><br><sub>Taskrabbit…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tavily.svg" alt="Tavily" height="34"><br><sub>Tavily</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/taxact.svg" alt="TaxAct" height="34"><br><sub>TaxAct</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tella.png" alt="Tella" height="34"><br><sub>Tella</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/terminal49.png" alt="Terminal49" height="34"><br><sub>Terminal49</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/thoughtspot-spotter.png" alt="ThoughtSpot Spotter" height="34"><br><sub>ThoughtSpo…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/three-js-3d-viewer.svg" alt="Three.js 3D Viewer" height="34"><br><sub>Three.js 3…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ticket-tailor.svg" alt="Ticket Tailor" height="34"><br><sub>Ticket Tai…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ticketmaster.svg" alt="Ticketmaster" height="34"><br><sub>Ticketmast…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ticktick.svg" alt="TickTick" height="34"><br><sub>TickTick</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tiktok-for-business.svg" alt="TikTok for Business" height="34"><br><sub>TikTok for…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tiller.png" alt="Tiller" height="34"><br><sub>Tiller</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tineo.png" alt="Tineo" height="34"><br><sub>Tineo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tinyfish.png" alt="TinyFish" height="34"><br><sub>TinyFish</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tldv.png" alt="tldv" height="34"><br><sub>tldv</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/todoist.svg" alt="Todoist" height="34"><br><sub>Todoist</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tomtom-maps.svg" alt="TomTom Maps" height="34"><br><sub>TomTom Maps</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/trellis.png" alt="Trellis" height="34"><br><sub>Trellis</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/trello.svg" alt="Trello" height="34"><br><sub>Trello</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/tripadvisor.png" alt="Tripadvisor" height="34"><br><sub>Tripadvisor</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/trussi-ai.png" alt="Trussi AI" height="34"><br><sub>Trussi AI</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/turkish-airlines.svg" alt="Turkish Airlines" height="34"><br><sub>Turkish Ai…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/turquoise.png" alt="Turquoise" height="34"><br><sub>Turquoise</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/twelve-data.png" alt="Twelve Data" height="34"><br><sub>Twelve Data</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/twilio.png" alt="Twilio" height="34"><br><sub>Twilio</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/typefully-social-media-scheduler.png" alt="Typefully - Social Media Scheduler" height="34"><br><sub>Typefully…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/uber.svg" alt="Uber" height="34"><br><sub>Uber</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/uber-eats.png" alt="Uber Eats" height="34"><br><sub>Uber Eats</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/ubersuggest.png" alt="Ubersuggest" height="34"><br><sub>Ubersuggest</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/udemy-business.svg" alt="Udemy Business" height="34"><br><sub>Udemy Busi…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/unblocked.png" alt="Unblocked" height="34"><br><sub>Unblocked</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/unify.png" alt="Unify" height="34"><br><sub>Unify</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/unstructured-transform.png" alt="Unstructured Transform" height="34"><br><sub>Unstructur…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/unthread.png" alt="Unthread" height="34"><br><sub>Unthread</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/unwrap.png" alt="Unwrap" height="34"><br><sub>Unwrap</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/v0.svg" alt="v0" height="34"><br><sub>v0</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vaisala-xweather.png" alt="Vaisala Xweather" height="34"><br><sub>Vaisala Xw…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/valuecase-app.png" alt="Valuecase App" height="34"><br><sub>Valuecase…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vanguard-advisor-tools.png" alt="Vanguard Advisor Tools" height="34"><br><sub>Vanguard A…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vani-by-zoho.svg" alt="Vani by Zoho" height="34"><br><sub>Vani by Zo…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vanta.png" alt="Vanta" height="34"><br><sub>Vanta</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vasara.png" alt="Vasara" height="34"><br><sub>Vasara</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vercel.svg" alt="Vercel" height="34"><br><sub>Vercel</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/verisk-xactrestore.png" alt="Verisk XactRestore" height="34"><br><sub>Verisk Xac…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vertiso-memory.png" alt="Vertiso Memory" height="34"><br><sub>Vertiso Me…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vianexus-vast.png" alt="viaNexus vAST" height="34"><br><sub>viaNexus v…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vibe-prospecting.png" alt="Vibe Prospecting" height="34"><br><sub>Vibe Prosp…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/viberate-music-data.png" alt="Viberate music data" height="34"><br><sub>Viberate m…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vidiq.png" alt="vidIQ" height="34"><br><sub>vidIQ</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/voluum.png" alt="Voluum" height="34"><br><sub>Voluum</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/vuetify.svg" alt="Vuetify MCP" height="34"><br><sub>Vuetify MCP</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/wealth-com.png" alt="Wealth.com" height="34"><br><sub>Wealth.com</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/wealthbox.svg" alt="Wealthbox" height="34"><br><sub>Wealthbox</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/webex-meetings.png" alt="Webex Meetings" height="34"><br><sub>Webex Meet…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/webflow.svg" alt="Webflow" height="34"><br><sub>Webflow</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/website-generator-by-b12.png" alt="Website Generator by B12" height="34"><br><sub>Website Ge…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/webull.png" alt="Webull" height="34"><br><sub>Webull</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/weweb.svg" alt="WeWeb" height="34"><br><sub>WeWeb</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/whimsical.png" alt="Whimsical" height="34"><br><sub>Whimsical</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/wiley-scholar-gateway.png" alt="Wiley Scholar Gateway" height="34"><br><sub>Wiley Scho…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/windmill-hr.png" alt="Windmill HR" height="34"><br><sub>Windmill HR</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/windsor-ai.png" alt="Windsor.ai" height="34"><br><sub>Windsor.ai</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/wingify.png" alt="Wingify" height="34"><br><sub>Wingify</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/wix.svg" alt="Wix" height="34"><br><sub>Wix</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/wordpress-com.svg" alt="WordPress.com" height="34"><br><sub>WordPress.…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/wrike.png" alt="Wrike" height="34"><br><sub>Wrike</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/wyndham-hotels-and-resorts.png" alt="Wyndham Hotels and Resorts" height="34"><br><sub>Wyndham Ho…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/xero.svg" alt="Xero" height="34"><br><sub>Xero</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/xtiles.png" alt="xTiles" height="34"><br><sub>xTiles</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/yardi-matrix.png" alt="Yardi Matrix" height="34"><br><sub>Yardi Matr…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/yardi-virtuoso.png" alt="Yardi Virtuoso" height="34"><br><sub>Yardi Virt…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/zapier.svg" alt="Zapier" height="34"><br><sub>Zapier</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/zoho-books.svg" alt="Zoho Books" height="34"><br><sub>Zoho Books</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/zoho-crm.svg" alt="Zoho CRM" height="34"><br><sub>Zoho CRM</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/zoho-desk.svg" alt="Zoho Desk" height="34"><br><sub>Zoho Desk</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/zoho-projects.svg" alt="Zoho Projects" height="34"><br><sub>Zoho Proje…</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/zoho-show.svg" alt="Zoho Show" height="34"><br><sub>Zoho Show</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/zoom.svg" alt="Zoom for Claude" height="34"><br><sub>Zoom for C…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/zoominfo.png" alt="ZoomInfo" height="34"><br><sub>ZoomInfo</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/skills/icons-pro-max/assets/connector/cna-taiwan-news.png" alt="中央社新聞 CNA TAIWAN NEWS" height="34"><br><sub>中央社新聞 CNA…</sub></td>
</tr>
</table>
</div>

</details>

Vector marks where the brand has one (matched by official domain, not by name), otherwise the icon the connector directory serves. See [`SOURCES.md`](skills/icons-pro-max/assets/SOURCES.md).

### 🎛️ UI icons — lucide-react (68 in use)

Generic action/status glyphs — the only freely-restylable icons (`currentColor`, sized by class). They come from the [lucide-react](https://lucide.dev) package, so the skill bundles no files for them. The previews below are the official [lucide-static](https://www.npmjs.com/package/lucide-static) SVGs, each tinted with an accent color that hints at its meaning (mid-tone shades that read in light and dark mode); in the web they inherit the text color. Reuse one before importing a new name:

<div align="center">
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/arrow-up-right.svg" alt="ArrowUpRight" height="24"><br><sub>ArrowUpRight</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/arrow-left.svg" alt="ArrowLeft" height="24"><br><sub>ArrowLeft</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/x.svg" alt="X" height="24"><br><sub>X</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/check.svg" alt="Check" height="24"><br><sub>Check</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/check-circle-2.svg" alt="CheckCircle2" height="24"><br><sub>CheckCircle2</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/circle-alert.svg" alt="CircleAlert" height="24"><br><sub>CircleAlert</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/alert-circle.svg" alt="AlertCircle" height="24"><br><sub>AlertCircle</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/copy.svg" alt="Copy" height="24"><br><sub>Copy</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/download.svg" alt="Download" height="24"><br><sub>Download</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/search.svg" alt="Search" height="24"><br><sub>Search</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/send.svg" alt="Send" height="24"><br><sub>Send</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/mail.svg" alt="Mail" height="24"><br><sub>Mail</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/phone.svg" alt="Phone" height="24"><br><sub>Phone</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/map-pin.svg" alt="MapPin" height="24"><br><sub>MapPin</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/calendar.svg" alt="Calendar" height="24"><br><sub>Calendar</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/clock.svg" alt="Clock" height="24"><br><sub>Clock</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/bell.svg" alt="Bell" height="24"><br><sub>Bell</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/shopping-cart.svg" alt="ShoppingCart" height="24"><br><sub>ShoppingCart</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/shopping-bag.svg" alt="ShoppingBag" height="24"><br><sub>ShoppingBag</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/store.svg" alt="Store" height="24"><br><sub>Store</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/credit-card.svg" alt="CreditCard" height="24"><br><sub>CreditCard</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/wallet.svg" alt="Wallet" height="24"><br><sub>Wallet</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/truck.svg" alt="Truck" height="24"><br><sub>Truck</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/gift.svg" alt="Gift" height="24"><br><sub>Gift</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/heart.svg" alt="Heart" height="24"><br><sub>Heart</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/coffee.svg" alt="Coffee" height="24"><br><sub>Coffee</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/star.svg" alt="Star" height="24"><br><sub>Star</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/sparkles.svg" alt="Sparkles" height="24"><br><sub>Sparkles</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/eye.svg" alt="Eye" height="24"><br><sub>Eye</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/lock.svg" alt="Lock" height="24"><br><sub>Lock</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/shield-check.svg" alt="ShieldCheck" height="24"><br><sub>ShieldCheck</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/shield.svg" alt="Shield" height="24"><br><sub>Shield</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/rotate-ccw.svg" alt="RotateCcw" height="24"><br><sub>RotateCcw</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/home.svg" alt="Home" height="24"><br><sub>Home</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/user.svg" alt="User" height="24"><br><sub>User</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/users.svg" alt="Users" height="24"><br><sub>Users</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/puzzle.svg" alt="Puzzle" height="24"><br><sub>Puzzle</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/languages.svg" alt="Languages" height="24"><br><sub>Languages</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/file-text.svg" alt="FileText" height="24"><br><sub>FileText</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/book-open.svg" alt="BookOpen" height="24"><br><sub>BookOpen</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/bookmark.svg" alt="Bookmark" height="24"><br><sub>Bookmark</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/pen-line.svg" alt="PenLine" height="24"><br><sub>PenLine</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/printer.svg" alt="Printer" height="24"><br><sub>Printer</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/message-circle.svg" alt="MessageCircle" height="24"><br><sub>MessageCirc…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/message-square.svg" alt="MessageSquare" height="24"><br><sub>MessageSqua…</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/code-2.svg" alt="Code2" height="24"><br><sub>Code2</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/terminal.svg" alt="Terminal" height="24"><br><sub>Terminal</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/cpu.svg" alt="Cpu" height="24"><br><sub>Cpu</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/laptop.svg" alt="Laptop" height="24"><br><sub>Laptop</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/smartphone.svg" alt="Smartphone" height="24"><br><sub>Smartphone</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/layers.svg" alt="Layers" height="24"><br><sub>Layers</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/layout.svg" alt="Layout" height="24"><br><sub>Layout</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/layout-grid.svg" alt="LayoutGrid" height="24"><br><sub>LayoutGrid</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/paintbrush.svg" alt="Paintbrush" height="24"><br><sub>Paintbrush</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/zap.svg" alt="Zap" height="24"><br><sub>Zap</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/bar-chart-2.svg" alt="BarChart2" height="24"><br><sub>BarChart2</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/trash-2.svg" alt="Trash2" height="24"><br><sub>Trash2</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/chevron-right.svg" alt="ChevronRight" height="24"><br><sub>ChevronRight</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/loader-2.svg" alt="Loader2" height="24"><br><sub>Loader2</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/building-2.svg" alt="Building2" height="24"><br><sub>Building2</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/lightbulb.svg" alt="Lightbulb" height="24"><br><sub>Lightbulb</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/bot.svg" alt="Bot" height="24"><br><sub>Bot</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/telescope.svg" alt="Telescope" height="24"><br><sub>Telescope</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/leaf.svg" alt="Leaf" height="24"><br><sub>Leaf</sub></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/wrench.svg" alt="Wrench" height="24"><br><sub>Wrench</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/flask-conical.svg" alt="FlaskConical" height="24"><br><sub>FlaskConical</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/git-branch.svg" alt="GitBranch" height="24"><br><sub>GitBranch</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/buidangminh23/icons-pro-max/main/docs/lucide/scale.svg" alt="Scale" height="24"><br><sub>Scale</sub></td>
</tr>
</table>
</div>

<sub>Preview files live in [`docs/lucide/`](docs/lucide/) (ISC license, © Lucide Icons and Contributors) and are not part of the skill or the npm package.</sub>

---

## What's inside the skill

[`SKILL.md`](skills/icons-pro-max/SKILL.md) — 11 sections:

- **§0 Pick the right group** — brand → its exact logo; concept → a lucide glyph.
- **§1 Payment** — the badge wrapper, per-logo heights, aspect-ratio rules, extra bundled marks.
- **§2 QR** — the dynamic VietQR `qrUrl()` recipe.
- **§3 Social & app** — `currentColor` vs brand-color marks, single-source rule, 22 bundled-only marks.
- **§4 UI (lucide)** — usage, the full in-use icon set, a11y.
- **§5 Tech logos** — 144 official brand-colored SVGs, no recoloring.
- **§6 Download badges** — 8 badges, Vietnamese and English.
- **§7 AI providers** — 86 full-color marks, provider vs product rules.
- **§8 Claude connectors** — 516 icons and the domain-verified selection order.
- **§9 Anti-slop checklist** — 10 tells (re-drawn logo, look-alike stand-in, recolored mark, distorted ratio, wrong-meaning glyph, re-inlined duplicate…) each with the fix.
- **§10 Add-an-icon procedure** — classify → drop asset → record its source → wire render → update catalog → a11y → verify.

All bundled marks are mirrored, self-contained, under
[`skills/icons-pro-max/assets/`](skills/icons-pro-max/assets/) so the catalog works
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
