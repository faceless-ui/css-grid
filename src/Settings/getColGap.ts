import { Gaps, Columns } from './types';

const getColGap = (
  colGap: Gaps,
  cols: Columns,
  size: 'xl' | 'l' | 'm' | 's',
): string => {
  if (cols && colGap) {
    if (size in cols && colGap[size] === 'columnWidth') {
      return `calc(100% * ( 1 / (${cols[size]} * 2)))`;
    }

    if (size in colGap) {
      return colGap[size];
    }
  }

  return '0px';
};

export default getColGap;
