import React from 'react';
import PropTypes from 'prop-types';
import GridContext from './context';

const GridProvider = (props) => {
  const {
    numberOfColumns,
    columnGap,
    rowGap,
    children,
  } = props;

  const contextValue = {
    numberOfColumns,
    columnGap,
    rowGap,
  };

  return (
    <GridContext.Provider value={contextValue}>
      {children}
    </GridContext.Provider>
  );
};

GridProvider.defaultProps = {
  columnGap: '0px',
  rowGap: '0px',
};

GridProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  numberOfColumns: PropTypes.number.isRequired,
  columnGap: PropTypes.oneOfType([
    PropTypes.oneOf([
      'columnWidth',
    ]),
    PropTypes.string,
  ]),
  rowGap: PropTypes.string,
};

export default GridProvider;
