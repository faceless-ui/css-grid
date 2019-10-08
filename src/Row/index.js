import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';
import StyledRow from './css';

const Row = (props) => {
  const {
    children,
    htmlElement,
  } = props;

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const {
          numberOfColumns,
          gutterSize,
        } = gridContext;

        return (
          <StyledRow
            className="row"
            as={htmlElement}
            propsForStyler={{
              numberOfColumns,
              gutterSize,
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
  htmlElement: 'div',
};

Row.propTypes = {
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
