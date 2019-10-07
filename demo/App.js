import React from 'react';
import { Row, Column, GridProvider } from '../src';

// Testing may include:
// - Changing the `gutterSize` from "columnWidth" to a static dimension, i.e. 10px
// - Changing the numberOfColumns to various integers and adjusting the `span` props as necessary

const App = () => {
  return (
    <GridProvider numberOfColumns={14} gutterSize="10px">
      <Row>
        <Column span={4} style={{ backgroundColor: 'lightpink' }}>
          <Row>
            <Column span={2} style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}>
              <p>Nested Column</p>
            </Column>
            <Column span={2} style={{ backgroundColor: 'rgba(0, 0, 0, .15)'  }}>
              <p>Nested Column</p>
            </Column>
          </Row>
        </Column>
        <Column span={10} style={{ backgroundColor: 'lightpink' }}>
          <p>Column</p>
        </Column>
      </Row>
    </GridProvider>
  )
}

export default App;
