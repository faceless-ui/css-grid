import React from 'react';
import { Row, Column, GridProvider } from '../src';

// Testing may include:
// - Changing the `gutterSize` from "columnWidth" to a static dimension, i.e. 10px
// - Changing the numberOfColumns to various integers and adjusting the `span` props as necessary

const App = () => {
  return (
    <GridProvider numberOfColumns={14} gutterSize="10px">

      <div style={{ marginBottom: '50px' }}>
        <Row>
          <Column span={4} style={{ backgroundColor: 'lightpink' }}>
            <Row>
              <Column span={2} style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}>
                <p>Nested Span 2</p>
              </Column>
              <Column span={2} style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}>
                <p>Nested Span 2</p>
              </Column>
            </Row>
          </Column>
          <Column span={10} style={{ backgroundColor: 'lightpink' }}>
            <p>Span 10</p>
          </Column>
        </Row>
      </div>

      <div style={{ marginBottom: '50px' }}>
        <Row>
          <Column span={8} style={{ backgroundColor: 'lightpink' }}>
            <Row>
              <Column span={4} startOn={5} style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}>
                <p>Nested Span 4, Start on 5</p>
              </Column>
            </Row>
          </Column>
          <Column span={6} style={{ backgroundColor: 'lightpink' }}>
            <p>Span 6</p>
          </Column>
        </Row>
      </div>

    </GridProvider>
  );
};

export default App;
