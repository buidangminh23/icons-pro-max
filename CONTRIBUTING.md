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
GitHub Releases populated from curated changelog entries. This skill/plugin bundle is published publicly as `@minhspark/icons-pro-max`
on npm and as GitHub release archives. The npm files allowlist must include
plugin manifests, the skill, all assets, and license while excluding tests and
development scripts. Installing the package downloads files; it does not register
the skill with an agent.

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
After validation, the npm job verifies the tag and publishes the package through
OIDC trusted publishing (Node.js 24), skipping an already published version.
Configure the npm trusted publisher for this repository, GitHub Actions, and
`publish.yml` after the initial authenticated bootstrap publish. Never store npm
tokens in the repository. The GitHub release waits for npm publication.
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

## GitHub Packages mirror

The GitHub Packages workflow publishes each version tag to npm.pkg.github.com
using the repository's short-lived GITHUB_TOKEN with packages:write. It validates
the tagged source before changing only the registry scope in the runner checkout
from @minhspark to @buidangminh23. The repository metadata links the package to this
repository. No npmjs.com package or existing release asset is changed.

For an existing release, manually run github-packages.yml from main with its tag.
The workflow rejects tags outside main, checks version consistency, skips an
already published version, and verifies registry metadata and package download.
After the first publication, check the package visibility and repository link in
GitHub package settings. GitHub defaults new packages to private.