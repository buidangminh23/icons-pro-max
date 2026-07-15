# Changelog

All notable changes to Icons Pro Max are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/); versioning is
[SemVer](https://semver.org/).

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
