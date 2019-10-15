import React from 'react';
import PropTypes from 'prop-types';
import minifyCssString from 'minify-css-string';

const generateRowStyles = (numberOfColumns, columnGap, rowGap) => {
  const columns = [...Array(numberOfColumns).keys()];

  let rowStyles = `
    .trbl__row {
      display: grid;
      ${rowGap ? `row-gap: ${rowGap}` : null};
    }
  `;

  // const gutter = columnGap === 'columnWidth'
  //   ? `calc(100% * ( 1 / (${numberOfColumns} * 2)))`
  //   : columnGap;

  columns.forEach((column, index) => {
    const hCount = index + 1;
    rowStyles += `
      .trbl__row--hcount-${hCount} {
        grid-template-columns: repeat(${hCount}, 1fr);
      }
    `;
  });

  return minifyCssString(rowStyles);
};

// grid-template-columns: repeat(${numberOfColumns}, 1fr);
// column-gap: ${gutter};

const generateColumnStyles = (numberOfColumns) => {
  const columns = [...Array(numberOfColumns).keys()];

  let columnStyles = '';

  columns.forEach((column, index) => {
    const columnNumber = index + 1;
    columnStyles += `
      .trbl__column--span-${columnNumber}:not(.trbl__column--hstart) {
        grid-column-start: span ${columnNumber};
      }

      .trbl__column--hstart-${columnNumber} {
        grid-column-start: ${columnNumber};
      }

      .trbl__column--hstart.trbl__column--span-${columnNumber} {
        grid-column-end: span ${columnNumber};
      }
    `;
  });

  return minifyCssString(columnStyles);
};

const GlobalStyles = (props) => {
  const { numberOfColumns, columnGap, rowGap } = props;
  const columnStyles = generateColumnStyles(numberOfColumns);
  const rowStyles = generateRowStyles(numberOfColumns, columnGap, rowGap);

  return (
    <style dangerouslySetInnerHTML={{ __html: rowStyles.concat(columnStyles) }} />
  );
};

GlobalStyles.defaultProps = {
};

GlobalStyles.propTypes = {
  numberOfColumns: PropTypes.number.isRequired,
  columnGap: PropTypes.string.isRequired,
  rowGap: PropTypes.string.isRequired,
};

export default GlobalStyles;
