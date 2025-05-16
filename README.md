# Project Template

This repository serves as a template for creating projects with a few features as standard:

- [Monorepo][monorepo]-centric workflow (language dependent)
  - Support for umbrella projects (multi-lang monorepo)
- Automated release tagging and publishing via [GitHub Actions][gha]
  - If usable PATs are not available, the flows also work manually, except for final package publish(e.g. NPM, crates.io, etc)
- Automated testing
- [Dependabot][dependabot] configuration
- [mdbook][mdbook] based documentation, hosted by [GitHub Pages][gh-pages]

[gha]: https://docs.github.com/actions
[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[dependabot]: https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide
[mdbook]: https://github.com/rust-lang/mdBook
[gh-pages]: https://pages.github.com/

## How to use this template

1. Clone/copy this repository's contents
2. Remove language folders that your project *does not* use.
3. Customize [GitHub Actions workflows](./.github/workflows)
4. (optional) Set up any required external accounts to enable release CI

For more information on automated CI, see `docs/meta/automated-releases.md`.

## Supported languages

Currently the following languages are explicitly supported by this template

- [Rust][rust]
- [NodeJS][nodejs]

While languages not listed above may work reasonably well, most scripts are tailored towards one of the languages above,
and thus need to be either removed or modified.

[rust]: https://rust-lang.org
[nodejs]: https://nodejs.org
