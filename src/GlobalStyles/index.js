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
    classPrefix,
  } = props;

  const gridStyles = generateGridStyles(classPrefix, hCount, hGap, vGap, breakpoints, scopeCSSTo);
  const cellStyles = generateCellStyles(classPrefix, hCount, breakpoints, scopeCSSTo);
  const styles = gridStyles.concat(cellStyles);

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
  classPrefix: '',
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
  classPrefix: PropTypes.string,
};

export default GlobalStyles;
