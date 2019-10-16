import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';

const baseClass = 'trbl__row';

const Row = (props) => {
  const {
    className,
    children,
    htmlElement: HtmlElement,
  } = props;

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const {
          hCount,
          hCountOverrides: {
            xs, s, m, l, xl,
          } = {},
        } = gridContext;

        const classes = [
          className,
          baseClass,
          `${baseClass}--hcount-${hCount}`,
          xs && `${baseClass}--hcount-xs-${xs}`,
          s && `${baseClass}--hcount-s-${s}`,
          m && `${baseClass}--hcount-m-${m}`,
          l && `${baseClass}--hcount-l-${l}`,
          xl && `${baseClass}--hcount-xl-${xl}`,
        ].filter(Boolean).join(' ');

        return (
          <HtmlElement
            className={classes}
          >
            {children}
          </HtmlElement>
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
