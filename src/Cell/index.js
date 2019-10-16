import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';
import GridProvider from '../GridProvider';
import baseClass from './baseClass';

const Cell = (props) => {
  const {
    className,
    span,
    spanXS,
    spanS,
    spanM,
    spanL,
    spanXL,
    hStart,
    hStartXS,
    hStartS,
    hStartM,
    hStartL,
    hStartXL,
    children,
    style,
    htmlElement: HtmlElement,
  } = props;

  const classes = [
    baseClass,
    span && `${baseClass}--span-${span}`,
    spanXS && `${baseClass}--span-xs-${spanXS}`,
    spanS && `${baseClass}--span-s-${spanS}`,
    spanM && `${baseClass}--span-m-${spanM}`,
    spanL && `${baseClass}--span-l-${spanL}`,
    spanXL && `${baseClass}--span-xl-${spanXL}`,
    (hStart || hStartXS || hStartS || hStartM || hStartL || hStartXL) && `${baseClass}--hstart`,
    hStart && `${baseClass}--hstart-${hStart}`,
    hStartXS && `${baseClass}--hstart-xs-${hStartXS}`,
    hStartS && `${baseClass}--hstart-s-${hStartS}`,
    hStartM && `${baseClass}--hstart-m-${hStartM}`,
    hStartL && `${baseClass}--hstart-l-${hStartL}`,
    hStartXL && `${baseClass}--hstart-xl-${hStartXL}`,
    className,
  ].filter(Boolean).join(' ');

  const hCountOverrides = {
    xs: spanXS,
    s: spanS,
    m: spanM,
    l: spanL,
    xl: spanXL,
  };

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const {
          columnGap,
          rowGap,
        } = gridContext;

        return (
          <GridProvider
            hCount={span}
            renderStyleSheet={false}
            {...{
              columnGap,
              rowGap,
              hCountOverrides,
            }}
          >
            <HtmlElement
              className={classes}
              style={{ ...style }}
            >
              {children}
            </HtmlElement>
          </GridProvider>
        );
      }}
    </GridContext.Consumer>
  );
};


Cell.defaultProps = {
  className: '',
  span: undefined,
  spanXS: undefined,
  spanS: undefined,
  spanM: undefined,
  spanL: undefined,
  spanXL: undefined,
  hStart: undefined,
  hStartXS: undefined,
  hStartS: undefined,
  hStartM: undefined,
  hStartL: undefined,
  hStartXL: undefined,
  style: {},
  htmlElement: 'div',
};

Cell.propTypes = {
  className: PropTypes.string,
  span: PropTypes.number,
  spanXS: PropTypes.number,
  spanS: PropTypes.number,
  spanM: PropTypes.number,
  spanL: PropTypes.number,
  spanXL: PropTypes.number,
  hStart: PropTypes.number,
  hStartXS: PropTypes.number,
  hStartS: PropTypes.number,
  hStartM: PropTypes.number,
  hStartL: PropTypes.number,
  hStartXL: PropTypes.number,
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

export default Cell;
