import React from 'react';
import { Grid, Cell, GridProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const GridDemo3 = () => (
  <div id="grid-demo-3">
    <pre style={{ marginTop: '0px' }}>
      <code>
        hCount: 8
        <br />
        hGap: 2vw
        <br />
        vGap: 1rem
        <br />
        {'breakpoints: {'}
        <br />
        &emsp;xs: 375
        <br />
        &emsp;s: 600
        <br />
        &emsp;m: 720
        <br />
        &emsp;l: 1080
        <br />
        &emsp;xl: 1390
        <br />
        {'}'}
        <br />
        scopeCSSTo: #grid-demo-3
        <br />
        classPrefix: abcde
      </code>
    </pre>
    <div style={{ position: 'relative' }}>
      <GridProvider
        hCount={8}
        hGap="2vw"
        vGap="1rem"
        breakpoints={{
          xs: 375,
          s: 600,
          m: 720,
          l: 1080,
          xl: 1390,
        }}
        minifyCSS={false}
        scopeCSSTo="#grid-demo-3"
        classPrefix="abcde"
      >
        <div>
          <Grid
            id="testIDProp"
            className="testClassNameProp"
            htmlAttributes={{
              id: 'testIDAttribute',
              className: 'testClassNameAttribute',
              'aria-label': 'this is a test aria label attribute',
              'data-test': 'this is a test data attribute',
            }}
          >
            <Cell
              id="testIDProp"
              className="testClassNameProp"
              hSpan={4}
              hSpanM={8}
              style={{ backgroundColor: 'aquamarine' }}
              htmlAttributes={{
                id: 'testIDAttribute',
                className: 'testClassNameAttribute',
                'aria-label': 'this is a test aria label attribute',
                'data-test': 'this is a test data attribute',
                style: {
                  color: 'red',
                },
              }}
            >
              <pre>
                <code>
                  hSpan: 4
                  <br />
                  hSpanM: 8
                </code>
              </pre>
            </Cell>

            <Cell
              hSpan={4}
              style={{ backgroundColor: 'aquamarine' }}
            >
              <Grid disableHGap>
                <Cell
                  hSpan={4}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>nested hSpan: 4</code></pre>
                </Cell>
                <Cell
                  hSpan={3}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>nested hSpan: 3</code></pre>
                </Cell>
              </Grid>
            </Cell>

            <Cell
              hSpan={3}
              style={{ backgroundColor: 'aquamarine' }}
            >
              <pre><code>hSpan: 3</code></pre>
            </Cell>
            <Cell
              hSpan={5}
              style={{ backgroundColor: 'aquamarine' }}
            >
              <Grid>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>hSpan: 1</code></pre>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>hSpan: 1</code></pre>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>hSpan: 1</code></pre>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>hSpan: 1</code></pre>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>hSpan: 1</code></pre>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>hSpan: 1</code></pre>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>hSpan: 1</code></pre>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>hSpan: 1</code></pre>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>hSpan: 1</code></pre>
                </Cell>
                <Cell
                  hSpan={1}
                  style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                >
                  <pre><code>hSpan: 1</code></pre>
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
          </Grid>
        </div>
      </GridProvider>
    </div>
  </div>
);

export default GridDemo3;
