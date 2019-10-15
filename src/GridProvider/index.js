import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GridContext from './context';
import GlobalStyles from '../GlobalStyles';

const GridProvider = (props) => {
  const {
    numberOfColumns,
    columnGap,
    rowGap,
    children,
    renderStyleSheet,
    breakpoints,
    scopeCSSTo,
  } = props;

  const contextValue = {
    numberOfColumns,
    columnGap,
    rowGap,
  };

  return (
    <Fragment>
      {renderStyleSheet
        && <GlobalStyles {...{ numberOfColumns, columnGap, rowGap, breakpoints, scopeCSSTo }} />
      }
      <GridContext.Provider value={contextValue}>
        {children}
      </GridContext.Provider>
    </Fragment>
  );
};

GridProvider.defaultProps = {
  columnGap: '0px',
  rowGap: '0px',
  breakpoints: {
    xs: 350,
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
  },
  renderStyleSheet: true,
  scopeCSSTo: '',
  minifyCSS: true,
};

GridProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  renderStyleSheet: PropTypes.bool,
  numberOfColumns: PropTypes.number.isRequired,
  columnGap: PropTypes.oneOfType([
    PropTypes.oneOf([
      'columnWidth',
    ]),
    PropTypes.string,
  ]),
  rowGap: PropTypes.string,
  breakpoints: PropTypes.shape({
    xs: PropTypes.number,
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
  scopeCSSTo: PropTypes.string,
  minifyCSS: PropTypes.bool,
};

export default GridProvider;
