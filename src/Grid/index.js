import React from 'react';
import PropTypes from 'prop-types';
import HTMLElement from '@trbl/react-html-element';
import GridContext from '../GridProvider/context';

const Grid = (props) => {
  const {
    id,
    className,
    style,
    htmlElement,
    htmlAttributes,
    children,
  } = props;

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const {
          hCount,
          hCountOverrides: {
            xs, s, m, l, xl,
          } = {},
          classPrefix,
        } = gridContext;

        const baseClass = `${classPrefix}__grid`;

        const mergedClasses = [
          baseClass,
          hCount && `${baseClass}--hcount-${hCount}`,
          xs && `${baseClass}--hcount-xs-${xs}`,
          s && `${baseClass}--hcount-s-${s}`,
          m && `${baseClass}--hcount-m-${m}`,
          l && `${baseClass}--hcount-l-${l}`,
          xl && `${baseClass}--hcount-xl-${xl}`,
          className,
        ].filter(Boolean).join(' ');

        return (
          <HTMLElement
            {...{
              id,
              className: mergedClasses,
              style,
              htmlElement,
              htmlAttributes,
            }}
          >
            {children && children}
          </HTMLElement>
        );
      }}
    </GridContext.Consumer>
  );
};

Grid.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'div',
  htmlAttributes: {},
  children: undefined,
};

Grid.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.string,
  htmlAttributes: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]),
};

export default Grid;
