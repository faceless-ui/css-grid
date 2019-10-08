import React from 'react';
import PropTypes from 'prop-types';

import GridContext from '../GridProvider/context';
import GridProvider from '../GridProvider';

const Column = (props) => {
  const { span, children, style } = props;

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        return (
          <GridProvider numberOfColumns={span} gutterSize={gridContext.gutterSize}>
            <div
              className="column"
              style={{
                gridColumn: `span ${span}`,
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
};

Column.propTypes = {
  span: PropTypes.number,
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

export default Column;
