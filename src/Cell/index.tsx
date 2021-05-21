import React, { createContext, useContext } from 'react';
import { useWindowInfo } from '@faceless-ui/window-info';
import { useGrid } from '../Grid';
import { ICell, Props } from './types';

const Context = createContext<ICell | null>(null);
export const useCell = (): ICell | null => useContext(Context);

const Cell: React.FC<Props> = (props) => {
  const {
    children,
    cols,
    colsS,
    colsM,
    colsL,
    colsXL,
    rows = 1,
    start,
    startS,
    startM,
    startL,
    startXL,
    className,
    style,
    htmlElement = 'div',
  } = props;

  const { cols: colsAvailable } = useGrid();
  const { breakpoints } = useWindowInfo();

  let colsToSpan = colsAvailable;

  if (cols && cols < colsAvailable) colsToSpan = cols;
  if (colsXL && breakpoints?.xl) colsToSpan = colsXL;
  if (colsL && breakpoints?.l) colsToSpan = colsL;
  if (colsM && breakpoints?.m) colsToSpan = colsM;
  if (colsS && breakpoints?.s) colsToSpan = colsS;

  let colToStart = 0;

  if (start) colToStart = start;
  if (typeof startXL === 'number' && breakpoints?.xl) colToStart = startXL;
  if (typeof startL === 'number' && breakpoints?.l) colToStart = startL;
  if (typeof startM === 'number' && breakpoints?.m) colToStart = startM;
  if (typeof startS === 'number' && breakpoints?.s) colToStart = startS;

  const gridColumnStart = colToStart || undefined;

  const Tag = htmlElement as React.ElementType;

  return (
    <Tag
      className={className}
      style={{
        ...style || {},
        minWidth: 0,
        gridColumnStart,
        gridColumnEnd: `span ${colsToSpan}`,
      }}
    >
      <Context.Provider value={{ cols: colsToSpan, rows }}>
        {children}
      </Context.Provider>
    </Tag>
  );
};

export default Cell;
