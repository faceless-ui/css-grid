import React from 'react';
import GridContext from '../GridProvider/context';

const Row = (props) => {
  const { children, parentSpan } = props;
  return (
    <GridContext.Consumer>
      {gridContext => {
        const { numberOfColumns, gutterSize } = gridContext;

        return (
          <div
            className="row"
            style={{
              display: `grid`,
              gridTemplateColumns: `repeat(${parentSpan ? parentSpan : numberOfColumns}, 1fr)`,
              columnGap: gutterSize === 'columnWidth'
                ? `calc(100% * ( 1 / (${parentSpan ? parentSpan : numberOfColumns} * 2)))`
                : gutterSize
            }}
          >
            {children}
          </div>
        )
      }}
    </GridContext.Consumer>
  )
}

export default Row;
