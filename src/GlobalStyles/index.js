import React from 'react';
import PropTypes from 'prop-types';
import minifyCssString from 'minify-css-string';
import generateRowStyles from './generateRowStyles';
import generateColumnStyles from './generateColumnStyles';

const GlobalStyles = (props) => {
  const {
    hCount,
    columnGap,
    rowGap,
    breakpoints,
    scopeCSSTo,
    minifyCSS,
  } = props;

  const rowStyles = generateRowStyles(hCount, columnGap, rowGap, breakpoints, scopeCSSTo);
  const columnStyles = generateColumnStyles(hCount, breakpoints, scopeCSSTo);
  const styles = rowStyles.concat(columnStyles);

  return (
    <style dangerouslySetInnerHTML={{ __html: minifyCSS ? minifyCssString(styles) : styles }} />
  );
};

GlobalStyles.defaultProps = {
  columnGap: '0px',
  rowGap: '0px',
  breakpoints: {
    xs: 350,
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
  },
  scopeCSSTo: '',
  minifyCSS: true,
};

GlobalStyles.propTypes = {
  hCount: PropTypes.number.isRequired,
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  breakpoints: PropTypes.shape({
    xs: PropTypes.number,
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
  scopeCSSTo: PropTypes.string,
  minifyCSS: PropTypes.bool,
};

export default GlobalStyles;
