import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';
import GridProvider from '../GridProvider';

const Cell = (props) => {
  const {
    id,
    className,
    hSpan,
    hSpanXS,
    hSpanS,
    hSpanM,
    hSpanL,
    hSpanXL,
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

  const hCountOverrides = {
    xs: hSpanXS,
    s: hSpanS,
    m: hSpanM,
    l: hSpanL,
    xl: hSpanXL,
  };

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const {
          columnGap,
          rowGap,
          classPrefix,
        } = gridContext;

        const baseClass = `${classPrefix}__cell`;

        const classes = [
          baseClass,
          hSpan && `${baseClass}--hspan-${hSpan}`,
          hSpanXS && `${baseClass}--hspan-xs-${hSpanXS}`,
          hSpanS && `${baseClass}--hspan-s-${hSpanS}`,
          hSpanM && `${baseClass}--hspan-m-${hSpanM}`,
          hSpanL && `${baseClass}--hspan-l-${hSpanL}`,
          hSpanXL && `${baseClass}--hspan-xl-${hSpanXL}`,
          (hStart || hStartXS || hStartS || hStartM || hStartL || hStartXL) && `${baseClass}--hstart`,
          hStart && `${baseClass}--hstart-${hStart}`,
          hStartXS && `${baseClass}--hstart-xs-${hStartXS}`,
          hStartS && `${baseClass}--hstart-s-${hStartS}`,
          hStartM && `${baseClass}--hstart-m-${hStartM}`,
          hStartL && `${baseClass}--hstart-l-${hStartL}`,
          hStartXL && `${baseClass}--hstart-xl-${hStartXL}`,
          className,
        ].filter(Boolean).join(' ');

        return (
          <GridProvider
            hCount={hSpan}
            renderStyleSheet={false}
            {...{
              columnGap,
              rowGap,
              hCountOverrides,
              classPrefix,
            }}
          >
            <HtmlElement
              id={id}
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
  id: undefined,
  className: undefined,
  hSpan: undefined,
  hSpanXS: undefined,
  hSpanS: undefined,
  hSpanM: undefined,
  hSpanL: undefined,
  hSpanXL: undefined,
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
  id: PropTypes.string,
  className: PropTypes.string,
  hSpan: PropTypes.number,
  hSpanXS: PropTypes.number,
  hSpanS: PropTypes.number,
  hSpanM: PropTypes.number,
  hSpanL: PropTypes.number,
  hSpanXL: PropTypes.number,
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
