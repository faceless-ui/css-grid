import React from 'react';
import PropTypes from 'prop-types';
import GridContext from './context';

const GridProvider = (props) => {
  const { numberOfColumns, gutterSize, children } = props;

  const contextObject = {
    numberOfColumns,
    gutterSize,
  };

  return (
    <GridContext.Provider value={contextObject}>
      {children}
    </GridContext.Provider>
  );
};

GridProvider.defaultProps = {
  gutterSize: '0px',
};

GridProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  numberOfColumns: PropTypes.number.isRequired,
  gutterSize: PropTypes.oneOfType([
    PropTypes.oneOf([
      'columnWidth',
    ]),
    PropTypes.string,
  ]),
};

export default GridProvider;
