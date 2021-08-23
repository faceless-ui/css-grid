import React, { useContext, createContext } from 'react';
import { useCell } from '../Cell';
import { useSettings } from '../Settings';
import { IGrid, Props } from './types';

const Context = createContext<IGrid>({
  cols: {
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
  },
});

export const useGrid = (): IGrid => useContext(Context);

const Grid: React.FC<Props> = (props) => {
  const { children, className, style } = props;
  const containingCell = useCell();
  const settings = useSettings();

  const { classPrefix } = settings;

  const value: IGrid = {
    cols: {
      xl: containingCell?.cols.xl || settings.cols.xl,
      l: containingCell?.cols.l || settings.cols.l,
      m: containingCell?.cols.m || settings.cols.m,
      s: containingCell?.cols.s || settings.cols.s,
    },
  };

  return (
    <Context.Provider value={value}>
      <div
        className={[
          className,
          `${classPrefix}__grid`,
          `${classPrefix}__grid--xl-cols-${value.cols.xl}`,
          `${classPrefix}__grid--l-cols-${value.cols.l}`,
          `${classPrefix}__grid--m-cols-${value.cols.m}`,
          `${classPrefix}__grid--s-cols-${value.cols.s}`,
        ].filter(Boolean).join(' ')}
        style={style}
      >
        {children}
      </div>
    </Context.Provider>
  );
};

export default Grid;
