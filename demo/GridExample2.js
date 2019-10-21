import React from 'react';
import { Grid, Cell, GridProvider } from '../src';

const GridExample1 = () => {
  return (
    <div
      id="grid-example-2"
      style={{ border: '1px solid', padding: '10px', marginBottom: '10px' }}
    >
      <p><b>12 column grid with gutter equal to the column width:</b></p>
      <p>To demonstrate a nested grid that behaves differently across screen sizes</p>
      <hr />
      <p>props:</p>
      <code>
        <p>s: 576</p>
        <p>m: 768</p>
        <p>l: 992</p>
        <p>xl: 1200</p>
        <p>hGap: columnWidth</p>
        <p>vGap: 10px</p>
        <p>scopeCSSTo: &ldquo;#grid-12-col-example&rdquo;</p>
      </code>
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
        minifyCSS={false}
        scopeCSSTo="#grid-example-2"
      >
        <div style={{ border: '1px solid', marginBottom: '10px' }}>
          <Grid>
            <Cell
              hSpan={6}
              hSpanL={5}
              hSpanM={4}
              hSpanS={3}
              hSpanXS={2}
              style={{ backgroundColor: 'lightblue' }}
            >
              <p>hSpan: 6</p>
              <p>hSpanL: 5</p>
              <p>hSpanM: 4</p>
              <p>hSpanS: 3</p>
              <p>hSpanXS: 2</p>
            </Cell>
            <Cell
              hSpan={6}
              hSpanL={5}
              hSpanM={4}
              hSpanS={3}
              hSpanXS={2}
              style={{ backgroundColor: 'lightblue' }}
            >
              <p>hSpan: 6</p>
              <p>hSpanL: 5</p>
              <p>hSpanM: 4</p>
              <p>hSpanS: 3</p>
              <p>hSpanXS: 2</p>
            </Cell>
          </Grid>
        </div>
        <div style={{ border: '1px solid', marginBottom: '10px' }}>
          <Grid>
            <Cell
              hSpan={2}
              hSpanM={3}
              hStart={2}
              hStartS={11}
              style={{ backgroundColor: 'lightblue' }}
            >
              <p>hSpan: 2</p>
              <p>hSpanM: 3</p>
              <p>hStart: 2</p>
              <p>hStartS: 11</p>
            </Cell>
            <Cell
              hSpan={2}
              hSpanL={3}
              hStart={6}
              hStartM={7}
              style={{ backgroundColor: 'lightblue' }}
            >
              <Grid>
                <Cell
                  hSpan={2}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <Grid>
                    <Cell
                      hSpan={1}
                      style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                    >
                      <p>test</p>
                    </Cell>
                  </Grid>
                </Cell>
              </Grid>
            </Cell>
          </Grid>
        </div>
        <div style={{ border: '1px solid' }}>
          <Grid>
            <Cell
              hSpan={12}
              style={{ backgroundColor: 'lightblue' }}
            >
              <p>first in DOM</p>
            </Cell>
            <Cell
              hSpan={12}
              style={{ backgroundColor: 'lightblue' }}
            >
              <p>second in DOM</p>
            </Cell>
            <Cell
              hSpan={12}
              style={{ backgroundColor: 'lightblue' }}
            >
              <p>third in DOM</p>
            </Cell>
          </Grid>
        </div>

      </GridProvider>
    </div>
  );
};

export default GridExample1;
