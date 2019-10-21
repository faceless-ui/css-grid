import React from 'react';
import { Grid, Cell, GridProvider } from '../src';

const GridExample1 = () => {
  return (
    <div
      id="grid-example-1"
      style={{ border: '1px solid', padding: '10px', marginBottom: '10px' }}
    >
      <p><b>14 column grid example</b></p>
      <p>To demonstrate a straightforward grid with nesting</p>
      <hr />
      <p>props:</p>
      <code>
        <p>s: 576</p>
        <p>m: 768</p>
        <p>l: 992</p>
        <p>xl: 1200</p>
        <p>hGap: 10px</p>
        <p>vGap: 10px</p>
        <p>scopeCSSTo: &ldquo;#grid-14-col-example&rdquo;</p>
      </code>
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
        scopeCSSTo="#grid-example-1"
      >
        <div style={{ marginBottom: '10px', border: '1px solid' }}>
          <Grid className="custom-grid-class">
            <Cell
              hSpan={4}
              style={{ backgroundColor: 'lightpink' }}
              className="custom-cell-class"
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
              style={{ backgroundColor: 'lightpink' }}
            >
              <p>hSpan 10</p>
            </Cell>
          </Grid>
        </div>

        <div style={{ border: '1px solid' }}>
          <Grid>
            <Cell
              hSpan={8}
              style={{ backgroundColor: 'lightpink' }}
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
              style={{ backgroundColor: 'lightpink' }}
            >
              <p>hSpan 6 as Section</p>
            </Cell>
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'lightpink' }}
            >
              <p>Implicit column to show row gap</p>
            </Cell>
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'lightpink' }}
            >
              <p>Start on vertical line 1</p>
            </Cell>
          </Grid>
        </div>
      </GridProvider>
    </div>
  );
};

export default GridExample1;
