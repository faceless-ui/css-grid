import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';
import GridProvider from '../GridProvider';
import StyledColumn from './css';

const Column = (props) => {
  const {
    className,
    span,
    startOnVert,
    startOnHoriz,
    children,
    style,
    htmlElement,
  } = props;

  const propsForStyler = {
    startOnHoriz,
    startOnVert,
    span,
  };

  const classes = [
    'column',
    className,
  ].filter(Boolean).join(' ');

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const {
          columnGap,
          rowGap,
        } = gridContext;

        return (
          <GridProvider
            numberOfColumns={span}
            {...{
              columnGap,
              rowGap,
            }}
          >
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
  startOnHoriz: undefined,
  startOnVert: undefined,
  htmlElement: 'div',
};

Column.propTypes = {
  className: PropTypes.string,
  span: PropTypes.number,
  startOnHoriz: PropTypes.number,
  startOnVert: PropTypes.number,
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
