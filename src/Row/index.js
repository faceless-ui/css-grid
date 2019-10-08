import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';

const Row = (props) => {
  const { children } = props;

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const { numberOfColumns, gutterSize } = gridContext;

        return (
          <div
            className="row"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
              columnGap: gutterSize === 'columnWidth'
                ? `calc(100% * ( 1 / (${numberOfColumns} * 2)))`
                : gutterSize,
            }}
          >
            {children}
          </div>
        );
      }}
    </GridContext.Consumer>
  );
};


Row.defaultProps = {};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
};

export default Row;
