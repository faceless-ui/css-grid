[![NPM](https://img.shields.io/npm/v/@trbl/react-css-grid)](https://www.npmjs.com/@trbl/react-css-grid)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React CSS Grid

A fully-featured React grid system based on [CSS Grid Layout](https://www.w3.org/TR/css-grid-1/).

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-css-grid
```

### Compositon

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
$ yarn install
$ npm run dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [Grid](/src/Grid/README.md)
  - [Cell](/src/Cell/README.md)
  - [Grid Provider](/src/GridProvider/README.md)

## License

[MIT](https://github.com/trbldesign/react-css-grid/blob/master/LICENSE) Copyright (c) TRBL, LLC
