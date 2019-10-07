# React CSS Grid

## Source Code

### Abstract

This project leverages React's Context API as well as the newly instituted CSS Grid Layout specification in a way that allows for an elegantly abstracted horizontal column system, complete with nested-column support.

### Component Composition

```javascript
  <GridProvider numberOfColumns={14} gutterSize={'10px' || 'columnWidth'}>
    <Row>
      <Column span={4}>
        <Row>
          <Column span={2} />
          <Column span={2} />
        </Row>
      </Column>
      <Column span={10} />
    </Row>
  </GridProvider>
```

### Component Documentation

The source components in their raw form are found in the `src` directory. These are all batch exported from the top-level `index.js` so that they can be easily accessed via import.

[Grid Row](/src/Row/README.md)
[Grid Column](/src/Column/README.md)
[Grid Provider](/src/GridProvider/README.md)

## Environment

### Distribution

The entrypoint for the production bundle is `/dist/build.bundle.js`, as defined in `package.json`. Importing this project will return that bundle.

### Compilation and Transpilation

Generating this production bundle is defined in `webpack.production.config.js`, one of two custom webpack configurations defined at the top of this repo. It simply processes all of the `.js` files within the `src` directory through the `babel-loader` transpiler and into the `dist` directory.

  - tldr: `npm run build`.

### Development

The other webpack configuration is `webpack.development.config.js` which does a few things differently -- compilation happens from the `demo` directory as opposed to the `src` directory. It then will spin up `webpack-dev-server`, which serves a compiled and transpiled build _in memory_, with hot-reloading enabled.

  - tldr: `npm run dev`.
