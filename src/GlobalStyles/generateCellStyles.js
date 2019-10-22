import scopeCSSToSelector from './scopeCSSToSelector';

const formatColumnCSS = (baseClass, index, breakpointName) => {
  const hCount = index + 1;
  const spanClassName = `.${baseClass}--hspan-${breakpointName ? `${breakpointName}-` : ''}${hCount}`;
  const hStartClassName = `.${baseClass}--hstart-${breakpointName ? `${breakpointName}-` : ''}${hCount}`;

  return (`
    ${spanClassName}:not(.${baseClass}--hstart) {
      grid-column-start: span ${hCount};
    }

    ${hStartClassName} {
      grid-column-start: ${hCount};
    }

    .${baseClass}--hstart${spanClassName} {
      grid-column-end: span ${hCount};
    }`
  );
};

const generateCellStyles = (classPrefix, hCount, breakpoints, scopeTo) => {
  const hCols = [...Array(hCount).keys()];
  const breakpointKeys = Object.keys(breakpoints).reverse(); // reverse for specificity
  let columnStyles = '';

  const baseClass = `${classPrefix}__cell`;

  hCols.forEach((hCol, index) => {
    columnStyles += scopeCSSToSelector(scopeTo, formatColumnCSS(baseClass, index));
  });

  // loop seperately for specifity and to minimize on @media definitions
  breakpointKeys.forEach((breakpointName) => {
    columnStyles += `
      @media (max-width: ${breakpoints[breakpointName]}px) {
        ${hCols.map((hCol, index) => scopeCSSToSelector(scopeTo, formatColumnCSS(baseClass, index, breakpointName))).join(' ')}}
    `;
  });

  return columnStyles;
};

export default generateCellStyles;
