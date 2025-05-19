# Javascript subprojects

This folder contains all subprojects written in Javascript.

As this folder is an [NPM workspace][npm-workspace], you can run commands to build and test projects directly:

```console
npm run lint
npm run build
npm run test
```

[npm-workspace]: https://docs.npmjs.com/cli/v10/using-npm/workspaces

## Managing dependencies

Dependencies can be installed to the workspace:

```console
npm install --include-workspace-root <depedency package>
npm install -D --include-workspace-root <dev-depedency package>
```

By default, sub packges will be able to make use of the dependencies via NPMs lookup strategy.
