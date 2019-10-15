import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GridContext from './context';
import GlobalStyles from './GlobalStyles';

const GridProvider = (props) => {
  const {
    numberOfColumns,
    columnGap,
    rowGap,
    children,
    renderGlobalCSS,
    mediaQueries,
  } = props;

  const contextValue = {
    numberOfColumns,
    columnGap,
    rowGap,
  };

  return (
    <Fragment>
      {renderGlobalCSS
        && (
          <GlobalStyles {...{ numberOfColumns, columnGap, rowGap }} />
        )
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
  mediaQueries: undefined,
  renderGlobalCSS: false,
};

GridProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  renderGlobalCSS: PropTypes.bool,
  numberOfColumns: PropTypes.number.isRequired,
  columnGap: PropTypes.oneOfType([
    PropTypes.oneOf([
      'columnWidth',
    ]),
    PropTypes.string,
  ]),
  rowGap: PropTypes.string,
  mediaQueries: PropTypes.shape({
    xs: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
};

export default GridProvider;
