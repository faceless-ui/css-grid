import React from 'react';
import { Grid, Cell, GridProvider } from '../src';

const GridDemo1 = () => {
  return (
    <div id="grid-demo-1">
      <p><b>14 column grid demo</b></p>
      <p>To demonstrate a straightforward grid with nesting</p>
      <hr />
      <pre>
        <code>
          hCount: 14
          <br />
          hGap: 10px
          <br />
          vGap: 10px
          <br />
          {'breakpoints: {'}
          <br />
          &emsp;s: 576
          <br />
          &emsp;m: 768
          <br />
          &emsp;l: 992
          <br />
          &emsp;xl: 1200
          <br />
          {'}'}
          <br />
          scopeCSSTo: #grid-demo-1
        </code>
      </pre>
      <GridProvider
        hCount={14}
        hGap="10px"
        vGap="10px"
        breakpoints={{
          xs: 350,
          s: 576,
          m: 768,
          l: 992,
          xl: 1200,
        }}
        scopeCSSTo="#grid-demo-1"
      >
        <div style={{ marginBottom: '10px', border: '1px solid' }}>
          <Grid
            className="custom-grid-class"
            id="custom-grid-id"
          >
            <Cell
              hSpan={4}
              style={{ backgroundColor: 'aqua' }}
              className="custom-cell-class"
              id="custom-cell-id"
            >
              <Grid>
                <Cell
                  hSpan={2}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>Nested hSpan 2</p>
                </Cell>
                <Cell
                  hSpan={2}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>Nested hSpan 2</p>
                </Cell>
              </Grid>
            </Cell>
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'aqua' }}
            >
              <p>hSpan 10</p>
            </Cell>
          </Grid>
        </div>

        <div style={{ border: '1px solid' }}>
          <Grid>
            <Cell
              hSpan={8}
              style={{ backgroundColor: 'aqua' }}
            >
              <Grid>
                <Cell
                  hSpan={4}
                  hStart={4}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>Start on horizontal line 5</p>
                </Cell>
              </Grid>
            </Cell>
            <Cell
              hSpan={6}
              htmlElement="section"
              style={{ backgroundColor: 'aqua' }}
            >
              <p>hSpan 6 as Section</p>
            </Cell>
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'aqua' }}
            >
              <p>Implicit column to show row gap</p>
            </Cell>
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'aqua' }}
            >
              <p>Start on vertical line 1</p>
            </Cell>
          </Grid>
        </div>
      </GridProvider>
    </div>
  );
};

export default GridDemo1;
