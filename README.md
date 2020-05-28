[![NPM](https://img.shields.io/npm/v/@faceless-ui/css-grid)](https://www.npmjs.com/@faceless-ui/css-grid)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@faceless-ui/css-grid?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React CSS Grid

Highlights

## Quick Start

### Installation

```bash
$ npm i @faceless-ui/css-grid
$ # or
$ yarn add @faceless-ui/css-grid
```

### Composition

```jsx
  import React from 'react';
  import { GridProvider, Grid, Cell } from '@faceless-ui/css-grid';

  const App = () => (
    <GridProvider
      hCount={12}
      hGap="columnWidth"
      vGap="10px"
      breakpoints={{
        xs: 350,
        s: 576,
        m: 768,
        l: 992,
        xl: 1200,
      }}
    >
      <Grid>
        <Cell hSpan={6}>
          ...
        </Cell>
        <Cell
          hSpan={10}
          hStart={2}
          hSpanL={12}
          hStartL={1}
          hSpanS={6}
        >
          <Grid>
            <Cell
              hSpan={5}
              hSpanL={6}
            >
              ...
            </Cell>
            <Cell
              hSpan={5}
              hSpanL={6}
            >
              ...
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </GridProvider>
  )
```

For working examples, see the [demo app](./demo/App.demo.js).

## Demo

```bash
$ git clone git@github.com:faceless-ui/css-grid.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## API

  - [Cell](./src/Cell/README.md)
  - [Grid](./src/Grid/README.md)
  - [Grid Provider](./src/GridProvider/README.md)

## Contribution

[Help us,](https://github.com/faceless-ui/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/faceless-ui/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/faceless-ui/css-grid/blob/master/LICENSE) Copyright (c) TRBL, LLC
