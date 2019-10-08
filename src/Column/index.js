import React from 'react';
import PropTypes from 'prop-types';

import GridContext from '../GridProvider/context';
import GridProvider from '../GridProvider';

const Column = (props) => {
  const {
    span,
    startOn,
    children,
    style,
  } = props;

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const columnStyles = startOn
          ? {
            gridColumnStart: startOn,
            gridColumnEnd: `span ${span}`,
          }
          : {
            gridColumn: `span ${span}`,
          };

        return (
          <GridProvider numberOfColumns={span} gutterSize={gridContext.gutterSize}>
            <div
              className="column"
              style={{
                ...columnStyles,
                ...style,
              }}
            >
              {children}
            </div>
          </GridProvider>
        );
      }}
    </GridContext.Consumer>
  );
};

Column.defaultProps = {
  span: undefined,
  style: {},
  startOn: undefined,
};

Column.propTypes = {
  span: PropTypes.number,
  startOn: PropTypes.number,
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

export default Column;
