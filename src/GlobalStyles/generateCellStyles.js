import scopeCSSToSelector from './scopeCSSToSelector';
import baseClass from '../Cell/baseClass';

const formatColumnCSS = (index, breakpointName) => {
  const hCount = index + 1;
  const spanClassName = `.${baseClass}--span-${breakpointName ? `${breakpointName}-` : ''}${hCount}`;
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

const generateCellStyles = (hCount, breakpoints, scopeTo) => {
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

export default generateCellStyles;
