import React from 'react';
import { Grid, Cell, GridProvider } from '../src';

const GridDemo3 = () => {
  return (
    <div id="grid-demo-3">
      <p><b>14 column grid grid with custom class name</b></p>
      <p>Abstract: Lorem ipsum</p>
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
          scopeCSSTo: #grid-demo-3
          <br />
          classPrefix: abcde
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
        minifyCSS={false}
        scopeCSSTo="#grid-demo-3"
        classPrefix="abcde"
      >
        <div style={{ border: '1px solid' }}>
          <Grid>
            <Cell
              hSpan={4}
              style={{ backgroundColor: 'aquamarine' }}
            >
              <p>hi</p>
            </Cell>
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'aquamarine' }}
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
              style={{ backgroundColor: 'aquamarine' }}
            >
              <p>hi</p>
            </Cell>
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'aquamarine' }}
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
