# Repository instructions

Read `CONTRIBUTING.md` before changing or releasing this project. Its Release
rules section is the canonical release policy for all contributors and agents.

- Keep versions synchronized through the `npm version` hook; use SemVer.
- Write a dated changelog entry before bumping the version.
- Run `npm ci`, `npm test`, and `npm run check` before committing.
- Review the diff and preserve unrelated changes. Use a pull request and wait for
  all six CI jobs before tagging the merged release commit on `main`.
- Build ZIP and TAR.GZ packages from a clean committed checkout. Include hidden
  plugin manifests and all bundled assets, and publish SHA-256 checksums.
- Let the Publish workflow create release notes from the changelog and verify
  downloads before publishing. Never move published tags or replace public assets.
- Verify the public GitHub release and workflow completion before reporting a
  release as shipped. A local commit, pushed tag, or draft is not publication.
- Publish `@minhspark/icons-pro-max` publicly on npm after validation, before the
  GitHub release. Verify package contents and registry version; use trusted publishing.
- Keep code and contributor documentation in English and free of private paths
  or dependencies on personal instructions outside this repository.
