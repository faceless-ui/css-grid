import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';

const Grid = (props) => {
  const {
    id,
    className,
    children,
    style,
    htmlElement: HtmlElement,
    htmlAttributes,
  } = props;

  const strippedHtmlAttributes = { ...htmlAttributes };
  delete strippedHtmlAttributes.id;
  delete strippedHtmlAttributes.className;
  delete strippedHtmlAttributes.style;

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

        const classes = [
          baseClass,
          hCount && `${baseClass}--hcount-${hCount}`,
          xs && `${baseClass}--hcount-xs-${xs}`,
          s && `${baseClass}--hcount-s-${s}`,
          m && `${baseClass}--hcount-m-${m}`,
          l && `${baseClass}--hcount-l-${l}`,
          xl && `${baseClass}--hcount-xl-${xl}`,
          className,
          htmlAttributes.className,
        ].filter(Boolean).join(' ');

        return (
          <HtmlElement
            id={id || htmlAttributes.id}
            className={classes}
            style={{
              ...style,
              ...htmlAttributes.style,
            }}
            {...strippedHtmlAttributes}
          >
            {children}
          </HtmlElement>
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
};

Grid.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.oneOf([
    'article',
    'aside',
    'div',
    'footer',
    'header',
    'main',
    'nav',
    'section',
    'span',
  ]),
  htmlAttributes: PropTypes.shape({
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
  }),
};

export default Grid;
