import React from 'react';
import PropTypes from 'prop-types';

import GridContext from '../GridProvider/context';
import GridProvider from '../GridProvider';

import StyledColumn from './css';

const Column = (props) => {
  const {
    span,
    startOn,
    children,
    style,
  } = props;

  const propsForStyler = {
    startOn,
    span,
  };

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        return (
          <GridProvider numberOfColumns={span} gutterSize={gridContext.gutterSize}>
            <StyledColumn
              className="column"
              {...{
                style,
                propsForStyler,
              }}
            >
              {children}
            </StyledColumn>
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
