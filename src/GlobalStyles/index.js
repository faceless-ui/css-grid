import React from 'react';
import PropTypes from 'prop-types';
import minifyCssString from 'minify-css-string';
import generateGridStyles from './generateGridStyles';
import generateCellStyles from './generateCellStyles';

const GlobalStyles = (props) => {
  const {
    hCount,
    hGap,
    vGap,
    breakpoints,
    scopeCSSTo,
    minifyCSS,
  } = props;

  const rowStyles = generateGridStyles(hCount, hGap, vGap, breakpoints, scopeCSSTo);
  const columnStyles = generateCellStyles(hCount, breakpoints, scopeCSSTo);
  const styles = rowStyles.concat(columnStyles);

  return (
    <style dangerouslySetInnerHTML={{ __html: minifyCSS ? minifyCssString(styles) : styles }} />
  );
};

GlobalStyles.defaultProps = {
  hGap: '0px',
  vGap: '0px',
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
  hGap: PropTypes.string,
  vGap: PropTypes.string,
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
