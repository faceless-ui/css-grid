import React, {
  createContext,
  forwardRef,
  HTMLProps,
  useContext,
} from 'react';
import { useGrid } from '../Grid';
import { useSettings } from '../Settings';
import { ElementType } from 'react';
import { Columns } from '../Settings/types';

export interface ICell {
  cols?: Columns
}

export interface CellProps extends HTMLProps<HTMLElement> {
  cols?: number
  colsS?: number
  colsM?: number
  colsL?: number
  colsXL?: number
  rows?: number
  start?: number
  startS?: number
  startM?: number
  startL?: number
  startXL?: number
  htmlElement?: ElementType
  ref?: React.Ref<HTMLElement>
  children: React.ReactNode
}

const Context = createContext<ICell | null>(null);

export const useCell = (): ICell | null => useContext(Context);

const Cell: React.FC<CellProps> = forwardRef<HTMLElement, CellProps>((props, ref) => {
  const {
    children,
    cols,
    colsS,
    colsM,
    colsL,
    colsXL,
    start,
    startS,
    startM,
    startL,
    startXL,
    htmlElement: Tag = 'div',
    className,
    ...rest
  } = props;

  const { cols: colsAvailable } = useGrid();

  const {
    classPrefix,
    cols: colSettings
  } = useSettings();

  const colsToSpan = {
    s: colsS || colsM || colsL || cols || colsXL || colsAvailable.s,
    m: colsM || colsL || cols || colsXL || colsAvailable.m,
    l: colsL || cols || colsXL || colsAvailable.l,
    xl: cols || colsXL || colsAvailable.xl,
  };

  if (colsToSpan.l > colSettings.l) colsToSpan.l = colSettings.l;
  if (colsToSpan.m > colSettings.m) colsToSpan.m = colSettings.m;
  if (colsToSpan.s > colSettings.s) colsToSpan.s = colSettings.s;

  return (
    <Tag
      ref={ref}
      className={[
        className,
        `${classPrefix}__cell`,
        (start || startXL) && `${classPrefix}__cell--xl-col-start-${start || startXL}`,
        startL && `${classPrefix}__cell--l-col-start-${startL}`,
        startM && `${classPrefix}__cell--m-col-start-${startM}`,
        startS && `${classPrefix}__cell--s-col-start-${startS}`,
        `${classPrefix}__cell--xl-col-end-${cols || colsXL || colsAvailable.xl}`,
        `${classPrefix}__cell--l-col-end-${colsToSpan.l}`,
        `${classPrefix}__cell--m-col-end-${colsToSpan.m}`,
        `${classPrefix}__cell--s-col-end-${colsToSpan.s}`,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      <Context.Provider
        value={{
          cols: colsToSpan,
        }}
      >
        {children}
      </Context.Provider>
    </Tag>
  );
});

Cell.displayName = 'Cell';

export default Cell;
