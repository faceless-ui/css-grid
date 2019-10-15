import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';
import GridProvider from '../GridProvider';

const baseClass = 'trbl__column';

const Column = (props) => {
  const {
    className,
    span,
    spanXS,
    spanS,
    spanM,
    spanL,
    spanXL,
    vStart,
    hStart,
    children,
    style,
    htmlElement: HtmlElement,
  } = props;

  const classes = [
    baseClass,
    hStart && `${baseClass}--hstart ${baseClass}--hstart-${hStart}`,
    span && `${baseClass}--span-${span}`,
    spanXS && `${baseClass}--span-xs-${spanXS}`,
    spanS && `${baseClass}--span-s-${spanS}`,
    spanM && `${baseClass}--span-m-${spanM}`,
    spanL && `${baseClass}--span-l-${spanL}`,
    spanXL && `${baseClass}--span-xl-${spanXL}`,
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
            <HtmlElement
              className={classes}
              style={
                {
                  ...style,
                  gridRowStart: vStart,
                }
              }
            >
              {children}
            </HtmlElement>
          </GridProvider>
        );
      }}
    </GridContext.Consumer>
  );
};


Column.defaultProps = {
  className: '',
  span: undefined,
  spanXS: undefined,
  spanS: undefined,
  spanM: undefined,
  spanL: undefined,
  spanXL: undefined,
  style: {},
  hStart: undefined,
  vStart: undefined,
  htmlElement: 'div',
};

Column.propTypes = {
  className: PropTypes.string,
  span: PropTypes.number,
  spanXS: PropTypes.number,
  spanS: PropTypes.number,
  spanM: PropTypes.number,
  spanL: PropTypes.number,
  spanXL: PropTypes.number,
  hStart: PropTypes.number,
  vStart: PropTypes.number,
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
