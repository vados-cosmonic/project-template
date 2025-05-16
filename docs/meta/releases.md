# Releases

This document explains how releases work for this repository, along with setup instructions for fully automated releases.

## Context

The releases for this project are built to work on Github Actions (or platforms that mimic the Github Actions API).

While releases are primarily meant to be automated, they can be performed manually.

**For releases to work well, you should [disable merge commits][gh-disable-merge-commits], and rely only on squash or fast forward commits**

[gh-disable-merge-commits]: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github

## Performing a release

To perform an automated release:

1. Run the `create-release-pr` action
   - Select the project that you'd like to release
   - Input the version that you'd like to release (detection is performed for pre-release versions like `*-rc.0`)
2. Review the release PR that is created for issues
3. Merge the release PR

At this point, if you have appropriately configured fully automated releases, you are finished with the release, and the
release will be built, attested, published to the relevant external repository (e.g. NPM, crates.io) and a GitHub release
will be created.

### Manual release flow

In a manual release process, after merging the release PR, a commit will be added to the primary branch (e.g. `main`) that looks
somewhat like the following:

```
release: <project name> vX.X.X
```

While this commit has been made, it does not actually indicate a release has actually occurred -- it serves mostly as a demarcation
point for the codebase.

To complete the release:

1. Run the `tag-release` workflow
   - Select the appropriate project
   - Input the appropriate SHA hash (e.g. the SHA of the release commit created by the `create-release-pr` flow)
   - Input the version tag that should go with that SHA
2. Check and ensure the release commit was appropriately tagged
3. Run the `release` workflow
   - Select the appropriate project
   - Input the appropriate ref that should be released
   - Input teh version tag for the given release

Since there are many variations of *how* one could use this flow, most individual steps are not prescriptive on where
to find the code that should be released (i.e. this enables releasing a completely different branch, etc).

## Set up completely automated releases

To make use of completely automated releases, we'll need to enable workflows that complete to *trigger other workflows*. This can currently
only be done with a Personal Authentication Token ("PAT"). The [builtin `github.token`/`GITHUB_TOKEN` cannot do this, by design][builtin-token-no-trigger].

Due to GitHub's limitations on the built-in token, there are two options:

1. Bot account (with 2FA enabled)
2. GitHub App (must be registered by the repository owner)

Given those two options, the easiest to implement for most maintainers (who are not org owners) is the bot account.

1. Create a bot account for use with the project in question
   - Make sure to use secure password generation and credential management
   - Commit the account credentials to the organization where necessary.
2. Add the bot account to the project in question, as a maintainer (*not* an owner)
3. Create a "classic" PAT for the bot account that has `repo` and `write:packages` access
   - Creating per-project bot accounts is a good way to limit the blast radius of this PAT, in case of a CI secret breach
4. Copy the PAT from step (3) to the **secrets** section under the project's action configuration, named `RELEASE_PAT`


[builtin-token-no-trigger]: https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/triggering-a-workflow#triggering-a-workflow-from-a-workflow
