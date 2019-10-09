import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';
import StyledRow from './css';

const Row = (props) => {
  const {
    className,
    children,
    htmlElement,
  } = props;

  const classes = [
    'row',
    className,
  ].filter(Boolean).join(' ');

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const {
          numberOfColumns,
          columnGap,
          rowGap,
        } = gridContext;

        return (
          <StyledRow
            className={classes}
            as={htmlElement}
            propsForStyler={{
              numberOfColumns,
              columnGap,
              rowGap,
            }}
          >
            {children}
          </StyledRow>
        );
      }}
    </GridContext.Consumer>
  );
};


Row.defaultProps = {
  className: '',
  htmlElement: 'div',
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  htmlElement: PropTypes.oneOf([
    'div',
    'nav',
    'span',
    'section',
    'article',
  ]),
};

export default Row;
