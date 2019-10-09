import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';
import GridProvider from '../GridProvider';
import StyledColumn from './css';

const Column = (props) => {
  const {
    className,
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

  const classes = [
    'column',
    className,
  ].filter(Boolean).join(' ');

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        return (
          <GridProvider numberOfColumns={span} gutterSize={gridContext.gutterSize}>
            <StyledColumn
              className={classes}
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
  className: '',
  span: undefined,
  style: {},
  startOn: undefined,
  htmlElement: 'div',
};

Column.propTypes = {
  className: PropTypes.string,
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
