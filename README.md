# React CSS Grid ![Beta](https://img.shields.io/badge/release-alpha-ff4553)

## Abstract

This project leverages React's Context API with the CSS Grid Layout specification in a way that allows for a pleasingly simple-to-use horizontal grid system, complete with breakpoints and nested-grid support.

## Component Composition

```jsx
  <GridProvider
    hGap="columnWidth"
    vGap="10px"
    breakpoints={{
      xs: 350,
      s: 576,
      m: 768,
      l: 992,
      xl: 1200,
    }}
    classPrefix="demo"
    scopeCSSTo="#grid-demo"
  >
    <div id="grid-demo">
      <Grid>
        <Cell
          hStart={2}
          hSpan={4}
          hStartL={1}
          hSpanS={6}
        >
          <Grid>
            <Cell
              hSpan={2}
              hSpanS={3}
            >
              ...
            </Cell>
            <Cell
              hSpan={2}
              hSpanS={3}
            >
              ...
            </Cell>
          </Grid>
        </Cell>
        <Cell
          hSpan={8}
          hSpanL={9}
          hSpanS={8}
        >
          ...
        </Cell>
      </Grid>
    </div>
  </GridProvider>
```

## Component Documentation

The source components in their raw form are found in the `src` directory. These are all batch exported from the top-level `index.js` so that they can be easily accessed via import.

  - [Grid ](/src/Grid/README.md)
  - [Cell](/src/Cell/README.md)
  - [Grid Provider](/src/GridProvider/README.md)

## Environment

### Distribution

The entrypoint for the production bundle is `/dist/build.bundle.js`, as defined in `package.json`. Importing this project will return that bundle.

### Compilation and Transpilation

Generating this production bundle is defined in `webpack.production.config.js`, one of two custom webpack configurations defined at the top of this repo. It simply processes all of the `.js` files within the `src` directory through the `babel-loader` transpiler and into the `dist` directory.

  - tldr: `npm run build`

### Development

The other webpack configuration is `webpack.development.config.js` which does a few things differently -- compilation happens from the `demo` directory as opposed to the `src` directory directly. It then will spin up `webpack-dev-server`, which serves a compiled and transpiled build _in memory_, with hot-reloading enabled.

  - tldr: `npm run dev`
