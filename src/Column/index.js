import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';
import GridProvider from '../GridProvider';

const baseClass = 'trbl__column';

const Column = (props) => {
  const {
    className,
    span,
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
  style: {},
  hStart: undefined,
  vStart: undefined,
  htmlElement: 'div',
};

Column.propTypes = {
  className: PropTypes.string,
  span: PropTypes.number,
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
