'use client'

import React, {
  useContext,
  createContext,
  forwardRef,
  HTMLProps,
} from 'react';
import { useCell } from '../Cell';
import { useSettings } from '../Settings';
import { ElementType } from 'react';
import { Columns } from '../Settings/types';

export interface IGrid {
  cols: Columns
}

export interface GridProps extends HTMLProps<HTMLElement> {
  htmlElement?: ElementType
  ref?: React.Ref<HTMLElement>
  children: React.ReactNode
}

const Context = createContext<IGrid>({
  cols: {
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
  },
});

export const useGrid = (): IGrid => useContext(Context);

const Grid: React.FC<GridProps> = forwardRef<HTMLElement, GridProps>((props, ref) => {
  const {
    children,
    htmlElement: Tag = 'div',
    className,
    ...rest
  } = props;

  const containingCell = useCell();
  const settings = useSettings();

  const { classPrefix } = settings;

  const value: IGrid = {
    cols: {
      xl: containingCell?.cols?.xl || settings.cols.xl,
      l: containingCell?.cols?.l || settings.cols.l,
      m: containingCell?.cols?.m || settings.cols.m,
      s: containingCell?.cols?.s || settings.cols.s,
    },
  };

  return (
    <Context.Provider value={value}>
      <Tag
        ref={ref}
        className={[
          className,
          `${classPrefix}__grid`,
          `${classPrefix}__grid--xl-cols-${value.cols.xl}`,
          `${classPrefix}__grid--l-cols-${value.cols.l}`,
          `${classPrefix}__grid--m-cols-${value.cols.m}`,
          `${classPrefix}__grid--s-cols-${value.cols.s}`,
        ].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </Tag>
    </Context.Provider>
  );
});

Grid.displayName = 'Grid';

export default Grid;
