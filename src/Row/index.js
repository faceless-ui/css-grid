import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';
import StyledRow from './css';

const Row = (props) => {
  const { children } = props;

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const { numberOfColumns, gutterSize } = gridContext;

        return (
          <StyledRow
            className="row"
            propsForStyler={{
              numberOfColumns,
              gutterSize,
            }}
          >
            {children}
          </StyledRow>
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
