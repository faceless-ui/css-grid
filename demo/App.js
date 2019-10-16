import React, { Fragment } from 'react';
import { Row, Column, GridProvider } from '../src';

// Testing may include:
// - Changing the `gutterSize` from "columnWidth" to a static dimension, i.e. 10px
// - Changing the hCount to various integers and adjusting the `span` props as necessary

const App = () => {
  return (
    <Fragment>
      <div
        id="grid-14-col-example"
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
          <p>column gutter: 10px</p>
          <p>row gutter: 10px</p>
          <p>scopeCSSTo: &ldquo;#grid-14-col-example&rdquo;</p>
        </code>
        <GridProvider
          hCount={14}
          columnGap="10px"
          rowGap="10px"
          breakpoints={{
            xs: 350,
            s: 576,
            m: 768,
            l: 992,
            xl: 1200,
          }}
          scopeCSSTo="#grid-14-col-example"
        >
          <div style={{ marginBottom: '10px', border: '1px solid' }}>
            <Row className="custom-row-class">
              <Column
                span={4}
                style={{ backgroundColor: 'lightpink' }}
                className="custom-column-class"
              >
                <Row>
                  <Column
                    span={2}
                    style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                  >
                    <p>Nested Span 2</p>
                  </Column>
                  <Column
                    span={2}
                    style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                  >
                    <p>Nested Span 2</p>
                  </Column>
                </Row>
              </Column>
              <Column
                span={10}
                style={{ backgroundColor: 'lightpink' }}
              >
                <p>Span 10</p>
              </Column>
            </Row>
          </div>

          <div style={{ border: '1px solid' }}>
            <Row>
              <Column
                span={8}
                style={{ backgroundColor: 'lightpink' }}
              >
                <Row>
                  <Column
                    span={4}
                    hStart={4}
                    style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                  >
                    <p>Start on horizontal line 5</p>
                  </Column>
                </Row>
              </Column>
              <Column
                span={6}
                htmlElement="section"
                style={{ backgroundColor: 'lightpink' }}
              >
                <p>Span 6 as Section</p>
              </Column>
              <Column
                span={10}
                style={{ backgroundColor: 'lightpink' }}
              >
                <p>Implicit column to show row gap</p>
              </Column>
              <Column
                span={10}
                vStart={1}
                style={{ backgroundColor: 'lightpink' }}
              >
                <p>Start on vertical line 1</p>
              </Column>
            </Row>
          </div>
        </GridProvider>
      </div>

      <div
        id="grid-12-col-example"
        style={{ border: '1px solid', padding: '10px' }}
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
          <p>column gutter: columnWidth</p>
          <p>row gutter: 10px</p>
          <p>scopeCSSTo: &ldquo;#grid-12-col-example&rdquo;</p>
        </code>
        <GridProvider
          hCount={12}
          columnGap="columnWidth"
          rowGap="10px"
          breakpoints={{
            xs: 350,
            s: 576,
            m: 768,
            l: 992,
            xl: 1200,
          }}
          minifyCSS={false}
          scopeCSSTo="#grid-12-col-example"
        >
          <div style={{ border: '1px solid', marginBottom: '10px' }}>
            <Row>
              <Column
                span={6}
                spanL={5}
                spanM={4}
                spanS={3}
                spanXS={2}
                style={{ backgroundColor: 'lightblue' }}
              >
                <p>span: 6</p>
                <p>spanL: 5</p>
                <p>spanM: 4</p>
                <p>spanS: 3</p>
                <p>spanXS: 2</p>
              </Column>
              <Column
                span={6}
                spanL={5}
                spanM={4}
                spanS={3}
                spanXS={2}
                style={{ backgroundColor: 'lightblue' }}
              >
                <p>span: 6</p>
                <p>spanL: 5</p>
                <p>spanM: 4</p>
                <p>spanS: 3</p>
                <p>spanXS: 2</p>
              </Column>
            </Row>
          </div>
          <div style={{ border: '1px solid', marginBottom: '10px' }}>
            <Row>
              <Column
                span={2}
                spanM={3}
                hStart={2}
                hStartS={11}
                style={{ backgroundColor: 'lightblue' }}
              >
                <p>span: 2</p>
                <p>spanM: 3</p>
                <p>hStart: 2</p>
                <p>hStartS: 11</p>
              </Column>
              <Column
                span={2}
                spanL={3}
                hStart={6}
                hStartM={7}
                style={{ backgroundColor: 'lightblue' }}
              >
                <Row>
                  <Column
                    span={2}
                    style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                  >
                    <Row>
                      <Column
                        span={1}
                        style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}
                      >
                        <p>test</p>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Row>
          </div>
          <div style={{ border: '1px solid' }}>
            <Row>
              <Column
                span={12}
                vStart={2}
                vStartM={1}
                style={{ backgroundColor: 'lightblue' }}
              >
                <p>first in DOM</p>
              </Column>
              <Column
                span={12}
                style={{ backgroundColor: 'lightblue' }}
              >
                <p>second in DOM</p>
              </Column>
              <Column
                span={12}
                style={{ backgroundColor: 'lightblue' }}
              >
                <p>third in DOM</p>
              </Column>
            </Row>
          </div>

        </GridProvider>
      </div>
    </Fragment>
  );
};

export default App;
