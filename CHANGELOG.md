# Changelog

All notable changes to Icons Pro Max are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/); versioning is
[SemVer](https://semver.org/).

## [Unreleased]

### Changed
- `assets/tech/docker.svg` is now the current Docker mark (ocean blue `#2560FF`) from the official Docker logo pack, replacing the older devicon drawing.
- README: the "More payment marks" gallery gives every image an explicit width, so GitHub no longer shrinks Grab, JCB, and Zalo to fit their short captions. Heights are balanced optically (square marks taller, long wordmarks shorter) and captions share one baseline.
- README: the 68 lucide previews in `docs/lucide/` are tinted with an accent color that hints at their meaning instead of a single neutral gray.

## [2.2.1] - 2026-09-29

### Fixed
- README galleries now fit the GitHub content width: eight columns and short labels, so logos on the right are no longer cut off and long names no longer wrap.

### Added
- The README's UI icons section previews all 68 lucide glyphs in use, drawn from the official lucide-static SVGs in a neutral gray that reads in light and dark mode. The preview files live in `docs/lucide/` and are not part of the skill or the npm package.

## [2.2.0] - 2026-09-29

### Added
- **AI providers** (`assets/ai/`, SKILL.md §7): 86 full-color marks for model providers, labs, clouds, and AI tools (OpenAI, Anthropic, Claude, Gemini, Meta, Mistral, DeepSeek, Qwen, xAI, Perplexity, Hugging Face, Ollama, Midjourney, Cursor, and more) from LobeHub Icons.
- **Claude connectors** (`assets/connector/`, SKILL.md §8): 516 icons for the services in the Claude connector directory, including Google Drive, Gmail, Google Calendar, Canva, Microsoft 365, Notion, Figma, and Slack. Vector marks are used when the brand's official domain matches; otherwise the icon the directory serves. Six connectors with no usable icon are listed in `SOURCES.md`.
- 94 more tech-stack logos (languages, frameworks, runtimes, databases, cloud, editors, data/ML libraries, operating systems, browsers) — 144 in total.
- 22 more social/app marks (X, Instagram, TikTok, YouTube, Discord, WhatsApp, Messenger, Reddit, Threads, and more) and 8 more payment marks (PayPal, Stripe, Apple Pay, Google Pay, American Express, JCB, Shopee, Grab).
- English macOS and Windows download badges (`macos-en.svg`, `windows-en.svg`, "Download for …").
- `assets/SOURCES.md` records the origin of every bundled file.
- Anti-slop tell #10: look-alike stand-ins built from a brand color and a generic shape.

### Fixed
- Replaced 18 tech logos that were look-alike drawings with the official marks: Claude, Gemini, Docker, Express, Flask, GitHub Actions, Langflow, Node.js, Playwright, PWA, Pydantic, SQLAlchemy, Telethon, Uvicorn, Vite, Vue, Windows (Windows 11), and Canvas (Canvas LMS).
- Zalo social and payment marks are now the official Zalo logo instead of text typed in a box; Facebook and GitHub use the current brand paths; social marks now sit on a padded tile.

### Changed
- SKILL.md sections renumbered: Anti-slop is now §9 and Add-an-icon §10.

## [2.1.1] - 2026-09-17

### Added
- Publish the complete skill bundle as `@minhspark/icons-pro-max` on npm, with explicit package contents and public installation instructions.
- Verify npm package contents and publish through GitHub Actions trusted publishing before creating the GitHub release.

## [2.1.0] - 2026-09-16

### Added
- Vendor-published Vietnamese App Store and Google Play badges, alongside the
  existing English variants.
- Versioned ZIP and TAR.GZ release packages containing the complete icon catalog,
  bundled assets, plugin manifests, README, changelog, and license, with SHA-256 checksums.
- Automated GitHub Releases from curated changelog entries after validation on
  Windows, macOS, and Linux with Node.js 22 and 24.
- Contributor release rules, synchronized manifest versions, tag checks, and
  regression tests for the release gates.

### Changed
- Windows and macOS download badges now use Vietnamese labels.
- Release publication verifies uploaded packages before making a draft public;
  reruns verify existing published packages without replacing them.

## [2.0.0] - 2026-07-15

### Changed
- **BREAKING:** renamed the skill, plugin, and marketplace from `icon-pro-max`
  to `icons-pro-max`; the GitHub repository and the skill directory
  (`skills/icon-pro-max/` → `skills/icons-pro-max/`) moved with it.
  Migration for existing installs:
  - Claude Code: `/plugin uninstall icon-pro-max@icon-pro-max`, then
    `/plugin marketplace add buidangminh23/icons-pro-max` and
    `/plugin install icons-pro-max@icons-pro-max`.
  - skills CLI: `npx skills remove icon-pro-max`, then
    `npx skills add buidangminh23/icons-pro-max`.
  - Git submodules: the old clone URL still resolves via GitHub's redirect,
    but update the URL and vendored path to `icons-pro-max`.
  - Update any prompts or agent configs that reference the old skill name.

## [1.1.0] - 2026-07-14

### Added
- **Download & store badges** — App Store, Google Play, macOS (custom Finder icon), and Windows (custom Windows 11 icon) badges.
- Visual gallery showcase in `README.md` and catalog entries in `SKILL.md`.

## [1.0.0] - 2026-07-07

### Added
- Initial release: complete icon catalog for the Personal Web.
- **Payment methods** — VietQR, VNPAY, ZaloPay, MoMo, Visa, Mastercard with the
  shared badge wrapper and per-logo canonical heights.
- **QR codes** — the dynamic VietQR `qrUrl()` recipe.
- **Social & app brand icons** — GitHub, LinkedIn, Facebook, Telegram
  (`currentColor`), plus Zalo and Gmail (brand-colored), all sourced from
  `src/SocialIcons.tsx`.
- **UI icons** — the full in-use lucide-react set as a reuse reference.
- **Tech-stack logos** — 50 brand-colored SVGs.
- Self-contained asset mirror under `skills/icon-pro-max/assets/` (directory
  renamed to `skills/icons-pro-max/assets/` in 2.0.0).
- Anti-slop checklist and an add-an-icon procedure.
- Multi-platform packaging: Claude Code plugin + marketplace, Codex plugin,
  agents marketplace, Gemini extension.
