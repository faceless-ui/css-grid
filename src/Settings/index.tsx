import React, { createContext, useContext } from 'react';
import { Settings, Props, Gaps, Columns } from './types';

const Context = createContext({
  classPrefix: 'grid',
  cols: {
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
  },
  colGap: {
    s: '10px',
    m: '10px',
    l: '10px',
    xl: '10px',
  },
  rowGap: {
    s: '10px',
    m: '10px',
    l: '10px',
    xl: '10px',
  },
  breakpoints: {
    s: 768,
    m: 1024,
    l: 1440,
  },
});

const getColGap = (colGap: Gaps, cols: Columns, size: 'xl' | 'l' | 'm' | 's'): string => {
  if (colGap[size] === 'columnWidth') {
    return `calc(100% * ( 1 / (${cols[size]} * 2)))`;
  }

  return colGap[size];
};

export const useSettings = (): Settings => useContext(Context);

const SettingsProvider: React.FC<Props> = (props) => {
  const {
    children,
    cols,
    colGap,
    rowGap,
    classPrefix = 'react-grid',
    breakpoints,
    breakpoints: {
      s: breakpointS,
      m: breakpointM,
      l: breakpointL,
    },
  } = props;

  const value: Settings = {
    classPrefix,
    cols,
    colGap,
    rowGap,
    breakpoints,
  };

  const colGapXL = getColGap(colGap, cols, 'xl');
  const colGapL = getColGap(colGap, cols, 'l');
  const colGapM = getColGap(colGap, cols, 'm');
  const colGapS = getColGap(colGap, cols, 's');

  const xlGridStyles = Array.from(Array(cols.xl).keys()).reduce((style, col) => `${style}.${classPrefix}__grid--xl-cols-${col + 1} { grid-template-columns: repeat(${col + 1}, 1fr); }`, `.${classPrefix}__grid { display: grid; column-gap: ${colGapXL}; row-gap: ${rowGap.xl}; }`);
  const lGridStyles = Array.from(Array(cols.l).keys()).reduce((style, col) => `${style}.${classPrefix}__grid--l-cols-${col + 1} { grid-template-columns: repeat(${col + 1}, 1fr); }`, `.${classPrefix}__grid { display: grid; column-gap: ${colGapL}; row-gap: ${rowGap.l}; } `);
  const mGridStyles = Array.from(Array(cols.m).keys()).reduce((style, col) => `${style}.${classPrefix}__grid--m-cols-${col + 1} { grid-template-columns: repeat(${col + 1}, 1fr); }`, `.${classPrefix}__grid { display: grid; column-gap: ${colGapM}; row-gap: ${rowGap.m}; } `);
  const sGridStyles = Array.from(Array(cols.s).keys()).reduce((style, col) => `${style}.${classPrefix}__grid--s-cols-${col + 1} { grid-template-columns: repeat(${col + 1}, 1fr); }`, `.${classPrefix}__grid { display: grid; column-gap: ${colGapS}; row-gap: ${rowGap.s}; } `);
  const xlCellStartStyles = Array.from(Array(cols.xl).keys()).reduce((style, col) => `${style}.${classPrefix}__cell--xl-col-start-${col + 1} { grid-column-start: ${col + 1}; }`, '');
  const lCellStartStyles = Array.from(Array(cols.l).keys()).reduce((style, col) => `${style}.${classPrefix}__cell--l-col-start-${col + 1} { grid-column-start: ${col + 1}; }`, '');
  const mCellStartStyles = Array.from(Array(cols.m).keys()).reduce((style, col) => `${style}.${classPrefix}__cell--m-col-start-${col + 1} { grid-column-start: ${col + 1}; }`, '');
  const sCellStartStyles = Array.from(Array(cols.s).keys()).reduce((style, col) => `${style}.${classPrefix}__cell--s-col-start-${col + 1} { grid-column-start: ${col + 1}; }`, '');
  const xlCellEndStyles = Array.from(Array(cols.xl).keys()).reduce((style, col) => `${style}.${classPrefix}__cell--xl-col-end-${col + 1} { grid-column-end: span ${col + 1}; }`, '');
  const lCellEndStyles = Array.from(Array(cols.l).keys()).reduce((style, col) => `${style}.${classPrefix}__cell--l-col-end-${col + 1} { grid-column-end: span ${col + 1}; }`, '');
  const mCellEndStyles = Array.from(Array(cols.m).keys()).reduce((style, col) => `${style}.${classPrefix}__cell--m-col-end-${col + 1} { grid-column-end: span ${col + 1}; }`, '');
  const sCellEndStyles = Array.from(Array(cols.s).keys()).reduce((style, col) => `${style}.${classPrefix}__cell--s-col-end-${col + 1} { grid-column-end: span ${col + 1}; }`, '');

  return (
    <Context.Provider value={value}>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `${xlGridStyles}${xlCellStartStyles}${xlCellEndStyles}

          @media (max-width: ${breakpointL}px) {
            ${lGridStyles}
            ${lCellStartStyles}
            ${lCellEndStyles}
          }

          @media (max-width: ${breakpointM}px) {
            ${mGridStyles}
            ${mCellStartStyles}
            ${mCellEndStyles}
          }

          @media (max-width: ${breakpointS}px) {
            ${sGridStyles}
            ${sCellStartStyles}
            ${sCellEndStyles}
          }

          .${classPrefix}__cell {
            min-width: 0;
          }
      `,
        }}
      />
      {children}
    </Context.Provider>
  );
};

export default SettingsProvider;
