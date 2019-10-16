import scopeCSSToSelector from './scopeCSSToSelector';

const formatColumnCSS = (index, breakpointName) => {
  const hCount = index + 1;
  const spanClassName = `.trbl__column--span-${breakpointName ? `${breakpointName}-` : ''}${hCount}`;
  const hStartClassName = `.trbl__column--hstart-${breakpointName ? `${breakpointName}-` : ''}${hCount}`;

  return (`
    ${spanClassName}:not(.trbl__column--hstart) {
      grid-column-start: span ${hCount};
    }

    ${hStartClassName} {
      grid-column-start: ${hCount};
    }

    .trbl__column--hstart${spanClassName} {
      grid-column-end: span ${hCount};
    }`
  );
};

const generateColumnStyles = (hCount, breakpoints, scopeTo) => {
  const hCols = [...Array(hCount).keys()];
  const breakpointKeys = Object.keys(breakpoints).reverse(); // reverse for specificity
  let columnStyles = '';

  hCols.forEach((hCol, index) => {
    columnStyles += scopeCSSToSelector(scopeTo, formatColumnCSS(index));
  });

  // loop seperately for specifity and to minimize on @media definitions
  breakpointKeys.forEach((breakpointName) => {
    columnStyles += `
      @media (max-width: ${breakpoints[breakpointName]}px) {
        ${hCols.map((hCol, index) => scopeCSSToSelector(scopeTo, formatColumnCSS(index, breakpointName))).join(' ')}}
    `;
  });

  return columnStyles;
};

export default generateColumnStyles;
