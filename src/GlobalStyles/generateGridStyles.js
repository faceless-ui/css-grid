import scopeCSSToSelector from './scopeCSSToSelector';
import baseClass from '../Grid/baseClass';

const formatRowCSS = (index, columnGap, breakpointName) => {
  const hCount = index + 1;
  const className = `.${baseClass}--hcount-${breakpointName ? `${breakpointName}-` : ''}${hCount}`;

  const gutter = columnGap === 'columnWidth'
    ? `calc(100% * ( 1 / (${index + 1} * 2)))`
    : columnGap;

  return (`
    ${className} {
      grid-template-columns: repeat(${hCount}, 1fr);
      column-gap: ${gutter};
    }`
  );
};

const generateGridStyles = (hCount, columnGap, rowGap, breakpoints, scopeCSSTo) => {
  const hCols = [...Array(hCount).keys()];
  const breakpointKeys = Object.keys(breakpoints).reverse(); // reverse for specificity
  let rowStyles = '';

  rowStyles += scopeCSSToSelector(scopeCSSTo, `
    .${baseClass} {
      display: grid;
      ${rowGap ? `row-gap: ${rowGap}` : null};
    }`);

  hCols.forEach((hCol, index) => {
    rowStyles += scopeCSSToSelector(scopeCSSTo, formatRowCSS(index, columnGap));
  });

  breakpointKeys.forEach((breakpointName) => {
    rowStyles += `
      @media (max-width: ${breakpoints[breakpointName]}px) {
        ${hCols.map((hCol, index) => scopeCSSToSelector(scopeCSSTo, formatRowCSS(index, columnGap, breakpointName))).join(' ')}
      }
    `;
  });

  return rowStyles;
};

export default generateGridStyles;
