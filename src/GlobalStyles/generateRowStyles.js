import scopeCSSToSelector from './scopeCSSToSelector';

const generateRowStyles = (hCount, columnGap, rowGap, breakpoints, scopeCSSTo) => {
  const hCols = [...Array(hCount).keys()];
  const breakpointKeys = Object.keys(breakpoints).reverse(); // reverse for specificity

  let rowStyles = '';

  rowStyles += scopeCSSToSelector(scopeCSSTo, `
    .trbl__row {
      display: grid;
      ${rowGap ? `row-gap: ${rowGap}` : null};
    }`);

  hCols.forEach((hCol, index) => {
    const gutter = columnGap === 'columnWidth'
      ? `calc(100% * ( 1 / (${index + 1} * 2)))`
      : columnGap;

    rowStyles += scopeCSSToSelector(scopeCSSTo,
      `.trbl__row--hcount-${index + 1} {
        grid-template-columns: repeat(${index + 1}, 1fr);
        column-gap: ${gutter};
      }`);
  });

  breakpointKeys.forEach((breakpointName) => {
    rowStyles += `
      @media (max-width: ${breakpoints[breakpointName]}px) {
        ${hCols.map((hCol, index) => scopeCSSToSelector(scopeCSSTo, `
          .trbl__row--hcount-${breakpointName}-${index + 1} {
            grid-template-columns: repeat(${index + 1}, 1fr);
            column-gap: ${columnGap === 'columnWidth' ? `calc(100% * ( 1 / (${index + 1} * 2)))` : columnGap};
          }`)).join(' ')}
      }
    `;
  });

  return rowStyles;
};

export default generateRowStyles;
