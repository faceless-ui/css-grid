import React from 'react';
import { Grid, Cell, GridProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const GridDemo2 = () => {
  return (
    <div id="grid-demo-2">
      <pre style={{ marginTop: '0px' }}>
        <code>
          hCount: 12
          <br />
          hGap: columnWidth
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
          scopeCSSTo: #grid-12-col-demo
        </code>
      </pre>
      <div style={{ position: 'relative' }}>
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
          scopeCSSTo="#grid-demo-2"
        >
          <div>
            <Grid>
              <Cell
                hSpan={6}
                hSpanL={5}
                hSpanM={4}
                hSpanS={10}
                hSpanXS={12}
                style={{ backgroundColor: 'linen' }}
              >
                <pre>
                  <code>
                    hSpan: 6
                    <br />
                    hSpanL: 5
                    <br />
                    hSpanM: 4
                    <br />
                    hSpanS: 10
                    <br />
                    hSpanXS: 12
                  </code>
                </pre>
              </Cell>
              <Cell
                hSpan={6}
                hSpanL={5}
                hSpanM={4}
                hSpanS={10}
                hSpanXS={12}
                style={{ backgroundColor: 'linen' }}
              >
                <pre>
                  <code>
                    hSpan: 6
                    <br />
                    hSpanL: 5
                    <br />
                    hSpanM: 4
                    <br />
                    hSpanS: 10
                    <br />
                    hSpanXS: 12
                  </code>
                </pre>
              </Cell>
            </Grid>
          </div>

          <hr />

          <div>
            <Grid>
              <Cell
                hSpan={2}
                hSpanM={3}
                hStart={2}
                hStartS={11}
                style={{ backgroundColor: 'linen' }}
              >
                <pre>
                  <code>
                    hSpan: 2
                    <br />
                    hSpanM: 3
                    <br />
                    hStart: 2
                    <br />
                    hStartS: 11
                  </code>
                </pre>
              </Cell>
              <Cell
                hSpan={6}
                hSpanL={3}
                hStart={5}
                hStartM={7}
                style={{ backgroundColor: 'linen' }}
              >
                <Grid>
                  <Cell
                    hSpan={5}
                    style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                  >
                    <Grid>
                      <Cell
                        hSpan={4}
                        style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                      >
                        <pre><code>nested hSpan: 4</code></pre>
                      </Cell>
                    </Grid>
                  </Cell>
                </Grid>
              </Cell>
            </Grid>
          </div>

          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              bottom: '0',
              left: '0',
              pointerEvents: 'none',
              opacity: '.25',
            }}
          >
            <Grid style={{ height: '100%' }}>
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
              <Cell
                hSpan={1}
                style={{ border: '1px dashed black' }}
              />
            </Grid>
          </div>
        </GridProvider>
      </div>
    </div>
  );
};

export default GridDemo2;
