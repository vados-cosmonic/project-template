# 📦 Project Templates

This repository serves as a template for creating projects with a few features as standard:

- [Monorepo][monorepo]-centric workflow (language dependent)
  - Support for umbrella projects (multi-lang monorepo)
- Automated release tagging and publishing via [GitHub Actions][gha]
  - If usable PATs are not available, the flows also work manually, except for final package publish(e.g. NPM, crates.io, etc)
- Automated testing
- [Dependabot][dependabot] configuration
- [mdbook][mdbook] based documentation, hosted by [GitHub Pages][gh-pages]
- [`git-cliff`][git-cliff] for fully customizable release notes generation and templating

[gha]: https://docs.github.com/actions
[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[dependabot]: https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide
[mdbook]: https://github.com/rust-lang/mdBook
[gh-pages]: https://pages.github.com/
[git-cliff]: https://github.com/orhun/git-cliff

## How to use this template

1. Clone/copy this repository's contents
2. Remove language folders that your project *does not* use.
3. Customize [GitHub Actions workflows](./.github/workflows)
  - (optional) Set up any required external accounts to enable release CI
  - You may need to add repo-scoped secrets (e.g. `RELEASE_PAT`)
4. Find and replace/resolve any `TODO`s in this repository

For more information on automated CI, see [`docs/meta/releases.md`](./docs/meta/releases.md).

## Supported languages

Currently the following languages are explicitly supported by this template

- [Rust][rust] (see [`rust`](./rust))
- [NodeJS][nodejs] (see [`js`](./js))

While languages not listed above may work reasonably well, most scripts are tailored towards one of the languages above,
and thus need to be either removed or modified.

[rust]: https://rust-lang.org
[nodejs]: https://nodejs.org
