import scopeCSSToSelector from './scopeCSSToSelector';
import baseClass from '../Grid/baseClass';

const formatRowCSS = (index, hGap, breakpointName) => {
  const hCount = index + 1;
  const className = `.${baseClass}--hcount-${breakpointName ? `${breakpointName}-` : ''}${hCount}`;

  const gutter = hGap === 'columnWidth'
    ? `calc(100% * ( 1 / (${index + 1} * 2)))`
    : hGap;

  return (`
    ${className} {
      grid-template-columns: repeat(${hCount}, 1fr);
      column-gap: ${gutter};
    }`
  );
};

const generateGridStyles = (hCount, hGap, vGap, breakpoints, scopeCSSTo) => {
  const hCols = [...Array(hCount).keys()];
  const breakpointKeys = Object.keys(breakpoints).reverse(); // reverse for specificity
  let rowStyles = '';

  rowStyles += scopeCSSToSelector(scopeCSSTo, `
    .${baseClass} {
      display: grid;
      ${vGap ? `row-gap: ${vGap}` : null};
    }`);

  hCols.forEach((hCol, index) => {
    rowStyles += scopeCSSToSelector(scopeCSSTo, formatRowCSS(index, hGap));
  });

  breakpointKeys.forEach((breakpointName) => {
    rowStyles += `
      @media (max-width: ${breakpoints[breakpointName]}px) {
        ${hCols.map((hCol, index) => scopeCSSToSelector(scopeCSSTo, formatRowCSS(index, hGap, breakpointName))).join(' ')}
      }
    `;
  });

  return rowStyles;
};

export default generateGridStyles;
