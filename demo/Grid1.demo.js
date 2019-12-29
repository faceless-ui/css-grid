import React from 'react';
import { Grid, Cell, GridProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const GridDemo1 = () => (
  <div id="grid-demo-1">
    <pre style={{ marginTop: '0px' }}>
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
    <div style={{ position: 'relative' }}>
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
        <div>
          <Grid
            className="custom-grid-class"
            id="custom-grid-id"
          >
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'aqua' }}
              className="custom-cell-class"
              id="custom-cell-id"
            >
              <Grid>
                <Cell
                  hSpan={5}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>nested hSpan: 5</code></pre>
                </Cell>
                <Cell
                  hSpan={5}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>nested hSpan: 5</code></pre>
                </Cell>
              </Grid>
            </Cell>
            <Cell
              hSpan={4}
              hSpanL={12}
              hSpanM={14}
              hSpanS={6}
              style={{ backgroundColor: 'aqua' }}
            >
              <pre>
                <code>
                    hSpan: 4
                  <br />
                    hSpanL: 12
                  <br />
                    hSpanM: 14
                  <br />
                    hSpanS: 6
                </code>
              </pre>
            </Cell>
          </Grid>
        </div>

        <hr />

        <div>
          <Grid>
            <Cell
              hSpan={8}
              style={{ backgroundColor: 'aqua' }}
            >
              <Grid>
                <Cell
                  hSpan={4}
                  hStart={4}
                  hSpanL={5}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre>
                    <code>
                        hSpan: 4
                      <br />
                        hSpanL: 5
                      <br />
                        hStart: 4
                    </code>
                  </pre>
                </Cell>
              </Grid>
            </Cell>
            <Cell
              hSpan={6}
              htmlElement="section"
              style={{ backgroundColor: 'aqua' }}
            >
              <pre><code>{'hSpan: 6 as <section>'}</code></pre>
            </Cell>
            <Cell
              hSpan={10}
              style={{ backgroundColor: 'aqua' }}
            >
              <pre><code>hSpan: 10</code></pre>
            </Cell>
            <Cell
              hSpan={10}
              hSpanM={14}
              style={{ gridRowStart: '1', backgroundColor: 'aqua' }}
            >
              <pre>
                <code>
                    hSpan: 10
                  <br />
                    hSpanM: 14
                  <br />
                    vStart: 1 (via inline style)
                </code>
              </pre>
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

export default GridDemo1;
