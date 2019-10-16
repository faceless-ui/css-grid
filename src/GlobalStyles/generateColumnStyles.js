import scopeCSSToSelector from './scopeCSSToSelector';


const generateColumnStyles = (hCount, breakpoints, scopeTo) => {
  const hCols = [...Array(hCount).keys()];
  const breakpointKeys = Object.keys(breakpoints).reverse(); // reverse for specificity

  let columnStyles = '';

  hCols.forEach((hCol, index) => {
    columnStyles += scopeCSSToSelector(scopeTo, `
      .trbl__column--span-${index + 1}:not(.trbl__column--hstart) {
        grid-column-start: span ${index + 1};
      }

      .trbl__column--hstart-${index + 1} {
        grid-column-start: ${index + 1};
      }

      .trbl__column--hstart.trbl__column--span-${index + 1} {
        grid-column-end: span ${index + 1};
      }`);
  });

  // loop seperately for specifity and to minimize on @media definitions
  breakpointKeys.forEach((breakpointName) => {
    columnStyles += `
      @media (max-width: ${breakpoints[breakpointName]}px) {
        ${hCols.map((hCol, index) => scopeCSSToSelector(scopeTo, `
          .trbl__column--span-${breakpointName}-${index + 1}:not(.trbl__column--hstart) {
            grid-column-start: span ${index + 1};
          }

          .trbl__column--hstart-${breakpointName}-${index + 1} {
            grid-column-start: ${index + 1};
          }

          .trbl__column--hstart.trbl__column--span-${breakpointName}-${index + 1} {
            grid-column-end: span ${index + 1};
          }`)).join(' ')}}
    `;
  });

  return columnStyles;
};

export default generateColumnStyles;
