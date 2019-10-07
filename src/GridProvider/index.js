import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridContext from './context';

class GridProvider extends Component {
  constructor() {
    super();
  }

  render() {
    const { numberOfColumns, gutterSize, children } = this.props;
    
    const contextObject = {
      numberOfColumns,
      gutterSize
    };

    return (
      <GridContext.Provider value={contextObject}>
        {children}
      </GridContext.Provider>
    );
  }
}

GridProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  numberOfColumns: PropTypes.number,
  gutterSize: PropTypes.oneOfType([
    PropTypes.oneOf([
      'columnWidth',
    ]),
    PropTypes.string,
  ]),
};

export default GridProvider;
