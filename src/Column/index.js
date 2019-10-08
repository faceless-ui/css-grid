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
    htmlElement,
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
              as={htmlElement}
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
  htmlElement: 'div',
};

Column.propTypes = {
  span: PropTypes.number,
  startOn: PropTypes.number,
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.oneOf([
    'div',
    'nav',
    'span',
    'section',
    'article',
  ]),
};

export default Column;
