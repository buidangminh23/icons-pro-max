# Contributing

## Validation

Use Node.js 22 or 24 and Git. No runtime dependencies, account login, or API
credentials are required to validate the catalog.

```bash
npm ci
npm test
npm run check
```

CI runs these checks and builds both archives on Linux, macOS, and Windows with
both Node versions. Keep plugin paths, bundled assets, and catalog references
consistent. Write code, contributor documentation, and release notes in English.
Do not commit credentials or machine-specific paths.

## Release rules

This project follows the release rules used by
[codex-mcp-bridge](https://github.com/buidangminh23/codex-mcp-bridge/blob/main/CONTRIBUTING.md):
SemVer, synchronized versions, tested release commits, version-matched tags, and
GitHub Releases populated from curated changelog entries. This is a skill/plugin
bundle; `package.json` is private and provides development commands only.
Distribution uses GitHub archives rather than npm publishing.

1. Choose a patch version for fixes, minor for compatible additions, or major
   for breaking changes. Describe breaking changes and migration steps explicitly.
2. Add one dated `## [X.Y.Z] - YYYY-MM-DD` entry to `CHANGELOG.md` using Keep a
   Changelog categories. Explain user-visible behavior; do not substitute commit lists.
3. Run `npm version X.Y.Z --no-git-tag-version`. The version hook synchronizes
   Claude, Codex, Gemini, and Claude marketplace versions. The agents marketplace
   has no version field. Missing changelog entries block the hook.
4. Run the validation commands above. Review `git diff --check` and the diff;
   stage only intended files, commit, push, and merge through a pull request.
5. From a clean, updated `main`, run `npm run release:build`. Inspect the ZIP and
   TAR.GZ content. Both contain one versioned root with all installation manifests
   (including hidden directories), the skill, its assets, and user documentation.
6. Tag the verified commit and push the tag:

   ```bash
   git tag -a vX.Y.Z -m "Release vX.Y.Z"
   git push origin vX.Y.Z
   ```

The Publish workflow reruns the full six-job matrix, refuses tag/version drift
and commits outside `main`, builds from committed files, and creates a draft.
It uploads ZIP, TAR.GZ and `SHA256SUMS`, downloads them to verify their hashes,
then publishes. A tag alone is not a completed release: verify the workflow,
release notes, public downloads, and checksums before reporting success.
Only the release job has repository write permission; no long-lived token is needed.

Never move a published tag or overwrite public release assets. Reruns verify an
existing public release and fail if checksums differ. An interrupted draft can
be completed by rerunning its workflow. To dispatch manually, select the existing
release tag; dispatching a branch validates only and does not publish.
For a mistake in a published release, prepare a new patch release.

Generate the exact release notes locally with `npm run release:notes`.
Download and verify a release on Linux/macOS:

```bash
gh release download vX.Y.Z --repo buidangminh23/icons-pro-max --dir release-download
cd release-download
shasum -a 256 -c SHA256SUMS
```

On Windows PowerShell:

```powershell
gh release download vX.Y.Z --repo buidangminh23/icons-pro-max --dir release-download
Set-Location release-download
Get-Content SHA256SUMS | ForEach-Object {
  $expected, $file = $_ -split '  ', 2
  if ((Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash.ToLowerInvariant() -ne $expected) {
    throw "Checksum mismatch: $file"
  }
}
```
