import scopeCSSToSelector from './scopeCSSToSelector';

const generateRowStyles = (numberOfColumns, columnGap, rowGap, ScopeTo) => {
  const columns = [...Array(numberOfColumns).keys()];

  let rowStyles = scopeCSSToSelector(ScopeTo, `
    .trbl__row {
      display: grid;
      ${rowGap ? `row-gap: ${rowGap}` : null};
    }`);

  columns.forEach((column, index) => {
    const hCount = index + 1;
    const gutter = columnGap === 'columnWidth'
      ? `calc(100% * ( 1 / (${hCount} * 2)))`
      : columnGap;

    rowStyles += scopeCSSToSelector(ScopeTo,
      `.trbl__row--hcount-${hCount} {
        grid-template-columns: repeat(${hCount}, 1fr);
        column-gap: ${gutter};
      }`);
  });

  return rowStyles;
};

export default generateRowStyles;
