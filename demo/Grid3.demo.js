import React from 'react';
import { Grid, Cell, GridProvider } from '../src';

const GridDemo3 = () => {
  return (
    <div id="grid-demo-3">
      <p><b>14 column grid grid with custom class name</b></p>
      <p>Abstract: Lorem ipsum</p>
      <hr />
      <p>props:</p>
      <code>
        <p>hCount: 14</p>
        <p>hGap: 10px</p>
        <p>vGap: 10px</p>
        <p>breakpoints:</p>
        <ul>
          <li>s: 576</li>
          <li>m: 768</li>
          <li>l: 992</li>
          <li>xl: 1200</li>
        </ul>
        <p>scopeCSSTo: &ldquo;#grid-12-col-demo&rdquo;</p>
        <p>classPrefix: &ldquo;custom&rdquo;</p>
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
        minifyCSS={false}
        scopeCSSTo="#grid-demo-3"
        classPrefix="custom"
      >
        <div style={{ border: '1px solid' }}>
          <Grid>
            <Cell
              hSpan={4}
              style={{ backgroundColor: 'lightgreen' }}
            >
              <p>hi</p>
            </Cell>
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'lightgreen' }}
            >
              <Grid disableHGap>
                <Cell
                  hSpan={5}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
                <Cell
                  hSpan={5}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
              </Grid>
            </Cell>

            <Cell
              hSpan={4}
              style={{ backgroundColor: 'lightgreen' }}
            >
              <p>hi</p>
            </Cell>
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'lightgreen' }}
            >
              <Grid>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <p>hi</p>
                </Cell>
              </Grid>
            </Cell>
          </Grid>
        </div>
      </GridProvider>
    </div>
  );
};

export default GridDemo3;
