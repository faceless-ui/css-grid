[![NPM](https://img.shields.io/npm/v/@trbl/react-css-grid)](https://www.npmjs.com/@trbl/react-css-grid)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-css-grid?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React CSS Grid

A grid for React projects, based on [CSS Grid Layout](https://www.w3.org/TR/css-grid-1/).

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-css-grid
```

### Composition

```jsx
  import React from 'react';
  import { GridProvider, Grid, Cell } from '@trbl/react-css-grid';

  const App = () => {
    return (
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
  }
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [Cell](./src/Cell/README.md)
  - [Grid](./src/Grid/README.md)
  - [Grid Provider](./src/GridProvider/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-css-grid/blob/master/LICENSE) Copyright (c) TRBL, LLC
